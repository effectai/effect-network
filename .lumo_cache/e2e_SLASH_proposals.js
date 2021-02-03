goog.provide("e2e.proposals");
e2e.proposals.owner_acc = e2e.token.owner_acc;
e2e.proposals.token_acc = eos_cljs.core.random_account.call(null,"tkn");
e2e.proposals.prop_acc = eos_cljs.core.random_account.call(null,"prop");
e2e.proposals.stake_acc = eos_cljs.core.random_account.call(null,"stk");
e2e.proposals.dao_acc = e2e.dao.dao_acc;
cljs.core.println.call(null,"prop acc = ",e2e.proposals.prop_acc);
cljs.core.println.call(null,"token acc = ",e2e.proposals.token_acc);
cljs.core.println.call(null,"stake acc = ",e2e.proposals.stake_acc);
e2e.proposals.first_cycle_start_time = (1608292800);
e2e.proposals.proposal_cost = "1.0000 EFX";
e2e.proposals.eos_tx_owner = (function e2e$proposals$eos_tx_owner(contr,action,args){
return eos_cljs.core.transact.call(null,contr,action,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),e2e.proposals.owner_acc,new cljs.core.Keyword(null,"permission","permission",(-511292572)),"active"], null)], null));
});
e2e.proposals.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals22 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals22 = (function (meta23){
this.meta23 = meta23;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals22.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24,meta23__$1){
var self__ = this;
var _24__$1 = this;
return (new e2e.proposals.t_e2e$proposals22(meta23__$1));
});

e2e.proposals.t_e2e$proposals22.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24){
var self__ = this;
var _24__$1 = this;
return self__.meta23;
});

e2e.proposals.t_e2e$proposals22.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals22.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_80){
var state_val_81 = (state_80[(1)]);
if((state_val_81 === (1))){
var inst_26 = eos_cljs.core.create_account.call(null,e2e.proposals.owner_acc,e2e.proposals.prop_acc);
var inst_27 = cljs.core.async.interop.p__GT_c.call(null,inst_26);
var state_80__$1 = state_80;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80__$1,(2),inst_27);
} else {
if((state_val_81 === (2))){
var inst_29 = (state_80[(7)]);
var inst_29__$1 = (state_80[(2)]);
var inst_30 = (inst_29__$1 instanceof cljs.core.ExceptionInfo);
var inst_31 = cljs.core.ex_data.call(null,inst_29__$1);
var inst_32 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_31);
var inst_33 = cljs.core._EQ_.call(null,inst_32,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_34 = ((inst_30) && (inst_33));
var state_80__$1 = (function (){var statearr_82 = state_80;
(statearr_82[(7)] = inst_29__$1);

return statearr_82;
})();
if(cljs.core.truth_(inst_34)){
var statearr_83_178 = state_80__$1;
(statearr_83_178[(1)] = (3));

} else {
var statearr_84_179 = state_80__$1;
(statearr_84_179[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (3))){
var inst_29 = (state_80[(7)]);
var inst_36 = (function(){throw inst_29})();
var state_80__$1 = state_80;
var statearr_85_180 = state_80__$1;
(statearr_85_180[(2)] = inst_36);

(statearr_85_180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (4))){
var inst_29 = (state_80[(7)]);
var state_80__$1 = state_80;
var statearr_86_181 = state_80__$1;
(statearr_86_181[(2)] = inst_29);

(statearr_86_181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (5))){
var inst_39 = (state_80[(2)]);
var inst_40 = eos_cljs.core.deploy.call(null,e2e.proposals.prop_acc,"contracts/effect-proposals/effect-proposals");
var inst_41 = cljs.core.async.interop.p__GT_c.call(null,inst_40);
var state_80__$1 = (function (){var statearr_87 = state_80;
(statearr_87[(8)] = inst_39);

return statearr_87;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80__$1,(6),inst_41);
} else {
if((state_val_81 === (6))){
var inst_43 = (state_80[(9)]);
var inst_43__$1 = (state_80[(2)]);
var inst_44 = (inst_43__$1 instanceof cljs.core.ExceptionInfo);
var inst_45 = cljs.core.ex_data.call(null,inst_43__$1);
var inst_46 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_45);
var inst_47 = cljs.core._EQ_.call(null,inst_46,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_48 = ((inst_44) && (inst_47));
var state_80__$1 = (function (){var statearr_88 = state_80;
(statearr_88[(9)] = inst_43__$1);

return statearr_88;
})();
if(cljs.core.truth_(inst_48)){
var statearr_89_182 = state_80__$1;
(statearr_89_182[(1)] = (7));

} else {
var statearr_90_183 = state_80__$1;
(statearr_90_183[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (7))){
var inst_43 = (state_80[(9)]);
var inst_50 = (function(){throw inst_43})();
var state_80__$1 = state_80;
var statearr_91_184 = state_80__$1;
(statearr_91_184[(2)] = inst_50);

(statearr_91_184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (8))){
var inst_43 = (state_80[(9)]);
var state_80__$1 = state_80;
var statearr_92_185 = state_80__$1;
(statearr_92_185[(2)] = inst_43);

(statearr_92_185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_81 === (9))){
var inst_53 = (state_80[(2)]);
var inst_54 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_56 = (new cljs.core.PersistentVector(null,(2),(5),inst_54,inst_55,null));
var inst_57 = e2e.token.deploy_token.call(null,e2e.proposals.token_acc,inst_56);
var state_80__$1 = (function (){var statearr_93 = state_80;
(statearr_93[(10)] = inst_53);

return statearr_93;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80__$1,(10),inst_57);
} else {
if((state_val_81 === (10))){
var inst_59 = (state_80[(2)]);
var inst_60 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62 = [e2e.proposals.owner_acc,"1056569.0000 EFX","37276.0000 NFX"];
var inst_63 = (new cljs.core.PersistentVector(null,(3),(5),inst_61,inst_62,null));
var inst_64 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65 = [e2e.proposals.token_acc,"606645.0000 EFX","24042.0000 NFX"];
var inst_66 = (new cljs.core.PersistentVector(null,(3),(5),inst_64,inst_65,null));
var inst_67 = [inst_63,inst_66];
var inst_68 = (new cljs.core.PersistentVector(null,(2),(5),inst_60,inst_67,null));
var inst_69 = e2e.stake.deploy_stake.call(null,e2e.proposals.stake_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_68);
var state_80__$1 = (function (){var statearr_94 = state_80;
(statearr_94[(11)] = inst_59);

return statearr_94;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80__$1,(11),inst_69);
} else {
if((state_val_81 === (11))){
var inst_71 = (state_80[(2)]);
var inst_72 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_74 = (new cljs.core.PersistentVector(null,(2),(5),inst_72,inst_73,null));
var inst_75 = e2e.dao.deploy_dao.call(null,e2e.proposals.dao_acc,e2e.proposals.stake_acc,e2e.proposals.prop_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_74);
var state_80__$1 = (function (){var statearr_95 = state_80;
(statearr_95[(12)] = inst_71);

return statearr_95;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80__$1,(12),inst_75);
} else {
if((state_val_81 === (12))){
var inst_77 = (state_80[(2)]);
var inst_78 = done.call(null);
var state_80__$1 = (function (){var statearr_96 = state_80;
(statearr_96[(13)] = inst_77);

return statearr_96;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80__$1,inst_78);
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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_97 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_97[(1)] = (1));

return statearr_97;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_80){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_80);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e98){var ex__18__auto__ = e98;
var statearr_99_186 = state_80;
(statearr_99_186[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_80[(4)]))){
var statearr_100_187 = state_80;
(statearr_100_187[(1)] = cljs.core.first.call(null,(state_80[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__188 = state_80;
state_80 = G__188;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_80){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_80);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_101 = f__20__auto__.call(null);
(statearr_101[(6)] = c__19__auto__);

return statearr_101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals22.prototype.apply = (function (self__,args25){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25)));
});

e2e.proposals.t_e2e$proposals22.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_156){
var state_val_157 = (state_156[(1)]);
if((state_val_157 === (1))){
var inst_102 = eos_cljs.core.create_account.call(null,e2e.proposals.owner_acc,e2e.proposals.prop_acc);
var inst_103 = cljs.core.async.interop.p__GT_c.call(null,inst_102);
var state_156__$1 = state_156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156__$1,(2),inst_103);
} else {
if((state_val_157 === (2))){
var inst_105 = (state_156[(7)]);
var inst_105__$1 = (state_156[(2)]);
var inst_106 = (inst_105__$1 instanceof cljs.core.ExceptionInfo);
var inst_107 = cljs.core.ex_data.call(null,inst_105__$1);
var inst_108 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_107);
var inst_109 = cljs.core._EQ_.call(null,inst_108,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_110 = ((inst_106) && (inst_109));
var state_156__$1 = (function (){var statearr_158 = state_156;
(statearr_158[(7)] = inst_105__$1);

return statearr_158;
})();
if(cljs.core.truth_(inst_110)){
var statearr_159_189 = state_156__$1;
(statearr_159_189[(1)] = (3));

} else {
var statearr_160_190 = state_156__$1;
(statearr_160_190[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (3))){
var inst_105 = (state_156[(7)]);
var inst_112 = (function(){throw inst_105})();
var state_156__$1 = state_156;
var statearr_161_191 = state_156__$1;
(statearr_161_191[(2)] = inst_112);

(statearr_161_191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (4))){
var inst_105 = (state_156[(7)]);
var state_156__$1 = state_156;
var statearr_162_192 = state_156__$1;
(statearr_162_192[(2)] = inst_105);

(statearr_162_192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (5))){
var inst_115 = (state_156[(2)]);
var inst_116 = eos_cljs.core.deploy.call(null,e2e.proposals.prop_acc,"contracts/effect-proposals/effect-proposals");
var inst_117 = cljs.core.async.interop.p__GT_c.call(null,inst_116);
var state_156__$1 = (function (){var statearr_163 = state_156;
(statearr_163[(8)] = inst_115);

return statearr_163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156__$1,(6),inst_117);
} else {
if((state_val_157 === (6))){
var inst_119 = (state_156[(9)]);
var inst_119__$1 = (state_156[(2)]);
var inst_120 = (inst_119__$1 instanceof cljs.core.ExceptionInfo);
var inst_121 = cljs.core.ex_data.call(null,inst_119__$1);
var inst_122 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_121);
var inst_123 = cljs.core._EQ_.call(null,inst_122,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_124 = ((inst_120) && (inst_123));
var state_156__$1 = (function (){var statearr_164 = state_156;
(statearr_164[(9)] = inst_119__$1);

return statearr_164;
})();
if(cljs.core.truth_(inst_124)){
var statearr_165_193 = state_156__$1;
(statearr_165_193[(1)] = (7));

} else {
var statearr_166_194 = state_156__$1;
(statearr_166_194[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (7))){
var inst_119 = (state_156[(9)]);
var inst_126 = (function(){throw inst_119})();
var state_156__$1 = state_156;
var statearr_167_195 = state_156__$1;
(statearr_167_195[(2)] = inst_126);

(statearr_167_195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (8))){
var inst_119 = (state_156[(9)]);
var state_156__$1 = state_156;
var statearr_168_196 = state_156__$1;
(statearr_168_196[(2)] = inst_119);

(statearr_168_196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_157 === (9))){
var inst_129 = (state_156[(2)]);
var inst_130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_132 = (new cljs.core.PersistentVector(null,(2),(5),inst_130,inst_131,null));
var inst_133 = e2e.token.deploy_token.call(null,e2e.proposals.token_acc,inst_132);
var state_156__$1 = (function (){var statearr_169 = state_156;
(statearr_169[(10)] = inst_129);

return statearr_169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156__$1,(10),inst_133);
} else {
if((state_val_157 === (10))){
var inst_135 = (state_156[(2)]);
var inst_136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_138 = [e2e.proposals.owner_acc,"1056569.0000 EFX","37276.0000 NFX"];
var inst_139 = (new cljs.core.PersistentVector(null,(3),(5),inst_137,inst_138,null));
var inst_140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_141 = [e2e.proposals.token_acc,"606645.0000 EFX","24042.0000 NFX"];
var inst_142 = (new cljs.core.PersistentVector(null,(3),(5),inst_140,inst_141,null));
var inst_143 = [inst_139,inst_142];
var inst_144 = (new cljs.core.PersistentVector(null,(2),(5),inst_136,inst_143,null));
var inst_145 = e2e.stake.deploy_stake.call(null,e2e.proposals.stake_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_144);
var state_156__$1 = (function (){var statearr_170 = state_156;
(statearr_170[(11)] = inst_135);

return statearr_170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156__$1,(11),inst_145);
} else {
if((state_val_157 === (11))){
var inst_147 = (state_156[(2)]);
var inst_148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_149 = [e2e.proposals.owner_acc,e2e.proposals.token_acc];
var inst_150 = (new cljs.core.PersistentVector(null,(2),(5),inst_148,inst_149,null));
var inst_151 = e2e.dao.deploy_dao.call(null,e2e.proposals.dao_acc,e2e.proposals.stake_acc,e2e.proposals.prop_acc,e2e.proposals.token_acc,"4,EFX","4,NFX",inst_150);
var state_156__$1 = (function (){var statearr_171 = state_156;
(statearr_171[(12)] = inst_147);

return statearr_171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156__$1,(12),inst_151);
} else {
if((state_val_157 === (12))){
var inst_153 = (state_156[(2)]);
var inst_154 = done.call(null);
var state_156__$1 = (function (){var statearr_172 = state_156;
(statearr_172[(13)] = inst_153);

return statearr_172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156__$1,inst_154);
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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_173[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_173[(1)] = (1));

return statearr_173;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_156){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e174){var ex__18__auto__ = e174;
var statearr_175_197 = state_156;
(statearr_175_197[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_156[(4)]))){
var statearr_176_198 = state_156;
(statearr_176_198[(1)] = cljs.core.first.call(null,(state_156[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__199 = state_156;
state_156 = G__199;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_156){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_177 = f__20__auto__.call(null);
(statearr_177[(6)] = c__19__auto__);

return statearr_177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals22.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23","meta23",(1325520591),null)], null);
});

e2e.proposals.t_e2e$proposals22.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals22.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals22";

e2e.proposals.t_e2e$proposals22.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals22");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals22.
 */
e2e.proposals.__GT_t_e2e$proposals22 = (function e2e$proposals$__GT_t_e2e$proposals22(meta23){
return (new e2e.proposals.t_e2e$proposals22(meta23));
});

}

return (new e2e.proposals.t_e2e$proposals22(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.proposals.prop_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1209600),new cljs.core.Keyword(null,"quorum","quorum",(-1933541141)),(12),new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(0),new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),e2e.proposals.proposal_cost,new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.proposals.token_acc], null),new cljs.core.Keyword(null,"dao_contract","dao_contract",(-366781739)),e2e.proposals.dao_acc,new cljs.core.Keyword(null,"first_cycle_start_time","first_cycle_start_time",(-611660854)),"2020-11-18 12:00:00"], null);
/**
 * Deploy a basic proposal account and fill it with data for testing
 */
e2e.proposals.deploy_proposals = (function e2e$proposals$deploy_proposals(acc){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_253){
var state_val_254 = (state_253[(1)]);
if((state_val_254 === (1))){
var state_253__$1 = state_253;
var statearr_255_287 = state_253__$1;
(statearr_255_287[(2)] = null);

(statearr_255_287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (2))){
var _ = (function (){var statearr_256 = state_253;
(statearr_256[(4)] = cljs.core.cons.call(null,(5),(state_253[(4)])));

return statearr_256;
})();
var inst_206 = eos_cljs.core.create_account.call(null,e2e.proposals.owner_acc,acc);
var inst_207 = cljs.core.async.interop.p__GT_c.call(null,inst_206);
var state_253__$1 = state_253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_253__$1,(6),inst_207);
} else {
if((state_val_254 === (3))){
var inst_251 = (state_253[(2)]);
var state_253__$1 = state_253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_253__$1,inst_251);
} else {
if((state_val_254 === (4))){
var inst_200 = (state_253[(2)]);
var state_253__$1 = state_253;
var statearr_258_288 = state_253__$1;
(statearr_258_288[(2)] = inst_200);

(statearr_258_288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (5))){
var _ = (function (){var statearr_259 = state_253;
(statearr_259[(4)] = cljs.core.rest.call(null,(state_253[(4)])));

return statearr_259;
})();
var state_253__$1 = state_253;
var ex257 = (state_253__$1[(2)]);
var statearr_260_289 = state_253__$1;
(statearr_260_289[(5)] = ex257);


if((ex257 instanceof Error)){
var statearr_261_290 = state_253__$1;
(statearr_261_290[(1)] = (4));

(statearr_261_290[(5)] = null);

} else {
throw ex257;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (6))){
var inst_209 = (state_253[(7)]);
var inst_209__$1 = (state_253[(2)]);
var inst_210 = (inst_209__$1 instanceof cljs.core.ExceptionInfo);
var inst_211 = cljs.core.ex_data.call(null,inst_209__$1);
var inst_212 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_211);
var inst_213 = cljs.core._EQ_.call(null,inst_212,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_214 = ((inst_210) && (inst_213));
var state_253__$1 = (function (){var statearr_262 = state_253;
(statearr_262[(7)] = inst_209__$1);

return statearr_262;
})();
if(cljs.core.truth_(inst_214)){
var statearr_263_291 = state_253__$1;
(statearr_263_291[(1)] = (7));

} else {
var statearr_264_292 = state_253__$1;
(statearr_264_292[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (7))){
var inst_209 = (state_253[(7)]);
var inst_216 = (function(){throw inst_209})();
var state_253__$1 = state_253;
var statearr_265_293 = state_253__$1;
(statearr_265_293[(2)] = inst_216);

(statearr_265_293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (8))){
var inst_209 = (state_253[(7)]);
var state_253__$1 = state_253;
var statearr_266_294 = state_253__$1;
(statearr_266_294[(2)] = inst_209);

(statearr_266_294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (9))){
var inst_219 = (state_253[(2)]);
var inst_220 = eos_cljs.core.deploy.call(null,acc,"contracts/effect-proposals/effect-proposals");
var inst_221 = cljs.core.async.interop.p__GT_c.call(null,inst_220);
var state_253__$1 = (function (){var statearr_267 = state_253;
(statearr_267[(8)] = inst_219);

return statearr_267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_253__$1,(10),inst_221);
} else {
if((state_val_254 === (10))){
var inst_223 = (state_253[(9)]);
var inst_223__$1 = (state_253[(2)]);
var inst_224 = (inst_223__$1 instanceof cljs.core.ExceptionInfo);
var inst_225 = cljs.core.ex_data.call(null,inst_223__$1);
var inst_226 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_225);
var inst_227 = cljs.core._EQ_.call(null,inst_226,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_228 = ((inst_224) && (inst_227));
var state_253__$1 = (function (){var statearr_268 = state_253;
(statearr_268[(9)] = inst_223__$1);

return statearr_268;
})();
if(cljs.core.truth_(inst_228)){
var statearr_269_295 = state_253__$1;
(statearr_269_295[(1)] = (11));

} else {
var statearr_270_296 = state_253__$1;
(statearr_270_296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (11))){
var inst_223 = (state_253[(9)]);
var inst_230 = (function(){throw inst_223})();
var state_253__$1 = state_253;
var statearr_271_297 = state_253__$1;
(statearr_271_297[(2)] = inst_230);

(statearr_271_297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (12))){
var inst_223 = (state_253[(9)]);
var state_253__$1 = state_253;
var statearr_272_298 = state_253__$1;
(statearr_272_298[(2)] = inst_223);

(statearr_272_298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (13))){
var inst_233 = (state_253[(2)]);
var inst_234 = eos_cljs.core.transact.call(null,acc,"init",e2e.proposals.prop_config);
var inst_235 = cljs.core.async.interop.p__GT_c.call(null,inst_234);
var state_253__$1 = (function (){var statearr_273 = state_253;
(statearr_273[(10)] = inst_233);

return statearr_273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_253__$1,(14),inst_235);
} else {
if((state_val_254 === (14))){
var inst_237 = (state_253[(11)]);
var inst_237__$1 = (state_253[(2)]);
var inst_238 = (inst_237__$1 instanceof cljs.core.ExceptionInfo);
var inst_239 = cljs.core.ex_data.call(null,inst_237__$1);
var inst_240 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_239);
var inst_241 = cljs.core._EQ_.call(null,inst_240,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_242 = ((inst_238) && (inst_241));
var state_253__$1 = (function (){var statearr_274 = state_253;
(statearr_274[(11)] = inst_237__$1);

return statearr_274;
})();
if(cljs.core.truth_(inst_242)){
var statearr_275_299 = state_253__$1;
(statearr_275_299[(1)] = (15));

} else {
var statearr_276_300 = state_253__$1;
(statearr_276_300[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (15))){
var inst_237 = (state_253[(11)]);
var inst_244 = (function(){throw inst_237})();
var state_253__$1 = state_253;
var statearr_277_301 = state_253__$1;
(statearr_277_301[(2)] = inst_244);

(statearr_277_301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (16))){
var inst_237 = (state_253[(11)]);
var state_253__$1 = state_253;
var statearr_278_302 = state_253__$1;
(statearr_278_302[(2)] = inst_237);

(statearr_278_302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_254 === (17))){
var inst_247 = (state_253[(2)]);
var inst_248 = cljs.core.print.call(null,"Deployed proposals");
var _ = (function (){var statearr_279 = state_253;
(statearr_279[(4)] = cljs.core.rest.call(null,(state_253[(4)])));

return statearr_279;
})();
var state_253__$1 = (function (){var statearr_280 = state_253;
(statearr_280[(12)] = inst_247);

return statearr_280;
})();
var statearr_281_303 = state_253__$1;
(statearr_281_303[(2)] = inst_248);

(statearr_281_303[(1)] = (3));


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
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var e2e$proposals$deploy_proposals_$_state_machine__15__auto__ = null;
var e2e$proposals$deploy_proposals_$_state_machine__15__auto____0 = (function (){
var statearr_282 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_282[(0)] = e2e$proposals$deploy_proposals_$_state_machine__15__auto__);

(statearr_282[(1)] = (1));

return statearr_282;
});
var e2e$proposals$deploy_proposals_$_state_machine__15__auto____1 = (function (state_253){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e283){var ex__18__auto__ = e283;
var statearr_284_304 = state_253;
(statearr_284_304[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_253[(4)]))){
var statearr_285_305 = state_253;
(statearr_285_305[(1)] = cljs.core.first.call(null,(state_253[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__306 = state_253;
state_253 = G__306;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$deploy_proposals_$_state_machine__15__auto__ = function(state_253){
switch(arguments.length){
case 0:
return e2e$proposals$deploy_proposals_$_state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$deploy_proposals_$_state_machine__15__auto____1.call(this,state_253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$deploy_proposals_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$deploy_proposals_$_state_machine__15__auto____0;
e2e$proposals$deploy_proposals_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$deploy_proposals_$_state_machine__15__auto____1;
return e2e$proposals$deploy_proposals_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_286 = f__20__auto__.call(null);
(statearr_286[(6)] = c__19__auto__);

return statearr_286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});
e2e.proposals.init = (function e2e$proposals$init(){
return cljs.test.test_var.call(null,e2e.proposals.init.cljs$lang$var);
});
e2e.proposals.init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals307 = (function (meta308){
this.meta308 = meta308;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309,meta308__$1){
var self__ = this;
var _309__$1 = this;
return (new e2e.proposals.t_e2e$proposals307(meta308__$1));
});

e2e.proposals.t_e2e$proposals307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309){
var self__ = this;
var _309__$1 = this;
return self__.meta308;
});

e2e.proposals.t_e2e$proposals307.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals307.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_598){
var state_val_599 = (state_598[(1)]);
if((state_val_599 === (32))){
var inst_416 = (state_598[(2)]);
var state_598__$1 = state_598;
var statearr_600_1211 = state_598__$1;
(statearr_600_1211[(2)] = inst_416);

(statearr_600_1211[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (64))){
var inst_528 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_529 = true;
var inst_530 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init",inst_529,true];
var inst_531 = cljs.core.PersistentHashMap.fromArrays(inst_528,inst_530);
var inst_532 = cljs.test.do_report.call(null,inst_531);
var state_598__$1 = state_598;
var statearr_601_1212 = state_598__$1;
(statearr_601_1212[(2)] = inst_532);

(statearr_601_1212[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (1))){
var state_598__$1 = state_598;
var statearr_602_1213 = state_598__$1;
(statearr_602_1213[(2)] = null);

(statearr_602_1213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (33))){
var inst_399 = (state_598[(2)]);
var inst_400 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_401 = null;
var inst_402 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_401,inst_399];
var inst_403 = cljs.core.PersistentHashMap.fromArrays(inst_400,inst_402);
var inst_404 = cljs.test.do_report.call(null,inst_403);
var state_598__$1 = state_598;
var statearr_603_1214 = state_598__$1;
(statearr_603_1214[(2)] = inst_404);

(statearr_603_1214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (65))){
var inst_534 = (state_598[(2)]);
var _ = (function (){var statearr_605 = state_598;
(statearr_605[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_605;
})();
var state_598__$1 = (function (){var statearr_606 = state_598;
(statearr_606[(7)] = inst_534);

return statearr_606;
})();
var statearr_607_1215 = state_598__$1;
(statearr_607_1215[(2)] = true);

(statearr_607_1215[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (2))){
var _ = (function (){var statearr_608 = state_598;
(statearr_608[(4)] = cljs.core.cons.call(null,(5),(state_598[(4)])));

return statearr_608;
})();
var state_598__$1 = state_598;
var statearr_609_1216 = state_598__$1;
(statearr_609_1216[(2)] = null);

(statearr_609_1216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (34))){
var _ = (function (){var statearr_610 = state_598;
(statearr_610[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_610;
})();
var state_598__$1 = state_598;
var ex604 = (state_598__$1[(2)]);
var statearr_611_1217 = state_598__$1;
(statearr_611_1217[(5)] = ex604);


var statearr_612_1218 = state_598__$1;
(statearr_612_1218[(1)] = (33));

(statearr_612_1218[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (66))){
var inst_544 = (state_598[(8)]);
var inst_544__$1 = (state_598[(2)]);
var inst_545 = (inst_544__$1 instanceof cljs.core.ExceptionInfo);
var inst_546 = cljs.core.ex_data.call(null,inst_544__$1);
var inst_547 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_546);
var inst_548 = cljs.core._EQ_.call(null,inst_547,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_549 = ((inst_545) && (inst_548));
var state_598__$1 = (function (){var statearr_614 = state_598;
(statearr_614[(8)] = inst_544__$1);

return statearr_614;
})();
if(cljs.core.truth_(inst_549)){
var statearr_615_1219 = state_598__$1;
(statearr_615_1219[(1)] = (67));

} else {
var statearr_616_1220 = state_598__$1;
(statearr_616_1220[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (3))){
var inst_595 = (state_598[(2)]);
var inst_596 = done.call(null);
var state_598__$1 = (function (){var statearr_617 = state_598;
(statearr_617[(9)] = inst_595);

return statearr_617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_598__$1,inst_596);
} else {
if((state_val_599 === (35))){
var _ = (function (){var statearr_618 = state_598;
(statearr_618[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_618;
})();
var state_598__$1 = state_598;
var ex613 = (state_598__$1[(2)]);
var statearr_619_1221 = state_598__$1;
(statearr_619_1221[(5)] = ex613);


if((ex613 instanceof Error)){
var statearr_620_1222 = state_598__$1;
(statearr_620_1222[(1)] = (30));

(statearr_620_1222[(5)] = null);

} else {
throw ex613;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (67))){
var inst_544 = (state_598[(8)]);
var inst_551 = (function(){throw inst_544})();
var state_598__$1 = state_598;
var statearr_621_1223 = state_598__$1;
(statearr_621_1223[(2)] = inst_551);

(statearr_621_1223[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (4))){
var inst_311 = (state_598[(2)]);
var inst_312 = cljs.core.prn.call(null,"======== ",inst_311);
var state_598__$1 = state_598;
var statearr_622_1224 = state_598__$1;
(statearr_622_1224[(2)] = inst_312);

(statearr_622_1224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (36))){
var inst_425 = (state_598[(10)]);
var inst_425__$1 = (state_598[(2)]);
var inst_426 = (inst_425__$1 instanceof cljs.core.ExceptionInfo);
var inst_427 = cljs.core.ex_data.call(null,inst_425__$1);
var inst_428 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_427);
var inst_429 = cljs.core._EQ_.call(null,inst_428,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_430 = ((inst_426) && (inst_429));
var state_598__$1 = (function (){var statearr_624 = state_598;
(statearr_624[(10)] = inst_425__$1);

return statearr_624;
})();
if(cljs.core.truth_(inst_430)){
var statearr_625_1225 = state_598__$1;
(statearr_625_1225[(1)] = (37));

} else {
var statearr_626_1226 = state_598__$1;
(statearr_626_1226[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (68))){
var inst_544 = (state_598[(8)]);
var state_598__$1 = state_598;
var statearr_627_1227 = state_598__$1;
(statearr_627_1227[(2)] = inst_544);

(statearr_627_1227[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (5))){
var _ = (function (){var statearr_628 = state_598;
(statearr_628[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_628;
})();
var state_598__$1 = state_598;
var ex623 = (state_598__$1[(2)]);
var statearr_629_1228 = state_598__$1;
(statearr_629_1228[(5)] = ex623);


if((ex623 instanceof Error)){
var statearr_630_1229 = state_598__$1;
(statearr_630_1229[(1)] = (4));

(statearr_630_1229[(5)] = null);

} else {
throw ex623;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (37))){
var inst_425 = (state_598[(10)]);
var inst_432 = (function(){throw inst_425})();
var state_598__$1 = state_598;
var statearr_631_1230 = state_598__$1;
(statearr_631_1230[(2)] = inst_432);

(statearr_631_1230[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (69))){
var inst_554 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_632 = state_598;
(statearr_632[(11)] = inst_554);

return statearr_632;
})();
var statearr_633_1231 = state_598__$1;
(statearr_633_1231[(2)] = null);

(statearr_633_1231[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (6))){
var _ = (function (){var statearr_634 = state_598;
(statearr_634[(4)] = cljs.core.cons.call(null,(19),(state_598[(4)])));

return statearr_634;
})();
var inst_362 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_363 = cljs.core.async.interop.p__GT_c.call(null,inst_362);
var state_598__$1 = state_598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_598__$1,(20),inst_363);
} else {
if((state_val_599 === (38))){
var inst_425 = (state_598[(10)]);
var state_598__$1 = state_598;
var statearr_635_1232 = state_598__$1;
(statearr_635_1232[(2)] = inst_425);

(statearr_635_1232[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (70))){
var inst_554 = (state_598[(11)]);
var inst_568 = (state_598[(12)]);
var inst_569 = (state_598[(13)]);
var _ = (function (){var statearr_636 = state_598;
(statearr_636[(4)] = cljs.core.cons.call(null,(73),(state_598[(4)])));

return statearr_636;
})();
var inst_566 = cljs.core.count.call(null,inst_554);
var inst_567 = (new cljs.core.List(null,(1),null,(1),null));
var inst_568__$1 = (new cljs.core.List(null,inst_566,inst_567,(2),null));
var inst_569__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_568__$1);
var state_598__$1 = (function (){var statearr_637 = state_598;
(statearr_637[(12)] = inst_568__$1);

(statearr_637[(13)] = inst_569__$1);

return statearr_637;
})();
if(cljs.core.truth_(inst_569__$1)){
var statearr_638_1233 = state_598__$1;
(statearr_638_1233[(1)] = (74));

} else {
var statearr_639_1234 = state_598__$1;
(statearr_639_1234[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (7))){
var inst_396 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_640 = state_598;
(statearr_640[(14)] = inst_396);

return statearr_640;
})();
var statearr_641_1235 = state_598__$1;
(statearr_641_1235[(2)] = null);

(statearr_641_1235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (39))){
var inst_435 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_642 = state_598;
(statearr_642[(15)] = inst_435);

return statearr_642;
})();
var statearr_643_1236 = state_598__$1;
(statearr_643_1236[(2)] = null);

(statearr_643_1236[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (71))){
var inst_592 = (state_598[(2)]);
var _ = (function (){var statearr_644 = state_598;
(statearr_644[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_644;
})();
var state_598__$1 = state_598;
var statearr_645_1237 = state_598__$1;
(statearr_645_1237[(2)] = inst_592);

(statearr_645_1237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (8))){
var inst_320 = (state_598[(16)]);
var inst_321 = (state_598[(17)]);
var inst_318 = (state_598[(2)]);
var inst_319 = inst_318.cause;
var inst_320__$1 = inst_319.message;
var inst_321__$1 = clojure.string.ends_with_QMARK_.call(null,inst_320__$1,"not yet initialized");
var inst_322 = (!(inst_321__$1));
var state_598__$1 = (function (){var statearr_646 = state_598;
(statearr_646[(16)] = inst_320__$1);

(statearr_646[(17)] = inst_321__$1);

return statearr_646;
})();
if(inst_322){
var statearr_647_1238 = state_598__$1;
(statearr_647_1238[(1)] = (9));

} else {
var statearr_648_1239 = state_598__$1;
(statearr_648_1239[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (40))){
var _ = (function (){var statearr_649 = state_598;
(statearr_649[(4)] = cljs.core.cons.call(null,(43),(state_598[(4)])));

return statearr_649;
})();
var state_598__$1 = state_598;
var statearr_650_1240 = state_598__$1;
(statearr_650_1240[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (72))){
var inst_555 = (state_598[(2)]);
var inst_556 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_557 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_558 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_557,inst_555];
var inst_559 = cljs.core.PersistentHashMap.fromArrays(inst_556,inst_558);
var inst_560 = cljs.test.do_report.call(null,inst_559);
var state_598__$1 = state_598;
var statearr_652_1241 = state_598__$1;
(statearr_652_1241[(2)] = inst_560);

(statearr_652_1241[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (9))){
var inst_320 = (state_598[(16)]);
var inst_324 = ["expected =","not yet initialized"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_320)].join('');
var inst_325 = cljs.core.prn.call(null,inst_324);
var state_598__$1 = state_598;
var statearr_654_1242 = state_598__$1;
(statearr_654_1242[(2)] = inst_325);

(statearr_654_1242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (41))){
var inst_463 = (state_598[(2)]);
var _ = (function (){var statearr_655 = state_598;
(statearr_655[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_655;
})();
var state_598__$1 = state_598;
var statearr_656_1243 = state_598__$1;
(statearr_656_1243[(2)] = inst_463);

(statearr_656_1243[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (73))){
var _ = (function (){var statearr_657 = state_598;
(statearr_657[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_657;
})();
var state_598__$1 = state_598;
var ex653 = (state_598__$1[(2)]);
var statearr_658_1244 = state_598__$1;
(statearr_658_1244[(5)] = ex653);


var statearr_659_1245 = state_598__$1;
(statearr_659_1245[(1)] = (72));

(statearr_659_1245[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (10))){
var state_598__$1 = state_598;
var statearr_660_1246 = state_598__$1;
(statearr_660_1246[(2)] = null);

(statearr_660_1246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (42))){
var inst_436 = (state_598[(2)]);
var inst_437 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_438 = true;
var inst_439 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_438,inst_436];
var inst_440 = cljs.core.PersistentHashMap.fromArrays(inst_437,inst_439);
var inst_441 = cljs.test.do_report.call(null,inst_440);
var state_598__$1 = state_598;
var statearr_661_1247 = state_598__$1;
(statearr_661_1247[(2)] = inst_441);

(statearr_661_1247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (74))){
var inst_568 = (state_598[(12)]);
var inst_571 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_572 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_573 = cljs.core.cons.call(null,cljs.core._EQ_,inst_568);
var inst_574 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_572,inst_573];
var inst_575 = cljs.core.PersistentHashMap.fromArrays(inst_571,inst_574);
var inst_576 = cljs.test.do_report.call(null,inst_575);
var state_598__$1 = state_598;
var statearr_663_1248 = state_598__$1;
(statearr_663_1248[(2)] = inst_576);

(statearr_663_1248[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (11))){
var inst_328 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_664 = state_598;
(statearr_664[(18)] = inst_328);

return statearr_664;
})();
var statearr_665_1249 = state_598__$1;
(statearr_665_1249[(2)] = null);

(statearr_665_1249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (43))){
var _ = (function (){var statearr_666 = state_598;
(statearr_666[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_666;
})();
var state_598__$1 = state_598;
var ex662 = (state_598__$1[(2)]);
var statearr_667_1250 = state_598__$1;
(statearr_667_1250[(5)] = ex662);


var statearr_668_1251 = state_598__$1;
(statearr_668_1251[(1)] = (42));

(statearr_668_1251[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (75))){
var inst_568 = (state_598[(12)]);
var inst_578 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_579 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_580 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_581 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_582 = cljs.core.cons.call(null,inst_581,inst_568);
var inst_583 = (new cljs.core.List(null,inst_582,null,(1),null));
var inst_584 = (new cljs.core.List(null,inst_580,inst_583,(2),null));
var inst_585 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_579,inst_584];
var inst_586 = cljs.core.PersistentHashMap.fromArrays(inst_578,inst_585);
var inst_587 = cljs.test.do_report.call(null,inst_586);
var state_598__$1 = state_598;
var statearr_669_1252 = state_598__$1;
(statearr_669_1252[(2)] = inst_587);

(statearr_669_1252[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (12))){
var inst_321 = (state_598[(17)]);
var _ = (function (){var statearr_670 = state_598;
(statearr_670[(4)] = cljs.core.cons.call(null,(15),(state_598[(4)])));

return statearr_670;
})();
var state_598__$1 = state_598;
if(cljs.core.truth_(inst_321)){
var statearr_671_1253 = state_598__$1;
(statearr_671_1253[(1)] = (16));

} else {
var statearr_672_1254 = state_598__$1;
(statearr_672_1254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (44))){
var inst_448 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_449 = true;
var inst_450 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_449,true];
var inst_451 = cljs.core.PersistentHashMap.fromArrays(inst_448,inst_450);
var inst_452 = cljs.test.do_report.call(null,inst_451);
var state_598__$1 = state_598;
var statearr_673_1255 = state_598__$1;
(statearr_673_1255[(2)] = inst_452);

(statearr_673_1255[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (76))){
var inst_569 = (state_598[(13)]);
var inst_589 = (state_598[(2)]);
var _ = (function (){var statearr_674 = state_598;
(statearr_674[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_674;
})();
var state_598__$1 = (function (){var statearr_675 = state_598;
(statearr_675[(19)] = inst_589);

return statearr_675;
})();
var statearr_676_1256 = state_598__$1;
(statearr_676_1256[(2)] = inst_569);

(statearr_676_1256[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (13))){
var inst_356 = (state_598[(2)]);
var state_598__$1 = state_598;
var statearr_677_1257 = state_598__$1;
(statearr_677_1257[(2)] = inst_356);

(statearr_677_1257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (45))){
var inst_454 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_455 = true;
var inst_456 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_455,true];
var inst_457 = cljs.core.PersistentHashMap.fromArrays(inst_454,inst_456);
var inst_458 = cljs.test.do_report.call(null,inst_457);
var state_598__$1 = state_598;
var statearr_678_1258 = state_598__$1;
(statearr_678_1258[(2)] = inst_458);

(statearr_678_1258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (14))){
var inst_329 = (state_598[(2)]);
var inst_330 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_331 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_332 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_331,inst_329];
var inst_333 = cljs.core.PersistentHashMap.fromArrays(inst_330,inst_332);
var inst_334 = cljs.test.do_report.call(null,inst_333);
var state_598__$1 = state_598;
var statearr_680_1259 = state_598__$1;
(statearr_680_1259[(2)] = inst_334);

(statearr_680_1259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (46))){
var inst_460 = (state_598[(2)]);
var _ = (function (){var statearr_681 = state_598;
(statearr_681[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_681;
})();
var state_598__$1 = (function (){var statearr_682 = state_598;
(statearr_682[(20)] = inst_460);

return statearr_682;
})();
var statearr_683_1260 = state_598__$1;
(statearr_683_1260[(2)] = true);

(statearr_683_1260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (15))){
var _ = (function (){var statearr_684 = state_598;
(statearr_684[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_684;
})();
var state_598__$1 = state_598;
var ex679 = (state_598__$1[(2)]);
var statearr_685_1261 = state_598__$1;
(statearr_685_1261[(5)] = ex679);


var statearr_686_1262 = state_598__$1;
(statearr_686_1262[(1)] = (14));

(statearr_686_1262[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (47))){
var _ = (function (){var statearr_687 = state_598;
(statearr_687[(4)] = cljs.core.cons.call(null,(54),(state_598[(4)])));

return statearr_687;
})();
var inst_492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_493 = [new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_494 = (new cljs.core.PersistentVector(null,(2),(5),inst_492,inst_493,null));
var inst_495 = cljs.core.assoc_in.call(null,e2e.proposals.prop_config,inst_494,"0.0000 EFX");
var inst_496 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_495);
var inst_497 = cljs.core.async.interop.p__GT_c.call(null,inst_496);
var state_598__$1 = state_598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_598__$1,(55),inst_497);
} else {
if((state_val_599 === (16))){
var inst_321 = (state_598[(17)]);
var inst_341 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_342 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_343 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need init to update",inst_342,inst_321];
var inst_344 = cljs.core.PersistentHashMap.fromArrays(inst_341,inst_343);
var inst_345 = cljs.test.do_report.call(null,inst_344);
var state_598__$1 = state_598;
var statearr_688_1263 = state_598__$1;
(statearr_688_1263[(2)] = inst_345);

(statearr_688_1263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (48))){
var inst_540 = (state_598[(2)]);
var inst_541 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_542 = cljs.core.async.interop.p__GT_c.call(null,inst_541);
var state_598__$1 = (function (){var statearr_689 = state_598;
(statearr_689[(21)] = inst_540);

return statearr_689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_598__$1,(66),inst_542);
} else {
if((state_val_599 === (17))){
var inst_321 = (state_598[(17)]);
var inst_347 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_348 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_349 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update",inst_348,inst_321];
var inst_350 = cljs.core.PersistentHashMap.fromArrays(inst_347,inst_349);
var inst_351 = cljs.test.do_report.call(null,inst_350);
var state_598__$1 = state_598;
var statearr_690_1264 = state_598__$1;
(statearr_690_1264[(2)] = inst_351);

(statearr_690_1264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (49))){
var inst_467 = (state_598[(2)]);
var inst_468 = cljs.core.prn.call(null,"test failed with ",inst_467);
var state_598__$1 = (function (){var statearr_691 = state_598;
(statearr_691[(22)] = inst_468);

return statearr_691;
})();
var statearr_692_1265 = state_598__$1;
(statearr_692_1265[(2)] = null);

(statearr_692_1265[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (18))){
var inst_321 = (state_598[(17)]);
var inst_353 = (state_598[(2)]);
var _ = (function (){var statearr_694 = state_598;
(statearr_694[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_694;
})();
var state_598__$1 = (function (){var statearr_695 = state_598;
(statearr_695[(23)] = inst_353);

return statearr_695;
})();
var statearr_696_1266 = state_598__$1;
(statearr_696_1266[(2)] = inst_321);

(statearr_696_1266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (50))){
var _ = (function (){var statearr_697 = state_598;
(statearr_697[(4)] = cljs.core.cons.call(null,(53),(state_598[(4)])));

return statearr_697;
})();
var inst_480 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_481 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init"];
var inst_482 = cljs.core.PersistentHashMap.fromArrays(inst_480,inst_481);
var inst_483 = cljs.test.do_report.call(null,inst_482);
var ___$1 = (function (){var statearr_698 = state_598;
(statearr_698[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_698;
})();
var state_598__$1 = state_598;
var statearr_699_1267 = state_598__$1;
(statearr_699_1267[(2)] = inst_483);

(statearr_699_1267[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (19))){
var _ = (function (){var statearr_700 = state_598;
(statearr_700[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_700;
})();
var state_598__$1 = state_598;
var ex693 = (state_598__$1[(2)]);
var statearr_701_1268 = state_598__$1;
(statearr_701_1268[(5)] = ex693);


if((ex693 instanceof Error)){
var statearr_702_1269 = state_598__$1;
(statearr_702_1269[(1)] = (8));

(statearr_702_1269[(5)] = null);

} else {
throw ex693;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (51))){
var inst_486 = (state_598[(2)]);
var state_598__$1 = state_598;
var statearr_703_1270 = state_598__$1;
(statearr_703_1270[(2)] = inst_486);

(statearr_703_1270[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (20))){
var inst_365 = (state_598[(24)]);
var inst_365__$1 = (state_598[(2)]);
var inst_366 = (inst_365__$1 instanceof cljs.core.ExceptionInfo);
var inst_367 = cljs.core.ex_data.call(null,inst_365__$1);
var inst_368 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_367);
var inst_369 = cljs.core._EQ_.call(null,inst_368,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_370 = ((inst_366) && (inst_369));
var state_598__$1 = (function (){var statearr_704 = state_598;
(statearr_704[(24)] = inst_365__$1);

return statearr_704;
})();
if(cljs.core.truth_(inst_370)){
var statearr_705_1271 = state_598__$1;
(statearr_705_1271[(1)] = (21));

} else {
var statearr_706_1272 = state_598__$1;
(statearr_706_1272[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (52))){
var inst_469 = (state_598[(2)]);
var inst_470 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_471 = null;
var inst_472 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_471,inst_469];
var inst_473 = cljs.core.PersistentHashMap.fromArrays(inst_470,inst_472);
var inst_474 = cljs.test.do_report.call(null,inst_473);
var state_598__$1 = state_598;
var statearr_708_1273 = state_598__$1;
(statearr_708_1273[(2)] = inst_474);

(statearr_708_1273[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (21))){
var inst_365 = (state_598[(24)]);
var inst_372 = (function(){throw inst_365})();
var state_598__$1 = state_598;
var statearr_709_1274 = state_598__$1;
(statearr_709_1274[(2)] = inst_372);

(statearr_709_1274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (53))){
var _ = (function (){var statearr_711 = state_598;
(statearr_711[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_711;
})();
var state_598__$1 = state_598;
var ex707 = (state_598__$1[(2)]);
var statearr_712_1275 = state_598__$1;
(statearr_712_1275[(5)] = ex707);


var statearr_713_1276 = state_598__$1;
(statearr_713_1276[(1)] = (52));

(statearr_713_1276[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (22))){
var inst_365 = (state_598[(24)]);
var state_598__$1 = state_598;
var statearr_714_1277 = state_598__$1;
(statearr_714_1277[(2)] = inst_365);

(statearr_714_1277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (54))){
var _ = (function (){var statearr_715 = state_598;
(statearr_715[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_715;
})();
var state_598__$1 = state_598;
var ex710 = (state_598__$1[(2)]);
var statearr_716_1278 = state_598__$1;
(statearr_716_1278[(5)] = ex710);


if((ex710 instanceof Error)){
var statearr_717_1279 = state_598__$1;
(statearr_717_1279[(1)] = (49));

(statearr_717_1279[(5)] = null);

} else {
throw ex710;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (23))){
var inst_375 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_718 = state_598;
(statearr_718[(25)] = inst_375);

return statearr_718;
})();
var statearr_719_1280 = state_598__$1;
(statearr_719_1280[(2)] = null);

(statearr_719_1280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (55))){
var inst_499 = (state_598[(26)]);
var inst_499__$1 = (state_598[(2)]);
var inst_500 = (inst_499__$1 instanceof cljs.core.ExceptionInfo);
var inst_501 = cljs.core.ex_data.call(null,inst_499__$1);
var inst_502 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_501);
var inst_503 = cljs.core._EQ_.call(null,inst_502,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_504 = ((inst_500) && (inst_503));
var state_598__$1 = (function (){var statearr_720 = state_598;
(statearr_720[(26)] = inst_499__$1);

return statearr_720;
})();
if(cljs.core.truth_(inst_504)){
var statearr_721_1281 = state_598__$1;
(statearr_721_1281[(1)] = (56));

} else {
var statearr_722_1282 = state_598__$1;
(statearr_722_1282[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (24))){
var _ = (function (){var statearr_723 = state_598;
(statearr_723[(4)] = cljs.core.cons.call(null,(27),(state_598[(4)])));

return statearr_723;
})();
var inst_387 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_388 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update"];
var inst_389 = cljs.core.PersistentHashMap.fromArrays(inst_387,inst_388);
var inst_390 = cljs.test.do_report.call(null,inst_389);
var ___$1 = (function (){var statearr_724 = state_598;
(statearr_724[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_724;
})();
var state_598__$1 = state_598;
var statearr_725_1283 = state_598__$1;
(statearr_725_1283[(2)] = inst_390);

(statearr_725_1283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (56))){
var inst_499 = (state_598[(26)]);
var inst_506 = (function(){throw inst_499})();
var state_598__$1 = state_598;
var statearr_726_1284 = state_598__$1;
(statearr_726_1284[(2)] = inst_506);

(statearr_726_1284[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (25))){
var inst_393 = (state_598[(2)]);
var _ = (function (){var statearr_727 = state_598;
(statearr_727[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_727;
})();
var state_598__$1 = state_598;
var statearr_728_1285 = state_598__$1;
(statearr_728_1285[(2)] = inst_393);

(statearr_728_1285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (57))){
var inst_499 = (state_598[(26)]);
var state_598__$1 = state_598;
var statearr_729_1286 = state_598__$1;
(statearr_729_1286[(2)] = inst_499);

(statearr_729_1286[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (26))){
var inst_376 = (state_598[(2)]);
var inst_377 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_378 = null;
var inst_379 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_378,inst_376];
var inst_380 = cljs.core.PersistentHashMap.fromArrays(inst_377,inst_379);
var inst_381 = cljs.test.do_report.call(null,inst_380);
var state_598__$1 = state_598;
var statearr_731_1287 = state_598__$1;
(statearr_731_1287[(2)] = inst_381);

(statearr_731_1287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (58))){
var inst_509 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_732 = state_598;
(statearr_732[(27)] = inst_509);

return statearr_732;
})();
var statearr_733_1288 = state_598__$1;
(statearr_733_1288[(2)] = null);

(statearr_733_1288[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (27))){
var _ = (function (){var statearr_734 = state_598;
(statearr_734[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_734;
})();
var state_598__$1 = state_598;
var ex730 = (state_598__$1[(2)]);
var statearr_735_1289 = state_598__$1;
(statearr_735_1289[(5)] = ex730);


var statearr_736_1290 = state_598__$1;
(statearr_736_1290[(1)] = (26));

(statearr_736_1290[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (59))){
var _ = (function (){var statearr_737 = state_598;
(statearr_737[(4)] = cljs.core.cons.call(null,(62),(state_598[(4)])));

return statearr_737;
})();
var state_598__$1 = state_598;
var statearr_738_1291 = state_598__$1;
(statearr_738_1291[(1)] = (63));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (28))){
var _ = (function (){var statearr_740 = state_598;
(statearr_740[(4)] = cljs.core.cons.call(null,(35),(state_598[(4)])));

return statearr_740;
})();
var inst_422 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"init",e2e.proposals.prop_config);
var inst_423 = cljs.core.async.interop.p__GT_c.call(null,inst_422);
var state_598__$1 = state_598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_598__$1,(36),inst_423);
} else {
if((state_val_599 === (60))){
var inst_537 = (state_598[(2)]);
var _ = (function (){var statearr_741 = state_598;
(statearr_741[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_741;
})();
var state_598__$1 = state_598;
var statearr_742_1292 = state_598__$1;
(statearr_742_1292[(2)] = inst_537);

(statearr_742_1292[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (29))){
var inst_466 = (state_598[(2)]);
var state_598__$1 = (function (){var statearr_743 = state_598;
(statearr_743[(28)] = inst_466);

return statearr_743;
})();
var statearr_744_1293 = state_598__$1;
(statearr_744_1293[(2)] = null);

(statearr_744_1293[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (61))){
var inst_510 = (state_598[(2)]);
var inst_511 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_512 = true;
var inst_513 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_512,inst_510];
var inst_514 = cljs.core.PersistentHashMap.fromArrays(inst_511,inst_513);
var inst_515 = cljs.test.do_report.call(null,inst_514);
var state_598__$1 = state_598;
var statearr_746_1294 = state_598__$1;
(statearr_746_1294[(2)] = inst_515);

(statearr_746_1294[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (30))){
var inst_397 = (state_598[(2)]);
var inst_398 = cljs.core.prn.call(null,"test failed with ",inst_397);
var state_598__$1 = (function (){var statearr_747 = state_598;
(statearr_747[(29)] = inst_398);

return statearr_747;
})();
var statearr_748_1295 = state_598__$1;
(statearr_748_1295[(2)] = null);

(statearr_748_1295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (62))){
var _ = (function (){var statearr_749 = state_598;
(statearr_749[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_749;
})();
var state_598__$1 = state_598;
var ex745 = (state_598__$1[(2)]);
var statearr_750_1296 = state_598__$1;
(statearr_750_1296[(5)] = ex745);


var statearr_751_1297 = state_598__$1;
(statearr_751_1297[(1)] = (61));

(statearr_751_1297[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (31))){
var _ = (function (){var statearr_752 = state_598;
(statearr_752[(4)] = cljs.core.cons.call(null,(34),(state_598[(4)])));

return statearr_752;
})();
var inst_410 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_411 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_412 = cljs.core.PersistentHashMap.fromArrays(inst_410,inst_411);
var inst_413 = cljs.test.do_report.call(null,inst_412);
var ___$1 = (function (){var statearr_753 = state_598;
(statearr_753[(4)] = cljs.core.rest.call(null,(state_598[(4)])));

return statearr_753;
})();
var state_598__$1 = state_598;
var statearr_754_1298 = state_598__$1;
(statearr_754_1298[(2)] = inst_413);

(statearr_754_1298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_599 === (63))){
var inst_522 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_523 = true;
var inst_524 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update after init",inst_523,true];
var inst_525 = cljs.core.PersistentHashMap.fromArrays(inst_522,inst_524);
var inst_526 = cljs.test.do_report.call(null,inst_525);
var state_598__$1 = state_598;
var statearr_755_1299 = state_598__$1;
(statearr_755_1299[(2)] = inst_526);

(statearr_755_1299[(1)] = (65));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_756[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_756[(1)] = (1));

return statearr_756;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_598){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e757){var ex__18__auto__ = e757;
var statearr_758_1300 = state_598;
(statearr_758_1300[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_598[(4)]))){
var statearr_759_1301 = state_598;
(statearr_759_1301[(1)] = cljs.core.first.call(null,(state_598[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1302 = state_598;
state_598 = G__1302;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_598){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_760 = f__20__auto__.call(null);
(statearr_760[(6)] = c__19__auto__);

return statearr_760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals307.prototype.apply = (function (self__,args310){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args310)));
});

e2e.proposals.t_e2e$proposals307.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_1048){
var state_val_1049 = (state_1048[(1)]);
if((state_val_1049 === (32))){
var inst_866 = (state_1048[(2)]);
var state_1048__$1 = state_1048;
var statearr_1050_1303 = state_1048__$1;
(statearr_1050_1303[(2)] = inst_866);

(statearr_1050_1303[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (64))){
var inst_978 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_979 = true;
var inst_980 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init",inst_979,true];
var inst_981 = cljs.core.PersistentHashMap.fromArrays(inst_978,inst_980);
var inst_982 = cljs.test.do_report.call(null,inst_981);
var state_1048__$1 = state_1048;
var statearr_1051_1304 = state_1048__$1;
(statearr_1051_1304[(2)] = inst_982);

(statearr_1051_1304[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (1))){
var state_1048__$1 = state_1048;
var statearr_1052_1305 = state_1048__$1;
(statearr_1052_1305[(2)] = null);

(statearr_1052_1305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (33))){
var inst_849 = (state_1048[(2)]);
var inst_850 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_851 = null;
var inst_852 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_851,inst_849];
var inst_853 = cljs.core.PersistentHashMap.fromArrays(inst_850,inst_852);
var inst_854 = cljs.test.do_report.call(null,inst_853);
var state_1048__$1 = state_1048;
var statearr_1053_1306 = state_1048__$1;
(statearr_1053_1306[(2)] = inst_854);

(statearr_1053_1306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (65))){
var inst_984 = (state_1048[(2)]);
var _ = (function (){var statearr_1055 = state_1048;
(statearr_1055[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1055;
})();
var state_1048__$1 = (function (){var statearr_1056 = state_1048;
(statearr_1056[(7)] = inst_984);

return statearr_1056;
})();
var statearr_1057_1307 = state_1048__$1;
(statearr_1057_1307[(2)] = true);

(statearr_1057_1307[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (2))){
var _ = (function (){var statearr_1058 = state_1048;
(statearr_1058[(4)] = cljs.core.cons.call(null,(5),(state_1048[(4)])));

return statearr_1058;
})();
var state_1048__$1 = state_1048;
var statearr_1059_1308 = state_1048__$1;
(statearr_1059_1308[(2)] = null);

(statearr_1059_1308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (34))){
var _ = (function (){var statearr_1060 = state_1048;
(statearr_1060[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1060;
})();
var state_1048__$1 = state_1048;
var ex1054 = (state_1048__$1[(2)]);
var statearr_1061_1309 = state_1048__$1;
(statearr_1061_1309[(5)] = ex1054);


var statearr_1062_1310 = state_1048__$1;
(statearr_1062_1310[(1)] = (33));

(statearr_1062_1310[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (66))){
var inst_994 = (state_1048[(8)]);
var inst_994__$1 = (state_1048[(2)]);
var inst_995 = (inst_994__$1 instanceof cljs.core.ExceptionInfo);
var inst_996 = cljs.core.ex_data.call(null,inst_994__$1);
var inst_997 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_996);
var inst_998 = cljs.core._EQ_.call(null,inst_997,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_999 = ((inst_995) && (inst_998));
var state_1048__$1 = (function (){var statearr_1064 = state_1048;
(statearr_1064[(8)] = inst_994__$1);

return statearr_1064;
})();
if(cljs.core.truth_(inst_999)){
var statearr_1065_1311 = state_1048__$1;
(statearr_1065_1311[(1)] = (67));

} else {
var statearr_1066_1312 = state_1048__$1;
(statearr_1066_1312[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (3))){
var inst_1045 = (state_1048[(2)]);
var inst_1046 = done.call(null);
var state_1048__$1 = (function (){var statearr_1067 = state_1048;
(statearr_1067[(9)] = inst_1045);

return statearr_1067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1048__$1,inst_1046);
} else {
if((state_val_1049 === (35))){
var _ = (function (){var statearr_1068 = state_1048;
(statearr_1068[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1068;
})();
var state_1048__$1 = state_1048;
var ex1063 = (state_1048__$1[(2)]);
var statearr_1069_1313 = state_1048__$1;
(statearr_1069_1313[(5)] = ex1063);


if((ex1063 instanceof Error)){
var statearr_1070_1314 = state_1048__$1;
(statearr_1070_1314[(1)] = (30));

(statearr_1070_1314[(5)] = null);

} else {
throw ex1063;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (67))){
var inst_994 = (state_1048[(8)]);
var inst_1001 = (function(){throw inst_994})();
var state_1048__$1 = state_1048;
var statearr_1071_1315 = state_1048__$1;
(statearr_1071_1315[(2)] = inst_1001);

(statearr_1071_1315[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (4))){
var inst_761 = (state_1048[(2)]);
var inst_762 = cljs.core.prn.call(null,"======== ",inst_761);
var state_1048__$1 = state_1048;
var statearr_1072_1316 = state_1048__$1;
(statearr_1072_1316[(2)] = inst_762);

(statearr_1072_1316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (36))){
var inst_875 = (state_1048[(10)]);
var inst_875__$1 = (state_1048[(2)]);
var inst_876 = (inst_875__$1 instanceof cljs.core.ExceptionInfo);
var inst_877 = cljs.core.ex_data.call(null,inst_875__$1);
var inst_878 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_877);
var inst_879 = cljs.core._EQ_.call(null,inst_878,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_880 = ((inst_876) && (inst_879));
var state_1048__$1 = (function (){var statearr_1074 = state_1048;
(statearr_1074[(10)] = inst_875__$1);

return statearr_1074;
})();
if(cljs.core.truth_(inst_880)){
var statearr_1075_1317 = state_1048__$1;
(statearr_1075_1317[(1)] = (37));

} else {
var statearr_1076_1318 = state_1048__$1;
(statearr_1076_1318[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (68))){
var inst_994 = (state_1048[(8)]);
var state_1048__$1 = state_1048;
var statearr_1077_1319 = state_1048__$1;
(statearr_1077_1319[(2)] = inst_994);

(statearr_1077_1319[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (5))){
var _ = (function (){var statearr_1078 = state_1048;
(statearr_1078[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1078;
})();
var state_1048__$1 = state_1048;
var ex1073 = (state_1048__$1[(2)]);
var statearr_1079_1320 = state_1048__$1;
(statearr_1079_1320[(5)] = ex1073);


if((ex1073 instanceof Error)){
var statearr_1080_1321 = state_1048__$1;
(statearr_1080_1321[(1)] = (4));

(statearr_1080_1321[(5)] = null);

} else {
throw ex1073;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (37))){
var inst_875 = (state_1048[(10)]);
var inst_882 = (function(){throw inst_875})();
var state_1048__$1 = state_1048;
var statearr_1081_1322 = state_1048__$1;
(statearr_1081_1322[(2)] = inst_882);

(statearr_1081_1322[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (69))){
var inst_1004 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1082 = state_1048;
(statearr_1082[(11)] = inst_1004);

return statearr_1082;
})();
var statearr_1083_1323 = state_1048__$1;
(statearr_1083_1323[(2)] = null);

(statearr_1083_1323[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (6))){
var _ = (function (){var statearr_1084 = state_1048;
(statearr_1084[(4)] = cljs.core.cons.call(null,(19),(state_1048[(4)])));

return statearr_1084;
})();
var inst_812 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_813 = cljs.core.async.interop.p__GT_c.call(null,inst_812);
var state_1048__$1 = state_1048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1048__$1,(20),inst_813);
} else {
if((state_val_1049 === (38))){
var inst_875 = (state_1048[(10)]);
var state_1048__$1 = state_1048;
var statearr_1085_1324 = state_1048__$1;
(statearr_1085_1324[(2)] = inst_875);

(statearr_1085_1324[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (70))){
var inst_1004 = (state_1048[(11)]);
var inst_1018 = (state_1048[(12)]);
var inst_1019 = (state_1048[(13)]);
var _ = (function (){var statearr_1086 = state_1048;
(statearr_1086[(4)] = cljs.core.cons.call(null,(73),(state_1048[(4)])));

return statearr_1086;
})();
var inst_1016 = cljs.core.count.call(null,inst_1004);
var inst_1017 = (new cljs.core.List(null,(1),null,(1),null));
var inst_1018__$1 = (new cljs.core.List(null,inst_1016,inst_1017,(2),null));
var inst_1019__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_1018__$1);
var state_1048__$1 = (function (){var statearr_1087 = state_1048;
(statearr_1087[(12)] = inst_1018__$1);

(statearr_1087[(13)] = inst_1019__$1);

return statearr_1087;
})();
if(cljs.core.truth_(inst_1019__$1)){
var statearr_1088_1325 = state_1048__$1;
(statearr_1088_1325[(1)] = (74));

} else {
var statearr_1089_1326 = state_1048__$1;
(statearr_1089_1326[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (7))){
var inst_846 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1090 = state_1048;
(statearr_1090[(14)] = inst_846);

return statearr_1090;
})();
var statearr_1091_1327 = state_1048__$1;
(statearr_1091_1327[(2)] = null);

(statearr_1091_1327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (39))){
var inst_885 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1092 = state_1048;
(statearr_1092[(15)] = inst_885);

return statearr_1092;
})();
var statearr_1093_1328 = state_1048__$1;
(statearr_1093_1328[(2)] = null);

(statearr_1093_1328[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (71))){
var inst_1042 = (state_1048[(2)]);
var _ = (function (){var statearr_1094 = state_1048;
(statearr_1094[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1094;
})();
var state_1048__$1 = state_1048;
var statearr_1095_1329 = state_1048__$1;
(statearr_1095_1329[(2)] = inst_1042);

(statearr_1095_1329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (8))){
var inst_770 = (state_1048[(16)]);
var inst_771 = (state_1048[(17)]);
var inst_768 = (state_1048[(2)]);
var inst_769 = inst_768.cause;
var inst_770__$1 = inst_769.message;
var inst_771__$1 = clojure.string.ends_with_QMARK_.call(null,inst_770__$1,"not yet initialized");
var inst_772 = (!(inst_771__$1));
var state_1048__$1 = (function (){var statearr_1096 = state_1048;
(statearr_1096[(16)] = inst_770__$1);

(statearr_1096[(17)] = inst_771__$1);

return statearr_1096;
})();
if(inst_772){
var statearr_1097_1330 = state_1048__$1;
(statearr_1097_1330[(1)] = (9));

} else {
var statearr_1098_1331 = state_1048__$1;
(statearr_1098_1331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (40))){
var _ = (function (){var statearr_1099 = state_1048;
(statearr_1099[(4)] = cljs.core.cons.call(null,(43),(state_1048[(4)])));

return statearr_1099;
})();
var state_1048__$1 = state_1048;
var statearr_1100_1332 = state_1048__$1;
(statearr_1100_1332[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (72))){
var inst_1005 = (state_1048[(2)]);
var inst_1006 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1007 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_1008 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_1007,inst_1005];
var inst_1009 = cljs.core.PersistentHashMap.fromArrays(inst_1006,inst_1008);
var inst_1010 = cljs.test.do_report.call(null,inst_1009);
var state_1048__$1 = state_1048;
var statearr_1102_1333 = state_1048__$1;
(statearr_1102_1333[(2)] = inst_1010);

(statearr_1102_1333[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (9))){
var inst_770 = (state_1048[(16)]);
var inst_774 = ["expected =","not yet initialized"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_770)].join('');
var inst_775 = cljs.core.prn.call(null,inst_774);
var state_1048__$1 = state_1048;
var statearr_1104_1334 = state_1048__$1;
(statearr_1104_1334[(2)] = inst_775);

(statearr_1104_1334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (41))){
var inst_913 = (state_1048[(2)]);
var _ = (function (){var statearr_1105 = state_1048;
(statearr_1105[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1105;
})();
var state_1048__$1 = state_1048;
var statearr_1106_1335 = state_1048__$1;
(statearr_1106_1335[(2)] = inst_913);

(statearr_1106_1335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (73))){
var _ = (function (){var statearr_1107 = state_1048;
(statearr_1107[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1107;
})();
var state_1048__$1 = state_1048;
var ex1103 = (state_1048__$1[(2)]);
var statearr_1108_1336 = state_1048__$1;
(statearr_1108_1336[(5)] = ex1103);


var statearr_1109_1337 = state_1048__$1;
(statearr_1109_1337[(1)] = (72));

(statearr_1109_1337[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (10))){
var state_1048__$1 = state_1048;
var statearr_1110_1338 = state_1048__$1;
(statearr_1110_1338[(2)] = null);

(statearr_1110_1338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (42))){
var inst_886 = (state_1048[(2)]);
var inst_887 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_888 = true;
var inst_889 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_888,inst_886];
var inst_890 = cljs.core.PersistentHashMap.fromArrays(inst_887,inst_889);
var inst_891 = cljs.test.do_report.call(null,inst_890);
var state_1048__$1 = state_1048;
var statearr_1111_1339 = state_1048__$1;
(statearr_1111_1339[(2)] = inst_891);

(statearr_1111_1339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (74))){
var inst_1018 = (state_1048[(12)]);
var inst_1021 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1022 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_1023 = cljs.core.cons.call(null,cljs.core._EQ_,inst_1018);
var inst_1024 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_1022,inst_1023];
var inst_1025 = cljs.core.PersistentHashMap.fromArrays(inst_1021,inst_1024);
var inst_1026 = cljs.test.do_report.call(null,inst_1025);
var state_1048__$1 = state_1048;
var statearr_1113_1340 = state_1048__$1;
(statearr_1113_1340[(2)] = inst_1026);

(statearr_1113_1340[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (11))){
var inst_778 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1114 = state_1048;
(statearr_1114[(18)] = inst_778);

return statearr_1114;
})();
var statearr_1115_1341 = state_1048__$1;
(statearr_1115_1341[(2)] = null);

(statearr_1115_1341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (43))){
var _ = (function (){var statearr_1116 = state_1048;
(statearr_1116[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1116;
})();
var state_1048__$1 = state_1048;
var ex1112 = (state_1048__$1[(2)]);
var statearr_1117_1342 = state_1048__$1;
(statearr_1117_1342[(5)] = ex1112);


var statearr_1118_1343 = state_1048__$1;
(statearr_1118_1343[(1)] = (42));

(statearr_1118_1343[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (75))){
var inst_1018 = (state_1048[(12)]);
var inst_1028 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1029 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_1030 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_1031 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_1032 = cljs.core.cons.call(null,inst_1031,inst_1018);
var inst_1033 = (new cljs.core.List(null,inst_1032,null,(1),null));
var inst_1034 = (new cljs.core.List(null,inst_1030,inst_1033,(2),null));
var inst_1035 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_1029,inst_1034];
var inst_1036 = cljs.core.PersistentHashMap.fromArrays(inst_1028,inst_1035);
var inst_1037 = cljs.test.do_report.call(null,inst_1036);
var state_1048__$1 = state_1048;
var statearr_1119_1344 = state_1048__$1;
(statearr_1119_1344[(2)] = inst_1037);

(statearr_1119_1344[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (12))){
var inst_771 = (state_1048[(17)]);
var _ = (function (){var statearr_1120 = state_1048;
(statearr_1120[(4)] = cljs.core.cons.call(null,(15),(state_1048[(4)])));

return statearr_1120;
})();
var state_1048__$1 = state_1048;
if(cljs.core.truth_(inst_771)){
var statearr_1121_1345 = state_1048__$1;
(statearr_1121_1345[(1)] = (16));

} else {
var statearr_1122_1346 = state_1048__$1;
(statearr_1122_1346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (44))){
var inst_898 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_899 = true;
var inst_900 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_899,true];
var inst_901 = cljs.core.PersistentHashMap.fromArrays(inst_898,inst_900);
var inst_902 = cljs.test.do_report.call(null,inst_901);
var state_1048__$1 = state_1048;
var statearr_1123_1347 = state_1048__$1;
(statearr_1123_1347[(2)] = inst_902);

(statearr_1123_1347[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (76))){
var inst_1019 = (state_1048[(13)]);
var inst_1039 = (state_1048[(2)]);
var _ = (function (){var statearr_1124 = state_1048;
(statearr_1124[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1124;
})();
var state_1048__$1 = (function (){var statearr_1125 = state_1048;
(statearr_1125[(19)] = inst_1039);

return statearr_1125;
})();
var statearr_1126_1348 = state_1048__$1;
(statearr_1126_1348[(2)] = inst_1019);

(statearr_1126_1348[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (13))){
var inst_806 = (state_1048[(2)]);
var state_1048__$1 = state_1048;
var statearr_1127_1349 = state_1048__$1;
(statearr_1127_1349[(2)] = inst_806);

(statearr_1127_1349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (45))){
var inst_904 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_905 = true;
var inst_906 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_905,true];
var inst_907 = cljs.core.PersistentHashMap.fromArrays(inst_904,inst_906);
var inst_908 = cljs.test.do_report.call(null,inst_907);
var state_1048__$1 = state_1048;
var statearr_1128_1350 = state_1048__$1;
(statearr_1128_1350[(2)] = inst_908);

(statearr_1128_1350[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (14))){
var inst_779 = (state_1048[(2)]);
var inst_780 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_781 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_782 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_781,inst_779];
var inst_783 = cljs.core.PersistentHashMap.fromArrays(inst_780,inst_782);
var inst_784 = cljs.test.do_report.call(null,inst_783);
var state_1048__$1 = state_1048;
var statearr_1130_1351 = state_1048__$1;
(statearr_1130_1351[(2)] = inst_784);

(statearr_1130_1351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (46))){
var inst_910 = (state_1048[(2)]);
var _ = (function (){var statearr_1131 = state_1048;
(statearr_1131[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1131;
})();
var state_1048__$1 = (function (){var statearr_1132 = state_1048;
(statearr_1132[(20)] = inst_910);

return statearr_1132;
})();
var statearr_1133_1352 = state_1048__$1;
(statearr_1133_1352[(2)] = true);

(statearr_1133_1352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (15))){
var _ = (function (){var statearr_1134 = state_1048;
(statearr_1134[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1134;
})();
var state_1048__$1 = state_1048;
var ex1129 = (state_1048__$1[(2)]);
var statearr_1135_1353 = state_1048__$1;
(statearr_1135_1353[(5)] = ex1129);


var statearr_1136_1354 = state_1048__$1;
(statearr_1136_1354[(1)] = (14));

(statearr_1136_1354[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (47))){
var _ = (function (){var statearr_1137 = state_1048;
(statearr_1137[(4)] = cljs.core.cons.call(null,(54),(state_1048[(4)])));

return statearr_1137;
})();
var inst_942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_943 = [new cljs.core.Keyword(null,"proposal_cost","proposal_cost",(1707335169)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694))];
var inst_944 = (new cljs.core.PersistentVector(null,(2),(5),inst_942,inst_943,null));
var inst_945 = cljs.core.assoc_in.call(null,e2e.proposals.prop_config,inst_944,"0.0000 EFX");
var inst_946 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_945);
var inst_947 = cljs.core.async.interop.p__GT_c.call(null,inst_946);
var state_1048__$1 = state_1048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1048__$1,(55),inst_947);
} else {
if((state_val_1049 === (16))){
var inst_771 = (state_1048[(17)]);
var inst_791 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_792 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_793 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need init to update",inst_792,inst_771];
var inst_794 = cljs.core.PersistentHashMap.fromArrays(inst_791,inst_793);
var inst_795 = cljs.test.do_report.call(null,inst_794);
var state_1048__$1 = state_1048;
var statearr_1138_1355 = state_1048__$1;
(statearr_1138_1355[(2)] = inst_795);

(statearr_1138_1355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (48))){
var inst_990 = (state_1048[(2)]);
var inst_991 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_992 = cljs.core.async.interop.p__GT_c.call(null,inst_991);
var state_1048__$1 = (function (){var statearr_1139 = state_1048;
(statearr_1139[(21)] = inst_990);

return statearr_1139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1048__$1,(66),inst_992);
} else {
if((state_val_1049 === (17))){
var inst_771 = (state_1048[(17)]);
var inst_797 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_798 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_799 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update",inst_798,inst_771];
var inst_800 = cljs.core.PersistentHashMap.fromArrays(inst_797,inst_799);
var inst_801 = cljs.test.do_report.call(null,inst_800);
var state_1048__$1 = state_1048;
var statearr_1140_1356 = state_1048__$1;
(statearr_1140_1356[(2)] = inst_801);

(statearr_1140_1356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (49))){
var inst_917 = (state_1048[(2)]);
var inst_918 = cljs.core.prn.call(null,"test failed with ",inst_917);
var state_1048__$1 = (function (){var statearr_1141 = state_1048;
(statearr_1141[(22)] = inst_918);

return statearr_1141;
})();
var statearr_1142_1357 = state_1048__$1;
(statearr_1142_1357[(2)] = null);

(statearr_1142_1357[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (18))){
var inst_771 = (state_1048[(17)]);
var inst_803 = (state_1048[(2)]);
var _ = (function (){var statearr_1144 = state_1048;
(statearr_1144[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1144;
})();
var state_1048__$1 = (function (){var statearr_1145 = state_1048;
(statearr_1145[(23)] = inst_803);

return statearr_1145;
})();
var statearr_1146_1358 = state_1048__$1;
(statearr_1146_1358[(2)] = inst_771);

(statearr_1146_1358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (50))){
var _ = (function (){var statearr_1147 = state_1048;
(statearr_1147[(4)] = cljs.core.cons.call(null,(53),(state_1048[(4)])));

return statearr_1147;
})();
var inst_930 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_931 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update after init"];
var inst_932 = cljs.core.PersistentHashMap.fromArrays(inst_930,inst_931);
var inst_933 = cljs.test.do_report.call(null,inst_932);
var ___$1 = (function (){var statearr_1148 = state_1048;
(statearr_1148[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1148;
})();
var state_1048__$1 = state_1048;
var statearr_1149_1359 = state_1048__$1;
(statearr_1149_1359[(2)] = inst_933);

(statearr_1149_1359[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (19))){
var _ = (function (){var statearr_1150 = state_1048;
(statearr_1150[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1150;
})();
var state_1048__$1 = state_1048;
var ex1143 = (state_1048__$1[(2)]);
var statearr_1151_1360 = state_1048__$1;
(statearr_1151_1360[(5)] = ex1143);


if((ex1143 instanceof Error)){
var statearr_1152_1361 = state_1048__$1;
(statearr_1152_1361[(1)] = (8));

(statearr_1152_1361[(5)] = null);

} else {
throw ex1143;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (51))){
var inst_936 = (state_1048[(2)]);
var state_1048__$1 = state_1048;
var statearr_1153_1362 = state_1048__$1;
(statearr_1153_1362[(2)] = inst_936);

(statearr_1153_1362[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (20))){
var inst_815 = (state_1048[(24)]);
var inst_815__$1 = (state_1048[(2)]);
var inst_816 = (inst_815__$1 instanceof cljs.core.ExceptionInfo);
var inst_817 = cljs.core.ex_data.call(null,inst_815__$1);
var inst_818 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_817);
var inst_819 = cljs.core._EQ_.call(null,inst_818,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_820 = ((inst_816) && (inst_819));
var state_1048__$1 = (function (){var statearr_1154 = state_1048;
(statearr_1154[(24)] = inst_815__$1);

return statearr_1154;
})();
if(cljs.core.truth_(inst_820)){
var statearr_1155_1363 = state_1048__$1;
(statearr_1155_1363[(1)] = (21));

} else {
var statearr_1156_1364 = state_1048__$1;
(statearr_1156_1364[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (52))){
var inst_919 = (state_1048[(2)]);
var inst_920 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_921 = null;
var inst_922 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_921,inst_919];
var inst_923 = cljs.core.PersistentHashMap.fromArrays(inst_920,inst_922);
var inst_924 = cljs.test.do_report.call(null,inst_923);
var state_1048__$1 = state_1048;
var statearr_1158_1365 = state_1048__$1;
(statearr_1158_1365[(2)] = inst_924);

(statearr_1158_1365[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (21))){
var inst_815 = (state_1048[(24)]);
var inst_822 = (function(){throw inst_815})();
var state_1048__$1 = state_1048;
var statearr_1159_1366 = state_1048__$1;
(statearr_1159_1366[(2)] = inst_822);

(statearr_1159_1366[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (53))){
var _ = (function (){var statearr_1161 = state_1048;
(statearr_1161[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1161;
})();
var state_1048__$1 = state_1048;
var ex1157 = (state_1048__$1[(2)]);
var statearr_1162_1367 = state_1048__$1;
(statearr_1162_1367[(5)] = ex1157);


var statearr_1163_1368 = state_1048__$1;
(statearr_1163_1368[(1)] = (52));

(statearr_1163_1368[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (22))){
var inst_815 = (state_1048[(24)]);
var state_1048__$1 = state_1048;
var statearr_1164_1369 = state_1048__$1;
(statearr_1164_1369[(2)] = inst_815);

(statearr_1164_1369[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (54))){
var _ = (function (){var statearr_1165 = state_1048;
(statearr_1165[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1165;
})();
var state_1048__$1 = state_1048;
var ex1160 = (state_1048__$1[(2)]);
var statearr_1166_1370 = state_1048__$1;
(statearr_1166_1370[(5)] = ex1160);


if((ex1160 instanceof Error)){
var statearr_1167_1371 = state_1048__$1;
(statearr_1167_1371[(1)] = (49));

(statearr_1167_1371[(5)] = null);

} else {
throw ex1160;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (23))){
var inst_825 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1168 = state_1048;
(statearr_1168[(25)] = inst_825);

return statearr_1168;
})();
var statearr_1169_1372 = state_1048__$1;
(statearr_1169_1372[(2)] = null);

(statearr_1169_1372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (55))){
var inst_949 = (state_1048[(26)]);
var inst_949__$1 = (state_1048[(2)]);
var inst_950 = (inst_949__$1 instanceof cljs.core.ExceptionInfo);
var inst_951 = cljs.core.ex_data.call(null,inst_949__$1);
var inst_952 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_951);
var inst_953 = cljs.core._EQ_.call(null,inst_952,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_954 = ((inst_950) && (inst_953));
var state_1048__$1 = (function (){var statearr_1170 = state_1048;
(statearr_1170[(26)] = inst_949__$1);

return statearr_1170;
})();
if(cljs.core.truth_(inst_954)){
var statearr_1171_1373 = state_1048__$1;
(statearr_1171_1373[(1)] = (56));

} else {
var statearr_1172_1374 = state_1048__$1;
(statearr_1172_1374[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (24))){
var _ = (function (){var statearr_1173 = state_1048;
(statearr_1173[(4)] = cljs.core.cons.call(null,(27),(state_1048[(4)])));

return statearr_1173;
})();
var inst_837 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_838 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need init to update"];
var inst_839 = cljs.core.PersistentHashMap.fromArrays(inst_837,inst_838);
var inst_840 = cljs.test.do_report.call(null,inst_839);
var ___$1 = (function (){var statearr_1174 = state_1048;
(statearr_1174[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1174;
})();
var state_1048__$1 = state_1048;
var statearr_1175_1375 = state_1048__$1;
(statearr_1175_1375[(2)] = inst_840);

(statearr_1175_1375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (56))){
var inst_949 = (state_1048[(26)]);
var inst_956 = (function(){throw inst_949})();
var state_1048__$1 = state_1048;
var statearr_1176_1376 = state_1048__$1;
(statearr_1176_1376[(2)] = inst_956);

(statearr_1176_1376[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (25))){
var inst_843 = (state_1048[(2)]);
var _ = (function (){var statearr_1177 = state_1048;
(statearr_1177[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1177;
})();
var state_1048__$1 = state_1048;
var statearr_1178_1377 = state_1048__$1;
(statearr_1178_1377[(2)] = inst_843);

(statearr_1178_1377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (57))){
var inst_949 = (state_1048[(26)]);
var state_1048__$1 = state_1048;
var statearr_1179_1378 = state_1048__$1;
(statearr_1179_1378[(2)] = inst_949);

(statearr_1179_1378[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (26))){
var inst_826 = (state_1048[(2)]);
var inst_827 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_828 = null;
var inst_829 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need init to update",inst_828,inst_826];
var inst_830 = cljs.core.PersistentHashMap.fromArrays(inst_827,inst_829);
var inst_831 = cljs.test.do_report.call(null,inst_830);
var state_1048__$1 = state_1048;
var statearr_1181_1379 = state_1048__$1;
(statearr_1181_1379[(2)] = inst_831);

(statearr_1181_1379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (58))){
var inst_959 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1182 = state_1048;
(statearr_1182[(27)] = inst_959);

return statearr_1182;
})();
var statearr_1183_1380 = state_1048__$1;
(statearr_1183_1380[(2)] = null);

(statearr_1183_1380[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (27))){
var _ = (function (){var statearr_1184 = state_1048;
(statearr_1184[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1184;
})();
var state_1048__$1 = state_1048;
var ex1180 = (state_1048__$1[(2)]);
var statearr_1185_1381 = state_1048__$1;
(statearr_1185_1381[(5)] = ex1180);


var statearr_1186_1382 = state_1048__$1;
(statearr_1186_1382[(1)] = (26));

(statearr_1186_1382[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (59))){
var _ = (function (){var statearr_1187 = state_1048;
(statearr_1187[(4)] = cljs.core.cons.call(null,(62),(state_1048[(4)])));

return statearr_1187;
})();
var state_1048__$1 = state_1048;
var statearr_1188_1383 = state_1048__$1;
(statearr_1188_1383[(1)] = (63));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (28))){
var _ = (function (){var statearr_1190 = state_1048;
(statearr_1190[(4)] = cljs.core.cons.call(null,(35),(state_1048[(4)])));

return statearr_1190;
})();
var inst_872 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"init",e2e.proposals.prop_config);
var inst_873 = cljs.core.async.interop.p__GT_c.call(null,inst_872);
var state_1048__$1 = state_1048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1048__$1,(36),inst_873);
} else {
if((state_val_1049 === (60))){
var inst_987 = (state_1048[(2)]);
var _ = (function (){var statearr_1191 = state_1048;
(statearr_1191[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1191;
})();
var state_1048__$1 = state_1048;
var statearr_1192_1384 = state_1048__$1;
(statearr_1192_1384[(2)] = inst_987);

(statearr_1192_1384[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (29))){
var inst_916 = (state_1048[(2)]);
var state_1048__$1 = (function (){var statearr_1193 = state_1048;
(statearr_1193[(28)] = inst_916);

return statearr_1193;
})();
var statearr_1194_1385 = state_1048__$1;
(statearr_1194_1385[(2)] = null);

(statearr_1194_1385[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (61))){
var inst_960 = (state_1048[(2)]);
var inst_961 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_962 = true;
var inst_963 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update after init",inst_962,inst_960];
var inst_964 = cljs.core.PersistentHashMap.fromArrays(inst_961,inst_963);
var inst_965 = cljs.test.do_report.call(null,inst_964);
var state_1048__$1 = state_1048;
var statearr_1196_1386 = state_1048__$1;
(statearr_1196_1386[(2)] = inst_965);

(statearr_1196_1386[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (30))){
var inst_847 = (state_1048[(2)]);
var inst_848 = cljs.core.prn.call(null,"test failed with ",inst_847);
var state_1048__$1 = (function (){var statearr_1197 = state_1048;
(statearr_1197[(29)] = inst_848);

return statearr_1197;
})();
var statearr_1198_1387 = state_1048__$1;
(statearr_1198_1387[(2)] = null);

(statearr_1198_1387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (62))){
var _ = (function (){var statearr_1199 = state_1048;
(statearr_1199[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1199;
})();
var state_1048__$1 = state_1048;
var ex1195 = (state_1048__$1[(2)]);
var statearr_1200_1388 = state_1048__$1;
(statearr_1200_1388[(5)] = ex1195);


var statearr_1201_1389 = state_1048__$1;
(statearr_1201_1389[(1)] = (61));

(statearr_1201_1389[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (31))){
var _ = (function (){var statearr_1202 = state_1048;
(statearr_1202[(4)] = cljs.core.cons.call(null,(34),(state_1048[(4)])));

return statearr_1202;
})();
var inst_860 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_861 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_862 = cljs.core.PersistentHashMap.fromArrays(inst_860,inst_861);
var inst_863 = cljs.test.do_report.call(null,inst_862);
var ___$1 = (function (){var statearr_1203 = state_1048;
(statearr_1203[(4)] = cljs.core.rest.call(null,(state_1048[(4)])));

return statearr_1203;
})();
var state_1048__$1 = state_1048;
var statearr_1204_1390 = state_1048__$1;
(statearr_1204_1390[(2)] = inst_863);

(statearr_1204_1390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1049 === (63))){
var inst_972 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_973 = true;
var inst_974 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update after init",inst_973,true];
var inst_975 = cljs.core.PersistentHashMap.fromArrays(inst_972,inst_974);
var inst_976 = cljs.test.do_report.call(null,inst_975);
var state_1048__$1 = state_1048;
var statearr_1205_1391 = state_1048__$1;
(statearr_1205_1391[(2)] = inst_976);

(statearr_1205_1391[(1)] = (65));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_1206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1206[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_1206[(1)] = (1));

return statearr_1206;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_1048){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1207){var ex__18__auto__ = e1207;
var statearr_1208_1392 = state_1048;
(statearr_1208_1392[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1048[(4)]))){
var statearr_1209_1393 = state_1048;
(statearr_1209_1393[(1)] = cljs.core.first.call(null,(state_1048[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__1394 = state_1048;
state_1048 = G__1394;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_1048){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_1048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_1210 = f__20__auto__.call(null);
(statearr_1210[(6)] = c__19__auto__);

return statearr_1210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta308","meta308",(-2092885430),null)], null);
});

e2e.proposals.t_e2e$proposals307.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals307.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals307";

e2e.proposals.t_e2e$proposals307.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals307");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals307.
 */
e2e.proposals.__GT_t_e2e$proposals307 = (function e2e$proposals$__GT_t_e2e$proposals307(meta308){
return (new e2e.proposals.t_e2e$proposals307(meta308));
});

}

return (new e2e.proposals.t_e2e$proposals307(null));
});

e2e.proposals.init.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.init;},new cljs.core.Symbol("e2e.proposals","init","e2e.proposals/init",(-458618888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/proposals.cljs",(14),(1),(60),(60),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.init)?e2e.proposals.init.cljs$lang$test:null)]));
e2e.proposals.base_prop = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.owner_acc,new cljs.core.Keyword(null,"pay","pay",(-1672734919)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field_0","field_0",(-108942754)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),"400.0000 EFX",new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.proposals.token_acc], null),new cljs.core.Keyword(null,"field_1","field_1",(1792775021)),"2010-01-12"], null)], null),new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"aa",new cljs.core.Keyword(null,"category","category",(-593092832)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(0),new cljs.core.Keyword(null,"transaction_hash","transaction_hash",(-1321280573)),null], null);
e2e.proposals.proposal_payment = (function e2e$proposals$proposal_payment(){
return cljs.test.test_var.call(null,e2e.proposals.proposal_payment.cljs$lang$var);
});
e2e.proposals.proposal_payment.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals1395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals1395 = (function (meta1396){
this.meta1396 = meta1396;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals1395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1397,meta1396__$1){
var self__ = this;
var _1397__$1 = this;
return (new e2e.proposals.t_e2e$proposals1395(meta1396__$1));
});

e2e.proposals.t_e2e$proposals1395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1397){
var self__ = this;
var _1397__$1 = this;
return self__.meta1396;
});

e2e.proposals.t_e2e$proposals1395.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals1395.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_1678){
var state_val_1679 = (state_1678[(1)]);
if((state_val_1679 === (32))){
var _ = (function (){var statearr_1680 = state_1678;
(statearr_1680[(4)] = cljs.core.cons.call(null,(45),(state_1678[(4)])));

return statearr_1680;
})();
var inst_1550 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_1551 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,"1.5000 EFX","proposal"];
var inst_1552 = cljs.core.PersistentHashMap.fromArrays(inst_1550,inst_1551);
var inst_1553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1554 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_1555 = [e2e.proposals.owner_acc,"active"];
var inst_1556 = cljs.core.PersistentHashMap.fromArrays(inst_1554,inst_1555);
var inst_1557 = [inst_1556];
var inst_1558 = (new cljs.core.PersistentVector(null,(1),(5),inst_1553,inst_1557,null));
var inst_1559 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_1552,inst_1558);
var inst_1560 = cljs.core.async.interop.p__GT_c.call(null,inst_1559);
var state_1678__$1 = state_1678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1678__$1,(46),inst_1560);
} else {
if((state_val_1679 === (64))){
var inst_1631 = (state_1678[(7)]);
var state_1678__$1 = state_1678;
var statearr_1681_2261 = state_1678__$1;
(statearr_1681_2261[(2)] = inst_1631);

(statearr_1681_2261[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (1))){
var state_1678__$1 = state_1678;
var statearr_1682_2262 = state_1678__$1;
(statearr_1682_2262[(2)] = null);

(statearr_1682_2262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (33))){
var inst_1593 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1683 = state_1678;
(statearr_1683[(8)] = inst_1593);

return statearr_1683;
})();
var statearr_1684_2263 = state_1678__$1;
(statearr_1684_2263[(2)] = null);

(statearr_1684_2263[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (65))){
var inst_1641 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1685 = state_1678;
(statearr_1685[(9)] = inst_1641);

return statearr_1685;
})();
var statearr_1686_2264 = state_1678__$1;
(statearr_1686_2264[(2)] = null);

(statearr_1686_2264[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (2))){
var _ = (function (){var statearr_1687 = state_1678;
(statearr_1687[(4)] = cljs.core.cons.call(null,(5),(state_1678[(4)])));

return statearr_1687;
})();
var inst_1406 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_1407 = cljs.core.async.interop.p__GT_c.call(null,inst_1406);
var state_1678__$1 = state_1678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1678__$1,(6),inst_1407);
} else {
if((state_val_1679 === (34))){
var inst_1508 = (state_1678[(10)]);
var inst_1509 = (state_1678[(11)]);
var inst_1506 = (state_1678[(2)]);
var inst_1507 = inst_1506.cause;
var inst_1508__$1 = inst_1507.message;
var inst_1509__$1 = clojure.string.ends_with_QMARK_.call(null,inst_1508__$1,"wrong amount");
var inst_1510 = (!(inst_1509__$1));
var state_1678__$1 = (function (){var statearr_1688 = state_1678;
(statearr_1688[(10)] = inst_1508__$1);

(statearr_1688[(11)] = inst_1509__$1);

return statearr_1688;
})();
if(inst_1510){
var statearr_1689_2265 = state_1678__$1;
(statearr_1689_2265[(1)] = (35));

} else {
var statearr_1690_2266 = state_1678__$1;
(statearr_1690_2266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (66))){
var _ = (function (){var statearr_1691 = state_1678;
(statearr_1691[(4)] = cljs.core.cons.call(null,(69),(state_1678[(4)])));

return statearr_1691;
})();
var state_1678__$1 = state_1678;
var statearr_1692_2267 = state_1678__$1;
(statearr_1692_2267[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (3))){
var inst_1675 = (state_1678[(2)]);
var inst_1676 = done.call(null);
var state_1678__$1 = (function (){var statearr_1694 = state_1678;
(statearr_1694[(12)] = inst_1675);

return statearr_1694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1678__$1,inst_1676);
} else {
if((state_val_1679 === (35))){
var inst_1508 = (state_1678[(10)]);
var inst_1512 = ["expected =","wrong amount"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1508)].join('');
var inst_1513 = cljs.core.prn.call(null,inst_1512);
var state_1678__$1 = state_1678;
var statearr_1695_2268 = state_1678__$1;
(statearr_1695_2268[(2)] = inst_1513);

(statearr_1695_2268[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (67))){
var inst_1669 = (state_1678[(2)]);
var _ = (function (){var statearr_1696 = state_1678;
(statearr_1696[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1696;
})();
var state_1678__$1 = state_1678;
var statearr_1697_2269 = state_1678__$1;
(statearr_1697_2269[(2)] = inst_1669);

(statearr_1697_2269[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (4))){
var inst_1399 = (state_1678[(2)]);
var inst_1400 = cljs.core.prn.call(null,inst_1399);
var state_1678__$1 = state_1678;
var statearr_1698_2270 = state_1678__$1;
(statearr_1698_2270[(2)] = inst_1400);

(statearr_1698_2270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (36))){
var state_1678__$1 = state_1678;
var statearr_1700_2271 = state_1678__$1;
(statearr_1700_2271[(2)] = null);

(statearr_1700_2271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (68))){
var inst_1642 = (state_1678[(2)]);
var inst_1643 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1644 = true;
var inst_1645 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_1644,inst_1642];
var inst_1646 = cljs.core.PersistentHashMap.fromArrays(inst_1643,inst_1645);
var inst_1647 = cljs.test.do_report.call(null,inst_1646);
var state_1678__$1 = state_1678;
var statearr_1701_2272 = state_1678__$1;
(statearr_1701_2272[(2)] = inst_1647);

(statearr_1701_2272[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (5))){
var _ = (function (){var statearr_1703 = state_1678;
(statearr_1703[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1703;
})();
var state_1678__$1 = state_1678;
var ex1699 = (state_1678__$1[(2)]);
var statearr_1704_2273 = state_1678__$1;
(statearr_1704_2273[(5)] = ex1699);


if((ex1699 instanceof Error)){
var statearr_1705_2274 = state_1678__$1;
(statearr_1705_2274[(1)] = (4));

(statearr_1705_2274[(5)] = null);

} else {
throw ex1699;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (37))){
var inst_1516 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1706 = state_1678;
(statearr_1706[(13)] = inst_1516);

return statearr_1706;
})();
var statearr_1707_2275 = state_1678__$1;
(statearr_1707_2275[(2)] = null);

(statearr_1707_2275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (69))){
var _ = (function (){var statearr_1708 = state_1678;
(statearr_1708[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1708;
})();
var state_1678__$1 = state_1678;
var ex1702 = (state_1678__$1[(2)]);
var statearr_1709_2276 = state_1678__$1;
(statearr_1709_2276[(5)] = ex1702);


var statearr_1710_2277 = state_1678__$1;
(statearr_1710_2277[(1)] = (68));

(statearr_1710_2277[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (6))){
var inst_1409 = (state_1678[(14)]);
var inst_1409__$1 = (state_1678[(2)]);
var inst_1410 = (inst_1409__$1 instanceof cljs.core.ExceptionInfo);
var inst_1411 = cljs.core.ex_data.call(null,inst_1409__$1);
var inst_1412 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1411);
var inst_1413 = cljs.core._EQ_.call(null,inst_1412,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1414 = ((inst_1410) && (inst_1413));
var state_1678__$1 = (function (){var statearr_1711 = state_1678;
(statearr_1711[(14)] = inst_1409__$1);

return statearr_1711;
})();
if(cljs.core.truth_(inst_1414)){
var statearr_1712_2278 = state_1678__$1;
(statearr_1712_2278[(1)] = (7));

} else {
var statearr_1713_2279 = state_1678__$1;
(statearr_1713_2279[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (38))){
var inst_1509 = (state_1678[(11)]);
var _ = (function (){var statearr_1714 = state_1678;
(statearr_1714[(4)] = cljs.core.cons.call(null,(41),(state_1678[(4)])));

return statearr_1714;
})();
var state_1678__$1 = state_1678;
if(cljs.core.truth_(inst_1509)){
var statearr_1715_2280 = state_1678__$1;
(statearr_1715_2280[(1)] = (42));

} else {
var statearr_1716_2281 = state_1678__$1;
(statearr_1716_2281[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (70))){
var inst_1654 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1655 = true;
var inst_1656 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can send correct amount",inst_1655,true];
var inst_1657 = cljs.core.PersistentHashMap.fromArrays(inst_1654,inst_1656);
var inst_1658 = cljs.test.do_report.call(null,inst_1657);
var state_1678__$1 = state_1678;
var statearr_1717_2282 = state_1678__$1;
(statearr_1717_2282[(2)] = inst_1658);

(statearr_1717_2282[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (7))){
var inst_1409 = (state_1678[(14)]);
var inst_1416 = (function(){throw inst_1409})();
var state_1678__$1 = state_1678;
var statearr_1718_2283 = state_1678__$1;
(statearr_1718_2283[(2)] = inst_1416);

(statearr_1718_2283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (39))){
var inst_1544 = (state_1678[(2)]);
var state_1678__$1 = state_1678;
var statearr_1719_2284 = state_1678__$1;
(statearr_1719_2284[(2)] = inst_1544);

(statearr_1719_2284[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (71))){
var inst_1660 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1661 = true;
var inst_1662 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount",inst_1661,true];
var inst_1663 = cljs.core.PersistentHashMap.fromArrays(inst_1660,inst_1662);
var inst_1664 = cljs.test.do_report.call(null,inst_1663);
var state_1678__$1 = state_1678;
var statearr_1720_2285 = state_1678__$1;
(statearr_1720_2285[(2)] = inst_1664);

(statearr_1720_2285[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (8))){
var inst_1409 = (state_1678[(14)]);
var state_1678__$1 = state_1678;
var statearr_1721_2286 = state_1678__$1;
(statearr_1721_2286[(2)] = inst_1409);

(statearr_1721_2286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (40))){
var inst_1517 = (state_1678[(2)]);
var inst_1518 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1519 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1520 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_1519,inst_1517];
var inst_1521 = cljs.core.PersistentHashMap.fromArrays(inst_1518,inst_1520);
var inst_1522 = cljs.test.do_report.call(null,inst_1521);
var state_1678__$1 = state_1678;
var statearr_1722_2287 = state_1678__$1;
(statearr_1722_2287[(2)] = inst_1522);

(statearr_1722_2287[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (72))){
var inst_1666 = (state_1678[(2)]);
var _ = (function (){var statearr_1724 = state_1678;
(statearr_1724[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1724;
})();
var state_1678__$1 = (function (){var statearr_1725 = state_1678;
(statearr_1725[(15)] = inst_1666);

return statearr_1725;
})();
var statearr_1726_2288 = state_1678__$1;
(statearr_1726_2288[(2)] = true);

(statearr_1726_2288[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (9))){
var inst_1419 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1727 = state_1678;
(statearr_1727[(16)] = inst_1419);

return statearr_1727;
})();
var statearr_1728_2289 = state_1678__$1;
(statearr_1728_2289[(2)] = null);

(statearr_1728_2289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (41))){
var _ = (function (){var statearr_1729 = state_1678;
(statearr_1729[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1729;
})();
var state_1678__$1 = state_1678;
var ex1723 = (state_1678__$1[(2)]);
var statearr_1730_2290 = state_1678__$1;
(statearr_1730_2290[(5)] = ex1723);


var statearr_1731_2291 = state_1678__$1;
(statearr_1731_2291[(1)] = (40));

(statearr_1731_2291[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (10))){
var _ = (function (){var statearr_1732 = state_1678;
(statearr_1732[(4)] = cljs.core.cons.call(null,(23),(state_1678[(4)])));

return statearr_1732;
})();
var inst_1464 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"ee");
var inst_1465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1466 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_1467 = [e2e.proposals.owner_acc,"active"];
var inst_1468 = cljs.core.PersistentHashMap.fromArrays(inst_1466,inst_1467);
var inst_1469 = [inst_1468];
var inst_1470 = (new cljs.core.PersistentVector(null,(1),(5),inst_1465,inst_1469,null));
var inst_1471 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_1464,inst_1470);
var inst_1472 = cljs.core.async.interop.p__GT_c.call(null,inst_1471);
var state_1678__$1 = state_1678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1678__$1,(24),inst_1472);
} else {
if((state_val_1679 === (42))){
var inst_1509 = (state_1678[(11)]);
var inst_1529 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1530 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1531 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs correct amount",inst_1530,inst_1509];
var inst_1532 = cljs.core.PersistentHashMap.fromArrays(inst_1529,inst_1531);
var inst_1533 = cljs.test.do_report.call(null,inst_1532);
var state_1678__$1 = state_1678;
var statearr_1733_2292 = state_1678__$1;
(statearr_1733_2292[(2)] = inst_1533);

(statearr_1733_2292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (11))){
var inst_1505 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1734 = state_1678;
(statearr_1734[(17)] = inst_1505);

return statearr_1734;
})();
var statearr_1735_2293 = state_1678__$1;
(statearr_1735_2293[(2)] = null);

(statearr_1735_2293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (43))){
var inst_1509 = (state_1678[(11)]);
var inst_1535 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1536 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1537 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount",inst_1536,inst_1509];
var inst_1538 = cljs.core.PersistentHashMap.fromArrays(inst_1535,inst_1537);
var inst_1539 = cljs.test.do_report.call(null,inst_1538);
var state_1678__$1 = state_1678;
var statearr_1736_2294 = state_1678__$1;
(statearr_1736_2294[(2)] = inst_1539);

(statearr_1736_2294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (12))){
var inst_1422 = (state_1678[(18)]);
var inst_1423 = (state_1678[(19)]);
var inst_1420 = (state_1678[(2)]);
var inst_1421 = inst_1420.cause;
var inst_1422__$1 = inst_1421.message;
var inst_1423__$1 = clojure.string.ends_with_QMARK_.call(null,inst_1422__$1,"no proposal reserved");
var inst_1424 = (!(inst_1423__$1));
var state_1678__$1 = (function (){var statearr_1737 = state_1678;
(statearr_1737[(18)] = inst_1422__$1);

(statearr_1737[(19)] = inst_1423__$1);

return statearr_1737;
})();
if(inst_1424){
var statearr_1738_2295 = state_1678__$1;
(statearr_1738_2295[(1)] = (13));

} else {
var statearr_1739_2296 = state_1678__$1;
(statearr_1739_2296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (44))){
var inst_1509 = (state_1678[(11)]);
var inst_1541 = (state_1678[(2)]);
var _ = (function (){var statearr_1741 = state_1678;
(statearr_1741[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1741;
})();
var state_1678__$1 = (function (){var statearr_1742 = state_1678;
(statearr_1742[(20)] = inst_1541);

return statearr_1742;
})();
var statearr_1743_2297 = state_1678__$1;
(statearr_1743_2297[(2)] = inst_1509);

(statearr_1743_2297[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (13))){
var inst_1422 = (state_1678[(18)]);
var inst_1426 = ["expected =","no proposal reserved"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1422)].join('');
var inst_1427 = cljs.core.prn.call(null,inst_1426);
var state_1678__$1 = state_1678;
var statearr_1744_2298 = state_1678__$1;
(statearr_1744_2298[(2)] = inst_1427);

(statearr_1744_2298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (45))){
var _ = (function (){var statearr_1745 = state_1678;
(statearr_1745[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1745;
})();
var state_1678__$1 = state_1678;
var ex1740 = (state_1678__$1[(2)]);
var statearr_1746_2299 = state_1678__$1;
(statearr_1746_2299[(5)] = ex1740);


if((ex1740 instanceof Error)){
var statearr_1747_2300 = state_1678__$1;
(statearr_1747_2300[(1)] = (34));

(statearr_1747_2300[(5)] = null);

} else {
throw ex1740;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (14))){
var state_1678__$1 = state_1678;
var statearr_1748_2301 = state_1678__$1;
(statearr_1748_2301[(2)] = null);

(statearr_1748_2301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (46))){
var inst_1562 = (state_1678[(21)]);
var inst_1562__$1 = (state_1678[(2)]);
var inst_1563 = (inst_1562__$1 instanceof cljs.core.ExceptionInfo);
var inst_1564 = cljs.core.ex_data.call(null,inst_1562__$1);
var inst_1565 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1564);
var inst_1566 = cljs.core._EQ_.call(null,inst_1565,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1567 = ((inst_1563) && (inst_1566));
var state_1678__$1 = (function (){var statearr_1749 = state_1678;
(statearr_1749[(21)] = inst_1562__$1);

return statearr_1749;
})();
if(cljs.core.truth_(inst_1567)){
var statearr_1750_2302 = state_1678__$1;
(statearr_1750_2302[(1)] = (47));

} else {
var statearr_1751_2303 = state_1678__$1;
(statearr_1751_2303[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (15))){
var inst_1430 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1752 = state_1678;
(statearr_1752[(22)] = inst_1430);

return statearr_1752;
})();
var statearr_1753_2304 = state_1678__$1;
(statearr_1753_2304[(2)] = null);

(statearr_1753_2304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (47))){
var inst_1562 = (state_1678[(21)]);
var inst_1569 = (function(){throw inst_1562})();
var state_1678__$1 = state_1678;
var statearr_1754_2305 = state_1678__$1;
(statearr_1754_2305[(2)] = inst_1569);

(statearr_1754_2305[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (16))){
var inst_1423 = (state_1678[(19)]);
var _ = (function (){var statearr_1755 = state_1678;
(statearr_1755[(4)] = cljs.core.cons.call(null,(19),(state_1678[(4)])));

return statearr_1755;
})();
var state_1678__$1 = state_1678;
if(cljs.core.truth_(inst_1423)){
var statearr_1756_2306 = state_1678__$1;
(statearr_1756_2306[(1)] = (20));

} else {
var statearr_1757_2307 = state_1678__$1;
(statearr_1757_2307[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (48))){
var inst_1562 = (state_1678[(21)]);
var state_1678__$1 = state_1678;
var statearr_1758_2308 = state_1678__$1;
(statearr_1758_2308[(2)] = inst_1562);

(statearr_1758_2308[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (17))){
var inst_1458 = (state_1678[(2)]);
var state_1678__$1 = state_1678;
var statearr_1759_2309 = state_1678__$1;
(statearr_1759_2309[(2)] = inst_1458);

(statearr_1759_2309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (49))){
var inst_1572 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1760 = state_1678;
(statearr_1760[(23)] = inst_1572);

return statearr_1760;
})();
var statearr_1761_2310 = state_1678__$1;
(statearr_1761_2310[(2)] = null);

(statearr_1761_2310[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (18))){
var inst_1431 = (state_1678[(2)]);
var inst_1432 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1433 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1434 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_1433,inst_1431];
var inst_1435 = cljs.core.PersistentHashMap.fromArrays(inst_1432,inst_1434);
var inst_1436 = cljs.test.do_report.call(null,inst_1435);
var state_1678__$1 = state_1678;
var statearr_1763_2311 = state_1678__$1;
(statearr_1763_2311[(2)] = inst_1436);

(statearr_1763_2311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (50))){
var _ = (function (){var statearr_1764 = state_1678;
(statearr_1764[(4)] = cljs.core.cons.call(null,(53),(state_1678[(4)])));

return statearr_1764;
})();
var inst_1584 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1585 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount"];
var inst_1586 = cljs.core.PersistentHashMap.fromArrays(inst_1584,inst_1585);
var inst_1587 = cljs.test.do_report.call(null,inst_1586);
var ___$1 = (function (){var statearr_1765 = state_1678;
(statearr_1765[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1765;
})();
var state_1678__$1 = state_1678;
var statearr_1766_2312 = state_1678__$1;
(statearr_1766_2312[(2)] = inst_1587);

(statearr_1766_2312[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (19))){
var _ = (function (){var statearr_1767 = state_1678;
(statearr_1767[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1767;
})();
var state_1678__$1 = state_1678;
var ex1762 = (state_1678__$1[(2)]);
var statearr_1768_2313 = state_1678__$1;
(statearr_1768_2313[(5)] = ex1762);


var statearr_1769_2314 = state_1678__$1;
(statearr_1769_2314[(1)] = (18));

(statearr_1769_2314[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (51))){
var inst_1590 = (state_1678[(2)]);
var _ = (function (){var statearr_1770 = state_1678;
(statearr_1770[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1770;
})();
var state_1678__$1 = state_1678;
var statearr_1771_2315 = state_1678__$1;
(statearr_1771_2315[(2)] = inst_1590);

(statearr_1771_2315[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (20))){
var inst_1423 = (state_1678[(19)]);
var inst_1443 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1444 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1445 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need a reservation",inst_1444,inst_1423];
var inst_1446 = cljs.core.PersistentHashMap.fromArrays(inst_1443,inst_1445);
var inst_1447 = cljs.test.do_report.call(null,inst_1446);
var state_1678__$1 = state_1678;
var statearr_1772_2316 = state_1678__$1;
(statearr_1772_2316[(2)] = inst_1447);

(statearr_1772_2316[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (52))){
var inst_1573 = (state_1678[(2)]);
var inst_1574 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1575 = null;
var inst_1576 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_1575,inst_1573];
var inst_1577 = cljs.core.PersistentHashMap.fromArrays(inst_1574,inst_1576);
var inst_1578 = cljs.test.do_report.call(null,inst_1577);
var state_1678__$1 = state_1678;
var statearr_1774_2317 = state_1678__$1;
(statearr_1774_2317[(2)] = inst_1578);

(statearr_1774_2317[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (21))){
var inst_1423 = (state_1678[(19)]);
var inst_1449 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1450 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1451 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation",inst_1450,inst_1423];
var inst_1452 = cljs.core.PersistentHashMap.fromArrays(inst_1449,inst_1451);
var inst_1453 = cljs.test.do_report.call(null,inst_1452);
var state_1678__$1 = state_1678;
var statearr_1775_2318 = state_1678__$1;
(statearr_1775_2318[(2)] = inst_1453);

(statearr_1775_2318[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (53))){
var _ = (function (){var statearr_1776 = state_1678;
(statearr_1776[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1776;
})();
var state_1678__$1 = state_1678;
var ex1773 = (state_1678__$1[(2)]);
var statearr_1777_2319 = state_1678__$1;
(statearr_1777_2319[(5)] = ex1773);


var statearr_1778_2320 = state_1678__$1;
(statearr_1778_2320[(1)] = (52));

(statearr_1778_2320[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (22))){
var inst_1423 = (state_1678[(19)]);
var inst_1455 = (state_1678[(2)]);
var _ = (function (){var statearr_1780 = state_1678;
(statearr_1780[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1780;
})();
var state_1678__$1 = (function (){var statearr_1781 = state_1678;
(statearr_1781[(24)] = inst_1455);

return statearr_1781;
})();
var statearr_1782_2321 = state_1678__$1;
(statearr_1782_2321[(2)] = inst_1423);

(statearr_1782_2321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (54))){
var _ = (function (){var statearr_1783 = state_1678;
(statearr_1783[(4)] = cljs.core.cons.call(null,(61),(state_1678[(4)])));

return statearr_1783;
})();
var inst_1619 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_1620 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_1621 = cljs.core.PersistentHashMap.fromArrays(inst_1619,inst_1620);
var inst_1622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1623 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_1624 = [e2e.proposals.owner_acc,"active"];
var inst_1625 = cljs.core.PersistentHashMap.fromArrays(inst_1623,inst_1624);
var inst_1626 = [inst_1625];
var inst_1627 = (new cljs.core.PersistentVector(null,(1),(5),inst_1622,inst_1626,null));
var inst_1628 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_1621,inst_1627);
var inst_1629 = cljs.core.async.interop.p__GT_c.call(null,inst_1628);
var state_1678__$1 = state_1678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1678__$1,(62),inst_1629);
} else {
if((state_val_1679 === (23))){
var _ = (function (){var statearr_1784 = state_1678;
(statearr_1784[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1784;
})();
var state_1678__$1 = state_1678;
var ex1779 = (state_1678__$1[(2)]);
var statearr_1785_2322 = state_1678__$1;
(statearr_1785_2322[(5)] = ex1779);


if((ex1779 instanceof Error)){
var statearr_1786_2323 = state_1678__$1;
(statearr_1786_2323[(1)] = (12));

(statearr_1786_2323[(5)] = null);

} else {
throw ex1779;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (55))){
var inst_1672 = (state_1678[(2)]);
var _ = (function (){var statearr_1787 = state_1678;
(statearr_1787[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1787;
})();
var state_1678__$1 = state_1678;
var statearr_1788_2324 = state_1678__$1;
(statearr_1788_2324[(2)] = inst_1672);

(statearr_1788_2324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (24))){
var inst_1474 = (state_1678[(25)]);
var inst_1474__$1 = (state_1678[(2)]);
var inst_1475 = (inst_1474__$1 instanceof cljs.core.ExceptionInfo);
var inst_1476 = cljs.core.ex_data.call(null,inst_1474__$1);
var inst_1477 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1476);
var inst_1478 = cljs.core._EQ_.call(null,inst_1477,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1479 = ((inst_1475) && (inst_1478));
var state_1678__$1 = (function (){var statearr_1789 = state_1678;
(statearr_1789[(25)] = inst_1474__$1);

return statearr_1789;
})();
if(cljs.core.truth_(inst_1479)){
var statearr_1790_2325 = state_1678__$1;
(statearr_1790_2325[(1)] = (25));

} else {
var statearr_1791_2326 = state_1678__$1;
(statearr_1791_2326[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (56))){
var inst_1594 = (state_1678[(2)]);
var inst_1595 = cljs.core.prn.call(null,"test failed with ",inst_1594);
var state_1678__$1 = (function (){var statearr_1792 = state_1678;
(statearr_1792[(26)] = inst_1595);

return statearr_1792;
})();
var statearr_1793_2327 = state_1678__$1;
(statearr_1793_2327[(2)] = null);

(statearr_1793_2327[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (25))){
var inst_1474 = (state_1678[(25)]);
var inst_1481 = (function(){throw inst_1474})();
var state_1678__$1 = state_1678;
var statearr_1794_2328 = state_1678__$1;
(statearr_1794_2328[(2)] = inst_1481);

(statearr_1794_2328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (57))){
var _ = (function (){var statearr_1795 = state_1678;
(statearr_1795[(4)] = cljs.core.cons.call(null,(60),(state_1678[(4)])));

return statearr_1795;
})();
var inst_1607 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1608 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount"];
var inst_1609 = cljs.core.PersistentHashMap.fromArrays(inst_1607,inst_1608);
var inst_1610 = cljs.test.do_report.call(null,inst_1609);
var ___$1 = (function (){var statearr_1796 = state_1678;
(statearr_1796[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1796;
})();
var state_1678__$1 = state_1678;
var statearr_1797_2329 = state_1678__$1;
(statearr_1797_2329[(2)] = inst_1610);

(statearr_1797_2329[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (26))){
var inst_1474 = (state_1678[(25)]);
var state_1678__$1 = state_1678;
var statearr_1798_2330 = state_1678__$1;
(statearr_1798_2330[(2)] = inst_1474);

(statearr_1798_2330[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (58))){
var inst_1613 = (state_1678[(2)]);
var state_1678__$1 = state_1678;
var statearr_1799_2331 = state_1678__$1;
(statearr_1799_2331[(2)] = inst_1613);

(statearr_1799_2331[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (27))){
var inst_1484 = (state_1678[(2)]);
var state_1678__$1 = (function (){var statearr_1800 = state_1678;
(statearr_1800[(27)] = inst_1484);

return statearr_1800;
})();
var statearr_1801_2332 = state_1678__$1;
(statearr_1801_2332[(2)] = null);

(statearr_1801_2332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (59))){
var inst_1596 = (state_1678[(2)]);
var inst_1597 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1598 = null;
var inst_1599 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_1598,inst_1596];
var inst_1600 = cljs.core.PersistentHashMap.fromArrays(inst_1597,inst_1599);
var inst_1601 = cljs.test.do_report.call(null,inst_1600);
var state_1678__$1 = state_1678;
var statearr_1803_2333 = state_1678__$1;
(statearr_1803_2333[(2)] = inst_1601);

(statearr_1803_2333[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (28))){
var _ = (function (){var statearr_1804 = state_1678;
(statearr_1804[(4)] = cljs.core.cons.call(null,(31),(state_1678[(4)])));

return statearr_1804;
})();
var inst_1496 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1497 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation"];
var inst_1498 = cljs.core.PersistentHashMap.fromArrays(inst_1496,inst_1497);
var inst_1499 = cljs.test.do_report.call(null,inst_1498);
var ___$1 = (function (){var statearr_1805 = state_1678;
(statearr_1805[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1805;
})();
var state_1678__$1 = state_1678;
var statearr_1806_2334 = state_1678__$1;
(statearr_1806_2334[(2)] = inst_1499);

(statearr_1806_2334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (60))){
var _ = (function (){var statearr_1808 = state_1678;
(statearr_1808[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1808;
})();
var state_1678__$1 = state_1678;
var ex1802 = (state_1678__$1[(2)]);
var statearr_1809_2335 = state_1678__$1;
(statearr_1809_2335[(5)] = ex1802);


var statearr_1810_2336 = state_1678__$1;
(statearr_1810_2336[(1)] = (59));

(statearr_1810_2336[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (29))){
var inst_1502 = (state_1678[(2)]);
var _ = (function (){var statearr_1811 = state_1678;
(statearr_1811[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1811;
})();
var state_1678__$1 = state_1678;
var statearr_1812_2337 = state_1678__$1;
(statearr_1812_2337[(2)] = inst_1502);

(statearr_1812_2337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (61))){
var _ = (function (){var statearr_1813 = state_1678;
(statearr_1813[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1813;
})();
var state_1678__$1 = state_1678;
var ex1807 = (state_1678__$1[(2)]);
var statearr_1814_2338 = state_1678__$1;
(statearr_1814_2338[(5)] = ex1807);


if((ex1807 instanceof Error)){
var statearr_1815_2339 = state_1678__$1;
(statearr_1815_2339[(1)] = (56));

(statearr_1815_2339[(5)] = null);

} else {
throw ex1807;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (30))){
var inst_1485 = (state_1678[(2)]);
var inst_1486 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1487 = null;
var inst_1488 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_1487,inst_1485];
var inst_1489 = cljs.core.PersistentHashMap.fromArrays(inst_1486,inst_1488);
var inst_1490 = cljs.test.do_report.call(null,inst_1489);
var state_1678__$1 = state_1678;
var statearr_1817_2340 = state_1678__$1;
(statearr_1817_2340[(2)] = inst_1490);

(statearr_1817_2340[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (62))){
var inst_1631 = (state_1678[(7)]);
var inst_1631__$1 = (state_1678[(2)]);
var inst_1632 = (inst_1631__$1 instanceof cljs.core.ExceptionInfo);
var inst_1633 = cljs.core.ex_data.call(null,inst_1631__$1);
var inst_1634 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1633);
var inst_1635 = cljs.core._EQ_.call(null,inst_1634,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1636 = ((inst_1632) && (inst_1635));
var state_1678__$1 = (function (){var statearr_1818 = state_1678;
(statearr_1818[(7)] = inst_1631__$1);

return statearr_1818;
})();
if(cljs.core.truth_(inst_1636)){
var statearr_1819_2341 = state_1678__$1;
(statearr_1819_2341[(1)] = (63));

} else {
var statearr_1820_2342 = state_1678__$1;
(statearr_1820_2342[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (31))){
var _ = (function (){var statearr_1821 = state_1678;
(statearr_1821[(4)] = cljs.core.rest.call(null,(state_1678[(4)])));

return statearr_1821;
})();
var state_1678__$1 = state_1678;
var ex1816 = (state_1678__$1[(2)]);
var statearr_1822_2343 = state_1678__$1;
(statearr_1822_2343[(5)] = ex1816);


var statearr_1823_2344 = state_1678__$1;
(statearr_1823_2344[(1)] = (30));

(statearr_1823_2344[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_1679 === (63))){
var inst_1631 = (state_1678[(7)]);
var inst_1638 = (function(){throw inst_1631})();
var state_1678__$1 = state_1678;
var statearr_1824_2345 = state_1678__$1;
(statearr_1824_2345[(2)] = inst_1638);

(statearr_1824_2345[(1)] = (65));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_1825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1825[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_1825[(1)] = (1));

return statearr_1825;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_1678){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_1678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e1826){var ex__18__auto__ = e1826;
var statearr_1827_2346 = state_1678;
(statearr_1827_2346[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_1678[(4)]))){
var statearr_1828_2347 = state_1678;
(statearr_1828_2347[(1)] = cljs.core.first.call(null,(state_1678[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2348 = state_1678;
state_1678 = G__2348;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_1678){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_1678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_1829 = f__20__auto__.call(null);
(statearr_1829[(6)] = c__19__auto__);

return statearr_1829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals1395.prototype.apply = (function (self__,args1398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1398)));
});

e2e.proposals.t_e2e$proposals1395.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_2109){
var state_val_2110 = (state_2109[(1)]);
if((state_val_2110 === (32))){
var _ = (function (){var statearr_2111 = state_2109;
(statearr_2111[(4)] = cljs.core.cons.call(null,(45),(state_2109[(4)])));

return statearr_2111;
})();
var inst_1981 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_1982 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,"1.5000 EFX","proposal"];
var inst_1983 = cljs.core.PersistentHashMap.fromArrays(inst_1981,inst_1982);
var inst_1984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1985 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_1986 = [e2e.proposals.owner_acc,"active"];
var inst_1987 = cljs.core.PersistentHashMap.fromArrays(inst_1985,inst_1986);
var inst_1988 = [inst_1987];
var inst_1989 = (new cljs.core.PersistentVector(null,(1),(5),inst_1984,inst_1988,null));
var inst_1990 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_1983,inst_1989);
var inst_1991 = cljs.core.async.interop.p__GT_c.call(null,inst_1990);
var state_2109__$1 = state_2109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2109__$1,(46),inst_1991);
} else {
if((state_val_2110 === (64))){
var inst_2062 = (state_2109[(7)]);
var state_2109__$1 = state_2109;
var statearr_2112_2349 = state_2109__$1;
(statearr_2112_2349[(2)] = inst_2062);

(statearr_2112_2349[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (1))){
var state_2109__$1 = state_2109;
var statearr_2113_2350 = state_2109__$1;
(statearr_2113_2350[(2)] = null);

(statearr_2113_2350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (33))){
var inst_2024 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2114 = state_2109;
(statearr_2114[(8)] = inst_2024);

return statearr_2114;
})();
var statearr_2115_2351 = state_2109__$1;
(statearr_2115_2351[(2)] = null);

(statearr_2115_2351[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (65))){
var inst_2072 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2116 = state_2109;
(statearr_2116[(9)] = inst_2072);

return statearr_2116;
})();
var statearr_2117_2352 = state_2109__$1;
(statearr_2117_2352[(2)] = null);

(statearr_2117_2352[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (2))){
var _ = (function (){var statearr_2118 = state_2109;
(statearr_2118[(4)] = cljs.core.cons.call(null,(5),(state_2109[(4)])));

return statearr_2118;
})();
var inst_1837 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",e2e.proposals.prop_config);
var inst_1838 = cljs.core.async.interop.p__GT_c.call(null,inst_1837);
var state_2109__$1 = state_2109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2109__$1,(6),inst_1838);
} else {
if((state_val_2110 === (34))){
var inst_1939 = (state_2109[(10)]);
var inst_1940 = (state_2109[(11)]);
var inst_1937 = (state_2109[(2)]);
var inst_1938 = inst_1937.cause;
var inst_1939__$1 = inst_1938.message;
var inst_1940__$1 = clojure.string.ends_with_QMARK_.call(null,inst_1939__$1,"wrong amount");
var inst_1941 = (!(inst_1940__$1));
var state_2109__$1 = (function (){var statearr_2119 = state_2109;
(statearr_2119[(10)] = inst_1939__$1);

(statearr_2119[(11)] = inst_1940__$1);

return statearr_2119;
})();
if(inst_1941){
var statearr_2120_2353 = state_2109__$1;
(statearr_2120_2353[(1)] = (35));

} else {
var statearr_2121_2354 = state_2109__$1;
(statearr_2121_2354[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (66))){
var _ = (function (){var statearr_2122 = state_2109;
(statearr_2122[(4)] = cljs.core.cons.call(null,(69),(state_2109[(4)])));

return statearr_2122;
})();
var state_2109__$1 = state_2109;
var statearr_2123_2355 = state_2109__$1;
(statearr_2123_2355[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (3))){
var inst_2106 = (state_2109[(2)]);
var inst_2107 = done.call(null);
var state_2109__$1 = (function (){var statearr_2125 = state_2109;
(statearr_2125[(12)] = inst_2106);

return statearr_2125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2109__$1,inst_2107);
} else {
if((state_val_2110 === (35))){
var inst_1939 = (state_2109[(10)]);
var inst_1943 = ["expected =","wrong amount"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1939)].join('');
var inst_1944 = cljs.core.prn.call(null,inst_1943);
var state_2109__$1 = state_2109;
var statearr_2126_2356 = state_2109__$1;
(statearr_2126_2356[(2)] = inst_1944);

(statearr_2126_2356[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (67))){
var inst_2100 = (state_2109[(2)]);
var _ = (function (){var statearr_2127 = state_2109;
(statearr_2127[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2127;
})();
var state_2109__$1 = state_2109;
var statearr_2128_2357 = state_2109__$1;
(statearr_2128_2357[(2)] = inst_2100);

(statearr_2128_2357[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (4))){
var inst_1830 = (state_2109[(2)]);
var inst_1831 = cljs.core.prn.call(null,inst_1830);
var state_2109__$1 = state_2109;
var statearr_2129_2358 = state_2109__$1;
(statearr_2129_2358[(2)] = inst_1831);

(statearr_2129_2358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (36))){
var state_2109__$1 = state_2109;
var statearr_2131_2359 = state_2109__$1;
(statearr_2131_2359[(2)] = null);

(statearr_2131_2359[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (68))){
var inst_2073 = (state_2109[(2)]);
var inst_2074 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2075 = true;
var inst_2076 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_2075,inst_2073];
var inst_2077 = cljs.core.PersistentHashMap.fromArrays(inst_2074,inst_2076);
var inst_2078 = cljs.test.do_report.call(null,inst_2077);
var state_2109__$1 = state_2109;
var statearr_2132_2360 = state_2109__$1;
(statearr_2132_2360[(2)] = inst_2078);

(statearr_2132_2360[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (5))){
var _ = (function (){var statearr_2134 = state_2109;
(statearr_2134[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2134;
})();
var state_2109__$1 = state_2109;
var ex2130 = (state_2109__$1[(2)]);
var statearr_2135_2361 = state_2109__$1;
(statearr_2135_2361[(5)] = ex2130);


if((ex2130 instanceof Error)){
var statearr_2136_2362 = state_2109__$1;
(statearr_2136_2362[(1)] = (4));

(statearr_2136_2362[(5)] = null);

} else {
throw ex2130;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (37))){
var inst_1947 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2137 = state_2109;
(statearr_2137[(13)] = inst_1947);

return statearr_2137;
})();
var statearr_2138_2363 = state_2109__$1;
(statearr_2138_2363[(2)] = null);

(statearr_2138_2363[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (69))){
var _ = (function (){var statearr_2139 = state_2109;
(statearr_2139[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2139;
})();
var state_2109__$1 = state_2109;
var ex2133 = (state_2109__$1[(2)]);
var statearr_2140_2364 = state_2109__$1;
(statearr_2140_2364[(5)] = ex2133);


var statearr_2141_2365 = state_2109__$1;
(statearr_2141_2365[(1)] = (68));

(statearr_2141_2365[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (6))){
var inst_1840 = (state_2109[(14)]);
var inst_1840__$1 = (state_2109[(2)]);
var inst_1841 = (inst_1840__$1 instanceof cljs.core.ExceptionInfo);
var inst_1842 = cljs.core.ex_data.call(null,inst_1840__$1);
var inst_1843 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1842);
var inst_1844 = cljs.core._EQ_.call(null,inst_1843,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1845 = ((inst_1841) && (inst_1844));
var state_2109__$1 = (function (){var statearr_2142 = state_2109;
(statearr_2142[(14)] = inst_1840__$1);

return statearr_2142;
})();
if(cljs.core.truth_(inst_1845)){
var statearr_2143_2366 = state_2109__$1;
(statearr_2143_2366[(1)] = (7));

} else {
var statearr_2144_2367 = state_2109__$1;
(statearr_2144_2367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (38))){
var inst_1940 = (state_2109[(11)]);
var _ = (function (){var statearr_2145 = state_2109;
(statearr_2145[(4)] = cljs.core.cons.call(null,(41),(state_2109[(4)])));

return statearr_2145;
})();
var state_2109__$1 = state_2109;
if(cljs.core.truth_(inst_1940)){
var statearr_2146_2368 = state_2109__$1;
(statearr_2146_2368[(1)] = (42));

} else {
var statearr_2147_2369 = state_2109__$1;
(statearr_2147_2369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (70))){
var inst_2085 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2086 = true;
var inst_2087 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can send correct amount",inst_2086,true];
var inst_2088 = cljs.core.PersistentHashMap.fromArrays(inst_2085,inst_2087);
var inst_2089 = cljs.test.do_report.call(null,inst_2088);
var state_2109__$1 = state_2109;
var statearr_2148_2370 = state_2109__$1;
(statearr_2148_2370[(2)] = inst_2089);

(statearr_2148_2370[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (7))){
var inst_1840 = (state_2109[(14)]);
var inst_1847 = (function(){throw inst_1840})();
var state_2109__$1 = state_2109;
var statearr_2149_2371 = state_2109__$1;
(statearr_2149_2371[(2)] = inst_1847);

(statearr_2149_2371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (39))){
var inst_1975 = (state_2109[(2)]);
var state_2109__$1 = state_2109;
var statearr_2150_2372 = state_2109__$1;
(statearr_2150_2372[(2)] = inst_1975);

(statearr_2150_2372[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (71))){
var inst_2091 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2092 = true;
var inst_2093 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount",inst_2092,true];
var inst_2094 = cljs.core.PersistentHashMap.fromArrays(inst_2091,inst_2093);
var inst_2095 = cljs.test.do_report.call(null,inst_2094);
var state_2109__$1 = state_2109;
var statearr_2151_2373 = state_2109__$1;
(statearr_2151_2373[(2)] = inst_2095);

(statearr_2151_2373[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (8))){
var inst_1840 = (state_2109[(14)]);
var state_2109__$1 = state_2109;
var statearr_2152_2374 = state_2109__$1;
(statearr_2152_2374[(2)] = inst_1840);

(statearr_2152_2374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (40))){
var inst_1948 = (state_2109[(2)]);
var inst_1949 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1950 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1951 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_1950,inst_1948];
var inst_1952 = cljs.core.PersistentHashMap.fromArrays(inst_1949,inst_1951);
var inst_1953 = cljs.test.do_report.call(null,inst_1952);
var state_2109__$1 = state_2109;
var statearr_2153_2375 = state_2109__$1;
(statearr_2153_2375[(2)] = inst_1953);

(statearr_2153_2375[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (72))){
var inst_2097 = (state_2109[(2)]);
var _ = (function (){var statearr_2155 = state_2109;
(statearr_2155[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2155;
})();
var state_2109__$1 = (function (){var statearr_2156 = state_2109;
(statearr_2156[(15)] = inst_2097);

return statearr_2156;
})();
var statearr_2157_2376 = state_2109__$1;
(statearr_2157_2376[(2)] = true);

(statearr_2157_2376[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (9))){
var inst_1850 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2158 = state_2109;
(statearr_2158[(16)] = inst_1850);

return statearr_2158;
})();
var statearr_2159_2377 = state_2109__$1;
(statearr_2159_2377[(2)] = null);

(statearr_2159_2377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (41))){
var _ = (function (){var statearr_2160 = state_2109;
(statearr_2160[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2160;
})();
var state_2109__$1 = state_2109;
var ex2154 = (state_2109__$1[(2)]);
var statearr_2161_2378 = state_2109__$1;
(statearr_2161_2378[(5)] = ex2154);


var statearr_2162_2379 = state_2109__$1;
(statearr_2162_2379[(1)] = (40));

(statearr_2162_2379[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (10))){
var _ = (function (){var statearr_2163 = state_2109;
(statearr_2163[(4)] = cljs.core.cons.call(null,(23),(state_2109[(4)])));

return statearr_2163;
})();
var inst_1895 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"ee");
var inst_1896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1897 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_1898 = [e2e.proposals.owner_acc,"active"];
var inst_1899 = cljs.core.PersistentHashMap.fromArrays(inst_1897,inst_1898);
var inst_1900 = [inst_1899];
var inst_1901 = (new cljs.core.PersistentVector(null,(1),(5),inst_1896,inst_1900,null));
var inst_1902 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_1895,inst_1901);
var inst_1903 = cljs.core.async.interop.p__GT_c.call(null,inst_1902);
var state_2109__$1 = state_2109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2109__$1,(24),inst_1903);
} else {
if((state_val_2110 === (42))){
var inst_1940 = (state_2109[(11)]);
var inst_1960 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1961 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1962 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs correct amount",inst_1961,inst_1940];
var inst_1963 = cljs.core.PersistentHashMap.fromArrays(inst_1960,inst_1962);
var inst_1964 = cljs.test.do_report.call(null,inst_1963);
var state_2109__$1 = state_2109;
var statearr_2164_2380 = state_2109__$1;
(statearr_2164_2380[(2)] = inst_1964);

(statearr_2164_2380[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (11))){
var inst_1936 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2165 = state_2109;
(statearr_2165[(17)] = inst_1936);

return statearr_2165;
})();
var statearr_2166_2381 = state_2109__$1;
(statearr_2166_2381[(2)] = null);

(statearr_2166_2381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (43))){
var inst_1940 = (state_2109[(11)]);
var inst_1966 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1967 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1968 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount",inst_1967,inst_1940];
var inst_1969 = cljs.core.PersistentHashMap.fromArrays(inst_1966,inst_1968);
var inst_1970 = cljs.test.do_report.call(null,inst_1969);
var state_2109__$1 = state_2109;
var statearr_2167_2382 = state_2109__$1;
(statearr_2167_2382[(2)] = inst_1970);

(statearr_2167_2382[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (12))){
var inst_1853 = (state_2109[(18)]);
var inst_1854 = (state_2109[(19)]);
var inst_1851 = (state_2109[(2)]);
var inst_1852 = inst_1851.cause;
var inst_1853__$1 = inst_1852.message;
var inst_1854__$1 = clojure.string.ends_with_QMARK_.call(null,inst_1853__$1,"no proposal reserved");
var inst_1855 = (!(inst_1854__$1));
var state_2109__$1 = (function (){var statearr_2168 = state_2109;
(statearr_2168[(18)] = inst_1853__$1);

(statearr_2168[(19)] = inst_1854__$1);

return statearr_2168;
})();
if(inst_1855){
var statearr_2169_2383 = state_2109__$1;
(statearr_2169_2383[(1)] = (13));

} else {
var statearr_2170_2384 = state_2109__$1;
(statearr_2170_2384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (44))){
var inst_1940 = (state_2109[(11)]);
var inst_1972 = (state_2109[(2)]);
var _ = (function (){var statearr_2172 = state_2109;
(statearr_2172[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2172;
})();
var state_2109__$1 = (function (){var statearr_2173 = state_2109;
(statearr_2173[(20)] = inst_1972);

return statearr_2173;
})();
var statearr_2174_2385 = state_2109__$1;
(statearr_2174_2385[(2)] = inst_1940);

(statearr_2174_2385[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (13))){
var inst_1853 = (state_2109[(18)]);
var inst_1857 = ["expected =","no proposal reserved"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_1853)].join('');
var inst_1858 = cljs.core.prn.call(null,inst_1857);
var state_2109__$1 = state_2109;
var statearr_2175_2386 = state_2109__$1;
(statearr_2175_2386[(2)] = inst_1858);

(statearr_2175_2386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (45))){
var _ = (function (){var statearr_2176 = state_2109;
(statearr_2176[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2176;
})();
var state_2109__$1 = state_2109;
var ex2171 = (state_2109__$1[(2)]);
var statearr_2177_2387 = state_2109__$1;
(statearr_2177_2387[(5)] = ex2171);


if((ex2171 instanceof Error)){
var statearr_2178_2388 = state_2109__$1;
(statearr_2178_2388[(1)] = (34));

(statearr_2178_2388[(5)] = null);

} else {
throw ex2171;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (14))){
var state_2109__$1 = state_2109;
var statearr_2179_2389 = state_2109__$1;
(statearr_2179_2389[(2)] = null);

(statearr_2179_2389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (46))){
var inst_1993 = (state_2109[(21)]);
var inst_1993__$1 = (state_2109[(2)]);
var inst_1994 = (inst_1993__$1 instanceof cljs.core.ExceptionInfo);
var inst_1995 = cljs.core.ex_data.call(null,inst_1993__$1);
var inst_1996 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1995);
var inst_1997 = cljs.core._EQ_.call(null,inst_1996,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1998 = ((inst_1994) && (inst_1997));
var state_2109__$1 = (function (){var statearr_2180 = state_2109;
(statearr_2180[(21)] = inst_1993__$1);

return statearr_2180;
})();
if(cljs.core.truth_(inst_1998)){
var statearr_2181_2390 = state_2109__$1;
(statearr_2181_2390[(1)] = (47));

} else {
var statearr_2182_2391 = state_2109__$1;
(statearr_2182_2391[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (15))){
var inst_1861 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2183 = state_2109;
(statearr_2183[(22)] = inst_1861);

return statearr_2183;
})();
var statearr_2184_2392 = state_2109__$1;
(statearr_2184_2392[(2)] = null);

(statearr_2184_2392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (47))){
var inst_1993 = (state_2109[(21)]);
var inst_2000 = (function(){throw inst_1993})();
var state_2109__$1 = state_2109;
var statearr_2185_2393 = state_2109__$1;
(statearr_2185_2393[(2)] = inst_2000);

(statearr_2185_2393[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (16))){
var inst_1854 = (state_2109[(19)]);
var _ = (function (){var statearr_2186 = state_2109;
(statearr_2186[(4)] = cljs.core.cons.call(null,(19),(state_2109[(4)])));

return statearr_2186;
})();
var state_2109__$1 = state_2109;
if(cljs.core.truth_(inst_1854)){
var statearr_2187_2394 = state_2109__$1;
(statearr_2187_2394[(1)] = (20));

} else {
var statearr_2188_2395 = state_2109__$1;
(statearr_2188_2395[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (48))){
var inst_1993 = (state_2109[(21)]);
var state_2109__$1 = state_2109;
var statearr_2189_2396 = state_2109__$1;
(statearr_2189_2396[(2)] = inst_1993);

(statearr_2189_2396[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (17))){
var inst_1889 = (state_2109[(2)]);
var state_2109__$1 = state_2109;
var statearr_2190_2397 = state_2109__$1;
(statearr_2190_2397[(2)] = inst_1889);

(statearr_2190_2397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (49))){
var inst_2003 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2191 = state_2109;
(statearr_2191[(23)] = inst_2003);

return statearr_2191;
})();
var statearr_2192_2398 = state_2109__$1;
(statearr_2192_2398[(2)] = null);

(statearr_2192_2398[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (18))){
var inst_1862 = (state_2109[(2)]);
var inst_1863 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1864 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1865 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_1864,inst_1862];
var inst_1866 = cljs.core.PersistentHashMap.fromArrays(inst_1863,inst_1865);
var inst_1867 = cljs.test.do_report.call(null,inst_1866);
var state_2109__$1 = state_2109;
var statearr_2194_2399 = state_2109__$1;
(statearr_2194_2399[(2)] = inst_1867);

(statearr_2194_2399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (50))){
var _ = (function (){var statearr_2195 = state_2109;
(statearr_2195[(4)] = cljs.core.cons.call(null,(53),(state_2109[(4)])));

return statearr_2195;
})();
var inst_2015 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_2016 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs correct amount"];
var inst_2017 = cljs.core.PersistentHashMap.fromArrays(inst_2015,inst_2016);
var inst_2018 = cljs.test.do_report.call(null,inst_2017);
var ___$1 = (function (){var statearr_2196 = state_2109;
(statearr_2196[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2196;
})();
var state_2109__$1 = state_2109;
var statearr_2197_2400 = state_2109__$1;
(statearr_2197_2400[(2)] = inst_2018);

(statearr_2197_2400[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (19))){
var _ = (function (){var statearr_2198 = state_2109;
(statearr_2198[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2198;
})();
var state_2109__$1 = state_2109;
var ex2193 = (state_2109__$1[(2)]);
var statearr_2199_2401 = state_2109__$1;
(statearr_2199_2401[(5)] = ex2193);


var statearr_2200_2402 = state_2109__$1;
(statearr_2200_2402[(1)] = (18));

(statearr_2200_2402[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (51))){
var inst_2021 = (state_2109[(2)]);
var _ = (function (){var statearr_2201 = state_2109;
(statearr_2201[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2201;
})();
var state_2109__$1 = state_2109;
var statearr_2202_2403 = state_2109__$1;
(statearr_2202_2403[(2)] = inst_2021);

(statearr_2202_2403[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (20))){
var inst_1854 = (state_2109[(19)]);
var inst_1874 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1875 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1876 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need a reservation",inst_1875,inst_1854];
var inst_1877 = cljs.core.PersistentHashMap.fromArrays(inst_1874,inst_1876);
var inst_1878 = cljs.test.do_report.call(null,inst_1877);
var state_2109__$1 = state_2109;
var statearr_2203_2404 = state_2109__$1;
(statearr_2203_2404[(2)] = inst_1878);

(statearr_2203_2404[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (52))){
var inst_2004 = (state_2109[(2)]);
var inst_2005 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2006 = null;
var inst_2007 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs correct amount",inst_2006,inst_2004];
var inst_2008 = cljs.core.PersistentHashMap.fromArrays(inst_2005,inst_2007);
var inst_2009 = cljs.test.do_report.call(null,inst_2008);
var state_2109__$1 = state_2109;
var statearr_2205_2405 = state_2109__$1;
(statearr_2205_2405[(2)] = inst_2009);

(statearr_2205_2405[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (21))){
var inst_1854 = (state_2109[(19)]);
var inst_1880 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1881 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_1882 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation",inst_1881,inst_1854];
var inst_1883 = cljs.core.PersistentHashMap.fromArrays(inst_1880,inst_1882);
var inst_1884 = cljs.test.do_report.call(null,inst_1883);
var state_2109__$1 = state_2109;
var statearr_2206_2406 = state_2109__$1;
(statearr_2206_2406[(2)] = inst_1884);

(statearr_2206_2406[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (53))){
var _ = (function (){var statearr_2207 = state_2109;
(statearr_2207[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2207;
})();
var state_2109__$1 = state_2109;
var ex2204 = (state_2109__$1[(2)]);
var statearr_2208_2407 = state_2109__$1;
(statearr_2208_2407[(5)] = ex2204);


var statearr_2209_2408 = state_2109__$1;
(statearr_2209_2408[(1)] = (52));

(statearr_2209_2408[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (22))){
var inst_1854 = (state_2109[(19)]);
var inst_1886 = (state_2109[(2)]);
var _ = (function (){var statearr_2211 = state_2109;
(statearr_2211[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2211;
})();
var state_2109__$1 = (function (){var statearr_2212 = state_2109;
(statearr_2212[(24)] = inst_1886);

return statearr_2212;
})();
var statearr_2213_2409 = state_2109__$1;
(statearr_2213_2409[(2)] = inst_1854);

(statearr_2213_2409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (54))){
var _ = (function (){var statearr_2214 = state_2109;
(statearr_2214[(4)] = cljs.core.cons.call(null,(61),(state_2109[(4)])));

return statearr_2214;
})();
var inst_2050 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_2051 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_2052 = cljs.core.PersistentHashMap.fromArrays(inst_2050,inst_2051);
var inst_2053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2054 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_2055 = [e2e.proposals.owner_acc,"active"];
var inst_2056 = cljs.core.PersistentHashMap.fromArrays(inst_2054,inst_2055);
var inst_2057 = [inst_2056];
var inst_2058 = (new cljs.core.PersistentVector(null,(1),(5),inst_2053,inst_2057,null));
var inst_2059 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_2052,inst_2058);
var inst_2060 = cljs.core.async.interop.p__GT_c.call(null,inst_2059);
var state_2109__$1 = state_2109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2109__$1,(62),inst_2060);
} else {
if((state_val_2110 === (23))){
var _ = (function (){var statearr_2215 = state_2109;
(statearr_2215[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2215;
})();
var state_2109__$1 = state_2109;
var ex2210 = (state_2109__$1[(2)]);
var statearr_2216_2410 = state_2109__$1;
(statearr_2216_2410[(5)] = ex2210);


if((ex2210 instanceof Error)){
var statearr_2217_2411 = state_2109__$1;
(statearr_2217_2411[(1)] = (12));

(statearr_2217_2411[(5)] = null);

} else {
throw ex2210;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (55))){
var inst_2103 = (state_2109[(2)]);
var _ = (function (){var statearr_2218 = state_2109;
(statearr_2218[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2218;
})();
var state_2109__$1 = state_2109;
var statearr_2219_2412 = state_2109__$1;
(statearr_2219_2412[(2)] = inst_2103);

(statearr_2219_2412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (24))){
var inst_1905 = (state_2109[(25)]);
var inst_1905__$1 = (state_2109[(2)]);
var inst_1906 = (inst_1905__$1 instanceof cljs.core.ExceptionInfo);
var inst_1907 = cljs.core.ex_data.call(null,inst_1905__$1);
var inst_1908 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_1907);
var inst_1909 = cljs.core._EQ_.call(null,inst_1908,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_1910 = ((inst_1906) && (inst_1909));
var state_2109__$1 = (function (){var statearr_2220 = state_2109;
(statearr_2220[(25)] = inst_1905__$1);

return statearr_2220;
})();
if(cljs.core.truth_(inst_1910)){
var statearr_2221_2413 = state_2109__$1;
(statearr_2221_2413[(1)] = (25));

} else {
var statearr_2222_2414 = state_2109__$1;
(statearr_2222_2414[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (56))){
var inst_2025 = (state_2109[(2)]);
var inst_2026 = cljs.core.prn.call(null,"test failed with ",inst_2025);
var state_2109__$1 = (function (){var statearr_2223 = state_2109;
(statearr_2223[(26)] = inst_2026);

return statearr_2223;
})();
var statearr_2224_2415 = state_2109__$1;
(statearr_2224_2415[(2)] = null);

(statearr_2224_2415[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (25))){
var inst_1905 = (state_2109[(25)]);
var inst_1912 = (function(){throw inst_1905})();
var state_2109__$1 = state_2109;
var statearr_2225_2416 = state_2109__$1;
(statearr_2225_2416[(2)] = inst_1912);

(statearr_2225_2416[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (57))){
var _ = (function (){var statearr_2226 = state_2109;
(statearr_2226[(4)] = cljs.core.cons.call(null,(60),(state_2109[(4)])));

return statearr_2226;
})();
var inst_2038 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_2039 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can send correct amount"];
var inst_2040 = cljs.core.PersistentHashMap.fromArrays(inst_2038,inst_2039);
var inst_2041 = cljs.test.do_report.call(null,inst_2040);
var ___$1 = (function (){var statearr_2227 = state_2109;
(statearr_2227[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2227;
})();
var state_2109__$1 = state_2109;
var statearr_2228_2417 = state_2109__$1;
(statearr_2228_2417[(2)] = inst_2041);

(statearr_2228_2417[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (26))){
var inst_1905 = (state_2109[(25)]);
var state_2109__$1 = state_2109;
var statearr_2229_2418 = state_2109__$1;
(statearr_2229_2418[(2)] = inst_1905);

(statearr_2229_2418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (58))){
var inst_2044 = (state_2109[(2)]);
var state_2109__$1 = state_2109;
var statearr_2230_2419 = state_2109__$1;
(statearr_2230_2419[(2)] = inst_2044);

(statearr_2230_2419[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (27))){
var inst_1915 = (state_2109[(2)]);
var state_2109__$1 = (function (){var statearr_2231 = state_2109;
(statearr_2231[(27)] = inst_1915);

return statearr_2231;
})();
var statearr_2232_2420 = state_2109__$1;
(statearr_2232_2420[(2)] = null);

(statearr_2232_2420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (59))){
var inst_2027 = (state_2109[(2)]);
var inst_2028 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2029 = null;
var inst_2030 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can send correct amount",inst_2029,inst_2027];
var inst_2031 = cljs.core.PersistentHashMap.fromArrays(inst_2028,inst_2030);
var inst_2032 = cljs.test.do_report.call(null,inst_2031);
var state_2109__$1 = state_2109;
var statearr_2234_2421 = state_2109__$1;
(statearr_2234_2421[(2)] = inst_2032);

(statearr_2234_2421[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (28))){
var _ = (function (){var statearr_2235 = state_2109;
(statearr_2235[(4)] = cljs.core.cons.call(null,(31),(state_2109[(4)])));

return statearr_2235;
})();
var inst_1927 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_1928 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need a reservation"];
var inst_1929 = cljs.core.PersistentHashMap.fromArrays(inst_1927,inst_1928);
var inst_1930 = cljs.test.do_report.call(null,inst_1929);
var ___$1 = (function (){var statearr_2236 = state_2109;
(statearr_2236[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2236;
})();
var state_2109__$1 = state_2109;
var statearr_2237_2422 = state_2109__$1;
(statearr_2237_2422[(2)] = inst_1930);

(statearr_2237_2422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (60))){
var _ = (function (){var statearr_2239 = state_2109;
(statearr_2239[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2239;
})();
var state_2109__$1 = state_2109;
var ex2233 = (state_2109__$1[(2)]);
var statearr_2240_2423 = state_2109__$1;
(statearr_2240_2423[(5)] = ex2233);


var statearr_2241_2424 = state_2109__$1;
(statearr_2241_2424[(1)] = (59));

(statearr_2241_2424[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (29))){
var inst_1933 = (state_2109[(2)]);
var _ = (function (){var statearr_2242 = state_2109;
(statearr_2242[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2242;
})();
var state_2109__$1 = state_2109;
var statearr_2243_2425 = state_2109__$1;
(statearr_2243_2425[(2)] = inst_1933);

(statearr_2243_2425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (61))){
var _ = (function (){var statearr_2244 = state_2109;
(statearr_2244[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2244;
})();
var state_2109__$1 = state_2109;
var ex2238 = (state_2109__$1[(2)]);
var statearr_2245_2426 = state_2109__$1;
(statearr_2245_2426[(5)] = ex2238);


if((ex2238 instanceof Error)){
var statearr_2246_2427 = state_2109__$1;
(statearr_2246_2427[(1)] = (56));

(statearr_2246_2427[(5)] = null);

} else {
throw ex2238;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (30))){
var inst_1916 = (state_2109[(2)]);
var inst_1917 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_1918 = null;
var inst_1919 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need a reservation",inst_1918,inst_1916];
var inst_1920 = cljs.core.PersistentHashMap.fromArrays(inst_1917,inst_1919);
var inst_1921 = cljs.test.do_report.call(null,inst_1920);
var state_2109__$1 = state_2109;
var statearr_2248_2428 = state_2109__$1;
(statearr_2248_2428[(2)] = inst_1921);

(statearr_2248_2428[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (62))){
var inst_2062 = (state_2109[(7)]);
var inst_2062__$1 = (state_2109[(2)]);
var inst_2063 = (inst_2062__$1 instanceof cljs.core.ExceptionInfo);
var inst_2064 = cljs.core.ex_data.call(null,inst_2062__$1);
var inst_2065 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2064);
var inst_2066 = cljs.core._EQ_.call(null,inst_2065,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2067 = ((inst_2063) && (inst_2066));
var state_2109__$1 = (function (){var statearr_2249 = state_2109;
(statearr_2249[(7)] = inst_2062__$1);

return statearr_2249;
})();
if(cljs.core.truth_(inst_2067)){
var statearr_2250_2429 = state_2109__$1;
(statearr_2250_2429[(1)] = (63));

} else {
var statearr_2251_2430 = state_2109__$1;
(statearr_2251_2430[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (31))){
var _ = (function (){var statearr_2252 = state_2109;
(statearr_2252[(4)] = cljs.core.rest.call(null,(state_2109[(4)])));

return statearr_2252;
})();
var state_2109__$1 = state_2109;
var ex2247 = (state_2109__$1[(2)]);
var statearr_2253_2431 = state_2109__$1;
(statearr_2253_2431[(5)] = ex2247);


var statearr_2254_2432 = state_2109__$1;
(statearr_2254_2432[(1)] = (30));

(statearr_2254_2432[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2110 === (63))){
var inst_2062 = (state_2109[(7)]);
var inst_2069 = (function(){throw inst_2062})();
var state_2109__$1 = state_2109;
var statearr_2255_2433 = state_2109__$1;
(statearr_2255_2433[(2)] = inst_2069);

(statearr_2255_2433[(1)] = (65));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_2256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2256[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_2256[(1)] = (1));

return statearr_2256;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_2109){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2257){var ex__18__auto__ = e2257;
var statearr_2258_2434 = state_2109;
(statearr_2258_2434[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2109[(4)]))){
var statearr_2259_2435 = state_2109;
(statearr_2259_2435[(1)] = cljs.core.first.call(null,(state_2109[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__2436 = state_2109;
state_2109 = G__2436;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_2109){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_2109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_2260 = f__20__auto__.call(null);
(statearr_2260[(6)] = c__19__auto__);

return statearr_2260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals1395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1396","meta1396",(-2065956331),null)], null);
});

e2e.proposals.t_e2e$proposals1395.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals1395.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals1395";

e2e.proposals.t_e2e$proposals1395.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals1395");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals1395.
 */
e2e.proposals.__GT_t_e2e$proposals1395 = (function e2e$proposals$__GT_t_e2e$proposals1395(meta1396){
return (new e2e.proposals.t_e2e$proposals1395(meta1396));
});

}

return (new e2e.proposals.t_e2e$proposals1395(null));
});

e2e.proposals.proposal_payment.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.proposal_payment;},new cljs.core.Symbol("e2e.proposals","proposal-payment","e2e.proposals/proposal-payment",(-924459697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"proposal-payment","proposal-payment",(-65968046),null),"e2e/proposals.cljs",(26),(1),(87),(87),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.proposal_payment)?e2e.proposals.proposal_payment.cljs$lang$test:null)]));
e2e.proposals.new_proposal = (function e2e$proposals$new_proposal(){
return cljs.test.test_var.call(null,e2e.proposals.new_proposal.cljs$lang$var);
});
e2e.proposals.new_proposal.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals2437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals2437 = (function (meta2438){
this.meta2438 = meta2438;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals2437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2439,meta2438__$1){
var self__ = this;
var _2439__$1 = this;
return (new e2e.proposals.t_e2e$proposals2437(meta2438__$1));
});

e2e.proposals.t_e2e$proposals2437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2439){
var self__ = this;
var _2439__$1 = this;
return self__.meta2438;
});

e2e.proposals.t_e2e$proposals2437.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals2437.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_2803){
var state_val_2804 = (state_2803[(1)]);
if((state_val_2804 === (32))){
var inst_2555 = (state_2803[(7)]);
var inst_2555__$1 = (state_2803[(2)]);
var inst_2556 = (inst_2555__$1 instanceof cljs.core.ExceptionInfo);
var inst_2557 = cljs.core.ex_data.call(null,inst_2555__$1);
var inst_2558 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2557);
var inst_2559 = cljs.core._EQ_.call(null,inst_2558,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2560 = ((inst_2556) && (inst_2559));
var state_2803__$1 = (function (){var statearr_2806 = state_2803;
(statearr_2806[(7)] = inst_2555__$1);

return statearr_2806;
})();
if(cljs.core.truth_(inst_2560)){
var statearr_2807_3529 = state_2803__$1;
(statearr_2807_3529[(1)] = (33));

} else {
var statearr_2808_3530 = state_2803__$1;
(statearr_2808_3530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (64))){
var _ = (function (){var statearr_2809 = state_2803;
(statearr_2809[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2809;
})();
var state_2803__$1 = state_2803;
var ex2805 = (state_2803__$1[(2)]);
var statearr_2810_3531 = state_2803__$1;
(statearr_2810_3531[(5)] = ex2805);


var statearr_2811_3532 = state_2803__$1;
(statearr_2811_3532[(1)] = (63));

(statearr_2811_3532[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (1))){
var state_2803__$1 = state_2803;
var statearr_2813_3533 = state_2803__$1;
(statearr_2813_3533[(2)] = null);

(statearr_2813_3533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (33))){
var inst_2555 = (state_2803[(7)]);
var inst_2562 = (function(){throw inst_2555})();
var state_2803__$1 = state_2803;
var statearr_2814_3534 = state_2803__$1;
(statearr_2814_3534[(2)] = inst_2562);

(statearr_2814_3534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (65))){
var _ = (function (){var statearr_2815 = state_2803;
(statearr_2815[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2815;
})();
var state_2803__$1 = state_2803;
var ex2812 = (state_2803__$1[(2)]);
var statearr_2816_3535 = state_2803__$1;
(statearr_2816_3535[(5)] = ex2812);


if((ex2812 instanceof Error)){
var statearr_2817_3536 = state_2803__$1;
(statearr_2817_3536[(1)] = (60));

(statearr_2817_3536[(5)] = null);

} else {
throw ex2812;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (2))){
var _ = (function (){var statearr_2818 = state_2803;
(statearr_2818[(4)] = cljs.core.cons.call(null,(15),(state_2803[(4)])));

return statearr_2818;
})();
var inst_2485 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.prop_acc);
var inst_2486 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_2485);
var inst_2487 = cljs.core.async.interop.p__GT_c.call(null,inst_2486);
var state_2803__$1 = state_2803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(16),inst_2487);
} else {
if((state_val_2804 === (34))){
var inst_2555 = (state_2803[(7)]);
var state_2803__$1 = state_2803;
var statearr_2819_3537 = state_2803__$1;
(statearr_2819_3537[(2)] = inst_2555);

(statearr_2819_3537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (66))){
var inst_2707 = (state_2803[(8)]);
var inst_2707__$1 = (state_2803[(2)]);
var inst_2708 = (inst_2707__$1 instanceof cljs.core.ExceptionInfo);
var inst_2709 = cljs.core.ex_data.call(null,inst_2707__$1);
var inst_2710 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2709);
var inst_2711 = cljs.core._EQ_.call(null,inst_2710,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2712 = ((inst_2708) && (inst_2711));
var state_2803__$1 = (function (){var statearr_2820 = state_2803;
(statearr_2820[(8)] = inst_2707__$1);

return statearr_2820;
})();
if(cljs.core.truth_(inst_2712)){
var statearr_2821_3538 = state_2803__$1;
(statearr_2821_3538[(1)] = (67));

} else {
var statearr_2822_3539 = state_2803__$1;
(statearr_2822_3539[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (3))){
var inst_2520 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2823 = state_2803;
(statearr_2823[(9)] = inst_2520);

return statearr_2823;
})();
var statearr_2824_3540 = state_2803__$1;
(statearr_2824_3540[(2)] = null);

(statearr_2824_3540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (35))){
var inst_2565 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2825 = state_2803;
(statearr_2825[(10)] = inst_2565);

return statearr_2825;
})();
var statearr_2826_3541 = state_2803__$1;
(statearr_2826_3541[(2)] = null);

(statearr_2826_3541[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (67))){
var inst_2707 = (state_2803[(8)]);
var inst_2714 = (function(){throw inst_2707})();
var state_2803__$1 = state_2803;
var statearr_2827_3542 = state_2803__$1;
(statearr_2827_3542[(2)] = inst_2714);

(statearr_2827_3542[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (4))){
var inst_2443 = (state_2803[(11)]);
var inst_2444 = (state_2803[(12)]);
var inst_2441 = (state_2803[(2)]);
var inst_2442 = inst_2441.cause;
var inst_2443__$1 = inst_2442.message;
var inst_2444__$1 = clojure.string.ends_with_QMARK_.call(null,inst_2443__$1,"not a dao member");
var inst_2445 = (!(inst_2444__$1));
var state_2803__$1 = (function (){var statearr_2828 = state_2803;
(statearr_2828[(11)] = inst_2443__$1);

(statearr_2828[(12)] = inst_2444__$1);

return statearr_2828;
})();
if(inst_2445){
var statearr_2829_3543 = state_2803__$1;
(statearr_2829_3543[(1)] = (5));

} else {
var statearr_2830_3544 = state_2803__$1;
(statearr_2830_3544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (36))){
var _ = (function (){var statearr_2831 = state_2803;
(statearr_2831[(4)] = cljs.core.cons.call(null,(39),(state_2803[(4)])));

return statearr_2831;
})();
var state_2803__$1 = state_2803;
var statearr_2832_3545 = state_2803__$1;
(statearr_2832_3545[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (68))){
var inst_2707 = (state_2803[(8)]);
var state_2803__$1 = state_2803;
var statearr_2834_3546 = state_2803__$1;
(statearr_2834_3546[(2)] = inst_2707);

(statearr_2834_3546[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (5))){
var inst_2443 = (state_2803[(11)]);
var inst_2447 = ["expected =","not a dao member"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_2443)].join('');
var inst_2448 = cljs.core.prn.call(null,inst_2447);
var state_2803__$1 = state_2803;
var statearr_2835_3547 = state_2803__$1;
(statearr_2835_3547[(2)] = inst_2448);

(statearr_2835_3547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (37))){
var inst_2593 = (state_2803[(2)]);
var _ = (function (){var statearr_2836 = state_2803;
(statearr_2836[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2836;
})();
var state_2803__$1 = state_2803;
var statearr_2837_3548 = state_2803__$1;
(statearr_2837_3548[(2)] = inst_2593);

(statearr_2837_3548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (69))){
var inst_2717 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2838 = state_2803;
(statearr_2838[(13)] = inst_2717);

return statearr_2838;
})();
var statearr_2839_3549 = state_2803__$1;
(statearr_2839_3549[(2)] = null);

(statearr_2839_3549[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (6))){
var state_2803__$1 = state_2803;
var statearr_2840_3550 = state_2803__$1;
(statearr_2840_3550[(2)] = null);

(statearr_2840_3550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (38))){
var inst_2566 = (state_2803[(2)]);
var inst_2567 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2568 = true;
var inst_2569 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_2568,inst_2566];
var inst_2570 = cljs.core.PersistentHashMap.fromArrays(inst_2567,inst_2569);
var inst_2571 = cljs.test.do_report.call(null,inst_2570);
var state_2803__$1 = state_2803;
var statearr_2841_3551 = state_2803__$1;
(statearr_2841_3551[(2)] = inst_2571);

(statearr_2841_3551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (70))){
var _ = (function (){var statearr_2843 = state_2803;
(statearr_2843[(4)] = cljs.core.cons.call(null,(73),(state_2803[(4)])));

return statearr_2843;
})();
var state_2803__$1 = state_2803;
var statearr_2844_3552 = state_2803__$1;
(statearr_2844_3552[(1)] = (74));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (7))){
var inst_2451 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2846 = state_2803;
(statearr_2846[(14)] = inst_2451);

return statearr_2846;
})();
var statearr_2847_3553 = state_2803__$1;
(statearr_2847_3553[(2)] = null);

(statearr_2847_3553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (39))){
var _ = (function (){var statearr_2848 = state_2803;
(statearr_2848[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2848;
})();
var state_2803__$1 = state_2803;
var ex2842 = (state_2803__$1[(2)]);
var statearr_2849_3554 = state_2803__$1;
(statearr_2849_3554[(5)] = ex2842);


var statearr_2850_3555 = state_2803__$1;
(statearr_2850_3555[(1)] = (38));

(statearr_2850_3555[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (71))){
var inst_2745 = (state_2803[(2)]);
var _ = (function (){var statearr_2851 = state_2803;
(statearr_2851[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2851;
})();
var state_2803__$1 = state_2803;
var statearr_2852_3556 = state_2803__$1;
(statearr_2852_3556[(2)] = inst_2745);

(statearr_2852_3556[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (8))){
var inst_2444 = (state_2803[(12)]);
var _ = (function (){var statearr_2853 = state_2803;
(statearr_2853[(4)] = cljs.core.cons.call(null,(11),(state_2803[(4)])));

return statearr_2853;
})();
var state_2803__$1 = state_2803;
if(cljs.core.truth_(inst_2444)){
var statearr_2854_3557 = state_2803__$1;
(statearr_2854_3557[(1)] = (12));

} else {
var statearr_2855_3558 = state_2803__$1;
(statearr_2855_3558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (40))){
var inst_2578 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2579 = true;
var inst_2580 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a proposal",inst_2579,true];
var inst_2581 = cljs.core.PersistentHashMap.fromArrays(inst_2578,inst_2580);
var inst_2582 = cljs.test.do_report.call(null,inst_2581);
var state_2803__$1 = state_2803;
var statearr_2856_3559 = state_2803__$1;
(statearr_2856_3559[(2)] = inst_2582);

(statearr_2856_3559[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (72))){
var inst_2718 = (state_2803[(2)]);
var inst_2719 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2720 = true;
var inst_2721 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_2720,inst_2718];
var inst_2722 = cljs.core.PersistentHashMap.fromArrays(inst_2719,inst_2721);
var inst_2723 = cljs.test.do_report.call(null,inst_2722);
var state_2803__$1 = state_2803;
var statearr_2857_3560 = state_2803__$1;
(statearr_2857_3560[(2)] = inst_2723);

(statearr_2857_3560[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (9))){
var inst_2479 = (state_2803[(2)]);
var state_2803__$1 = state_2803;
var statearr_2859_3561 = state_2803__$1;
(statearr_2859_3561[(2)] = inst_2479);

(statearr_2859_3561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (41))){
var inst_2584 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2585 = true;
var inst_2586 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal",inst_2585,true];
var inst_2587 = cljs.core.PersistentHashMap.fromArrays(inst_2584,inst_2586);
var inst_2588 = cljs.test.do_report.call(null,inst_2587);
var state_2803__$1 = state_2803;
var statearr_2860_3562 = state_2803__$1;
(statearr_2860_3562[(2)] = inst_2588);

(statearr_2860_3562[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (73))){
var _ = (function (){var statearr_2861 = state_2803;
(statearr_2861[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2861;
})();
var state_2803__$1 = state_2803;
var ex2858 = (state_2803__$1[(2)]);
var statearr_2862_3563 = state_2803__$1;
(statearr_2862_3563[(5)] = ex2858);


var statearr_2863_3564 = state_2803__$1;
(statearr_2863_3564[(1)] = (72));

(statearr_2863_3564[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (10))){
var inst_2452 = (state_2803[(2)]);
var inst_2453 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2454 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_2455 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_2454,inst_2452];
var inst_2456 = cljs.core.PersistentHashMap.fromArrays(inst_2453,inst_2455);
var inst_2457 = cljs.test.do_report.call(null,inst_2456);
var state_2803__$1 = state_2803;
var statearr_2864_3565 = state_2803__$1;
(statearr_2864_3565[(2)] = inst_2457);

(statearr_2864_3565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (42))){
var inst_2590 = (state_2803[(2)]);
var _ = (function (){var statearr_2866 = state_2803;
(statearr_2866[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2866;
})();
var state_2803__$1 = (function (){var statearr_2867 = state_2803;
(statearr_2867[(15)] = inst_2590);

return statearr_2867;
})();
var statearr_2868_3566 = state_2803__$1;
(statearr_2868_3566[(2)] = true);

(statearr_2868_3566[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (74))){
var inst_2730 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2731 = true;
var inst_2732 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a second proposal",inst_2731,true];
var inst_2733 = cljs.core.PersistentHashMap.fromArrays(inst_2730,inst_2732);
var inst_2734 = cljs.test.do_report.call(null,inst_2733);
var state_2803__$1 = state_2803;
var statearr_2869_3567 = state_2803__$1;
(statearr_2869_3567[(2)] = inst_2734);

(statearr_2869_3567[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (11))){
var _ = (function (){var statearr_2870 = state_2803;
(statearr_2870[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2870;
})();
var state_2803__$1 = state_2803;
var ex2865 = (state_2803__$1[(2)]);
var statearr_2871_3568 = state_2803__$1;
(statearr_2871_3568[(5)] = ex2865);


var statearr_2872_3569 = state_2803__$1;
(statearr_2872_3569[(1)] = (10));

(statearr_2872_3569[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (43))){
var inst_2600 = (state_2803[(16)]);
var inst_2600__$1 = (state_2803[(2)]);
var inst_2601 = (inst_2600__$1 instanceof cljs.core.ExceptionInfo);
var inst_2602 = cljs.core.ex_data.call(null,inst_2600__$1);
var inst_2603 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2602);
var inst_2604 = cljs.core._EQ_.call(null,inst_2603,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2605 = ((inst_2601) && (inst_2604));
var state_2803__$1 = (function (){var statearr_2873 = state_2803;
(statearr_2873[(16)] = inst_2600__$1);

return statearr_2873;
})();
if(cljs.core.truth_(inst_2605)){
var statearr_2874_3570 = state_2803__$1;
(statearr_2874_3570[(1)] = (44));

} else {
var statearr_2875_3571 = state_2803__$1;
(statearr_2875_3571[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (75))){
var inst_2736 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2737 = true;
var inst_2738 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal",inst_2737,true];
var inst_2739 = cljs.core.PersistentHashMap.fromArrays(inst_2736,inst_2738);
var inst_2740 = cljs.test.do_report.call(null,inst_2739);
var state_2803__$1 = state_2803;
var statearr_2876_3572 = state_2803__$1;
(statearr_2876_3572[(2)] = inst_2740);

(statearr_2876_3572[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (12))){
var inst_2444 = (state_2803[(12)]);
var inst_2464 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2465 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_2466 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need to be a dao member",inst_2465,inst_2444];
var inst_2467 = cljs.core.PersistentHashMap.fromArrays(inst_2464,inst_2466);
var inst_2468 = cljs.test.do_report.call(null,inst_2467);
var state_2803__$1 = state_2803;
var statearr_2877_3573 = state_2803__$1;
(statearr_2877_3573[(2)] = inst_2468);

(statearr_2877_3573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (44))){
var inst_2600 = (state_2803[(16)]);
var inst_2607 = (function(){throw inst_2600})();
var state_2803__$1 = state_2803;
var statearr_2878_3574 = state_2803__$1;
(statearr_2878_3574[(2)] = inst_2607);

(statearr_2878_3574[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (76))){
var inst_2742 = (state_2803[(2)]);
var _ = (function (){var statearr_2879 = state_2803;
(statearr_2879[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2879;
})();
var state_2803__$1 = (function (){var statearr_2880 = state_2803;
(statearr_2880[(17)] = inst_2742);

return statearr_2880;
})();
var statearr_2881_3575 = state_2803__$1;
(statearr_2881_3575[(2)] = true);

(statearr_2881_3575[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (13))){
var inst_2444 = (state_2803[(12)]);
var inst_2470 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2471 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_2472 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member",inst_2471,inst_2444];
var inst_2473 = cljs.core.PersistentHashMap.fromArrays(inst_2470,inst_2472);
var inst_2474 = cljs.test.do_report.call(null,inst_2473);
var state_2803__$1 = state_2803;
var statearr_2882_3576 = state_2803__$1;
(statearr_2882_3576[(2)] = inst_2474);

(statearr_2882_3576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (45))){
var inst_2600 = (state_2803[(16)]);
var state_2803__$1 = state_2803;
var statearr_2883_3577 = state_2803__$1;
(statearr_2883_3577[(2)] = inst_2600);

(statearr_2883_3577[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (77))){
var inst_2752 = (state_2803[(18)]);
var inst_2752__$1 = (state_2803[(2)]);
var inst_2753 = (inst_2752__$1 instanceof cljs.core.ExceptionInfo);
var inst_2754 = cljs.core.ex_data.call(null,inst_2752__$1);
var inst_2755 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2754);
var inst_2756 = cljs.core._EQ_.call(null,inst_2755,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2757 = ((inst_2753) && (inst_2756));
var state_2803__$1 = (function (){var statearr_2884 = state_2803;
(statearr_2884[(18)] = inst_2752__$1);

return statearr_2884;
})();
if(cljs.core.truth_(inst_2757)){
var statearr_2885_3578 = state_2803__$1;
(statearr_2885_3578[(1)] = (78));

} else {
var statearr_2886_3579 = state_2803__$1;
(statearr_2886_3579[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (14))){
var inst_2444 = (state_2803[(12)]);
var inst_2476 = (state_2803[(2)]);
var _ = (function (){var statearr_2887 = state_2803;
(statearr_2887[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2887;
})();
var state_2803__$1 = (function (){var statearr_2888 = state_2803;
(statearr_2888[(19)] = inst_2476);

return statearr_2888;
})();
var statearr_2889_3580 = state_2803__$1;
(statearr_2889_3580[(2)] = inst_2444);

(statearr_2889_3580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (46))){
var inst_2610 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2891 = state_2803;
(statearr_2891[(20)] = inst_2610);

return statearr_2891;
})();
var statearr_2892_3581 = state_2803__$1;
(statearr_2892_3581[(2)] = null);

(statearr_2892_3581[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (78))){
var inst_2752 = (state_2803[(18)]);
var inst_2759 = (function(){throw inst_2752})();
var state_2803__$1 = state_2803;
var statearr_2893_3582 = state_2803__$1;
(statearr_2893_3582[(2)] = inst_2759);

(statearr_2893_3582[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (15))){
var _ = (function (){var statearr_2894 = state_2803;
(statearr_2894[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2894;
})();
var state_2803__$1 = state_2803;
var ex2890 = (state_2803__$1[(2)]);
var statearr_2895_3583 = state_2803__$1;
(statearr_2895_3583[(5)] = ex2890);


if((ex2890 instanceof Error)){
var statearr_2896_3584 = state_2803__$1;
(statearr_2896_3584[(1)] = (4));

(statearr_2896_3584[(5)] = null);

} else {
throw ex2890;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (47))){
var inst_2610 = (state_2803[(20)]);
var inst_2624 = (state_2803[(21)]);
var inst_2625 = (state_2803[(22)]);
var _ = (function (){var statearr_2897 = state_2803;
(statearr_2897[(4)] = cljs.core.cons.call(null,(50),(state_2803[(4)])));

return statearr_2897;
})();
var inst_2622 = cljs.core.count.call(null,inst_2610);
var inst_2623 = (new cljs.core.List(null,(1),null,(1),null));
var inst_2624__$1 = (new cljs.core.List(null,inst_2622,inst_2623,(2),null));
var inst_2625__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_2624__$1);
var state_2803__$1 = (function (){var statearr_2898 = state_2803;
(statearr_2898[(21)] = inst_2624__$1);

(statearr_2898[(22)] = inst_2625__$1);

return statearr_2898;
})();
if(cljs.core.truth_(inst_2625__$1)){
var statearr_2899_3585 = state_2803__$1;
(statearr_2899_3585[(1)] = (51));

} else {
var statearr_2900_3586 = state_2803__$1;
(statearr_2900_3586[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (79))){
var inst_2752 = (state_2803[(18)]);
var state_2803__$1 = state_2803;
var statearr_2901_3587 = state_2803__$1;
(statearr_2901_3587[(2)] = inst_2752);

(statearr_2901_3587[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (16))){
var inst_2489 = (state_2803[(23)]);
var inst_2489__$1 = (state_2803[(2)]);
var inst_2490 = (inst_2489__$1 instanceof cljs.core.ExceptionInfo);
var inst_2491 = cljs.core.ex_data.call(null,inst_2489__$1);
var inst_2492 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2491);
var inst_2493 = cljs.core._EQ_.call(null,inst_2492,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2494 = ((inst_2490) && (inst_2493));
var state_2803__$1 = (function (){var statearr_2902 = state_2803;
(statearr_2902[(23)] = inst_2489__$1);

return statearr_2902;
})();
if(cljs.core.truth_(inst_2494)){
var statearr_2903_3588 = state_2803__$1;
(statearr_2903_3588[(1)] = (17));

} else {
var statearr_2904_3589 = state_2803__$1;
(statearr_2904_3589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (48))){
var inst_2648 = (state_2803[(2)]);
var inst_2649 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_2650 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_2651 = cljs.core.PersistentHashMap.fromArrays(inst_2649,inst_2650);
var inst_2652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2653 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_2654 = [e2e.proposals.owner_acc,"active"];
var inst_2655 = cljs.core.PersistentHashMap.fromArrays(inst_2653,inst_2654);
var inst_2656 = [inst_2655];
var inst_2657 = (new cljs.core.PersistentVector(null,(1),(5),inst_2652,inst_2656,null));
var inst_2658 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_2651,inst_2657);
var inst_2659 = cljs.core.async.interop.p__GT_c.call(null,inst_2658);
var state_2803__$1 = (function (){var statearr_2905 = state_2803;
(statearr_2905[(24)] = inst_2648);

return statearr_2905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(54),inst_2659);
} else {
if((state_val_2804 === (80))){
var inst_2762 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2906 = state_2803;
(statearr_2906[(25)] = inst_2762);

return statearr_2906;
})();
var statearr_2907_3590 = state_2803__$1;
(statearr_2907_3590[(2)] = null);

(statearr_2907_3590[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (17))){
var inst_2489 = (state_2803[(23)]);
var inst_2496 = (function(){throw inst_2489})();
var state_2803__$1 = state_2803;
var statearr_2908_3591 = state_2803__$1;
(statearr_2908_3591[(2)] = inst_2496);

(statearr_2908_3591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (49))){
var inst_2611 = (state_2803[(2)]);
var inst_2612 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2613 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_2614 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_2613,inst_2611];
var inst_2615 = cljs.core.PersistentHashMap.fromArrays(inst_2612,inst_2614);
var inst_2616 = cljs.test.do_report.call(null,inst_2615);
var state_2803__$1 = state_2803;
var statearr_2909_3592 = state_2803__$1;
(statearr_2909_3592[(2)] = inst_2616);

(statearr_2909_3592[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (81))){
var inst_2762 = (state_2803[(25)]);
var inst_2776 = (state_2803[(26)]);
var inst_2777 = (state_2803[(27)]);
var _ = (function (){var statearr_2911 = state_2803;
(statearr_2911[(4)] = cljs.core.cons.call(null,(84),(state_2803[(4)])));

return statearr_2911;
})();
var inst_2774 = cljs.core.count.call(null,inst_2762);
var inst_2775 = (new cljs.core.List(null,(2),null,(1),null));
var inst_2776__$1 = (new cljs.core.List(null,inst_2774,inst_2775,(2),null));
var inst_2777__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_2776__$1);
var state_2803__$1 = (function (){var statearr_2912 = state_2803;
(statearr_2912[(26)] = inst_2776__$1);

(statearr_2912[(27)] = inst_2777__$1);

return statearr_2912;
})();
if(cljs.core.truth_(inst_2777__$1)){
var statearr_2913_3593 = state_2803__$1;
(statearr_2913_3593[(1)] = (85));

} else {
var statearr_2914_3594 = state_2803__$1;
(statearr_2914_3594[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (18))){
var inst_2489 = (state_2803[(23)]);
var state_2803__$1 = state_2803;
var statearr_2915_3595 = state_2803__$1;
(statearr_2915_3595[(2)] = inst_2489);

(statearr_2915_3595[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (50))){
var _ = (function (){var statearr_2916 = state_2803;
(statearr_2916[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2916;
})();
var state_2803__$1 = state_2803;
var ex2910 = (state_2803__$1[(2)]);
var statearr_2917_3596 = state_2803__$1;
(statearr_2917_3596[(5)] = ex2910);


var statearr_2918_3597 = state_2803__$1;
(statearr_2918_3597[(1)] = (49));

(statearr_2918_3597[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (82))){
var inst_2800 = (state_2803[(2)]);
var inst_2801 = done.call(null);
var state_2803__$1 = (function (){var statearr_2919 = state_2803;
(statearr_2919[(28)] = inst_2800);

return statearr_2919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2803__$1,inst_2801);
} else {
if((state_val_2804 === (19))){
var inst_2499 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2920 = state_2803;
(statearr_2920[(29)] = inst_2499);

return statearr_2920;
})();
var statearr_2921_3598 = state_2803__$1;
(statearr_2921_3598[(2)] = null);

(statearr_2921_3598[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (51))){
var inst_2624 = (state_2803[(21)]);
var inst_2627 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2628 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_2629 = cljs.core.cons.call(null,cljs.core._EQ_,inst_2624);
var inst_2630 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_2628,inst_2629];
var inst_2631 = cljs.core.PersistentHashMap.fromArrays(inst_2627,inst_2630);
var inst_2632 = cljs.test.do_report.call(null,inst_2631);
var state_2803__$1 = state_2803;
var statearr_2922_3599 = state_2803__$1;
(statearr_2922_3599[(2)] = inst_2632);

(statearr_2922_3599[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (83))){
var inst_2763 = (state_2803[(2)]);
var inst_2764 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2765 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_2766 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_2765,inst_2763];
var inst_2767 = cljs.core.PersistentHashMap.fromArrays(inst_2764,inst_2766);
var inst_2768 = cljs.test.do_report.call(null,inst_2767);
var state_2803__$1 = state_2803;
var statearr_2923_3600 = state_2803__$1;
(statearr_2923_3600[(2)] = inst_2768);

(statearr_2923_3600[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (20))){
var _ = (function (){var statearr_2925 = state_2803;
(statearr_2925[(4)] = cljs.core.cons.call(null,(23),(state_2803[(4)])));

return statearr_2925;
})();
var inst_2511 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_2512 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member"];
var inst_2513 = cljs.core.PersistentHashMap.fromArrays(inst_2511,inst_2512);
var inst_2514 = cljs.test.do_report.call(null,inst_2513);
var ___$1 = (function (){var statearr_2926 = state_2803;
(statearr_2926[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2926;
})();
var state_2803__$1 = state_2803;
var statearr_2927_3601 = state_2803__$1;
(statearr_2927_3601[(2)] = inst_2514);

(statearr_2927_3601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (52))){
var inst_2624 = (state_2803[(21)]);
var inst_2634 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2635 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_2636 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_2637 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_2638 = cljs.core.cons.call(null,inst_2637,inst_2624);
var inst_2639 = (new cljs.core.List(null,inst_2638,null,(1),null));
var inst_2640 = (new cljs.core.List(null,inst_2636,inst_2639,(2),null));
var inst_2641 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_2635,inst_2640];
var inst_2642 = cljs.core.PersistentHashMap.fromArrays(inst_2634,inst_2641);
var inst_2643 = cljs.test.do_report.call(null,inst_2642);
var state_2803__$1 = state_2803;
var statearr_2928_3602 = state_2803__$1;
(statearr_2928_3602[(2)] = inst_2643);

(statearr_2928_3602[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (84))){
var _ = (function (){var statearr_2929 = state_2803;
(statearr_2929[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2929;
})();
var state_2803__$1 = state_2803;
var ex2924 = (state_2803__$1[(2)]);
var statearr_2930_3603 = state_2803__$1;
(statearr_2930_3603[(5)] = ex2924);


var statearr_2931_3604 = state_2803__$1;
(statearr_2931_3604[(1)] = (83));

(statearr_2931_3604[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (21))){
var inst_2517 = (state_2803[(2)]);
var _ = (function (){var statearr_2932 = state_2803;
(statearr_2932[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2932;
})();
var state_2803__$1 = state_2803;
var statearr_2933_3605 = state_2803__$1;
(statearr_2933_3605[(2)] = inst_2517);

(statearr_2933_3605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (53))){
var inst_2625 = (state_2803[(22)]);
var inst_2645 = (state_2803[(2)]);
var _ = (function (){var statearr_2934 = state_2803;
(statearr_2934[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2934;
})();
var state_2803__$1 = (function (){var statearr_2935 = state_2803;
(statearr_2935[(30)] = inst_2645);

return statearr_2935;
})();
var statearr_2936_3606 = state_2803__$1;
(statearr_2936_3606[(2)] = inst_2625);

(statearr_2936_3606[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (85))){
var inst_2776 = (state_2803[(26)]);
var inst_2779 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2780 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_2781 = cljs.core.cons.call(null,cljs.core._EQ_,inst_2776);
var inst_2782 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_2780,inst_2781];
var inst_2783 = cljs.core.PersistentHashMap.fromArrays(inst_2779,inst_2782);
var inst_2784 = cljs.test.do_report.call(null,inst_2783);
var state_2803__$1 = state_2803;
var statearr_2937_3607 = state_2803__$1;
(statearr_2937_3607[(2)] = inst_2784);

(statearr_2937_3607[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (22))){
var inst_2500 = (state_2803[(2)]);
var inst_2501 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2502 = null;
var inst_2503 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_2502,inst_2500];
var inst_2504 = cljs.core.PersistentHashMap.fromArrays(inst_2501,inst_2503);
var inst_2505 = cljs.test.do_report.call(null,inst_2504);
var state_2803__$1 = state_2803;
var statearr_2938_3608 = state_2803__$1;
(statearr_2938_3608[(2)] = inst_2505);

(statearr_2938_3608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (54))){
var inst_2661 = (state_2803[(31)]);
var inst_2661__$1 = (state_2803[(2)]);
var inst_2662 = (inst_2661__$1 instanceof cljs.core.ExceptionInfo);
var inst_2663 = cljs.core.ex_data.call(null,inst_2661__$1);
var inst_2664 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_2663);
var inst_2665 = cljs.core._EQ_.call(null,inst_2664,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_2666 = ((inst_2662) && (inst_2665));
var state_2803__$1 = (function (){var statearr_2940 = state_2803;
(statearr_2940[(31)] = inst_2661__$1);

return statearr_2940;
})();
if(cljs.core.truth_(inst_2666)){
var statearr_2941_3609 = state_2803__$1;
(statearr_2941_3609[(1)] = (55));

} else {
var statearr_2942_3610 = state_2803__$1;
(statearr_2942_3610[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (86))){
var inst_2776 = (state_2803[(26)]);
var inst_2786 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2787 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_2788 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_2789 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_2790 = cljs.core.cons.call(null,inst_2789,inst_2776);
var inst_2791 = (new cljs.core.List(null,inst_2790,null,(1),null));
var inst_2792 = (new cljs.core.List(null,inst_2788,inst_2791,(2),null));
var inst_2793 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_2787,inst_2792];
var inst_2794 = cljs.core.PersistentHashMap.fromArrays(inst_2786,inst_2793);
var inst_2795 = cljs.test.do_report.call(null,inst_2794);
var state_2803__$1 = state_2803;
var statearr_2943_3611 = state_2803__$1;
(statearr_2943_3611[(2)] = inst_2795);

(statearr_2943_3611[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (23))){
var _ = (function (){var statearr_2944 = state_2803;
(statearr_2944[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2944;
})();
var state_2803__$1 = state_2803;
var ex2939 = (state_2803__$1[(2)]);
var statearr_2945_3612 = state_2803__$1;
(statearr_2945_3612[(5)] = ex2939);


var statearr_2946_3613 = state_2803__$1;
(statearr_2946_3613[(1)] = (22));

(statearr_2946_3613[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (55))){
var inst_2661 = (state_2803[(31)]);
var inst_2668 = (function(){throw inst_2661})();
var state_2803__$1 = state_2803;
var statearr_2947_3614 = state_2803__$1;
(statearr_2947_3614[(2)] = inst_2668);

(statearr_2947_3614[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (87))){
var inst_2777 = (state_2803[(27)]);
var inst_2797 = (state_2803[(2)]);
var _ = (function (){var statearr_2948 = state_2803;
(statearr_2948[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2948;
})();
var state_2803__$1 = (function (){var statearr_2949 = state_2803;
(statearr_2949[(32)] = inst_2797);

return statearr_2949;
})();
var statearr_2950_3615 = state_2803__$1;
(statearr_2950_3615[(2)] = inst_2777);

(statearr_2950_3615[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (24))){
var _ = (function (){var statearr_2951 = state_2803;
(statearr_2951[(4)] = cljs.core.cons.call(null,(31),(state_2803[(4)])));

return statearr_2951;
})();
var inst_2546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2547 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_2548 = [e2e.proposals.owner_acc,"active"];
var inst_2549 = cljs.core.PersistentHashMap.fromArrays(inst_2547,inst_2548);
var inst_2550 = [inst_2549];
var inst_2551 = (new cljs.core.PersistentVector(null,(1),(5),inst_2546,inst_2550,null));
var inst_2552 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",e2e.proposals.base_prop,inst_2551);
var inst_2553 = cljs.core.async.interop.p__GT_c.call(null,inst_2552);
var state_2803__$1 = state_2803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(32),inst_2553);
} else {
if((state_val_2804 === (56))){
var inst_2661 = (state_2803[(31)]);
var state_2803__$1 = state_2803;
var statearr_2952_3616 = state_2803__$1;
(statearr_2952_3616[(2)] = inst_2661);

(statearr_2952_3616[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (25))){
var inst_2596 = (state_2803[(2)]);
var inst_2597 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_2598 = cljs.core.async.interop.p__GT_c.call(null,inst_2597);
var state_2803__$1 = (function (){var statearr_2953 = state_2803;
(statearr_2953[(33)] = inst_2596);

return statearr_2953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(43),inst_2598);
} else {
if((state_val_2804 === (57))){
var inst_2671 = (state_2803[(2)]);
var state_2803__$1 = (function (){var statearr_2954 = state_2803;
(statearr_2954[(34)] = inst_2671);

return statearr_2954;
})();
var statearr_2955_3617 = state_2803__$1;
(statearr_2955_3617[(2)] = null);

(statearr_2955_3617[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (26))){
var inst_2521 = (state_2803[(2)]);
var inst_2522 = cljs.core.prn.call(null,"test failed with ",inst_2521);
var state_2803__$1 = (function (){var statearr_2956 = state_2803;
(statearr_2956[(35)] = inst_2522);

return statearr_2956;
})();
var statearr_2957_3618 = state_2803__$1;
(statearr_2957_3618[(2)] = null);

(statearr_2957_3618[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (58))){
var _ = (function (){var statearr_2958 = state_2803;
(statearr_2958[(4)] = cljs.core.cons.call(null,(65),(state_2803[(4)])));

return statearr_2958;
})();
var inst_2697 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"bb");
var inst_2698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2699 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_2700 = [e2e.proposals.owner_acc,"active"];
var inst_2701 = cljs.core.PersistentHashMap.fromArrays(inst_2699,inst_2700);
var inst_2702 = [inst_2701];
var inst_2703 = (new cljs.core.PersistentVector(null,(1),(5),inst_2698,inst_2702,null));
var inst_2704 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_2697,inst_2703);
var inst_2705 = cljs.core.async.interop.p__GT_c.call(null,inst_2704);
var state_2803__$1 = state_2803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(66),inst_2705);
} else {
if((state_val_2804 === (27))){
var _ = (function (){var statearr_2959 = state_2803;
(statearr_2959[(4)] = cljs.core.cons.call(null,(30),(state_2803[(4)])));

return statearr_2959;
})();
var inst_2534 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_2535 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal"];
var inst_2536 = cljs.core.PersistentHashMap.fromArrays(inst_2534,inst_2535);
var inst_2537 = cljs.test.do_report.call(null,inst_2536);
var ___$1 = (function (){var statearr_2960 = state_2803;
(statearr_2960[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2960;
})();
var state_2803__$1 = state_2803;
var statearr_2961_3619 = state_2803__$1;
(statearr_2961_3619[(2)] = inst_2537);

(statearr_2961_3619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (59))){
var inst_2748 = (state_2803[(2)]);
var inst_2749 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_2750 = cljs.core.async.interop.p__GT_c.call(null,inst_2749);
var state_2803__$1 = (function (){var statearr_2962 = state_2803;
(statearr_2962[(36)] = inst_2748);

return statearr_2962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2803__$1,(77),inst_2750);
} else {
if((state_val_2804 === (28))){
var inst_2540 = (state_2803[(2)]);
var state_2803__$1 = state_2803;
var statearr_2963_3620 = state_2803__$1;
(statearr_2963_3620[(2)] = inst_2540);

(statearr_2963_3620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (60))){
var inst_2672 = (state_2803[(2)]);
var inst_2673 = cljs.core.prn.call(null,"test failed with ",inst_2672);
var state_2803__$1 = (function (){var statearr_2964 = state_2803;
(statearr_2964[(37)] = inst_2673);

return statearr_2964;
})();
var statearr_2965_3621 = state_2803__$1;
(statearr_2965_3621[(2)] = null);

(statearr_2965_3621[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (29))){
var inst_2523 = (state_2803[(2)]);
var inst_2524 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2525 = null;
var inst_2526 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_2525,inst_2523];
var inst_2527 = cljs.core.PersistentHashMap.fromArrays(inst_2524,inst_2526);
var inst_2528 = cljs.test.do_report.call(null,inst_2527);
var state_2803__$1 = state_2803;
var statearr_2967_3622 = state_2803__$1;
(statearr_2967_3622[(2)] = inst_2528);

(statearr_2967_3622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (61))){
var _ = (function (){var statearr_2968 = state_2803;
(statearr_2968[(4)] = cljs.core.cons.call(null,(64),(state_2803[(4)])));

return statearr_2968;
})();
var inst_2685 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_2686 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal"];
var inst_2687 = cljs.core.PersistentHashMap.fromArrays(inst_2685,inst_2686);
var inst_2688 = cljs.test.do_report.call(null,inst_2687);
var ___$1 = (function (){var statearr_2969 = state_2803;
(statearr_2969[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2969;
})();
var state_2803__$1 = state_2803;
var statearr_2970_3623 = state_2803__$1;
(statearr_2970_3623[(2)] = inst_2688);

(statearr_2970_3623[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (30))){
var _ = (function (){var statearr_2972 = state_2803;
(statearr_2972[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2972;
})();
var state_2803__$1 = state_2803;
var ex2966 = (state_2803__$1[(2)]);
var statearr_2973_3624 = state_2803__$1;
(statearr_2973_3624[(5)] = ex2966);


var statearr_2974_3625 = state_2803__$1;
(statearr_2974_3625[(1)] = (29));

(statearr_2974_3625[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (62))){
var inst_2691 = (state_2803[(2)]);
var state_2803__$1 = state_2803;
var statearr_2975_3626 = state_2803__$1;
(statearr_2975_3626[(2)] = inst_2691);

(statearr_2975_3626[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (31))){
var _ = (function (){var statearr_2976 = state_2803;
(statearr_2976[(4)] = cljs.core.rest.call(null,(state_2803[(4)])));

return statearr_2976;
})();
var state_2803__$1 = state_2803;
var ex2971 = (state_2803__$1[(2)]);
var statearr_2977_3627 = state_2803__$1;
(statearr_2977_3627[(5)] = ex2971);


if((ex2971 instanceof Error)){
var statearr_2978_3628 = state_2803__$1;
(statearr_2978_3628[(1)] = (26));

(statearr_2978_3628[(5)] = null);

} else {
throw ex2971;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_2804 === (63))){
var inst_2674 = (state_2803[(2)]);
var inst_2675 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2676 = null;
var inst_2677 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_2676,inst_2674];
var inst_2678 = cljs.core.PersistentHashMap.fromArrays(inst_2675,inst_2677);
var inst_2679 = cljs.test.do_report.call(null,inst_2678);
var state_2803__$1 = state_2803;
var statearr_2979_3629 = state_2803__$1;
(statearr_2979_3629[(2)] = inst_2679);

(statearr_2979_3629[(1)] = (62));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_2980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2980[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_2980[(1)] = (1));

return statearr_2980;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_2803){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_2803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e2981){var ex__18__auto__ = e2981;
var statearr_2982_3630 = state_2803;
(statearr_2982_3630[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_2803[(4)]))){
var statearr_2983_3631 = state_2803;
(statearr_2983_3631[(1)] = cljs.core.first.call(null,(state_2803[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3632 = state_2803;
state_2803 = G__3632;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_2803){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_2803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_2984 = f__20__auto__.call(null);
(statearr_2984[(6)] = c__19__auto__);

return statearr_2984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals2437.prototype.apply = (function (self__,args2440){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args2440)));
});

e2e.proposals.t_e2e$proposals2437.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_3347){
var state_val_3348 = (state_3347[(1)]);
if((state_val_3348 === (32))){
var inst_3099 = (state_3347[(7)]);
var inst_3099__$1 = (state_3347[(2)]);
var inst_3100 = (inst_3099__$1 instanceof cljs.core.ExceptionInfo);
var inst_3101 = cljs.core.ex_data.call(null,inst_3099__$1);
var inst_3102 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3101);
var inst_3103 = cljs.core._EQ_.call(null,inst_3102,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3104 = ((inst_3100) && (inst_3103));
var state_3347__$1 = (function (){var statearr_3350 = state_3347;
(statearr_3350[(7)] = inst_3099__$1);

return statearr_3350;
})();
if(cljs.core.truth_(inst_3104)){
var statearr_3351_3633 = state_3347__$1;
(statearr_3351_3633[(1)] = (33));

} else {
var statearr_3352_3634 = state_3347__$1;
(statearr_3352_3634[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (64))){
var _ = (function (){var statearr_3353 = state_3347;
(statearr_3353[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3353;
})();
var state_3347__$1 = state_3347;
var ex3349 = (state_3347__$1[(2)]);
var statearr_3354_3635 = state_3347__$1;
(statearr_3354_3635[(5)] = ex3349);


var statearr_3355_3636 = state_3347__$1;
(statearr_3355_3636[(1)] = (63));

(statearr_3355_3636[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (1))){
var state_3347__$1 = state_3347;
var statearr_3357_3637 = state_3347__$1;
(statearr_3357_3637[(2)] = null);

(statearr_3357_3637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (33))){
var inst_3099 = (state_3347[(7)]);
var inst_3106 = (function(){throw inst_3099})();
var state_3347__$1 = state_3347;
var statearr_3358_3638 = state_3347__$1;
(statearr_3358_3638[(2)] = inst_3106);

(statearr_3358_3638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (65))){
var _ = (function (){var statearr_3359 = state_3347;
(statearr_3359[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3359;
})();
var state_3347__$1 = state_3347;
var ex3356 = (state_3347__$1[(2)]);
var statearr_3360_3639 = state_3347__$1;
(statearr_3360_3639[(5)] = ex3356);


if((ex3356 instanceof Error)){
var statearr_3361_3640 = state_3347__$1;
(statearr_3361_3640[(1)] = (60));

(statearr_3361_3640[(5)] = null);

} else {
throw ex3356;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (2))){
var _ = (function (){var statearr_3362 = state_3347;
(statearr_3362[(4)] = cljs.core.cons.call(null,(15),(state_3347[(4)])));

return statearr_3362;
})();
var inst_3029 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"author","author",(2111686192)),e2e.proposals.prop_acc);
var inst_3030 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_3029);
var inst_3031 = cljs.core.async.interop.p__GT_c.call(null,inst_3030);
var state_3347__$1 = state_3347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(16),inst_3031);
} else {
if((state_val_3348 === (34))){
var inst_3099 = (state_3347[(7)]);
var state_3347__$1 = state_3347;
var statearr_3363_3641 = state_3347__$1;
(statearr_3363_3641[(2)] = inst_3099);

(statearr_3363_3641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (66))){
var inst_3251 = (state_3347[(8)]);
var inst_3251__$1 = (state_3347[(2)]);
var inst_3252 = (inst_3251__$1 instanceof cljs.core.ExceptionInfo);
var inst_3253 = cljs.core.ex_data.call(null,inst_3251__$1);
var inst_3254 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3253);
var inst_3255 = cljs.core._EQ_.call(null,inst_3254,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3256 = ((inst_3252) && (inst_3255));
var state_3347__$1 = (function (){var statearr_3364 = state_3347;
(statearr_3364[(8)] = inst_3251__$1);

return statearr_3364;
})();
if(cljs.core.truth_(inst_3256)){
var statearr_3365_3642 = state_3347__$1;
(statearr_3365_3642[(1)] = (67));

} else {
var statearr_3366_3643 = state_3347__$1;
(statearr_3366_3643[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (3))){
var inst_3064 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3367 = state_3347;
(statearr_3367[(9)] = inst_3064);

return statearr_3367;
})();
var statearr_3368_3644 = state_3347__$1;
(statearr_3368_3644[(2)] = null);

(statearr_3368_3644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (35))){
var inst_3109 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3369 = state_3347;
(statearr_3369[(10)] = inst_3109);

return statearr_3369;
})();
var statearr_3370_3645 = state_3347__$1;
(statearr_3370_3645[(2)] = null);

(statearr_3370_3645[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (67))){
var inst_3251 = (state_3347[(8)]);
var inst_3258 = (function(){throw inst_3251})();
var state_3347__$1 = state_3347;
var statearr_3371_3646 = state_3347__$1;
(statearr_3371_3646[(2)] = inst_3258);

(statearr_3371_3646[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (4))){
var inst_2987 = (state_3347[(11)]);
var inst_2988 = (state_3347[(12)]);
var inst_2985 = (state_3347[(2)]);
var inst_2986 = inst_2985.cause;
var inst_2987__$1 = inst_2986.message;
var inst_2988__$1 = clojure.string.ends_with_QMARK_.call(null,inst_2987__$1,"not a dao member");
var inst_2989 = (!(inst_2988__$1));
var state_3347__$1 = (function (){var statearr_3372 = state_3347;
(statearr_3372[(11)] = inst_2987__$1);

(statearr_3372[(12)] = inst_2988__$1);

return statearr_3372;
})();
if(inst_2989){
var statearr_3373_3647 = state_3347__$1;
(statearr_3373_3647[(1)] = (5));

} else {
var statearr_3374_3648 = state_3347__$1;
(statearr_3374_3648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (36))){
var _ = (function (){var statearr_3375 = state_3347;
(statearr_3375[(4)] = cljs.core.cons.call(null,(39),(state_3347[(4)])));

return statearr_3375;
})();
var state_3347__$1 = state_3347;
var statearr_3376_3649 = state_3347__$1;
(statearr_3376_3649[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (68))){
var inst_3251 = (state_3347[(8)]);
var state_3347__$1 = state_3347;
var statearr_3378_3650 = state_3347__$1;
(statearr_3378_3650[(2)] = inst_3251);

(statearr_3378_3650[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (5))){
var inst_2987 = (state_3347[(11)]);
var inst_2991 = ["expected =","not a dao member"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_2987)].join('');
var inst_2992 = cljs.core.prn.call(null,inst_2991);
var state_3347__$1 = state_3347;
var statearr_3379_3651 = state_3347__$1;
(statearr_3379_3651[(2)] = inst_2992);

(statearr_3379_3651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (37))){
var inst_3137 = (state_3347[(2)]);
var _ = (function (){var statearr_3380 = state_3347;
(statearr_3380[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3380;
})();
var state_3347__$1 = state_3347;
var statearr_3381_3652 = state_3347__$1;
(statearr_3381_3652[(2)] = inst_3137);

(statearr_3381_3652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (69))){
var inst_3261 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3382 = state_3347;
(statearr_3382[(13)] = inst_3261);

return statearr_3382;
})();
var statearr_3383_3653 = state_3347__$1;
(statearr_3383_3653[(2)] = null);

(statearr_3383_3653[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (6))){
var state_3347__$1 = state_3347;
var statearr_3384_3654 = state_3347__$1;
(statearr_3384_3654[(2)] = null);

(statearr_3384_3654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (38))){
var inst_3110 = (state_3347[(2)]);
var inst_3111 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3112 = true;
var inst_3113 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_3112,inst_3110];
var inst_3114 = cljs.core.PersistentHashMap.fromArrays(inst_3111,inst_3113);
var inst_3115 = cljs.test.do_report.call(null,inst_3114);
var state_3347__$1 = state_3347;
var statearr_3385_3655 = state_3347__$1;
(statearr_3385_3655[(2)] = inst_3115);

(statearr_3385_3655[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (70))){
var _ = (function (){var statearr_3387 = state_3347;
(statearr_3387[(4)] = cljs.core.cons.call(null,(73),(state_3347[(4)])));

return statearr_3387;
})();
var state_3347__$1 = state_3347;
var statearr_3388_3656 = state_3347__$1;
(statearr_3388_3656[(1)] = (74));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (7))){
var inst_2995 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3390 = state_3347;
(statearr_3390[(14)] = inst_2995);

return statearr_3390;
})();
var statearr_3391_3657 = state_3347__$1;
(statearr_3391_3657[(2)] = null);

(statearr_3391_3657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (39))){
var _ = (function (){var statearr_3392 = state_3347;
(statearr_3392[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3392;
})();
var state_3347__$1 = state_3347;
var ex3386 = (state_3347__$1[(2)]);
var statearr_3393_3658 = state_3347__$1;
(statearr_3393_3658[(5)] = ex3386);


var statearr_3394_3659 = state_3347__$1;
(statearr_3394_3659[(1)] = (38));

(statearr_3394_3659[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (71))){
var inst_3289 = (state_3347[(2)]);
var _ = (function (){var statearr_3395 = state_3347;
(statearr_3395[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3395;
})();
var state_3347__$1 = state_3347;
var statearr_3396_3660 = state_3347__$1;
(statearr_3396_3660[(2)] = inst_3289);

(statearr_3396_3660[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (8))){
var inst_2988 = (state_3347[(12)]);
var _ = (function (){var statearr_3397 = state_3347;
(statearr_3397[(4)] = cljs.core.cons.call(null,(11),(state_3347[(4)])));

return statearr_3397;
})();
var state_3347__$1 = state_3347;
if(cljs.core.truth_(inst_2988)){
var statearr_3398_3661 = state_3347__$1;
(statearr_3398_3661[(1)] = (12));

} else {
var statearr_3399_3662 = state_3347__$1;
(statearr_3399_3662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (40))){
var inst_3122 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3123 = true;
var inst_3124 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a proposal",inst_3123,true];
var inst_3125 = cljs.core.PersistentHashMap.fromArrays(inst_3122,inst_3124);
var inst_3126 = cljs.test.do_report.call(null,inst_3125);
var state_3347__$1 = state_3347;
var statearr_3400_3663 = state_3347__$1;
(statearr_3400_3663[(2)] = inst_3126);

(statearr_3400_3663[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (72))){
var inst_3262 = (state_3347[(2)]);
var inst_3263 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3264 = true;
var inst_3265 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_3264,inst_3262];
var inst_3266 = cljs.core.PersistentHashMap.fromArrays(inst_3263,inst_3265);
var inst_3267 = cljs.test.do_report.call(null,inst_3266);
var state_3347__$1 = state_3347;
var statearr_3401_3664 = state_3347__$1;
(statearr_3401_3664[(2)] = inst_3267);

(statearr_3401_3664[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (9))){
var inst_3023 = (state_3347[(2)]);
var state_3347__$1 = state_3347;
var statearr_3403_3665 = state_3347__$1;
(statearr_3403_3665[(2)] = inst_3023);

(statearr_3403_3665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (41))){
var inst_3128 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3129 = true;
var inst_3130 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal",inst_3129,true];
var inst_3131 = cljs.core.PersistentHashMap.fromArrays(inst_3128,inst_3130);
var inst_3132 = cljs.test.do_report.call(null,inst_3131);
var state_3347__$1 = state_3347;
var statearr_3404_3666 = state_3347__$1;
(statearr_3404_3666[(2)] = inst_3132);

(statearr_3404_3666[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (73))){
var _ = (function (){var statearr_3405 = state_3347;
(statearr_3405[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3405;
})();
var state_3347__$1 = state_3347;
var ex3402 = (state_3347__$1[(2)]);
var statearr_3406_3667 = state_3347__$1;
(statearr_3406_3667[(5)] = ex3402);


var statearr_3407_3668 = state_3347__$1;
(statearr_3407_3668[(1)] = (72));

(statearr_3407_3668[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (10))){
var inst_2996 = (state_3347[(2)]);
var inst_2997 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_2998 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_2999 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_2998,inst_2996];
var inst_3000 = cljs.core.PersistentHashMap.fromArrays(inst_2997,inst_2999);
var inst_3001 = cljs.test.do_report.call(null,inst_3000);
var state_3347__$1 = state_3347;
var statearr_3408_3669 = state_3347__$1;
(statearr_3408_3669[(2)] = inst_3001);

(statearr_3408_3669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (42))){
var inst_3134 = (state_3347[(2)]);
var _ = (function (){var statearr_3410 = state_3347;
(statearr_3410[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3410;
})();
var state_3347__$1 = (function (){var statearr_3411 = state_3347;
(statearr_3411[(15)] = inst_3134);

return statearr_3411;
})();
var statearr_3412_3670 = state_3347__$1;
(statearr_3412_3670[(2)] = true);

(statearr_3412_3670[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (74))){
var inst_3274 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3275 = true;
var inst_3276 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can make a second proposal",inst_3275,true];
var inst_3277 = cljs.core.PersistentHashMap.fromArrays(inst_3274,inst_3276);
var inst_3278 = cljs.test.do_report.call(null,inst_3277);
var state_3347__$1 = state_3347;
var statearr_3413_3671 = state_3347__$1;
(statearr_3413_3671[(2)] = inst_3278);

(statearr_3413_3671[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (11))){
var _ = (function (){var statearr_3414 = state_3347;
(statearr_3414[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3414;
})();
var state_3347__$1 = state_3347;
var ex3409 = (state_3347__$1[(2)]);
var statearr_3415_3672 = state_3347__$1;
(statearr_3415_3672[(5)] = ex3409);


var statearr_3416_3673 = state_3347__$1;
(statearr_3416_3673[(1)] = (10));

(statearr_3416_3673[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (43))){
var inst_3144 = (state_3347[(16)]);
var inst_3144__$1 = (state_3347[(2)]);
var inst_3145 = (inst_3144__$1 instanceof cljs.core.ExceptionInfo);
var inst_3146 = cljs.core.ex_data.call(null,inst_3144__$1);
var inst_3147 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3146);
var inst_3148 = cljs.core._EQ_.call(null,inst_3147,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3149 = ((inst_3145) && (inst_3148));
var state_3347__$1 = (function (){var statearr_3417 = state_3347;
(statearr_3417[(16)] = inst_3144__$1);

return statearr_3417;
})();
if(cljs.core.truth_(inst_3149)){
var statearr_3418_3674 = state_3347__$1;
(statearr_3418_3674[(1)] = (44));

} else {
var statearr_3419_3675 = state_3347__$1;
(statearr_3419_3675[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (75))){
var inst_3280 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3281 = true;
var inst_3282 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal",inst_3281,true];
var inst_3283 = cljs.core.PersistentHashMap.fromArrays(inst_3280,inst_3282);
var inst_3284 = cljs.test.do_report.call(null,inst_3283);
var state_3347__$1 = state_3347;
var statearr_3420_3676 = state_3347__$1;
(statearr_3420_3676[(2)] = inst_3284);

(statearr_3420_3676[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (12))){
var inst_2988 = (state_3347[(12)]);
var inst_3008 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3009 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_3010 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"need to be a dao member",inst_3009,inst_2988];
var inst_3011 = cljs.core.PersistentHashMap.fromArrays(inst_3008,inst_3010);
var inst_3012 = cljs.test.do_report.call(null,inst_3011);
var state_3347__$1 = state_3347;
var statearr_3421_3677 = state_3347__$1;
(statearr_3421_3677[(2)] = inst_3012);

(statearr_3421_3677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (44))){
var inst_3144 = (state_3347[(16)]);
var inst_3151 = (function(){throw inst_3144})();
var state_3347__$1 = state_3347;
var statearr_3422_3678 = state_3347__$1;
(statearr_3422_3678[(2)] = inst_3151);

(statearr_3422_3678[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (76))){
var inst_3286 = (state_3347[(2)]);
var _ = (function (){var statearr_3423 = state_3347;
(statearr_3423[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3423;
})();
var state_3347__$1 = (function (){var statearr_3424 = state_3347;
(statearr_3424[(17)] = inst_3286);

return statearr_3424;
})();
var statearr_3425_3679 = state_3347__$1;
(statearr_3425_3679[(2)] = true);

(statearr_3425_3679[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (13))){
var inst_2988 = (state_3347[(12)]);
var inst_3014 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3015 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_3016 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member",inst_3015,inst_2988];
var inst_3017 = cljs.core.PersistentHashMap.fromArrays(inst_3014,inst_3016);
var inst_3018 = cljs.test.do_report.call(null,inst_3017);
var state_3347__$1 = state_3347;
var statearr_3426_3680 = state_3347__$1;
(statearr_3426_3680[(2)] = inst_3018);

(statearr_3426_3680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (45))){
var inst_3144 = (state_3347[(16)]);
var state_3347__$1 = state_3347;
var statearr_3427_3681 = state_3347__$1;
(statearr_3427_3681[(2)] = inst_3144);

(statearr_3427_3681[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (77))){
var inst_3296 = (state_3347[(18)]);
var inst_3296__$1 = (state_3347[(2)]);
var inst_3297 = (inst_3296__$1 instanceof cljs.core.ExceptionInfo);
var inst_3298 = cljs.core.ex_data.call(null,inst_3296__$1);
var inst_3299 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3298);
var inst_3300 = cljs.core._EQ_.call(null,inst_3299,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3301 = ((inst_3297) && (inst_3300));
var state_3347__$1 = (function (){var statearr_3428 = state_3347;
(statearr_3428[(18)] = inst_3296__$1);

return statearr_3428;
})();
if(cljs.core.truth_(inst_3301)){
var statearr_3429_3682 = state_3347__$1;
(statearr_3429_3682[(1)] = (78));

} else {
var statearr_3430_3683 = state_3347__$1;
(statearr_3430_3683[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (14))){
var inst_2988 = (state_3347[(12)]);
var inst_3020 = (state_3347[(2)]);
var _ = (function (){var statearr_3431 = state_3347;
(statearr_3431[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3431;
})();
var state_3347__$1 = (function (){var statearr_3432 = state_3347;
(statearr_3432[(19)] = inst_3020);

return statearr_3432;
})();
var statearr_3433_3684 = state_3347__$1;
(statearr_3433_3684[(2)] = inst_2988);

(statearr_3433_3684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (46))){
var inst_3154 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3435 = state_3347;
(statearr_3435[(20)] = inst_3154);

return statearr_3435;
})();
var statearr_3436_3685 = state_3347__$1;
(statearr_3436_3685[(2)] = null);

(statearr_3436_3685[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (78))){
var inst_3296 = (state_3347[(18)]);
var inst_3303 = (function(){throw inst_3296})();
var state_3347__$1 = state_3347;
var statearr_3437_3686 = state_3347__$1;
(statearr_3437_3686[(2)] = inst_3303);

(statearr_3437_3686[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (15))){
var _ = (function (){var statearr_3438 = state_3347;
(statearr_3438[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3438;
})();
var state_3347__$1 = state_3347;
var ex3434 = (state_3347__$1[(2)]);
var statearr_3439_3687 = state_3347__$1;
(statearr_3439_3687[(5)] = ex3434);


if((ex3434 instanceof Error)){
var statearr_3440_3688 = state_3347__$1;
(statearr_3440_3688[(1)] = (4));

(statearr_3440_3688[(5)] = null);

} else {
throw ex3434;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (47))){
var inst_3154 = (state_3347[(20)]);
var inst_3168 = (state_3347[(21)]);
var inst_3169 = (state_3347[(22)]);
var _ = (function (){var statearr_3441 = state_3347;
(statearr_3441[(4)] = cljs.core.cons.call(null,(50),(state_3347[(4)])));

return statearr_3441;
})();
var inst_3166 = cljs.core.count.call(null,inst_3154);
var inst_3167 = (new cljs.core.List(null,(1),null,(1),null));
var inst_3168__$1 = (new cljs.core.List(null,inst_3166,inst_3167,(2),null));
var inst_3169__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_3168__$1);
var state_3347__$1 = (function (){var statearr_3442 = state_3347;
(statearr_3442[(21)] = inst_3168__$1);

(statearr_3442[(22)] = inst_3169__$1);

return statearr_3442;
})();
if(cljs.core.truth_(inst_3169__$1)){
var statearr_3443_3689 = state_3347__$1;
(statearr_3443_3689[(1)] = (51));

} else {
var statearr_3444_3690 = state_3347__$1;
(statearr_3444_3690[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (79))){
var inst_3296 = (state_3347[(18)]);
var state_3347__$1 = state_3347;
var statearr_3445_3691 = state_3347__$1;
(statearr_3445_3691[(2)] = inst_3296);

(statearr_3445_3691[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (16))){
var inst_3033 = (state_3347[(23)]);
var inst_3033__$1 = (state_3347[(2)]);
var inst_3034 = (inst_3033__$1 instanceof cljs.core.ExceptionInfo);
var inst_3035 = cljs.core.ex_data.call(null,inst_3033__$1);
var inst_3036 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3035);
var inst_3037 = cljs.core._EQ_.call(null,inst_3036,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3038 = ((inst_3034) && (inst_3037));
var state_3347__$1 = (function (){var statearr_3446 = state_3347;
(statearr_3446[(23)] = inst_3033__$1);

return statearr_3446;
})();
if(cljs.core.truth_(inst_3038)){
var statearr_3447_3692 = state_3347__$1;
(statearr_3447_3692[(1)] = (17));

} else {
var statearr_3448_3693 = state_3347__$1;
(statearr_3448_3693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (48))){
var inst_3192 = (state_3347[(2)]);
var inst_3193 = [new cljs.core.Keyword(null,"from","from",(1815293044)),new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_3194 = [e2e.proposals.owner_acc,e2e.proposals.prop_acc,e2e.proposals.proposal_cost,"proposal"];
var inst_3195 = cljs.core.PersistentHashMap.fromArrays(inst_3193,inst_3194);
var inst_3196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3197 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3198 = [e2e.proposals.owner_acc,"active"];
var inst_3199 = cljs.core.PersistentHashMap.fromArrays(inst_3197,inst_3198);
var inst_3200 = [inst_3199];
var inst_3201 = (new cljs.core.PersistentVector(null,(1),(5),inst_3196,inst_3200,null));
var inst_3202 = eos_cljs.core.transact.call(null,e2e.proposals.token_acc,"transfer",inst_3195,inst_3201);
var inst_3203 = cljs.core.async.interop.p__GT_c.call(null,inst_3202);
var state_3347__$1 = (function (){var statearr_3449 = state_3347;
(statearr_3449[(24)] = inst_3192);

return statearr_3449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(54),inst_3203);
} else {
if((state_val_3348 === (80))){
var inst_3306 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3450 = state_3347;
(statearr_3450[(25)] = inst_3306);

return statearr_3450;
})();
var statearr_3451_3694 = state_3347__$1;
(statearr_3451_3694[(2)] = null);

(statearr_3451_3694[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (17))){
var inst_3033 = (state_3347[(23)]);
var inst_3040 = (function(){throw inst_3033})();
var state_3347__$1 = state_3347;
var statearr_3452_3695 = state_3347__$1;
(statearr_3452_3695[(2)] = inst_3040);

(statearr_3452_3695[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (49))){
var inst_3155 = (state_3347[(2)]);
var inst_3156 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3157 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3158 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_3157,inst_3155];
var inst_3159 = cljs.core.PersistentHashMap.fromArrays(inst_3156,inst_3158);
var inst_3160 = cljs.test.do_report.call(null,inst_3159);
var state_3347__$1 = state_3347;
var statearr_3453_3696 = state_3347__$1;
(statearr_3453_3696[(2)] = inst_3160);

(statearr_3453_3696[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (81))){
var inst_3306 = (state_3347[(25)]);
var inst_3320 = (state_3347[(26)]);
var inst_3321 = (state_3347[(27)]);
var _ = (function (){var statearr_3455 = state_3347;
(statearr_3455[(4)] = cljs.core.cons.call(null,(84),(state_3347[(4)])));

return statearr_3455;
})();
var inst_3318 = cljs.core.count.call(null,inst_3306);
var inst_3319 = (new cljs.core.List(null,(2),null,(1),null));
var inst_3320__$1 = (new cljs.core.List(null,inst_3318,inst_3319,(2),null));
var inst_3321__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_3320__$1);
var state_3347__$1 = (function (){var statearr_3456 = state_3347;
(statearr_3456[(26)] = inst_3320__$1);

(statearr_3456[(27)] = inst_3321__$1);

return statearr_3456;
})();
if(cljs.core.truth_(inst_3321__$1)){
var statearr_3457_3697 = state_3347__$1;
(statearr_3457_3697[(1)] = (85));

} else {
var statearr_3458_3698 = state_3347__$1;
(statearr_3458_3698[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (18))){
var inst_3033 = (state_3347[(23)]);
var state_3347__$1 = state_3347;
var statearr_3459_3699 = state_3347__$1;
(statearr_3459_3699[(2)] = inst_3033);

(statearr_3459_3699[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (50))){
var _ = (function (){var statearr_3460 = state_3347;
(statearr_3460[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3460;
})();
var state_3347__$1 = state_3347;
var ex3454 = (state_3347__$1[(2)]);
var statearr_3461_3700 = state_3347__$1;
(statearr_3461_3700[(5)] = ex3454);


var statearr_3462_3701 = state_3347__$1;
(statearr_3462_3701[(1)] = (49));

(statearr_3462_3701[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (82))){
var inst_3344 = (state_3347[(2)]);
var inst_3345 = done.call(null);
var state_3347__$1 = (function (){var statearr_3463 = state_3347;
(statearr_3463[(28)] = inst_3344);

return statearr_3463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3347__$1,inst_3345);
} else {
if((state_val_3348 === (19))){
var inst_3043 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3464 = state_3347;
(statearr_3464[(29)] = inst_3043);

return statearr_3464;
})();
var statearr_3465_3702 = state_3347__$1;
(statearr_3465_3702[(2)] = null);

(statearr_3465_3702[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (51))){
var inst_3168 = (state_3347[(21)]);
var inst_3171 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3172 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3173 = cljs.core.cons.call(null,cljs.core._EQ_,inst_3168);
var inst_3174 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_3172,inst_3173];
var inst_3175 = cljs.core.PersistentHashMap.fromArrays(inst_3171,inst_3174);
var inst_3176 = cljs.test.do_report.call(null,inst_3175);
var state_3347__$1 = state_3347;
var statearr_3466_3703 = state_3347__$1;
(statearr_3466_3703[(2)] = inst_3176);

(statearr_3466_3703[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (83))){
var inst_3307 = (state_3347[(2)]);
var inst_3308 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3309 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_3310 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_3309,inst_3307];
var inst_3311 = cljs.core.PersistentHashMap.fromArrays(inst_3308,inst_3310);
var inst_3312 = cljs.test.do_report.call(null,inst_3311);
var state_3347__$1 = state_3347;
var statearr_3467_3704 = state_3347__$1;
(statearr_3467_3704[(2)] = inst_3312);

(statearr_3467_3704[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (20))){
var _ = (function (){var statearr_3469 = state_3347;
(statearr_3469[(4)] = cljs.core.cons.call(null,(23),(state_3347[(4)])));

return statearr_3469;
})();
var inst_3055 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3056 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"need to be a dao member"];
var inst_3057 = cljs.core.PersistentHashMap.fromArrays(inst_3055,inst_3056);
var inst_3058 = cljs.test.do_report.call(null,inst_3057);
var ___$1 = (function (){var statearr_3470 = state_3347;
(statearr_3470[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3470;
})();
var state_3347__$1 = state_3347;
var statearr_3471_3705 = state_3347__$1;
(statearr_3471_3705[(2)] = inst_3058);

(statearr_3471_3705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (52))){
var inst_3168 = (state_3347[(21)]);
var inst_3178 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3179 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3180 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_3181 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_3182 = cljs.core.cons.call(null,inst_3181,inst_3168);
var inst_3183 = (new cljs.core.List(null,inst_3182,null,(1),null));
var inst_3184 = (new cljs.core.List(null,inst_3180,inst_3183,(2),null));
var inst_3185 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_3179,inst_3184];
var inst_3186 = cljs.core.PersistentHashMap.fromArrays(inst_3178,inst_3185);
var inst_3187 = cljs.test.do_report.call(null,inst_3186);
var state_3347__$1 = state_3347;
var statearr_3472_3706 = state_3347__$1;
(statearr_3472_3706[(2)] = inst_3187);

(statearr_3472_3706[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (84))){
var _ = (function (){var statearr_3473 = state_3347;
(statearr_3473[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3473;
})();
var state_3347__$1 = state_3347;
var ex3468 = (state_3347__$1[(2)]);
var statearr_3474_3707 = state_3347__$1;
(statearr_3474_3707[(5)] = ex3468);


var statearr_3475_3708 = state_3347__$1;
(statearr_3475_3708[(1)] = (83));

(statearr_3475_3708[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (21))){
var inst_3061 = (state_3347[(2)]);
var _ = (function (){var statearr_3476 = state_3347;
(statearr_3476[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3476;
})();
var state_3347__$1 = state_3347;
var statearr_3477_3709 = state_3347__$1;
(statearr_3477_3709[(2)] = inst_3061);

(statearr_3477_3709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (53))){
var inst_3169 = (state_3347[(22)]);
var inst_3189 = (state_3347[(2)]);
var _ = (function (){var statearr_3478 = state_3347;
(statearr_3478[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3478;
})();
var state_3347__$1 = (function (){var statearr_3479 = state_3347;
(statearr_3479[(30)] = inst_3189);

return statearr_3479;
})();
var statearr_3480_3710 = state_3347__$1;
(statearr_3480_3710[(2)] = inst_3169);

(statearr_3480_3710[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (85))){
var inst_3320 = (state_3347[(26)]);
var inst_3323 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3324 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_3325 = cljs.core.cons.call(null,cljs.core._EQ_,inst_3320);
var inst_3326 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_3324,inst_3325];
var inst_3327 = cljs.core.PersistentHashMap.fromArrays(inst_3323,inst_3326);
var inst_3328 = cljs.test.do_report.call(null,inst_3327);
var state_3347__$1 = state_3347;
var statearr_3481_3711 = state_3347__$1;
(statearr_3481_3711[(2)] = inst_3328);

(statearr_3481_3711[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (22))){
var inst_3044 = (state_3347[(2)]);
var inst_3045 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3046 = null;
var inst_3047 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"need to be a dao member",inst_3046,inst_3044];
var inst_3048 = cljs.core.PersistentHashMap.fromArrays(inst_3045,inst_3047);
var inst_3049 = cljs.test.do_report.call(null,inst_3048);
var state_3347__$1 = state_3347;
var statearr_3482_3712 = state_3347__$1;
(statearr_3482_3712[(2)] = inst_3049);

(statearr_3482_3712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (54))){
var inst_3205 = (state_3347[(31)]);
var inst_3205__$1 = (state_3347[(2)]);
var inst_3206 = (inst_3205__$1 instanceof cljs.core.ExceptionInfo);
var inst_3207 = cljs.core.ex_data.call(null,inst_3205__$1);
var inst_3208 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3207);
var inst_3209 = cljs.core._EQ_.call(null,inst_3208,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3210 = ((inst_3206) && (inst_3209));
var state_3347__$1 = (function (){var statearr_3484 = state_3347;
(statearr_3484[(31)] = inst_3205__$1);

return statearr_3484;
})();
if(cljs.core.truth_(inst_3210)){
var statearr_3485_3713 = state_3347__$1;
(statearr_3485_3713[(1)] = (55));

} else {
var statearr_3486_3714 = state_3347__$1;
(statearr_3486_3714[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (86))){
var inst_3320 = (state_3347[(26)]);
var inst_3330 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3331 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(2));
var inst_3332 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_3333 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_3334 = cljs.core.cons.call(null,inst_3333,inst_3320);
var inst_3335 = (new cljs.core.List(null,inst_3334,null,(1),null));
var inst_3336 = (new cljs.core.List(null,inst_3332,inst_3335,(2),null));
var inst_3337 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_3331,inst_3336];
var inst_3338 = cljs.core.PersistentHashMap.fromArrays(inst_3330,inst_3337);
var inst_3339 = cljs.test.do_report.call(null,inst_3338);
var state_3347__$1 = state_3347;
var statearr_3487_3715 = state_3347__$1;
(statearr_3487_3715[(2)] = inst_3339);

(statearr_3487_3715[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (23))){
var _ = (function (){var statearr_3488 = state_3347;
(statearr_3488[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3488;
})();
var state_3347__$1 = state_3347;
var ex3483 = (state_3347__$1[(2)]);
var statearr_3489_3716 = state_3347__$1;
(statearr_3489_3716[(5)] = ex3483);


var statearr_3490_3717 = state_3347__$1;
(statearr_3490_3717[(1)] = (22));

(statearr_3490_3717[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (55))){
var inst_3205 = (state_3347[(31)]);
var inst_3212 = (function(){throw inst_3205})();
var state_3347__$1 = state_3347;
var statearr_3491_3718 = state_3347__$1;
(statearr_3491_3718[(2)] = inst_3212);

(statearr_3491_3718[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (87))){
var inst_3321 = (state_3347[(27)]);
var inst_3341 = (state_3347[(2)]);
var _ = (function (){var statearr_3492 = state_3347;
(statearr_3492[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3492;
})();
var state_3347__$1 = (function (){var statearr_3493 = state_3347;
(statearr_3493[(32)] = inst_3341);

return statearr_3493;
})();
var statearr_3494_3719 = state_3347__$1;
(statearr_3494_3719[(2)] = inst_3321);

(statearr_3494_3719[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (24))){
var _ = (function (){var statearr_3495 = state_3347;
(statearr_3495[(4)] = cljs.core.cons.call(null,(31),(state_3347[(4)])));

return statearr_3495;
})();
var inst_3090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3091 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3092 = [e2e.proposals.owner_acc,"active"];
var inst_3093 = cljs.core.PersistentHashMap.fromArrays(inst_3091,inst_3092);
var inst_3094 = [inst_3093];
var inst_3095 = (new cljs.core.PersistentVector(null,(1),(5),inst_3090,inst_3094,null));
var inst_3096 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",e2e.proposals.base_prop,inst_3095);
var inst_3097 = cljs.core.async.interop.p__GT_c.call(null,inst_3096);
var state_3347__$1 = state_3347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(32),inst_3097);
} else {
if((state_val_3348 === (56))){
var inst_3205 = (state_3347[(31)]);
var state_3347__$1 = state_3347;
var statearr_3496_3720 = state_3347__$1;
(statearr_3496_3720[(2)] = inst_3205);

(statearr_3496_3720[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (25))){
var inst_3140 = (state_3347[(2)]);
var inst_3141 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_3142 = cljs.core.async.interop.p__GT_c.call(null,inst_3141);
var state_3347__$1 = (function (){var statearr_3497 = state_3347;
(statearr_3497[(33)] = inst_3140);

return statearr_3497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(43),inst_3142);
} else {
if((state_val_3348 === (57))){
var inst_3215 = (state_3347[(2)]);
var state_3347__$1 = (function (){var statearr_3498 = state_3347;
(statearr_3498[(34)] = inst_3215);

return statearr_3498;
})();
var statearr_3499_3721 = state_3347__$1;
(statearr_3499_3721[(2)] = null);

(statearr_3499_3721[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (26))){
var inst_3065 = (state_3347[(2)]);
var inst_3066 = cljs.core.prn.call(null,"test failed with ",inst_3065);
var state_3347__$1 = (function (){var statearr_3500 = state_3347;
(statearr_3500[(35)] = inst_3066);

return statearr_3500;
})();
var statearr_3501_3722 = state_3347__$1;
(statearr_3501_3722[(2)] = null);

(statearr_3501_3722[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (58))){
var _ = (function (){var statearr_3502 = state_3347;
(statearr_3502[(4)] = cljs.core.cons.call(null,(65),(state_3347[(4)])));

return statearr_3502;
})();
var inst_3241 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"content_hash","content_hash",(121497903)),"bb");
var inst_3242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3243 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3244 = [e2e.proposals.owner_acc,"active"];
var inst_3245 = cljs.core.PersistentHashMap.fromArrays(inst_3243,inst_3244);
var inst_3246 = [inst_3245];
var inst_3247 = (new cljs.core.PersistentVector(null,(1),(5),inst_3242,inst_3246,null));
var inst_3248 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"createprop",inst_3241,inst_3247);
var inst_3249 = cljs.core.async.interop.p__GT_c.call(null,inst_3248);
var state_3347__$1 = state_3347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(66),inst_3249);
} else {
if((state_val_3348 === (27))){
var _ = (function (){var statearr_3503 = state_3347;
(statearr_3503[(4)] = cljs.core.cons.call(null,(30),(state_3347[(4)])));

return statearr_3503;
})();
var inst_3078 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3079 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a proposal"];
var inst_3080 = cljs.core.PersistentHashMap.fromArrays(inst_3078,inst_3079);
var inst_3081 = cljs.test.do_report.call(null,inst_3080);
var ___$1 = (function (){var statearr_3504 = state_3347;
(statearr_3504[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3504;
})();
var state_3347__$1 = state_3347;
var statearr_3505_3723 = state_3347__$1;
(statearr_3505_3723[(2)] = inst_3081);

(statearr_3505_3723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (59))){
var inst_3292 = (state_3347[(2)]);
var inst_3293 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_3294 = cljs.core.async.interop.p__GT_c.call(null,inst_3293);
var state_3347__$1 = (function (){var statearr_3506 = state_3347;
(statearr_3506[(36)] = inst_3292);

return statearr_3506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3347__$1,(77),inst_3294);
} else {
if((state_val_3348 === (28))){
var inst_3084 = (state_3347[(2)]);
var state_3347__$1 = state_3347;
var statearr_3507_3724 = state_3347__$1;
(statearr_3507_3724[(2)] = inst_3084);

(statearr_3507_3724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (60))){
var inst_3216 = (state_3347[(2)]);
var inst_3217 = cljs.core.prn.call(null,"test failed with ",inst_3216);
var state_3347__$1 = (function (){var statearr_3508 = state_3347;
(statearr_3508[(37)] = inst_3217);

return statearr_3508;
})();
var statearr_3509_3725 = state_3347__$1;
(statearr_3509_3725[(2)] = null);

(statearr_3509_3725[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (29))){
var inst_3067 = (state_3347[(2)]);
var inst_3068 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3069 = null;
var inst_3070 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a proposal",inst_3069,inst_3067];
var inst_3071 = cljs.core.PersistentHashMap.fromArrays(inst_3068,inst_3070);
var inst_3072 = cljs.test.do_report.call(null,inst_3071);
var state_3347__$1 = state_3347;
var statearr_3511_3726 = state_3347__$1;
(statearr_3511_3726[(2)] = inst_3072);

(statearr_3511_3726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (61))){
var _ = (function (){var statearr_3512 = state_3347;
(statearr_3512[(4)] = cljs.core.cons.call(null,(64),(state_3347[(4)])));

return statearr_3512;
})();
var inst_3229 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3230 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can make a second proposal"];
var inst_3231 = cljs.core.PersistentHashMap.fromArrays(inst_3229,inst_3230);
var inst_3232 = cljs.test.do_report.call(null,inst_3231);
var ___$1 = (function (){var statearr_3513 = state_3347;
(statearr_3513[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3513;
})();
var state_3347__$1 = state_3347;
var statearr_3514_3727 = state_3347__$1;
(statearr_3514_3727[(2)] = inst_3232);

(statearr_3514_3727[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (30))){
var _ = (function (){var statearr_3516 = state_3347;
(statearr_3516[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3516;
})();
var state_3347__$1 = state_3347;
var ex3510 = (state_3347__$1[(2)]);
var statearr_3517_3728 = state_3347__$1;
(statearr_3517_3728[(5)] = ex3510);


var statearr_3518_3729 = state_3347__$1;
(statearr_3518_3729[(1)] = (29));

(statearr_3518_3729[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (62))){
var inst_3235 = (state_3347[(2)]);
var state_3347__$1 = state_3347;
var statearr_3519_3730 = state_3347__$1;
(statearr_3519_3730[(2)] = inst_3235);

(statearr_3519_3730[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (31))){
var _ = (function (){var statearr_3520 = state_3347;
(statearr_3520[(4)] = cljs.core.rest.call(null,(state_3347[(4)])));

return statearr_3520;
})();
var state_3347__$1 = state_3347;
var ex3515 = (state_3347__$1[(2)]);
var statearr_3521_3731 = state_3347__$1;
(statearr_3521_3731[(5)] = ex3515);


if((ex3515 instanceof Error)){
var statearr_3522_3732 = state_3347__$1;
(statearr_3522_3732[(1)] = (26));

(statearr_3522_3732[(5)] = null);

} else {
throw ex3515;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3348 === (63))){
var inst_3218 = (state_3347[(2)]);
var inst_3219 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3220 = null;
var inst_3221 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can make a second proposal",inst_3220,inst_3218];
var inst_3222 = cljs.core.PersistentHashMap.fromArrays(inst_3219,inst_3221);
var inst_3223 = cljs.test.do_report.call(null,inst_3222);
var state_3347__$1 = state_3347;
var statearr_3523_3733 = state_3347__$1;
(statearr_3523_3733[(2)] = inst_3223);

(statearr_3523_3733[(1)] = (62));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_3524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3524[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_3524[(1)] = (1));

return statearr_3524;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_3347){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3525){var ex__18__auto__ = e3525;
var statearr_3526_3734 = state_3347;
(statearr_3526_3734[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3347[(4)]))){
var statearr_3527_3735 = state_3347;
(statearr_3527_3735[(1)] = cljs.core.first.call(null,(state_3347[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3736 = state_3347;
state_3347 = G__3736;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_3347){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_3347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_3528 = f__20__auto__.call(null);
(statearr_3528[(6)] = c__19__auto__);

return statearr_3528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals2437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta2438","meta2438",(1605926378),null)], null);
});

e2e.proposals.t_e2e$proposals2437.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals2437.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals2437";

e2e.proposals.t_e2e$proposals2437.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals2437");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals2437.
 */
e2e.proposals.__GT_t_e2e$proposals2437 = (function e2e$proposals$__GT_t_e2e$proposals2437(meta2438){
return (new e2e.proposals.t_e2e$proposals2437(meta2438));
});

}

return (new e2e.proposals.t_e2e$proposals2437(null));
});

e2e.proposals.new_proposal.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.new_proposal;},new cljs.core.Symbol("e2e.proposals","new-proposal","e2e.proposals/new-proposal",(-713004459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"new-proposal","new-proposal",(-1057710210),null),"e2e/proposals.cljs",(22),(1),(113),(113),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.new_proposal)?e2e.proposals.new_proposal.cljs$lang$test:null)]));
e2e.proposals.update_proposal = (function e2e$proposals$update_proposal(){
return cljs.test.test_var.call(null,e2e.proposals.update_proposal.cljs$lang$var);
});
e2e.proposals.update_proposal.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals3737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals3737 = (function (meta3738){
this.meta3738 = meta3738;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals3737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3739,meta3738__$1){
var self__ = this;
var _3739__$1 = this;
return (new e2e.proposals.t_e2e$proposals3737(meta3738__$1));
});

e2e.proposals.t_e2e$proposals3737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3739){
var self__ = this;
var _3739__$1 = this;
return self__.meta3738;
});

e2e.proposals.t_e2e$proposals3737.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals3737.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_3897){
var state_val_3898 = (state_3897[(1)]);
if((state_val_3898 === (32))){
var inst_3863 = (state_3897[(2)]);
var state_3897__$1 = (function (){var statearr_3899 = state_3897;
(statearr_3899[(7)] = inst_3863);

return statearr_3899;
})();
var statearr_3900_4227 = state_3897__$1;
(statearr_3900_4227[(2)] = null);

(statearr_3900_4227[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (1))){
var state_3897__$1 = state_3897;
var statearr_3901_4228 = state_3897__$1;
(statearr_3901_4228[(2)] = null);

(statearr_3901_4228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (33))){
var _ = (function (){var statearr_3902 = state_3897;
(statearr_3902[(4)] = cljs.core.cons.call(null,(36),(state_3897[(4)])));

return statearr_3902;
})();
var state_3897__$1 = state_3897;
var statearr_3903_4229 = state_3897__$1;
(statearr_3903_4229[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (2))){
var _ = (function (){var statearr_3905 = state_3897;
(statearr_3905[(4)] = cljs.core.cons.call(null,(9),(state_3897[(4)])));

return statearr_3905;
})();
var inst_3766 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_3767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3768 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3769 = [e2e.proposals.owner_acc,"active"];
var inst_3770 = cljs.core.PersistentHashMap.fromArrays(inst_3768,inst_3769);
var inst_3771 = [inst_3770];
var inst_3772 = (new cljs.core.PersistentVector(null,(1),(5),inst_3767,inst_3771,null));
var inst_3773 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_3766,inst_3772);
var inst_3774 = cljs.core.async.interop.p__GT_c.call(null,inst_3773);
var state_3897__$1 = state_3897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3897__$1,(10),inst_3774);
} else {
if((state_val_3898 === (34))){
var inst_3891 = (state_3897[(2)]);
var _ = (function (){var statearr_3906 = state_3897;
(statearr_3906[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3906;
})();
var state_3897__$1 = state_3897;
var statearr_3907_4230 = state_3897__$1;
(statearr_3907_4230[(2)] = inst_3891);

(statearr_3907_4230[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (3))){
var inst_3817 = (state_3897[(2)]);
var state_3897__$1 = (function (){var statearr_3908 = state_3897;
(statearr_3908[(8)] = inst_3817);

return statearr_3908;
})();
var statearr_3909_4231 = state_3897__$1;
(statearr_3909_4231[(2)] = null);

(statearr_3909_4231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (35))){
var inst_3864 = (state_3897[(2)]);
var inst_3865 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3866 = true;
var inst_3867 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_3866,inst_3864];
var inst_3868 = cljs.core.PersistentHashMap.fromArrays(inst_3865,inst_3867);
var inst_3869 = cljs.test.do_report.call(null,inst_3868);
var state_3897__$1 = state_3897;
var statearr_3911_4232 = state_3897__$1;
(statearr_3911_4232[(2)] = inst_3869);

(statearr_3911_4232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (4))){
var inst_3741 = (state_3897[(2)]);
var inst_3742 = cljs.core.prn.call(null,"test failed with ",inst_3741);
var state_3897__$1 = (function (){var statearr_3912 = state_3897;
(statearr_3912[(9)] = inst_3742);

return statearr_3912;
})();
var statearr_3913_4233 = state_3897__$1;
(statearr_3913_4233[(2)] = null);

(statearr_3913_4233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (36))){
var _ = (function (){var statearr_3914 = state_3897;
(statearr_3914[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3914;
})();
var state_3897__$1 = state_3897;
var ex3910 = (state_3897__$1[(2)]);
var statearr_3915_4234 = state_3897__$1;
(statearr_3915_4234[(5)] = ex3910);


var statearr_3916_4235 = state_3897__$1;
(statearr_3916_4235[(1)] = (35));

(statearr_3916_4235[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (5))){
var _ = (function (){var statearr_3917 = state_3897;
(statearr_3917[(4)] = cljs.core.cons.call(null,(8),(state_3897[(4)])));

return statearr_3917;
})();
var inst_3754 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3755 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_3756 = cljs.core.PersistentHashMap.fromArrays(inst_3754,inst_3755);
var inst_3757 = cljs.test.do_report.call(null,inst_3756);
var ___$1 = (function (){var statearr_3918 = state_3897;
(statearr_3918[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3918;
})();
var state_3897__$1 = state_3897;
var statearr_3919_4236 = state_3897__$1;
(statearr_3919_4236[(2)] = inst_3757);

(statearr_3919_4236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (37))){
var inst_3876 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3877 = true;
var inst_3878 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_3877,true];
var inst_3879 = cljs.core.PersistentHashMap.fromArrays(inst_3876,inst_3878);
var inst_3880 = cljs.test.do_report.call(null,inst_3879);
var state_3897__$1 = state_3897;
var statearr_3920_4237 = state_3897__$1;
(statearr_3920_4237[(2)] = inst_3880);

(statearr_3920_4237[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (6))){
var inst_3760 = (state_3897[(2)]);
var state_3897__$1 = state_3897;
var statearr_3921_4238 = state_3897__$1;
(statearr_3921_4238[(2)] = inst_3760);

(statearr_3921_4238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (38))){
var inst_3882 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3883 = true;
var inst_3884 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_3883,true];
var inst_3885 = cljs.core.PersistentHashMap.fromArrays(inst_3882,inst_3884);
var inst_3886 = cljs.test.do_report.call(null,inst_3885);
var state_3897__$1 = state_3897;
var statearr_3922_4239 = state_3897__$1;
(statearr_3922_4239[(2)] = inst_3886);

(statearr_3922_4239[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (7))){
var inst_3743 = (state_3897[(2)]);
var inst_3744 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3745 = null;
var inst_3746 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_3745,inst_3743];
var inst_3747 = cljs.core.PersistentHashMap.fromArrays(inst_3744,inst_3746);
var inst_3748 = cljs.test.do_report.call(null,inst_3747);
var state_3897__$1 = state_3897;
var statearr_3924_4240 = state_3897__$1;
(statearr_3924_4240[(2)] = inst_3748);

(statearr_3924_4240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (39))){
var inst_3888 = (state_3897[(2)]);
var _ = (function (){var statearr_3926 = state_3897;
(statearr_3926[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3926;
})();
var state_3897__$1 = (function (){var statearr_3927 = state_3897;
(statearr_3927[(10)] = inst_3888);

return statearr_3927;
})();
var statearr_3928_4241 = state_3897__$1;
(statearr_3928_4241[(2)] = true);

(statearr_3928_4241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (8))){
var _ = (function (){var statearr_3929 = state_3897;
(statearr_3929[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3929;
})();
var state_3897__$1 = state_3897;
var ex3923 = (state_3897__$1[(2)]);
var statearr_3930_4242 = state_3897__$1;
(statearr_3930_4242[(5)] = ex3923);


var statearr_3931_4243 = state_3897__$1;
(statearr_3931_4243[(1)] = (7));

(statearr_3931_4243[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (9))){
var _ = (function (){var statearr_3932 = state_3897;
(statearr_3932[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3932;
})();
var state_3897__$1 = state_3897;
var ex3925 = (state_3897__$1[(2)]);
var statearr_3933_4244 = state_3897__$1;
(statearr_3933_4244[(5)] = ex3925);


if((ex3925 instanceof Error)){
var statearr_3934_4245 = state_3897__$1;
(statearr_3934_4245[(1)] = (4));

(statearr_3934_4245[(5)] = null);

} else {
throw ex3925;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (10))){
var inst_3776 = (state_3897[(11)]);
var inst_3776__$1 = (state_3897[(2)]);
var inst_3777 = (inst_3776__$1 instanceof cljs.core.ExceptionInfo);
var inst_3778 = cljs.core.ex_data.call(null,inst_3776__$1);
var inst_3779 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3778);
var inst_3780 = cljs.core._EQ_.call(null,inst_3779,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3781 = ((inst_3777) && (inst_3780));
var state_3897__$1 = (function (){var statearr_3935 = state_3897;
(statearr_3935[(11)] = inst_3776__$1);

return statearr_3935;
})();
if(cljs.core.truth_(inst_3781)){
var statearr_3936_4246 = state_3897__$1;
(statearr_3936_4246[(1)] = (11));

} else {
var statearr_3937_4247 = state_3897__$1;
(statearr_3937_4247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (11))){
var inst_3776 = (state_3897[(11)]);
var inst_3783 = (function(){throw inst_3776})();
var state_3897__$1 = state_3897;
var statearr_3938_4248 = state_3897__$1;
(statearr_3938_4248[(2)] = inst_3783);

(statearr_3938_4248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (12))){
var inst_3776 = (state_3897[(11)]);
var state_3897__$1 = state_3897;
var statearr_3939_4249 = state_3897__$1;
(statearr_3939_4249[(2)] = inst_3776);

(statearr_3939_4249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (13))){
var inst_3786 = (state_3897[(2)]);
var state_3897__$1 = (function (){var statearr_3940 = state_3897;
(statearr_3940[(12)] = inst_3786);

return statearr_3940;
})();
var statearr_3941_4250 = state_3897__$1;
(statearr_3941_4250[(2)] = null);

(statearr_3941_4250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (14))){
var _ = (function (){var statearr_3942 = state_3897;
(statearr_3942[(4)] = cljs.core.cons.call(null,(17),(state_3897[(4)])));

return statearr_3942;
})();
var state_3897__$1 = state_3897;
var statearr_3943_4251 = state_3897__$1;
(statearr_3943_4251[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (15))){
var inst_3814 = (state_3897[(2)]);
var _ = (function (){var statearr_3946 = state_3897;
(statearr_3946[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3946;
})();
var state_3897__$1 = state_3897;
var statearr_3947_4252 = state_3897__$1;
(statearr_3947_4252[(2)] = inst_3814);

(statearr_3947_4252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (16))){
var inst_3787 = (state_3897[(2)]);
var inst_3788 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3789 = true;
var inst_3790 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_3789,inst_3787];
var inst_3791 = cljs.core.PersistentHashMap.fromArrays(inst_3788,inst_3790);
var inst_3792 = cljs.test.do_report.call(null,inst_3791);
var state_3897__$1 = state_3897;
var statearr_3948_4253 = state_3897__$1;
(statearr_3948_4253[(2)] = inst_3792);

(statearr_3948_4253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (17))){
var _ = (function (){var statearr_3949 = state_3897;
(statearr_3949[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3949;
})();
var state_3897__$1 = state_3897;
var ex3945 = (state_3897__$1[(2)]);
var statearr_3950_4254 = state_3897__$1;
(statearr_3950_4254[(5)] = ex3945);


var statearr_3951_4255 = state_3897__$1;
(statearr_3951_4255[(1)] = (16));

(statearr_3951_4255[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (18))){
var inst_3799 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3800 = true;
var inst_3801 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_3800,true];
var inst_3802 = cljs.core.PersistentHashMap.fromArrays(inst_3799,inst_3801);
var inst_3803 = cljs.test.do_report.call(null,inst_3802);
var state_3897__$1 = state_3897;
var statearr_3952_4256 = state_3897__$1;
(statearr_3952_4256[(2)] = inst_3803);

(statearr_3952_4256[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (19))){
var inst_3805 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3806 = true;
var inst_3807 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_3806,true];
var inst_3808 = cljs.core.PersistentHashMap.fromArrays(inst_3805,inst_3807);
var inst_3809 = cljs.test.do_report.call(null,inst_3808);
var state_3897__$1 = state_3897;
var statearr_3953_4257 = state_3897__$1;
(statearr_3953_4257[(2)] = inst_3809);

(statearr_3953_4257[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (20))){
var inst_3811 = (state_3897[(2)]);
var _ = (function (){var statearr_3954 = state_3897;
(statearr_3954[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3954;
})();
var state_3897__$1 = (function (){var statearr_3955 = state_3897;
(statearr_3955[(13)] = inst_3811);

return statearr_3955;
})();
var statearr_3956_4258 = state_3897__$1;
(statearr_3956_4258[(2)] = true);

(statearr_3956_4258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (21))){
var _ = (function (){var statearr_3957 = state_3897;
(statearr_3957[(4)] = cljs.core.cons.call(null,(28),(state_3897[(4)])));

return statearr_3957;
})();
var inst_3843 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(1),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_3844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3845 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3846 = [e2e.proposals.owner_acc,"active"];
var inst_3847 = cljs.core.PersistentHashMap.fromArrays(inst_3845,inst_3846);
var inst_3848 = [inst_3847];
var inst_3849 = (new cljs.core.PersistentVector(null,(1),(5),inst_3844,inst_3848,null));
var inst_3850 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_3843,inst_3849);
var inst_3851 = cljs.core.async.interop.p__GT_c.call(null,inst_3850);
var state_3897__$1 = state_3897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3897__$1,(29),inst_3851);
} else {
if((state_val_3898 === (22))){
var inst_3894 = (state_3897[(2)]);
var inst_3895 = done.call(null);
var state_3897__$1 = (function (){var statearr_3958 = state_3897;
(statearr_3958[(14)] = inst_3894);

return statearr_3958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3897__$1,inst_3895);
} else {
if((state_val_3898 === (23))){
var inst_3818 = (state_3897[(2)]);
var inst_3819 = cljs.core.prn.call(null,"test failed with ",inst_3818);
var state_3897__$1 = (function (){var statearr_3959 = state_3897;
(statearr_3959[(15)] = inst_3819);

return statearr_3959;
})();
var statearr_3960_4259 = state_3897__$1;
(statearr_3960_4259[(2)] = null);

(statearr_3960_4259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (24))){
var _ = (function (){var statearr_3961 = state_3897;
(statearr_3961[(4)] = cljs.core.cons.call(null,(27),(state_3897[(4)])));

return statearr_3961;
})();
var inst_3831 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3832 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_3833 = cljs.core.PersistentHashMap.fromArrays(inst_3831,inst_3832);
var inst_3834 = cljs.test.do_report.call(null,inst_3833);
var ___$1 = (function (){var statearr_3962 = state_3897;
(statearr_3962[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3962;
})();
var state_3897__$1 = state_3897;
var statearr_3963_4260 = state_3897__$1;
(statearr_3963_4260[(2)] = inst_3834);

(statearr_3963_4260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (25))){
var inst_3837 = (state_3897[(2)]);
var state_3897__$1 = state_3897;
var statearr_3965_4261 = state_3897__$1;
(statearr_3965_4261[(2)] = inst_3837);

(statearr_3965_4261[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (26))){
var inst_3820 = (state_3897[(2)]);
var inst_3821 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3822 = null;
var inst_3823 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_3822,inst_3820];
var inst_3824 = cljs.core.PersistentHashMap.fromArrays(inst_3821,inst_3823);
var inst_3825 = cljs.test.do_report.call(null,inst_3824);
var state_3897__$1 = state_3897;
var statearr_3967_4262 = state_3897__$1;
(statearr_3967_4262[(2)] = inst_3825);

(statearr_3967_4262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (27))){
var _ = (function (){var statearr_3968 = state_3897;
(statearr_3968[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3968;
})();
var state_3897__$1 = state_3897;
var ex3964 = (state_3897__$1[(2)]);
var statearr_3969_4263 = state_3897__$1;
(statearr_3969_4263[(5)] = ex3964);


var statearr_3970_4264 = state_3897__$1;
(statearr_3970_4264[(1)] = (26));

(statearr_3970_4264[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (28))){
var _ = (function (){var statearr_3971 = state_3897;
(statearr_3971[(4)] = cljs.core.rest.call(null,(state_3897[(4)])));

return statearr_3971;
})();
var state_3897__$1 = state_3897;
var ex3966 = (state_3897__$1[(2)]);
var statearr_3972_4265 = state_3897__$1;
(statearr_3972_4265[(5)] = ex3966);


if((ex3966 instanceof Error)){
var statearr_3973_4266 = state_3897__$1;
(statearr_3973_4266[(1)] = (23));

(statearr_3973_4266[(5)] = null);

} else {
throw ex3966;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (29))){
var inst_3853 = (state_3897[(16)]);
var inst_3853__$1 = (state_3897[(2)]);
var inst_3854 = (inst_3853__$1 instanceof cljs.core.ExceptionInfo);
var inst_3855 = cljs.core.ex_data.call(null,inst_3853__$1);
var inst_3856 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3855);
var inst_3857 = cljs.core._EQ_.call(null,inst_3856,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3858 = ((inst_3854) && (inst_3857));
var state_3897__$1 = (function (){var statearr_3974 = state_3897;
(statearr_3974[(16)] = inst_3853__$1);

return statearr_3974;
})();
if(cljs.core.truth_(inst_3858)){
var statearr_3975_4267 = state_3897__$1;
(statearr_3975_4267[(1)] = (30));

} else {
var statearr_3976_4268 = state_3897__$1;
(statearr_3976_4268[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (30))){
var inst_3853 = (state_3897[(16)]);
var inst_3860 = (function(){throw inst_3853})();
var state_3897__$1 = state_3897;
var statearr_3977_4269 = state_3897__$1;
(statearr_3977_4269[(2)] = inst_3860);

(statearr_3977_4269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3898 === (31))){
var inst_3853 = (state_3897[(16)]);
var state_3897__$1 = state_3897;
var statearr_3978_4270 = state_3897__$1;
(statearr_3978_4270[(2)] = inst_3853);

(statearr_3978_4270[(1)] = (32));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_3979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3979[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_3979[(1)] = (1));

return statearr_3979;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_3897){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3980){var ex__18__auto__ = e3980;
var statearr_3981_4271 = state_3897;
(statearr_3981_4271[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3897[(4)]))){
var statearr_3982_4272 = state_3897;
(statearr_3982_4272[(1)] = cljs.core.first.call(null,(state_3897[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4273 = state_3897;
state_3897 = G__4273;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_3897){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_3897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_3983 = f__20__auto__.call(null);
(statearr_3983[(6)] = c__19__auto__);

return statearr_3983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals3737.prototype.apply = (function (self__,args3740){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3740)));
});

e2e.proposals.t_e2e$proposals3737.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_4140){
var state_val_4141 = (state_4140[(1)]);
if((state_val_4141 === (32))){
var inst_4106 = (state_4140[(2)]);
var state_4140__$1 = (function (){var statearr_4142 = state_4140;
(statearr_4142[(7)] = inst_4106);

return statearr_4142;
})();
var statearr_4143_4274 = state_4140__$1;
(statearr_4143_4274[(2)] = null);

(statearr_4143_4274[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (1))){
var state_4140__$1 = state_4140;
var statearr_4144_4275 = state_4140__$1;
(statearr_4144_4275[(2)] = null);

(statearr_4144_4275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (33))){
var _ = (function (){var statearr_4145 = state_4140;
(statearr_4145[(4)] = cljs.core.cons.call(null,(36),(state_4140[(4)])));

return statearr_4145;
})();
var state_4140__$1 = state_4140;
var statearr_4146_4276 = state_4140__$1;
(statearr_4146_4276[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (2))){
var _ = (function (){var statearr_4148 = state_4140;
(statearr_4148[(4)] = cljs.core.cons.call(null,(9),(state_4140[(4)])));

return statearr_4148;
})();
var inst_4009 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(0),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_4010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4011 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_4012 = [e2e.proposals.owner_acc,"active"];
var inst_4013 = cljs.core.PersistentHashMap.fromArrays(inst_4011,inst_4012);
var inst_4014 = [inst_4013];
var inst_4015 = (new cljs.core.PersistentVector(null,(1),(5),inst_4010,inst_4014,null));
var inst_4016 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_4009,inst_4015);
var inst_4017 = cljs.core.async.interop.p__GT_c.call(null,inst_4016);
var state_4140__$1 = state_4140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4140__$1,(10),inst_4017);
} else {
if((state_val_4141 === (34))){
var inst_4134 = (state_4140[(2)]);
var _ = (function (){var statearr_4149 = state_4140;
(statearr_4149[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4149;
})();
var state_4140__$1 = state_4140;
var statearr_4150_4277 = state_4140__$1;
(statearr_4150_4277[(2)] = inst_4134);

(statearr_4150_4277[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (3))){
var inst_4060 = (state_4140[(2)]);
var state_4140__$1 = (function (){var statearr_4151 = state_4140;
(statearr_4151[(8)] = inst_4060);

return statearr_4151;
})();
var statearr_4152_4278 = state_4140__$1;
(statearr_4152_4278[(2)] = null);

(statearr_4152_4278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (35))){
var inst_4107 = (state_4140[(2)]);
var inst_4108 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4109 = true;
var inst_4110 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_4109,inst_4107];
var inst_4111 = cljs.core.PersistentHashMap.fromArrays(inst_4108,inst_4110);
var inst_4112 = cljs.test.do_report.call(null,inst_4111);
var state_4140__$1 = state_4140;
var statearr_4154_4279 = state_4140__$1;
(statearr_4154_4279[(2)] = inst_4112);

(statearr_4154_4279[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (4))){
var inst_3984 = (state_4140[(2)]);
var inst_3985 = cljs.core.prn.call(null,"test failed with ",inst_3984);
var state_4140__$1 = (function (){var statearr_4155 = state_4140;
(statearr_4155[(9)] = inst_3985);

return statearr_4155;
})();
var statearr_4156_4280 = state_4140__$1;
(statearr_4156_4280[(2)] = null);

(statearr_4156_4280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (36))){
var _ = (function (){var statearr_4157 = state_4140;
(statearr_4157[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4157;
})();
var state_4140__$1 = state_4140;
var ex4153 = (state_4140__$1[(2)]);
var statearr_4158_4281 = state_4140__$1;
(statearr_4158_4281[(5)] = ex4153);


var statearr_4159_4282 = state_4140__$1;
(statearr_4159_4282[(1)] = (35));

(statearr_4159_4282[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (5))){
var _ = (function (){var statearr_4160 = state_4140;
(statearr_4160[(4)] = cljs.core.cons.call(null,(8),(state_4140[(4)])));

return statearr_4160;
})();
var inst_3997 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3998 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_3999 = cljs.core.PersistentHashMap.fromArrays(inst_3997,inst_3998);
var inst_4000 = cljs.test.do_report.call(null,inst_3999);
var ___$1 = (function (){var statearr_4161 = state_4140;
(statearr_4161[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4161;
})();
var state_4140__$1 = state_4140;
var statearr_4162_4283 = state_4140__$1;
(statearr_4162_4283[(2)] = inst_4000);

(statearr_4162_4283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (37))){
var inst_4119 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4120 = true;
var inst_4121 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_4120,true];
var inst_4122 = cljs.core.PersistentHashMap.fromArrays(inst_4119,inst_4121);
var inst_4123 = cljs.test.do_report.call(null,inst_4122);
var state_4140__$1 = state_4140;
var statearr_4163_4284 = state_4140__$1;
(statearr_4163_4284[(2)] = inst_4123);

(statearr_4163_4284[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (6))){
var inst_4003 = (state_4140[(2)]);
var state_4140__$1 = state_4140;
var statearr_4164_4285 = state_4140__$1;
(statearr_4164_4285[(2)] = inst_4003);

(statearr_4164_4285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (38))){
var inst_4125 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4126 = true;
var inst_4127 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_4126,true];
var inst_4128 = cljs.core.PersistentHashMap.fromArrays(inst_4125,inst_4127);
var inst_4129 = cljs.test.do_report.call(null,inst_4128);
var state_4140__$1 = state_4140;
var statearr_4165_4286 = state_4140__$1;
(statearr_4165_4286[(2)] = inst_4129);

(statearr_4165_4286[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (7))){
var inst_3986 = (state_4140[(2)]);
var inst_3987 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3988 = null;
var inst_3989 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_3988,inst_3986];
var inst_3990 = cljs.core.PersistentHashMap.fromArrays(inst_3987,inst_3989);
var inst_3991 = cljs.test.do_report.call(null,inst_3990);
var state_4140__$1 = state_4140;
var statearr_4167_4287 = state_4140__$1;
(statearr_4167_4287[(2)] = inst_3991);

(statearr_4167_4287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (39))){
var inst_4131 = (state_4140[(2)]);
var _ = (function (){var statearr_4169 = state_4140;
(statearr_4169[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4169;
})();
var state_4140__$1 = (function (){var statearr_4170 = state_4140;
(statearr_4170[(10)] = inst_4131);

return statearr_4170;
})();
var statearr_4171_4288 = state_4140__$1;
(statearr_4171_4288[(2)] = true);

(statearr_4171_4288[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (8))){
var _ = (function (){var statearr_4172 = state_4140;
(statearr_4172[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4172;
})();
var state_4140__$1 = state_4140;
var ex4166 = (state_4140__$1[(2)]);
var statearr_4173_4289 = state_4140__$1;
(statearr_4173_4289[(5)] = ex4166);


var statearr_4174_4290 = state_4140__$1;
(statearr_4174_4290[(1)] = (7));

(statearr_4174_4290[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (9))){
var _ = (function (){var statearr_4175 = state_4140;
(statearr_4175[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4175;
})();
var state_4140__$1 = state_4140;
var ex4168 = (state_4140__$1[(2)]);
var statearr_4176_4291 = state_4140__$1;
(statearr_4176_4291[(5)] = ex4168);


if((ex4168 instanceof Error)){
var statearr_4177_4292 = state_4140__$1;
(statearr_4177_4292[(1)] = (4));

(statearr_4177_4292[(5)] = null);

} else {
throw ex4168;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (10))){
var inst_4019 = (state_4140[(11)]);
var inst_4019__$1 = (state_4140[(2)]);
var inst_4020 = (inst_4019__$1 instanceof cljs.core.ExceptionInfo);
var inst_4021 = cljs.core.ex_data.call(null,inst_4019__$1);
var inst_4022 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4021);
var inst_4023 = cljs.core._EQ_.call(null,inst_4022,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4024 = ((inst_4020) && (inst_4023));
var state_4140__$1 = (function (){var statearr_4178 = state_4140;
(statearr_4178[(11)] = inst_4019__$1);

return statearr_4178;
})();
if(cljs.core.truth_(inst_4024)){
var statearr_4179_4293 = state_4140__$1;
(statearr_4179_4293[(1)] = (11));

} else {
var statearr_4180_4294 = state_4140__$1;
(statearr_4180_4294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (11))){
var inst_4019 = (state_4140[(11)]);
var inst_4026 = (function(){throw inst_4019})();
var state_4140__$1 = state_4140;
var statearr_4181_4295 = state_4140__$1;
(statearr_4181_4295[(2)] = inst_4026);

(statearr_4181_4295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (12))){
var inst_4019 = (state_4140[(11)]);
var state_4140__$1 = state_4140;
var statearr_4182_4296 = state_4140__$1;
(statearr_4182_4296[(2)] = inst_4019);

(statearr_4182_4296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (13))){
var inst_4029 = (state_4140[(2)]);
var state_4140__$1 = (function (){var statearr_4183 = state_4140;
(statearr_4183[(12)] = inst_4029);

return statearr_4183;
})();
var statearr_4184_4297 = state_4140__$1;
(statearr_4184_4297[(2)] = null);

(statearr_4184_4297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (14))){
var _ = (function (){var statearr_4185 = state_4140;
(statearr_4185[(4)] = cljs.core.cons.call(null,(17),(state_4140[(4)])));

return statearr_4185;
})();
var state_4140__$1 = state_4140;
var statearr_4186_4298 = state_4140__$1;
(statearr_4186_4298[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (15))){
var inst_4057 = (state_4140[(2)]);
var _ = (function (){var statearr_4189 = state_4140;
(statearr_4189[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4189;
})();
var state_4140__$1 = state_4140;
var statearr_4190_4299 = state_4140__$1;
(statearr_4190_4299[(2)] = inst_4057);

(statearr_4190_4299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (16))){
var inst_4030 = (state_4140[(2)]);
var inst_4031 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4032 = true;
var inst_4033 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_4032,inst_4030];
var inst_4034 = cljs.core.PersistentHashMap.fromArrays(inst_4031,inst_4033);
var inst_4035 = cljs.test.do_report.call(null,inst_4034);
var state_4140__$1 = state_4140;
var statearr_4191_4300 = state_4140__$1;
(statearr_4191_4300[(2)] = inst_4035);

(statearr_4191_4300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (17))){
var _ = (function (){var statearr_4192 = state_4140;
(statearr_4192[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4192;
})();
var state_4140__$1 = state_4140;
var ex4188 = (state_4140__$1[(2)]);
var statearr_4193_4301 = state_4140__$1;
(statearr_4193_4301[(5)] = ex4188);


var statearr_4194_4302 = state_4140__$1;
(statearr_4194_4302[(1)] = (16));

(statearr_4194_4302[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (18))){
var inst_4042 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4043 = true;
var inst_4044 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update proposal",inst_4043,true];
var inst_4045 = cljs.core.PersistentHashMap.fromArrays(inst_4042,inst_4044);
var inst_4046 = cljs.test.do_report.call(null,inst_4045);
var state_4140__$1 = state_4140;
var statearr_4195_4303 = state_4140__$1;
(statearr_4195_4303[(2)] = inst_4046);

(statearr_4195_4303[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (19))){
var inst_4048 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4049 = true;
var inst_4050 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal",inst_4049,true];
var inst_4051 = cljs.core.PersistentHashMap.fromArrays(inst_4048,inst_4050);
var inst_4052 = cljs.test.do_report.call(null,inst_4051);
var state_4140__$1 = state_4140;
var statearr_4196_4304 = state_4140__$1;
(statearr_4196_4304[(2)] = inst_4052);

(statearr_4196_4304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (20))){
var inst_4054 = (state_4140[(2)]);
var _ = (function (){var statearr_4197 = state_4140;
(statearr_4197[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4197;
})();
var state_4140__$1 = (function (){var statearr_4198 = state_4140;
(statearr_4198[(13)] = inst_4054);

return statearr_4198;
})();
var statearr_4199_4305 = state_4140__$1;
(statearr_4199_4305[(2)] = true);

(statearr_4199_4305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (21))){
var _ = (function (){var statearr_4200 = state_4140;
(statearr_4200[(4)] = cljs.core.cons.call(null,(28),(state_4140[(4)])));

return statearr_4200;
})();
var inst_4086 = cljs.core.assoc.call(null,e2e.proposals.base_prop,new cljs.core.Keyword(null,"id","id",(-1388402092)),(1),new cljs.core.Keyword(null,"cycle","cycle",(710365284)),(2));
var inst_4087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4088 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_4089 = [e2e.proposals.owner_acc,"active"];
var inst_4090 = cljs.core.PersistentHashMap.fromArrays(inst_4088,inst_4089);
var inst_4091 = [inst_4090];
var inst_4092 = (new cljs.core.PersistentVector(null,(1),(5),inst_4087,inst_4091,null));
var inst_4093 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updateprop",inst_4086,inst_4092);
var inst_4094 = cljs.core.async.interop.p__GT_c.call(null,inst_4093);
var state_4140__$1 = state_4140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4140__$1,(29),inst_4094);
} else {
if((state_val_4141 === (22))){
var inst_4137 = (state_4140[(2)]);
var inst_4138 = done.call(null);
var state_4140__$1 = (function (){var statearr_4201 = state_4140;
(statearr_4201[(14)] = inst_4137);

return statearr_4201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4140__$1,inst_4138);
} else {
if((state_val_4141 === (23))){
var inst_4061 = (state_4140[(2)]);
var inst_4062 = cljs.core.prn.call(null,"test failed with ",inst_4061);
var state_4140__$1 = (function (){var statearr_4202 = state_4140;
(statearr_4202[(15)] = inst_4062);

return statearr_4202;
})();
var statearr_4203_4306 = state_4140__$1;
(statearr_4203_4306[(2)] = null);

(statearr_4203_4306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (24))){
var _ = (function (){var statearr_4204 = state_4140;
(statearr_4204[(4)] = cljs.core.cons.call(null,(27),(state_4140[(4)])));

return statearr_4204;
})();
var inst_4074 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4075 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update proposal"];
var inst_4076 = cljs.core.PersistentHashMap.fromArrays(inst_4074,inst_4075);
var inst_4077 = cljs.test.do_report.call(null,inst_4076);
var ___$1 = (function (){var statearr_4205 = state_4140;
(statearr_4205[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4205;
})();
var state_4140__$1 = state_4140;
var statearr_4206_4307 = state_4140__$1;
(statearr_4206_4307[(2)] = inst_4077);

(statearr_4206_4307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (25))){
var inst_4080 = (state_4140[(2)]);
var state_4140__$1 = state_4140;
var statearr_4208_4308 = state_4140__$1;
(statearr_4208_4308[(2)] = inst_4080);

(statearr_4208_4308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (26))){
var inst_4063 = (state_4140[(2)]);
var inst_4064 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4065 = null;
var inst_4066 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update proposal",inst_4065,inst_4063];
var inst_4067 = cljs.core.PersistentHashMap.fromArrays(inst_4064,inst_4066);
var inst_4068 = cljs.test.do_report.call(null,inst_4067);
var state_4140__$1 = state_4140;
var statearr_4210_4309 = state_4140__$1;
(statearr_4210_4309[(2)] = inst_4068);

(statearr_4210_4309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (27))){
var _ = (function (){var statearr_4211 = state_4140;
(statearr_4211[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4211;
})();
var state_4140__$1 = state_4140;
var ex4207 = (state_4140__$1[(2)]);
var statearr_4212_4310 = state_4140__$1;
(statearr_4212_4310[(5)] = ex4207);


var statearr_4213_4311 = state_4140__$1;
(statearr_4213_4311[(1)] = (26));

(statearr_4213_4311[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (28))){
var _ = (function (){var statearr_4214 = state_4140;
(statearr_4214[(4)] = cljs.core.rest.call(null,(state_4140[(4)])));

return statearr_4214;
})();
var state_4140__$1 = state_4140;
var ex4209 = (state_4140__$1[(2)]);
var statearr_4215_4312 = state_4140__$1;
(statearr_4215_4312[(5)] = ex4209);


if((ex4209 instanceof Error)){
var statearr_4216_4313 = state_4140__$1;
(statearr_4216_4313[(1)] = (23));

(statearr_4216_4313[(5)] = null);

} else {
throw ex4209;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (29))){
var inst_4096 = (state_4140[(16)]);
var inst_4096__$1 = (state_4140[(2)]);
var inst_4097 = (inst_4096__$1 instanceof cljs.core.ExceptionInfo);
var inst_4098 = cljs.core.ex_data.call(null,inst_4096__$1);
var inst_4099 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4098);
var inst_4100 = cljs.core._EQ_.call(null,inst_4099,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4101 = ((inst_4097) && (inst_4100));
var state_4140__$1 = (function (){var statearr_4217 = state_4140;
(statearr_4217[(16)] = inst_4096__$1);

return statearr_4217;
})();
if(cljs.core.truth_(inst_4101)){
var statearr_4218_4314 = state_4140__$1;
(statearr_4218_4314[(1)] = (30));

} else {
var statearr_4219_4315 = state_4140__$1;
(statearr_4219_4315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (30))){
var inst_4096 = (state_4140[(16)]);
var inst_4103 = (function(){throw inst_4096})();
var state_4140__$1 = state_4140;
var statearr_4220_4316 = state_4140__$1;
(statearr_4220_4316[(2)] = inst_4103);

(statearr_4220_4316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4141 === (31))){
var inst_4096 = (state_4140[(16)]);
var state_4140__$1 = state_4140;
var statearr_4221_4317 = state_4140__$1;
(statearr_4221_4317[(2)] = inst_4096);

(statearr_4221_4317[(1)] = (32));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_4222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4222[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_4222[(1)] = (1));

return statearr_4222;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_4140){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_4140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e4223){var ex__18__auto__ = e4223;
var statearr_4224_4318 = state_4140;
(statearr_4224_4318[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_4140[(4)]))){
var statearr_4225_4319 = state_4140;
(statearr_4225_4319[(1)] = cljs.core.first.call(null,(state_4140[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4320 = state_4140;
state_4140 = G__4320;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_4140){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_4140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_4226 = f__20__auto__.call(null);
(statearr_4226[(6)] = c__19__auto__);

return statearr_4226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals3737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3738","meta3738",(-1132106950),null)], null);
});

e2e.proposals.t_e2e$proposals3737.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals3737.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals3737";

e2e.proposals.t_e2e$proposals3737.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals3737");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals3737.
 */
e2e.proposals.__GT_t_e2e$proposals3737 = (function e2e$proposals$__GT_t_e2e$proposals3737(meta3738){
return (new e2e.proposals.t_e2e$proposals3737(meta3738));
});

}

return (new e2e.proposals.t_e2e$proposals3737(null));
});

e2e.proposals.update_proposal.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.update_proposal;},new cljs.core.Symbol("e2e.proposals","update-proposal","e2e.proposals/update-proposal",(-1251182518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"update-proposal","update-proposal",(-1609555119),null),"e2e/proposals.cljs",(25),(1),(142),(142),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.update_proposal)?e2e.proposals.update_proposal.cljs$lang$test:null)]));
e2e.proposals.cycle_add = (function e2e$proposals$cycle_add(){
return cljs.test.test_var.call(null,e2e.proposals.cycle_add.cljs$lang$var);
});
e2e.proposals.cycle_add.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals4321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals4321 = (function (meta4322){
this.meta4322 = meta4322;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals4321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4323,meta4322__$1){
var self__ = this;
var _4323__$1 = this;
return (new e2e.proposals.t_e2e$proposals4321(meta4322__$1));
});

e2e.proposals.t_e2e$proposals4321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4323){
var self__ = this;
var _4323__$1 = this;
return self__.meta4322;
});

e2e.proposals.t_e2e$proposals4321.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals4321.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_4955){
var state_val_4956 = (state_4955[(1)]);
if((state_val_4956 === (32))){
var inst_4451 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_4958 = state_4955;
(statearr_4958[(7)] = inst_4451);

return statearr_4958;
})();
var statearr_4959_6221 = state_4955__$1;
(statearr_4959_6221[(2)] = null);

(statearr_4959_6221[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (64))){
var state_4955__$1 = state_4955;
var statearr_4960_6222 = state_4955__$1;
(statearr_4960_6222[(2)] = false);

(statearr_4960_6222[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (96))){
var inst_4698 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4699 = true;
var inst_4700 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_4699,true];
var inst_4701 = cljs.core.PersistentHashMap.fromArrays(inst_4698,inst_4700);
var inst_4702 = cljs.test.do_report.call(null,inst_4701);
var state_4955__$1 = state_4955;
var statearr_4961_6223 = state_4955__$1;
(statearr_4961_6223[(2)] = inst_4702);

(statearr_4961_6223[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (128))){
var _ = (function (){var statearr_4962 = state_4955;
(statearr_4962[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_4962;
})();
var state_4955__$1 = state_4955;
var ex4957 = (state_4955__$1[(2)]);
var statearr_4963_6224 = state_4955__$1;
(statearr_4963_6224[(5)] = ex4957);


var statearr_4964_6225 = state_4955__$1;
(statearr_4964_6225[(1)] = (127));

(statearr_4964_6225[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (160))){
var inst_4929 = (state_4955[(8)]);
var inst_4949 = (state_4955[(2)]);
var _ = (function (){var statearr_4965 = state_4955;
(statearr_4965[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_4965;
})();
var state_4955__$1 = (function (){var statearr_4966 = state_4955;
(statearr_4966[(9)] = inst_4949);

return statearr_4966;
})();
var statearr_4967_6226 = state_4955__$1;
(statearr_4967_6226[(2)] = inst_4929);

(statearr_4967_6226[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (1))){
var state_4955__$1 = state_4955;
var statearr_4968_6227 = state_4955__$1;
(statearr_4968_6227[(2)] = null);

(statearr_4968_6227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (33))){
var _ = (function (){var statearr_4969 = state_4955;
(statearr_4969[(4)] = cljs.core.cons.call(null,(36),(state_4955[(4)])));

return statearr_4969;
})();
var state_4955__$1 = state_4955;
var statearr_4970_6228 = state_4955__$1;
(statearr_4970_6228[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (65))){
var inst_4596 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4596)){
var statearr_4973_6229 = state_4955__$1;
(statearr_4973_6229[(1)] = (69));

} else {
var statearr_4974_6230 = state_4955__$1;
(statearr_4974_6230[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (97))){
var inst_4704 = (state_4955[(2)]);
var _ = (function (){var statearr_4975 = state_4955;
(statearr_4975[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_4975;
})();
var state_4955__$1 = (function (){var statearr_4976 = state_4955;
(statearr_4976[(10)] = inst_4704);

return statearr_4976;
})();
var statearr_4977_6231 = state_4955__$1;
(statearr_4977_6231[(2)] = true);

(statearr_4977_6231[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (129))){
var _ = (function (){var statearr_4978 = state_4955;
(statearr_4978[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_4978;
})();
var state_4955__$1 = state_4955;
var ex4972 = (state_4955__$1[(2)]);
var statearr_4979_6232 = state_4955__$1;
(statearr_4979_6232[(5)] = ex4972);


if((ex4972 instanceof Error)){
var statearr_4980_6233 = state_4955__$1;
(statearr_4980_6233[(1)] = (124));

(statearr_4980_6233[(5)] = null);

} else {
throw ex4972;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (2))){
var _ = (function (){var statearr_4981 = state_4955;
(statearr_4981[(4)] = cljs.core.cons.call(null,(9),(state_4955[(4)])));

return statearr_4981;
})();
var inst_4350 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_4351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4352 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_4353 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_4354 = cljs.core.PersistentHashMap.fromArrays(inst_4352,inst_4353);
var inst_4355 = [inst_4354];
var inst_4356 = (new cljs.core.PersistentVector(null,(1),(5),inst_4351,inst_4355,null));
var inst_4357 = ["2021-01-01 12:00:00",inst_4356];
var inst_4358 = cljs.core.PersistentHashMap.fromArrays(inst_4350,inst_4357);
var inst_4359 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_4358);
var inst_4360 = cljs.core.async.interop.p__GT_c.call(null,inst_4359);
var state_4955__$1 = state_4955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(10),inst_4360);
} else {
if((state_val_4956 === (34))){
var inst_4479 = (state_4955[(2)]);
var _ = (function (){var statearr_4982 = state_4955;
(statearr_4982[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_4982;
})();
var state_4955__$1 = state_4955;
var statearr_4983_6234 = state_4955__$1;
(statearr_4983_6234[(2)] = inst_4479);

(statearr_4983_6234[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (66))){
var state_4955__$1 = state_4955;
var statearr_4984_6235 = state_4955__$1;
(statearr_4984_6235[(2)] = true);

(statearr_4984_6235[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (98))){
var inst_4718 = (state_4955[(11)]);
var inst_4718__$1 = (state_4955[(2)]);
var inst_4719 = (inst_4718__$1 instanceof cljs.core.ExceptionInfo);
var inst_4720 = cljs.core.ex_data.call(null,inst_4718__$1);
var inst_4721 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4720);
var inst_4722 = cljs.core._EQ_.call(null,inst_4721,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4723 = ((inst_4719) && (inst_4722));
var state_4955__$1 = (function (){var statearr_4985 = state_4955;
(statearr_4985[(11)] = inst_4718__$1);

return statearr_4985;
})();
if(cljs.core.truth_(inst_4723)){
var statearr_4986_6236 = state_4955__$1;
(statearr_4986_6236[(1)] = (99));

} else {
var statearr_4987_6237 = state_4955__$1;
(statearr_4987_6237[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (130))){
var inst_4833 = (state_4955[(12)]);
var inst_4833__$1 = (state_4955[(2)]);
var inst_4834 = (inst_4833__$1 instanceof cljs.core.ExceptionInfo);
var inst_4835 = cljs.core.ex_data.call(null,inst_4833__$1);
var inst_4836 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4835);
var inst_4837 = cljs.core._EQ_.call(null,inst_4836,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4838 = ((inst_4834) && (inst_4837));
var state_4955__$1 = (function (){var statearr_4988 = state_4955;
(statearr_4988[(12)] = inst_4833__$1);

return statearr_4988;
})();
if(cljs.core.truth_(inst_4838)){
var statearr_4989_6238 = state_4955__$1;
(statearr_4989_6238[(1)] = (131));

} else {
var statearr_4990_6239 = state_4955__$1;
(statearr_4990_6239[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (3))){
var inst_4403 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_4991 = state_4955;
(statearr_4991[(13)] = inst_4403);

return statearr_4991;
})();
var statearr_4992_6240 = state_4955__$1;
(statearr_4992_6240[(2)] = null);

(statearr_4992_6240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (35))){
var inst_4452 = (state_4955[(2)]);
var inst_4453 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4454 = true;
var inst_4455 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4454,inst_4452];
var inst_4456 = cljs.core.PersistentHashMap.fromArrays(inst_4453,inst_4455);
var inst_4457 = cljs.test.do_report.call(null,inst_4456);
var state_4955__$1 = state_4955;
var statearr_4993_6241 = state_4955__$1;
(statearr_4993_6241[(2)] = inst_4457);

(statearr_4993_6241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (67))){
var state_4955__$1 = state_4955;
var statearr_4994_6242 = state_4955__$1;
(statearr_4994_6242[(2)] = false);

(statearr_4994_6242[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (99))){
var inst_4718 = (state_4955[(11)]);
var inst_4725 = (function(){throw inst_4718})();
var state_4955__$1 = state_4955;
var statearr_4995_6243 = state_4955__$1;
(statearr_4995_6243[(2)] = inst_4725);

(statearr_4995_6243[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (131))){
var inst_4833 = (state_4955[(12)]);
var inst_4840 = (function(){throw inst_4833})();
var state_4955__$1 = state_4955;
var statearr_4997_6244 = state_4955__$1;
(statearr_4997_6244[(2)] = inst_4840);

(statearr_4997_6244[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (4))){
var inst_4325 = (state_4955[(2)]);
var inst_4326 = cljs.core.prn.call(null,"test failed with ",inst_4325);
var state_4955__$1 = (function (){var statearr_4998 = state_4955;
(statearr_4998[(14)] = inst_4326);

return statearr_4998;
})();
var statearr_4999_6245 = state_4955__$1;
(statearr_4999_6245[(2)] = null);

(statearr_4999_6245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (36))){
var _ = (function (){var statearr_5000 = state_4955;
(statearr_5000[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5000;
})();
var state_4955__$1 = state_4955;
var ex4996 = (state_4955__$1[(2)]);
var statearr_5001_6246 = state_4955__$1;
(statearr_5001_6246[(5)] = ex4996);


var statearr_5002_6247 = state_4955__$1;
(statearr_5002_6247[(1)] = (35));

(statearr_5002_6247[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (68))){
var inst_4593 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5003_6248 = state_4955__$1;
(statearr_5003_6248[(2)] = inst_4593);

(statearr_5003_6248[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (100))){
var inst_4718 = (state_4955[(11)]);
var state_4955__$1 = state_4955;
var statearr_5004_6249 = state_4955__$1;
(statearr_5004_6249[(2)] = inst_4718);

(statearr_5004_6249[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (132))){
var inst_4833 = (state_4955[(12)]);
var state_4955__$1 = state_4955;
var statearr_5005_6250 = state_4955__$1;
(statearr_5005_6250[(2)] = inst_4833);

(statearr_5005_6250[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (5))){
var _ = (function (){var statearr_5006 = state_4955;
(statearr_5006[(4)] = cljs.core.cons.call(null,(8),(state_4955[(4)])));

return statearr_5006;
})();
var inst_4338 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4339 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_4340 = cljs.core.PersistentHashMap.fromArrays(inst_4338,inst_4339);
var inst_4341 = cljs.test.do_report.call(null,inst_4340);
var ___$1 = (function (){var statearr_5007 = state_4955;
(statearr_5007[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5007;
})();
var state_4955__$1 = state_4955;
var statearr_5008_6251 = state_4955__$1;
(statearr_5008_6251[(2)] = inst_4341);

(statearr_5008_6251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (37))){
var inst_4464 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4465 = true;
var inst_4466 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4465,true];
var inst_4467 = cljs.core.PersistentHashMap.fromArrays(inst_4464,inst_4466);
var inst_4468 = cljs.test.do_report.call(null,inst_4467);
var state_4955__$1 = state_4955;
var statearr_5009_6252 = state_4955__$1;
(statearr_5009_6252[(2)] = inst_4468);

(statearr_5009_6252[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (69))){
var inst_4580 = (state_4955[(15)]);
var inst_4598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4580);
var state_4955__$1 = state_4955;
var statearr_5010_6253 = state_4955__$1;
(statearr_5010_6253[(2)] = inst_4598);

(statearr_5010_6253[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (101))){
var inst_4729 = (state_4955[(16)]);
var inst_4728 = (state_4955[(2)]);
var inst_4729__$1 = cljs.core.nth.call(null,inst_4728,(0),null);
var inst_4731 = (inst_4729__$1 == null);
var inst_4732 = cljs.core.not.call(null,inst_4731);
var state_4955__$1 = (function (){var statearr_5011 = state_4955;
(statearr_5011[(16)] = inst_4729__$1);

return statearr_5011;
})();
if(inst_4732){
var statearr_5012_6254 = state_4955__$1;
(statearr_5012_6254[(1)] = (102));

} else {
var statearr_5013_6255 = state_4955__$1;
(statearr_5013_6255[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (133))){
var inst_4843 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5014 = state_4955;
(statearr_5014[(17)] = inst_4843);

return statearr_5014;
})();
var statearr_5015_6256 = state_4955__$1;
(statearr_5015_6256[(2)] = null);

(statearr_5015_6256[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (6))){
var inst_4344 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5016_6257 = state_4955__$1;
(statearr_5016_6257[(2)] = inst_4344);

(statearr_5016_6257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (38))){
var inst_4470 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4471 = true;
var inst_4472 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4471,true];
var inst_4473 = cljs.core.PersistentHashMap.fromArrays(inst_4470,inst_4472);
var inst_4474 = cljs.test.do_report.call(null,inst_4473);
var state_4955__$1 = state_4955;
var statearr_5017_6258 = state_4955__$1;
(statearr_5017_6258[(2)] = inst_4474);

(statearr_5017_6258[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (70))){
var inst_4580 = (state_4955[(15)]);
var state_4955__$1 = state_4955;
var statearr_5018_6259 = state_4955__$1;
(statearr_5018_6259[(2)] = inst_4580);

(statearr_5018_6259[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (102))){
var inst_4729 = (state_4955[(16)]);
var inst_4734 = inst_4729.cljs$lang$protocol_mask$partition0$;
var inst_4735 = (inst_4734 & (64));
var inst_4736 = inst_4729.cljs$core$ISeq$;
var inst_4737 = (cljs.core.PROTOCOL_SENTINEL === inst_4736);
var inst_4738 = ((inst_4735) || (inst_4737));
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4738)){
var statearr_5019_6260 = state_4955__$1;
(statearr_5019_6260[(1)] = (105));

} else {
var statearr_5020_6261 = state_4955__$1;
(statearr_5020_6261[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (134))){
var _ = (function (){var statearr_5021 = state_4955;
(statearr_5021[(4)] = cljs.core.cons.call(null,(137),(state_4955[(4)])));

return statearr_5021;
})();
var state_4955__$1 = state_4955;
var statearr_5022_6262 = state_4955__$1;
(statearr_5022_6262[(1)] = (138));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (7))){
var inst_4327 = (state_4955[(2)]);
var inst_4328 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4329 = null;
var inst_4330 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4329,inst_4327];
var inst_4331 = cljs.core.PersistentHashMap.fromArrays(inst_4328,inst_4330);
var inst_4332 = cljs.test.do_report.call(null,inst_4331);
var state_4955__$1 = state_4955;
var statearr_5024_6263 = state_4955__$1;
(statearr_5024_6263[(2)] = inst_4332);

(statearr_5024_6263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (39))){
var inst_4476 = (state_4955[(2)]);
var _ = (function (){var statearr_5025 = state_4955;
(statearr_5025[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5025;
})();
var state_4955__$1 = (function (){var statearr_5026 = state_4955;
(statearr_5026[(18)] = inst_4476);

return statearr_5026;
})();
var statearr_5027_6264 = state_4955__$1;
(statearr_5027_6264[(2)] = true);

(statearr_5027_6264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (71))){
var inst_4601 = (state_4955[(2)]);
var inst_4602 = cljs.core.get.call(null,inst_4601,"current_cycle");
var state_4955__$1 = (function (){var statearr_5028 = state_4955;
(statearr_5028[(19)] = inst_4602);

return statearr_5028;
})();
var statearr_5029_6265 = state_4955__$1;
(statearr_5029_6265[(2)] = null);

(statearr_5029_6265[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (103))){
var state_4955__$1 = state_4955;
var statearr_5031_6266 = state_4955__$1;
(statearr_5031_6266[(2)] = false);

(statearr_5031_6266[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (135))){
var inst_4871 = (state_4955[(2)]);
var _ = (function (){var statearr_5032 = state_4955;
(statearr_5032[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5032;
})();
var state_4955__$1 = state_4955;
var statearr_5033_6267 = state_4955__$1;
(statearr_5033_6267[(2)] = inst_4871);

(statearr_5033_6267[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (8))){
var _ = (function (){var statearr_5034 = state_4955;
(statearr_5034[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5034;
})();
var state_4955__$1 = state_4955;
var ex5030 = (state_4955__$1[(2)]);
var statearr_5035_6268 = state_4955__$1;
(statearr_5035_6268[(5)] = ex5030);


var statearr_5036_6269 = state_4955__$1;
(statearr_5036_6269[(1)] = (7));

(statearr_5036_6269[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (40))){
var _ = (function (){var statearr_5037 = state_4955;
(statearr_5037[(4)] = cljs.core.cons.call(null,(47),(state_4955[(4)])));

return statearr_5037;
})();
var inst_4508 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_4509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4510 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_4511 = ["326000.2000 EFX",e2e.proposals.token_acc];
var inst_4512 = cljs.core.PersistentHashMap.fromArrays(inst_4510,inst_4511);
var inst_4513 = [inst_4512];
var inst_4514 = (new cljs.core.PersistentVector(null,(1),(5),inst_4509,inst_4513,null));
var inst_4515 = ["2021-01-01 12:00:00",inst_4514];
var inst_4516 = cljs.core.PersistentHashMap.fromArrays(inst_4508,inst_4515);
var inst_4517 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_4516);
var inst_4518 = cljs.core.async.interop.p__GT_c.call(null,inst_4517);
var state_4955__$1 = state_4955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(48),inst_4518);
} else {
if((state_val_4956 === (72))){
var inst_4602 = (state_4955[(19)]);
var inst_4615 = (state_4955[(20)]);
var inst_4616 = (state_4955[(21)]);
var _ = (function (){var statearr_5038 = state_4955;
(statearr_5038[(4)] = cljs.core.cons.call(null,(75),(state_4955[(4)])));

return statearr_5038;
})();
var inst_4614 = (new cljs.core.List(null,(0),null,(1),null));
var inst_4615__$1 = (new cljs.core.List(null,inst_4602,inst_4614,(2),null));
var inst_4616__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4615__$1);
var state_4955__$1 = (function (){var statearr_5039 = state_4955;
(statearr_5039[(20)] = inst_4615__$1);

(statearr_5039[(21)] = inst_4616__$1);

return statearr_5039;
})();
if(cljs.core.truth_(inst_4616__$1)){
var statearr_5040_6270 = state_4955__$1;
(statearr_5040_6270[(1)] = (76));

} else {
var statearr_5041_6271 = state_4955__$1;
(statearr_5041_6271[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (104))){
var inst_4745 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4745)){
var statearr_5043_6272 = state_4955__$1;
(statearr_5043_6272[(1)] = (108));

} else {
var statearr_5044_6273 = state_4955__$1;
(statearr_5044_6273[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (136))){
var inst_4844 = (state_4955[(2)]);
var inst_4845 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4846 = true;
var inst_4847 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_4846,inst_4844];
var inst_4848 = cljs.core.PersistentHashMap.fromArrays(inst_4845,inst_4847);
var inst_4849 = cljs.test.do_report.call(null,inst_4848);
var state_4955__$1 = state_4955;
var statearr_5045_6274 = state_4955__$1;
(statearr_5045_6274[(2)] = inst_4849);

(statearr_5045_6274[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (9))){
var _ = (function (){var statearr_5046 = state_4955;
(statearr_5046[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5046;
})();
var state_4955__$1 = state_4955;
var ex5042 = (state_4955__$1[(2)]);
var statearr_5047_6275 = state_4955__$1;
(statearr_5047_6275[(5)] = ex5042);


if((ex5042 instanceof Error)){
var statearr_5048_6276 = state_4955__$1;
(statearr_5048_6276[(1)] = (4));

(statearr_5048_6276[(5)] = null);

} else {
throw ex5042;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (41))){
var inst_4561 = (state_4955[(2)]);
var inst_4566 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_4567 = cljs.core.async.interop.p__GT_c.call(null,inst_4566);
var state_4955__$1 = (function (){var statearr_5049 = state_4955;
(statearr_5049[(22)] = inst_4561);

return statearr_5049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(59),inst_4567);
} else {
if((state_val_4956 === (73))){
var inst_4639 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5051 = state_4955;
(statearr_5051[(23)] = inst_4639);

return statearr_5051;
})();
var statearr_5052_6277 = state_4955__$1;
(statearr_5052_6277[(2)] = null);

(statearr_5052_6277[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (105))){
var state_4955__$1 = state_4955;
var statearr_5053_6278 = state_4955__$1;
(statearr_5053_6278[(2)] = true);

(statearr_5053_6278[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (137))){
var _ = (function (){var statearr_5054 = state_4955;
(statearr_5054[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5054;
})();
var state_4955__$1 = state_4955;
var ex5050 = (state_4955__$1[(2)]);
var statearr_5055_6279 = state_4955__$1;
(statearr_5055_6279[(5)] = ex5050);


var statearr_5056_6280 = state_4955__$1;
(statearr_5056_6280[(1)] = (136));

(statearr_5056_6280[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (10))){
var inst_4362 = (state_4955[(24)]);
var inst_4362__$1 = (state_4955[(2)]);
var inst_4363 = (inst_4362__$1 instanceof cljs.core.ExceptionInfo);
var inst_4364 = cljs.core.ex_data.call(null,inst_4362__$1);
var inst_4365 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4364);
var inst_4366 = cljs.core._EQ_.call(null,inst_4365,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4367 = ((inst_4363) && (inst_4366));
var state_4955__$1 = (function (){var statearr_5057 = state_4955;
(statearr_5057[(24)] = inst_4362__$1);

return statearr_5057;
})();
if(cljs.core.truth_(inst_4367)){
var statearr_5058_6281 = state_4955__$1;
(statearr_5058_6281[(1)] = (11));

} else {
var statearr_5059_6282 = state_4955__$1;
(statearr_5059_6282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (42))){
var inst_4483 = (state_4955[(2)]);
var inst_4484 = cljs.core.prn.call(null,"test failed with ",inst_4483);
var state_4955__$1 = (function (){var statearr_5060 = state_4955;
(statearr_5060[(25)] = inst_4484);

return statearr_5060;
})();
var statearr_5061_6283 = state_4955__$1;
(statearr_5061_6283[(2)] = null);

(statearr_5061_6283[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (74))){
var inst_4603 = (state_4955[(2)]);
var inst_4604 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4605 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_4606 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4605,inst_4603];
var inst_4607 = cljs.core.PersistentHashMap.fromArrays(inst_4604,inst_4606);
var inst_4608 = cljs.test.do_report.call(null,inst_4607);
var state_4955__$1 = state_4955;
var statearr_5062_6284 = state_4955__$1;
(statearr_5062_6284[(2)] = inst_4608);

(statearr_5062_6284[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (106))){
var state_4955__$1 = state_4955;
var statearr_5063_6285 = state_4955__$1;
(statearr_5063_6285[(2)] = false);

(statearr_5063_6285[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (138))){
var inst_4856 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4857 = true;
var inst_4858 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_4857,true];
var inst_4859 = cljs.core.PersistentHashMap.fromArrays(inst_4856,inst_4858);
var inst_4860 = cljs.test.do_report.call(null,inst_4859);
var state_4955__$1 = state_4955;
var statearr_5064_6286 = state_4955__$1;
(statearr_5064_6286[(2)] = inst_4860);

(statearr_5064_6286[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (11))){
var inst_4362 = (state_4955[(24)]);
var inst_4369 = (function(){throw inst_4362})();
var state_4955__$1 = state_4955;
var statearr_5066_6287 = state_4955__$1;
(statearr_5066_6287[(2)] = inst_4369);

(statearr_5066_6287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (43))){
var _ = (function (){var statearr_5067 = state_4955;
(statearr_5067[(4)] = cljs.core.cons.call(null,(46),(state_4955[(4)])));

return statearr_5067;
})();
var inst_4496 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4497 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_4498 = cljs.core.PersistentHashMap.fromArrays(inst_4496,inst_4497);
var inst_4499 = cljs.test.do_report.call(null,inst_4498);
var ___$1 = (function (){var statearr_5068 = state_4955;
(statearr_5068[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5068;
})();
var state_4955__$1 = state_4955;
var statearr_5069_6288 = state_4955__$1;
(statearr_5069_6288[(2)] = inst_4499);

(statearr_5069_6288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (75))){
var _ = (function (){var statearr_5070 = state_4955;
(statearr_5070[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5070;
})();
var state_4955__$1 = state_4955;
var ex5065 = (state_4955__$1[(2)]);
var statearr_5071_6289 = state_4955__$1;
(statearr_5071_6289[(5)] = ex5065);


var statearr_5072_6290 = state_4955__$1;
(statearr_5072_6290[(1)] = (74));

(statearr_5072_6290[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (107))){
var inst_4742 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5073_6291 = state_4955__$1;
(statearr_5073_6291[(2)] = inst_4742);

(statearr_5073_6291[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (139))){
var inst_4862 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4863 = true;
var inst_4864 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_4863,true];
var inst_4865 = cljs.core.PersistentHashMap.fromArrays(inst_4862,inst_4864);
var inst_4866 = cljs.test.do_report.call(null,inst_4865);
var state_4955__$1 = state_4955;
var statearr_5074_6292 = state_4955__$1;
(statearr_5074_6292[(2)] = inst_4866);

(statearr_5074_6292[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (12))){
var inst_4362 = (state_4955[(24)]);
var state_4955__$1 = state_4955;
var statearr_5075_6293 = state_4955__$1;
(statearr_5075_6293[(2)] = inst_4362);

(statearr_5075_6293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (44))){
var inst_4502 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5076_6294 = state_4955__$1;
(statearr_5076_6294[(2)] = inst_4502);

(statearr_5076_6294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (76))){
var inst_4615 = (state_4955[(20)]);
var inst_4618 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4619 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_4620 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4615);
var inst_4621 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4619,inst_4620];
var inst_4622 = cljs.core.PersistentHashMap.fromArrays(inst_4618,inst_4621);
var inst_4623 = cljs.test.do_report.call(null,inst_4622);
var state_4955__$1 = state_4955;
var statearr_5077_6295 = state_4955__$1;
(statearr_5077_6295[(2)] = inst_4623);

(statearr_5077_6295[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (108))){
var inst_4729 = (state_4955[(16)]);
var inst_4747 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4729);
var state_4955__$1 = state_4955;
var statearr_5078_6296 = state_4955__$1;
(statearr_5078_6296[(2)] = inst_4747);

(statearr_5078_6296[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (140))){
var inst_4868 = (state_4955[(2)]);
var _ = (function (){var statearr_5079 = state_4955;
(statearr_5079[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5079;
})();
var state_4955__$1 = (function (){var statearr_5080 = state_4955;
(statearr_5080[(26)] = inst_4868);

return statearr_5080;
})();
var statearr_5081_6297 = state_4955__$1;
(statearr_5081_6297[(2)] = true);

(statearr_5081_6297[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (13))){
var inst_4372 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5082 = state_4955;
(statearr_5082[(27)] = inst_4372);

return statearr_5082;
})();
var statearr_5083_6298 = state_4955__$1;
(statearr_5083_6298[(2)] = null);

(statearr_5083_6298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (45))){
var inst_4485 = (state_4955[(2)]);
var inst_4486 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4487 = null;
var inst_4488 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4487,inst_4485];
var inst_4489 = cljs.core.PersistentHashMap.fromArrays(inst_4486,inst_4488);
var inst_4490 = cljs.test.do_report.call(null,inst_4489);
var state_4955__$1 = state_4955;
var statearr_5084_6299 = state_4955__$1;
(statearr_5084_6299[(2)] = inst_4490);

(statearr_5084_6299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (77))){
var inst_4615 = (state_4955[(20)]);
var inst_4625 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4626 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_4627 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4628 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4629 = cljs.core.cons.call(null,inst_4628,inst_4615);
var inst_4630 = (new cljs.core.List(null,inst_4629,null,(1),null));
var inst_4631 = (new cljs.core.List(null,inst_4627,inst_4630,(2),null));
var inst_4632 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4626,inst_4631];
var inst_4633 = cljs.core.PersistentHashMap.fromArrays(inst_4625,inst_4632);
var inst_4634 = cljs.test.do_report.call(null,inst_4633);
var state_4955__$1 = state_4955;
var statearr_5085_6300 = state_4955__$1;
(statearr_5085_6300[(2)] = inst_4634);

(statearr_5085_6300[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (109))){
var inst_4729 = (state_4955[(16)]);
var state_4955__$1 = state_4955;
var statearr_5086_6301 = state_4955__$1;
(statearr_5086_6301[(2)] = inst_4729);

(statearr_5086_6301[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (141))){
var inst_4882 = (state_4955[(28)]);
var inst_4882__$1 = (state_4955[(2)]);
var inst_4883 = (inst_4882__$1 instanceof cljs.core.ExceptionInfo);
var inst_4884 = cljs.core.ex_data.call(null,inst_4882__$1);
var inst_4885 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4884);
var inst_4886 = cljs.core._EQ_.call(null,inst_4885,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4887 = ((inst_4883) && (inst_4886));
var state_4955__$1 = (function (){var statearr_5088 = state_4955;
(statearr_5088[(28)] = inst_4882__$1);

return statearr_5088;
})();
if(cljs.core.truth_(inst_4887)){
var statearr_5089_6302 = state_4955__$1;
(statearr_5089_6302[(1)] = (142));

} else {
var statearr_5090_6303 = state_4955__$1;
(statearr_5090_6303[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (14))){
var _ = (function (){var statearr_5091 = state_4955;
(statearr_5091[(4)] = cljs.core.cons.call(null,(17),(state_4955[(4)])));

return statearr_5091;
})();
var state_4955__$1 = state_4955;
var statearr_5092_6304 = state_4955__$1;
(statearr_5092_6304[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (46))){
var _ = (function (){var statearr_5094 = state_4955;
(statearr_5094[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5094;
})();
var state_4955__$1 = state_4955;
var ex5087 = (state_4955__$1[(2)]);
var statearr_5095_6305 = state_4955__$1;
(statearr_5095_6305[(5)] = ex5087);


var statearr_5096_6306 = state_4955__$1;
(statearr_5096_6306[(1)] = (45));

(statearr_5096_6306[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (78))){
var inst_4616 = (state_4955[(21)]);
var inst_4636 = (state_4955[(2)]);
var _ = (function (){var statearr_5097 = state_4955;
(statearr_5097[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5097;
})();
var state_4955__$1 = (function (){var statearr_5098 = state_4955;
(statearr_5098[(29)] = inst_4636);

return statearr_5098;
})();
var statearr_5099_6307 = state_4955__$1;
(statearr_5099_6307[(2)] = inst_4616);

(statearr_5099_6307[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (110))){
var inst_4750 = (state_4955[(2)]);
var inst_4751 = cljs.core.get.call(null,inst_4750,"current_cycle");
var state_4955__$1 = (function (){var statearr_5100 = state_4955;
(statearr_5100[(30)] = inst_4751);

return statearr_5100;
})();
var statearr_5101_6308 = state_4955__$1;
(statearr_5101_6308[(2)] = null);

(statearr_5101_6308[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (142))){
var inst_4882 = (state_4955[(28)]);
var inst_4889 = (function(){throw inst_4882})();
var state_4955__$1 = state_4955;
var statearr_5103_6309 = state_4955__$1;
(statearr_5103_6309[(2)] = inst_4889);

(statearr_5103_6309[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (15))){
var inst_4400 = (state_4955[(2)]);
var _ = (function (){var statearr_5104 = state_4955;
(statearr_5104[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5104;
})();
var state_4955__$1 = state_4955;
var statearr_5105_6310 = state_4955__$1;
(statearr_5105_6310[(2)] = inst_4400);

(statearr_5105_6310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (47))){
var _ = (function (){var statearr_5106 = state_4955;
(statearr_5106[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5106;
})();
var state_4955__$1 = state_4955;
var ex5102 = (state_4955__$1[(2)]);
var statearr_5107_6311 = state_4955__$1;
(statearr_5107_6311[(5)] = ex5102);


if((ex5102 instanceof Error)){
var statearr_5108_6312 = state_4955__$1;
(statearr_5108_6312[(1)] = (42));

(statearr_5108_6312[(5)] = null);

} else {
throw ex5102;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (79))){
var _ = (function (){var statearr_5109 = state_4955;
(statearr_5109[(4)] = cljs.core.cons.call(null,(86),(state_4955[(4)])));

return statearr_5109;
})();
var inst_4665 = cljs.core.PersistentHashMap.EMPTY;
var inst_4666 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_4665);
var inst_4667 = cljs.core.async.interop.p__GT_c.call(null,inst_4666);
var state_4955__$1 = state_4955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(87),inst_4667);
} else {
if((state_val_4956 === (111))){
var inst_4751 = (state_4955[(30)]);
var inst_4764 = (state_4955[(31)]);
var inst_4765 = (state_4955[(32)]);
var _ = (function (){var statearr_5110 = state_4955;
(statearr_5110[(4)] = cljs.core.cons.call(null,(114),(state_4955[(4)])));

return statearr_5110;
})();
var inst_4763 = (new cljs.core.List(null,(1),null,(1),null));
var inst_4764__$1 = (new cljs.core.List(null,inst_4751,inst_4763,(2),null));
var inst_4765__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4764__$1);
var state_4955__$1 = (function (){var statearr_5111 = state_4955;
(statearr_5111[(31)] = inst_4764__$1);

(statearr_5111[(32)] = inst_4765__$1);

return statearr_5111;
})();
if(cljs.core.truth_(inst_4765__$1)){
var statearr_5112_6313 = state_4955__$1;
(statearr_5112_6313[(1)] = (115));

} else {
var statearr_5113_6314 = state_4955__$1;
(statearr_5113_6314[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (143))){
var inst_4882 = (state_4955[(28)]);
var state_4955__$1 = state_4955;
var statearr_5114_6315 = state_4955__$1;
(statearr_5114_6315[(2)] = inst_4882);

(statearr_5114_6315[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (16))){
var inst_4373 = (state_4955[(2)]);
var inst_4374 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4375 = true;
var inst_4376 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4375,inst_4373];
var inst_4377 = cljs.core.PersistentHashMap.fromArrays(inst_4374,inst_4376);
var inst_4378 = cljs.test.do_report.call(null,inst_4377);
var state_4955__$1 = state_4955;
var statearr_5115_6316 = state_4955__$1;
(statearr_5115_6316[(2)] = inst_4378);

(statearr_5115_6316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (48))){
var inst_4520 = (state_4955[(33)]);
var inst_4520__$1 = (state_4955[(2)]);
var inst_4521 = (inst_4520__$1 instanceof cljs.core.ExceptionInfo);
var inst_4522 = cljs.core.ex_data.call(null,inst_4520__$1);
var inst_4523 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4522);
var inst_4524 = cljs.core._EQ_.call(null,inst_4523,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4525 = ((inst_4521) && (inst_4524));
var state_4955__$1 = (function (){var statearr_5116 = state_4955;
(statearr_5116[(33)] = inst_4520__$1);

return statearr_5116;
})();
if(cljs.core.truth_(inst_4525)){
var statearr_5117_6317 = state_4955__$1;
(statearr_5117_6317[(1)] = (49));

} else {
var statearr_5118_6318 = state_4955__$1;
(statearr_5118_6318[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (80))){
var inst_4710 = (state_4955[(2)]);
var inst_4715 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_4716 = cljs.core.async.interop.p__GT_c.call(null,inst_4715);
var state_4955__$1 = (function (){var statearr_5119 = state_4955;
(statearr_5119[(34)] = inst_4710);

return statearr_5119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(98),inst_4716);
} else {
if((state_val_4956 === (112))){
var inst_4788 = (state_4955[(2)]);
var inst_4789 = Promise.resolve((1));
var inst_4790 = eos_cljs.core.wait_block.call(null,inst_4789);
var inst_4791 = cljs.core.async.interop.p__GT_c.call(null,inst_4790);
var state_4955__$1 = (function (){var statearr_5121 = state_4955;
(statearr_5121[(35)] = inst_4788);

return statearr_5121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(118),inst_4791);
} else {
if((state_val_4956 === (144))){
var inst_4893 = (state_4955[(36)]);
var inst_4892 = (state_4955[(2)]);
var inst_4893__$1 = cljs.core.nth.call(null,inst_4892,(0),null);
var inst_4895 = (inst_4893__$1 == null);
var inst_4896 = cljs.core.not.call(null,inst_4895);
var state_4955__$1 = (function (){var statearr_5122 = state_4955;
(statearr_5122[(36)] = inst_4893__$1);

return statearr_5122;
})();
if(inst_4896){
var statearr_5123_6319 = state_4955__$1;
(statearr_5123_6319[(1)] = (145));

} else {
var statearr_5124_6320 = state_4955__$1;
(statearr_5124_6320[(1)] = (146));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (17))){
var _ = (function (){var statearr_5125 = state_4955;
(statearr_5125[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5125;
})();
var state_4955__$1 = state_4955;
var ex5120 = (state_4955__$1[(2)]);
var statearr_5126_6321 = state_4955__$1;
(statearr_5126_6321[(5)] = ex5120);


var statearr_5127_6322 = state_4955__$1;
(statearr_5127_6322[(1)] = (16));

(statearr_5127_6322[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (49))){
var inst_4520 = (state_4955[(33)]);
var inst_4527 = (function(){throw inst_4520})();
var state_4955__$1 = state_4955;
var statearr_5128_6323 = state_4955__$1;
(statearr_5128_6323[(2)] = inst_4527);

(statearr_5128_6323[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (81))){
var inst_4640 = (state_4955[(2)]);
var inst_4641 = cljs.core.prn.call(null,"test failed with ",inst_4640);
var state_4955__$1 = (function (){var statearr_5129 = state_4955;
(statearr_5129[(37)] = inst_4641);

return statearr_5129;
})();
var statearr_5130_6324 = state_4955__$1;
(statearr_5130_6324[(2)] = null);

(statearr_5130_6324[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (113))){
var inst_4752 = (state_4955[(2)]);
var inst_4753 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4754 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_4755 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4754,inst_4752];
var inst_4756 = cljs.core.PersistentHashMap.fromArrays(inst_4753,inst_4755);
var inst_4757 = cljs.test.do_report.call(null,inst_4756);
var state_4955__$1 = state_4955;
var statearr_5131_6325 = state_4955__$1;
(statearr_5131_6325[(2)] = inst_4757);

(statearr_5131_6325[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (145))){
var inst_4893 = (state_4955[(36)]);
var inst_4898 = inst_4893.cljs$lang$protocol_mask$partition0$;
var inst_4899 = (inst_4898 & (64));
var inst_4900 = inst_4893.cljs$core$ISeq$;
var inst_4901 = (cljs.core.PROTOCOL_SENTINEL === inst_4900);
var inst_4902 = ((inst_4899) || (inst_4901));
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4902)){
var statearr_5132_6326 = state_4955__$1;
(statearr_5132_6326[(1)] = (148));

} else {
var statearr_5133_6327 = state_4955__$1;
(statearr_5133_6327[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (18))){
var inst_4385 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4386 = true;
var inst_4387 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4386,true];
var inst_4388 = cljs.core.PersistentHashMap.fromArrays(inst_4385,inst_4387);
var inst_4389 = cljs.test.do_report.call(null,inst_4388);
var state_4955__$1 = state_4955;
var statearr_5134_6328 = state_4955__$1;
(statearr_5134_6328[(2)] = inst_4389);

(statearr_5134_6328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (50))){
var inst_4520 = (state_4955[(33)]);
var state_4955__$1 = state_4955;
var statearr_5136_6329 = state_4955__$1;
(statearr_5136_6329[(2)] = inst_4520);

(statearr_5136_6329[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (82))){
var _ = (function (){var statearr_5137 = state_4955;
(statearr_5137[(4)] = cljs.core.cons.call(null,(85),(state_4955[(4)])));

return statearr_5137;
})();
var inst_4653 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4654 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_4655 = cljs.core.PersistentHashMap.fromArrays(inst_4653,inst_4654);
var inst_4656 = cljs.test.do_report.call(null,inst_4655);
var ___$1 = (function (){var statearr_5138 = state_4955;
(statearr_5138[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5138;
})();
var state_4955__$1 = state_4955;
var statearr_5139_6330 = state_4955__$1;
(statearr_5139_6330[(2)] = inst_4656);

(statearr_5139_6330[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (114))){
var _ = (function (){var statearr_5140 = state_4955;
(statearr_5140[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5140;
})();
var state_4955__$1 = state_4955;
var ex5135 = (state_4955__$1[(2)]);
var statearr_5141_6331 = state_4955__$1;
(statearr_5141_6331[(5)] = ex5135);


var statearr_5142_6332 = state_4955__$1;
(statearr_5142_6332[(1)] = (113));

(statearr_5142_6332[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (146))){
var state_4955__$1 = state_4955;
var statearr_5143_6333 = state_4955__$1;
(statearr_5143_6333[(2)] = false);

(statearr_5143_6333[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (19))){
var inst_4391 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4392 = true;
var inst_4393 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4392,true];
var inst_4394 = cljs.core.PersistentHashMap.fromArrays(inst_4391,inst_4393);
var inst_4395 = cljs.test.do_report.call(null,inst_4394);
var state_4955__$1 = state_4955;
var statearr_5144_6334 = state_4955__$1;
(statearr_5144_6334[(2)] = inst_4395);

(statearr_5144_6334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (51))){
var inst_4530 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5145 = state_4955;
(statearr_5145[(38)] = inst_4530);

return statearr_5145;
})();
var statearr_5146_6335 = state_4955__$1;
(statearr_5146_6335[(2)] = null);

(statearr_5146_6335[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (83))){
var inst_4659 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5147_6336 = state_4955__$1;
(statearr_5147_6336[(2)] = inst_4659);

(statearr_5147_6336[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (115))){
var inst_4764 = (state_4955[(31)]);
var inst_4767 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4768 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_4769 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4764);
var inst_4770 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4768,inst_4769];
var inst_4771 = cljs.core.PersistentHashMap.fromArrays(inst_4767,inst_4770);
var inst_4772 = cljs.test.do_report.call(null,inst_4771);
var state_4955__$1 = state_4955;
var statearr_5148_6337 = state_4955__$1;
(statearr_5148_6337[(2)] = inst_4772);

(statearr_5148_6337[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (147))){
var inst_4909 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4909)){
var statearr_5149_6338 = state_4955__$1;
(statearr_5149_6338[(1)] = (151));

} else {
var statearr_5150_6339 = state_4955__$1;
(statearr_5150_6339[(1)] = (152));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (20))){
var inst_4397 = (state_4955[(2)]);
var _ = (function (){var statearr_5151 = state_4955;
(statearr_5151[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5151;
})();
var state_4955__$1 = (function (){var statearr_5152 = state_4955;
(statearr_5152[(39)] = inst_4397);

return statearr_5152;
})();
var statearr_5153_6340 = state_4955__$1;
(statearr_5153_6340[(2)] = true);

(statearr_5153_6340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (52))){
var _ = (function (){var statearr_5154 = state_4955;
(statearr_5154[(4)] = cljs.core.cons.call(null,(55),(state_4955[(4)])));

return statearr_5154;
})();
var state_4955__$1 = state_4955;
var statearr_5155_6341 = state_4955__$1;
(statearr_5155_6341[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (84))){
var inst_4642 = (state_4955[(2)]);
var inst_4643 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4644 = null;
var inst_4645 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_4644,inst_4642];
var inst_4646 = cljs.core.PersistentHashMap.fromArrays(inst_4643,inst_4645);
var inst_4647 = cljs.test.do_report.call(null,inst_4646);
var state_4955__$1 = state_4955;
var statearr_5157_6342 = state_4955__$1;
(statearr_5157_6342[(2)] = inst_4647);

(statearr_5157_6342[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (116))){
var inst_4764 = (state_4955[(31)]);
var inst_4774 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4775 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_4776 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4777 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4778 = cljs.core.cons.call(null,inst_4777,inst_4764);
var inst_4779 = (new cljs.core.List(null,inst_4778,null,(1),null));
var inst_4780 = (new cljs.core.List(null,inst_4776,inst_4779,(2),null));
var inst_4781 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4775,inst_4780];
var inst_4782 = cljs.core.PersistentHashMap.fromArrays(inst_4774,inst_4781);
var inst_4783 = cljs.test.do_report.call(null,inst_4782);
var state_4955__$1 = state_4955;
var statearr_5158_6343 = state_4955__$1;
(statearr_5158_6343[(2)] = inst_4783);

(statearr_5158_6343[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (148))){
var state_4955__$1 = state_4955;
var statearr_5159_6344 = state_4955__$1;
(statearr_5159_6344[(2)] = true);

(statearr_5159_6344[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (21))){
var _ = (function (){var statearr_5161 = state_4955;
(statearr_5161[(4)] = cljs.core.cons.call(null,(28),(state_4955[(4)])));

return statearr_5161;
})();
var inst_4429 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_4430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4431 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_4432 = ["500.1000 EFX",e2e.proposals.token_acc];
var inst_4433 = cljs.core.PersistentHashMap.fromArrays(inst_4431,inst_4432);
var inst_4434 = [inst_4433];
var inst_4435 = (new cljs.core.PersistentVector(null,(1),(5),inst_4430,inst_4434,null));
var inst_4436 = ["2021-01-01 12:00:00",inst_4435];
var inst_4437 = cljs.core.PersistentHashMap.fromArrays(inst_4429,inst_4436);
var inst_4438 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_4437);
var inst_4439 = cljs.core.async.interop.p__GT_c.call(null,inst_4438);
var state_4955__$1 = state_4955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(29),inst_4439);
} else {
if((state_val_4956 === (53))){
var inst_4558 = (state_4955[(2)]);
var _ = (function (){var statearr_5162 = state_4955;
(statearr_5162[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5162;
})();
var state_4955__$1 = state_4955;
var statearr_5163_6345 = state_4955__$1;
(statearr_5163_6345[(2)] = inst_4558);

(statearr_5163_6345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (85))){
var _ = (function (){var statearr_5164 = state_4955;
(statearr_5164[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5164;
})();
var state_4955__$1 = state_4955;
var ex5160 = (state_4955__$1[(2)]);
var statearr_5165_6346 = state_4955__$1;
(statearr_5165_6346[(5)] = ex5160);


var statearr_5166_6347 = state_4955__$1;
(statearr_5166_6347[(1)] = (84));

(statearr_5166_6347[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (117))){
var inst_4765 = (state_4955[(32)]);
var inst_4785 = (state_4955[(2)]);
var _ = (function (){var statearr_5167 = state_4955;
(statearr_5167[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5167;
})();
var state_4955__$1 = (function (){var statearr_5168 = state_4955;
(statearr_5168[(40)] = inst_4785);

return statearr_5168;
})();
var statearr_5169_6348 = state_4955__$1;
(statearr_5169_6348[(2)] = inst_4765);

(statearr_5169_6348[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (149))){
var state_4955__$1 = state_4955;
var statearr_5170_6349 = state_4955__$1;
(statearr_5170_6349[(2)] = false);

(statearr_5170_6349[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (22))){
var inst_4482 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5172 = state_4955;
(statearr_5172[(41)] = inst_4482);

return statearr_5172;
})();
var statearr_5173_6350 = state_4955__$1;
(statearr_5173_6350[(2)] = null);

(statearr_5173_6350[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (54))){
var inst_4531 = (state_4955[(2)]);
var inst_4532 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4533 = true;
var inst_4534 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4533,inst_4531];
var inst_4535 = cljs.core.PersistentHashMap.fromArrays(inst_4532,inst_4534);
var inst_4536 = cljs.test.do_report.call(null,inst_4535);
var state_4955__$1 = state_4955;
var statearr_5174_6351 = state_4955__$1;
(statearr_5174_6351[(2)] = inst_4536);

(statearr_5174_6351[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (86))){
var _ = (function (){var statearr_5175 = state_4955;
(statearr_5175[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5175;
})();
var state_4955__$1 = state_4955;
var ex5171 = (state_4955__$1[(2)]);
var statearr_5176_6352 = state_4955__$1;
(statearr_5176_6352[(5)] = ex5171);


if((ex5171 instanceof Error)){
var statearr_5177_6353 = state_4955__$1;
(statearr_5177_6353[(1)] = (81));

(statearr_5177_6353[(5)] = null);

} else {
throw ex5171;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (118))){
var inst_4793 = (state_4955[(42)]);
var inst_4793__$1 = (state_4955[(2)]);
var inst_4794 = (inst_4793__$1 instanceof cljs.core.ExceptionInfo);
var inst_4795 = cljs.core.ex_data.call(null,inst_4793__$1);
var inst_4796 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4795);
var inst_4797 = cljs.core._EQ_.call(null,inst_4796,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4798 = ((inst_4794) && (inst_4797));
var state_4955__$1 = (function (){var statearr_5178 = state_4955;
(statearr_5178[(42)] = inst_4793__$1);

return statearr_5178;
})();
if(cljs.core.truth_(inst_4798)){
var statearr_5179_6354 = state_4955__$1;
(statearr_5179_6354[(1)] = (119));

} else {
var statearr_5180_6355 = state_4955__$1;
(statearr_5180_6355[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (150))){
var inst_4906 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5182_6356 = state_4955__$1;
(statearr_5182_6356[(2)] = inst_4906);

(statearr_5182_6356[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (23))){
var inst_4404 = (state_4955[(2)]);
var inst_4405 = cljs.core.prn.call(null,"test failed with ",inst_4404);
var state_4955__$1 = (function (){var statearr_5183 = state_4955;
(statearr_5183[(43)] = inst_4405);

return statearr_5183;
})();
var statearr_5184_6357 = state_4955__$1;
(statearr_5184_6357[(2)] = null);

(statearr_5184_6357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (55))){
var _ = (function (){var statearr_5185 = state_4955;
(statearr_5185[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5185;
})();
var state_4955__$1 = state_4955;
var ex5181 = (state_4955__$1[(2)]);
var statearr_5186_6358 = state_4955__$1;
(statearr_5186_6358[(5)] = ex5181);


var statearr_5187_6359 = state_4955__$1;
(statearr_5187_6359[(1)] = (54));

(statearr_5187_6359[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (87))){
var inst_4669 = (state_4955[(44)]);
var inst_4669__$1 = (state_4955[(2)]);
var inst_4670 = (inst_4669__$1 instanceof cljs.core.ExceptionInfo);
var inst_4671 = cljs.core.ex_data.call(null,inst_4669__$1);
var inst_4672 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4671);
var inst_4673 = cljs.core._EQ_.call(null,inst_4672,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4674 = ((inst_4670) && (inst_4673));
var state_4955__$1 = (function (){var statearr_5188 = state_4955;
(statearr_5188[(44)] = inst_4669__$1);

return statearr_5188;
})();
if(cljs.core.truth_(inst_4674)){
var statearr_5189_6360 = state_4955__$1;
(statearr_5189_6360[(1)] = (88));

} else {
var statearr_5190_6361 = state_4955__$1;
(statearr_5190_6361[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (119))){
var inst_4793 = (state_4955[(42)]);
var inst_4800 = (function(){throw inst_4793})();
var state_4955__$1 = state_4955;
var statearr_5191_6362 = state_4955__$1;
(statearr_5191_6362[(2)] = inst_4800);

(statearr_5191_6362[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (151))){
var inst_4893 = (state_4955[(36)]);
var inst_4911 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4893);
var state_4955__$1 = state_4955;
var statearr_5192_6363 = state_4955__$1;
(statearr_5192_6363[(2)] = inst_4911);

(statearr_5192_6363[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (24))){
var _ = (function (){var statearr_5193 = state_4955;
(statearr_5193[(4)] = cljs.core.cons.call(null,(27),(state_4955[(4)])));

return statearr_5193;
})();
var inst_4417 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4418 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_4419 = cljs.core.PersistentHashMap.fromArrays(inst_4417,inst_4418);
var inst_4420 = cljs.test.do_report.call(null,inst_4419);
var ___$1 = (function (){var statearr_5194 = state_4955;
(statearr_5194[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5194;
})();
var state_4955__$1 = state_4955;
var statearr_5195_6364 = state_4955__$1;
(statearr_5195_6364[(2)] = inst_4420);

(statearr_5195_6364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (56))){
var inst_4543 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4544 = true;
var inst_4545 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4544,true];
var inst_4546 = cljs.core.PersistentHashMap.fromArrays(inst_4543,inst_4545);
var inst_4547 = cljs.test.do_report.call(null,inst_4546);
var state_4955__$1 = state_4955;
var statearr_5196_6365 = state_4955__$1;
(statearr_5196_6365[(2)] = inst_4547);

(statearr_5196_6365[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (88))){
var inst_4669 = (state_4955[(44)]);
var inst_4676 = (function(){throw inst_4669})();
var state_4955__$1 = state_4955;
var statearr_5197_6366 = state_4955__$1;
(statearr_5197_6366[(2)] = inst_4676);

(statearr_5197_6366[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (120))){
var inst_4793 = (state_4955[(42)]);
var state_4955__$1 = state_4955;
var statearr_5198_6367 = state_4955__$1;
(statearr_5198_6367[(2)] = inst_4793);

(statearr_5198_6367[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (152))){
var inst_4893 = (state_4955[(36)]);
var state_4955__$1 = state_4955;
var statearr_5199_6368 = state_4955__$1;
(statearr_5199_6368[(2)] = inst_4893);

(statearr_5199_6368[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (25))){
var inst_4423 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5200_6369 = state_4955__$1;
(statearr_5200_6369[(2)] = inst_4423);

(statearr_5200_6369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (57))){
var inst_4549 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4550 = true;
var inst_4551 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4550,true];
var inst_4552 = cljs.core.PersistentHashMap.fromArrays(inst_4549,inst_4551);
var inst_4553 = cljs.test.do_report.call(null,inst_4552);
var state_4955__$1 = state_4955;
var statearr_5201_6370 = state_4955__$1;
(statearr_5201_6370[(2)] = inst_4553);

(statearr_5201_6370[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (89))){
var inst_4669 = (state_4955[(44)]);
var state_4955__$1 = state_4955;
var statearr_5202_6371 = state_4955__$1;
(statearr_5202_6371[(2)] = inst_4669);

(statearr_5202_6371[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (121))){
var inst_4803 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5203 = state_4955;
(statearr_5203[(45)] = inst_4803);

return statearr_5203;
})();
var statearr_5204_6372 = state_4955__$1;
(statearr_5204_6372[(2)] = null);

(statearr_5204_6372[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (153))){
var inst_4914 = (state_4955[(2)]);
var inst_4915 = cljs.core.get.call(null,inst_4914,"current_cycle");
var state_4955__$1 = (function (){var statearr_5205 = state_4955;
(statearr_5205[(46)] = inst_4915);

return statearr_5205;
})();
var statearr_5206_6373 = state_4955__$1;
(statearr_5206_6373[(2)] = null);

(statearr_5206_6373[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (26))){
var inst_4406 = (state_4955[(2)]);
var inst_4407 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4408 = null;
var inst_4409 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4408,inst_4406];
var inst_4410 = cljs.core.PersistentHashMap.fromArrays(inst_4407,inst_4409);
var inst_4411 = cljs.test.do_report.call(null,inst_4410);
var state_4955__$1 = state_4955;
var statearr_5207_6374 = state_4955__$1;
(statearr_5207_6374[(2)] = inst_4411);

(statearr_5207_6374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (58))){
var inst_4555 = (state_4955[(2)]);
var _ = (function (){var statearr_5208 = state_4955;
(statearr_5208[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5208;
})();
var state_4955__$1 = (function (){var statearr_5209 = state_4955;
(statearr_5209[(47)] = inst_4555);

return statearr_5209;
})();
var statearr_5210_6375 = state_4955__$1;
(statearr_5210_6375[(2)] = true);

(statearr_5210_6375[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (90))){
var inst_4679 = (state_4955[(2)]);
var state_4955__$1 = (function (){var statearr_5211 = state_4955;
(statearr_5211[(48)] = inst_4679);

return statearr_5211;
})();
var statearr_5212_6376 = state_4955__$1;
(statearr_5212_6376[(2)] = null);

(statearr_5212_6376[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (122))){
var _ = (function (){var statearr_5214 = state_4955;
(statearr_5214[(4)] = cljs.core.cons.call(null,(129),(state_4955[(4)])));

return statearr_5214;
})();
var inst_4829 = cljs.core.PersistentHashMap.EMPTY;
var inst_4830 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_4829);
var inst_4831 = cljs.core.async.interop.p__GT_c.call(null,inst_4830);
var state_4955__$1 = state_4955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(130),inst_4831);
} else {
if((state_val_4956 === (154))){
var inst_4915 = (state_4955[(46)]);
var inst_4928 = (state_4955[(49)]);
var inst_4929 = (state_4955[(8)]);
var _ = (function (){var statearr_5215 = state_4955;
(statearr_5215[(4)] = cljs.core.cons.call(null,(157),(state_4955[(4)])));

return statearr_5215;
})();
var inst_4927 = (new cljs.core.List(null,(2),null,(1),null));
var inst_4928__$1 = (new cljs.core.List(null,inst_4915,inst_4927,(2),null));
var inst_4929__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4928__$1);
var state_4955__$1 = (function (){var statearr_5216 = state_4955;
(statearr_5216[(49)] = inst_4928__$1);

(statearr_5216[(8)] = inst_4929__$1);

return statearr_5216;
})();
if(cljs.core.truth_(inst_4929__$1)){
var statearr_5217_6377 = state_4955__$1;
(statearr_5217_6377[(1)] = (158));

} else {
var statearr_5218_6378 = state_4955__$1;
(statearr_5218_6378[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (27))){
var _ = (function (){var statearr_5219 = state_4955;
(statearr_5219[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5219;
})();
var state_4955__$1 = state_4955;
var ex5213 = (state_4955__$1[(2)]);
var statearr_5220_6379 = state_4955__$1;
(statearr_5220_6379[(5)] = ex5213);


var statearr_5221_6380 = state_4955__$1;
(statearr_5221_6380[(1)] = (26));

(statearr_5221_6380[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (59))){
var inst_4569 = (state_4955[(50)]);
var inst_4569__$1 = (state_4955[(2)]);
var inst_4570 = (inst_4569__$1 instanceof cljs.core.ExceptionInfo);
var inst_4571 = cljs.core.ex_data.call(null,inst_4569__$1);
var inst_4572 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4571);
var inst_4573 = cljs.core._EQ_.call(null,inst_4572,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4574 = ((inst_4570) && (inst_4573));
var state_4955__$1 = (function (){var statearr_5222 = state_4955;
(statearr_5222[(50)] = inst_4569__$1);

return statearr_5222;
})();
if(cljs.core.truth_(inst_4574)){
var statearr_5223_6381 = state_4955__$1;
(statearr_5223_6381[(1)] = (60));

} else {
var statearr_5224_6382 = state_4955__$1;
(statearr_5224_6382[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (91))){
var _ = (function (){var statearr_5225 = state_4955;
(statearr_5225[(4)] = cljs.core.cons.call(null,(94),(state_4955[(4)])));

return statearr_5225;
})();
var state_4955__$1 = state_4955;
var statearr_5226_6383 = state_4955__$1;
(statearr_5226_6383[(1)] = (95));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (123))){
var inst_4874 = (state_4955[(2)]);
var inst_4879 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_4880 = cljs.core.async.interop.p__GT_c.call(null,inst_4879);
var state_4955__$1 = (function (){var statearr_5229 = state_4955;
(statearr_5229[(51)] = inst_4874);

return statearr_5229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4955__$1,(141),inst_4880);
} else {
if((state_val_4956 === (155))){
var inst_4952 = (state_4955[(2)]);
var inst_4953 = done.call(null);
var state_4955__$1 = (function (){var statearr_5230 = state_4955;
(statearr_5230[(52)] = inst_4952);

return statearr_5230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4955__$1,inst_4953);
} else {
if((state_val_4956 === (28))){
var _ = (function (){var statearr_5231 = state_4955;
(statearr_5231[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5231;
})();
var state_4955__$1 = state_4955;
var ex5228 = (state_4955__$1[(2)]);
var statearr_5232_6384 = state_4955__$1;
(statearr_5232_6384[(5)] = ex5228);


if((ex5228 instanceof Error)){
var statearr_5233_6385 = state_4955__$1;
(statearr_5233_6385[(1)] = (23));

(statearr_5233_6385[(5)] = null);

} else {
throw ex5228;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (60))){
var inst_4569 = (state_4955[(50)]);
var inst_4576 = (function(){throw inst_4569})();
var state_4955__$1 = state_4955;
var statearr_5234_6386 = state_4955__$1;
(statearr_5234_6386[(2)] = inst_4576);

(statearr_5234_6386[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (92))){
var inst_4707 = (state_4955[(2)]);
var _ = (function (){var statearr_5235 = state_4955;
(statearr_5235[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5235;
})();
var state_4955__$1 = state_4955;
var statearr_5236_6387 = state_4955__$1;
(statearr_5236_6387[(2)] = inst_4707);

(statearr_5236_6387[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (124))){
var inst_4804 = (state_4955[(2)]);
var inst_4805 = cljs.core.prn.call(null,"test failed with ",inst_4804);
var state_4955__$1 = (function (){var statearr_5237 = state_4955;
(statearr_5237[(53)] = inst_4805);

return statearr_5237;
})();
var statearr_5238_6388 = state_4955__$1;
(statearr_5238_6388[(2)] = null);

(statearr_5238_6388[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (156))){
var inst_4916 = (state_4955[(2)]);
var inst_4917 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4918 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_4919 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4918,inst_4916];
var inst_4920 = cljs.core.PersistentHashMap.fromArrays(inst_4917,inst_4919);
var inst_4921 = cljs.test.do_report.call(null,inst_4920);
var state_4955__$1 = state_4955;
var statearr_5239_6389 = state_4955__$1;
(statearr_5239_6389[(2)] = inst_4921);

(statearr_5239_6389[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (29))){
var inst_4441 = (state_4955[(54)]);
var inst_4441__$1 = (state_4955[(2)]);
var inst_4442 = (inst_4441__$1 instanceof cljs.core.ExceptionInfo);
var inst_4443 = cljs.core.ex_data.call(null,inst_4441__$1);
var inst_4444 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4443);
var inst_4445 = cljs.core._EQ_.call(null,inst_4444,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4446 = ((inst_4442) && (inst_4445));
var state_4955__$1 = (function (){var statearr_5240 = state_4955;
(statearr_5240[(54)] = inst_4441__$1);

return statearr_5240;
})();
if(cljs.core.truth_(inst_4446)){
var statearr_5241_6390 = state_4955__$1;
(statearr_5241_6390[(1)] = (30));

} else {
var statearr_5242_6391 = state_4955__$1;
(statearr_5242_6391[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (61))){
var inst_4569 = (state_4955[(50)]);
var state_4955__$1 = state_4955;
var statearr_5243_6392 = state_4955__$1;
(statearr_5243_6392[(2)] = inst_4569);

(statearr_5243_6392[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (93))){
var inst_4680 = (state_4955[(2)]);
var inst_4681 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4682 = true;
var inst_4683 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_4682,inst_4680];
var inst_4684 = cljs.core.PersistentHashMap.fromArrays(inst_4681,inst_4683);
var inst_4685 = cljs.test.do_report.call(null,inst_4684);
var state_4955__$1 = state_4955;
var statearr_5245_6393 = state_4955__$1;
(statearr_5245_6393[(2)] = inst_4685);

(statearr_5245_6393[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (125))){
var _ = (function (){var statearr_5246 = state_4955;
(statearr_5246[(4)] = cljs.core.cons.call(null,(128),(state_4955[(4)])));

return statearr_5246;
})();
var inst_4817 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4818 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_4819 = cljs.core.PersistentHashMap.fromArrays(inst_4817,inst_4818);
var inst_4820 = cljs.test.do_report.call(null,inst_4819);
var ___$1 = (function (){var statearr_5247 = state_4955;
(statearr_5247[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5247;
})();
var state_4955__$1 = state_4955;
var statearr_5248_6394 = state_4955__$1;
(statearr_5248_6394[(2)] = inst_4820);

(statearr_5248_6394[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (157))){
var _ = (function (){var statearr_5249 = state_4955;
(statearr_5249[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5249;
})();
var state_4955__$1 = state_4955;
var ex5244 = (state_4955__$1[(2)]);
var statearr_5250_6395 = state_4955__$1;
(statearr_5250_6395[(5)] = ex5244);


var statearr_5251_6396 = state_4955__$1;
(statearr_5251_6396[(1)] = (156));

(statearr_5251_6396[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (30))){
var inst_4441 = (state_4955[(54)]);
var inst_4448 = (function(){throw inst_4441})();
var state_4955__$1 = state_4955;
var statearr_5253_6397 = state_4955__$1;
(statearr_5253_6397[(2)] = inst_4448);

(statearr_5253_6397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (62))){
var inst_4580 = (state_4955[(15)]);
var inst_4579 = (state_4955[(2)]);
var inst_4580__$1 = cljs.core.nth.call(null,inst_4579,(0),null);
var inst_4582 = (inst_4580__$1 == null);
var inst_4583 = cljs.core.not.call(null,inst_4582);
var state_4955__$1 = (function (){var statearr_5254 = state_4955;
(statearr_5254[(15)] = inst_4580__$1);

return statearr_5254;
})();
if(inst_4583){
var statearr_5255_6398 = state_4955__$1;
(statearr_5255_6398[(1)] = (63));

} else {
var statearr_5256_6399 = state_4955__$1;
(statearr_5256_6399[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (94))){
var _ = (function (){var statearr_5257 = state_4955;
(statearr_5257[(4)] = cljs.core.rest.call(null,(state_4955[(4)])));

return statearr_5257;
})();
var state_4955__$1 = state_4955;
var ex5252 = (state_4955__$1[(2)]);
var statearr_5258_6400 = state_4955__$1;
(statearr_5258_6400[(5)] = ex5252);


var statearr_5259_6401 = state_4955__$1;
(statearr_5259_6401[(1)] = (93));

(statearr_5259_6401[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (126))){
var inst_4823 = (state_4955[(2)]);
var state_4955__$1 = state_4955;
var statearr_5260_6402 = state_4955__$1;
(statearr_5260_6402[(2)] = inst_4823);

(statearr_5260_6402[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (158))){
var inst_4928 = (state_4955[(49)]);
var inst_4931 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4932 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_4933 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4928);
var inst_4934 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4932,inst_4933];
var inst_4935 = cljs.core.PersistentHashMap.fromArrays(inst_4931,inst_4934);
var inst_4936 = cljs.test.do_report.call(null,inst_4935);
var state_4955__$1 = state_4955;
var statearr_5261_6403 = state_4955__$1;
(statearr_5261_6403[(2)] = inst_4936);

(statearr_5261_6403[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (31))){
var inst_4441 = (state_4955[(54)]);
var state_4955__$1 = state_4955;
var statearr_5262_6404 = state_4955__$1;
(statearr_5262_6404[(2)] = inst_4441);

(statearr_5262_6404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (63))){
var inst_4580 = (state_4955[(15)]);
var inst_4585 = inst_4580.cljs$lang$protocol_mask$partition0$;
var inst_4586 = (inst_4585 & (64));
var inst_4587 = inst_4580.cljs$core$ISeq$;
var inst_4588 = (cljs.core.PROTOCOL_SENTINEL === inst_4587);
var inst_4589 = ((inst_4586) || (inst_4588));
var state_4955__$1 = state_4955;
if(cljs.core.truth_(inst_4589)){
var statearr_5263_6405 = state_4955__$1;
(statearr_5263_6405[(1)] = (66));

} else {
var statearr_5264_6406 = state_4955__$1;
(statearr_5264_6406[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (95))){
var inst_4692 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4693 = true;
var inst_4694 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_4693,true];
var inst_4695 = cljs.core.PersistentHashMap.fromArrays(inst_4692,inst_4694);
var inst_4696 = cljs.test.do_report.call(null,inst_4695);
var state_4955__$1 = state_4955;
var statearr_5265_6407 = state_4955__$1;
(statearr_5265_6407[(2)] = inst_4696);

(statearr_5265_6407[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (127))){
var inst_4806 = (state_4955[(2)]);
var inst_4807 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4808 = null;
var inst_4809 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_4808,inst_4806];
var inst_4810 = cljs.core.PersistentHashMap.fromArrays(inst_4807,inst_4809);
var inst_4811 = cljs.test.do_report.call(null,inst_4810);
var state_4955__$1 = state_4955;
var statearr_5266_6408 = state_4955__$1;
(statearr_5266_6408[(2)] = inst_4811);

(statearr_5266_6408[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4956 === (159))){
var inst_4928 = (state_4955[(49)]);
var inst_4938 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4939 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_4940 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4941 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4942 = cljs.core.cons.call(null,inst_4941,inst_4928);
var inst_4943 = (new cljs.core.List(null,inst_4942,null,(1),null));
var inst_4944 = (new cljs.core.List(null,inst_4940,inst_4943,(2),null));
var inst_4945 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4939,inst_4944];
var inst_4946 = cljs.core.PersistentHashMap.fromArrays(inst_4938,inst_4945);
var inst_4947 = cljs.test.do_report.call(null,inst_4946);
var state_4955__$1 = state_4955;
var statearr_5267_6409 = state_4955__$1;
(statearr_5267_6409[(2)] = inst_4947);

(statearr_5267_6409[(1)] = (160));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_5268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5268[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_5268[(1)] = (1));

return statearr_5268;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_4955){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_4955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e5269){var ex__18__auto__ = e5269;
var statearr_5270_6410 = state_4955;
(statearr_5270_6410[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_4955[(4)]))){
var statearr_5271_6411 = state_4955;
(statearr_5271_6411[(1)] = cljs.core.first.call(null,(state_4955[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__6412 = state_4955;
state_4955 = G__6412;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_4955){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_4955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_5272 = f__20__auto__.call(null);
(statearr_5272[(6)] = c__19__auto__);

return statearr_5272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals4321.prototype.apply = (function (self__,args4324){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args4324)));
});

e2e.proposals.t_e2e$proposals4321.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_5903){
var state_val_5904 = (state_5903[(1)]);
if((state_val_5904 === (32))){
var inst_5399 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5906 = state_5903;
(statearr_5906[(7)] = inst_5399);

return statearr_5906;
})();
var statearr_5907_6413 = state_5903__$1;
(statearr_5907_6413[(2)] = null);

(statearr_5907_6413[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (64))){
var state_5903__$1 = state_5903;
var statearr_5908_6414 = state_5903__$1;
(statearr_5908_6414[(2)] = false);

(statearr_5908_6414[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (96))){
var inst_5646 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5647 = true;
var inst_5648 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_5647,true];
var inst_5649 = cljs.core.PersistentHashMap.fromArrays(inst_5646,inst_5648);
var inst_5650 = cljs.test.do_report.call(null,inst_5649);
var state_5903__$1 = state_5903;
var statearr_5909_6415 = state_5903__$1;
(statearr_5909_6415[(2)] = inst_5650);

(statearr_5909_6415[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (128))){
var _ = (function (){var statearr_5910 = state_5903;
(statearr_5910[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5910;
})();
var state_5903__$1 = state_5903;
var ex5905 = (state_5903__$1[(2)]);
var statearr_5911_6416 = state_5903__$1;
(statearr_5911_6416[(5)] = ex5905);


var statearr_5912_6417 = state_5903__$1;
(statearr_5912_6417[(1)] = (127));

(statearr_5912_6417[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (160))){
var inst_5877 = (state_5903[(8)]);
var inst_5897 = (state_5903[(2)]);
var _ = (function (){var statearr_5913 = state_5903;
(statearr_5913[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5913;
})();
var state_5903__$1 = (function (){var statearr_5914 = state_5903;
(statearr_5914[(9)] = inst_5897);

return statearr_5914;
})();
var statearr_5915_6418 = state_5903__$1;
(statearr_5915_6418[(2)] = inst_5877);

(statearr_5915_6418[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (1))){
var state_5903__$1 = state_5903;
var statearr_5916_6419 = state_5903__$1;
(statearr_5916_6419[(2)] = null);

(statearr_5916_6419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (33))){
var _ = (function (){var statearr_5917 = state_5903;
(statearr_5917[(4)] = cljs.core.cons.call(null,(36),(state_5903[(4)])));

return statearr_5917;
})();
var state_5903__$1 = state_5903;
var statearr_5918_6420 = state_5903__$1;
(statearr_5918_6420[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (65))){
var inst_5544 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5544)){
var statearr_5921_6421 = state_5903__$1;
(statearr_5921_6421[(1)] = (69));

} else {
var statearr_5922_6422 = state_5903__$1;
(statearr_5922_6422[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (97))){
var inst_5652 = (state_5903[(2)]);
var _ = (function (){var statearr_5923 = state_5903;
(statearr_5923[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5923;
})();
var state_5903__$1 = (function (){var statearr_5924 = state_5903;
(statearr_5924[(10)] = inst_5652);

return statearr_5924;
})();
var statearr_5925_6423 = state_5903__$1;
(statearr_5925_6423[(2)] = true);

(statearr_5925_6423[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (129))){
var _ = (function (){var statearr_5926 = state_5903;
(statearr_5926[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5926;
})();
var state_5903__$1 = state_5903;
var ex5920 = (state_5903__$1[(2)]);
var statearr_5927_6424 = state_5903__$1;
(statearr_5927_6424[(5)] = ex5920);


if((ex5920 instanceof Error)){
var statearr_5928_6425 = state_5903__$1;
(statearr_5928_6425[(1)] = (124));

(statearr_5928_6425[(5)] = null);

} else {
throw ex5920;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (2))){
var _ = (function (){var statearr_5929 = state_5903;
(statearr_5929[(4)] = cljs.core.cons.call(null,(9),(state_5903[(4)])));

return statearr_5929;
})();
var inst_5298 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_5299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5300 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_5301 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_5302 = cljs.core.PersistentHashMap.fromArrays(inst_5300,inst_5301);
var inst_5303 = [inst_5302];
var inst_5304 = (new cljs.core.PersistentVector(null,(1),(5),inst_5299,inst_5303,null));
var inst_5305 = ["2021-01-01 12:00:00",inst_5304];
var inst_5306 = cljs.core.PersistentHashMap.fromArrays(inst_5298,inst_5305);
var inst_5307 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_5306);
var inst_5308 = cljs.core.async.interop.p__GT_c.call(null,inst_5307);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(10),inst_5308);
} else {
if((state_val_5904 === (34))){
var inst_5427 = (state_5903[(2)]);
var _ = (function (){var statearr_5930 = state_5903;
(statearr_5930[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5930;
})();
var state_5903__$1 = state_5903;
var statearr_5931_6426 = state_5903__$1;
(statearr_5931_6426[(2)] = inst_5427);

(statearr_5931_6426[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (66))){
var state_5903__$1 = state_5903;
var statearr_5932_6427 = state_5903__$1;
(statearr_5932_6427[(2)] = true);

(statearr_5932_6427[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (98))){
var inst_5666 = (state_5903[(11)]);
var inst_5666__$1 = (state_5903[(2)]);
var inst_5667 = (inst_5666__$1 instanceof cljs.core.ExceptionInfo);
var inst_5668 = cljs.core.ex_data.call(null,inst_5666__$1);
var inst_5669 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5668);
var inst_5670 = cljs.core._EQ_.call(null,inst_5669,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5671 = ((inst_5667) && (inst_5670));
var state_5903__$1 = (function (){var statearr_5933 = state_5903;
(statearr_5933[(11)] = inst_5666__$1);

return statearr_5933;
})();
if(cljs.core.truth_(inst_5671)){
var statearr_5934_6428 = state_5903__$1;
(statearr_5934_6428[(1)] = (99));

} else {
var statearr_5935_6429 = state_5903__$1;
(statearr_5935_6429[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (130))){
var inst_5781 = (state_5903[(12)]);
var inst_5781__$1 = (state_5903[(2)]);
var inst_5782 = (inst_5781__$1 instanceof cljs.core.ExceptionInfo);
var inst_5783 = cljs.core.ex_data.call(null,inst_5781__$1);
var inst_5784 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5783);
var inst_5785 = cljs.core._EQ_.call(null,inst_5784,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5786 = ((inst_5782) && (inst_5785));
var state_5903__$1 = (function (){var statearr_5936 = state_5903;
(statearr_5936[(12)] = inst_5781__$1);

return statearr_5936;
})();
if(cljs.core.truth_(inst_5786)){
var statearr_5937_6430 = state_5903__$1;
(statearr_5937_6430[(1)] = (131));

} else {
var statearr_5938_6431 = state_5903__$1;
(statearr_5938_6431[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (3))){
var inst_5351 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5939 = state_5903;
(statearr_5939[(13)] = inst_5351);

return statearr_5939;
})();
var statearr_5940_6432 = state_5903__$1;
(statearr_5940_6432[(2)] = null);

(statearr_5940_6432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (35))){
var inst_5400 = (state_5903[(2)]);
var inst_5401 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5402 = true;
var inst_5403 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5402,inst_5400];
var inst_5404 = cljs.core.PersistentHashMap.fromArrays(inst_5401,inst_5403);
var inst_5405 = cljs.test.do_report.call(null,inst_5404);
var state_5903__$1 = state_5903;
var statearr_5941_6433 = state_5903__$1;
(statearr_5941_6433[(2)] = inst_5405);

(statearr_5941_6433[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (67))){
var state_5903__$1 = state_5903;
var statearr_5942_6434 = state_5903__$1;
(statearr_5942_6434[(2)] = false);

(statearr_5942_6434[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (99))){
var inst_5666 = (state_5903[(11)]);
var inst_5673 = (function(){throw inst_5666})();
var state_5903__$1 = state_5903;
var statearr_5943_6435 = state_5903__$1;
(statearr_5943_6435[(2)] = inst_5673);

(statearr_5943_6435[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (131))){
var inst_5781 = (state_5903[(12)]);
var inst_5788 = (function(){throw inst_5781})();
var state_5903__$1 = state_5903;
var statearr_5945_6436 = state_5903__$1;
(statearr_5945_6436[(2)] = inst_5788);

(statearr_5945_6436[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (4))){
var inst_5273 = (state_5903[(2)]);
var inst_5274 = cljs.core.prn.call(null,"test failed with ",inst_5273);
var state_5903__$1 = (function (){var statearr_5946 = state_5903;
(statearr_5946[(14)] = inst_5274);

return statearr_5946;
})();
var statearr_5947_6437 = state_5903__$1;
(statearr_5947_6437[(2)] = null);

(statearr_5947_6437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (36))){
var _ = (function (){var statearr_5948 = state_5903;
(statearr_5948[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5948;
})();
var state_5903__$1 = state_5903;
var ex5944 = (state_5903__$1[(2)]);
var statearr_5949_6438 = state_5903__$1;
(statearr_5949_6438[(5)] = ex5944);


var statearr_5950_6439 = state_5903__$1;
(statearr_5950_6439[(1)] = (35));

(statearr_5950_6439[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (68))){
var inst_5541 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_5951_6440 = state_5903__$1;
(statearr_5951_6440[(2)] = inst_5541);

(statearr_5951_6440[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (100))){
var inst_5666 = (state_5903[(11)]);
var state_5903__$1 = state_5903;
var statearr_5952_6441 = state_5903__$1;
(statearr_5952_6441[(2)] = inst_5666);

(statearr_5952_6441[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (132))){
var inst_5781 = (state_5903[(12)]);
var state_5903__$1 = state_5903;
var statearr_5953_6442 = state_5903__$1;
(statearr_5953_6442[(2)] = inst_5781);

(statearr_5953_6442[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (5))){
var _ = (function (){var statearr_5954 = state_5903;
(statearr_5954[(4)] = cljs.core.cons.call(null,(8),(state_5903[(4)])));

return statearr_5954;
})();
var inst_5286 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_5287 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_5288 = cljs.core.PersistentHashMap.fromArrays(inst_5286,inst_5287);
var inst_5289 = cljs.test.do_report.call(null,inst_5288);
var ___$1 = (function (){var statearr_5955 = state_5903;
(statearr_5955[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5955;
})();
var state_5903__$1 = state_5903;
var statearr_5956_6443 = state_5903__$1;
(statearr_5956_6443[(2)] = inst_5289);

(statearr_5956_6443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (37))){
var inst_5412 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5413 = true;
var inst_5414 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5413,true];
var inst_5415 = cljs.core.PersistentHashMap.fromArrays(inst_5412,inst_5414);
var inst_5416 = cljs.test.do_report.call(null,inst_5415);
var state_5903__$1 = state_5903;
var statearr_5957_6444 = state_5903__$1;
(statearr_5957_6444[(2)] = inst_5416);

(statearr_5957_6444[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (69))){
var inst_5528 = (state_5903[(15)]);
var inst_5546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5528);
var state_5903__$1 = state_5903;
var statearr_5958_6445 = state_5903__$1;
(statearr_5958_6445[(2)] = inst_5546);

(statearr_5958_6445[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (101))){
var inst_5677 = (state_5903[(16)]);
var inst_5676 = (state_5903[(2)]);
var inst_5677__$1 = cljs.core.nth.call(null,inst_5676,(0),null);
var inst_5679 = (inst_5677__$1 == null);
var inst_5680 = cljs.core.not.call(null,inst_5679);
var state_5903__$1 = (function (){var statearr_5959 = state_5903;
(statearr_5959[(16)] = inst_5677__$1);

return statearr_5959;
})();
if(inst_5680){
var statearr_5960_6446 = state_5903__$1;
(statearr_5960_6446[(1)] = (102));

} else {
var statearr_5961_6447 = state_5903__$1;
(statearr_5961_6447[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (133))){
var inst_5791 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5962 = state_5903;
(statearr_5962[(17)] = inst_5791);

return statearr_5962;
})();
var statearr_5963_6448 = state_5903__$1;
(statearr_5963_6448[(2)] = null);

(statearr_5963_6448[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (6))){
var inst_5292 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_5964_6449 = state_5903__$1;
(statearr_5964_6449[(2)] = inst_5292);

(statearr_5964_6449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (38))){
var inst_5418 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5419 = true;
var inst_5420 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5419,true];
var inst_5421 = cljs.core.PersistentHashMap.fromArrays(inst_5418,inst_5420);
var inst_5422 = cljs.test.do_report.call(null,inst_5421);
var state_5903__$1 = state_5903;
var statearr_5965_6450 = state_5903__$1;
(statearr_5965_6450[(2)] = inst_5422);

(statearr_5965_6450[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (70))){
var inst_5528 = (state_5903[(15)]);
var state_5903__$1 = state_5903;
var statearr_5966_6451 = state_5903__$1;
(statearr_5966_6451[(2)] = inst_5528);

(statearr_5966_6451[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (102))){
var inst_5677 = (state_5903[(16)]);
var inst_5682 = inst_5677.cljs$lang$protocol_mask$partition0$;
var inst_5683 = (inst_5682 & (64));
var inst_5684 = inst_5677.cljs$core$ISeq$;
var inst_5685 = (cljs.core.PROTOCOL_SENTINEL === inst_5684);
var inst_5686 = ((inst_5683) || (inst_5685));
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5686)){
var statearr_5967_6452 = state_5903__$1;
(statearr_5967_6452[(1)] = (105));

} else {
var statearr_5968_6453 = state_5903__$1;
(statearr_5968_6453[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (134))){
var _ = (function (){var statearr_5969 = state_5903;
(statearr_5969[(4)] = cljs.core.cons.call(null,(137),(state_5903[(4)])));

return statearr_5969;
})();
var state_5903__$1 = state_5903;
var statearr_5970_6454 = state_5903__$1;
(statearr_5970_6454[(1)] = (138));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (7))){
var inst_5275 = (state_5903[(2)]);
var inst_5276 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5277 = null;
var inst_5278 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5277,inst_5275];
var inst_5279 = cljs.core.PersistentHashMap.fromArrays(inst_5276,inst_5278);
var inst_5280 = cljs.test.do_report.call(null,inst_5279);
var state_5903__$1 = state_5903;
var statearr_5972_6455 = state_5903__$1;
(statearr_5972_6455[(2)] = inst_5280);

(statearr_5972_6455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (39))){
var inst_5424 = (state_5903[(2)]);
var _ = (function (){var statearr_5973 = state_5903;
(statearr_5973[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5973;
})();
var state_5903__$1 = (function (){var statearr_5974 = state_5903;
(statearr_5974[(18)] = inst_5424);

return statearr_5974;
})();
var statearr_5975_6456 = state_5903__$1;
(statearr_5975_6456[(2)] = true);

(statearr_5975_6456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (71))){
var inst_5549 = (state_5903[(2)]);
var inst_5550 = cljs.core.get.call(null,inst_5549,"current_cycle");
var state_5903__$1 = (function (){var statearr_5976 = state_5903;
(statearr_5976[(19)] = inst_5550);

return statearr_5976;
})();
var statearr_5977_6457 = state_5903__$1;
(statearr_5977_6457[(2)] = null);

(statearr_5977_6457[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (103))){
var state_5903__$1 = state_5903;
var statearr_5979_6458 = state_5903__$1;
(statearr_5979_6458[(2)] = false);

(statearr_5979_6458[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (135))){
var inst_5819 = (state_5903[(2)]);
var _ = (function (){var statearr_5980 = state_5903;
(statearr_5980[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5980;
})();
var state_5903__$1 = state_5903;
var statearr_5981_6459 = state_5903__$1;
(statearr_5981_6459[(2)] = inst_5819);

(statearr_5981_6459[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (8))){
var _ = (function (){var statearr_5982 = state_5903;
(statearr_5982[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5982;
})();
var state_5903__$1 = state_5903;
var ex5978 = (state_5903__$1[(2)]);
var statearr_5983_6460 = state_5903__$1;
(statearr_5983_6460[(5)] = ex5978);


var statearr_5984_6461 = state_5903__$1;
(statearr_5984_6461[(1)] = (7));

(statearr_5984_6461[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (40))){
var _ = (function (){var statearr_5985 = state_5903;
(statearr_5985[(4)] = cljs.core.cons.call(null,(47),(state_5903[(4)])));

return statearr_5985;
})();
var inst_5456 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_5457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5458 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_5459 = ["326000.2000 EFX",e2e.proposals.token_acc];
var inst_5460 = cljs.core.PersistentHashMap.fromArrays(inst_5458,inst_5459);
var inst_5461 = [inst_5460];
var inst_5462 = (new cljs.core.PersistentVector(null,(1),(5),inst_5457,inst_5461,null));
var inst_5463 = ["2021-01-01 12:00:00",inst_5462];
var inst_5464 = cljs.core.PersistentHashMap.fromArrays(inst_5456,inst_5463);
var inst_5465 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_5464);
var inst_5466 = cljs.core.async.interop.p__GT_c.call(null,inst_5465);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(48),inst_5466);
} else {
if((state_val_5904 === (72))){
var inst_5550 = (state_5903[(19)]);
var inst_5563 = (state_5903[(20)]);
var inst_5564 = (state_5903[(21)]);
var _ = (function (){var statearr_5986 = state_5903;
(statearr_5986[(4)] = cljs.core.cons.call(null,(75),(state_5903[(4)])));

return statearr_5986;
})();
var inst_5562 = (new cljs.core.List(null,(0),null,(1),null));
var inst_5563__$1 = (new cljs.core.List(null,inst_5550,inst_5562,(2),null));
var inst_5564__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5563__$1);
var state_5903__$1 = (function (){var statearr_5987 = state_5903;
(statearr_5987[(20)] = inst_5563__$1);

(statearr_5987[(21)] = inst_5564__$1);

return statearr_5987;
})();
if(cljs.core.truth_(inst_5564__$1)){
var statearr_5988_6462 = state_5903__$1;
(statearr_5988_6462[(1)] = (76));

} else {
var statearr_5989_6463 = state_5903__$1;
(statearr_5989_6463[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (104))){
var inst_5693 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5693)){
var statearr_5991_6464 = state_5903__$1;
(statearr_5991_6464[(1)] = (108));

} else {
var statearr_5992_6465 = state_5903__$1;
(statearr_5992_6465[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (136))){
var inst_5792 = (state_5903[(2)]);
var inst_5793 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5794 = true;
var inst_5795 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_5794,inst_5792];
var inst_5796 = cljs.core.PersistentHashMap.fromArrays(inst_5793,inst_5795);
var inst_5797 = cljs.test.do_report.call(null,inst_5796);
var state_5903__$1 = state_5903;
var statearr_5993_6466 = state_5903__$1;
(statearr_5993_6466[(2)] = inst_5797);

(statearr_5993_6466[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (9))){
var _ = (function (){var statearr_5994 = state_5903;
(statearr_5994[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_5994;
})();
var state_5903__$1 = state_5903;
var ex5990 = (state_5903__$1[(2)]);
var statearr_5995_6467 = state_5903__$1;
(statearr_5995_6467[(5)] = ex5990);


if((ex5990 instanceof Error)){
var statearr_5996_6468 = state_5903__$1;
(statearr_5996_6468[(1)] = (4));

(statearr_5996_6468[(5)] = null);

} else {
throw ex5990;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (41))){
var inst_5509 = (state_5903[(2)]);
var inst_5514 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_5515 = cljs.core.async.interop.p__GT_c.call(null,inst_5514);
var state_5903__$1 = (function (){var statearr_5997 = state_5903;
(statearr_5997[(22)] = inst_5509);

return statearr_5997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(59),inst_5515);
} else {
if((state_val_5904 === (73))){
var inst_5587 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_5999 = state_5903;
(statearr_5999[(23)] = inst_5587);

return statearr_5999;
})();
var statearr_6000_6469 = state_5903__$1;
(statearr_6000_6469[(2)] = null);

(statearr_6000_6469[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (105))){
var state_5903__$1 = state_5903;
var statearr_6001_6470 = state_5903__$1;
(statearr_6001_6470[(2)] = true);

(statearr_6001_6470[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (137))){
var _ = (function (){var statearr_6002 = state_5903;
(statearr_6002[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6002;
})();
var state_5903__$1 = state_5903;
var ex5998 = (state_5903__$1[(2)]);
var statearr_6003_6471 = state_5903__$1;
(statearr_6003_6471[(5)] = ex5998);


var statearr_6004_6472 = state_5903__$1;
(statearr_6004_6472[(1)] = (136));

(statearr_6004_6472[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (10))){
var inst_5310 = (state_5903[(24)]);
var inst_5310__$1 = (state_5903[(2)]);
var inst_5311 = (inst_5310__$1 instanceof cljs.core.ExceptionInfo);
var inst_5312 = cljs.core.ex_data.call(null,inst_5310__$1);
var inst_5313 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5312);
var inst_5314 = cljs.core._EQ_.call(null,inst_5313,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5315 = ((inst_5311) && (inst_5314));
var state_5903__$1 = (function (){var statearr_6005 = state_5903;
(statearr_6005[(24)] = inst_5310__$1);

return statearr_6005;
})();
if(cljs.core.truth_(inst_5315)){
var statearr_6006_6473 = state_5903__$1;
(statearr_6006_6473[(1)] = (11));

} else {
var statearr_6007_6474 = state_5903__$1;
(statearr_6007_6474[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (42))){
var inst_5431 = (state_5903[(2)]);
var inst_5432 = cljs.core.prn.call(null,"test failed with ",inst_5431);
var state_5903__$1 = (function (){var statearr_6008 = state_5903;
(statearr_6008[(25)] = inst_5432);

return statearr_6008;
})();
var statearr_6009_6475 = state_5903__$1;
(statearr_6009_6475[(2)] = null);

(statearr_6009_6475[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (74))){
var inst_5551 = (state_5903[(2)]);
var inst_5552 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5553 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_5554 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5553,inst_5551];
var inst_5555 = cljs.core.PersistentHashMap.fromArrays(inst_5552,inst_5554);
var inst_5556 = cljs.test.do_report.call(null,inst_5555);
var state_5903__$1 = state_5903;
var statearr_6010_6476 = state_5903__$1;
(statearr_6010_6476[(2)] = inst_5556);

(statearr_6010_6476[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (106))){
var state_5903__$1 = state_5903;
var statearr_6011_6477 = state_5903__$1;
(statearr_6011_6477[(2)] = false);

(statearr_6011_6477[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (138))){
var inst_5804 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5805 = true;
var inst_5806 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_5805,true];
var inst_5807 = cljs.core.PersistentHashMap.fromArrays(inst_5804,inst_5806);
var inst_5808 = cljs.test.do_report.call(null,inst_5807);
var state_5903__$1 = state_5903;
var statearr_6012_6478 = state_5903__$1;
(statearr_6012_6478[(2)] = inst_5808);

(statearr_6012_6478[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (11))){
var inst_5310 = (state_5903[(24)]);
var inst_5317 = (function(){throw inst_5310})();
var state_5903__$1 = state_5903;
var statearr_6014_6479 = state_5903__$1;
(statearr_6014_6479[(2)] = inst_5317);

(statearr_6014_6479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (43))){
var _ = (function (){var statearr_6015 = state_5903;
(statearr_6015[(4)] = cljs.core.cons.call(null,(46),(state_5903[(4)])));

return statearr_6015;
})();
var inst_5444 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_5445 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_5446 = cljs.core.PersistentHashMap.fromArrays(inst_5444,inst_5445);
var inst_5447 = cljs.test.do_report.call(null,inst_5446);
var ___$1 = (function (){var statearr_6016 = state_5903;
(statearr_6016[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6016;
})();
var state_5903__$1 = state_5903;
var statearr_6017_6480 = state_5903__$1;
(statearr_6017_6480[(2)] = inst_5447);

(statearr_6017_6480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (75))){
var _ = (function (){var statearr_6018 = state_5903;
(statearr_6018[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6018;
})();
var state_5903__$1 = state_5903;
var ex6013 = (state_5903__$1[(2)]);
var statearr_6019_6481 = state_5903__$1;
(statearr_6019_6481[(5)] = ex6013);


var statearr_6020_6482 = state_5903__$1;
(statearr_6020_6482[(1)] = (74));

(statearr_6020_6482[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (107))){
var inst_5690 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6021_6483 = state_5903__$1;
(statearr_6021_6483[(2)] = inst_5690);

(statearr_6021_6483[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (139))){
var inst_5810 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5811 = true;
var inst_5812 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle",inst_5811,true];
var inst_5813 = cljs.core.PersistentHashMap.fromArrays(inst_5810,inst_5812);
var inst_5814 = cljs.test.do_report.call(null,inst_5813);
var state_5903__$1 = state_5903;
var statearr_6022_6484 = state_5903__$1;
(statearr_6022_6484[(2)] = inst_5814);

(statearr_6022_6484[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (12))){
var inst_5310 = (state_5903[(24)]);
var state_5903__$1 = state_5903;
var statearr_6023_6485 = state_5903__$1;
(statearr_6023_6485[(2)] = inst_5310);

(statearr_6023_6485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (44))){
var inst_5450 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6024_6486 = state_5903__$1;
(statearr_6024_6486[(2)] = inst_5450);

(statearr_6024_6486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (76))){
var inst_5563 = (state_5903[(20)]);
var inst_5566 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5567 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_5568 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5563);
var inst_5569 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5567,inst_5568];
var inst_5570 = cljs.core.PersistentHashMap.fromArrays(inst_5566,inst_5569);
var inst_5571 = cljs.test.do_report.call(null,inst_5570);
var state_5903__$1 = state_5903;
var statearr_6025_6487 = state_5903__$1;
(statearr_6025_6487[(2)] = inst_5571);

(statearr_6025_6487[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (108))){
var inst_5677 = (state_5903[(16)]);
var inst_5695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5677);
var state_5903__$1 = state_5903;
var statearr_6026_6488 = state_5903__$1;
(statearr_6026_6488[(2)] = inst_5695);

(statearr_6026_6488[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (140))){
var inst_5816 = (state_5903[(2)]);
var _ = (function (){var statearr_6027 = state_5903;
(statearr_6027[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6027;
})();
var state_5903__$1 = (function (){var statearr_6028 = state_5903;
(statearr_6028[(26)] = inst_5816);

return statearr_6028;
})();
var statearr_6029_6489 = state_5903__$1;
(statearr_6029_6489[(2)] = true);

(statearr_6029_6489[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (13))){
var inst_5320 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_6030 = state_5903;
(statearr_6030[(27)] = inst_5320);

return statearr_6030;
})();
var statearr_6031_6490 = state_5903__$1;
(statearr_6031_6490[(2)] = null);

(statearr_6031_6490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (45))){
var inst_5433 = (state_5903[(2)]);
var inst_5434 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5435 = null;
var inst_5436 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5435,inst_5433];
var inst_5437 = cljs.core.PersistentHashMap.fromArrays(inst_5434,inst_5436);
var inst_5438 = cljs.test.do_report.call(null,inst_5437);
var state_5903__$1 = state_5903;
var statearr_6032_6491 = state_5903__$1;
(statearr_6032_6491[(2)] = inst_5438);

(statearr_6032_6491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (77))){
var inst_5563 = (state_5903[(20)]);
var inst_5573 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5574 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(0));
var inst_5575 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5576 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5577 = cljs.core.cons.call(null,inst_5576,inst_5563);
var inst_5578 = (new cljs.core.List(null,inst_5577,null,(1),null));
var inst_5579 = (new cljs.core.List(null,inst_5575,inst_5578,(2),null));
var inst_5580 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5574,inst_5579];
var inst_5581 = cljs.core.PersistentHashMap.fromArrays(inst_5573,inst_5580);
var inst_5582 = cljs.test.do_report.call(null,inst_5581);
var state_5903__$1 = state_5903;
var statearr_6033_6492 = state_5903__$1;
(statearr_6033_6492[(2)] = inst_5582);

(statearr_6033_6492[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (109))){
var inst_5677 = (state_5903[(16)]);
var state_5903__$1 = state_5903;
var statearr_6034_6493 = state_5903__$1;
(statearr_6034_6493[(2)] = inst_5677);

(statearr_6034_6493[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (141))){
var inst_5830 = (state_5903[(28)]);
var inst_5830__$1 = (state_5903[(2)]);
var inst_5831 = (inst_5830__$1 instanceof cljs.core.ExceptionInfo);
var inst_5832 = cljs.core.ex_data.call(null,inst_5830__$1);
var inst_5833 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5832);
var inst_5834 = cljs.core._EQ_.call(null,inst_5833,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5835 = ((inst_5831) && (inst_5834));
var state_5903__$1 = (function (){var statearr_6036 = state_5903;
(statearr_6036[(28)] = inst_5830__$1);

return statearr_6036;
})();
if(cljs.core.truth_(inst_5835)){
var statearr_6037_6494 = state_5903__$1;
(statearr_6037_6494[(1)] = (142));

} else {
var statearr_6038_6495 = state_5903__$1;
(statearr_6038_6495[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (14))){
var _ = (function (){var statearr_6039 = state_5903;
(statearr_6039[(4)] = cljs.core.cons.call(null,(17),(state_5903[(4)])));

return statearr_6039;
})();
var state_5903__$1 = state_5903;
var statearr_6040_6496 = state_5903__$1;
(statearr_6040_6496[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (46))){
var _ = (function (){var statearr_6042 = state_5903;
(statearr_6042[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6042;
})();
var state_5903__$1 = state_5903;
var ex6035 = (state_5903__$1[(2)]);
var statearr_6043_6497 = state_5903__$1;
(statearr_6043_6497[(5)] = ex6035);


var statearr_6044_6498 = state_5903__$1;
(statearr_6044_6498[(1)] = (45));

(statearr_6044_6498[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (78))){
var inst_5564 = (state_5903[(21)]);
var inst_5584 = (state_5903[(2)]);
var _ = (function (){var statearr_6045 = state_5903;
(statearr_6045[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6045;
})();
var state_5903__$1 = (function (){var statearr_6046 = state_5903;
(statearr_6046[(29)] = inst_5584);

return statearr_6046;
})();
var statearr_6047_6499 = state_5903__$1;
(statearr_6047_6499[(2)] = inst_5564);

(statearr_6047_6499[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (110))){
var inst_5698 = (state_5903[(2)]);
var inst_5699 = cljs.core.get.call(null,inst_5698,"current_cycle");
var state_5903__$1 = (function (){var statearr_6048 = state_5903;
(statearr_6048[(30)] = inst_5699);

return statearr_6048;
})();
var statearr_6049_6500 = state_5903__$1;
(statearr_6049_6500[(2)] = null);

(statearr_6049_6500[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (142))){
var inst_5830 = (state_5903[(28)]);
var inst_5837 = (function(){throw inst_5830})();
var state_5903__$1 = state_5903;
var statearr_6051_6501 = state_5903__$1;
(statearr_6051_6501[(2)] = inst_5837);

(statearr_6051_6501[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (15))){
var inst_5348 = (state_5903[(2)]);
var _ = (function (){var statearr_6052 = state_5903;
(statearr_6052[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6052;
})();
var state_5903__$1 = state_5903;
var statearr_6053_6502 = state_5903__$1;
(statearr_6053_6502[(2)] = inst_5348);

(statearr_6053_6502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (47))){
var _ = (function (){var statearr_6054 = state_5903;
(statearr_6054[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6054;
})();
var state_5903__$1 = state_5903;
var ex6050 = (state_5903__$1[(2)]);
var statearr_6055_6503 = state_5903__$1;
(statearr_6055_6503[(5)] = ex6050);


if((ex6050 instanceof Error)){
var statearr_6056_6504 = state_5903__$1;
(statearr_6056_6504[(1)] = (42));

(statearr_6056_6504[(5)] = null);

} else {
throw ex6050;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (79))){
var _ = (function (){var statearr_6057 = state_5903;
(statearr_6057[(4)] = cljs.core.cons.call(null,(86),(state_5903[(4)])));

return statearr_6057;
})();
var inst_5613 = cljs.core.PersistentHashMap.EMPTY;
var inst_5614 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_5613);
var inst_5615 = cljs.core.async.interop.p__GT_c.call(null,inst_5614);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(87),inst_5615);
} else {
if((state_val_5904 === (111))){
var inst_5699 = (state_5903[(30)]);
var inst_5712 = (state_5903[(31)]);
var inst_5713 = (state_5903[(32)]);
var _ = (function (){var statearr_6058 = state_5903;
(statearr_6058[(4)] = cljs.core.cons.call(null,(114),(state_5903[(4)])));

return statearr_6058;
})();
var inst_5711 = (new cljs.core.List(null,(1),null,(1),null));
var inst_5712__$1 = (new cljs.core.List(null,inst_5699,inst_5711,(2),null));
var inst_5713__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5712__$1);
var state_5903__$1 = (function (){var statearr_6059 = state_5903;
(statearr_6059[(31)] = inst_5712__$1);

(statearr_6059[(32)] = inst_5713__$1);

return statearr_6059;
})();
if(cljs.core.truth_(inst_5713__$1)){
var statearr_6060_6505 = state_5903__$1;
(statearr_6060_6505[(1)] = (115));

} else {
var statearr_6061_6506 = state_5903__$1;
(statearr_6061_6506[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (143))){
var inst_5830 = (state_5903[(28)]);
var state_5903__$1 = state_5903;
var statearr_6062_6507 = state_5903__$1;
(statearr_6062_6507[(2)] = inst_5830);

(statearr_6062_6507[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (16))){
var inst_5321 = (state_5903[(2)]);
var inst_5322 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5323 = true;
var inst_5324 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5323,inst_5321];
var inst_5325 = cljs.core.PersistentHashMap.fromArrays(inst_5322,inst_5324);
var inst_5326 = cljs.test.do_report.call(null,inst_5325);
var state_5903__$1 = state_5903;
var statearr_6063_6508 = state_5903__$1;
(statearr_6063_6508[(2)] = inst_5326);

(statearr_6063_6508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (48))){
var inst_5468 = (state_5903[(33)]);
var inst_5468__$1 = (state_5903[(2)]);
var inst_5469 = (inst_5468__$1 instanceof cljs.core.ExceptionInfo);
var inst_5470 = cljs.core.ex_data.call(null,inst_5468__$1);
var inst_5471 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5470);
var inst_5472 = cljs.core._EQ_.call(null,inst_5471,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5473 = ((inst_5469) && (inst_5472));
var state_5903__$1 = (function (){var statearr_6064 = state_5903;
(statearr_6064[(33)] = inst_5468__$1);

return statearr_6064;
})();
if(cljs.core.truth_(inst_5473)){
var statearr_6065_6509 = state_5903__$1;
(statearr_6065_6509[(1)] = (49));

} else {
var statearr_6066_6510 = state_5903__$1;
(statearr_6066_6510[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (80))){
var inst_5658 = (state_5903[(2)]);
var inst_5663 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_5664 = cljs.core.async.interop.p__GT_c.call(null,inst_5663);
var state_5903__$1 = (function (){var statearr_6067 = state_5903;
(statearr_6067[(34)] = inst_5658);

return statearr_6067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(98),inst_5664);
} else {
if((state_val_5904 === (112))){
var inst_5736 = (state_5903[(2)]);
var inst_5737 = Promise.resolve((1));
var inst_5738 = eos_cljs.core.wait_block.call(null,inst_5737);
var inst_5739 = cljs.core.async.interop.p__GT_c.call(null,inst_5738);
var state_5903__$1 = (function (){var statearr_6069 = state_5903;
(statearr_6069[(35)] = inst_5736);

return statearr_6069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(118),inst_5739);
} else {
if((state_val_5904 === (144))){
var inst_5841 = (state_5903[(36)]);
var inst_5840 = (state_5903[(2)]);
var inst_5841__$1 = cljs.core.nth.call(null,inst_5840,(0),null);
var inst_5843 = (inst_5841__$1 == null);
var inst_5844 = cljs.core.not.call(null,inst_5843);
var state_5903__$1 = (function (){var statearr_6070 = state_5903;
(statearr_6070[(36)] = inst_5841__$1);

return statearr_6070;
})();
if(inst_5844){
var statearr_6071_6511 = state_5903__$1;
(statearr_6071_6511[(1)] = (145));

} else {
var statearr_6072_6512 = state_5903__$1;
(statearr_6072_6512[(1)] = (146));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (17))){
var _ = (function (){var statearr_6073 = state_5903;
(statearr_6073[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6073;
})();
var state_5903__$1 = state_5903;
var ex6068 = (state_5903__$1[(2)]);
var statearr_6074_6513 = state_5903__$1;
(statearr_6074_6513[(5)] = ex6068);


var statearr_6075_6514 = state_5903__$1;
(statearr_6075_6514[(1)] = (16));

(statearr_6075_6514[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (49))){
var inst_5468 = (state_5903[(33)]);
var inst_5475 = (function(){throw inst_5468})();
var state_5903__$1 = state_5903;
var statearr_6076_6515 = state_5903__$1;
(statearr_6076_6515[(2)] = inst_5475);

(statearr_6076_6515[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (81))){
var inst_5588 = (state_5903[(2)]);
var inst_5589 = cljs.core.prn.call(null,"test failed with ",inst_5588);
var state_5903__$1 = (function (){var statearr_6077 = state_5903;
(statearr_6077[(37)] = inst_5589);

return statearr_6077;
})();
var statearr_6078_6516 = state_5903__$1;
(statearr_6078_6516[(2)] = null);

(statearr_6078_6516[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (113))){
var inst_5700 = (state_5903[(2)]);
var inst_5701 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5702 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_5703 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5702,inst_5700];
var inst_5704 = cljs.core.PersistentHashMap.fromArrays(inst_5701,inst_5703);
var inst_5705 = cljs.test.do_report.call(null,inst_5704);
var state_5903__$1 = state_5903;
var statearr_6079_6517 = state_5903__$1;
(statearr_6079_6517[(2)] = inst_5705);

(statearr_6079_6517[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (145))){
var inst_5841 = (state_5903[(36)]);
var inst_5846 = inst_5841.cljs$lang$protocol_mask$partition0$;
var inst_5847 = (inst_5846 & (64));
var inst_5848 = inst_5841.cljs$core$ISeq$;
var inst_5849 = (cljs.core.PROTOCOL_SENTINEL === inst_5848);
var inst_5850 = ((inst_5847) || (inst_5849));
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5850)){
var statearr_6080_6518 = state_5903__$1;
(statearr_6080_6518[(1)] = (148));

} else {
var statearr_6081_6519 = state_5903__$1;
(statearr_6081_6519[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (18))){
var inst_5333 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5334 = true;
var inst_5335 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5334,true];
var inst_5336 = cljs.core.PersistentHashMap.fromArrays(inst_5333,inst_5335);
var inst_5337 = cljs.test.do_report.call(null,inst_5336);
var state_5903__$1 = state_5903;
var statearr_6082_6520 = state_5903__$1;
(statearr_6082_6520[(2)] = inst_5337);

(statearr_6082_6520[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (50))){
var inst_5468 = (state_5903[(33)]);
var state_5903__$1 = state_5903;
var statearr_6084_6521 = state_5903__$1;
(statearr_6084_6521[(2)] = inst_5468);

(statearr_6084_6521[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (82))){
var _ = (function (){var statearr_6085 = state_5903;
(statearr_6085[(4)] = cljs.core.cons.call(null,(85),(state_5903[(4)])));

return statearr_6085;
})();
var inst_5601 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_5602 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_5603 = cljs.core.PersistentHashMap.fromArrays(inst_5601,inst_5602);
var inst_5604 = cljs.test.do_report.call(null,inst_5603);
var ___$1 = (function (){var statearr_6086 = state_5903;
(statearr_6086[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6086;
})();
var state_5903__$1 = state_5903;
var statearr_6087_6522 = state_5903__$1;
(statearr_6087_6522[(2)] = inst_5604);

(statearr_6087_6522[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (114))){
var _ = (function (){var statearr_6088 = state_5903;
(statearr_6088[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6088;
})();
var state_5903__$1 = state_5903;
var ex6083 = (state_5903__$1[(2)]);
var statearr_6089_6523 = state_5903__$1;
(statearr_6089_6523[(5)] = ex6083);


var statearr_6090_6524 = state_5903__$1;
(statearr_6090_6524[(1)] = (113));

(statearr_6090_6524[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (146))){
var state_5903__$1 = state_5903;
var statearr_6091_6525 = state_5903__$1;
(statearr_6091_6525[(2)] = false);

(statearr_6091_6525[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (19))){
var inst_5339 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5340 = true;
var inst_5341 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5340,true];
var inst_5342 = cljs.core.PersistentHashMap.fromArrays(inst_5339,inst_5341);
var inst_5343 = cljs.test.do_report.call(null,inst_5342);
var state_5903__$1 = state_5903;
var statearr_6092_6526 = state_5903__$1;
(statearr_6092_6526[(2)] = inst_5343);

(statearr_6092_6526[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (51))){
var inst_5478 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_6093 = state_5903;
(statearr_6093[(38)] = inst_5478);

return statearr_6093;
})();
var statearr_6094_6527 = state_5903__$1;
(statearr_6094_6527[(2)] = null);

(statearr_6094_6527[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (83))){
var inst_5607 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6095_6528 = state_5903__$1;
(statearr_6095_6528[(2)] = inst_5607);

(statearr_6095_6528[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (115))){
var inst_5712 = (state_5903[(31)]);
var inst_5715 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5716 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_5717 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5712);
var inst_5718 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5716,inst_5717];
var inst_5719 = cljs.core.PersistentHashMap.fromArrays(inst_5715,inst_5718);
var inst_5720 = cljs.test.do_report.call(null,inst_5719);
var state_5903__$1 = state_5903;
var statearr_6096_6529 = state_5903__$1;
(statearr_6096_6529[(2)] = inst_5720);

(statearr_6096_6529[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (147))){
var inst_5857 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5857)){
var statearr_6097_6530 = state_5903__$1;
(statearr_6097_6530[(1)] = (151));

} else {
var statearr_6098_6531 = state_5903__$1;
(statearr_6098_6531[(1)] = (152));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (20))){
var inst_5345 = (state_5903[(2)]);
var _ = (function (){var statearr_6099 = state_5903;
(statearr_6099[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6099;
})();
var state_5903__$1 = (function (){var statearr_6100 = state_5903;
(statearr_6100[(39)] = inst_5345);

return statearr_6100;
})();
var statearr_6101_6532 = state_5903__$1;
(statearr_6101_6532[(2)] = true);

(statearr_6101_6532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (52))){
var _ = (function (){var statearr_6102 = state_5903;
(statearr_6102[(4)] = cljs.core.cons.call(null,(55),(state_5903[(4)])));

return statearr_6102;
})();
var state_5903__$1 = state_5903;
var statearr_6103_6533 = state_5903__$1;
(statearr_6103_6533[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (84))){
var inst_5590 = (state_5903[(2)]);
var inst_5591 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5592 = null;
var inst_5593 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_5592,inst_5590];
var inst_5594 = cljs.core.PersistentHashMap.fromArrays(inst_5591,inst_5593);
var inst_5595 = cljs.test.do_report.call(null,inst_5594);
var state_5903__$1 = state_5903;
var statearr_6105_6534 = state_5903__$1;
(statearr_6105_6534[(2)] = inst_5595);

(statearr_6105_6534[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (116))){
var inst_5712 = (state_5903[(31)]);
var inst_5722 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5723 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(1));
var inst_5724 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5725 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5726 = cljs.core.cons.call(null,inst_5725,inst_5712);
var inst_5727 = (new cljs.core.List(null,inst_5726,null,(1),null));
var inst_5728 = (new cljs.core.List(null,inst_5724,inst_5727,(2),null));
var inst_5729 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5723,inst_5728];
var inst_5730 = cljs.core.PersistentHashMap.fromArrays(inst_5722,inst_5729);
var inst_5731 = cljs.test.do_report.call(null,inst_5730);
var state_5903__$1 = state_5903;
var statearr_6106_6535 = state_5903__$1;
(statearr_6106_6535[(2)] = inst_5731);

(statearr_6106_6535[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (148))){
var state_5903__$1 = state_5903;
var statearr_6107_6536 = state_5903__$1;
(statearr_6107_6536[(2)] = true);

(statearr_6107_6536[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (21))){
var _ = (function (){var statearr_6109 = state_5903;
(statearr_6109[(4)] = cljs.core.cons.call(null,(28),(state_5903[(4)])));

return statearr_6109;
})();
var inst_5377 = [new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_5378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5379 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_5380 = ["500.1000 EFX",e2e.proposals.token_acc];
var inst_5381 = cljs.core.PersistentHashMap.fromArrays(inst_5379,inst_5380);
var inst_5382 = [inst_5381];
var inst_5383 = (new cljs.core.PersistentVector(null,(1),(5),inst_5378,inst_5382,null));
var inst_5384 = ["2021-01-01 12:00:00",inst_5383];
var inst_5385 = cljs.core.PersistentHashMap.fromArrays(inst_5377,inst_5384);
var inst_5386 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addcycle",inst_5385);
var inst_5387 = cljs.core.async.interop.p__GT_c.call(null,inst_5386);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(29),inst_5387);
} else {
if((state_val_5904 === (53))){
var inst_5506 = (state_5903[(2)]);
var _ = (function (){var statearr_6110 = state_5903;
(statearr_6110[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6110;
})();
var state_5903__$1 = state_5903;
var statearr_6111_6537 = state_5903__$1;
(statearr_6111_6537[(2)] = inst_5506);

(statearr_6111_6537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (85))){
var _ = (function (){var statearr_6112 = state_5903;
(statearr_6112[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6112;
})();
var state_5903__$1 = state_5903;
var ex6108 = (state_5903__$1[(2)]);
var statearr_6113_6538 = state_5903__$1;
(statearr_6113_6538[(5)] = ex6108);


var statearr_6114_6539 = state_5903__$1;
(statearr_6114_6539[(1)] = (84));

(statearr_6114_6539[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (117))){
var inst_5713 = (state_5903[(32)]);
var inst_5733 = (state_5903[(2)]);
var _ = (function (){var statearr_6115 = state_5903;
(statearr_6115[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6115;
})();
var state_5903__$1 = (function (){var statearr_6116 = state_5903;
(statearr_6116[(40)] = inst_5733);

return statearr_6116;
})();
var statearr_6117_6540 = state_5903__$1;
(statearr_6117_6540[(2)] = inst_5713);

(statearr_6117_6540[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (149))){
var state_5903__$1 = state_5903;
var statearr_6118_6541 = state_5903__$1;
(statearr_6118_6541[(2)] = false);

(statearr_6118_6541[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (22))){
var inst_5430 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_6120 = state_5903;
(statearr_6120[(41)] = inst_5430);

return statearr_6120;
})();
var statearr_6121_6542 = state_5903__$1;
(statearr_6121_6542[(2)] = null);

(statearr_6121_6542[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (54))){
var inst_5479 = (state_5903[(2)]);
var inst_5480 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5481 = true;
var inst_5482 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5481,inst_5479];
var inst_5483 = cljs.core.PersistentHashMap.fromArrays(inst_5480,inst_5482);
var inst_5484 = cljs.test.do_report.call(null,inst_5483);
var state_5903__$1 = state_5903;
var statearr_6122_6543 = state_5903__$1;
(statearr_6122_6543[(2)] = inst_5484);

(statearr_6122_6543[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (86))){
var _ = (function (){var statearr_6123 = state_5903;
(statearr_6123[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6123;
})();
var state_5903__$1 = state_5903;
var ex6119 = (state_5903__$1[(2)]);
var statearr_6124_6544 = state_5903__$1;
(statearr_6124_6544[(5)] = ex6119);


if((ex6119 instanceof Error)){
var statearr_6125_6545 = state_5903__$1;
(statearr_6125_6545[(1)] = (81));

(statearr_6125_6545[(5)] = null);

} else {
throw ex6119;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (118))){
var inst_5741 = (state_5903[(42)]);
var inst_5741__$1 = (state_5903[(2)]);
var inst_5742 = (inst_5741__$1 instanceof cljs.core.ExceptionInfo);
var inst_5743 = cljs.core.ex_data.call(null,inst_5741__$1);
var inst_5744 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5743);
var inst_5745 = cljs.core._EQ_.call(null,inst_5744,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5746 = ((inst_5742) && (inst_5745));
var state_5903__$1 = (function (){var statearr_6126 = state_5903;
(statearr_6126[(42)] = inst_5741__$1);

return statearr_6126;
})();
if(cljs.core.truth_(inst_5746)){
var statearr_6127_6546 = state_5903__$1;
(statearr_6127_6546[(1)] = (119));

} else {
var statearr_6128_6547 = state_5903__$1;
(statearr_6128_6547[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (150))){
var inst_5854 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6130_6548 = state_5903__$1;
(statearr_6130_6548[(2)] = inst_5854);

(statearr_6130_6548[(1)] = (147));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (23))){
var inst_5352 = (state_5903[(2)]);
var inst_5353 = cljs.core.prn.call(null,"test failed with ",inst_5352);
var state_5903__$1 = (function (){var statearr_6131 = state_5903;
(statearr_6131[(43)] = inst_5353);

return statearr_6131;
})();
var statearr_6132_6549 = state_5903__$1;
(statearr_6132_6549[(2)] = null);

(statearr_6132_6549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (55))){
var _ = (function (){var statearr_6133 = state_5903;
(statearr_6133[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6133;
})();
var state_5903__$1 = state_5903;
var ex6129 = (state_5903__$1[(2)]);
var statearr_6134_6550 = state_5903__$1;
(statearr_6134_6550[(5)] = ex6129);


var statearr_6135_6551 = state_5903__$1;
(statearr_6135_6551[(1)] = (54));

(statearr_6135_6551[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (87))){
var inst_5617 = (state_5903[(44)]);
var inst_5617__$1 = (state_5903[(2)]);
var inst_5618 = (inst_5617__$1 instanceof cljs.core.ExceptionInfo);
var inst_5619 = cljs.core.ex_data.call(null,inst_5617__$1);
var inst_5620 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5619);
var inst_5621 = cljs.core._EQ_.call(null,inst_5620,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5622 = ((inst_5618) && (inst_5621));
var state_5903__$1 = (function (){var statearr_6136 = state_5903;
(statearr_6136[(44)] = inst_5617__$1);

return statearr_6136;
})();
if(cljs.core.truth_(inst_5622)){
var statearr_6137_6552 = state_5903__$1;
(statearr_6137_6552[(1)] = (88));

} else {
var statearr_6138_6553 = state_5903__$1;
(statearr_6138_6553[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (119))){
var inst_5741 = (state_5903[(42)]);
var inst_5748 = (function(){throw inst_5741})();
var state_5903__$1 = state_5903;
var statearr_6139_6554 = state_5903__$1;
(statearr_6139_6554[(2)] = inst_5748);

(statearr_6139_6554[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (151))){
var inst_5841 = (state_5903[(36)]);
var inst_5859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5841);
var state_5903__$1 = state_5903;
var statearr_6140_6555 = state_5903__$1;
(statearr_6140_6555[(2)] = inst_5859);

(statearr_6140_6555[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (24))){
var _ = (function (){var statearr_6141 = state_5903;
(statearr_6141[(4)] = cljs.core.cons.call(null,(27),(state_5903[(4)])));

return statearr_6141;
})();
var inst_5365 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_5366 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_5367 = cljs.core.PersistentHashMap.fromArrays(inst_5365,inst_5366);
var inst_5368 = cljs.test.do_report.call(null,inst_5367);
var ___$1 = (function (){var statearr_6142 = state_5903;
(statearr_6142[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6142;
})();
var state_5903__$1 = state_5903;
var statearr_6143_6556 = state_5903__$1;
(statearr_6143_6556[(2)] = inst_5368);

(statearr_6143_6556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (56))){
var inst_5491 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5492 = true;
var inst_5493 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5492,true];
var inst_5494 = cljs.core.PersistentHashMap.fromArrays(inst_5491,inst_5493);
var inst_5495 = cljs.test.do_report.call(null,inst_5494);
var state_5903__$1 = state_5903;
var statearr_6144_6557 = state_5903__$1;
(statearr_6144_6557[(2)] = inst_5495);

(statearr_6144_6557[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (88))){
var inst_5617 = (state_5903[(44)]);
var inst_5624 = (function(){throw inst_5617})();
var state_5903__$1 = state_5903;
var statearr_6145_6558 = state_5903__$1;
(statearr_6145_6558[(2)] = inst_5624);

(statearr_6145_6558[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (120))){
var inst_5741 = (state_5903[(42)]);
var state_5903__$1 = state_5903;
var statearr_6146_6559 = state_5903__$1;
(statearr_6146_6559[(2)] = inst_5741);

(statearr_6146_6559[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (152))){
var inst_5841 = (state_5903[(36)]);
var state_5903__$1 = state_5903;
var statearr_6147_6560 = state_5903__$1;
(statearr_6147_6560[(2)] = inst_5841);

(statearr_6147_6560[(1)] = (153));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (25))){
var inst_5371 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6148_6561 = state_5903__$1;
(statearr_6148_6561[(2)] = inst_5371);

(statearr_6148_6561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (57))){
var inst_5497 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5498 = true;
var inst_5499 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5498,true];
var inst_5500 = cljs.core.PersistentHashMap.fromArrays(inst_5497,inst_5499);
var inst_5501 = cljs.test.do_report.call(null,inst_5500);
var state_5903__$1 = state_5903;
var statearr_6149_6562 = state_5903__$1;
(statearr_6149_6562[(2)] = inst_5501);

(statearr_6149_6562[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (89))){
var inst_5617 = (state_5903[(44)]);
var state_5903__$1 = state_5903;
var statearr_6150_6563 = state_5903__$1;
(statearr_6150_6563[(2)] = inst_5617);

(statearr_6150_6563[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (121))){
var inst_5751 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_6151 = state_5903;
(statearr_6151[(45)] = inst_5751);

return statearr_6151;
})();
var statearr_6152_6564 = state_5903__$1;
(statearr_6152_6564[(2)] = null);

(statearr_6152_6564[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (153))){
var inst_5862 = (state_5903[(2)]);
var inst_5863 = cljs.core.get.call(null,inst_5862,"current_cycle");
var state_5903__$1 = (function (){var statearr_6153 = state_5903;
(statearr_6153[(46)] = inst_5863);

return statearr_6153;
})();
var statearr_6154_6565 = state_5903__$1;
(statearr_6154_6565[(2)] = null);

(statearr_6154_6565[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (26))){
var inst_5354 = (state_5903[(2)]);
var inst_5355 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5356 = null;
var inst_5357 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5356,inst_5354];
var inst_5358 = cljs.core.PersistentHashMap.fromArrays(inst_5355,inst_5357);
var inst_5359 = cljs.test.do_report.call(null,inst_5358);
var state_5903__$1 = state_5903;
var statearr_6155_6566 = state_5903__$1;
(statearr_6155_6566[(2)] = inst_5359);

(statearr_6155_6566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (58))){
var inst_5503 = (state_5903[(2)]);
var _ = (function (){var statearr_6156 = state_5903;
(statearr_6156[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6156;
})();
var state_5903__$1 = (function (){var statearr_6157 = state_5903;
(statearr_6157[(47)] = inst_5503);

return statearr_6157;
})();
var statearr_6158_6567 = state_5903__$1;
(statearr_6158_6567[(2)] = true);

(statearr_6158_6567[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (90))){
var inst_5627 = (state_5903[(2)]);
var state_5903__$1 = (function (){var statearr_6159 = state_5903;
(statearr_6159[(48)] = inst_5627);

return statearr_6159;
})();
var statearr_6160_6568 = state_5903__$1;
(statearr_6160_6568[(2)] = null);

(statearr_6160_6568[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (122))){
var _ = (function (){var statearr_6162 = state_5903;
(statearr_6162[(4)] = cljs.core.cons.call(null,(129),(state_5903[(4)])));

return statearr_6162;
})();
var inst_5777 = cljs.core.PersistentHashMap.EMPTY;
var inst_5778 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_5777);
var inst_5779 = cljs.core.async.interop.p__GT_c.call(null,inst_5778);
var state_5903__$1 = state_5903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(130),inst_5779);
} else {
if((state_val_5904 === (154))){
var inst_5863 = (state_5903[(46)]);
var inst_5876 = (state_5903[(49)]);
var inst_5877 = (state_5903[(8)]);
var _ = (function (){var statearr_6163 = state_5903;
(statearr_6163[(4)] = cljs.core.cons.call(null,(157),(state_5903[(4)])));

return statearr_6163;
})();
var inst_5875 = (new cljs.core.List(null,(2),null,(1),null));
var inst_5876__$1 = (new cljs.core.List(null,inst_5863,inst_5875,(2),null));
var inst_5877__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5876__$1);
var state_5903__$1 = (function (){var statearr_6164 = state_5903;
(statearr_6164[(49)] = inst_5876__$1);

(statearr_6164[(8)] = inst_5877__$1);

return statearr_6164;
})();
if(cljs.core.truth_(inst_5877__$1)){
var statearr_6165_6569 = state_5903__$1;
(statearr_6165_6569[(1)] = (158));

} else {
var statearr_6166_6570 = state_5903__$1;
(statearr_6166_6570[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (27))){
var _ = (function (){var statearr_6167 = state_5903;
(statearr_6167[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6167;
})();
var state_5903__$1 = state_5903;
var ex6161 = (state_5903__$1[(2)]);
var statearr_6168_6571 = state_5903__$1;
(statearr_6168_6571[(5)] = ex6161);


var statearr_6169_6572 = state_5903__$1;
(statearr_6169_6572[(1)] = (26));

(statearr_6169_6572[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (59))){
var inst_5517 = (state_5903[(50)]);
var inst_5517__$1 = (state_5903[(2)]);
var inst_5518 = (inst_5517__$1 instanceof cljs.core.ExceptionInfo);
var inst_5519 = cljs.core.ex_data.call(null,inst_5517__$1);
var inst_5520 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5519);
var inst_5521 = cljs.core._EQ_.call(null,inst_5520,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5522 = ((inst_5518) && (inst_5521));
var state_5903__$1 = (function (){var statearr_6170 = state_5903;
(statearr_6170[(50)] = inst_5517__$1);

return statearr_6170;
})();
if(cljs.core.truth_(inst_5522)){
var statearr_6171_6573 = state_5903__$1;
(statearr_6171_6573[(1)] = (60));

} else {
var statearr_6172_6574 = state_5903__$1;
(statearr_6172_6574[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (91))){
var _ = (function (){var statearr_6173 = state_5903;
(statearr_6173[(4)] = cljs.core.cons.call(null,(94),(state_5903[(4)])));

return statearr_6173;
})();
var state_5903__$1 = state_5903;
var statearr_6174_6575 = state_5903__$1;
(statearr_6174_6575[(1)] = (95));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (123))){
var inst_5822 = (state_5903[(2)]);
var inst_5827 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"config");
var inst_5828 = cljs.core.async.interop.p__GT_c.call(null,inst_5827);
var state_5903__$1 = (function (){var statearr_6177 = state_5903;
(statearr_6177[(51)] = inst_5822);

return statearr_6177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5903__$1,(141),inst_5828);
} else {
if((state_val_5904 === (155))){
var inst_5900 = (state_5903[(2)]);
var inst_5901 = done.call(null);
var state_5903__$1 = (function (){var statearr_6178 = state_5903;
(statearr_6178[(52)] = inst_5900);

return statearr_6178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5903__$1,inst_5901);
} else {
if((state_val_5904 === (28))){
var _ = (function (){var statearr_6179 = state_5903;
(statearr_6179[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6179;
})();
var state_5903__$1 = state_5903;
var ex6176 = (state_5903__$1[(2)]);
var statearr_6180_6576 = state_5903__$1;
(statearr_6180_6576[(5)] = ex6176);


if((ex6176 instanceof Error)){
var statearr_6181_6577 = state_5903__$1;
(statearr_6181_6577[(1)] = (23));

(statearr_6181_6577[(5)] = null);

} else {
throw ex6176;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (60))){
var inst_5517 = (state_5903[(50)]);
var inst_5524 = (function(){throw inst_5517})();
var state_5903__$1 = state_5903;
var statearr_6182_6578 = state_5903__$1;
(statearr_6182_6578[(2)] = inst_5524);

(statearr_6182_6578[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (92))){
var inst_5655 = (state_5903[(2)]);
var _ = (function (){var statearr_6183 = state_5903;
(statearr_6183[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6183;
})();
var state_5903__$1 = state_5903;
var statearr_6184_6579 = state_5903__$1;
(statearr_6184_6579[(2)] = inst_5655);

(statearr_6184_6579[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (124))){
var inst_5752 = (state_5903[(2)]);
var inst_5753 = cljs.core.prn.call(null,"test failed with ",inst_5752);
var state_5903__$1 = (function (){var statearr_6185 = state_5903;
(statearr_6185[(53)] = inst_5753);

return statearr_6185;
})();
var statearr_6186_6580 = state_5903__$1;
(statearr_6186_6580[(2)] = null);

(statearr_6186_6580[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (156))){
var inst_5864 = (state_5903[(2)]);
var inst_5865 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5866 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_5867 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_5866,inst_5864];
var inst_5868 = cljs.core.PersistentHashMap.fromArrays(inst_5865,inst_5867);
var inst_5869 = cljs.test.do_report.call(null,inst_5868);
var state_5903__$1 = state_5903;
var statearr_6187_6581 = state_5903__$1;
(statearr_6187_6581[(2)] = inst_5869);

(statearr_6187_6581[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (29))){
var inst_5389 = (state_5903[(54)]);
var inst_5389__$1 = (state_5903[(2)]);
var inst_5390 = (inst_5389__$1 instanceof cljs.core.ExceptionInfo);
var inst_5391 = cljs.core.ex_data.call(null,inst_5389__$1);
var inst_5392 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5391);
var inst_5393 = cljs.core._EQ_.call(null,inst_5392,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5394 = ((inst_5390) && (inst_5393));
var state_5903__$1 = (function (){var statearr_6188 = state_5903;
(statearr_6188[(54)] = inst_5389__$1);

return statearr_6188;
})();
if(cljs.core.truth_(inst_5394)){
var statearr_6189_6582 = state_5903__$1;
(statearr_6189_6582[(1)] = (30));

} else {
var statearr_6190_6583 = state_5903__$1;
(statearr_6190_6583[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (61))){
var inst_5517 = (state_5903[(50)]);
var state_5903__$1 = state_5903;
var statearr_6191_6584 = state_5903__$1;
(statearr_6191_6584[(2)] = inst_5517);

(statearr_6191_6584[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (93))){
var inst_5628 = (state_5903[(2)]);
var inst_5629 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5630 = true;
var inst_5631 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_5630,inst_5628];
var inst_5632 = cljs.core.PersistentHashMap.fromArrays(inst_5629,inst_5631);
var inst_5633 = cljs.test.do_report.call(null,inst_5632);
var state_5903__$1 = state_5903;
var statearr_6193_6585 = state_5903__$1;
(statearr_6193_6585[(2)] = inst_5633);

(statearr_6193_6585[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (125))){
var _ = (function (){var statearr_6194 = state_5903;
(statearr_6194[(4)] = cljs.core.cons.call(null,(128),(state_5903[(4)])));

return statearr_6194;
})();
var inst_5765 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_5766 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can progress cycle"];
var inst_5767 = cljs.core.PersistentHashMap.fromArrays(inst_5765,inst_5766);
var inst_5768 = cljs.test.do_report.call(null,inst_5767);
var ___$1 = (function (){var statearr_6195 = state_5903;
(statearr_6195[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6195;
})();
var state_5903__$1 = state_5903;
var statearr_6196_6586 = state_5903__$1;
(statearr_6196_6586[(2)] = inst_5768);

(statearr_6196_6586[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (157))){
var _ = (function (){var statearr_6197 = state_5903;
(statearr_6197[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6197;
})();
var state_5903__$1 = state_5903;
var ex6192 = (state_5903__$1[(2)]);
var statearr_6198_6587 = state_5903__$1;
(statearr_6198_6587[(5)] = ex6192);


var statearr_6199_6588 = state_5903__$1;
(statearr_6199_6588[(1)] = (156));

(statearr_6199_6588[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (30))){
var inst_5389 = (state_5903[(54)]);
var inst_5396 = (function(){throw inst_5389})();
var state_5903__$1 = state_5903;
var statearr_6201_6589 = state_5903__$1;
(statearr_6201_6589[(2)] = inst_5396);

(statearr_6201_6589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (62))){
var inst_5528 = (state_5903[(15)]);
var inst_5527 = (state_5903[(2)]);
var inst_5528__$1 = cljs.core.nth.call(null,inst_5527,(0),null);
var inst_5530 = (inst_5528__$1 == null);
var inst_5531 = cljs.core.not.call(null,inst_5530);
var state_5903__$1 = (function (){var statearr_6202 = state_5903;
(statearr_6202[(15)] = inst_5528__$1);

return statearr_6202;
})();
if(inst_5531){
var statearr_6203_6590 = state_5903__$1;
(statearr_6203_6590[(1)] = (63));

} else {
var statearr_6204_6591 = state_5903__$1;
(statearr_6204_6591[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (94))){
var _ = (function (){var statearr_6205 = state_5903;
(statearr_6205[(4)] = cljs.core.rest.call(null,(state_5903[(4)])));

return statearr_6205;
})();
var state_5903__$1 = state_5903;
var ex6200 = (state_5903__$1[(2)]);
var statearr_6206_6592 = state_5903__$1;
(statearr_6206_6592[(5)] = ex6200);


var statearr_6207_6593 = state_5903__$1;
(statearr_6207_6593[(1)] = (93));

(statearr_6207_6593[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (126))){
var inst_5771 = (state_5903[(2)]);
var state_5903__$1 = state_5903;
var statearr_6208_6594 = state_5903__$1;
(statearr_6208_6594[(2)] = inst_5771);

(statearr_6208_6594[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (158))){
var inst_5876 = (state_5903[(49)]);
var inst_5879 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5880 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_5881 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5876);
var inst_5882 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_5880,inst_5881];
var inst_5883 = cljs.core.PersistentHashMap.fromArrays(inst_5879,inst_5882);
var inst_5884 = cljs.test.do_report.call(null,inst_5883);
var state_5903__$1 = state_5903;
var statearr_6209_6595 = state_5903__$1;
(statearr_6209_6595[(2)] = inst_5884);

(statearr_6209_6595[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (31))){
var inst_5389 = (state_5903[(54)]);
var state_5903__$1 = state_5903;
var statearr_6210_6596 = state_5903__$1;
(statearr_6210_6596[(2)] = inst_5389);

(statearr_6210_6596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (63))){
var inst_5528 = (state_5903[(15)]);
var inst_5533 = inst_5528.cljs$lang$protocol_mask$partition0$;
var inst_5534 = (inst_5533 & (64));
var inst_5535 = inst_5528.cljs$core$ISeq$;
var inst_5536 = (cljs.core.PROTOCOL_SENTINEL === inst_5535);
var inst_5537 = ((inst_5534) || (inst_5536));
var state_5903__$1 = state_5903;
if(cljs.core.truth_(inst_5537)){
var statearr_6211_6597 = state_5903__$1;
(statearr_6211_6597[(1)] = (66));

} else {
var statearr_6212_6598 = state_5903__$1;
(statearr_6212_6598[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (95))){
var inst_5640 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5641 = true;
var inst_5642 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can progress cycle",inst_5641,true];
var inst_5643 = cljs.core.PersistentHashMap.fromArrays(inst_5640,inst_5642);
var inst_5644 = cljs.test.do_report.call(null,inst_5643);
var state_5903__$1 = state_5903;
var statearr_6213_6599 = state_5903__$1;
(statearr_6213_6599[(2)] = inst_5644);

(statearr_6213_6599[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (127))){
var inst_5754 = (state_5903[(2)]);
var inst_5755 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5756 = null;
var inst_5757 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can progress cycle",inst_5756,inst_5754];
var inst_5758 = cljs.core.PersistentHashMap.fromArrays(inst_5755,inst_5757);
var inst_5759 = cljs.test.do_report.call(null,inst_5758);
var state_5903__$1 = state_5903;
var statearr_6214_6600 = state_5903__$1;
(statearr_6214_6600[(2)] = inst_5759);

(statearr_6214_6600[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5904 === (159))){
var inst_5876 = (state_5903[(49)]);
var inst_5886 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5887 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"cycle","cycle",(-1944070485),null),(2));
var inst_5888 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5889 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5890 = cljs.core.cons.call(null,inst_5889,inst_5876);
var inst_5891 = (new cljs.core.List(null,inst_5890,null,(1),null));
var inst_5892 = (new cljs.core.List(null,inst_5888,inst_5891,(2),null));
var inst_5893 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_5887,inst_5892];
var inst_5894 = cljs.core.PersistentHashMap.fromArrays(inst_5886,inst_5893);
var inst_5895 = cljs.test.do_report.call(null,inst_5894);
var state_5903__$1 = state_5903;
var statearr_6215_6601 = state_5903__$1;
(statearr_6215_6601[(2)] = inst_5895);

(statearr_6215_6601[(1)] = (160));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_6216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6216[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_6216[(1)] = (1));

return statearr_6216;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_5903){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_5903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e6217){var ex__18__auto__ = e6217;
var statearr_6218_6602 = state_5903;
(statearr_6218_6602[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_5903[(4)]))){
var statearr_6219_6603 = state_5903;
(statearr_6219_6603[(1)] = cljs.core.first.call(null,(state_5903[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__6604 = state_5903;
state_5903 = G__6604;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_5903){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_5903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_6220 = f__20__auto__.call(null);
(statearr_6220[(6)] = c__19__auto__);

return statearr_6220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals4321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta4322","meta4322",(-698679638),null)], null);
});

e2e.proposals.t_e2e$proposals4321.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals4321.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals4321";

e2e.proposals.t_e2e$proposals4321.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals4321");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals4321.
 */
e2e.proposals.__GT_t_e2e$proposals4321 = (function e2e$proposals$__GT_t_e2e$proposals4321(meta4322){
return (new e2e.proposals.t_e2e$proposals4321(meta4322));
});

}

return (new e2e.proposals.t_e2e$proposals4321(null));
});

e2e.proposals.cycle_add.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.cycle_add;},new cljs.core.Symbol("e2e.proposals","cycle-add","e2e.proposals/cycle-add",(1399694237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-add","cycle-add",(1071188336),null),"e2e/proposals.cljs",(19),(1),(156),(156),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_add)?e2e.proposals.cycle_add.cljs$lang$test:null)]));
e2e.proposals.cycle_update = (function e2e$proposals$cycle_update(){
return cljs.test.test_var.call(null,e2e.proposals.cycle_update.cljs$lang$var);
});
e2e.proposals.cycle_update.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals6605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals6605 = (function (meta6606){
this.meta6606 = meta6606;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals6605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6607,meta6606__$1){
var self__ = this;
var _6607__$1 = this;
return (new e2e.proposals.t_e2e$proposals6605(meta6606__$1));
});

e2e.proposals.t_e2e$proposals6605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6607){
var self__ = this;
var _6607__$1 = this;
return self__.meta6606;
});

e2e.proposals.t_e2e$proposals6605.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals6605.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_6868){
var state_val_6869 = (state_6868[(1)]);
if((state_val_6869 === (32))){
var inst_6734 = (state_6868[(7)]);
var inst_6734__$1 = (state_6868[(2)]);
var inst_6735 = (inst_6734__$1 instanceof cljs.core.ExceptionInfo);
var inst_6736 = cljs.core.ex_data.call(null,inst_6734__$1);
var inst_6737 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6736);
var inst_6738 = cljs.core._EQ_.call(null,inst_6737,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6739 = ((inst_6735) && (inst_6738));
var state_6868__$1 = (function (){var statearr_6871 = state_6868;
(statearr_6871[(7)] = inst_6734__$1);

return statearr_6871;
})();
if(cljs.core.truth_(inst_6739)){
var statearr_6872_7401 = state_6868__$1;
(statearr_6872_7401[(1)] = (33));

} else {
var statearr_6873_7402 = state_6868__$1;
(statearr_6873_7402[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (64))){
var _ = (function (){var statearr_6874 = state_6868;
(statearr_6874[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6874;
})();
var state_6868__$1 = state_6868;
var ex6870 = (state_6868__$1[(2)]);
var statearr_6875_7403 = state_6868__$1;
(statearr_6875_7403[(5)] = ex6870);


var statearr_6876_7404 = state_6868__$1;
(statearr_6876_7404[(1)] = (63));

(statearr_6876_7404[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (1))){
var state_6868__$1 = state_6868;
var statearr_6877_7405 = state_6868__$1;
(statearr_6877_7405[(2)] = null);

(statearr_6877_7405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (33))){
var inst_6734 = (state_6868[(7)]);
var inst_6741 = (function(){throw inst_6734})();
var state_6868__$1 = state_6868;
var statearr_6878_7406 = state_6868__$1;
(statearr_6878_7406[(2)] = inst_6741);

(statearr_6878_7406[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (2))){
var _ = (function (){var statearr_6879 = state_6868;
(statearr_6879[(4)] = cljs.core.cons.call(null,(15),(state_6868[(4)])));

return statearr_6879;
})();
var inst_6653 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_6654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6655 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_6656 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_6657 = cljs.core.PersistentHashMap.fromArrays(inst_6655,inst_6656);
var inst_6658 = [inst_6657];
var inst_6659 = (new cljs.core.PersistentVector(null,(1),(5),inst_6654,inst_6658,null));
var inst_6660 = [(2),"2021-01-01 12:00:00",inst_6659];
var inst_6661 = cljs.core.PersistentHashMap.fromArrays(inst_6653,inst_6660);
var inst_6662 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_6661);
var inst_6663 = cljs.core.async.interop.p__GT_c.call(null,inst_6662);
var state_6868__$1 = state_6868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6868__$1,(16),inst_6663);
} else {
if((state_val_6869 === (34))){
var inst_6734 = (state_6868[(7)]);
var state_6868__$1 = state_6868;
var statearr_6880_7407 = state_6868__$1;
(statearr_6880_7407[(2)] = inst_6734);

(statearr_6880_7407[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (3))){
var inst_6696 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6881 = state_6868;
(statearr_6881[(8)] = inst_6696);

return statearr_6881;
})();
var statearr_6882_7408 = state_6868__$1;
(statearr_6882_7408[(2)] = null);

(statearr_6882_7408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (35))){
var inst_6744 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6883 = state_6868;
(statearr_6883[(9)] = inst_6744);

return statearr_6883;
})();
var statearr_6884_7409 = state_6868__$1;
(statearr_6884_7409[(2)] = null);

(statearr_6884_7409[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (4))){
var inst_6611 = (state_6868[(10)]);
var inst_6612 = (state_6868[(11)]);
var inst_6609 = (state_6868[(2)]);
var inst_6610 = inst_6609.cause;
var inst_6611__$1 = inst_6610.message;
var inst_6612__$1 = clojure.string.ends_with_QMARK_.call(null,inst_6611__$1,"cycle is not in the future");
var inst_6613 = (!(inst_6612__$1));
var state_6868__$1 = (function (){var statearr_6885 = state_6868;
(statearr_6885[(10)] = inst_6611__$1);

(statearr_6885[(11)] = inst_6612__$1);

return statearr_6885;
})();
if(inst_6613){
var statearr_6886_7410 = state_6868__$1;
(statearr_6886_7410[(1)] = (5));

} else {
var statearr_6887_7411 = state_6868__$1;
(statearr_6887_7411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (36))){
var _ = (function (){var statearr_6888 = state_6868;
(statearr_6888[(4)] = cljs.core.cons.call(null,(39),(state_6868[(4)])));

return statearr_6888;
})();
var state_6868__$1 = state_6868;
var statearr_6889_7412 = state_6868__$1;
(statearr_6889_7412[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (5))){
var inst_6611 = (state_6868[(10)]);
var inst_6615 = ["expected =","cycle is not in the future"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6611)].join('');
var inst_6616 = cljs.core.prn.call(null,inst_6615);
var state_6868__$1 = state_6868;
var statearr_6891_7413 = state_6868__$1;
(statearr_6891_7413[(2)] = inst_6616);

(statearr_6891_7413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (37))){
var inst_6772 = (state_6868[(2)]);
var _ = (function (){var statearr_6892 = state_6868;
(statearr_6892[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6892;
})();
var state_6868__$1 = state_6868;
var statearr_6893_7414 = state_6868__$1;
(statearr_6893_7414[(2)] = inst_6772);

(statearr_6893_7414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (6))){
var state_6868__$1 = state_6868;
var statearr_6894_7415 = state_6868__$1;
(statearr_6894_7415[(2)] = null);

(statearr_6894_7415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (38))){
var inst_6745 = (state_6868[(2)]);
var inst_6746 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6747 = true;
var inst_6748 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_6747,inst_6745];
var inst_6749 = cljs.core.PersistentHashMap.fromArrays(inst_6746,inst_6748);
var inst_6750 = cljs.test.do_report.call(null,inst_6749);
var state_6868__$1 = state_6868;
var statearr_6896_7416 = state_6868__$1;
(statearr_6896_7416[(2)] = inst_6750);

(statearr_6896_7416[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (7))){
var inst_6619 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6897 = state_6868;
(statearr_6897[(12)] = inst_6619);

return statearr_6897;
})();
var statearr_6898_7417 = state_6868__$1;
(statearr_6898_7417[(2)] = null);

(statearr_6898_7417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (39))){
var _ = (function (){var statearr_6899 = state_6868;
(statearr_6899[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6899;
})();
var state_6868__$1 = state_6868;
var ex6895 = (state_6868__$1[(2)]);
var statearr_6900_7418 = state_6868__$1;
(statearr_6900_7418[(5)] = ex6895);


var statearr_6901_7419 = state_6868__$1;
(statearr_6901_7419[(1)] = (38));

(statearr_6901_7419[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (8))){
var inst_6612 = (state_6868[(11)]);
var _ = (function (){var statearr_6902 = state_6868;
(statearr_6902[(4)] = cljs.core.cons.call(null,(11),(state_6868[(4)])));

return statearr_6902;
})();
var state_6868__$1 = state_6868;
if(cljs.core.truth_(inst_6612)){
var statearr_6903_7420 = state_6868__$1;
(statearr_6903_7420[(1)] = (12));

} else {
var statearr_6904_7421 = state_6868__$1;
(statearr_6904_7421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (40))){
var inst_6757 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6758 = true;
var inst_6759 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_6758,true];
var inst_6760 = cljs.core.PersistentHashMap.fromArrays(inst_6757,inst_6759);
var inst_6761 = cljs.test.do_report.call(null,inst_6760);
var state_6868__$1 = state_6868;
var statearr_6905_7422 = state_6868__$1;
(statearr_6905_7422[(2)] = inst_6761);

(statearr_6905_7422[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (9))){
var inst_6647 = (state_6868[(2)]);
var state_6868__$1 = state_6868;
var statearr_6906_7423 = state_6868__$1;
(statearr_6906_7423[(2)] = inst_6647);

(statearr_6906_7423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (41))){
var inst_6763 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6764 = true;
var inst_6765 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_6764,true];
var inst_6766 = cljs.core.PersistentHashMap.fromArrays(inst_6763,inst_6765);
var inst_6767 = cljs.test.do_report.call(null,inst_6766);
var state_6868__$1 = state_6868;
var statearr_6907_7424 = state_6868__$1;
(statearr_6907_7424[(2)] = inst_6767);

(statearr_6907_7424[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (10))){
var inst_6620 = (state_6868[(2)]);
var inst_6621 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6622 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6623 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_6622,inst_6620];
var inst_6624 = cljs.core.PersistentHashMap.fromArrays(inst_6621,inst_6623);
var inst_6625 = cljs.test.do_report.call(null,inst_6624);
var state_6868__$1 = state_6868;
var statearr_6909_7425 = state_6868__$1;
(statearr_6909_7425[(2)] = inst_6625);

(statearr_6909_7425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (42))){
var inst_6769 = (state_6868[(2)]);
var _ = (function (){var statearr_6910 = state_6868;
(statearr_6910[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6910;
})();
var state_6868__$1 = (function (){var statearr_6911 = state_6868;
(statearr_6911[(13)] = inst_6769);

return statearr_6911;
})();
var statearr_6912_7426 = state_6868__$1;
(statearr_6912_7426[(2)] = true);

(statearr_6912_7426[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (11))){
var _ = (function (){var statearr_6913 = state_6868;
(statearr_6913[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6913;
})();
var state_6868__$1 = state_6868;
var ex6908 = (state_6868__$1[(2)]);
var statearr_6914_7427 = state_6868__$1;
(statearr_6914_7427[(5)] = ex6908);


var statearr_6915_7428 = state_6868__$1;
(statearr_6915_7428[(1)] = (10));

(statearr_6915_7428[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (43))){
var _ = (function (){var statearr_6916 = state_6868;
(statearr_6916[(4)] = cljs.core.cons.call(null,(56),(state_6868[(4)])));

return statearr_6916;
})();
var inst_6822 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_6823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6824 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_6825 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_6826 = cljs.core.PersistentHashMap.fromArrays(inst_6824,inst_6825);
var inst_6827 = [inst_6826];
var inst_6828 = (new cljs.core.PersistentVector(null,(1),(5),inst_6823,inst_6827,null));
var inst_6829 = [(3),"2021-01-01 12:00:00",inst_6828];
var inst_6830 = cljs.core.PersistentHashMap.fromArrays(inst_6822,inst_6829);
var inst_6831 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"updatecycle",inst_6830);
var inst_6832 = cljs.core.async.interop.p__GT_c.call(null,inst_6831);
var state_6868__$1 = state_6868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6868__$1,(57),inst_6832);
} else {
if((state_val_6869 === (12))){
var inst_6612 = (state_6868[(11)]);
var inst_6632 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6633 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6634 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle must be in the future",inst_6633,inst_6612];
var inst_6635 = cljs.core.PersistentHashMap.fromArrays(inst_6632,inst_6634);
var inst_6636 = cljs.test.do_report.call(null,inst_6635);
var state_6868__$1 = state_6868;
var statearr_6917_7429 = state_6868__$1;
(statearr_6917_7429[(2)] = inst_6636);

(statearr_6917_7429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (44))){
var inst_6865 = (state_6868[(2)]);
var inst_6866 = done.call(null);
var state_6868__$1 = (function (){var statearr_6918 = state_6868;
(statearr_6918[(14)] = inst_6865);

return statearr_6918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6868__$1,inst_6866);
} else {
if((state_val_6869 === (13))){
var inst_6612 = (state_6868[(11)]);
var inst_6638 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6639 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6640 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future",inst_6639,inst_6612];
var inst_6641 = cljs.core.PersistentHashMap.fromArrays(inst_6638,inst_6640);
var inst_6642 = cljs.test.do_report.call(null,inst_6641);
var state_6868__$1 = state_6868;
var statearr_6919_7430 = state_6868__$1;
(statearr_6919_7430[(2)] = inst_6642);

(statearr_6919_7430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (45))){
var inst_6778 = (state_6868[(15)]);
var inst_6780 = (state_6868[(16)]);
var inst_6776 = (state_6868[(2)]);
var inst_6777 = inst_6776.cause;
var inst_6778__$1 = inst_6777.message;
var inst_6779 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_6780__$1 = clojure.string.ends_with_QMARK_.call(null,inst_6778__$1,inst_6779);
var inst_6781 = (!(inst_6780__$1));
var state_6868__$1 = (function (){var statearr_6920 = state_6868;
(statearr_6920[(15)] = inst_6778__$1);

(statearr_6920[(16)] = inst_6780__$1);

return statearr_6920;
})();
if(inst_6781){
var statearr_6921_7431 = state_6868__$1;
(statearr_6921_7431[(1)] = (46));

} else {
var statearr_6922_7432 = state_6868__$1;
(statearr_6922_7432[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (14))){
var inst_6612 = (state_6868[(11)]);
var inst_6644 = (state_6868[(2)]);
var _ = (function (){var statearr_6924 = state_6868;
(statearr_6924[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6924;
})();
var state_6868__$1 = (function (){var statearr_6925 = state_6868;
(statearr_6925[(17)] = inst_6644);

return statearr_6925;
})();
var statearr_6926_7433 = state_6868__$1;
(statearr_6926_7433[(2)] = inst_6612);

(statearr_6926_7433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (46))){
var inst_6778 = (state_6868[(15)]);
var inst_6783 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_6784 = ["expected =",inst_6783," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6778)].join('');
var inst_6785 = cljs.core.prn.call(null,inst_6784);
var state_6868__$1 = state_6868;
var statearr_6927_7434 = state_6868__$1;
(statearr_6927_7434[(2)] = inst_6785);

(statearr_6927_7434[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (15))){
var _ = (function (){var statearr_6928 = state_6868;
(statearr_6928[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6928;
})();
var state_6868__$1 = state_6868;
var ex6923 = (state_6868__$1[(2)]);
var statearr_6929_7435 = state_6868__$1;
(statearr_6929_7435[(5)] = ex6923);


if((ex6923 instanceof Error)){
var statearr_6930_7436 = state_6868__$1;
(statearr_6930_7436[(1)] = (4));

(statearr_6930_7436[(5)] = null);

} else {
throw ex6923;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (47))){
var state_6868__$1 = state_6868;
var statearr_6931_7437 = state_6868__$1;
(statearr_6931_7437[(2)] = null);

(statearr_6931_7437[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (16))){
var inst_6665 = (state_6868[(18)]);
var inst_6665__$1 = (state_6868[(2)]);
var inst_6666 = (inst_6665__$1 instanceof cljs.core.ExceptionInfo);
var inst_6667 = cljs.core.ex_data.call(null,inst_6665__$1);
var inst_6668 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6667);
var inst_6669 = cljs.core._EQ_.call(null,inst_6668,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6670 = ((inst_6666) && (inst_6669));
var state_6868__$1 = (function (){var statearr_6932 = state_6868;
(statearr_6932[(18)] = inst_6665__$1);

return statearr_6932;
})();
if(cljs.core.truth_(inst_6670)){
var statearr_6933_7438 = state_6868__$1;
(statearr_6933_7438[(1)] = (17));

} else {
var statearr_6934_7439 = state_6868__$1;
(statearr_6934_7439[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (48))){
var inst_6788 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6935 = state_6868;
(statearr_6935[(19)] = inst_6788);

return statearr_6935;
})();
var statearr_6936_7440 = state_6868__$1;
(statearr_6936_7440[(2)] = null);

(statearr_6936_7440[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (17))){
var inst_6665 = (state_6868[(18)]);
var inst_6672 = (function(){throw inst_6665})();
var state_6868__$1 = state_6868;
var statearr_6937_7441 = state_6868__$1;
(statearr_6937_7441[(2)] = inst_6672);

(statearr_6937_7441[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (49))){
var inst_6780 = (state_6868[(16)]);
var _ = (function (){var statearr_6938 = state_6868;
(statearr_6938[(4)] = cljs.core.cons.call(null,(52),(state_6868[(4)])));

return statearr_6938;
})();
var state_6868__$1 = state_6868;
if(cljs.core.truth_(inst_6780)){
var statearr_6939_7442 = state_6868__$1;
(statearr_6939_7442[(1)] = (53));

} else {
var statearr_6940_7443 = state_6868__$1;
(statearr_6940_7443[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (18))){
var inst_6665 = (state_6868[(18)]);
var state_6868__$1 = state_6868;
var statearr_6941_7444 = state_6868__$1;
(statearr_6941_7444[(2)] = inst_6665);

(statearr_6941_7444[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (50))){
var inst_6816 = (state_6868[(2)]);
var state_6868__$1 = state_6868;
var statearr_6942_7445 = state_6868__$1;
(statearr_6942_7445[(2)] = inst_6816);

(statearr_6942_7445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (19))){
var inst_6675 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6943 = state_6868;
(statearr_6943[(20)] = inst_6675);

return statearr_6943;
})();
var statearr_6944_7446 = state_6868__$1;
(statearr_6944_7446[(2)] = null);

(statearr_6944_7446[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (51))){
var inst_6789 = (state_6868[(2)]);
var inst_6790 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6791 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6792 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_6791,inst_6789];
var inst_6793 = cljs.core.PersistentHashMap.fromArrays(inst_6790,inst_6792);
var inst_6794 = cljs.test.do_report.call(null,inst_6793);
var state_6868__$1 = state_6868;
var statearr_6946_7447 = state_6868__$1;
(statearr_6946_7447[(2)] = inst_6794);

(statearr_6946_7447[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (20))){
var _ = (function (){var statearr_6947 = state_6868;
(statearr_6947[(4)] = cljs.core.cons.call(null,(23),(state_6868[(4)])));

return statearr_6947;
})();
var inst_6687 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_6688 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future"];
var inst_6689 = cljs.core.PersistentHashMap.fromArrays(inst_6687,inst_6688);
var inst_6690 = cljs.test.do_report.call(null,inst_6689);
var ___$1 = (function (){var statearr_6948 = state_6868;
(statearr_6948[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6948;
})();
var state_6868__$1 = state_6868;
var statearr_6949_7448 = state_6868__$1;
(statearr_6949_7448[(2)] = inst_6690);

(statearr_6949_7448[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (52))){
var _ = (function (){var statearr_6950 = state_6868;
(statearr_6950[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6950;
})();
var state_6868__$1 = state_6868;
var ex6945 = (state_6868__$1[(2)]);
var statearr_6951_7449 = state_6868__$1;
(statearr_6951_7449[(5)] = ex6945);


var statearr_6952_7450 = state_6868__$1;
(statearr_6952_7450[(1)] = (51));

(statearr_6952_7450[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (21))){
var inst_6693 = (state_6868[(2)]);
var _ = (function (){var statearr_6953 = state_6868;
(statearr_6953[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6953;
})();
var state_6868__$1 = state_6868;
var statearr_6954_7451 = state_6868__$1;
(statearr_6954_7451[(2)] = inst_6693);

(statearr_6954_7451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (53))){
var inst_6780 = (state_6868[(16)]);
var inst_6801 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6802 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6803 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"must be contract owner",inst_6802,inst_6780];
var inst_6804 = cljs.core.PersistentHashMap.fromArrays(inst_6801,inst_6803);
var inst_6805 = cljs.test.do_report.call(null,inst_6804);
var state_6868__$1 = state_6868;
var statearr_6955_7452 = state_6868__$1;
(statearr_6955_7452[(2)] = inst_6805);

(statearr_6955_7452[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (22))){
var inst_6676 = (state_6868[(2)]);
var inst_6677 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6678 = null;
var inst_6679 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_6678,inst_6676];
var inst_6680 = cljs.core.PersistentHashMap.fromArrays(inst_6677,inst_6679);
var inst_6681 = cljs.test.do_report.call(null,inst_6680);
var state_6868__$1 = state_6868;
var statearr_6957_7453 = state_6868__$1;
(statearr_6957_7453[(2)] = inst_6681);

(statearr_6957_7453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (54))){
var inst_6780 = (state_6868[(16)]);
var inst_6807 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6808 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_6809 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner",inst_6808,inst_6780];
var inst_6810 = cljs.core.PersistentHashMap.fromArrays(inst_6807,inst_6809);
var inst_6811 = cljs.test.do_report.call(null,inst_6810);
var state_6868__$1 = state_6868;
var statearr_6958_7454 = state_6868__$1;
(statearr_6958_7454[(2)] = inst_6811);

(statearr_6958_7454[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (23))){
var _ = (function (){var statearr_6959 = state_6868;
(statearr_6959[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6959;
})();
var state_6868__$1 = state_6868;
var ex6956 = (state_6868__$1[(2)]);
var statearr_6960_7455 = state_6868__$1;
(statearr_6960_7455[(5)] = ex6956);


var statearr_6961_7456 = state_6868__$1;
(statearr_6961_7456[(1)] = (22));

(statearr_6961_7456[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (55))){
var inst_6780 = (state_6868[(16)]);
var inst_6813 = (state_6868[(2)]);
var _ = (function (){var statearr_6963 = state_6868;
(statearr_6963[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6963;
})();
var state_6868__$1 = (function (){var statearr_6964 = state_6868;
(statearr_6964[(21)] = inst_6813);

return statearr_6964;
})();
var statearr_6965_7457 = state_6868__$1;
(statearr_6965_7457[(2)] = inst_6780);

(statearr_6965_7457[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (24))){
var _ = (function (){var statearr_6966 = state_6868;
(statearr_6966[(4)] = cljs.core.cons.call(null,(31),(state_6868[(4)])));

return statearr_6966;
})();
var inst_6722 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_6723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6724 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_6725 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_6726 = cljs.core.PersistentHashMap.fromArrays(inst_6724,inst_6725);
var inst_6727 = [inst_6726];
var inst_6728 = (new cljs.core.PersistentVector(null,(1),(5),inst_6723,inst_6727,null));
var inst_6729 = [(3),"2021-01-01 12:00:00",inst_6728];
var inst_6730 = cljs.core.PersistentHashMap.fromArrays(inst_6722,inst_6729);
var inst_6731 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_6730);
var inst_6732 = cljs.core.async.interop.p__GT_c.call(null,inst_6731);
var state_6868__$1 = state_6868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6868__$1,(32),inst_6732);
} else {
if((state_val_6869 === (56))){
var _ = (function (){var statearr_6967 = state_6868;
(statearr_6967[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6967;
})();
var state_6868__$1 = state_6868;
var ex6962 = (state_6868__$1[(2)]);
var statearr_6968_7458 = state_6868__$1;
(statearr_6968_7458[(5)] = ex6962);


if((ex6962 instanceof Error)){
var statearr_6969_7459 = state_6868__$1;
(statearr_6969_7459[(1)] = (45));

(statearr_6969_7459[(5)] = null);

} else {
throw ex6962;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (25))){
var inst_6775 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6970 = state_6868;
(statearr_6970[(22)] = inst_6775);

return statearr_6970;
})();
var statearr_6971_7460 = state_6868__$1;
(statearr_6971_7460[(2)] = null);

(statearr_6971_7460[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (57))){
var inst_6834 = (state_6868[(23)]);
var inst_6834__$1 = (state_6868[(2)]);
var inst_6835 = (inst_6834__$1 instanceof cljs.core.ExceptionInfo);
var inst_6836 = cljs.core.ex_data.call(null,inst_6834__$1);
var inst_6837 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6836);
var inst_6838 = cljs.core._EQ_.call(null,inst_6837,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6839 = ((inst_6835) && (inst_6838));
var state_6868__$1 = (function (){var statearr_6972 = state_6868;
(statearr_6972[(23)] = inst_6834__$1);

return statearr_6972;
})();
if(cljs.core.truth_(inst_6839)){
var statearr_6973_7461 = state_6868__$1;
(statearr_6973_7461[(1)] = (58));

} else {
var statearr_6974_7462 = state_6868__$1;
(statearr_6974_7462[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (26))){
var inst_6697 = (state_6868[(2)]);
var inst_6698 = cljs.core.prn.call(null,"test failed with ",inst_6697);
var state_6868__$1 = (function (){var statearr_6975 = state_6868;
(statearr_6975[(24)] = inst_6698);

return statearr_6975;
})();
var statearr_6976_7463 = state_6868__$1;
(statearr_6976_7463[(2)] = null);

(statearr_6976_7463[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (58))){
var inst_6834 = (state_6868[(23)]);
var inst_6841 = (function(){throw inst_6834})();
var state_6868__$1 = state_6868;
var statearr_6977_7464 = state_6868__$1;
(statearr_6977_7464[(2)] = inst_6841);

(statearr_6977_7464[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (27))){
var _ = (function (){var statearr_6978 = state_6868;
(statearr_6978[(4)] = cljs.core.cons.call(null,(30),(state_6868[(4)])));

return statearr_6978;
})();
var inst_6710 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_6711 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_6712 = cljs.core.PersistentHashMap.fromArrays(inst_6710,inst_6711);
var inst_6713 = cljs.test.do_report.call(null,inst_6712);
var ___$1 = (function (){var statearr_6979 = state_6868;
(statearr_6979[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6979;
})();
var state_6868__$1 = state_6868;
var statearr_6980_7465 = state_6868__$1;
(statearr_6980_7465[(2)] = inst_6713);

(statearr_6980_7465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (59))){
var inst_6834 = (state_6868[(23)]);
var state_6868__$1 = state_6868;
var statearr_6981_7466 = state_6868__$1;
(statearr_6981_7466[(2)] = inst_6834);

(statearr_6981_7466[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (28))){
var inst_6716 = (state_6868[(2)]);
var state_6868__$1 = state_6868;
var statearr_6982_7467 = state_6868__$1;
(statearr_6982_7467[(2)] = inst_6716);

(statearr_6982_7467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (60))){
var inst_6844 = (state_6868[(2)]);
var state_6868__$1 = (function (){var statearr_6983 = state_6868;
(statearr_6983[(25)] = inst_6844);

return statearr_6983;
})();
var statearr_6984_7468 = state_6868__$1;
(statearr_6984_7468[(2)] = null);

(statearr_6984_7468[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (29))){
var inst_6699 = (state_6868[(2)]);
var inst_6700 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6701 = null;
var inst_6702 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_6701,inst_6699];
var inst_6703 = cljs.core.PersistentHashMap.fromArrays(inst_6700,inst_6702);
var inst_6704 = cljs.test.do_report.call(null,inst_6703);
var state_6868__$1 = state_6868;
var statearr_6986_7469 = state_6868__$1;
(statearr_6986_7469[(2)] = inst_6704);

(statearr_6986_7469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (61))){
var _ = (function (){var statearr_6987 = state_6868;
(statearr_6987[(4)] = cljs.core.cons.call(null,(64),(state_6868[(4)])));

return statearr_6987;
})();
var inst_6856 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_6857 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner"];
var inst_6858 = cljs.core.PersistentHashMap.fromArrays(inst_6856,inst_6857);
var inst_6859 = cljs.test.do_report.call(null,inst_6858);
var ___$1 = (function (){var statearr_6988 = state_6868;
(statearr_6988[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6988;
})();
var state_6868__$1 = state_6868;
var statearr_6989_7470 = state_6868__$1;
(statearr_6989_7470[(2)] = inst_6859);

(statearr_6989_7470[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (30))){
var _ = (function (){var statearr_6991 = state_6868;
(statearr_6991[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6991;
})();
var state_6868__$1 = state_6868;
var ex6985 = (state_6868__$1[(2)]);
var statearr_6992_7471 = state_6868__$1;
(statearr_6992_7471[(5)] = ex6985);


var statearr_6993_7472 = state_6868__$1;
(statearr_6993_7472[(1)] = (29));

(statearr_6993_7472[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (62))){
var inst_6862 = (state_6868[(2)]);
var _ = (function (){var statearr_6994 = state_6868;
(statearr_6994[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6994;
})();
var state_6868__$1 = state_6868;
var statearr_6995_7473 = state_6868__$1;
(statearr_6995_7473[(2)] = inst_6862);

(statearr_6995_7473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (31))){
var _ = (function (){var statearr_6996 = state_6868;
(statearr_6996[(4)] = cljs.core.rest.call(null,(state_6868[(4)])));

return statearr_6996;
})();
var state_6868__$1 = state_6868;
var ex6990 = (state_6868__$1[(2)]);
var statearr_6997_7474 = state_6868__$1;
(statearr_6997_7474[(5)] = ex6990);


if((ex6990 instanceof Error)){
var statearr_6998_7475 = state_6868__$1;
(statearr_6998_7475[(1)] = (26));

(statearr_6998_7475[(5)] = null);

} else {
throw ex6990;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6869 === (63))){
var inst_6845 = (state_6868[(2)]);
var inst_6846 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6847 = null;
var inst_6848 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_6847,inst_6845];
var inst_6849 = cljs.core.PersistentHashMap.fromArrays(inst_6846,inst_6848);
var inst_6850 = cljs.test.do_report.call(null,inst_6849);
var state_6868__$1 = state_6868;
var statearr_6999_7476 = state_6868__$1;
(statearr_6999_7476[(2)] = inst_6850);

(statearr_6999_7476[(1)] = (62));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_7000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7000[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_7000[(1)] = (1));

return statearr_7000;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_6868){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_6868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e7001){var ex__18__auto__ = e7001;
var statearr_7002_7477 = state_6868;
(statearr_7002_7477[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_6868[(4)]))){
var statearr_7003_7478 = state_6868;
(statearr_7003_7478[(1)] = cljs.core.first.call(null,(state_6868[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7479 = state_6868;
state_6868 = G__7479;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_6868){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_6868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_7004 = f__20__auto__.call(null);
(statearr_7004[(6)] = c__19__auto__);

return statearr_7004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals6605.prototype.apply = (function (self__,args6608){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6608)));
});

e2e.proposals.t_e2e$proposals6605.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_7264){
var state_val_7265 = (state_7264[(1)]);
if((state_val_7265 === (32))){
var inst_7130 = (state_7264[(7)]);
var inst_7130__$1 = (state_7264[(2)]);
var inst_7131 = (inst_7130__$1 instanceof cljs.core.ExceptionInfo);
var inst_7132 = cljs.core.ex_data.call(null,inst_7130__$1);
var inst_7133 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7132);
var inst_7134 = cljs.core._EQ_.call(null,inst_7133,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7135 = ((inst_7131) && (inst_7134));
var state_7264__$1 = (function (){var statearr_7267 = state_7264;
(statearr_7267[(7)] = inst_7130__$1);

return statearr_7267;
})();
if(cljs.core.truth_(inst_7135)){
var statearr_7268_7480 = state_7264__$1;
(statearr_7268_7480[(1)] = (33));

} else {
var statearr_7269_7481 = state_7264__$1;
(statearr_7269_7481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (64))){
var _ = (function (){var statearr_7270 = state_7264;
(statearr_7270[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7270;
})();
var state_7264__$1 = state_7264;
var ex7266 = (state_7264__$1[(2)]);
var statearr_7271_7482 = state_7264__$1;
(statearr_7271_7482[(5)] = ex7266);


var statearr_7272_7483 = state_7264__$1;
(statearr_7272_7483[(1)] = (63));

(statearr_7272_7483[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (1))){
var state_7264__$1 = state_7264;
var statearr_7273_7484 = state_7264__$1;
(statearr_7273_7484[(2)] = null);

(statearr_7273_7484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (33))){
var inst_7130 = (state_7264[(7)]);
var inst_7137 = (function(){throw inst_7130})();
var state_7264__$1 = state_7264;
var statearr_7274_7485 = state_7264__$1;
(statearr_7274_7485[(2)] = inst_7137);

(statearr_7274_7485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (2))){
var _ = (function (){var statearr_7275 = state_7264;
(statearr_7275[(4)] = cljs.core.cons.call(null,(15),(state_7264[(4)])));

return statearr_7275;
})();
var inst_7049 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_7050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7051 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_7052 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_7053 = cljs.core.PersistentHashMap.fromArrays(inst_7051,inst_7052);
var inst_7054 = [inst_7053];
var inst_7055 = (new cljs.core.PersistentVector(null,(1),(5),inst_7050,inst_7054,null));
var inst_7056 = [(2),"2021-01-01 12:00:00",inst_7055];
var inst_7057 = cljs.core.PersistentHashMap.fromArrays(inst_7049,inst_7056);
var inst_7058 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_7057);
var inst_7059 = cljs.core.async.interop.p__GT_c.call(null,inst_7058);
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7264__$1,(16),inst_7059);
} else {
if((state_val_7265 === (34))){
var inst_7130 = (state_7264[(7)]);
var state_7264__$1 = state_7264;
var statearr_7276_7486 = state_7264__$1;
(statearr_7276_7486[(2)] = inst_7130);

(statearr_7276_7486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (3))){
var inst_7092 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7277 = state_7264;
(statearr_7277[(8)] = inst_7092);

return statearr_7277;
})();
var statearr_7278_7487 = state_7264__$1;
(statearr_7278_7487[(2)] = null);

(statearr_7278_7487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (35))){
var inst_7140 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7279 = state_7264;
(statearr_7279[(9)] = inst_7140);

return statearr_7279;
})();
var statearr_7280_7488 = state_7264__$1;
(statearr_7280_7488[(2)] = null);

(statearr_7280_7488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (4))){
var inst_7007 = (state_7264[(10)]);
var inst_7008 = (state_7264[(11)]);
var inst_7005 = (state_7264[(2)]);
var inst_7006 = inst_7005.cause;
var inst_7007__$1 = inst_7006.message;
var inst_7008__$1 = clojure.string.ends_with_QMARK_.call(null,inst_7007__$1,"cycle is not in the future");
var inst_7009 = (!(inst_7008__$1));
var state_7264__$1 = (function (){var statearr_7281 = state_7264;
(statearr_7281[(10)] = inst_7007__$1);

(statearr_7281[(11)] = inst_7008__$1);

return statearr_7281;
})();
if(inst_7009){
var statearr_7282_7489 = state_7264__$1;
(statearr_7282_7489[(1)] = (5));

} else {
var statearr_7283_7490 = state_7264__$1;
(statearr_7283_7490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (36))){
var _ = (function (){var statearr_7284 = state_7264;
(statearr_7284[(4)] = cljs.core.cons.call(null,(39),(state_7264[(4)])));

return statearr_7284;
})();
var state_7264__$1 = state_7264;
var statearr_7285_7491 = state_7264__$1;
(statearr_7285_7491[(1)] = (40));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (5))){
var inst_7007 = (state_7264[(10)]);
var inst_7011 = ["expected =","cycle is not in the future"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7007)].join('');
var inst_7012 = cljs.core.prn.call(null,inst_7011);
var state_7264__$1 = state_7264;
var statearr_7287_7492 = state_7264__$1;
(statearr_7287_7492[(2)] = inst_7012);

(statearr_7287_7492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (37))){
var inst_7168 = (state_7264[(2)]);
var _ = (function (){var statearr_7288 = state_7264;
(statearr_7288[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7288;
})();
var state_7264__$1 = state_7264;
var statearr_7289_7493 = state_7264__$1;
(statearr_7289_7493[(2)] = inst_7168);

(statearr_7289_7493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (6))){
var state_7264__$1 = state_7264;
var statearr_7290_7494 = state_7264__$1;
(statearr_7290_7494[(2)] = null);

(statearr_7290_7494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (38))){
var inst_7141 = (state_7264[(2)]);
var inst_7142 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7143 = true;
var inst_7144 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_7143,inst_7141];
var inst_7145 = cljs.core.PersistentHashMap.fromArrays(inst_7142,inst_7144);
var inst_7146 = cljs.test.do_report.call(null,inst_7145);
var state_7264__$1 = state_7264;
var statearr_7292_7495 = state_7264__$1;
(statearr_7292_7495[(2)] = inst_7146);

(statearr_7292_7495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (7))){
var inst_7015 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7293 = state_7264;
(statearr_7293[(12)] = inst_7015);

return statearr_7293;
})();
var statearr_7294_7496 = state_7264__$1;
(statearr_7294_7496[(2)] = null);

(statearr_7294_7496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (39))){
var _ = (function (){var statearr_7295 = state_7264;
(statearr_7295[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7295;
})();
var state_7264__$1 = state_7264;
var ex7291 = (state_7264__$1[(2)]);
var statearr_7296_7497 = state_7264__$1;
(statearr_7296_7497[(5)] = ex7291);


var statearr_7297_7498 = state_7264__$1;
(statearr_7297_7498[(1)] = (38));

(statearr_7297_7498[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (8))){
var inst_7008 = (state_7264[(11)]);
var _ = (function (){var statearr_7298 = state_7264;
(statearr_7298[(4)] = cljs.core.cons.call(null,(11),(state_7264[(4)])));

return statearr_7298;
})();
var state_7264__$1 = state_7264;
if(cljs.core.truth_(inst_7008)){
var statearr_7299_7499 = state_7264__$1;
(statearr_7299_7499[(1)] = (12));

} else {
var statearr_7300_7500 = state_7264__$1;
(statearr_7300_7500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (40))){
var inst_7153 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7154 = true;
var inst_7155 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_7154,true];
var inst_7156 = cljs.core.PersistentHashMap.fromArrays(inst_7153,inst_7155);
var inst_7157 = cljs.test.do_report.call(null,inst_7156);
var state_7264__$1 = state_7264;
var statearr_7301_7501 = state_7264__$1;
(statearr_7301_7501[(2)] = inst_7157);

(statearr_7301_7501[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (9))){
var inst_7043 = (state_7264[(2)]);
var state_7264__$1 = state_7264;
var statearr_7302_7502 = state_7264__$1;
(statearr_7302_7502[(2)] = inst_7043);

(statearr_7302_7502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (41))){
var inst_7159 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7160 = true;
var inst_7161 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_7160,true];
var inst_7162 = cljs.core.PersistentHashMap.fromArrays(inst_7159,inst_7161);
var inst_7163 = cljs.test.do_report.call(null,inst_7162);
var state_7264__$1 = state_7264;
var statearr_7303_7503 = state_7264__$1;
(statearr_7303_7503[(2)] = inst_7163);

(statearr_7303_7503[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (10))){
var inst_7016 = (state_7264[(2)]);
var inst_7017 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7018 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7019 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_7018,inst_7016];
var inst_7020 = cljs.core.PersistentHashMap.fromArrays(inst_7017,inst_7019);
var inst_7021 = cljs.test.do_report.call(null,inst_7020);
var state_7264__$1 = state_7264;
var statearr_7305_7504 = state_7264__$1;
(statearr_7305_7504[(2)] = inst_7021);

(statearr_7305_7504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (42))){
var inst_7165 = (state_7264[(2)]);
var _ = (function (){var statearr_7306 = state_7264;
(statearr_7306[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7306;
})();
var state_7264__$1 = (function (){var statearr_7307 = state_7264;
(statearr_7307[(13)] = inst_7165);

return statearr_7307;
})();
var statearr_7308_7505 = state_7264__$1;
(statearr_7308_7505[(2)] = true);

(statearr_7308_7505[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (11))){
var _ = (function (){var statearr_7309 = state_7264;
(statearr_7309[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7309;
})();
var state_7264__$1 = state_7264;
var ex7304 = (state_7264__$1[(2)]);
var statearr_7310_7506 = state_7264__$1;
(statearr_7310_7506[(5)] = ex7304);


var statearr_7311_7507 = state_7264__$1;
(statearr_7311_7507[(1)] = (10));

(statearr_7311_7507[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (43))){
var _ = (function (){var statearr_7312 = state_7264;
(statearr_7312[(4)] = cljs.core.cons.call(null,(56),(state_7264[(4)])));

return statearr_7312;
})();
var inst_7218 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_7219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7220 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_7221 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_7222 = cljs.core.PersistentHashMap.fromArrays(inst_7220,inst_7221);
var inst_7223 = [inst_7222];
var inst_7224 = (new cljs.core.PersistentVector(null,(1),(5),inst_7219,inst_7223,null));
var inst_7225 = [(3),"2021-01-01 12:00:00",inst_7224];
var inst_7226 = cljs.core.PersistentHashMap.fromArrays(inst_7218,inst_7225);
var inst_7227 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"updatecycle",inst_7226);
var inst_7228 = cljs.core.async.interop.p__GT_c.call(null,inst_7227);
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7264__$1,(57),inst_7228);
} else {
if((state_val_7265 === (12))){
var inst_7008 = (state_7264[(11)]);
var inst_7028 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7029 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7030 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle must be in the future",inst_7029,inst_7008];
var inst_7031 = cljs.core.PersistentHashMap.fromArrays(inst_7028,inst_7030);
var inst_7032 = cljs.test.do_report.call(null,inst_7031);
var state_7264__$1 = state_7264;
var statearr_7313_7508 = state_7264__$1;
(statearr_7313_7508[(2)] = inst_7032);

(statearr_7313_7508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (44))){
var inst_7261 = (state_7264[(2)]);
var inst_7262 = done.call(null);
var state_7264__$1 = (function (){var statearr_7314 = state_7264;
(statearr_7314[(14)] = inst_7261);

return statearr_7314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7264__$1,inst_7262);
} else {
if((state_val_7265 === (13))){
var inst_7008 = (state_7264[(11)]);
var inst_7034 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7035 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7036 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future",inst_7035,inst_7008];
var inst_7037 = cljs.core.PersistentHashMap.fromArrays(inst_7034,inst_7036);
var inst_7038 = cljs.test.do_report.call(null,inst_7037);
var state_7264__$1 = state_7264;
var statearr_7315_7509 = state_7264__$1;
(statearr_7315_7509[(2)] = inst_7038);

(statearr_7315_7509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (45))){
var inst_7174 = (state_7264[(15)]);
var inst_7176 = (state_7264[(16)]);
var inst_7172 = (state_7264[(2)]);
var inst_7173 = inst_7172.cause;
var inst_7174__$1 = inst_7173.message;
var inst_7175 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_7176__$1 = clojure.string.ends_with_QMARK_.call(null,inst_7174__$1,inst_7175);
var inst_7177 = (!(inst_7176__$1));
var state_7264__$1 = (function (){var statearr_7316 = state_7264;
(statearr_7316[(15)] = inst_7174__$1);

(statearr_7316[(16)] = inst_7176__$1);

return statearr_7316;
})();
if(inst_7177){
var statearr_7317_7510 = state_7264__$1;
(statearr_7317_7510[(1)] = (46));

} else {
var statearr_7318_7511 = state_7264__$1;
(statearr_7318_7511[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (14))){
var inst_7008 = (state_7264[(11)]);
var inst_7040 = (state_7264[(2)]);
var _ = (function (){var statearr_7320 = state_7264;
(statearr_7320[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7320;
})();
var state_7264__$1 = (function (){var statearr_7321 = state_7264;
(statearr_7321[(17)] = inst_7040);

return statearr_7321;
})();
var statearr_7322_7512 = state_7264__$1;
(statearr_7322_7512[(2)] = inst_7008);

(statearr_7322_7512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (46))){
var inst_7174 = (state_7264[(15)]);
var inst_7179 = ["missing authority of ",e2e.proposals.prop_acc].join('');
var inst_7180 = ["expected =",inst_7179," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7174)].join('');
var inst_7181 = cljs.core.prn.call(null,inst_7180);
var state_7264__$1 = state_7264;
var statearr_7323_7513 = state_7264__$1;
(statearr_7323_7513[(2)] = inst_7181);

(statearr_7323_7513[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (15))){
var _ = (function (){var statearr_7324 = state_7264;
(statearr_7324[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7324;
})();
var state_7264__$1 = state_7264;
var ex7319 = (state_7264__$1[(2)]);
var statearr_7325_7514 = state_7264__$1;
(statearr_7325_7514[(5)] = ex7319);


if((ex7319 instanceof Error)){
var statearr_7326_7515 = state_7264__$1;
(statearr_7326_7515[(1)] = (4));

(statearr_7326_7515[(5)] = null);

} else {
throw ex7319;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (47))){
var state_7264__$1 = state_7264;
var statearr_7327_7516 = state_7264__$1;
(statearr_7327_7516[(2)] = null);

(statearr_7327_7516[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (16))){
var inst_7061 = (state_7264[(18)]);
var inst_7061__$1 = (state_7264[(2)]);
var inst_7062 = (inst_7061__$1 instanceof cljs.core.ExceptionInfo);
var inst_7063 = cljs.core.ex_data.call(null,inst_7061__$1);
var inst_7064 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7063);
var inst_7065 = cljs.core._EQ_.call(null,inst_7064,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7066 = ((inst_7062) && (inst_7065));
var state_7264__$1 = (function (){var statearr_7328 = state_7264;
(statearr_7328[(18)] = inst_7061__$1);

return statearr_7328;
})();
if(cljs.core.truth_(inst_7066)){
var statearr_7329_7517 = state_7264__$1;
(statearr_7329_7517[(1)] = (17));

} else {
var statearr_7330_7518 = state_7264__$1;
(statearr_7330_7518[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (48))){
var inst_7184 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7331 = state_7264;
(statearr_7331[(19)] = inst_7184);

return statearr_7331;
})();
var statearr_7332_7519 = state_7264__$1;
(statearr_7332_7519[(2)] = null);

(statearr_7332_7519[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (17))){
var inst_7061 = (state_7264[(18)]);
var inst_7068 = (function(){throw inst_7061})();
var state_7264__$1 = state_7264;
var statearr_7333_7520 = state_7264__$1;
(statearr_7333_7520[(2)] = inst_7068);

(statearr_7333_7520[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (49))){
var inst_7176 = (state_7264[(16)]);
var _ = (function (){var statearr_7334 = state_7264;
(statearr_7334[(4)] = cljs.core.cons.call(null,(52),(state_7264[(4)])));

return statearr_7334;
})();
var state_7264__$1 = state_7264;
if(cljs.core.truth_(inst_7176)){
var statearr_7335_7521 = state_7264__$1;
(statearr_7335_7521[(1)] = (53));

} else {
var statearr_7336_7522 = state_7264__$1;
(statearr_7336_7522[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (18))){
var inst_7061 = (state_7264[(18)]);
var state_7264__$1 = state_7264;
var statearr_7337_7523 = state_7264__$1;
(statearr_7337_7523[(2)] = inst_7061);

(statearr_7337_7523[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (50))){
var inst_7212 = (state_7264[(2)]);
var state_7264__$1 = state_7264;
var statearr_7338_7524 = state_7264__$1;
(statearr_7338_7524[(2)] = inst_7212);

(statearr_7338_7524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (19))){
var inst_7071 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7339 = state_7264;
(statearr_7339[(20)] = inst_7071);

return statearr_7339;
})();
var statearr_7340_7525 = state_7264__$1;
(statearr_7340_7525[(2)] = null);

(statearr_7340_7525[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (51))){
var inst_7185 = (state_7264[(2)]);
var inst_7186 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7187 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7188 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_7187,inst_7185];
var inst_7189 = cljs.core.PersistentHashMap.fromArrays(inst_7186,inst_7188);
var inst_7190 = cljs.test.do_report.call(null,inst_7189);
var state_7264__$1 = state_7264;
var statearr_7342_7526 = state_7264__$1;
(statearr_7342_7526[(2)] = inst_7190);

(statearr_7342_7526[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (20))){
var _ = (function (){var statearr_7343 = state_7264;
(statearr_7343[(4)] = cljs.core.cons.call(null,(23),(state_7264[(4)])));

return statearr_7343;
})();
var inst_7083 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7084 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle must be in the future"];
var inst_7085 = cljs.core.PersistentHashMap.fromArrays(inst_7083,inst_7084);
var inst_7086 = cljs.test.do_report.call(null,inst_7085);
var ___$1 = (function (){var statearr_7344 = state_7264;
(statearr_7344[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7344;
})();
var state_7264__$1 = state_7264;
var statearr_7345_7527 = state_7264__$1;
(statearr_7345_7527[(2)] = inst_7086);

(statearr_7345_7527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (52))){
var _ = (function (){var statearr_7346 = state_7264;
(statearr_7346[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7346;
})();
var state_7264__$1 = state_7264;
var ex7341 = (state_7264__$1[(2)]);
var statearr_7347_7528 = state_7264__$1;
(statearr_7347_7528[(5)] = ex7341);


var statearr_7348_7529 = state_7264__$1;
(statearr_7348_7529[(1)] = (51));

(statearr_7348_7529[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (21))){
var inst_7089 = (state_7264[(2)]);
var _ = (function (){var statearr_7349 = state_7264;
(statearr_7349[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7349;
})();
var state_7264__$1 = state_7264;
var statearr_7350_7530 = state_7264__$1;
(statearr_7350_7530[(2)] = inst_7089);

(statearr_7350_7530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (53))){
var inst_7176 = (state_7264[(16)]);
var inst_7197 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7198 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7199 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"must be contract owner",inst_7198,inst_7176];
var inst_7200 = cljs.core.PersistentHashMap.fromArrays(inst_7197,inst_7199);
var inst_7201 = cljs.test.do_report.call(null,inst_7200);
var state_7264__$1 = state_7264;
var statearr_7351_7531 = state_7264__$1;
(statearr_7351_7531[(2)] = inst_7201);

(statearr_7351_7531[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (22))){
var inst_7072 = (state_7264[(2)]);
var inst_7073 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7074 = null;
var inst_7075 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle must be in the future",inst_7074,inst_7072];
var inst_7076 = cljs.core.PersistentHashMap.fromArrays(inst_7073,inst_7075);
var inst_7077 = cljs.test.do_report.call(null,inst_7076);
var state_7264__$1 = state_7264;
var statearr_7353_7532 = state_7264__$1;
(statearr_7353_7532[(2)] = inst_7077);

(statearr_7353_7532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (54))){
var inst_7176 = (state_7264[(16)]);
var inst_7203 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7204 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7205 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner",inst_7204,inst_7176];
var inst_7206 = cljs.core.PersistentHashMap.fromArrays(inst_7203,inst_7205);
var inst_7207 = cljs.test.do_report.call(null,inst_7206);
var state_7264__$1 = state_7264;
var statearr_7354_7533 = state_7264__$1;
(statearr_7354_7533[(2)] = inst_7207);

(statearr_7354_7533[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (23))){
var _ = (function (){var statearr_7355 = state_7264;
(statearr_7355[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7355;
})();
var state_7264__$1 = state_7264;
var ex7352 = (state_7264__$1[(2)]);
var statearr_7356_7534 = state_7264__$1;
(statearr_7356_7534[(5)] = ex7352);


var statearr_7357_7535 = state_7264__$1;
(statearr_7357_7535[(1)] = (22));

(statearr_7357_7535[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (55))){
var inst_7176 = (state_7264[(16)]);
var inst_7209 = (state_7264[(2)]);
var _ = (function (){var statearr_7359 = state_7264;
(statearr_7359[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7359;
})();
var state_7264__$1 = (function (){var statearr_7360 = state_7264;
(statearr_7360[(21)] = inst_7209);

return statearr_7360;
})();
var statearr_7361_7536 = state_7264__$1;
(statearr_7361_7536[(2)] = inst_7176);

(statearr_7361_7536[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (24))){
var _ = (function (){var statearr_7362 = state_7264;
(statearr_7362[(4)] = cljs.core.cons.call(null,(31),(state_7264[(4)])));

return statearr_7362;
})();
var inst_7118 = [new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"start_time","start_time",(889556682)),new cljs.core.Keyword(null,"budget","budget",(-405386281))];
var inst_7119 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7120 = [new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"contract","contract",(798152745))];
var inst_7121 = ["326000.0000 EFX",e2e.proposals.token_acc];
var inst_7122 = cljs.core.PersistentHashMap.fromArrays(inst_7120,inst_7121);
var inst_7123 = [inst_7122];
var inst_7124 = (new cljs.core.PersistentVector(null,(1),(5),inst_7119,inst_7123,null));
var inst_7125 = [(3),"2021-01-01 12:00:00",inst_7124];
var inst_7126 = cljs.core.PersistentHashMap.fromArrays(inst_7118,inst_7125);
var inst_7127 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"updatecycle",inst_7126);
var inst_7128 = cljs.core.async.interop.p__GT_c.call(null,inst_7127);
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7264__$1,(32),inst_7128);
} else {
if((state_val_7265 === (56))){
var _ = (function (){var statearr_7363 = state_7264;
(statearr_7363[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7363;
})();
var state_7264__$1 = state_7264;
var ex7358 = (state_7264__$1[(2)]);
var statearr_7364_7537 = state_7264__$1;
(statearr_7364_7537[(5)] = ex7358);


if((ex7358 instanceof Error)){
var statearr_7365_7538 = state_7264__$1;
(statearr_7365_7538[(1)] = (45));

(statearr_7365_7538[(5)] = null);

} else {
throw ex7358;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (25))){
var inst_7171 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7366 = state_7264;
(statearr_7366[(22)] = inst_7171);

return statearr_7366;
})();
var statearr_7367_7539 = state_7264__$1;
(statearr_7367_7539[(2)] = null);

(statearr_7367_7539[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (57))){
var inst_7230 = (state_7264[(23)]);
var inst_7230__$1 = (state_7264[(2)]);
var inst_7231 = (inst_7230__$1 instanceof cljs.core.ExceptionInfo);
var inst_7232 = cljs.core.ex_data.call(null,inst_7230__$1);
var inst_7233 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7232);
var inst_7234 = cljs.core._EQ_.call(null,inst_7233,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7235 = ((inst_7231) && (inst_7234));
var state_7264__$1 = (function (){var statearr_7368 = state_7264;
(statearr_7368[(23)] = inst_7230__$1);

return statearr_7368;
})();
if(cljs.core.truth_(inst_7235)){
var statearr_7369_7540 = state_7264__$1;
(statearr_7369_7540[(1)] = (58));

} else {
var statearr_7370_7541 = state_7264__$1;
(statearr_7370_7541[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (26))){
var inst_7093 = (state_7264[(2)]);
var inst_7094 = cljs.core.prn.call(null,"test failed with ",inst_7093);
var state_7264__$1 = (function (){var statearr_7371 = state_7264;
(statearr_7371[(24)] = inst_7094);

return statearr_7371;
})();
var statearr_7372_7542 = state_7264__$1;
(statearr_7372_7542[(2)] = null);

(statearr_7372_7542[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (58))){
var inst_7230 = (state_7264[(23)]);
var inst_7237 = (function(){throw inst_7230})();
var state_7264__$1 = state_7264;
var statearr_7373_7543 = state_7264__$1;
(statearr_7373_7543[(2)] = inst_7237);

(statearr_7373_7543[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (27))){
var _ = (function (){var statearr_7374 = state_7264;
(statearr_7374[(4)] = cljs.core.cons.call(null,(30),(state_7264[(4)])));

return statearr_7374;
})();
var inst_7106 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7107 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null];
var inst_7108 = cljs.core.PersistentHashMap.fromArrays(inst_7106,inst_7107);
var inst_7109 = cljs.test.do_report.call(null,inst_7108);
var ___$1 = (function (){var statearr_7375 = state_7264;
(statearr_7375[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7375;
})();
var state_7264__$1 = state_7264;
var statearr_7376_7544 = state_7264__$1;
(statearr_7376_7544[(2)] = inst_7109);

(statearr_7376_7544[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (59))){
var inst_7230 = (state_7264[(23)]);
var state_7264__$1 = state_7264;
var statearr_7377_7545 = state_7264__$1;
(statearr_7377_7545[(2)] = inst_7230);

(statearr_7377_7545[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (28))){
var inst_7112 = (state_7264[(2)]);
var state_7264__$1 = state_7264;
var statearr_7378_7546 = state_7264__$1;
(statearr_7378_7546[(2)] = inst_7112);

(statearr_7378_7546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (60))){
var inst_7240 = (state_7264[(2)]);
var state_7264__$1 = (function (){var statearr_7379 = state_7264;
(statearr_7379[(25)] = inst_7240);

return statearr_7379;
})();
var statearr_7380_7547 = state_7264__$1;
(statearr_7380_7547[(2)] = null);

(statearr_7380_7547[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (29))){
var inst_7095 = (state_7264[(2)]);
var inst_7096 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7097 = null;
var inst_7098 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_7097,inst_7095];
var inst_7099 = cljs.core.PersistentHashMap.fromArrays(inst_7096,inst_7098);
var inst_7100 = cljs.test.do_report.call(null,inst_7099);
var state_7264__$1 = state_7264;
var statearr_7382_7548 = state_7264__$1;
(statearr_7382_7548[(2)] = inst_7100);

(statearr_7382_7548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (61))){
var _ = (function (){var statearr_7383 = state_7264;
(statearr_7383[(4)] = cljs.core.cons.call(null,(64),(state_7264[(4)])));

return statearr_7383;
})();
var inst_7252 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7253 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"must be contract owner"];
var inst_7254 = cljs.core.PersistentHashMap.fromArrays(inst_7252,inst_7253);
var inst_7255 = cljs.test.do_report.call(null,inst_7254);
var ___$1 = (function (){var statearr_7384 = state_7264;
(statearr_7384[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7384;
})();
var state_7264__$1 = state_7264;
var statearr_7385_7549 = state_7264__$1;
(statearr_7385_7549[(2)] = inst_7255);

(statearr_7385_7549[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (30))){
var _ = (function (){var statearr_7387 = state_7264;
(statearr_7387[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7387;
})();
var state_7264__$1 = state_7264;
var ex7381 = (state_7264__$1[(2)]);
var statearr_7388_7550 = state_7264__$1;
(statearr_7388_7550[(5)] = ex7381);


var statearr_7389_7551 = state_7264__$1;
(statearr_7389_7551[(1)] = (29));

(statearr_7389_7551[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (62))){
var inst_7258 = (state_7264[(2)]);
var _ = (function (){var statearr_7390 = state_7264;
(statearr_7390[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7390;
})();
var state_7264__$1 = state_7264;
var statearr_7391_7552 = state_7264__$1;
(statearr_7391_7552[(2)] = inst_7258);

(statearr_7391_7552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (31))){
var _ = (function (){var statearr_7392 = state_7264;
(statearr_7392[(4)] = cljs.core.rest.call(null,(state_7264[(4)])));

return statearr_7392;
})();
var state_7264__$1 = state_7264;
var ex7386 = (state_7264__$1[(2)]);
var statearr_7393_7553 = state_7264__$1;
(statearr_7393_7553[(5)] = ex7386);


if((ex7386 instanceof Error)){
var statearr_7394_7554 = state_7264__$1;
(statearr_7394_7554[(1)] = (26));

(statearr_7394_7554[(5)] = null);

} else {
throw ex7386;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_7265 === (63))){
var inst_7241 = (state_7264[(2)]);
var inst_7242 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7243 = null;
var inst_7244 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"must be contract owner",inst_7243,inst_7241];
var inst_7245 = cljs.core.PersistentHashMap.fromArrays(inst_7242,inst_7244);
var inst_7246 = cljs.test.do_report.call(null,inst_7245);
var state_7264__$1 = state_7264;
var statearr_7395_7555 = state_7264__$1;
(statearr_7395_7555[(2)] = inst_7246);

(statearr_7395_7555[(1)] = (62));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_7396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7396[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_7396[(1)] = (1));

return statearr_7396;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_7264){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_7264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e7397){var ex__18__auto__ = e7397;
var statearr_7398_7556 = state_7264;
(statearr_7398_7556[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_7264[(4)]))){
var statearr_7399_7557 = state_7264;
(statearr_7399_7557[(1)] = cljs.core.first.call(null,(state_7264[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7558 = state_7264;
state_7264 = G__7558;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_7264){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_7264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_7400 = f__20__auto__.call(null);
(statearr_7400[(6)] = c__19__auto__);

return statearr_7400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals6605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta6606","meta6606",(329389086),null)], null);
});

e2e.proposals.t_e2e$proposals6605.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals6605.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals6605";

e2e.proposals.t_e2e$proposals6605.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals6605");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals6605.
 */
e2e.proposals.__GT_t_e2e$proposals6605 = (function e2e$proposals$__GT_t_e2e$proposals6605(meta6606){
return (new e2e.proposals.t_e2e$proposals6605(meta6606));
});

}

return (new e2e.proposals.t_e2e$proposals6605(null));
});

e2e.proposals.cycle_update.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.cycle_update;},new cljs.core.Symbol("e2e.proposals","cycle-update","e2e.proposals/cycle-update",(1535968581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-update","cycle-update",(-1460045646),null),"e2e/proposals.cljs",(22),(1),(187),(187),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_update)?e2e.proposals.cycle_update.cljs$lang$test:null)]));
e2e.proposals.vote = (function e2e$proposals$vote(){
return cljs.test.test_var.call(null,e2e.proposals.vote.cljs$lang$var);
});
e2e.proposals.vote.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals7559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals7559 = (function (meta7560){
this.meta7560 = meta7560;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals7559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7561,meta7560__$1){
var self__ = this;
var _7561__$1 = this;
return (new e2e.proposals.t_e2e$proposals7559(meta7560__$1));
});

e2e.proposals.t_e2e$proposals7559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7561){
var self__ = this;
var _7561__$1 = this;
return self__.meta7560;
});

e2e.proposals.t_e2e$proposals7559.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals7559.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_8212){
var state_val_8213 = (state_8212[(1)]);
if((state_val_8213 === (32))){
var _ = (function (){var statearr_8214 = state_8212;
(statearr_8214[(4)] = cljs.core.cons.call(null,(39),(state_8212[(4)])));

return statearr_8214;
})();
var inst_7693 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_7694 = [e2e.proposals.owner_acc,(0),(0)];
var inst_7695 = cljs.core.PersistentHashMap.fromArrays(inst_7693,inst_7694);
var inst_7696 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_7695);
var inst_7697 = cljs.core.async.interop.p__GT_c.call(null,inst_7696);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(40),inst_7697);
} else {
if((state_val_8213 === (64))){
var inst_7810 = (state_8212[(2)]);
var _ = (function (){var statearr_8215 = state_8212;
(statearr_8215[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8215;
})();
var state_8212__$1 = state_8212;
var statearr_8216_9511 = state_8212__$1;
(statearr_8216_9511[(2)] = inst_7810);

(statearr_8216_9511[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (96))){
var inst_7924 = (state_8212[(2)]);
var inst_7925 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_7926 = cljs.core.async.interop.p__GT_c.call(null,inst_7925);
var state_8212__$1 = (function (){var statearr_8217 = state_8212;
(statearr_8217[(7)] = inst_7924);

return statearr_8217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(97),inst_7926);
} else {
if((state_val_8213 === (128))){
var inst_8087 = (state_8212[(8)]);
var state_8212__$1 = state_8212;
var statearr_8218_9512 = state_8212__$1;
(statearr_8218_9512[(2)] = inst_8087);

(statearr_8218_9512[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (1))){
var state_8212__$1 = state_8212;
var statearr_8219_9513 = state_8212__$1;
(statearr_8219_9513[(2)] = null);

(statearr_8219_9513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (33))){
var inst_7740 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8220 = state_8212;
(statearr_8220[(9)] = inst_7740);

return statearr_8220;
})();
var statearr_8221_9514 = state_8212__$1;
(statearr_8221_9514[(2)] = null);

(statearr_8221_9514[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (65))){
var inst_7783 = (state_8212[(2)]);
var inst_7784 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7785 = true;
var inst_7786 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_7785,inst_7783];
var inst_7787 = cljs.core.PersistentHashMap.fromArrays(inst_7784,inst_7786);
var inst_7788 = cljs.test.do_report.call(null,inst_7787);
var state_8212__$1 = state_8212;
var statearr_8222_9515 = state_8212__$1;
(statearr_8222_9515[(2)] = inst_7788);

(statearr_8222_9515[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (97))){
var inst_7928 = (state_8212[(10)]);
var inst_7928__$1 = (state_8212[(2)]);
var inst_7929 = (inst_7928__$1 instanceof cljs.core.ExceptionInfo);
var inst_7930 = cljs.core.ex_data.call(null,inst_7928__$1);
var inst_7931 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7930);
var inst_7932 = cljs.core._EQ_.call(null,inst_7931,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7933 = ((inst_7929) && (inst_7932));
var state_8212__$1 = (function (){var statearr_8223 = state_8212;
(statearr_8223[(10)] = inst_7928__$1);

return statearr_8223;
})();
if(cljs.core.truth_(inst_7933)){
var statearr_8224_9516 = state_8212__$1;
(statearr_8224_9516[(1)] = (98));

} else {
var statearr_8225_9517 = state_8212__$1;
(statearr_8225_9517[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (129))){
var inst_8097 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8226 = state_8212;
(statearr_8226[(11)] = inst_8097);

return statearr_8226;
})();
var statearr_8227_9518 = state_8212__$1;
(statearr_8227_9518[(2)] = null);

(statearr_8227_9518[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (2))){
var _ = (function (){var statearr_8229 = state_8212;
(statearr_8229[(4)] = cljs.core.cons.call(null,(5),(state_8212[(4)])));

return statearr_8229;
})();
var state_8212__$1 = state_8212;
var statearr_8230_9519 = state_8212__$1;
(statearr_8230_9519[(2)] = null);

(statearr_8230_9519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (34))){
var inst_7668 = (state_8212[(2)]);
var inst_7669 = cljs.core.prn.call(null,"test failed with ",inst_7668);
var state_8212__$1 = (function (){var statearr_8231 = state_8212;
(statearr_8231[(12)] = inst_7669);

return statearr_8231;
})();
var statearr_8232_9520 = state_8212__$1;
(statearr_8232_9520[(2)] = null);

(statearr_8232_9520[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (66))){
var _ = (function (){var statearr_8233 = state_8212;
(statearr_8233[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8233;
})();
var state_8212__$1 = state_8212;
var ex8228 = (state_8212__$1[(2)]);
var statearr_8234_9521 = state_8212__$1;
(statearr_8234_9521[(5)] = ex8228);


var statearr_8235_9522 = state_8212__$1;
(statearr_8235_9522[(1)] = (65));

(statearr_8235_9522[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (98))){
var inst_7928 = (state_8212[(10)]);
var inst_7935 = (function(){throw inst_7928})();
var state_8212__$1 = state_8212;
var statearr_8236_9523 = state_8212__$1;
(statearr_8236_9523[(2)] = inst_7935);

(statearr_8236_9523[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (130))){
var _ = (function (){var statearr_8237 = state_8212;
(statearr_8237[(4)] = cljs.core.cons.call(null,(133),(state_8212[(4)])));

return statearr_8237;
})();
var inst_8105 = [new cljs.core.Keyword(null,"hash","hash",(-13781596))];
var inst_8106 = ["ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"];
var inst_8107 = cljs.core.PersistentHashMap.fromArrays(inst_8105,inst_8106);
var inst_8108 = eos_cljs.core.transact.call(null,e2e.proposals.dao_acc,"newmemterms",inst_8107);
var inst_8109 = cljs.core.async.interop.p__GT_c.call(null,inst_8108);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(134),inst_8109);
} else {
if((state_val_8213 === (3))){
var inst_8209 = (state_8212[(2)]);
var inst_8210 = done.call(null);
var state_8212__$1 = (function (){var statearr_8238 = state_8212;
(statearr_8238[(13)] = inst_8209);

return statearr_8238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8212__$1,inst_8210);
} else {
if((state_val_8213 === (35))){
var _ = (function (){var statearr_8239 = state_8212;
(statearr_8239[(4)] = cljs.core.cons.call(null,(38),(state_8212[(4)])));

return statearr_8239;
})();
var inst_7681 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7682 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_7683 = cljs.core.PersistentHashMap.fromArrays(inst_7681,inst_7682);
var inst_7684 = cljs.test.do_report.call(null,inst_7683);
var ___$1 = (function (){var statearr_8240 = state_8212;
(statearr_8240[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8240;
})();
var state_8212__$1 = state_8212;
var statearr_8241_9524 = state_8212__$1;
(statearr_8241_9524[(2)] = inst_7684);

(statearr_8241_9524[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (67))){
var inst_7795 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7796 = true;
var inst_7797 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote",inst_7796,true];
var inst_7798 = cljs.core.PersistentHashMap.fromArrays(inst_7795,inst_7797);
var inst_7799 = cljs.test.do_report.call(null,inst_7798);
var state_8212__$1 = state_8212;
var statearr_8242_9525 = state_8212__$1;
(statearr_8242_9525[(2)] = inst_7799);

(statearr_8242_9525[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (99))){
var inst_7928 = (state_8212[(10)]);
var state_8212__$1 = state_8212;
var statearr_8243_9526 = state_8212__$1;
(statearr_8243_9526[(2)] = inst_7928);

(statearr_8243_9526[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (131))){
var inst_8206 = (state_8212[(2)]);
var _ = (function (){var statearr_8244 = state_8212;
(statearr_8244[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8244;
})();
var state_8212__$1 = state_8212;
var statearr_8245_9527 = state_8212__$1;
(statearr_8245_9527[(2)] = inst_8206);

(statearr_8245_9527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (4))){
var inst_7563 = (state_8212[(2)]);
var inst_7564 = cljs.core.prn.call(null,inst_7563);
var state_8212__$1 = state_8212;
var statearr_8246_9528 = state_8212__$1;
(statearr_8246_9528[(2)] = inst_7564);

(statearr_8246_9528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (36))){
var inst_7687 = (state_8212[(2)]);
var state_8212__$1 = state_8212;
var statearr_8247_9529 = state_8212__$1;
(statearr_8247_9529[(2)] = inst_7687);

(statearr_8247_9529[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (68))){
var inst_7801 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7802 = true;
var inst_7803 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote",inst_7802,true];
var inst_7804 = cljs.core.PersistentHashMap.fromArrays(inst_7801,inst_7803);
var inst_7805 = cljs.test.do_report.call(null,inst_7804);
var state_8212__$1 = state_8212;
var statearr_8248_9530 = state_8212__$1;
(statearr_8248_9530[(2)] = inst_7805);

(statearr_8248_9530[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (100))){
var inst_7941 = (state_8212[(14)]);
var inst_7938 = (state_8212[(2)]);
var inst_7939 = (function (){var rows = inst_7938;
return ((function (rows,inst_7941,inst_7938,state_val_8213,c__19__auto__,___192__auto__,self____$1){
return (function (p1__1_SHARP_){
return cljs.core._EQ_.call(null,p1__1_SHARP_.call(null,"id"),(0));
});
;})(rows,inst_7941,inst_7938,state_val_8213,c__19__auto__,___192__auto__,self____$1))
})();
var inst_7940 = cljs.core.filter.call(null,inst_7939,inst_7938);
var inst_7941__$1 = cljs.core.first.call(null,inst_7940);
var inst_7942 = cljs.core.prn.call(null,inst_7941__$1);
var state_8212__$1 = (function (){var statearr_8250 = state_8212;
(statearr_8250[(14)] = inst_7941__$1);

(statearr_8250[(15)] = inst_7942);

return statearr_8250;
})();
var statearr_8251_9531 = state_8212__$1;
(statearr_8251_9531[(2)] = null);

(statearr_8251_9531[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (132))){
var inst_8098 = (state_8212[(2)]);
var inst_8099 = cljs.core.prn.call(null,inst_8098);
var state_8212__$1 = state_8212;
var statearr_8252_9532 = state_8212__$1;
(statearr_8252_9532[(2)] = inst_8099);

(statearr_8252_9532[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (5))){
var _ = (function (){var statearr_8253 = state_8212;
(statearr_8253[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8253;
})();
var state_8212__$1 = state_8212;
var ex8249 = (state_8212__$1[(2)]);
var statearr_8254_9533 = state_8212__$1;
(statearr_8254_9533[(5)] = ex8249);


if((ex8249 instanceof Error)){
var statearr_8255_9534 = state_8212__$1;
(statearr_8255_9534[(1)] = (4));

(statearr_8255_9534[(5)] = null);

} else {
throw ex8249;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (37))){
var inst_7670 = (state_8212[(2)]);
var inst_7671 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7672 = null;
var inst_7673 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_7672,inst_7670];
var inst_7674 = cljs.core.PersistentHashMap.fromArrays(inst_7671,inst_7673);
var inst_7675 = cljs.test.do_report.call(null,inst_7674);
var state_8212__$1 = state_8212;
var statearr_8256_9535 = state_8212__$1;
(statearr_8256_9535[(2)] = inst_7675);

(statearr_8256_9535[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (69))){
var inst_7807 = (state_8212[(2)]);
var _ = (function (){var statearr_8258 = state_8212;
(statearr_8258[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8258;
})();
var state_8212__$1 = (function (){var statearr_8259 = state_8212;
(statearr_8259[(16)] = inst_7807);

return statearr_8259;
})();
var statearr_8260_9536 = state_8212__$1;
(statearr_8260_9536[(2)] = true);

(statearr_8260_9536[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (101))){
var inst_7941 = (state_8212[(14)]);
var inst_7959 = (state_8212[(17)]);
var inst_7960 = (state_8212[(18)]);
var _ = (function (){var statearr_8261 = state_8212;
(statearr_8261[(4)] = cljs.core.cons.call(null,(104),(state_8212[(4)])));

return statearr_8261;
})();
var inst_7954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7955 = ["vote_counts",(0),"value"];
var inst_7956 = (new cljs.core.PersistentVector(null,(3),(5),inst_7954,inst_7955,null));
var inst_7957 = cljs.core.get_in.call(null,inst_7941,inst_7956);
var inst_7958 = (new cljs.core.List(null,(0),null,(1),null));
var inst_7959__$1 = (new cljs.core.List(null,inst_7957,inst_7958,(2),null));
var inst_7960__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_7959__$1);
var state_8212__$1 = (function (){var statearr_8262 = state_8212;
(statearr_8262[(17)] = inst_7959__$1);

(statearr_8262[(18)] = inst_7960__$1);

return statearr_8262;
})();
if(cljs.core.truth_(inst_7960__$1)){
var statearr_8263_9537 = state_8212__$1;
(statearr_8263_9537[(1)] = (105));

} else {
var statearr_8264_9538 = state_8212__$1;
(statearr_8264_9538[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (133))){
var _ = (function (){var statearr_8266 = state_8212;
(statearr_8266[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8266;
})();
var state_8212__$1 = state_8212;
var ex8257 = (state_8212__$1[(2)]);
var statearr_8267_9539 = state_8212__$1;
(statearr_8267_9539[(5)] = ex8257);


if((ex8257 instanceof Error)){
var statearr_8268_9540 = state_8212__$1;
(statearr_8268_9540[(1)] = (132));

(statearr_8268_9540[(5)] = null);

} else {
throw ex8257;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (6))){
var _ = (function (){var statearr_8269 = state_8212;
(statearr_8269[(4)] = cljs.core.cons.call(null,(19),(state_8212[(4)])));

return statearr_8269;
})();
var inst_7614 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_7615 = [e2e.proposals.owner_acc,(0),(0)];
var inst_7616 = cljs.core.PersistentHashMap.fromArrays(inst_7614,inst_7615);
var inst_7617 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_7616);
var inst_7618 = cljs.core.async.interop.p__GT_c.call(null,inst_7617);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(20),inst_7618);
} else {
if((state_val_8213 === (38))){
var _ = (function (){var statearr_8270 = state_8212;
(statearr_8270[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8270;
})();
var state_8212__$1 = state_8212;
var ex8265 = (state_8212__$1[(2)]);
var statearr_8271_9541 = state_8212__$1;
(statearr_8271_9541[(5)] = ex8265);


var statearr_8272_9542 = state_8212__$1;
(statearr_8272_9542[(1)] = (37));

(statearr_8272_9542[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (70))){
var _ = (function (){var statearr_8273 = state_8212;
(statearr_8273[(4)] = cljs.core.cons.call(null,(77),(state_8212[(4)])));

return statearr_8273;
})();
var inst_7839 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_7840 = [e2e.proposals.owner_acc,(0),(2)];
var inst_7841 = cljs.core.PersistentHashMap.fromArrays(inst_7839,inst_7840);
var inst_7842 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_7841);
var inst_7843 = cljs.core.async.interop.p__GT_c.call(null,inst_7842);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(78),inst_7843);
} else {
if((state_val_8213 === (102))){
var inst_7983 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8274 = state_8212;
(statearr_8274[(19)] = inst_7983);

return statearr_8274;
})();
var statearr_8275_9543 = state_8212__$1;
(statearr_8275_9543[(2)] = null);

(statearr_8275_9543[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (134))){
var inst_8111 = (state_8212[(20)]);
var inst_8111__$1 = (state_8212[(2)]);
var inst_8112 = (inst_8111__$1 instanceof cljs.core.ExceptionInfo);
var inst_8113 = cljs.core.ex_data.call(null,inst_8111__$1);
var inst_8114 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8113);
var inst_8115 = cljs.core._EQ_.call(null,inst_8114,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8116 = ((inst_8112) && (inst_8115));
var state_8212__$1 = (function (){var statearr_8277 = state_8212;
(statearr_8277[(20)] = inst_8111__$1);

return statearr_8277;
})();
if(cljs.core.truth_(inst_8116)){
var statearr_8278_9544 = state_8212__$1;
(statearr_8278_9544[(1)] = (135));

} else {
var statearr_8279_9545 = state_8212__$1;
(statearr_8279_9545[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (7))){
var inst_7651 = (state_8212[(2)]);
var inst_7652 = ((9000000) + (1));
var inst_7653 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),inst_7652,new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(9000000));
var inst_7654 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_7653);
var inst_7655 = cljs.core.async.interop.p__GT_c.call(null,inst_7654);
var state_8212__$1 = (function (){var statearr_8280 = state_8212;
(statearr_8280[(21)] = inst_7651);

return statearr_8280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(28),inst_7655);
} else {
if((state_val_8213 === (39))){
var _ = (function (){var statearr_8281 = state_8212;
(statearr_8281[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8281;
})();
var state_8212__$1 = state_8212;
var ex8276 = (state_8212__$1[(2)]);
var statearr_8282_9546 = state_8212__$1;
(statearr_8282_9546[(5)] = ex8276);


if((ex8276 instanceof Error)){
var statearr_8283_9547 = state_8212__$1;
(statearr_8283_9547[(1)] = (34));

(statearr_8283_9547[(5)] = null);

} else {
throw ex8276;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (71))){
var inst_7886 = (state_8212[(2)]);
var inst_7887 = Promise.resolve((42));
var inst_7888 = eos_cljs.core.wait_block.call(null,inst_7887,(2));
var inst_7889 = cljs.core.async.interop.p__GT_c.call(null,inst_7888);
var state_8212__$1 = (function (){var statearr_8284 = state_8212;
(statearr_8284[(22)] = inst_7886);

return statearr_8284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(89),inst_7889);
} else {
if((state_val_8213 === (103))){
var inst_7943 = (state_8212[(2)]);
var inst_7944 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7945 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_7946 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_7945,inst_7943];
var inst_7947 = cljs.core.PersistentHashMap.fromArrays(inst_7944,inst_7946);
var inst_7948 = cljs.test.do_report.call(null,inst_7947);
var state_8212__$1 = state_8212;
var statearr_8285_9548 = state_8212__$1;
(statearr_8285_9548[(2)] = inst_7948);

(statearr_8285_9548[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (135))){
var inst_8111 = (state_8212[(20)]);
var inst_8118 = (function(){throw inst_8111})();
var state_8212__$1 = state_8212;
var statearr_8286_9549 = state_8212__$1;
(statearr_8286_9549[(2)] = inst_8118);

(statearr_8286_9549[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (8))){
var inst_7572 = (state_8212[(23)]);
var inst_7573 = (state_8212[(24)]);
var inst_7570 = (state_8212[(2)]);
var inst_7571 = inst_7570.cause;
var inst_7572__$1 = inst_7571.message;
var inst_7573__$1 = clojure.string.ends_with_QMARK_.call(null,inst_7572__$1,"not in voting period");
var inst_7574 = (!(inst_7573__$1));
var state_8212__$1 = (function (){var statearr_8287 = state_8212;
(statearr_8287[(23)] = inst_7572__$1);

(statearr_8287[(24)] = inst_7573__$1);

return statearr_8287;
})();
if(inst_7574){
var statearr_8288_9550 = state_8212__$1;
(statearr_8288_9550[(1)] = (9));

} else {
var statearr_8289_9551 = state_8212__$1;
(statearr_8289_9551[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (40))){
var inst_7699 = (state_8212[(25)]);
var inst_7699__$1 = (state_8212[(2)]);
var inst_7700 = (inst_7699__$1 instanceof cljs.core.ExceptionInfo);
var inst_7701 = cljs.core.ex_data.call(null,inst_7699__$1);
var inst_7702 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7701);
var inst_7703 = cljs.core._EQ_.call(null,inst_7702,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7704 = ((inst_7700) && (inst_7703));
var state_8212__$1 = (function (){var statearr_8291 = state_8212;
(statearr_8291[(25)] = inst_7699__$1);

return statearr_8291;
})();
if(cljs.core.truth_(inst_7704)){
var statearr_8292_9552 = state_8212__$1;
(statearr_8292_9552[(1)] = (41));

} else {
var statearr_8293_9553 = state_8212__$1;
(statearr_8293_9553[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (72))){
var inst_7814 = (state_8212[(2)]);
var inst_7815 = cljs.core.prn.call(null,"test failed with ",inst_7814);
var state_8212__$1 = (function (){var statearr_8294 = state_8212;
(statearr_8294[(26)] = inst_7815);

return statearr_8294;
})();
var statearr_8295_9554 = state_8212__$1;
(statearr_8295_9554[(2)] = null);

(statearr_8295_9554[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (104))){
var _ = (function (){var statearr_8296 = state_8212;
(statearr_8296[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8296;
})();
var state_8212__$1 = state_8212;
var ex8290 = (state_8212__$1[(2)]);
var statearr_8297_9555 = state_8212__$1;
(statearr_8297_9555[(5)] = ex8290);


var statearr_8298_9556 = state_8212__$1;
(statearr_8298_9556[(1)] = (103));

(statearr_8298_9556[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (136))){
var inst_8111 = (state_8212[(20)]);
var state_8212__$1 = state_8212;
var statearr_8299_9557 = state_8212__$1;
(statearr_8299_9557[(2)] = inst_8111);

(statearr_8299_9557[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (9))){
var inst_7572 = (state_8212[(23)]);
var inst_7576 = ["expected =","not in voting period"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_7572)].join('');
var inst_7577 = cljs.core.prn.call(null,inst_7576);
var state_8212__$1 = state_8212;
var statearr_8300_9558 = state_8212__$1;
(statearr_8300_9558[(2)] = inst_7577);

(statearr_8300_9558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (41))){
var inst_7699 = (state_8212[(25)]);
var inst_7706 = (function(){throw inst_7699})();
var state_8212__$1 = state_8212;
var statearr_8301_9559 = state_8212__$1;
(statearr_8301_9559[(2)] = inst_7706);

(statearr_8301_9559[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (73))){
var _ = (function (){var statearr_8302 = state_8212;
(statearr_8302[(4)] = cljs.core.cons.call(null,(76),(state_8212[(4)])));

return statearr_8302;
})();
var inst_7827 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7828 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice"];
var inst_7829 = cljs.core.PersistentHashMap.fromArrays(inst_7827,inst_7828);
var inst_7830 = cljs.test.do_report.call(null,inst_7829);
var ___$1 = (function (){var statearr_8303 = state_8212;
(statearr_8303[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8303;
})();
var state_8212__$1 = state_8212;
var statearr_8304_9560 = state_8212__$1;
(statearr_8304_9560[(2)] = inst_7830);

(statearr_8304_9560[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (105))){
var inst_7959 = (state_8212[(17)]);
var inst_7962 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7963 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_7964 = cljs.core.cons.call(null,cljs.core._EQ_,inst_7959);
var inst_7965 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_7963,inst_7964];
var inst_7966 = cljs.core.PersistentHashMap.fromArrays(inst_7962,inst_7965);
var inst_7967 = cljs.test.do_report.call(null,inst_7966);
var state_8212__$1 = state_8212;
var statearr_8305_9561 = state_8212__$1;
(statearr_8305_9561[(2)] = inst_7967);

(statearr_8305_9561[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (137))){
var inst_8121 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8306 = state_8212;
(statearr_8306[(27)] = inst_8121);

return statearr_8306;
})();
var statearr_8307_9562 = state_8212__$1;
(statearr_8307_9562[(2)] = null);

(statearr_8307_9562[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (10))){
var state_8212__$1 = state_8212;
var statearr_8308_9563 = state_8212__$1;
(statearr_8308_9563[(2)] = null);

(statearr_8308_9563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (42))){
var inst_7699 = (state_8212[(25)]);
var state_8212__$1 = state_8212;
var statearr_8309_9564 = state_8212__$1;
(statearr_8309_9564[(2)] = inst_7699);

(statearr_8309_9564[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (74))){
var inst_7833 = (state_8212[(2)]);
var state_8212__$1 = state_8212;
var statearr_8310_9565 = state_8212__$1;
(statearr_8310_9565[(2)] = inst_7833);

(statearr_8310_9565[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (106))){
var inst_7959 = (state_8212[(17)]);
var inst_7969 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7970 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_7971 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_7972 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_7973 = cljs.core.cons.call(null,inst_7972,inst_7959);
var inst_7974 = (new cljs.core.List(null,inst_7973,null,(1),null));
var inst_7975 = (new cljs.core.List(null,inst_7971,inst_7974,(2),null));
var inst_7976 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_7970,inst_7975];
var inst_7977 = cljs.core.PersistentHashMap.fromArrays(inst_7969,inst_7976);
var inst_7978 = cljs.test.do_report.call(null,inst_7977);
var state_8212__$1 = state_8212;
var statearr_8311_9566 = state_8212__$1;
(statearr_8311_9566[(2)] = inst_7978);

(statearr_8311_9566[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (138))){
var _ = (function (){var statearr_8312 = state_8212;
(statearr_8312[(4)] = cljs.core.cons.call(null,(151),(state_8212[(4)])));

return statearr_8312;
})();
var inst_8166 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8167 = [e2e.proposals.owner_acc,(1),(3)];
var inst_8168 = cljs.core.PersistentHashMap.fromArrays(inst_8166,inst_8167);
var inst_8169 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8168);
var inst_8170 = cljs.core.async.interop.p__GT_c.call(null,inst_8169);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(152),inst_8170);
} else {
if((state_val_8213 === (11))){
var inst_7580 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8313 = state_8212;
(statearr_8313[(28)] = inst_7580);

return statearr_8313;
})();
var statearr_8314_9567 = state_8212__$1;
(statearr_8314_9567[(2)] = null);

(statearr_8314_9567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (43))){
var inst_7709 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8315 = state_8212;
(statearr_8315[(29)] = inst_7709);

return statearr_8315;
})();
var statearr_8316_9568 = state_8212__$1;
(statearr_8316_9568[(2)] = null);

(statearr_8316_9568[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (75))){
var inst_7816 = (state_8212[(2)]);
var inst_7817 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7818 = null;
var inst_7819 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_7818,inst_7816];
var inst_7820 = cljs.core.PersistentHashMap.fromArrays(inst_7817,inst_7819);
var inst_7821 = cljs.test.do_report.call(null,inst_7820);
var state_8212__$1 = state_8212;
var statearr_8317_9569 = state_8212__$1;
(statearr_8317_9569[(2)] = inst_7821);

(statearr_8317_9569[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (107))){
var inst_7960 = (state_8212[(18)]);
var inst_7980 = (state_8212[(2)]);
var _ = (function (){var statearr_8318 = state_8212;
(statearr_8318[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8318;
})();
var state_8212__$1 = (function (){var statearr_8319 = state_8212;
(statearr_8319[(30)] = inst_7980);

return statearr_8319;
})();
var statearr_8320_9570 = state_8212__$1;
(statearr_8320_9570[(2)] = inst_7960);

(statearr_8320_9570[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (139))){
var inst_8203 = (state_8212[(2)]);
var _ = (function (){var statearr_8321 = state_8212;
(statearr_8321[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8321;
})();
var state_8212__$1 = state_8212;
var statearr_8322_9571 = state_8212__$1;
(statearr_8322_9571[(2)] = inst_8203);

(statearr_8322_9571[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (12))){
var inst_7573 = (state_8212[(24)]);
var _ = (function (){var statearr_8324 = state_8212;
(statearr_8324[(4)] = cljs.core.cons.call(null,(15),(state_8212[(4)])));

return statearr_8324;
})();
var state_8212__$1 = state_8212;
if(cljs.core.truth_(inst_7573)){
var statearr_8325_9572 = state_8212__$1;
(statearr_8325_9572[(1)] = (16));

} else {
var statearr_8326_9573 = state_8212__$1;
(statearr_8326_9573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (44))){
var _ = (function (){var statearr_8327 = state_8212;
(statearr_8327[(4)] = cljs.core.cons.call(null,(47),(state_8212[(4)])));

return statearr_8327;
})();
var state_8212__$1 = state_8212;
var statearr_8328_9574 = state_8212__$1;
(statearr_8328_9574[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (76))){
var _ = (function (){var statearr_8330 = state_8212;
(statearr_8330[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8330;
})();
var state_8212__$1 = state_8212;
var ex8323 = (state_8212__$1[(2)]);
var statearr_8331_9575 = state_8212__$1;
(statearr_8331_9575[(5)] = ex8323);


var statearr_8332_9576 = state_8212__$1;
(statearr_8332_9576[(1)] = (75));

(statearr_8332_9576[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (108))){
var inst_7941 = (state_8212[(14)]);
var inst_8000 = (state_8212[(31)]);
var inst_8001 = (state_8212[(32)]);
var _ = (function (){var statearr_8333 = state_8212;
(statearr_8333[(4)] = cljs.core.cons.call(null,(111),(state_8212[(4)])));

return statearr_8333;
})();
var inst_7995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7996 = ["vote_counts",(1),"value"];
var inst_7997 = (new cljs.core.PersistentVector(null,(3),(5),inst_7995,inst_7996,null));
var inst_7998 = cljs.core.get_in.call(null,inst_7941,inst_7997);
var inst_7999 = (new cljs.core.List(null,(2),null,(1),null));
var inst_8000__$1 = (new cljs.core.List(null,inst_7998,inst_7999,(2),null));
var inst_8001__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8000__$1);
var state_8212__$1 = (function (){var statearr_8334 = state_8212;
(statearr_8334[(31)] = inst_8000__$1);

(statearr_8334[(32)] = inst_8001__$1);

return statearr_8334;
})();
if(cljs.core.truth_(inst_8001__$1)){
var statearr_8335_9577 = state_8212__$1;
(statearr_8335_9577[(1)] = (112));

} else {
var statearr_8336_9578 = state_8212__$1;
(statearr_8336_9578[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (140))){
var inst_8124 = (state_8212[(33)]);
var inst_8125 = (state_8212[(34)]);
var inst_8122 = (state_8212[(2)]);
var inst_8123 = inst_8122.cause;
var inst_8124__$1 = inst_8123.message;
var inst_8125__$1 = clojure.string.ends_with_QMARK_.call(null,inst_8124__$1,"agreed terms are not the latest");
var inst_8126 = (!(inst_8125__$1));
var state_8212__$1 = (function (){var statearr_8337 = state_8212;
(statearr_8337[(33)] = inst_8124__$1);

(statearr_8337[(34)] = inst_8125__$1);

return statearr_8337;
})();
if(inst_8126){
var statearr_8338_9579 = state_8212__$1;
(statearr_8338_9579[(1)] = (141));

} else {
var statearr_8339_9580 = state_8212__$1;
(statearr_8339_9580[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (13))){
var inst_7608 = (state_8212[(2)]);
var state_8212__$1 = state_8212;
var statearr_8341_9581 = state_8212__$1;
(statearr_8341_9581[(2)] = inst_7608);

(statearr_8341_9581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (45))){
var inst_7737 = (state_8212[(2)]);
var _ = (function (){var statearr_8342 = state_8212;
(statearr_8342[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8342;
})();
var state_8212__$1 = state_8212;
var statearr_8343_9582 = state_8212__$1;
(statearr_8343_9582[(2)] = inst_7737);

(statearr_8343_9582[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (77))){
var _ = (function (){var statearr_8344 = state_8212;
(statearr_8344[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8344;
})();
var state_8212__$1 = state_8212;
var ex8340 = (state_8212__$1[(2)]);
var statearr_8345_9583 = state_8212__$1;
(statearr_8345_9583[(5)] = ex8340);


if((ex8340 instanceof Error)){
var statearr_8346_9584 = state_8212__$1;
(statearr_8346_9584[(1)] = (72));

(statearr_8346_9584[(5)] = null);

} else {
throw ex8340;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (109))){
var inst_8024 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8347 = state_8212;
(statearr_8347[(35)] = inst_8024);

return statearr_8347;
})();
var statearr_8348_9585 = state_8212__$1;
(statearr_8348_9585[(2)] = null);

(statearr_8348_9585[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (141))){
var inst_8124 = (state_8212[(33)]);
var inst_8128 = ["expected =","agreed terms are not the latest"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8124)].join('');
var inst_8129 = cljs.core.prn.call(null,inst_8128);
var state_8212__$1 = state_8212;
var statearr_8349_9586 = state_8212__$1;
(statearr_8349_9586[(2)] = inst_8129);

(statearr_8349_9586[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (14))){
var inst_7581 = (state_8212[(2)]);
var inst_7582 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7583 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7584 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_7583,inst_7581];
var inst_7585 = cljs.core.PersistentHashMap.fromArrays(inst_7582,inst_7584);
var inst_7586 = cljs.test.do_report.call(null,inst_7585);
var state_8212__$1 = state_8212;
var statearr_8350_9587 = state_8212__$1;
(statearr_8350_9587[(2)] = inst_7586);

(statearr_8350_9587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (46))){
var inst_7710 = (state_8212[(2)]);
var inst_7711 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7712 = true;
var inst_7713 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_7712,inst_7710];
var inst_7714 = cljs.core.PersistentHashMap.fromArrays(inst_7711,inst_7713);
var inst_7715 = cljs.test.do_report.call(null,inst_7714);
var state_8212__$1 = state_8212;
var statearr_8351_9588 = state_8212__$1;
(statearr_8351_9588[(2)] = inst_7715);

(statearr_8351_9588[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (78))){
var inst_7845 = (state_8212[(36)]);
var inst_7845__$1 = (state_8212[(2)]);
var inst_7846 = (inst_7845__$1 instanceof cljs.core.ExceptionInfo);
var inst_7847 = cljs.core.ex_data.call(null,inst_7845__$1);
var inst_7848 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7847);
var inst_7849 = cljs.core._EQ_.call(null,inst_7848,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7850 = ((inst_7846) && (inst_7849));
var state_8212__$1 = (function (){var statearr_8352 = state_8212;
(statearr_8352[(36)] = inst_7845__$1);

return statearr_8352;
})();
if(cljs.core.truth_(inst_7850)){
var statearr_8353_9589 = state_8212__$1;
(statearr_8353_9589[(1)] = (79));

} else {
var statearr_8354_9590 = state_8212__$1;
(statearr_8354_9590[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (110))){
var inst_7984 = (state_8212[(2)]);
var inst_7985 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7986 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_7987 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_7986,inst_7984];
var inst_7988 = cljs.core.PersistentHashMap.fromArrays(inst_7985,inst_7987);
var inst_7989 = cljs.test.do_report.call(null,inst_7988);
var state_8212__$1 = state_8212;
var statearr_8356_9591 = state_8212__$1;
(statearr_8356_9591[(2)] = inst_7989);

(statearr_8356_9591[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (142))){
var state_8212__$1 = state_8212;
var statearr_8358_9592 = state_8212__$1;
(statearr_8358_9592[(2)] = null);

(statearr_8358_9592[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (15))){
var _ = (function (){var statearr_8359 = state_8212;
(statearr_8359[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8359;
})();
var state_8212__$1 = state_8212;
var ex8355 = (state_8212__$1[(2)]);
var statearr_8360_9593 = state_8212__$1;
(statearr_8360_9593[(5)] = ex8355);


var statearr_8361_9594 = state_8212__$1;
(statearr_8361_9594[(1)] = (14));

(statearr_8361_9594[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (47))){
var _ = (function (){var statearr_8363 = state_8212;
(statearr_8363[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8363;
})();
var state_8212__$1 = state_8212;
var ex8357 = (state_8212__$1[(2)]);
var statearr_8364_9595 = state_8212__$1;
(statearr_8364_9595[(5)] = ex8357);


var statearr_8365_9596 = state_8212__$1;
(statearr_8365_9596[(1)] = (46));

(statearr_8365_9596[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (79))){
var inst_7845 = (state_8212[(36)]);
var inst_7852 = (function(){throw inst_7845})();
var state_8212__$1 = state_8212;
var statearr_8366_9597 = state_8212__$1;
(statearr_8366_9597[(2)] = inst_7852);

(statearr_8366_9597[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (111))){
var _ = (function (){var statearr_8367 = state_8212;
(statearr_8367[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8367;
})();
var state_8212__$1 = state_8212;
var ex8362 = (state_8212__$1[(2)]);
var statearr_8368_9598 = state_8212__$1;
(statearr_8368_9598[(5)] = ex8362);


var statearr_8369_9599 = state_8212__$1;
(statearr_8369_9599[(1)] = (110));

(statearr_8369_9599[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (143))){
var inst_8132 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8370 = state_8212;
(statearr_8370[(37)] = inst_8132);

return statearr_8370;
})();
var statearr_8371_9600 = state_8212__$1;
(statearr_8371_9600[(2)] = null);

(statearr_8371_9600[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (16))){
var inst_7573 = (state_8212[(24)]);
var inst_7593 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7594 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7595 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_7594,inst_7573];
var inst_7596 = cljs.core.PersistentHashMap.fromArrays(inst_7593,inst_7595);
var inst_7597 = cljs.test.do_report.call(null,inst_7596);
var state_8212__$1 = state_8212;
var statearr_8372_9601 = state_8212__$1;
(statearr_8372_9601[(2)] = inst_7597);

(statearr_8372_9601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (48))){
var inst_7722 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7723 = true;
var inst_7724 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_7723,true];
var inst_7725 = cljs.core.PersistentHashMap.fromArrays(inst_7722,inst_7724);
var inst_7726 = cljs.test.do_report.call(null,inst_7725);
var state_8212__$1 = state_8212;
var statearr_8373_9602 = state_8212__$1;
(statearr_8373_9602[(2)] = inst_7726);

(statearr_8373_9602[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (80))){
var inst_7845 = (state_8212[(36)]);
var state_8212__$1 = state_8212;
var statearr_8374_9603 = state_8212__$1;
(statearr_8374_9603[(2)] = inst_7845);

(statearr_8374_9603[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (112))){
var inst_8000 = (state_8212[(31)]);
var inst_8003 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8004 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_8005 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8000);
var inst_8006 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8004,inst_8005];
var inst_8007 = cljs.core.PersistentHashMap.fromArrays(inst_8003,inst_8006);
var inst_8008 = cljs.test.do_report.call(null,inst_8007);
var state_8212__$1 = state_8212;
var statearr_8375_9604 = state_8212__$1;
(statearr_8375_9604[(2)] = inst_8008);

(statearr_8375_9604[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (144))){
var inst_8125 = (state_8212[(34)]);
var _ = (function (){var statearr_8376 = state_8212;
(statearr_8376[(4)] = cljs.core.cons.call(null,(147),(state_8212[(4)])));

return statearr_8376;
})();
var state_8212__$1 = state_8212;
if(cljs.core.truth_(inst_8125)){
var statearr_8377_9605 = state_8212__$1;
(statearr_8377_9605[(1)] = (148));

} else {
var statearr_8378_9606 = state_8212__$1;
(statearr_8378_9606[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (17))){
var inst_7573 = (state_8212[(24)]);
var inst_7599 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7600 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_7601 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_7600,inst_7573];
var inst_7602 = cljs.core.PersistentHashMap.fromArrays(inst_7599,inst_7601);
var inst_7603 = cljs.test.do_report.call(null,inst_7602);
var state_8212__$1 = state_8212;
var statearr_8379_9607 = state_8212__$1;
(statearr_8379_9607[(2)] = inst_7603);

(statearr_8379_9607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (49))){
var inst_7728 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7729 = true;
var inst_7730 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_7729,true];
var inst_7731 = cljs.core.PersistentHashMap.fromArrays(inst_7728,inst_7730);
var inst_7732 = cljs.test.do_report.call(null,inst_7731);
var state_8212__$1 = state_8212;
var statearr_8380_9608 = state_8212__$1;
(statearr_8380_9608[(2)] = inst_7732);

(statearr_8380_9608[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (81))){
var inst_7855 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8381 = state_8212;
(statearr_8381[(38)] = inst_7855);

return statearr_8381;
})();
var statearr_8382_9609 = state_8212__$1;
(statearr_8382_9609[(2)] = null);

(statearr_8382_9609[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (113))){
var inst_8000 = (state_8212[(31)]);
var inst_8010 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8011 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_8012 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8013 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8014 = cljs.core.cons.call(null,inst_8013,inst_8000);
var inst_8015 = (new cljs.core.List(null,inst_8014,null,(1),null));
var inst_8016 = (new cljs.core.List(null,inst_8012,inst_8015,(2),null));
var inst_8017 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8011,inst_8016];
var inst_8018 = cljs.core.PersistentHashMap.fromArrays(inst_8010,inst_8017);
var inst_8019 = cljs.test.do_report.call(null,inst_8018);
var state_8212__$1 = state_8212;
var statearr_8383_9610 = state_8212__$1;
(statearr_8383_9610[(2)] = inst_8019);

(statearr_8383_9610[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (145))){
var inst_8160 = (state_8212[(2)]);
var state_8212__$1 = state_8212;
var statearr_8384_9611 = state_8212__$1;
(statearr_8384_9611[(2)] = inst_8160);

(statearr_8384_9611[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (18))){
var inst_7573 = (state_8212[(24)]);
var inst_7605 = (state_8212[(2)]);
var _ = (function (){var statearr_8385 = state_8212;
(statearr_8385[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8385;
})();
var state_8212__$1 = (function (){var statearr_8386 = state_8212;
(statearr_8386[(39)] = inst_7605);

return statearr_8386;
})();
var statearr_8387_9612 = state_8212__$1;
(statearr_8387_9612[(2)] = inst_7573);

(statearr_8387_9612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (50))){
var inst_7734 = (state_8212[(2)]);
var _ = (function (){var statearr_8388 = state_8212;
(statearr_8388[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8388;
})();
var state_8212__$1 = (function (){var statearr_8389 = state_8212;
(statearr_8389[(40)] = inst_7734);

return statearr_8389;
})();
var statearr_8390_9613 = state_8212__$1;
(statearr_8390_9613[(2)] = true);

(statearr_8390_9613[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (82))){
var _ = (function (){var statearr_8391 = state_8212;
(statearr_8391[(4)] = cljs.core.cons.call(null,(85),(state_8212[(4)])));

return statearr_8391;
})();
var state_8212__$1 = state_8212;
var statearr_8392_9614 = state_8212__$1;
(statearr_8392_9614[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (114))){
var inst_8001 = (state_8212[(32)]);
var inst_8021 = (state_8212[(2)]);
var _ = (function (){var statearr_8395 = state_8212;
(statearr_8395[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8395;
})();
var state_8212__$1 = (function (){var statearr_8396 = state_8212;
(statearr_8396[(41)] = inst_8021);

return statearr_8396;
})();
var statearr_8397_9615 = state_8212__$1;
(statearr_8397_9615[(2)] = inst_8001);

(statearr_8397_9615[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (146))){
var inst_8133 = (state_8212[(2)]);
var inst_8134 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8135 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8136 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_8135,inst_8133];
var inst_8137 = cljs.core.PersistentHashMap.fromArrays(inst_8134,inst_8136);
var inst_8138 = cljs.test.do_report.call(null,inst_8137);
var state_8212__$1 = state_8212;
var statearr_8398_9616 = state_8212__$1;
(statearr_8398_9616[(2)] = inst_8138);

(statearr_8398_9616[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (19))){
var _ = (function (){var statearr_8399 = state_8212;
(statearr_8399[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8399;
})();
var state_8212__$1 = state_8212;
var ex8394 = (state_8212__$1[(2)]);
var statearr_8400_9617 = state_8212__$1;
(statearr_8400_9617[(5)] = ex8394);


if((ex8394 instanceof Error)){
var statearr_8401_9618 = state_8212__$1;
(statearr_8401_9618[(1)] = (8));

(statearr_8401_9618[(5)] = null);

} else {
throw ex8394;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (51))){
var _ = (function (){var statearr_8402 = state_8212;
(statearr_8402[(4)] = cljs.core.cons.call(null,(58),(state_8212[(4)])));

return statearr_8402;
})();
var inst_7766 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_7767 = [e2e.proposals.owner_acc,(0),(1)];
var inst_7768 = cljs.core.PersistentHashMap.fromArrays(inst_7766,inst_7767);
var inst_7769 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_7768);
var inst_7770 = cljs.core.async.interop.p__GT_c.call(null,inst_7769);
var state_8212__$1 = state_8212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(59),inst_7770);
} else {
if((state_val_8213 === (83))){
var inst_7883 = (state_8212[(2)]);
var _ = (function (){var statearr_8404 = state_8212;
(statearr_8404[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8404;
})();
var state_8212__$1 = state_8212;
var statearr_8405_9619 = state_8212__$1;
(statearr_8405_9619[(2)] = inst_7883);

(statearr_8405_9619[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (115))){
var inst_7941 = (state_8212[(14)]);
var inst_8041 = (state_8212[(42)]);
var inst_8042 = (state_8212[(43)]);
var _ = (function (){var statearr_8406 = state_8212;
(statearr_8406[(4)] = cljs.core.cons.call(null,(118),(state_8212[(4)])));

return statearr_8406;
})();
var inst_8036 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8037 = ["vote_counts",(2),"value"];
var inst_8038 = (new cljs.core.PersistentVector(null,(3),(5),inst_8036,inst_8037,null));
var inst_8039 = cljs.core.get_in.call(null,inst_7941,inst_8038);
var inst_8040 = (new cljs.core.List(null,(5),null,(1),null));
var inst_8041__$1 = (new cljs.core.List(null,inst_8039,inst_8040,(2),null));
var inst_8042__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8041__$1);
var state_8212__$1 = (function (){var statearr_8407 = state_8212;
(statearr_8407[(42)] = inst_8041__$1);

(statearr_8407[(43)] = inst_8042__$1);

return statearr_8407;
})();
if(cljs.core.truth_(inst_8042__$1)){
var statearr_8408_9620 = state_8212__$1;
(statearr_8408_9620[(1)] = (119));

} else {
var statearr_8409_9621 = state_8212__$1;
(statearr_8409_9621[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (147))){
var _ = (function (){var statearr_8410 = state_8212;
(statearr_8410[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8410;
})();
var state_8212__$1 = state_8212;
var ex8403 = (state_8212__$1[(2)]);
var statearr_8411_9622 = state_8212__$1;
(statearr_8411_9622[(5)] = ex8403);


var statearr_8412_9623 = state_8212__$1;
(statearr_8412_9623[(1)] = (146));

(statearr_8412_9623[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (20))){
var inst_7620 = (state_8212[(44)]);
var inst_7620__$1 = (state_8212[(2)]);
var inst_7621 = (inst_7620__$1 instanceof cljs.core.ExceptionInfo);
var inst_7622 = cljs.core.ex_data.call(null,inst_7620__$1);
var inst_7623 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7622);
var inst_7624 = cljs.core._EQ_.call(null,inst_7623,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7625 = ((inst_7621) && (inst_7624));
var state_8212__$1 = (function (){var statearr_8413 = state_8212;
(statearr_8413[(44)] = inst_7620__$1);

return statearr_8413;
})();
if(cljs.core.truth_(inst_7625)){
var statearr_8414_9624 = state_8212__$1;
(statearr_8414_9624[(1)] = (21));

} else {
var statearr_8415_9625 = state_8212__$1;
(statearr_8415_9625[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (52))){
var inst_7813 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8416 = state_8212;
(statearr_8416[(45)] = inst_7813);

return statearr_8416;
})();
var statearr_8417_9626 = state_8212__$1;
(statearr_8417_9626[(2)] = null);

(statearr_8417_9626[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (84))){
var inst_7856 = (state_8212[(2)]);
var inst_7857 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7858 = true;
var inst_7859 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_7858,inst_7856];
var inst_7860 = cljs.core.PersistentHashMap.fromArrays(inst_7857,inst_7859);
var inst_7861 = cljs.test.do_report.call(null,inst_7860);
var state_8212__$1 = state_8212;
var statearr_8418_9627 = state_8212__$1;
(statearr_8418_9627[(2)] = inst_7861);

(statearr_8418_9627[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (116))){
var inst_8065 = (state_8212[(2)]);
var inst_8066 = Promise.resolve((42));
var inst_8067 = eos_cljs.core.wait_block.call(null,inst_8066,(2));
var inst_8068 = cljs.core.async.interop.p__GT_c.call(null,inst_8067);
var state_8212__$1 = (function (){var statearr_8419 = state_8212;
(statearr_8419[(46)] = inst_8065);

return statearr_8419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(122),inst_8068);
} else {
if((state_val_8213 === (148))){
var inst_8125 = (state_8212[(34)]);
var inst_8145 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8146 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8147 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs latest terms accepted",inst_8146,inst_8125];
var inst_8148 = cljs.core.PersistentHashMap.fromArrays(inst_8145,inst_8147);
var inst_8149 = cljs.test.do_report.call(null,inst_8148);
var state_8212__$1 = state_8212;
var statearr_8420_9628 = state_8212__$1;
(statearr_8420_9628[(2)] = inst_8149);

(statearr_8420_9628[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (21))){
var inst_7620 = (state_8212[(44)]);
var inst_7627 = (function(){throw inst_7620})();
var state_8212__$1 = state_8212;
var statearr_8422_9629 = state_8212__$1;
(statearr_8422_9629[(2)] = inst_7627);

(statearr_8422_9629[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (53))){
var inst_7741 = (state_8212[(2)]);
var inst_7742 = cljs.core.prn.call(null,"test failed with ",inst_7741);
var state_8212__$1 = (function (){var statearr_8423 = state_8212;
(statearr_8423[(47)] = inst_7742);

return statearr_8423;
})();
var statearr_8424_9630 = state_8212__$1;
(statearr_8424_9630[(2)] = null);

(statearr_8424_9630[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (85))){
var _ = (function (){var statearr_8425 = state_8212;
(statearr_8425[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8425;
})();
var state_8212__$1 = state_8212;
var ex8421 = (state_8212__$1[(2)]);
var statearr_8426_9631 = state_8212__$1;
(statearr_8426_9631[(5)] = ex8421);


var statearr_8427_9632 = state_8212__$1;
(statearr_8427_9632[(1)] = (84));

(statearr_8427_9632[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (117))){
var inst_8025 = (state_8212[(2)]);
var inst_8026 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8027 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_8028 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8027,inst_8025];
var inst_8029 = cljs.core.PersistentHashMap.fromArrays(inst_8026,inst_8028);
var inst_8030 = cljs.test.do_report.call(null,inst_8029);
var state_8212__$1 = state_8212;
var statearr_8428_9633 = state_8212__$1;
(statearr_8428_9633[(2)] = inst_8030);

(statearr_8428_9633[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (149))){
var inst_8125 = (state_8212[(34)]);
var inst_8151 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8152 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8153 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted",inst_8152,inst_8125];
var inst_8154 = cljs.core.PersistentHashMap.fromArrays(inst_8151,inst_8153);
var inst_8155 = cljs.test.do_report.call(null,inst_8154);
var state_8212__$1 = state_8212;
var statearr_8429_9634 = state_8212__$1;
(statearr_8429_9634[(2)] = inst_8155);

(statearr_8429_9634[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (22))){
var inst_7620 = (state_8212[(44)]);
var state_8212__$1 = state_8212;
var statearr_8430_9635 = state_8212__$1;
(statearr_8430_9635[(2)] = inst_7620);

(statearr_8430_9635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (54))){
var _ = (function (){var statearr_8432 = state_8212;
(statearr_8432[(4)] = cljs.core.cons.call(null,(57),(state_8212[(4)])));

return statearr_8432;
})();
var inst_7754 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7755 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote"];
var inst_7756 = cljs.core.PersistentHashMap.fromArrays(inst_7754,inst_7755);
var inst_7757 = cljs.test.do_report.call(null,inst_7756);
var ___$1 = (function (){var statearr_8433 = state_8212;
(statearr_8433[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8433;
})();
var state_8212__$1 = state_8212;
var statearr_8434_9636 = state_8212__$1;
(statearr_8434_9636[(2)] = inst_7757);

(statearr_8434_9636[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (86))){
var inst_7868 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7869 = true;
var inst_7870 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote twice",inst_7869,true];
var inst_7871 = cljs.core.PersistentHashMap.fromArrays(inst_7868,inst_7870);
var inst_7872 = cljs.test.do_report.call(null,inst_7871);
var state_8212__$1 = state_8212;
var statearr_8435_9637 = state_8212__$1;
(statearr_8435_9637[(2)] = inst_7872);

(statearr_8435_9637[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (118))){
var _ = (function (){var statearr_8436 = state_8212;
(statearr_8436[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8436;
})();
var state_8212__$1 = state_8212;
var ex8431 = (state_8212__$1[(2)]);
var statearr_8437_9638 = state_8212__$1;
(statearr_8437_9638[(5)] = ex8431);


var statearr_8438_9639 = state_8212__$1;
(statearr_8438_9639[(1)] = (117));

(statearr_8438_9639[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (150))){
var inst_8125 = (state_8212[(34)]);
var inst_8157 = (state_8212[(2)]);
var _ = (function (){var statearr_8439 = state_8212;
(statearr_8439[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8439;
})();
var state_8212__$1 = (function (){var statearr_8440 = state_8212;
(statearr_8440[(48)] = inst_8157);

return statearr_8440;
})();
var statearr_8441_9640 = state_8212__$1;
(statearr_8441_9640[(2)] = inst_8125);

(statearr_8441_9640[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (23))){
var inst_7630 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8442 = state_8212;
(statearr_8442[(49)] = inst_7630);

return statearr_8442;
})();
var statearr_8443_9641 = state_8212__$1;
(statearr_8443_9641[(2)] = null);

(statearr_8443_9641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (55))){
var inst_7760 = (state_8212[(2)]);
var state_8212__$1 = state_8212;
var statearr_8444_9642 = state_8212__$1;
(statearr_8444_9642[(2)] = inst_7760);

(statearr_8444_9642[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (87))){
var inst_7874 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7875 = true;
var inst_7876 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice",inst_7875,true];
var inst_7877 = cljs.core.PersistentHashMap.fromArrays(inst_7874,inst_7876);
var inst_7878 = cljs.test.do_report.call(null,inst_7877);
var state_8212__$1 = state_8212;
var statearr_8446_9643 = state_8212__$1;
(statearr_8446_9643[(2)] = inst_7878);

(statearr_8446_9643[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (119))){
var inst_8041 = (state_8212[(42)]);
var inst_8044 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8045 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_8046 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8041);
var inst_8047 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8045,inst_8046];
var inst_8048 = cljs.core.PersistentHashMap.fromArrays(inst_8044,inst_8047);
var inst_8049 = cljs.test.do_report.call(null,inst_8048);
var state_8212__$1 = state_8212;
var statearr_8447_9644 = state_8212__$1;
(statearr_8447_9644[(2)] = inst_8049);

(statearr_8447_9644[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (151))){
var _ = (function (){var statearr_8448 = state_8212;
(statearr_8448[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8448;
})();
var state_8212__$1 = state_8212;
var ex8445 = (state_8212__$1[(2)]);
var statearr_8449_9645 = state_8212__$1;
(statearr_8449_9645[(5)] = ex8445);


if((ex8445 instanceof Error)){
var statearr_8450_9646 = state_8212__$1;
(statearr_8450_9646[(1)] = (140));

(statearr_8450_9646[(5)] = null);

} else {
throw ex8445;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (24))){
var _ = (function (){var statearr_8451 = state_8212;
(statearr_8451[(4)] = cljs.core.cons.call(null,(27),(state_8212[(4)])));

return statearr_8451;
})();
var inst_7642 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_7643 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_7644 = cljs.core.PersistentHashMap.fromArrays(inst_7642,inst_7643);
var inst_7645 = cljs.test.do_report.call(null,inst_7644);
var ___$1 = (function (){var statearr_8452 = state_8212;
(statearr_8452[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8452;
})();
var state_8212__$1 = state_8212;
var statearr_8453_9647 = state_8212__$1;
(statearr_8453_9647[(2)] = inst_7645);

(statearr_8453_9647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (56))){
var inst_7743 = (state_8212[(2)]);
var inst_7744 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7745 = null;
var inst_7746 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_7745,inst_7743];
var inst_7747 = cljs.core.PersistentHashMap.fromArrays(inst_7744,inst_7746);
var inst_7748 = cljs.test.do_report.call(null,inst_7747);
var state_8212__$1 = state_8212;
var statearr_8454_9648 = state_8212__$1;
(statearr_8454_9648[(2)] = inst_7748);

(statearr_8454_9648[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (88))){
var inst_7880 = (state_8212[(2)]);
var _ = (function (){var statearr_8455 = state_8212;
(statearr_8455[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8455;
})();
var state_8212__$1 = (function (){var statearr_8456 = state_8212;
(statearr_8456[(50)] = inst_7880);

return statearr_8456;
})();
var statearr_8457_9649 = state_8212__$1;
(statearr_8457_9649[(2)] = true);

(statearr_8457_9649[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (120))){
var inst_8041 = (state_8212[(42)]);
var inst_8051 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8052 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_8053 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8054 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8055 = cljs.core.cons.call(null,inst_8054,inst_8041);
var inst_8056 = (new cljs.core.List(null,inst_8055,null,(1),null));
var inst_8057 = (new cljs.core.List(null,inst_8053,inst_8056,(2),null));
var inst_8058 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8052,inst_8057];
var inst_8059 = cljs.core.PersistentHashMap.fromArrays(inst_8051,inst_8058);
var inst_8060 = cljs.test.do_report.call(null,inst_8059);
var state_8212__$1 = state_8212;
var statearr_8458_9650 = state_8212__$1;
(statearr_8458_9650[(2)] = inst_8060);

(statearr_8458_9650[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (152))){
var inst_8172 = (state_8212[(51)]);
var inst_8172__$1 = (state_8212[(2)]);
var inst_8173 = (inst_8172__$1 instanceof cljs.core.ExceptionInfo);
var inst_8174 = cljs.core.ex_data.call(null,inst_8172__$1);
var inst_8175 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8174);
var inst_8176 = cljs.core._EQ_.call(null,inst_8175,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8177 = ((inst_8173) && (inst_8176));
var state_8212__$1 = (function (){var statearr_8460 = state_8212;
(statearr_8460[(51)] = inst_8172__$1);

return statearr_8460;
})();
if(cljs.core.truth_(inst_8177)){
var statearr_8461_9651 = state_8212__$1;
(statearr_8461_9651[(1)] = (153));

} else {
var statearr_8462_9652 = state_8212__$1;
(statearr_8462_9652[(1)] = (154));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (25))){
var inst_7648 = (state_8212[(2)]);
var _ = (function (){var statearr_8463 = state_8212;
(statearr_8463[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8463;
})();
var state_8212__$1 = state_8212;
var statearr_8464_9653 = state_8212__$1;
(statearr_8464_9653[(2)] = inst_7648);

(statearr_8464_9653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (57))){
var _ = (function (){var statearr_8465 = state_8212;
(statearr_8465[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8465;
})();
var state_8212__$1 = state_8212;
var ex8459 = (state_8212__$1[(2)]);
var statearr_8466_9654 = state_8212__$1;
(statearr_8466_9654[(5)] = ex8459);


var statearr_8467_9655 = state_8212__$1;
(statearr_8467_9655[(1)] = (56));

(statearr_8467_9655[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (89))){
var inst_7891 = (state_8212[(52)]);
var inst_7891__$1 = (state_8212[(2)]);
var inst_7892 = (inst_7891__$1 instanceof cljs.core.ExceptionInfo);
var inst_7893 = cljs.core.ex_data.call(null,inst_7891__$1);
var inst_7894 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7893);
var inst_7895 = cljs.core._EQ_.call(null,inst_7894,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7896 = ((inst_7892) && (inst_7895));
var state_8212__$1 = (function (){var statearr_8468 = state_8212;
(statearr_8468[(52)] = inst_7891__$1);

return statearr_8468;
})();
if(cljs.core.truth_(inst_7896)){
var statearr_8469_9656 = state_8212__$1;
(statearr_8469_9656[(1)] = (90));

} else {
var statearr_8470_9657 = state_8212__$1;
(statearr_8470_9657[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (121))){
var inst_8042 = (state_8212[(43)]);
var inst_8062 = (state_8212[(2)]);
var _ = (function (){var statearr_8471 = state_8212;
(statearr_8471[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8471;
})();
var state_8212__$1 = (function (){var statearr_8472 = state_8212;
(statearr_8472[(53)] = inst_8062);

return statearr_8472;
})();
var statearr_8473_9658 = state_8212__$1;
(statearr_8473_9658[(2)] = inst_8042);

(statearr_8473_9658[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (153))){
var inst_8172 = (state_8212[(51)]);
var inst_8179 = (function(){throw inst_8172})();
var state_8212__$1 = state_8212;
var statearr_8475_9659 = state_8212__$1;
(statearr_8475_9659[(2)] = inst_8179);

(statearr_8475_9659[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (26))){
var inst_7631 = (state_8212[(2)]);
var inst_7632 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_7633 = null;
var inst_7634 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_7633,inst_7631];
var inst_7635 = cljs.core.PersistentHashMap.fromArrays(inst_7632,inst_7634);
var inst_7636 = cljs.test.do_report.call(null,inst_7635);
var state_8212__$1 = state_8212;
var statearr_8476_9660 = state_8212__$1;
(statearr_8476_9660[(2)] = inst_7636);

(statearr_8476_9660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (58))){
var _ = (function (){var statearr_8477 = state_8212;
(statearr_8477[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8477;
})();
var state_8212__$1 = state_8212;
var ex8474 = (state_8212__$1[(2)]);
var statearr_8478_9661 = state_8212__$1;
(statearr_8478_9661[(5)] = ex8474);


if((ex8474 instanceof Error)){
var statearr_8479_9662 = state_8212__$1;
(statearr_8479_9662[(1)] = (53));

(statearr_8479_9662[(5)] = null);

} else {
throw ex8474;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (90))){
var inst_7891 = (state_8212[(52)]);
var inst_7898 = (function(){throw inst_7891})();
var state_8212__$1 = state_8212;
var statearr_8480_9663 = state_8212__$1;
(statearr_8480_9663[(2)] = inst_7898);

(statearr_8480_9663[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (122))){
var inst_8070 = (state_8212[(54)]);
var inst_8070__$1 = (state_8212[(2)]);
var inst_8071 = (inst_8070__$1 instanceof cljs.core.ExceptionInfo);
var inst_8072 = cljs.core.ex_data.call(null,inst_8070__$1);
var inst_8073 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8072);
var inst_8074 = cljs.core._EQ_.call(null,inst_8073,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8075 = ((inst_8071) && (inst_8074));
var state_8212__$1 = (function (){var statearr_8482 = state_8212;
(statearr_8482[(54)] = inst_8070__$1);

return statearr_8482;
})();
if(cljs.core.truth_(inst_8075)){
var statearr_8483_9664 = state_8212__$1;
(statearr_8483_9664[(1)] = (123));

} else {
var statearr_8484_9665 = state_8212__$1;
(statearr_8484_9665[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (154))){
var inst_8172 = (state_8212[(51)]);
var state_8212__$1 = state_8212;
var statearr_8485_9666 = state_8212__$1;
(statearr_8485_9666[(2)] = inst_8172);

(statearr_8485_9666[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (27))){
var _ = (function (){var statearr_8486 = state_8212;
(statearr_8486[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8486;
})();
var state_8212__$1 = state_8212;
var ex8481 = (state_8212__$1[(2)]);
var statearr_8487_9667 = state_8212__$1;
(statearr_8487_9667[(5)] = ex8481);


var statearr_8488_9668 = state_8212__$1;
(statearr_8488_9668[(1)] = (26));

(statearr_8488_9668[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (59))){
var inst_7772 = (state_8212[(55)]);
var inst_7772__$1 = (state_8212[(2)]);
var inst_7773 = (inst_7772__$1 instanceof cljs.core.ExceptionInfo);
var inst_7774 = cljs.core.ex_data.call(null,inst_7772__$1);
var inst_7775 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7774);
var inst_7776 = cljs.core._EQ_.call(null,inst_7775,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7777 = ((inst_7773) && (inst_7776));
var state_8212__$1 = (function (){var statearr_8489 = state_8212;
(statearr_8489[(55)] = inst_7772__$1);

return statearr_8489;
})();
if(cljs.core.truth_(inst_7777)){
var statearr_8490_9669 = state_8212__$1;
(statearr_8490_9669[(1)] = (60));

} else {
var statearr_8491_9670 = state_8212__$1;
(statearr_8491_9670[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (91))){
var inst_7891 = (state_8212[(52)]);
var state_8212__$1 = state_8212;
var statearr_8492_9671 = state_8212__$1;
(statearr_8492_9671[(2)] = inst_7891);

(statearr_8492_9671[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (123))){
var inst_8070 = (state_8212[(54)]);
var inst_8077 = (function(){throw inst_8070})();
var state_8212__$1 = state_8212;
var statearr_8493_9672 = state_8212__$1;
(statearr_8493_9672[(2)] = inst_8077);

(statearr_8493_9672[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (155))){
var inst_8182 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8494 = state_8212;
(statearr_8494[(56)] = inst_8182);

return statearr_8494;
})();
var statearr_8495_9673 = state_8212__$1;
(statearr_8495_9673[(2)] = null);

(statearr_8495_9673[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (28))){
var inst_7657 = (state_8212[(57)]);
var inst_7657__$1 = (state_8212[(2)]);
var inst_7658 = (inst_7657__$1 instanceof cljs.core.ExceptionInfo);
var inst_7659 = cljs.core.ex_data.call(null,inst_7657__$1);
var inst_7660 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7659);
var inst_7661 = cljs.core._EQ_.call(null,inst_7660,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7662 = ((inst_7658) && (inst_7661));
var state_8212__$1 = (function (){var statearr_8496 = state_8212;
(statearr_8496[(57)] = inst_7657__$1);

return statearr_8496;
})();
if(cljs.core.truth_(inst_7662)){
var statearr_8497_9674 = state_8212__$1;
(statearr_8497_9674[(1)] = (29));

} else {
var statearr_8498_9675 = state_8212__$1;
(statearr_8498_9675[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (60))){
var inst_7772 = (state_8212[(55)]);
var inst_7779 = (function(){throw inst_7772})();
var state_8212__$1 = state_8212;
var statearr_8499_9676 = state_8212__$1;
(statearr_8499_9676[(2)] = inst_7779);

(statearr_8499_9676[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (92))){
var inst_7901 = (state_8212[(2)]);
var inst_7902 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_7903 = [e2e.proposals.token_acc,(0),(1)];
var inst_7904 = cljs.core.PersistentHashMap.fromArrays(inst_7902,inst_7903);
var inst_7905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7906 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_7907 = [e2e.proposals.token_acc,"active"];
var inst_7908 = cljs.core.PersistentHashMap.fromArrays(inst_7906,inst_7907);
var inst_7909 = [inst_7908];
var inst_7910 = (new cljs.core.PersistentVector(null,(1),(5),inst_7905,inst_7909,null));
var inst_7911 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addvote",inst_7904,inst_7910);
var inst_7912 = cljs.core.async.interop.p__GT_c.call(null,inst_7911);
var state_8212__$1 = (function (){var statearr_8500 = state_8212;
(statearr_8500[(58)] = inst_7901);

return statearr_8500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(93),inst_7912);
} else {
if((state_val_8213 === (124))){
var inst_8070 = (state_8212[(54)]);
var state_8212__$1 = state_8212;
var statearr_8501_9677 = state_8212__$1;
(statearr_8501_9677[(2)] = inst_8070);

(statearr_8501_9677[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (156))){
var _ = (function (){var statearr_8502 = state_8212;
(statearr_8502[(4)] = cljs.core.cons.call(null,(159),(state_8212[(4)])));

return statearr_8502;
})();
var inst_8194 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_8195 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted"];
var inst_8196 = cljs.core.PersistentHashMap.fromArrays(inst_8194,inst_8195);
var inst_8197 = cljs.test.do_report.call(null,inst_8196);
var ___$1 = (function (){var statearr_8503 = state_8212;
(statearr_8503[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8503;
})();
var state_8212__$1 = state_8212;
var statearr_8504_9678 = state_8212__$1;
(statearr_8504_9678[(2)] = inst_8197);

(statearr_8504_9678[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (29))){
var inst_7657 = (state_8212[(57)]);
var inst_7664 = (function(){throw inst_7657})();
var state_8212__$1 = state_8212;
var statearr_8505_9679 = state_8212__$1;
(statearr_8505_9679[(2)] = inst_7664);

(statearr_8505_9679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (61))){
var inst_7772 = (state_8212[(55)]);
var state_8212__$1 = state_8212;
var statearr_8506_9680 = state_8212__$1;
(statearr_8506_9680[(2)] = inst_7772);

(statearr_8506_9680[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (93))){
var inst_7914 = (state_8212[(59)]);
var inst_7914__$1 = (state_8212[(2)]);
var inst_7915 = (inst_7914__$1 instanceof cljs.core.ExceptionInfo);
var inst_7916 = cljs.core.ex_data.call(null,inst_7914__$1);
var inst_7917 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_7916);
var inst_7918 = cljs.core._EQ_.call(null,inst_7917,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_7919 = ((inst_7915) && (inst_7918));
var state_8212__$1 = (function (){var statearr_8507 = state_8212;
(statearr_8507[(59)] = inst_7914__$1);

return statearr_8507;
})();
if(cljs.core.truth_(inst_7919)){
var statearr_8508_9681 = state_8212__$1;
(statearr_8508_9681[(1)] = (94));

} else {
var statearr_8509_9682 = state_8212__$1;
(statearr_8509_9682[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (125))){
var inst_8080 = (state_8212[(2)]);
var inst_8081 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8082 = [e2e.proposals.owner_acc,(1),(1)];
var inst_8083 = cljs.core.PersistentHashMap.fromArrays(inst_8081,inst_8082);
var inst_8084 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8083);
var inst_8085 = cljs.core.async.interop.p__GT_c.call(null,inst_8084);
var state_8212__$1 = (function (){var statearr_8510 = state_8212;
(statearr_8510[(60)] = inst_8080);

return statearr_8510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8212__$1,(126),inst_8085);
} else {
if((state_val_8213 === (157))){
var inst_8200 = (state_8212[(2)]);
var _ = (function (){var statearr_8511 = state_8212;
(statearr_8511[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8511;
})();
var state_8212__$1 = state_8212;
var statearr_8512_9683 = state_8212__$1;
(statearr_8512_9683[(2)] = inst_8200);

(statearr_8512_9683[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (30))){
var inst_7657 = (state_8212[(57)]);
var state_8212__$1 = state_8212;
var statearr_8513_9684 = state_8212__$1;
(statearr_8513_9684[(2)] = inst_7657);

(statearr_8513_9684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (62))){
var inst_7782 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8514 = state_8212;
(statearr_8514[(61)] = inst_7782);

return statearr_8514;
})();
var statearr_8515_9685 = state_8212__$1;
(statearr_8515_9685[(2)] = null);

(statearr_8515_9685[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (94))){
var inst_7914 = (state_8212[(59)]);
var inst_7921 = (function(){throw inst_7914})();
var state_8212__$1 = state_8212;
var statearr_8516_9686 = state_8212__$1;
(statearr_8516_9686[(2)] = inst_7921);

(statearr_8516_9686[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (126))){
var inst_8087 = (state_8212[(8)]);
var inst_8087__$1 = (state_8212[(2)]);
var inst_8088 = (inst_8087__$1 instanceof cljs.core.ExceptionInfo);
var inst_8089 = cljs.core.ex_data.call(null,inst_8087__$1);
var inst_8090 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8089);
var inst_8091 = cljs.core._EQ_.call(null,inst_8090,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8092 = ((inst_8088) && (inst_8091));
var state_8212__$1 = (function (){var statearr_8517 = state_8212;
(statearr_8517[(8)] = inst_8087__$1);

return statearr_8517;
})();
if(cljs.core.truth_(inst_8092)){
var statearr_8518_9687 = state_8212__$1;
(statearr_8518_9687[(1)] = (127));

} else {
var statearr_8519_9688 = state_8212__$1;
(statearr_8519_9688[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (158))){
var inst_8183 = (state_8212[(2)]);
var inst_8184 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8185 = null;
var inst_8186 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_8185,inst_8183];
var inst_8187 = cljs.core.PersistentHashMap.fromArrays(inst_8184,inst_8186);
var inst_8188 = cljs.test.do_report.call(null,inst_8187);
var state_8212__$1 = state_8212;
var statearr_8520_9689 = state_8212__$1;
(statearr_8520_9689[(2)] = inst_8188);

(statearr_8520_9689[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (31))){
var inst_7667 = (state_8212[(2)]);
var state_8212__$1 = (function (){var statearr_8521 = state_8212;
(statearr_8521[(62)] = inst_7667);

return statearr_8521;
})();
var statearr_8522_9690 = state_8212__$1;
(statearr_8522_9690[(2)] = null);

(statearr_8522_9690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (63))){
var _ = (function (){var statearr_8523 = state_8212;
(statearr_8523[(4)] = cljs.core.cons.call(null,(66),(state_8212[(4)])));

return statearr_8523;
})();
var state_8212__$1 = state_8212;
var statearr_8524_9691 = state_8212__$1;
(statearr_8524_9691[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (95))){
var inst_7914 = (state_8212[(59)]);
var state_8212__$1 = state_8212;
var statearr_8527_9692 = state_8212__$1;
(statearr_8527_9692[(2)] = inst_7914);

(statearr_8527_9692[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (127))){
var inst_8087 = (state_8212[(8)]);
var inst_8094 = (function(){throw inst_8087})();
var state_8212__$1 = state_8212;
var statearr_8528_9693 = state_8212__$1;
(statearr_8528_9693[(2)] = inst_8094);

(statearr_8528_9693[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_8213 === (159))){
var _ = (function (){var statearr_8529 = state_8212;
(statearr_8529[(4)] = cljs.core.rest.call(null,(state_8212[(4)])));

return statearr_8529;
})();
var state_8212__$1 = state_8212;
var ex8526 = (state_8212__$1[(2)]);
var statearr_8530_9694 = state_8212__$1;
(statearr_8530_9694[(5)] = ex8526);


var statearr_8531_9695 = state_8212__$1;
(statearr_8531_9695[(1)] = (158));

(statearr_8531_9695[(5)] = null);



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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_8532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8532[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_8532[(1)] = (1));

return statearr_8532;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_8212){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_8212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e8533){var ex__18__auto__ = e8533;
var statearr_8534_9696 = state_8212;
(statearr_8534_9696[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_8212[(4)]))){
var statearr_8535_9697 = state_8212;
(statearr_8535_9697[(1)] = cljs.core.first.call(null,(state_8212[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__9698 = state_8212;
state_8212 = G__9698;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_8212){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_8212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_8536 = f__20__auto__.call(null);
(statearr_8536[(6)] = c__19__auto__);

return statearr_8536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals7559.prototype.apply = (function (self__,args7562){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7562)));
});

e2e.proposals.t_e2e$proposals7559.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_9186){
var state_val_9187 = (state_9186[(1)]);
if((state_val_9187 === (32))){
var _ = (function (){var statearr_9188 = state_9186;
(statearr_9188[(4)] = cljs.core.cons.call(null,(39),(state_9186[(4)])));

return statearr_9188;
})();
var inst_8667 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8668 = [e2e.proposals.owner_acc,(0),(0)];
var inst_8669 = cljs.core.PersistentHashMap.fromArrays(inst_8667,inst_8668);
var inst_8670 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8669);
var inst_8671 = cljs.core.async.interop.p__GT_c.call(null,inst_8670);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(40),inst_8671);
} else {
if((state_val_9187 === (64))){
var inst_8784 = (state_9186[(2)]);
var _ = (function (){var statearr_9189 = state_9186;
(statearr_9189[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9189;
})();
var state_9186__$1 = state_9186;
var statearr_9190_9699 = state_9186__$1;
(statearr_9190_9699[(2)] = inst_8784);

(statearr_9190_9699[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (96))){
var inst_8898 = (state_9186[(2)]);
var inst_8899 = eos_cljs.core.get_table_rows.call(null,e2e.proposals.prop_acc,e2e.proposals.prop_acc,"proposal");
var inst_8900 = cljs.core.async.interop.p__GT_c.call(null,inst_8899);
var state_9186__$1 = (function (){var statearr_9191 = state_9186;
(statearr_9191[(7)] = inst_8898);

return statearr_9191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(97),inst_8900);
} else {
if((state_val_9187 === (128))){
var inst_9061 = (state_9186[(8)]);
var state_9186__$1 = state_9186;
var statearr_9192_9700 = state_9186__$1;
(statearr_9192_9700[(2)] = inst_9061);

(statearr_9192_9700[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (1))){
var state_9186__$1 = state_9186;
var statearr_9193_9701 = state_9186__$1;
(statearr_9193_9701[(2)] = null);

(statearr_9193_9701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (33))){
var inst_8714 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9194 = state_9186;
(statearr_9194[(9)] = inst_8714);

return statearr_9194;
})();
var statearr_9195_9702 = state_9186__$1;
(statearr_9195_9702[(2)] = null);

(statearr_9195_9702[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (65))){
var inst_8757 = (state_9186[(2)]);
var inst_8758 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8759 = true;
var inst_8760 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_8759,inst_8757];
var inst_8761 = cljs.core.PersistentHashMap.fromArrays(inst_8758,inst_8760);
var inst_8762 = cljs.test.do_report.call(null,inst_8761);
var state_9186__$1 = state_9186;
var statearr_9196_9703 = state_9186__$1;
(statearr_9196_9703[(2)] = inst_8762);

(statearr_9196_9703[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (97))){
var inst_8902 = (state_9186[(10)]);
var inst_8902__$1 = (state_9186[(2)]);
var inst_8903 = (inst_8902__$1 instanceof cljs.core.ExceptionInfo);
var inst_8904 = cljs.core.ex_data.call(null,inst_8902__$1);
var inst_8905 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8904);
var inst_8906 = cljs.core._EQ_.call(null,inst_8905,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8907 = ((inst_8903) && (inst_8906));
var state_9186__$1 = (function (){var statearr_9197 = state_9186;
(statearr_9197[(10)] = inst_8902__$1);

return statearr_9197;
})();
if(cljs.core.truth_(inst_8907)){
var statearr_9198_9704 = state_9186__$1;
(statearr_9198_9704[(1)] = (98));

} else {
var statearr_9199_9705 = state_9186__$1;
(statearr_9199_9705[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (129))){
var inst_9071 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9200 = state_9186;
(statearr_9200[(11)] = inst_9071);

return statearr_9200;
})();
var statearr_9201_9706 = state_9186__$1;
(statearr_9201_9706[(2)] = null);

(statearr_9201_9706[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (2))){
var _ = (function (){var statearr_9203 = state_9186;
(statearr_9203[(4)] = cljs.core.cons.call(null,(5),(state_9186[(4)])));

return statearr_9203;
})();
var state_9186__$1 = state_9186;
var statearr_9204_9707 = state_9186__$1;
(statearr_9204_9707[(2)] = null);

(statearr_9204_9707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (34))){
var inst_8642 = (state_9186[(2)]);
var inst_8643 = cljs.core.prn.call(null,"test failed with ",inst_8642);
var state_9186__$1 = (function (){var statearr_9205 = state_9186;
(statearr_9205[(12)] = inst_8643);

return statearr_9205;
})();
var statearr_9206_9708 = state_9186__$1;
(statearr_9206_9708[(2)] = null);

(statearr_9206_9708[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (66))){
var _ = (function (){var statearr_9207 = state_9186;
(statearr_9207[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9207;
})();
var state_9186__$1 = state_9186;
var ex9202 = (state_9186__$1[(2)]);
var statearr_9208_9709 = state_9186__$1;
(statearr_9208_9709[(5)] = ex9202);


var statearr_9209_9710 = state_9186__$1;
(statearr_9209_9710[(1)] = (65));

(statearr_9209_9710[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (98))){
var inst_8902 = (state_9186[(10)]);
var inst_8909 = (function(){throw inst_8902})();
var state_9186__$1 = state_9186;
var statearr_9210_9711 = state_9186__$1;
(statearr_9210_9711[(2)] = inst_8909);

(statearr_9210_9711[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (130))){
var _ = (function (){var statearr_9211 = state_9186;
(statearr_9211[(4)] = cljs.core.cons.call(null,(133),(state_9186[(4)])));

return statearr_9211;
})();
var inst_9079 = [new cljs.core.Keyword(null,"hash","hash",(-13781596))];
var inst_9080 = ["ab58606332f813bcf6ea26f732014f49a2197d2d281cc2939e59813721ee5246"];
var inst_9081 = cljs.core.PersistentHashMap.fromArrays(inst_9079,inst_9080);
var inst_9082 = eos_cljs.core.transact.call(null,e2e.proposals.dao_acc,"newmemterms",inst_9081);
var inst_9083 = cljs.core.async.interop.p__GT_c.call(null,inst_9082);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(134),inst_9083);
} else {
if((state_val_9187 === (3))){
var inst_9183 = (state_9186[(2)]);
var inst_9184 = done.call(null);
var state_9186__$1 = (function (){var statearr_9212 = state_9186;
(statearr_9212[(13)] = inst_9183);

return statearr_9212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9186__$1,inst_9184);
} else {
if((state_val_9187 === (35))){
var _ = (function (){var statearr_9213 = state_9186;
(statearr_9213[(4)] = cljs.core.cons.call(null,(38),(state_9186[(4)])));

return statearr_9213;
})();
var inst_8655 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_8656 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_8657 = cljs.core.PersistentHashMap.fromArrays(inst_8655,inst_8656);
var inst_8658 = cljs.test.do_report.call(null,inst_8657);
var ___$1 = (function (){var statearr_9214 = state_9186;
(statearr_9214[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9214;
})();
var state_9186__$1 = state_9186;
var statearr_9215_9712 = state_9186__$1;
(statearr_9215_9712[(2)] = inst_8658);

(statearr_9215_9712[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (67))){
var inst_8769 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8770 = true;
var inst_8771 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote",inst_8770,true];
var inst_8772 = cljs.core.PersistentHashMap.fromArrays(inst_8769,inst_8771);
var inst_8773 = cljs.test.do_report.call(null,inst_8772);
var state_9186__$1 = state_9186;
var statearr_9216_9713 = state_9186__$1;
(statearr_9216_9713[(2)] = inst_8773);

(statearr_9216_9713[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (99))){
var inst_8902 = (state_9186[(10)]);
var state_9186__$1 = state_9186;
var statearr_9217_9714 = state_9186__$1;
(statearr_9217_9714[(2)] = inst_8902);

(statearr_9217_9714[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (131))){
var inst_9180 = (state_9186[(2)]);
var _ = (function (){var statearr_9218 = state_9186;
(statearr_9218[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9218;
})();
var state_9186__$1 = state_9186;
var statearr_9219_9715 = state_9186__$1;
(statearr_9219_9715[(2)] = inst_9180);

(statearr_9219_9715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (4))){
var inst_8537 = (state_9186[(2)]);
var inst_8538 = cljs.core.prn.call(null,inst_8537);
var state_9186__$1 = state_9186;
var statearr_9220_9716 = state_9186__$1;
(statearr_9220_9716[(2)] = inst_8538);

(statearr_9220_9716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (36))){
var inst_8661 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9221_9717 = state_9186__$1;
(statearr_9221_9717[(2)] = inst_8661);

(statearr_9221_9717[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (68))){
var inst_8775 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8776 = true;
var inst_8777 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote",inst_8776,true];
var inst_8778 = cljs.core.PersistentHashMap.fromArrays(inst_8775,inst_8777);
var inst_8779 = cljs.test.do_report.call(null,inst_8778);
var state_9186__$1 = state_9186;
var statearr_9222_9718 = state_9186__$1;
(statearr_9222_9718[(2)] = inst_8779);

(statearr_9222_9718[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (100))){
var inst_8915 = (state_9186[(14)]);
var inst_8912 = (state_9186[(2)]);
var inst_8913 = (function (){var rows = inst_8912;
return ((function (rows,inst_8915,inst_8912,state_val_9187,c__19__auto__,___192__auto__){
return (function (p1__1_SHARP_){
return cljs.core._EQ_.call(null,p1__1_SHARP_.call(null,"id"),(0));
});
;})(rows,inst_8915,inst_8912,state_val_9187,c__19__auto__,___192__auto__))
})();
var inst_8914 = cljs.core.filter.call(null,inst_8913,inst_8912);
var inst_8915__$1 = cljs.core.first.call(null,inst_8914);
var inst_8916 = cljs.core.prn.call(null,inst_8915__$1);
var state_9186__$1 = (function (){var statearr_9224 = state_9186;
(statearr_9224[(14)] = inst_8915__$1);

(statearr_9224[(15)] = inst_8916);

return statearr_9224;
})();
var statearr_9225_9719 = state_9186__$1;
(statearr_9225_9719[(2)] = null);

(statearr_9225_9719[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (132))){
var inst_9072 = (state_9186[(2)]);
var inst_9073 = cljs.core.prn.call(null,inst_9072);
var state_9186__$1 = state_9186;
var statearr_9226_9720 = state_9186__$1;
(statearr_9226_9720[(2)] = inst_9073);

(statearr_9226_9720[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (5))){
var _ = (function (){var statearr_9227 = state_9186;
(statearr_9227[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9227;
})();
var state_9186__$1 = state_9186;
var ex9223 = (state_9186__$1[(2)]);
var statearr_9228_9721 = state_9186__$1;
(statearr_9228_9721[(5)] = ex9223);


if((ex9223 instanceof Error)){
var statearr_9229_9722 = state_9186__$1;
(statearr_9229_9722[(1)] = (4));

(statearr_9229_9722[(5)] = null);

} else {
throw ex9223;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (37))){
var inst_8644 = (state_9186[(2)]);
var inst_8645 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8646 = null;
var inst_8647 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_8646,inst_8644];
var inst_8648 = cljs.core.PersistentHashMap.fromArrays(inst_8645,inst_8647);
var inst_8649 = cljs.test.do_report.call(null,inst_8648);
var state_9186__$1 = state_9186;
var statearr_9230_9723 = state_9186__$1;
(statearr_9230_9723[(2)] = inst_8649);

(statearr_9230_9723[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (69))){
var inst_8781 = (state_9186[(2)]);
var _ = (function (){var statearr_9232 = state_9186;
(statearr_9232[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9232;
})();
var state_9186__$1 = (function (){var statearr_9233 = state_9186;
(statearr_9233[(16)] = inst_8781);

return statearr_9233;
})();
var statearr_9234_9724 = state_9186__$1;
(statearr_9234_9724[(2)] = true);

(statearr_9234_9724[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (101))){
var inst_8915 = (state_9186[(14)]);
var inst_8933 = (state_9186[(17)]);
var inst_8934 = (state_9186[(18)]);
var _ = (function (){var statearr_9235 = state_9186;
(statearr_9235[(4)] = cljs.core.cons.call(null,(104),(state_9186[(4)])));

return statearr_9235;
})();
var inst_8928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8929 = ["vote_counts",(0),"value"];
var inst_8930 = (new cljs.core.PersistentVector(null,(3),(5),inst_8928,inst_8929,null));
var inst_8931 = cljs.core.get_in.call(null,inst_8915,inst_8930);
var inst_8932 = (new cljs.core.List(null,(0),null,(1),null));
var inst_8933__$1 = (new cljs.core.List(null,inst_8931,inst_8932,(2),null));
var inst_8934__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8933__$1);
var state_9186__$1 = (function (){var statearr_9236 = state_9186;
(statearr_9236[(17)] = inst_8933__$1);

(statearr_9236[(18)] = inst_8934__$1);

return statearr_9236;
})();
if(cljs.core.truth_(inst_8934__$1)){
var statearr_9237_9725 = state_9186__$1;
(statearr_9237_9725[(1)] = (105));

} else {
var statearr_9238_9726 = state_9186__$1;
(statearr_9238_9726[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (133))){
var _ = (function (){var statearr_9240 = state_9186;
(statearr_9240[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9240;
})();
var state_9186__$1 = state_9186;
var ex9231 = (state_9186__$1[(2)]);
var statearr_9241_9727 = state_9186__$1;
(statearr_9241_9727[(5)] = ex9231);


if((ex9231 instanceof Error)){
var statearr_9242_9728 = state_9186__$1;
(statearr_9242_9728[(1)] = (132));

(statearr_9242_9728[(5)] = null);

} else {
throw ex9231;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (6))){
var _ = (function (){var statearr_9243 = state_9186;
(statearr_9243[(4)] = cljs.core.cons.call(null,(19),(state_9186[(4)])));

return statearr_9243;
})();
var inst_8588 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8589 = [e2e.proposals.owner_acc,(0),(0)];
var inst_8590 = cljs.core.PersistentHashMap.fromArrays(inst_8588,inst_8589);
var inst_8591 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8590);
var inst_8592 = cljs.core.async.interop.p__GT_c.call(null,inst_8591);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(20),inst_8592);
} else {
if((state_val_9187 === (38))){
var _ = (function (){var statearr_9244 = state_9186;
(statearr_9244[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9244;
})();
var state_9186__$1 = state_9186;
var ex9239 = (state_9186__$1[(2)]);
var statearr_9245_9729 = state_9186__$1;
(statearr_9245_9729[(5)] = ex9239);


var statearr_9246_9730 = state_9186__$1;
(statearr_9246_9730[(1)] = (37));

(statearr_9246_9730[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (70))){
var _ = (function (){var statearr_9247 = state_9186;
(statearr_9247[(4)] = cljs.core.cons.call(null,(77),(state_9186[(4)])));

return statearr_9247;
})();
var inst_8813 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8814 = [e2e.proposals.owner_acc,(0),(2)];
var inst_8815 = cljs.core.PersistentHashMap.fromArrays(inst_8813,inst_8814);
var inst_8816 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8815);
var inst_8817 = cljs.core.async.interop.p__GT_c.call(null,inst_8816);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(78),inst_8817);
} else {
if((state_val_9187 === (102))){
var inst_8957 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9248 = state_9186;
(statearr_9248[(19)] = inst_8957);

return statearr_9248;
})();
var statearr_9249_9731 = state_9186__$1;
(statearr_9249_9731[(2)] = null);

(statearr_9249_9731[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (134))){
var inst_9085 = (state_9186[(20)]);
var inst_9085__$1 = (state_9186[(2)]);
var inst_9086 = (inst_9085__$1 instanceof cljs.core.ExceptionInfo);
var inst_9087 = cljs.core.ex_data.call(null,inst_9085__$1);
var inst_9088 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9087);
var inst_9089 = cljs.core._EQ_.call(null,inst_9088,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9090 = ((inst_9086) && (inst_9089));
var state_9186__$1 = (function (){var statearr_9251 = state_9186;
(statearr_9251[(20)] = inst_9085__$1);

return statearr_9251;
})();
if(cljs.core.truth_(inst_9090)){
var statearr_9252_9732 = state_9186__$1;
(statearr_9252_9732[(1)] = (135));

} else {
var statearr_9253_9733 = state_9186__$1;
(statearr_9253_9733[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (7))){
var inst_8625 = (state_9186[(2)]);
var inst_8626 = ((9000000) + (1));
var inst_8627 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),inst_8626,new cljs.core.Keyword(null,"cycle_voting_duration_sec","cycle_voting_duration_sec",(-1056353816)),(9000000));
var inst_8628 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_8627);
var inst_8629 = cljs.core.async.interop.p__GT_c.call(null,inst_8628);
var state_9186__$1 = (function (){var statearr_9254 = state_9186;
(statearr_9254[(21)] = inst_8625);

return statearr_9254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(28),inst_8629);
} else {
if((state_val_9187 === (39))){
var _ = (function (){var statearr_9255 = state_9186;
(statearr_9255[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9255;
})();
var state_9186__$1 = state_9186;
var ex9250 = (state_9186__$1[(2)]);
var statearr_9256_9734 = state_9186__$1;
(statearr_9256_9734[(5)] = ex9250);


if((ex9250 instanceof Error)){
var statearr_9257_9735 = state_9186__$1;
(statearr_9257_9735[(1)] = (34));

(statearr_9257_9735[(5)] = null);

} else {
throw ex9250;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (71))){
var inst_8860 = (state_9186[(2)]);
var inst_8861 = Promise.resolve((42));
var inst_8862 = eos_cljs.core.wait_block.call(null,inst_8861,(2));
var inst_8863 = cljs.core.async.interop.p__GT_c.call(null,inst_8862);
var state_9186__$1 = (function (){var statearr_9258 = state_9186;
(statearr_9258[(22)] = inst_8860);

return statearr_9258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(89),inst_8863);
} else {
if((state_val_9187 === (103))){
var inst_8917 = (state_9186[(2)]);
var inst_8918 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8919 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_8920 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8919,inst_8917];
var inst_8921 = cljs.core.PersistentHashMap.fromArrays(inst_8918,inst_8920);
var inst_8922 = cljs.test.do_report.call(null,inst_8921);
var state_9186__$1 = state_9186;
var statearr_9259_9736 = state_9186__$1;
(statearr_9259_9736[(2)] = inst_8922);

(statearr_9259_9736[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (135))){
var inst_9085 = (state_9186[(20)]);
var inst_9092 = (function(){throw inst_9085})();
var state_9186__$1 = state_9186;
var statearr_9260_9737 = state_9186__$1;
(statearr_9260_9737[(2)] = inst_9092);

(statearr_9260_9737[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (8))){
var inst_8546 = (state_9186[(23)]);
var inst_8547 = (state_9186[(24)]);
var inst_8544 = (state_9186[(2)]);
var inst_8545 = inst_8544.cause;
var inst_8546__$1 = inst_8545.message;
var inst_8547__$1 = clojure.string.ends_with_QMARK_.call(null,inst_8546__$1,"not in voting period");
var inst_8548 = (!(inst_8547__$1));
var state_9186__$1 = (function (){var statearr_9261 = state_9186;
(statearr_9261[(23)] = inst_8546__$1);

(statearr_9261[(24)] = inst_8547__$1);

return statearr_9261;
})();
if(inst_8548){
var statearr_9262_9738 = state_9186__$1;
(statearr_9262_9738[(1)] = (9));

} else {
var statearr_9263_9739 = state_9186__$1;
(statearr_9263_9739[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (40))){
var inst_8673 = (state_9186[(25)]);
var inst_8673__$1 = (state_9186[(2)]);
var inst_8674 = (inst_8673__$1 instanceof cljs.core.ExceptionInfo);
var inst_8675 = cljs.core.ex_data.call(null,inst_8673__$1);
var inst_8676 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8675);
var inst_8677 = cljs.core._EQ_.call(null,inst_8676,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8678 = ((inst_8674) && (inst_8677));
var state_9186__$1 = (function (){var statearr_9265 = state_9186;
(statearr_9265[(25)] = inst_8673__$1);

return statearr_9265;
})();
if(cljs.core.truth_(inst_8678)){
var statearr_9266_9740 = state_9186__$1;
(statearr_9266_9740[(1)] = (41));

} else {
var statearr_9267_9741 = state_9186__$1;
(statearr_9267_9741[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (72))){
var inst_8788 = (state_9186[(2)]);
var inst_8789 = cljs.core.prn.call(null,"test failed with ",inst_8788);
var state_9186__$1 = (function (){var statearr_9268 = state_9186;
(statearr_9268[(26)] = inst_8789);

return statearr_9268;
})();
var statearr_9269_9742 = state_9186__$1;
(statearr_9269_9742[(2)] = null);

(statearr_9269_9742[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (104))){
var _ = (function (){var statearr_9270 = state_9186;
(statearr_9270[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9270;
})();
var state_9186__$1 = state_9186;
var ex9264 = (state_9186__$1[(2)]);
var statearr_9271_9743 = state_9186__$1;
(statearr_9271_9743[(5)] = ex9264);


var statearr_9272_9744 = state_9186__$1;
(statearr_9272_9744[(1)] = (103));

(statearr_9272_9744[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (136))){
var inst_9085 = (state_9186[(20)]);
var state_9186__$1 = state_9186;
var statearr_9273_9745 = state_9186__$1;
(statearr_9273_9745[(2)] = inst_9085);

(statearr_9273_9745[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (9))){
var inst_8546 = (state_9186[(23)]);
var inst_8550 = ["expected =","not in voting period"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_8546)].join('');
var inst_8551 = cljs.core.prn.call(null,inst_8550);
var state_9186__$1 = state_9186;
var statearr_9274_9746 = state_9186__$1;
(statearr_9274_9746[(2)] = inst_8551);

(statearr_9274_9746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (41))){
var inst_8673 = (state_9186[(25)]);
var inst_8680 = (function(){throw inst_8673})();
var state_9186__$1 = state_9186;
var statearr_9275_9747 = state_9186__$1;
(statearr_9275_9747[(2)] = inst_8680);

(statearr_9275_9747[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (73))){
var _ = (function (){var statearr_9276 = state_9186;
(statearr_9276[(4)] = cljs.core.cons.call(null,(76),(state_9186[(4)])));

return statearr_9276;
})();
var inst_8801 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_8802 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice"];
var inst_8803 = cljs.core.PersistentHashMap.fromArrays(inst_8801,inst_8802);
var inst_8804 = cljs.test.do_report.call(null,inst_8803);
var ___$1 = (function (){var statearr_9277 = state_9186;
(statearr_9277[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9277;
})();
var state_9186__$1 = state_9186;
var statearr_9278_9748 = state_9186__$1;
(statearr_9278_9748[(2)] = inst_8804);

(statearr_9278_9748[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (105))){
var inst_8933 = (state_9186[(17)]);
var inst_8936 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8937 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_8938 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8933);
var inst_8939 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8937,inst_8938];
var inst_8940 = cljs.core.PersistentHashMap.fromArrays(inst_8936,inst_8939);
var inst_8941 = cljs.test.do_report.call(null,inst_8940);
var state_9186__$1 = state_9186;
var statearr_9279_9749 = state_9186__$1;
(statearr_9279_9749[(2)] = inst_8941);

(statearr_9279_9749[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (137))){
var inst_9095 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9280 = state_9186;
(statearr_9280[(27)] = inst_9095);

return statearr_9280;
})();
var statearr_9281_9750 = state_9186__$1;
(statearr_9281_9750[(2)] = null);

(statearr_9281_9750[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (10))){
var state_9186__$1 = state_9186;
var statearr_9282_9751 = state_9186__$1;
(statearr_9282_9751[(2)] = null);

(statearr_9282_9751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (42))){
var inst_8673 = (state_9186[(25)]);
var state_9186__$1 = state_9186;
var statearr_9283_9752 = state_9186__$1;
(statearr_9283_9752[(2)] = inst_8673);

(statearr_9283_9752[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (74))){
var inst_8807 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9284_9753 = state_9186__$1;
(statearr_9284_9753[(2)] = inst_8807);

(statearr_9284_9753[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (106))){
var inst_8933 = (state_9186[(17)]);
var inst_8943 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8944 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(0),"value"], null)),(0));
var inst_8945 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8946 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8947 = cljs.core.cons.call(null,inst_8946,inst_8933);
var inst_8948 = (new cljs.core.List(null,inst_8947,null,(1),null));
var inst_8949 = (new cljs.core.List(null,inst_8945,inst_8948,(2),null));
var inst_8950 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8944,inst_8949];
var inst_8951 = cljs.core.PersistentHashMap.fromArrays(inst_8943,inst_8950);
var inst_8952 = cljs.test.do_report.call(null,inst_8951);
var state_9186__$1 = state_9186;
var statearr_9285_9754 = state_9186__$1;
(statearr_9285_9754[(2)] = inst_8952);

(statearr_9285_9754[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (138))){
var _ = (function (){var statearr_9286 = state_9186;
(statearr_9286[(4)] = cljs.core.cons.call(null,(151),(state_9186[(4)])));

return statearr_9286;
})();
var inst_9140 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_9141 = [e2e.proposals.owner_acc,(1),(3)];
var inst_9142 = cljs.core.PersistentHashMap.fromArrays(inst_9140,inst_9141);
var inst_9143 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_9142);
var inst_9144 = cljs.core.async.interop.p__GT_c.call(null,inst_9143);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(152),inst_9144);
} else {
if((state_val_9187 === (11))){
var inst_8554 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9287 = state_9186;
(statearr_9287[(28)] = inst_8554);

return statearr_9287;
})();
var statearr_9288_9755 = state_9186__$1;
(statearr_9288_9755[(2)] = null);

(statearr_9288_9755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (43))){
var inst_8683 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9289 = state_9186;
(statearr_9289[(29)] = inst_8683);

return statearr_9289;
})();
var statearr_9290_9756 = state_9186__$1;
(statearr_9290_9756[(2)] = null);

(statearr_9290_9756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (75))){
var inst_8790 = (state_9186[(2)]);
var inst_8791 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8792 = null;
var inst_8793 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_8792,inst_8790];
var inst_8794 = cljs.core.PersistentHashMap.fromArrays(inst_8791,inst_8793);
var inst_8795 = cljs.test.do_report.call(null,inst_8794);
var state_9186__$1 = state_9186;
var statearr_9291_9757 = state_9186__$1;
(statearr_9291_9757[(2)] = inst_8795);

(statearr_9291_9757[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (107))){
var inst_8934 = (state_9186[(18)]);
var inst_8954 = (state_9186[(2)]);
var _ = (function (){var statearr_9292 = state_9186;
(statearr_9292[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9292;
})();
var state_9186__$1 = (function (){var statearr_9293 = state_9186;
(statearr_9293[(30)] = inst_8954);

return statearr_9293;
})();
var statearr_9294_9758 = state_9186__$1;
(statearr_9294_9758[(2)] = inst_8934);

(statearr_9294_9758[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (139))){
var inst_9177 = (state_9186[(2)]);
var _ = (function (){var statearr_9295 = state_9186;
(statearr_9295[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9295;
})();
var state_9186__$1 = state_9186;
var statearr_9296_9759 = state_9186__$1;
(statearr_9296_9759[(2)] = inst_9177);

(statearr_9296_9759[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (12))){
var inst_8547 = (state_9186[(24)]);
var _ = (function (){var statearr_9298 = state_9186;
(statearr_9298[(4)] = cljs.core.cons.call(null,(15),(state_9186[(4)])));

return statearr_9298;
})();
var state_9186__$1 = state_9186;
if(cljs.core.truth_(inst_8547)){
var statearr_9299_9760 = state_9186__$1;
(statearr_9299_9760[(1)] = (16));

} else {
var statearr_9300_9761 = state_9186__$1;
(statearr_9300_9761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (44))){
var _ = (function (){var statearr_9301 = state_9186;
(statearr_9301[(4)] = cljs.core.cons.call(null,(47),(state_9186[(4)])));

return statearr_9301;
})();
var state_9186__$1 = state_9186;
var statearr_9302_9762 = state_9186__$1;
(statearr_9302_9762[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (76))){
var _ = (function (){var statearr_9304 = state_9186;
(statearr_9304[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9304;
})();
var state_9186__$1 = state_9186;
var ex9297 = (state_9186__$1[(2)]);
var statearr_9305_9763 = state_9186__$1;
(statearr_9305_9763[(5)] = ex9297);


var statearr_9306_9764 = state_9186__$1;
(statearr_9306_9764[(1)] = (75));

(statearr_9306_9764[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (108))){
var inst_8915 = (state_9186[(14)]);
var inst_8974 = (state_9186[(31)]);
var inst_8975 = (state_9186[(32)]);
var _ = (function (){var statearr_9307 = state_9186;
(statearr_9307[(4)] = cljs.core.cons.call(null,(111),(state_9186[(4)])));

return statearr_9307;
})();
var inst_8969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8970 = ["vote_counts",(1),"value"];
var inst_8971 = (new cljs.core.PersistentVector(null,(3),(5),inst_8969,inst_8970,null));
var inst_8972 = cljs.core.get_in.call(null,inst_8915,inst_8971);
var inst_8973 = (new cljs.core.List(null,(2),null,(1),null));
var inst_8974__$1 = (new cljs.core.List(null,inst_8972,inst_8973,(2),null));
var inst_8975__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_8974__$1);
var state_9186__$1 = (function (){var statearr_9308 = state_9186;
(statearr_9308[(31)] = inst_8974__$1);

(statearr_9308[(32)] = inst_8975__$1);

return statearr_9308;
})();
if(cljs.core.truth_(inst_8975__$1)){
var statearr_9309_9765 = state_9186__$1;
(statearr_9309_9765[(1)] = (112));

} else {
var statearr_9310_9766 = state_9186__$1;
(statearr_9310_9766[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (140))){
var inst_9098 = (state_9186[(33)]);
var inst_9099 = (state_9186[(34)]);
var inst_9096 = (state_9186[(2)]);
var inst_9097 = inst_9096.cause;
var inst_9098__$1 = inst_9097.message;
var inst_9099__$1 = clojure.string.ends_with_QMARK_.call(null,inst_9098__$1,"agreed terms are not the latest");
var inst_9100 = (!(inst_9099__$1));
var state_9186__$1 = (function (){var statearr_9311 = state_9186;
(statearr_9311[(33)] = inst_9098__$1);

(statearr_9311[(34)] = inst_9099__$1);

return statearr_9311;
})();
if(inst_9100){
var statearr_9312_9767 = state_9186__$1;
(statearr_9312_9767[(1)] = (141));

} else {
var statearr_9313_9768 = state_9186__$1;
(statearr_9313_9768[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (13))){
var inst_8582 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9315_9769 = state_9186__$1;
(statearr_9315_9769[(2)] = inst_8582);

(statearr_9315_9769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (45))){
var inst_8711 = (state_9186[(2)]);
var _ = (function (){var statearr_9316 = state_9186;
(statearr_9316[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9316;
})();
var state_9186__$1 = state_9186;
var statearr_9317_9770 = state_9186__$1;
(statearr_9317_9770[(2)] = inst_8711);

(statearr_9317_9770[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (77))){
var _ = (function (){var statearr_9318 = state_9186;
(statearr_9318[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9318;
})();
var state_9186__$1 = state_9186;
var ex9314 = (state_9186__$1[(2)]);
var statearr_9319_9771 = state_9186__$1;
(statearr_9319_9771[(5)] = ex9314);


if((ex9314 instanceof Error)){
var statearr_9320_9772 = state_9186__$1;
(statearr_9320_9772[(1)] = (72));

(statearr_9320_9772[(5)] = null);

} else {
throw ex9314;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (109))){
var inst_8998 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9321 = state_9186;
(statearr_9321[(35)] = inst_8998);

return statearr_9321;
})();
var statearr_9322_9773 = state_9186__$1;
(statearr_9322_9773[(2)] = null);

(statearr_9322_9773[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (141))){
var inst_9098 = (state_9186[(33)]);
var inst_9102 = ["expected =","agreed terms are not the latest"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9098)].join('');
var inst_9103 = cljs.core.prn.call(null,inst_9102);
var state_9186__$1 = state_9186;
var statearr_9323_9774 = state_9186__$1;
(statearr_9323_9774[(2)] = inst_9103);

(statearr_9323_9774[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (14))){
var inst_8555 = (state_9186[(2)]);
var inst_8556 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8557 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8558 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_8557,inst_8555];
var inst_8559 = cljs.core.PersistentHashMap.fromArrays(inst_8556,inst_8558);
var inst_8560 = cljs.test.do_report.call(null,inst_8559);
var state_9186__$1 = state_9186;
var statearr_9324_9775 = state_9186__$1;
(statearr_9324_9775[(2)] = inst_8560);

(statearr_9324_9775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (46))){
var inst_8684 = (state_9186[(2)]);
var inst_8685 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8686 = true;
var inst_8687 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_8686,inst_8684];
var inst_8688 = cljs.core.PersistentHashMap.fromArrays(inst_8685,inst_8687);
var inst_8689 = cljs.test.do_report.call(null,inst_8688);
var state_9186__$1 = state_9186;
var statearr_9325_9776 = state_9186__$1;
(statearr_9325_9776[(2)] = inst_8689);

(statearr_9325_9776[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (78))){
var inst_8819 = (state_9186[(36)]);
var inst_8819__$1 = (state_9186[(2)]);
var inst_8820 = (inst_8819__$1 instanceof cljs.core.ExceptionInfo);
var inst_8821 = cljs.core.ex_data.call(null,inst_8819__$1);
var inst_8822 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8821);
var inst_8823 = cljs.core._EQ_.call(null,inst_8822,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8824 = ((inst_8820) && (inst_8823));
var state_9186__$1 = (function (){var statearr_9326 = state_9186;
(statearr_9326[(36)] = inst_8819__$1);

return statearr_9326;
})();
if(cljs.core.truth_(inst_8824)){
var statearr_9327_9777 = state_9186__$1;
(statearr_9327_9777[(1)] = (79));

} else {
var statearr_9328_9778 = state_9186__$1;
(statearr_9328_9778[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (110))){
var inst_8958 = (state_9186[(2)]);
var inst_8959 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8960 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_8961 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_8960,inst_8958];
var inst_8962 = cljs.core.PersistentHashMap.fromArrays(inst_8959,inst_8961);
var inst_8963 = cljs.test.do_report.call(null,inst_8962);
var state_9186__$1 = state_9186;
var statearr_9330_9779 = state_9186__$1;
(statearr_9330_9779[(2)] = inst_8963);

(statearr_9330_9779[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (142))){
var state_9186__$1 = state_9186;
var statearr_9332_9780 = state_9186__$1;
(statearr_9332_9780[(2)] = null);

(statearr_9332_9780[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (15))){
var _ = (function (){var statearr_9333 = state_9186;
(statearr_9333[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9333;
})();
var state_9186__$1 = state_9186;
var ex9329 = (state_9186__$1[(2)]);
var statearr_9334_9781 = state_9186__$1;
(statearr_9334_9781[(5)] = ex9329);


var statearr_9335_9782 = state_9186__$1;
(statearr_9335_9782[(1)] = (14));

(statearr_9335_9782[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (47))){
var _ = (function (){var statearr_9337 = state_9186;
(statearr_9337[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9337;
})();
var state_9186__$1 = state_9186;
var ex9331 = (state_9186__$1[(2)]);
var statearr_9338_9783 = state_9186__$1;
(statearr_9338_9783[(5)] = ex9331);


var statearr_9339_9784 = state_9186__$1;
(statearr_9339_9784[(1)] = (46));

(statearr_9339_9784[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (79))){
var inst_8819 = (state_9186[(36)]);
var inst_8826 = (function(){throw inst_8819})();
var state_9186__$1 = state_9186;
var statearr_9340_9785 = state_9186__$1;
(statearr_9340_9785[(2)] = inst_8826);

(statearr_9340_9785[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (111))){
var _ = (function (){var statearr_9341 = state_9186;
(statearr_9341[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9341;
})();
var state_9186__$1 = state_9186;
var ex9336 = (state_9186__$1[(2)]);
var statearr_9342_9786 = state_9186__$1;
(statearr_9342_9786[(5)] = ex9336);


var statearr_9343_9787 = state_9186__$1;
(statearr_9343_9787[(1)] = (110));

(statearr_9343_9787[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (143))){
var inst_9106 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9344 = state_9186;
(statearr_9344[(37)] = inst_9106);

return statearr_9344;
})();
var statearr_9345_9788 = state_9186__$1;
(statearr_9345_9788[(2)] = null);

(statearr_9345_9788[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (16))){
var inst_8547 = (state_9186[(24)]);
var inst_8567 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8568 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8569 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_8568,inst_8547];
var inst_8570 = cljs.core.PersistentHashMap.fromArrays(inst_8567,inst_8569);
var inst_8571 = cljs.test.do_report.call(null,inst_8570);
var state_9186__$1 = state_9186;
var statearr_9346_9789 = state_9186__$1;
(statearr_9346_9789[(2)] = inst_8571);

(statearr_9346_9789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (48))){
var inst_8696 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8697 = true;
var inst_8698 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can vote on own proposal",inst_8697,true];
var inst_8699 = cljs.core.PersistentHashMap.fromArrays(inst_8696,inst_8698);
var inst_8700 = cljs.test.do_report.call(null,inst_8699);
var state_9186__$1 = state_9186;
var statearr_9347_9790 = state_9186__$1;
(statearr_9347_9790[(2)] = inst_8700);

(statearr_9347_9790[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (80))){
var inst_8819 = (state_9186[(36)]);
var state_9186__$1 = state_9186;
var statearr_9348_9791 = state_9186__$1;
(statearr_9348_9791[(2)] = inst_8819);

(statearr_9348_9791[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (112))){
var inst_8974 = (state_9186[(31)]);
var inst_8977 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8978 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_8979 = cljs.core.cons.call(null,cljs.core._EQ_,inst_8974);
var inst_8980 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_8978,inst_8979];
var inst_8981 = cljs.core.PersistentHashMap.fromArrays(inst_8977,inst_8980);
var inst_8982 = cljs.test.do_report.call(null,inst_8981);
var state_9186__$1 = state_9186;
var statearr_9349_9792 = state_9186__$1;
(statearr_9349_9792[(2)] = inst_8982);

(statearr_9349_9792[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (144))){
var inst_9099 = (state_9186[(34)]);
var _ = (function (){var statearr_9350 = state_9186;
(statearr_9350[(4)] = cljs.core.cons.call(null,(147),(state_9186[(4)])));

return statearr_9350;
})();
var state_9186__$1 = state_9186;
if(cljs.core.truth_(inst_9099)){
var statearr_9351_9793 = state_9186__$1;
(statearr_9351_9793[(1)] = (148));

} else {
var statearr_9352_9794 = state_9186__$1;
(statearr_9352_9794[(1)] = (149));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (17))){
var inst_8547 = (state_9186[(24)]);
var inst_8573 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8574 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_8575 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_8574,inst_8547];
var inst_8576 = cljs.core.PersistentHashMap.fromArrays(inst_8573,inst_8575);
var inst_8577 = cljs.test.do_report.call(null,inst_8576);
var state_9186__$1 = state_9186;
var statearr_9353_9795 = state_9186__$1;
(statearr_9353_9795[(2)] = inst_8577);

(statearr_9353_9795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (49))){
var inst_8702 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8703 = true;
var inst_8704 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal",inst_8703,true];
var inst_8705 = cljs.core.PersistentHashMap.fromArrays(inst_8702,inst_8704);
var inst_8706 = cljs.test.do_report.call(null,inst_8705);
var state_9186__$1 = state_9186;
var statearr_9354_9796 = state_9186__$1;
(statearr_9354_9796[(2)] = inst_8706);

(statearr_9354_9796[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (81))){
var inst_8829 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9355 = state_9186;
(statearr_9355[(38)] = inst_8829);

return statearr_9355;
})();
var statearr_9356_9797 = state_9186__$1;
(statearr_9356_9797[(2)] = null);

(statearr_9356_9797[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (113))){
var inst_8974 = (state_9186[(31)]);
var inst_8984 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(1),"value"], null)),(2));
var inst_8986 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_8987 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_8988 = cljs.core.cons.call(null,inst_8987,inst_8974);
var inst_8989 = (new cljs.core.List(null,inst_8988,null,(1),null));
var inst_8990 = (new cljs.core.List(null,inst_8986,inst_8989,(2),null));
var inst_8991 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_8985,inst_8990];
var inst_8992 = cljs.core.PersistentHashMap.fromArrays(inst_8984,inst_8991);
var inst_8993 = cljs.test.do_report.call(null,inst_8992);
var state_9186__$1 = state_9186;
var statearr_9357_9798 = state_9186__$1;
(statearr_9357_9798[(2)] = inst_8993);

(statearr_9357_9798[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (145))){
var inst_9134 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9358_9799 = state_9186__$1;
(statearr_9358_9799[(2)] = inst_9134);

(statearr_9358_9799[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (18))){
var inst_8547 = (state_9186[(24)]);
var inst_8579 = (state_9186[(2)]);
var _ = (function (){var statearr_9359 = state_9186;
(statearr_9359[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9359;
})();
var state_9186__$1 = (function (){var statearr_9360 = state_9186;
(statearr_9360[(39)] = inst_8579);

return statearr_9360;
})();
var statearr_9361_9800 = state_9186__$1;
(statearr_9361_9800[(2)] = inst_8547);

(statearr_9361_9800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (50))){
var inst_8708 = (state_9186[(2)]);
var _ = (function (){var statearr_9362 = state_9186;
(statearr_9362[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9362;
})();
var state_9186__$1 = (function (){var statearr_9363 = state_9186;
(statearr_9363[(40)] = inst_8708);

return statearr_9363;
})();
var statearr_9364_9801 = state_9186__$1;
(statearr_9364_9801[(2)] = true);

(statearr_9364_9801[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (82))){
var _ = (function (){var statearr_9365 = state_9186;
(statearr_9365[(4)] = cljs.core.cons.call(null,(85),(state_9186[(4)])));

return statearr_9365;
})();
var state_9186__$1 = state_9186;
var statearr_9366_9802 = state_9186__$1;
(statearr_9366_9802[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (114))){
var inst_8975 = (state_9186[(32)]);
var inst_8995 = (state_9186[(2)]);
var _ = (function (){var statearr_9369 = state_9186;
(statearr_9369[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9369;
})();
var state_9186__$1 = (function (){var statearr_9370 = state_9186;
(statearr_9370[(41)] = inst_8995);

return statearr_9370;
})();
var statearr_9371_9803 = state_9186__$1;
(statearr_9371_9803[(2)] = inst_8975);

(statearr_9371_9803[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (146))){
var inst_9107 = (state_9186[(2)]);
var inst_9108 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9109 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9110 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_9109,inst_9107];
var inst_9111 = cljs.core.PersistentHashMap.fromArrays(inst_9108,inst_9110);
var inst_9112 = cljs.test.do_report.call(null,inst_9111);
var state_9186__$1 = state_9186;
var statearr_9372_9804 = state_9186__$1;
(statearr_9372_9804[(2)] = inst_9112);

(statearr_9372_9804[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (19))){
var _ = (function (){var statearr_9373 = state_9186;
(statearr_9373[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9373;
})();
var state_9186__$1 = state_9186;
var ex9368 = (state_9186__$1[(2)]);
var statearr_9374_9805 = state_9186__$1;
(statearr_9374_9805[(5)] = ex9368);


if((ex9368 instanceof Error)){
var statearr_9375_9806 = state_9186__$1;
(statearr_9375_9806[(1)] = (8));

(statearr_9375_9806[(5)] = null);

} else {
throw ex9368;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (51))){
var _ = (function (){var statearr_9376 = state_9186;
(statearr_9376[(4)] = cljs.core.cons.call(null,(58),(state_9186[(4)])));

return statearr_9376;
})();
var inst_8740 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8741 = [e2e.proposals.owner_acc,(0),(1)];
var inst_8742 = cljs.core.PersistentHashMap.fromArrays(inst_8740,inst_8741);
var inst_8743 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_8742);
var inst_8744 = cljs.core.async.interop.p__GT_c.call(null,inst_8743);
var state_9186__$1 = state_9186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(59),inst_8744);
} else {
if((state_val_9187 === (83))){
var inst_8857 = (state_9186[(2)]);
var _ = (function (){var statearr_9378 = state_9186;
(statearr_9378[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9378;
})();
var state_9186__$1 = state_9186;
var statearr_9379_9807 = state_9186__$1;
(statearr_9379_9807[(2)] = inst_8857);

(statearr_9379_9807[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (115))){
var inst_8915 = (state_9186[(14)]);
var inst_9015 = (state_9186[(42)]);
var inst_9016 = (state_9186[(43)]);
var _ = (function (){var statearr_9380 = state_9186;
(statearr_9380[(4)] = cljs.core.cons.call(null,(118),(state_9186[(4)])));

return statearr_9380;
})();
var inst_9010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9011 = ["vote_counts",(2),"value"];
var inst_9012 = (new cljs.core.PersistentVector(null,(3),(5),inst_9010,inst_9011,null));
var inst_9013 = cljs.core.get_in.call(null,inst_8915,inst_9012);
var inst_9014 = (new cljs.core.List(null,(5),null,(1),null));
var inst_9015__$1 = (new cljs.core.List(null,inst_9013,inst_9014,(2),null));
var inst_9016__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_9015__$1);
var state_9186__$1 = (function (){var statearr_9381 = state_9186;
(statearr_9381[(42)] = inst_9015__$1);

(statearr_9381[(43)] = inst_9016__$1);

return statearr_9381;
})();
if(cljs.core.truth_(inst_9016__$1)){
var statearr_9382_9808 = state_9186__$1;
(statearr_9382_9808[(1)] = (119));

} else {
var statearr_9383_9809 = state_9186__$1;
(statearr_9383_9809[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (147))){
var _ = (function (){var statearr_9384 = state_9186;
(statearr_9384[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9384;
})();
var state_9186__$1 = state_9186;
var ex9377 = (state_9186__$1[(2)]);
var statearr_9385_9810 = state_9186__$1;
(statearr_9385_9810[(5)] = ex9377);


var statearr_9386_9811 = state_9186__$1;
(statearr_9386_9811[(1)] = (146));

(statearr_9386_9811[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (20))){
var inst_8594 = (state_9186[(44)]);
var inst_8594__$1 = (state_9186[(2)]);
var inst_8595 = (inst_8594__$1 instanceof cljs.core.ExceptionInfo);
var inst_8596 = cljs.core.ex_data.call(null,inst_8594__$1);
var inst_8597 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8596);
var inst_8598 = cljs.core._EQ_.call(null,inst_8597,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8599 = ((inst_8595) && (inst_8598));
var state_9186__$1 = (function (){var statearr_9387 = state_9186;
(statearr_9387[(44)] = inst_8594__$1);

return statearr_9387;
})();
if(cljs.core.truth_(inst_8599)){
var statearr_9388_9812 = state_9186__$1;
(statearr_9388_9812[(1)] = (21));

} else {
var statearr_9389_9813 = state_9186__$1;
(statearr_9389_9813[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (52))){
var inst_8787 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9390 = state_9186;
(statearr_9390[(45)] = inst_8787);

return statearr_9390;
})();
var statearr_9391_9814 = state_9186__$1;
(statearr_9391_9814[(2)] = null);

(statearr_9391_9814[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (84))){
var inst_8830 = (state_9186[(2)]);
var inst_8831 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8832 = true;
var inst_8833 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote twice",inst_8832,inst_8830];
var inst_8834 = cljs.core.PersistentHashMap.fromArrays(inst_8831,inst_8833);
var inst_8835 = cljs.test.do_report.call(null,inst_8834);
var state_9186__$1 = state_9186;
var statearr_9392_9815 = state_9186__$1;
(statearr_9392_9815[(2)] = inst_8835);

(statearr_9392_9815[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (116))){
var inst_9039 = (state_9186[(2)]);
var inst_9040 = Promise.resolve((42));
var inst_9041 = eos_cljs.core.wait_block.call(null,inst_9040,(2));
var inst_9042 = cljs.core.async.interop.p__GT_c.call(null,inst_9041);
var state_9186__$1 = (function (){var statearr_9393 = state_9186;
(statearr_9393[(46)] = inst_9039);

return statearr_9393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(122),inst_9042);
} else {
if((state_val_9187 === (148))){
var inst_9099 = (state_9186[(34)]);
var inst_9119 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9120 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9121 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"needs latest terms accepted",inst_9120,inst_9099];
var inst_9122 = cljs.core.PersistentHashMap.fromArrays(inst_9119,inst_9121);
var inst_9123 = cljs.test.do_report.call(null,inst_9122);
var state_9186__$1 = state_9186;
var statearr_9394_9816 = state_9186__$1;
(statearr_9394_9816[(2)] = inst_9123);

(statearr_9394_9816[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (21))){
var inst_8594 = (state_9186[(44)]);
var inst_8601 = (function(){throw inst_8594})();
var state_9186__$1 = state_9186;
var statearr_9396_9817 = state_9186__$1;
(statearr_9396_9817[(2)] = inst_8601);

(statearr_9396_9817[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (53))){
var inst_8715 = (state_9186[(2)]);
var inst_8716 = cljs.core.prn.call(null,"test failed with ",inst_8715);
var state_9186__$1 = (function (){var statearr_9397 = state_9186;
(statearr_9397[(47)] = inst_8716);

return statearr_9397;
})();
var statearr_9398_9818 = state_9186__$1;
(statearr_9398_9818[(2)] = null);

(statearr_9398_9818[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (85))){
var _ = (function (){var statearr_9399 = state_9186;
(statearr_9399[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9399;
})();
var state_9186__$1 = state_9186;
var ex9395 = (state_9186__$1[(2)]);
var statearr_9400_9819 = state_9186__$1;
(statearr_9400_9819[(5)] = ex9395);


var statearr_9401_9820 = state_9186__$1;
(statearr_9401_9820[(1)] = (84));

(statearr_9401_9820[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (117))){
var inst_8999 = (state_9186[(2)]);
var inst_9000 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9001 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_9002 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_9001,inst_8999];
var inst_9003 = cljs.core.PersistentHashMap.fromArrays(inst_9000,inst_9002);
var inst_9004 = cljs.test.do_report.call(null,inst_9003);
var state_9186__$1 = state_9186;
var statearr_9402_9821 = state_9186__$1;
(statearr_9402_9821[(2)] = inst_9004);

(statearr_9402_9821[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (149))){
var inst_9099 = (state_9186[(34)]);
var inst_9125 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9126 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9127 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted",inst_9126,inst_9099];
var inst_9128 = cljs.core.PersistentHashMap.fromArrays(inst_9125,inst_9127);
var inst_9129 = cljs.test.do_report.call(null,inst_9128);
var state_9186__$1 = state_9186;
var statearr_9403_9822 = state_9186__$1;
(statearr_9403_9822[(2)] = inst_9129);

(statearr_9403_9822[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (22))){
var inst_8594 = (state_9186[(44)]);
var state_9186__$1 = state_9186;
var statearr_9404_9823 = state_9186__$1;
(statearr_9404_9823[(2)] = inst_8594);

(statearr_9404_9823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (54))){
var _ = (function (){var statearr_9406 = state_9186;
(statearr_9406[(4)] = cljs.core.cons.call(null,(57),(state_9186[(4)])));

return statearr_9406;
})();
var inst_8728 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_8729 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote"];
var inst_8730 = cljs.core.PersistentHashMap.fromArrays(inst_8728,inst_8729);
var inst_8731 = cljs.test.do_report.call(null,inst_8730);
var ___$1 = (function (){var statearr_9407 = state_9186;
(statearr_9407[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9407;
})();
var state_9186__$1 = state_9186;
var statearr_9408_9824 = state_9186__$1;
(statearr_9408_9824[(2)] = inst_8731);

(statearr_9408_9824[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (86))){
var inst_8842 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8843 = true;
var inst_8844 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update vote twice",inst_8843,true];
var inst_8845 = cljs.core.PersistentHashMap.fromArrays(inst_8842,inst_8844);
var inst_8846 = cljs.test.do_report.call(null,inst_8845);
var state_9186__$1 = state_9186;
var statearr_9409_9825 = state_9186__$1;
(statearr_9409_9825[(2)] = inst_8846);

(statearr_9409_9825[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (118))){
var _ = (function (){var statearr_9410 = state_9186;
(statearr_9410[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9410;
})();
var state_9186__$1 = state_9186;
var ex9405 = (state_9186__$1[(2)]);
var statearr_9411_9826 = state_9186__$1;
(statearr_9411_9826[(5)] = ex9405);


var statearr_9412_9827 = state_9186__$1;
(statearr_9412_9827[(1)] = (117));

(statearr_9412_9827[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (150))){
var inst_9099 = (state_9186[(34)]);
var inst_9131 = (state_9186[(2)]);
var _ = (function (){var statearr_9413 = state_9186;
(statearr_9413[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9413;
})();
var state_9186__$1 = (function (){var statearr_9414 = state_9186;
(statearr_9414[(48)] = inst_9131);

return statearr_9414;
})();
var statearr_9415_9828 = state_9186__$1;
(statearr_9415_9828[(2)] = inst_9099);

(statearr_9415_9828[(1)] = (145));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (23))){
var inst_8604 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9416 = state_9186;
(statearr_9416[(49)] = inst_8604);

return statearr_9416;
})();
var statearr_9417_9829 = state_9186__$1;
(statearr_9417_9829[(2)] = null);

(statearr_9417_9829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (55))){
var inst_8734 = (state_9186[(2)]);
var state_9186__$1 = state_9186;
var statearr_9418_9830 = state_9186__$1;
(statearr_9418_9830[(2)] = inst_8734);

(statearr_9418_9830[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (87))){
var inst_8848 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8849 = true;
var inst_8850 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update vote twice",inst_8849,true];
var inst_8851 = cljs.core.PersistentHashMap.fromArrays(inst_8848,inst_8850);
var inst_8852 = cljs.test.do_report.call(null,inst_8851);
var state_9186__$1 = state_9186;
var statearr_9420_9831 = state_9186__$1;
(statearr_9420_9831[(2)] = inst_8852);

(statearr_9420_9831[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (119))){
var inst_9015 = (state_9186[(42)]);
var inst_9018 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9019 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_9020 = cljs.core.cons.call(null,cljs.core._EQ_,inst_9015);
var inst_9021 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_9019,inst_9020];
var inst_9022 = cljs.core.PersistentHashMap.fromArrays(inst_9018,inst_9021);
var inst_9023 = cljs.test.do_report.call(null,inst_9022);
var state_9186__$1 = state_9186;
var statearr_9421_9832 = state_9186__$1;
(statearr_9421_9832[(2)] = inst_9023);

(statearr_9421_9832[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (151))){
var _ = (function (){var statearr_9422 = state_9186;
(statearr_9422[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9422;
})();
var state_9186__$1 = state_9186;
var ex9419 = (state_9186__$1[(2)]);
var statearr_9423_9833 = state_9186__$1;
(statearr_9423_9833[(5)] = ex9419);


if((ex9419 instanceof Error)){
var statearr_9424_9834 = state_9186__$1;
(statearr_9424_9834[(1)] = (140));

(statearr_9424_9834[(5)] = null);

} else {
throw ex9419;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (24))){
var _ = (function (){var statearr_9425 = state_9186;
(statearr_9425[(4)] = cljs.core.cons.call(null,(27),(state_9186[(4)])));

return statearr_9425;
})();
var inst_8616 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_8617 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can vote on own proposal"];
var inst_8618 = cljs.core.PersistentHashMap.fromArrays(inst_8616,inst_8617);
var inst_8619 = cljs.test.do_report.call(null,inst_8618);
var ___$1 = (function (){var statearr_9426 = state_9186;
(statearr_9426[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9426;
})();
var state_9186__$1 = state_9186;
var statearr_9427_9835 = state_9186__$1;
(statearr_9427_9835[(2)] = inst_8619);

(statearr_9427_9835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (56))){
var inst_8717 = (state_9186[(2)]);
var inst_8718 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8719 = null;
var inst_8720 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update vote",inst_8719,inst_8717];
var inst_8721 = cljs.core.PersistentHashMap.fromArrays(inst_8718,inst_8720);
var inst_8722 = cljs.test.do_report.call(null,inst_8721);
var state_9186__$1 = state_9186;
var statearr_9428_9836 = state_9186__$1;
(statearr_9428_9836[(2)] = inst_8722);

(statearr_9428_9836[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (88))){
var inst_8854 = (state_9186[(2)]);
var _ = (function (){var statearr_9429 = state_9186;
(statearr_9429[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9429;
})();
var state_9186__$1 = (function (){var statearr_9430 = state_9186;
(statearr_9430[(50)] = inst_8854);

return statearr_9430;
})();
var statearr_9431_9837 = state_9186__$1;
(statearr_9431_9837[(2)] = true);

(statearr_9431_9837[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (120))){
var inst_9015 = (state_9186[(42)]);
var inst_9025 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9026 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"r","r",(1169147337),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vote_counts",(2),"value"], null)),(5));
var inst_9027 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_9028 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_9029 = cljs.core.cons.call(null,inst_9028,inst_9015);
var inst_9030 = (new cljs.core.List(null,inst_9029,null,(1),null));
var inst_9031 = (new cljs.core.List(null,inst_9027,inst_9030,(2),null));
var inst_9032 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_9026,inst_9031];
var inst_9033 = cljs.core.PersistentHashMap.fromArrays(inst_9025,inst_9032);
var inst_9034 = cljs.test.do_report.call(null,inst_9033);
var state_9186__$1 = state_9186;
var statearr_9432_9838 = state_9186__$1;
(statearr_9432_9838[(2)] = inst_9034);

(statearr_9432_9838[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (152))){
var inst_9146 = (state_9186[(51)]);
var inst_9146__$1 = (state_9186[(2)]);
var inst_9147 = (inst_9146__$1 instanceof cljs.core.ExceptionInfo);
var inst_9148 = cljs.core.ex_data.call(null,inst_9146__$1);
var inst_9149 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9148);
var inst_9150 = cljs.core._EQ_.call(null,inst_9149,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9151 = ((inst_9147) && (inst_9150));
var state_9186__$1 = (function (){var statearr_9434 = state_9186;
(statearr_9434[(51)] = inst_9146__$1);

return statearr_9434;
})();
if(cljs.core.truth_(inst_9151)){
var statearr_9435_9839 = state_9186__$1;
(statearr_9435_9839[(1)] = (153));

} else {
var statearr_9436_9840 = state_9186__$1;
(statearr_9436_9840[(1)] = (154));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (25))){
var inst_8622 = (state_9186[(2)]);
var _ = (function (){var statearr_9437 = state_9186;
(statearr_9437[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9437;
})();
var state_9186__$1 = state_9186;
var statearr_9438_9841 = state_9186__$1;
(statearr_9438_9841[(2)] = inst_8622);

(statearr_9438_9841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (57))){
var _ = (function (){var statearr_9439 = state_9186;
(statearr_9439[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9439;
})();
var state_9186__$1 = state_9186;
var ex9433 = (state_9186__$1[(2)]);
var statearr_9440_9842 = state_9186__$1;
(statearr_9440_9842[(5)] = ex9433);


var statearr_9441_9843 = state_9186__$1;
(statearr_9441_9843[(1)] = (56));

(statearr_9441_9843[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (89))){
var inst_8865 = (state_9186[(52)]);
var inst_8865__$1 = (state_9186[(2)]);
var inst_8866 = (inst_8865__$1 instanceof cljs.core.ExceptionInfo);
var inst_8867 = cljs.core.ex_data.call(null,inst_8865__$1);
var inst_8868 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8867);
var inst_8869 = cljs.core._EQ_.call(null,inst_8868,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8870 = ((inst_8866) && (inst_8869));
var state_9186__$1 = (function (){var statearr_9442 = state_9186;
(statearr_9442[(52)] = inst_8865__$1);

return statearr_9442;
})();
if(cljs.core.truth_(inst_8870)){
var statearr_9443_9844 = state_9186__$1;
(statearr_9443_9844[(1)] = (90));

} else {
var statearr_9444_9845 = state_9186__$1;
(statearr_9444_9845[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (121))){
var inst_9016 = (state_9186[(43)]);
var inst_9036 = (state_9186[(2)]);
var _ = (function (){var statearr_9445 = state_9186;
(statearr_9445[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9445;
})();
var state_9186__$1 = (function (){var statearr_9446 = state_9186;
(statearr_9446[(53)] = inst_9036);

return statearr_9446;
})();
var statearr_9447_9846 = state_9186__$1;
(statearr_9447_9846[(2)] = inst_9016);

(statearr_9447_9846[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (153))){
var inst_9146 = (state_9186[(51)]);
var inst_9153 = (function(){throw inst_9146})();
var state_9186__$1 = state_9186;
var statearr_9449_9847 = state_9186__$1;
(statearr_9449_9847[(2)] = inst_9153);

(statearr_9449_9847[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (26))){
var inst_8605 = (state_9186[(2)]);
var inst_8606 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_8607 = null;
var inst_8608 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can vote on own proposal",inst_8607,inst_8605];
var inst_8609 = cljs.core.PersistentHashMap.fromArrays(inst_8606,inst_8608);
var inst_8610 = cljs.test.do_report.call(null,inst_8609);
var state_9186__$1 = state_9186;
var statearr_9450_9848 = state_9186__$1;
(statearr_9450_9848[(2)] = inst_8610);

(statearr_9450_9848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (58))){
var _ = (function (){var statearr_9451 = state_9186;
(statearr_9451[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9451;
})();
var state_9186__$1 = state_9186;
var ex9448 = (state_9186__$1[(2)]);
var statearr_9452_9849 = state_9186__$1;
(statearr_9452_9849[(5)] = ex9448);


if((ex9448 instanceof Error)){
var statearr_9453_9850 = state_9186__$1;
(statearr_9453_9850[(1)] = (53));

(statearr_9453_9850[(5)] = null);

} else {
throw ex9448;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (90))){
var inst_8865 = (state_9186[(52)]);
var inst_8872 = (function(){throw inst_8865})();
var state_9186__$1 = state_9186;
var statearr_9454_9851 = state_9186__$1;
(statearr_9454_9851[(2)] = inst_8872);

(statearr_9454_9851[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (122))){
var inst_9044 = (state_9186[(54)]);
var inst_9044__$1 = (state_9186[(2)]);
var inst_9045 = (inst_9044__$1 instanceof cljs.core.ExceptionInfo);
var inst_9046 = cljs.core.ex_data.call(null,inst_9044__$1);
var inst_9047 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9046);
var inst_9048 = cljs.core._EQ_.call(null,inst_9047,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9049 = ((inst_9045) && (inst_9048));
var state_9186__$1 = (function (){var statearr_9456 = state_9186;
(statearr_9456[(54)] = inst_9044__$1);

return statearr_9456;
})();
if(cljs.core.truth_(inst_9049)){
var statearr_9457_9852 = state_9186__$1;
(statearr_9457_9852[(1)] = (123));

} else {
var statearr_9458_9853 = state_9186__$1;
(statearr_9458_9853[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (154))){
var inst_9146 = (state_9186[(51)]);
var state_9186__$1 = state_9186;
var statearr_9459_9854 = state_9186__$1;
(statearr_9459_9854[(2)] = inst_9146);

(statearr_9459_9854[(1)] = (155));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (27))){
var _ = (function (){var statearr_9460 = state_9186;
(statearr_9460[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9460;
})();
var state_9186__$1 = state_9186;
var ex9455 = (state_9186__$1[(2)]);
var statearr_9461_9855 = state_9186__$1;
(statearr_9461_9855[(5)] = ex9455);


var statearr_9462_9856 = state_9186__$1;
(statearr_9462_9856[(1)] = (26));

(statearr_9462_9856[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (59))){
var inst_8746 = (state_9186[(55)]);
var inst_8746__$1 = (state_9186[(2)]);
var inst_8747 = (inst_8746__$1 instanceof cljs.core.ExceptionInfo);
var inst_8748 = cljs.core.ex_data.call(null,inst_8746__$1);
var inst_8749 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8748);
var inst_8750 = cljs.core._EQ_.call(null,inst_8749,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8751 = ((inst_8747) && (inst_8750));
var state_9186__$1 = (function (){var statearr_9463 = state_9186;
(statearr_9463[(55)] = inst_8746__$1);

return statearr_9463;
})();
if(cljs.core.truth_(inst_8751)){
var statearr_9464_9857 = state_9186__$1;
(statearr_9464_9857[(1)] = (60));

} else {
var statearr_9465_9858 = state_9186__$1;
(statearr_9465_9858[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (91))){
var inst_8865 = (state_9186[(52)]);
var state_9186__$1 = state_9186;
var statearr_9466_9859 = state_9186__$1;
(statearr_9466_9859[(2)] = inst_8865);

(statearr_9466_9859[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (123))){
var inst_9044 = (state_9186[(54)]);
var inst_9051 = (function(){throw inst_9044})();
var state_9186__$1 = state_9186;
var statearr_9467_9860 = state_9186__$1;
(statearr_9467_9860[(2)] = inst_9051);

(statearr_9467_9860[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (155))){
var inst_9156 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9468 = state_9186;
(statearr_9468[(56)] = inst_9156);

return statearr_9468;
})();
var statearr_9469_9861 = state_9186__$1;
(statearr_9469_9861[(2)] = null);

(statearr_9469_9861[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (28))){
var inst_8631 = (state_9186[(57)]);
var inst_8631__$1 = (state_9186[(2)]);
var inst_8632 = (inst_8631__$1 instanceof cljs.core.ExceptionInfo);
var inst_8633 = cljs.core.ex_data.call(null,inst_8631__$1);
var inst_8634 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8633);
var inst_8635 = cljs.core._EQ_.call(null,inst_8634,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8636 = ((inst_8632) && (inst_8635));
var state_9186__$1 = (function (){var statearr_9470 = state_9186;
(statearr_9470[(57)] = inst_8631__$1);

return statearr_9470;
})();
if(cljs.core.truth_(inst_8636)){
var statearr_9471_9862 = state_9186__$1;
(statearr_9471_9862[(1)] = (29));

} else {
var statearr_9472_9863 = state_9186__$1;
(statearr_9472_9863[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (60))){
var inst_8746 = (state_9186[(55)]);
var inst_8753 = (function(){throw inst_8746})();
var state_9186__$1 = state_9186;
var statearr_9473_9864 = state_9186__$1;
(statearr_9473_9864[(2)] = inst_8753);

(statearr_9473_9864[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (92))){
var inst_8875 = (state_9186[(2)]);
var inst_8876 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_8877 = [e2e.proposals.token_acc,(0),(1)];
var inst_8878 = cljs.core.PersistentHashMap.fromArrays(inst_8876,inst_8877);
var inst_8879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8880 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_8881 = [e2e.proposals.token_acc,"active"];
var inst_8882 = cljs.core.PersistentHashMap.fromArrays(inst_8880,inst_8881);
var inst_8883 = [inst_8882];
var inst_8884 = (new cljs.core.PersistentVector(null,(1),(5),inst_8879,inst_8883,null));
var inst_8885 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"addvote",inst_8878,inst_8884);
var inst_8886 = cljs.core.async.interop.p__GT_c.call(null,inst_8885);
var state_9186__$1 = (function (){var statearr_9474 = state_9186;
(statearr_9474[(58)] = inst_8875);

return statearr_9474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(93),inst_8886);
} else {
if((state_val_9187 === (124))){
var inst_9044 = (state_9186[(54)]);
var state_9186__$1 = state_9186;
var statearr_9475_9865 = state_9186__$1;
(statearr_9475_9865[(2)] = inst_9044);

(statearr_9475_9865[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (156))){
var _ = (function (){var statearr_9476 = state_9186;
(statearr_9476[(4)] = cljs.core.cons.call(null,(159),(state_9186[(4)])));

return statearr_9476;
})();
var inst_9168 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_9169 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"needs latest terms accepted"];
var inst_9170 = cljs.core.PersistentHashMap.fromArrays(inst_9168,inst_9169);
var inst_9171 = cljs.test.do_report.call(null,inst_9170);
var ___$1 = (function (){var statearr_9477 = state_9186;
(statearr_9477[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9477;
})();
var state_9186__$1 = state_9186;
var statearr_9478_9866 = state_9186__$1;
(statearr_9478_9866[(2)] = inst_9171);

(statearr_9478_9866[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (29))){
var inst_8631 = (state_9186[(57)]);
var inst_8638 = (function(){throw inst_8631})();
var state_9186__$1 = state_9186;
var statearr_9479_9867 = state_9186__$1;
(statearr_9479_9867[(2)] = inst_8638);

(statearr_9479_9867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (61))){
var inst_8746 = (state_9186[(55)]);
var state_9186__$1 = state_9186;
var statearr_9480_9868 = state_9186__$1;
(statearr_9480_9868[(2)] = inst_8746);

(statearr_9480_9868[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (93))){
var inst_8888 = (state_9186[(59)]);
var inst_8888__$1 = (state_9186[(2)]);
var inst_8889 = (inst_8888__$1 instanceof cljs.core.ExceptionInfo);
var inst_8890 = cljs.core.ex_data.call(null,inst_8888__$1);
var inst_8891 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_8890);
var inst_8892 = cljs.core._EQ_.call(null,inst_8891,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_8893 = ((inst_8889) && (inst_8892));
var state_9186__$1 = (function (){var statearr_9481 = state_9186;
(statearr_9481[(59)] = inst_8888__$1);

return statearr_9481;
})();
if(cljs.core.truth_(inst_8893)){
var statearr_9482_9869 = state_9186__$1;
(statearr_9482_9869[(1)] = (94));

} else {
var statearr_9483_9870 = state_9186__$1;
(statearr_9483_9870[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (125))){
var inst_9054 = (state_9186[(2)]);
var inst_9055 = [new cljs.core.Keyword(null,"voter","voter",(1012094707)),new cljs.core.Keyword(null,"prop_id","prop_id",(-694455661)),new cljs.core.Keyword(null,"vote_type","vote_type",(-293333277))];
var inst_9056 = [e2e.proposals.owner_acc,(1),(1)];
var inst_9057 = cljs.core.PersistentHashMap.fromArrays(inst_9055,inst_9056);
var inst_9058 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"addvote",inst_9057);
var inst_9059 = cljs.core.async.interop.p__GT_c.call(null,inst_9058);
var state_9186__$1 = (function (){var statearr_9484 = state_9186;
(statearr_9484[(60)] = inst_9054);

return statearr_9484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9186__$1,(126),inst_9059);
} else {
if((state_val_9187 === (157))){
var inst_9174 = (state_9186[(2)]);
var _ = (function (){var statearr_9485 = state_9186;
(statearr_9485[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9485;
})();
var state_9186__$1 = state_9186;
var statearr_9486_9871 = state_9186__$1;
(statearr_9486_9871[(2)] = inst_9174);

(statearr_9486_9871[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (30))){
var inst_8631 = (state_9186[(57)]);
var state_9186__$1 = state_9186;
var statearr_9487_9872 = state_9186__$1;
(statearr_9487_9872[(2)] = inst_8631);

(statearr_9487_9872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (62))){
var inst_8756 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9488 = state_9186;
(statearr_9488[(61)] = inst_8756);

return statearr_9488;
})();
var statearr_9489_9873 = state_9186__$1;
(statearr_9489_9873[(2)] = null);

(statearr_9489_9873[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (94))){
var inst_8888 = (state_9186[(59)]);
var inst_8895 = (function(){throw inst_8888})();
var state_9186__$1 = state_9186;
var statearr_9490_9874 = state_9186__$1;
(statearr_9490_9874[(2)] = inst_8895);

(statearr_9490_9874[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (126))){
var inst_9061 = (state_9186[(8)]);
var inst_9061__$1 = (state_9186[(2)]);
var inst_9062 = (inst_9061__$1 instanceof cljs.core.ExceptionInfo);
var inst_9063 = cljs.core.ex_data.call(null,inst_9061__$1);
var inst_9064 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9063);
var inst_9065 = cljs.core._EQ_.call(null,inst_9064,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9066 = ((inst_9062) && (inst_9065));
var state_9186__$1 = (function (){var statearr_9491 = state_9186;
(statearr_9491[(8)] = inst_9061__$1);

return statearr_9491;
})();
if(cljs.core.truth_(inst_9066)){
var statearr_9492_9875 = state_9186__$1;
(statearr_9492_9875[(1)] = (127));

} else {
var statearr_9493_9876 = state_9186__$1;
(statearr_9493_9876[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (158))){
var inst_9157 = (state_9186[(2)]);
var inst_9158 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9159 = null;
var inst_9160 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"needs latest terms accepted",inst_9159,inst_9157];
var inst_9161 = cljs.core.PersistentHashMap.fromArrays(inst_9158,inst_9160);
var inst_9162 = cljs.test.do_report.call(null,inst_9161);
var state_9186__$1 = state_9186;
var statearr_9494_9877 = state_9186__$1;
(statearr_9494_9877[(2)] = inst_9162);

(statearr_9494_9877[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (31))){
var inst_8641 = (state_9186[(2)]);
var state_9186__$1 = (function (){var statearr_9495 = state_9186;
(statearr_9495[(62)] = inst_8641);

return statearr_9495;
})();
var statearr_9496_9878 = state_9186__$1;
(statearr_9496_9878[(2)] = null);

(statearr_9496_9878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (63))){
var _ = (function (){var statearr_9497 = state_9186;
(statearr_9497[(4)] = cljs.core.cons.call(null,(66),(state_9186[(4)])));

return statearr_9497;
})();
var state_9186__$1 = state_9186;
var statearr_9498_9879 = state_9186__$1;
(statearr_9498_9879[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (95))){
var inst_8888 = (state_9186[(59)]);
var state_9186__$1 = state_9186;
var statearr_9501_9880 = state_9186__$1;
(statearr_9501_9880[(2)] = inst_8888);

(statearr_9501_9880[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (127))){
var inst_9061 = (state_9186[(8)]);
var inst_9068 = (function(){throw inst_9061})();
var state_9186__$1 = state_9186;
var statearr_9502_9881 = state_9186__$1;
(statearr_9502_9881[(2)] = inst_9068);

(statearr_9502_9881[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_9187 === (159))){
var _ = (function (){var statearr_9503 = state_9186;
(statearr_9503[(4)] = cljs.core.rest.call(null,(state_9186[(4)])));

return statearr_9503;
})();
var state_9186__$1 = state_9186;
var ex9500 = (state_9186__$1[(2)]);
var statearr_9504_9882 = state_9186__$1;
(statearr_9504_9882[(5)] = ex9500);


var statearr_9505_9883 = state_9186__$1;
(statearr_9505_9883[(1)] = (158));

(statearr_9505_9883[(5)] = null);



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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_9506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9506[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_9506[(1)] = (1));

return statearr_9506;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_9186){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_9186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e9507){var ex__18__auto__ = e9507;
var statearr_9508_9884 = state_9186;
(statearr_9508_9884[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_9186[(4)]))){
var statearr_9509_9885 = state_9186;
(statearr_9509_9885[(1)] = cljs.core.first.call(null,(state_9186[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__9886 = state_9186;
state_9186 = G__9886;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_9186){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_9186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_9510 = f__20__auto__.call(null);
(statearr_9510[(6)] = c__19__auto__);

return statearr_9510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.proposals.t_e2e$proposals7559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta7560","meta7560",(1100075640),null)], null);
});

e2e.proposals.t_e2e$proposals7559.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals7559.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals7559";

e2e.proposals.t_e2e$proposals7559.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals7559");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals7559.
 */
e2e.proposals.__GT_t_e2e$proposals7559 = (function e2e$proposals$__GT_t_e2e$proposals7559(meta7560){
return (new e2e.proposals.t_e2e$proposals7559(meta7560));
});

}

return (new e2e.proposals.t_e2e$proposals7559(null));
});

e2e.proposals.vote.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.vote;},new cljs.core.Symbol("e2e.proposals","vote","e2e.proposals/vote",(-517647785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"vote","vote",(-839798934),null),"e2e/proposals.cljs",(14),(1),(213),(213),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.vote)?e2e.proposals.vote.cljs$lang$test:null)]));
e2e.proposals.process_cycle = (function e2e$proposals$process_cycle(){
return cljs.test.test_var.call(null,e2e.proposals.process_cycle.cljs$lang$var);
});
e2e.proposals.process_cycle.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.proposals !== 'undefined') && (typeof e2e.proposals.t_e2e$proposals9887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.proposals.t_e2e$proposals9887 = (function (meta9888){
this.meta9888 = meta9888;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.proposals.t_e2e$proposals9887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9889,meta9888__$1){
var self__ = this;
var _9889__$1 = this;
return (new e2e.proposals.t_e2e$proposals9887(meta9888__$1));
});

e2e.proposals.t_e2e$proposals9887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9889){
var self__ = this;
var _9889__$1 = this;
return self__.meta9888;
});

e2e.proposals.t_e2e$proposals9887.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.proposals.t_e2e$proposals9887.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto___10507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___10507,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___10507,___192__auto__,self____$1){
return (function (state_10087){
var state_val_10088 = (state_10087[(1)]);
if((state_val_10088 === (32))){
var inst_9999 = (state_10087[(7)]);
var inst_9999__$1 = (state_10087[(2)]);
var inst_10000 = (inst_9999__$1 instanceof cljs.core.ExceptionInfo);
var inst_10001 = cljs.core.ex_data.call(null,inst_9999__$1);
var inst_10002 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10001);
var inst_10003 = cljs.core._EQ_.call(null,inst_10002,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10004 = ((inst_10000) && (inst_10003));
var state_10087__$1 = (function (){var statearr_10089 = state_10087;
(statearr_10089[(7)] = inst_9999__$1);

return statearr_10089;
})();
if(cljs.core.truth_(inst_10004)){
var statearr_10090_10508 = state_10087__$1;
(statearr_10090_10508[(1)] = (33));

} else {
var statearr_10091_10509 = state_10087__$1;
(statearr_10091_10509[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (1))){
var state_10087__$1 = state_10087;
var statearr_10092_10510 = state_10087__$1;
(statearr_10092_10510[(2)] = null);

(statearr_10092_10510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (33))){
var inst_9999 = (state_10087[(7)]);
var inst_10006 = (function(){throw inst_9999})();
var state_10087__$1 = state_10087;
var statearr_10093_10511 = state_10087__$1;
(statearr_10093_10511[(2)] = inst_10006);

(statearr_10093_10511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (2))){
var _ = (function (){var statearr_10094 = state_10087;
(statearr_10094[(4)] = cljs.core.cons.call(null,(5),(state_10087[(4)])));

return statearr_10094;
})();
var state_10087__$1 = state_10087;
var statearr_10095_10512 = state_10087__$1;
(statearr_10095_10512[(2)] = null);

(statearr_10095_10512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (34))){
var inst_9999 = (state_10087[(7)]);
var state_10087__$1 = state_10087;
var statearr_10096_10513 = state_10087__$1;
(statearr_10096_10513[(2)] = inst_9999);

(statearr_10096_10513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (3))){
var inst_10085 = (state_10087[(2)]);
var state_10087__$1 = state_10087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10087__$1,inst_10085);
} else {
if((state_val_10088 === (35))){
var inst_10009 = (state_10087[(2)]);
var state_10087__$1 = (function (){var statearr_10097 = state_10087;
(statearr_10097[(8)] = inst_10009);

return statearr_10097;
})();
var statearr_10098_10514 = state_10087__$1;
(statearr_10098_10514[(2)] = null);

(statearr_10098_10514[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (4))){
var inst_9891 = (state_10087[(2)]);
var inst_9892 = cljs.core.prn.call(null,inst_9891);
var state_10087__$1 = state_10087;
var statearr_10100_10515 = state_10087__$1;
(statearr_10100_10515[(2)] = inst_9892);

(statearr_10100_10515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (36))){
var _ = (function (){var statearr_10101 = state_10087;
(statearr_10101[(4)] = cljs.core.cons.call(null,(43),(state_10087[(4)])));

return statearr_10101;
})();
var inst_10035 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_10036 = [e2e.proposals.owner_acc,(2)];
var inst_10037 = cljs.core.PersistentHashMap.fromArrays(inst_10035,inst_10036);
var inst_10038 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_10037);
var inst_10039 = cljs.core.async.interop.p__GT_c.call(null,inst_10038);
var state_10087__$1 = state_10087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10087__$1,(44),inst_10039);
} else {
if((state_val_10088 === (5))){
var _ = (function (){var statearr_10102 = state_10087;
(statearr_10102[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10102;
})();
var state_10087__$1 = state_10087;
var ex10099 = (state_10087__$1[(2)]);
var statearr_10103_10516 = state_10087__$1;
(statearr_10103_10516[(5)] = ex10099);


if((ex10099 instanceof Error)){
var statearr_10104_10517 = state_10087__$1;
(statearr_10104_10517[(1)] = (4));

(statearr_10104_10517[(5)] = null);

} else {
throw ex10099;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (37))){
var inst_10082 = (state_10087[(2)]);
var _ = (function (){var statearr_10105 = state_10087;
(statearr_10105[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10105;
})();
var state_10087__$1 = state_10087;
var statearr_10106_10518 = state_10087__$1;
(statearr_10106_10518[(2)] = inst_10082);

(statearr_10106_10518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (6))){
var _ = (function (){var statearr_10107 = state_10087;
(statearr_10107[(4)] = cljs.core.cons.call(null,(19),(state_10087[(4)])));

return statearr_10107;
})();
var inst_9942 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_9943 = [e2e.proposals.owner_acc,(2)];
var inst_9944 = cljs.core.PersistentHashMap.fromArrays(inst_9942,inst_9943);
var inst_9945 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_9944);
var inst_9946 = cljs.core.async.interop.p__GT_c.call(null,inst_9945);
var state_10087__$1 = state_10087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10087__$1,(20),inst_9946);
} else {
if((state_val_10088 === (38))){
var inst_10010 = (state_10087[(2)]);
var inst_10011 = cljs.core.prn.call(null,"test failed with ",inst_10010);
var state_10087__$1 = (function (){var statearr_10108 = state_10087;
(statearr_10108[(9)] = inst_10011);

return statearr_10108;
})();
var statearr_10109_10519 = state_10087__$1;
(statearr_10109_10519[(2)] = null);

(statearr_10109_10519[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (7))){
var inst_9979 = (state_10087[(2)]);
var inst_9980 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1));
var inst_9981 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_9980);
var inst_9982 = cljs.core.async.interop.p__GT_c.call(null,inst_9981);
var state_10087__$1 = (function (){var statearr_10110 = state_10087;
(statearr_10110[(10)] = inst_9979);

return statearr_10110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10087__$1,(28),inst_9982);
} else {
if((state_val_10088 === (39))){
var _ = (function (){var statearr_10111 = state_10087;
(statearr_10111[(4)] = cljs.core.cons.call(null,(42),(state_10087[(4)])));

return statearr_10111;
})();
var inst_10023 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_10024 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle"];
var inst_10025 = cljs.core.PersistentHashMap.fromArrays(inst_10023,inst_10024);
var inst_10026 = cljs.test.do_report.call(null,inst_10025);
var ___$1 = (function (){var statearr_10112 = state_10087;
(statearr_10112[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10112;
})();
var state_10087__$1 = state_10087;
var statearr_10113_10520 = state_10087__$1;
(statearr_10113_10520[(2)] = inst_10026);

(statearr_10113_10520[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (8))){
var inst_9900 = (state_10087[(11)]);
var inst_9901 = (state_10087[(12)]);
var inst_9898 = (state_10087[(2)]);
var inst_9899 = inst_9898.cause;
var inst_9900__$1 = inst_9899.message;
var inst_9901__$1 = clojure.string.ends_with_QMARK_.call(null,inst_9900__$1,"cycle is not in the past");
var inst_9902 = (!(inst_9901__$1));
var state_10087__$1 = (function (){var statearr_10114 = state_10087;
(statearr_10114[(11)] = inst_9900__$1);

(statearr_10114[(12)] = inst_9901__$1);

return statearr_10114;
})();
if(inst_9902){
var statearr_10115_10521 = state_10087__$1;
(statearr_10115_10521[(1)] = (9));

} else {
var statearr_10116_10522 = state_10087__$1;
(statearr_10116_10522[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (40))){
var inst_10029 = (state_10087[(2)]);
var state_10087__$1 = state_10087;
var statearr_10117_10523 = state_10087__$1;
(statearr_10117_10523[(2)] = inst_10029);

(statearr_10117_10523[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (9))){
var inst_9900 = (state_10087[(11)]);
var inst_9904 = ["expected =","cycle is not in the past"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9900)].join('');
var inst_9905 = cljs.core.prn.call(null,inst_9904);
var state_10087__$1 = state_10087;
var statearr_10118_10524 = state_10087__$1;
(statearr_10118_10524[(2)] = inst_9905);

(statearr_10118_10524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (41))){
var inst_10012 = (state_10087[(2)]);
var inst_10013 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10014 = null;
var inst_10015 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_10014,inst_10012];
var inst_10016 = cljs.core.PersistentHashMap.fromArrays(inst_10013,inst_10015);
var inst_10017 = cljs.test.do_report.call(null,inst_10016);
var state_10087__$1 = state_10087;
var statearr_10120_10525 = state_10087__$1;
(statearr_10120_10525[(2)] = inst_10017);

(statearr_10120_10525[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (10))){
var state_10087__$1 = state_10087;
var statearr_10121_10526 = state_10087__$1;
(statearr_10121_10526[(2)] = null);

(statearr_10121_10526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (42))){
var _ = (function (){var statearr_10123 = state_10087;
(statearr_10123[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10123;
})();
var state_10087__$1 = state_10087;
var ex10119 = (state_10087__$1[(2)]);
var statearr_10124_10527 = state_10087__$1;
(statearr_10124_10527[(5)] = ex10119);


var statearr_10125_10528 = state_10087__$1;
(statearr_10125_10528[(1)] = (41));

(statearr_10125_10528[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (11))){
var inst_9908 = (state_10087[(2)]);
var state_10087__$1 = (function (){var statearr_10126 = state_10087;
(statearr_10126[(13)] = inst_9908);

return statearr_10126;
})();
var statearr_10127_10529 = state_10087__$1;
(statearr_10127_10529[(2)] = null);

(statearr_10127_10529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (43))){
var _ = (function (){var statearr_10128 = state_10087;
(statearr_10128[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10128;
})();
var state_10087__$1 = state_10087;
var ex10122 = (state_10087__$1[(2)]);
var statearr_10129_10530 = state_10087__$1;
(statearr_10129_10530[(5)] = ex10122);


if((ex10122 instanceof Error)){
var statearr_10130_10531 = state_10087__$1;
(statearr_10130_10531[(1)] = (38));

(statearr_10130_10531[(5)] = null);

} else {
throw ex10122;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (12))){
var inst_9901 = (state_10087[(12)]);
var _ = (function (){var statearr_10131 = state_10087;
(statearr_10131[(4)] = cljs.core.cons.call(null,(15),(state_10087[(4)])));

return statearr_10131;
})();
var state_10087__$1 = state_10087;
if(cljs.core.truth_(inst_9901)){
var statearr_10132_10532 = state_10087__$1;
(statearr_10132_10532[(1)] = (16));

} else {
var statearr_10133_10533 = state_10087__$1;
(statearr_10133_10533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (44))){
var inst_10041 = (state_10087[(14)]);
var inst_10041__$1 = (state_10087[(2)]);
var inst_10042 = (inst_10041__$1 instanceof cljs.core.ExceptionInfo);
var inst_10043 = cljs.core.ex_data.call(null,inst_10041__$1);
var inst_10044 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10043);
var inst_10045 = cljs.core._EQ_.call(null,inst_10044,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10046 = ((inst_10042) && (inst_10045));
var state_10087__$1 = (function (){var statearr_10134 = state_10087;
(statearr_10134[(14)] = inst_10041__$1);

return statearr_10134;
})();
if(cljs.core.truth_(inst_10046)){
var statearr_10135_10534 = state_10087__$1;
(statearr_10135_10534[(1)] = (45));

} else {
var statearr_10136_10535 = state_10087__$1;
(statearr_10136_10535[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (13))){
var inst_9936 = (state_10087[(2)]);
var state_10087__$1 = state_10087;
var statearr_10137_10536 = state_10087__$1;
(statearr_10137_10536[(2)] = inst_9936);

(statearr_10137_10536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (45))){
var inst_10041 = (state_10087[(14)]);
var inst_10048 = (function(){throw inst_10041})();
var state_10087__$1 = state_10087;
var statearr_10138_10537 = state_10087__$1;
(statearr_10138_10537[(2)] = inst_10048);

(statearr_10138_10537[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (14))){
var inst_9909 = (state_10087[(2)]);
var inst_9910 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9911 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9912 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_9911,inst_9909];
var inst_9913 = cljs.core.PersistentHashMap.fromArrays(inst_9910,inst_9912);
var inst_9914 = cljs.test.do_report.call(null,inst_9913);
var state_10087__$1 = state_10087;
var statearr_10140_10538 = state_10087__$1;
(statearr_10140_10538[(2)] = inst_9914);

(statearr_10140_10538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (46))){
var inst_10041 = (state_10087[(14)]);
var state_10087__$1 = state_10087;
var statearr_10141_10539 = state_10087__$1;
(statearr_10141_10539[(2)] = inst_10041);

(statearr_10141_10539[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (15))){
var _ = (function (){var statearr_10142 = state_10087;
(statearr_10142[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10142;
})();
var state_10087__$1 = state_10087;
var ex10139 = (state_10087__$1[(2)]);
var statearr_10143_10540 = state_10087__$1;
(statearr_10143_10540[(5)] = ex10139);


var statearr_10144_10541 = state_10087__$1;
(statearr_10144_10541[(1)] = (14));

(statearr_10144_10541[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (47))){
var inst_10051 = (state_10087[(2)]);
var state_10087__$1 = (function (){var statearr_10145 = state_10087;
(statearr_10145[(15)] = inst_10051);

return statearr_10145;
})();
var statearr_10146_10542 = state_10087__$1;
(statearr_10146_10542[(2)] = null);

(statearr_10146_10542[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (16))){
var inst_9901 = (state_10087[(12)]);
var inst_9921 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9922 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9923 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle needs to be in the past",inst_9922,inst_9901];
var inst_9924 = cljs.core.PersistentHashMap.fromArrays(inst_9921,inst_9923);
var inst_9925 = cljs.test.do_report.call(null,inst_9924);
var state_10087__$1 = state_10087;
var statearr_10147_10543 = state_10087__$1;
(statearr_10147_10543[(2)] = inst_9925);

(statearr_10147_10543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (48))){
var _ = (function (){var statearr_10148 = state_10087;
(statearr_10148[(4)] = cljs.core.cons.call(null,(51),(state_10087[(4)])));

return statearr_10148;
})();
var state_10087__$1 = state_10087;
var statearr_10149_10544 = state_10087__$1;
(statearr_10149_10544[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (17))){
var inst_9901 = (state_10087[(12)]);
var inst_9927 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9928 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_9929 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past",inst_9928,inst_9901];
var inst_9930 = cljs.core.PersistentHashMap.fromArrays(inst_9927,inst_9929);
var inst_9931 = cljs.test.do_report.call(null,inst_9930);
var state_10087__$1 = state_10087;
var statearr_10151_10545 = state_10087__$1;
(statearr_10151_10545[(2)] = inst_9931);

(statearr_10151_10545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (49))){
var inst_10079 = (state_10087[(2)]);
var _ = (function (){var statearr_10152 = state_10087;
(statearr_10152[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10152;
})();
var state_10087__$1 = state_10087;
var statearr_10153_10546 = state_10087__$1;
(statearr_10153_10546[(2)] = inst_10079);

(statearr_10153_10546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (18))){
var inst_9901 = (state_10087[(12)]);
var inst_9933 = (state_10087[(2)]);
var _ = (function (){var statearr_10155 = state_10087;
(statearr_10155[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10155;
})();
var state_10087__$1 = (function (){var statearr_10156 = state_10087;
(statearr_10156[(16)] = inst_9933);

return statearr_10156;
})();
var statearr_10157_10547 = state_10087__$1;
(statearr_10157_10547[(2)] = inst_9901);

(statearr_10157_10547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (50))){
var inst_10052 = (state_10087[(2)]);
var inst_10053 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10054 = true;
var inst_10055 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_10054,inst_10052];
var inst_10056 = cljs.core.PersistentHashMap.fromArrays(inst_10053,inst_10055);
var inst_10057 = cljs.test.do_report.call(null,inst_10056);
var state_10087__$1 = state_10087;
var statearr_10159_10548 = state_10087__$1;
(statearr_10159_10548[(2)] = inst_10057);

(statearr_10159_10548[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (19))){
var _ = (function (){var statearr_10160 = state_10087;
(statearr_10160[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10160;
})();
var state_10087__$1 = state_10087;
var ex10154 = (state_10087__$1[(2)]);
var statearr_10161_10549 = state_10087__$1;
(statearr_10161_10549[(5)] = ex10154);


if((ex10154 instanceof Error)){
var statearr_10162_10550 = state_10087__$1;
(statearr_10162_10550[(1)] = (8));

(statearr_10162_10550[(5)] = null);

} else {
throw ex10154;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (51))){
var _ = (function (){var statearr_10163 = state_10087;
(statearr_10163[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10163;
})();
var state_10087__$1 = state_10087;
var ex10158 = (state_10087__$1[(2)]);
var statearr_10164_10551 = state_10087__$1;
(statearr_10164_10551[(5)] = ex10158);


var statearr_10165_10552 = state_10087__$1;
(statearr_10165_10552[(1)] = (50));

(statearr_10165_10552[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (20))){
var inst_9948 = (state_10087[(17)]);
var inst_9948__$1 = (state_10087[(2)]);
var inst_9949 = (inst_9948__$1 instanceof cljs.core.ExceptionInfo);
var inst_9950 = cljs.core.ex_data.call(null,inst_9948__$1);
var inst_9951 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9950);
var inst_9952 = cljs.core._EQ_.call(null,inst_9951,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9953 = ((inst_9949) && (inst_9952));
var state_10087__$1 = (function (){var statearr_10166 = state_10087;
(statearr_10166[(17)] = inst_9948__$1);

return statearr_10166;
})();
if(cljs.core.truth_(inst_9953)){
var statearr_10167_10553 = state_10087__$1;
(statearr_10167_10553[(1)] = (21));

} else {
var statearr_10168_10554 = state_10087__$1;
(statearr_10168_10554[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (52))){
var inst_10064 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10065 = true;
var inst_10066 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can finalize cycle",inst_10065,true];
var inst_10067 = cljs.core.PersistentHashMap.fromArrays(inst_10064,inst_10066);
var inst_10068 = cljs.test.do_report.call(null,inst_10067);
var state_10087__$1 = state_10087;
var statearr_10169_10555 = state_10087__$1;
(statearr_10169_10555[(2)] = inst_10068);

(statearr_10169_10555[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (21))){
var inst_9948 = (state_10087[(17)]);
var inst_9955 = (function(){throw inst_9948})();
var state_10087__$1 = state_10087;
var statearr_10170_10556 = state_10087__$1;
(statearr_10170_10556[(2)] = inst_9955);

(statearr_10170_10556[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (53))){
var inst_10070 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10071 = true;
var inst_10072 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle",inst_10071,true];
var inst_10073 = cljs.core.PersistentHashMap.fromArrays(inst_10070,inst_10072);
var inst_10074 = cljs.test.do_report.call(null,inst_10073);
var state_10087__$1 = state_10087;
var statearr_10171_10557 = state_10087__$1;
(statearr_10171_10557[(2)] = inst_10074);

(statearr_10171_10557[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (22))){
var inst_9948 = (state_10087[(17)]);
var state_10087__$1 = state_10087;
var statearr_10172_10558 = state_10087__$1;
(statearr_10172_10558[(2)] = inst_9948);

(statearr_10172_10558[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (54))){
var inst_10076 = (state_10087[(2)]);
var _ = (function (){var statearr_10173 = state_10087;
(statearr_10173[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10173;
})();
var state_10087__$1 = (function (){var statearr_10174 = state_10087;
(statearr_10174[(18)] = inst_10076);

return statearr_10174;
})();
var statearr_10175_10559 = state_10087__$1;
(statearr_10175_10559[(2)] = true);

(statearr_10175_10559[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (23))){
var inst_9958 = (state_10087[(2)]);
var state_10087__$1 = (function (){var statearr_10176 = state_10087;
(statearr_10176[(19)] = inst_9958);

return statearr_10176;
})();
var statearr_10177_10560 = state_10087__$1;
(statearr_10177_10560[(2)] = null);

(statearr_10177_10560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (24))){
var _ = (function (){var statearr_10178 = state_10087;
(statearr_10178[(4)] = cljs.core.cons.call(null,(27),(state_10087[(4)])));

return statearr_10178;
})();
var inst_9970 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_9971 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past"];
var inst_9972 = cljs.core.PersistentHashMap.fromArrays(inst_9970,inst_9971);
var inst_9973 = cljs.test.do_report.call(null,inst_9972);
var ___$1 = (function (){var statearr_10179 = state_10087;
(statearr_10179[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10179;
})();
var state_10087__$1 = state_10087;
var statearr_10180_10561 = state_10087__$1;
(statearr_10180_10561[(2)] = inst_9973);

(statearr_10180_10561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (25))){
var inst_9976 = (state_10087[(2)]);
var _ = (function (){var statearr_10182 = state_10087;
(statearr_10182[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10182;
})();
var state_10087__$1 = state_10087;
var statearr_10183_10562 = state_10087__$1;
(statearr_10183_10562[(2)] = inst_9976);

(statearr_10183_10562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (26))){
var inst_9959 = (state_10087[(2)]);
var inst_9960 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_9961 = null;
var inst_9962 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_9961,inst_9959];
var inst_9963 = cljs.core.PersistentHashMap.fromArrays(inst_9960,inst_9962);
var inst_9964 = cljs.test.do_report.call(null,inst_9963);
var state_10087__$1 = state_10087;
var statearr_10184_10563 = state_10087__$1;
(statearr_10184_10563[(2)] = inst_9964);

(statearr_10184_10563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (27))){
var _ = (function (){var statearr_10185 = state_10087;
(statearr_10185[(4)] = cljs.core.rest.call(null,(state_10087[(4)])));

return statearr_10185;
})();
var state_10087__$1 = state_10087;
var ex10181 = (state_10087__$1[(2)]);
var statearr_10186_10564 = state_10087__$1;
(statearr_10186_10564[(5)] = ex10181);


var statearr_10187_10565 = state_10087__$1;
(statearr_10187_10565[(1)] = (26));

(statearr_10187_10565[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (28))){
var inst_9984 = (state_10087[(20)]);
var inst_9984__$1 = (state_10087[(2)]);
var inst_9985 = (inst_9984__$1 instanceof cljs.core.ExceptionInfo);
var inst_9986 = cljs.core.ex_data.call(null,inst_9984__$1);
var inst_9987 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_9986);
var inst_9988 = cljs.core._EQ_.call(null,inst_9987,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_9989 = ((inst_9985) && (inst_9988));
var state_10087__$1 = (function (){var statearr_10188 = state_10087;
(statearr_10188[(20)] = inst_9984__$1);

return statearr_10188;
})();
if(cljs.core.truth_(inst_9989)){
var statearr_10189_10566 = state_10087__$1;
(statearr_10189_10566[(1)] = (29));

} else {
var statearr_10190_10567 = state_10087__$1;
(statearr_10190_10567[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (29))){
var inst_9984 = (state_10087[(20)]);
var inst_9991 = (function(){throw inst_9984})();
var state_10087__$1 = state_10087;
var statearr_10191_10568 = state_10087__$1;
(statearr_10191_10568[(2)] = inst_9991);

(statearr_10191_10568[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (30))){
var inst_9984 = (state_10087[(20)]);
var state_10087__$1 = state_10087;
var statearr_10192_10569 = state_10087__$1;
(statearr_10192_10569[(2)] = inst_9984);

(statearr_10192_10569[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10088 === (31))){
var inst_9994 = (state_10087[(2)]);
var inst_9995 = cljs.core.PersistentHashMap.EMPTY;
var inst_9996 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_9995);
var inst_9997 = cljs.core.async.interop.p__GT_c.call(null,inst_9996);
var state_10087__$1 = (function (){var statearr_10193 = state_10087;
(statearr_10193[(21)] = inst_9994);

return statearr_10193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10087__$1,(32),inst_9997);
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
});})(c__19__auto___10507,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto___10507,___192__auto__,self____$1){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_10194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10194[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_10194[(1)] = (1));

return statearr_10194;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_10087){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_10087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e10195){var ex__18__auto__ = e10195;
var statearr_10196_10570 = state_10087;
(statearr_10196_10570[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_10087[(4)]))){
var statearr_10197_10571 = state_10087;
(statearr_10197_10571[(1)] = cljs.core.first.call(null,(state_10087[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__10572 = state_10087;
state_10087 = G__10572;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_10087){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_10087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___10507,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_10198 = f__20__auto__.call(null);
(statearr_10198[(6)] = c__19__auto___10507);

return statearr_10198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___10507,___192__auto__,self____$1))
);


return done.call(null);
});

e2e.proposals.t_e2e$proposals9887.prototype.apply = (function (self__,args9890){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9890)));
});

e2e.proposals.t_e2e$proposals9887.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto___10573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto___10573,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto___10573,___192__auto__){
return (function (state_10395){
var state_val_10396 = (state_10395[(1)]);
if((state_val_10396 === (32))){
var inst_10307 = (state_10395[(7)]);
var inst_10307__$1 = (state_10395[(2)]);
var inst_10308 = (inst_10307__$1 instanceof cljs.core.ExceptionInfo);
var inst_10309 = cljs.core.ex_data.call(null,inst_10307__$1);
var inst_10310 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10309);
var inst_10311 = cljs.core._EQ_.call(null,inst_10310,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10312 = ((inst_10308) && (inst_10311));
var state_10395__$1 = (function (){var statearr_10397 = state_10395;
(statearr_10397[(7)] = inst_10307__$1);

return statearr_10397;
})();
if(cljs.core.truth_(inst_10312)){
var statearr_10398_10574 = state_10395__$1;
(statearr_10398_10574[(1)] = (33));

} else {
var statearr_10399_10575 = state_10395__$1;
(statearr_10399_10575[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (1))){
var state_10395__$1 = state_10395;
var statearr_10400_10576 = state_10395__$1;
(statearr_10400_10576[(2)] = null);

(statearr_10400_10576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (33))){
var inst_10307 = (state_10395[(7)]);
var inst_10314 = (function(){throw inst_10307})();
var state_10395__$1 = state_10395;
var statearr_10401_10577 = state_10395__$1;
(statearr_10401_10577[(2)] = inst_10314);

(statearr_10401_10577[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (2))){
var _ = (function (){var statearr_10402 = state_10395;
(statearr_10402[(4)] = cljs.core.cons.call(null,(5),(state_10395[(4)])));

return statearr_10402;
})();
var state_10395__$1 = state_10395;
var statearr_10403_10578 = state_10395__$1;
(statearr_10403_10578[(2)] = null);

(statearr_10403_10578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (34))){
var inst_10307 = (state_10395[(7)]);
var state_10395__$1 = state_10395;
var statearr_10404_10579 = state_10395__$1;
(statearr_10404_10579[(2)] = inst_10307);

(statearr_10404_10579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (3))){
var inst_10393 = (state_10395[(2)]);
var state_10395__$1 = state_10395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10395__$1,inst_10393);
} else {
if((state_val_10396 === (35))){
var inst_10317 = (state_10395[(2)]);
var state_10395__$1 = (function (){var statearr_10405 = state_10395;
(statearr_10405[(8)] = inst_10317);

return statearr_10405;
})();
var statearr_10406_10580 = state_10395__$1;
(statearr_10406_10580[(2)] = null);

(statearr_10406_10580[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (4))){
var inst_10199 = (state_10395[(2)]);
var inst_10200 = cljs.core.prn.call(null,inst_10199);
var state_10395__$1 = state_10395;
var statearr_10408_10581 = state_10395__$1;
(statearr_10408_10581[(2)] = inst_10200);

(statearr_10408_10581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (36))){
var _ = (function (){var statearr_10409 = state_10395;
(statearr_10409[(4)] = cljs.core.cons.call(null,(43),(state_10395[(4)])));

return statearr_10409;
})();
var inst_10343 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_10344 = [e2e.proposals.owner_acc,(2)];
var inst_10345 = cljs.core.PersistentHashMap.fromArrays(inst_10343,inst_10344);
var inst_10346 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_10345);
var inst_10347 = cljs.core.async.interop.p__GT_c.call(null,inst_10346);
var state_10395__$1 = state_10395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10395__$1,(44),inst_10347);
} else {
if((state_val_10396 === (5))){
var _ = (function (){var statearr_10410 = state_10395;
(statearr_10410[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10410;
})();
var state_10395__$1 = state_10395;
var ex10407 = (state_10395__$1[(2)]);
var statearr_10411_10582 = state_10395__$1;
(statearr_10411_10582[(5)] = ex10407);


if((ex10407 instanceof Error)){
var statearr_10412_10583 = state_10395__$1;
(statearr_10412_10583[(1)] = (4));

(statearr_10412_10583[(5)] = null);

} else {
throw ex10407;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (37))){
var inst_10390 = (state_10395[(2)]);
var _ = (function (){var statearr_10413 = state_10395;
(statearr_10413[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10413;
})();
var state_10395__$1 = state_10395;
var statearr_10414_10584 = state_10395__$1;
(statearr_10414_10584[(2)] = inst_10390);

(statearr_10414_10584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (6))){
var _ = (function (){var statearr_10415 = state_10395;
(statearr_10415[(4)] = cljs.core.cons.call(null,(19),(state_10395[(4)])));

return statearr_10415;
})();
var inst_10250 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"id","id",(-1388402092))];
var inst_10251 = [e2e.proposals.owner_acc,(2)];
var inst_10252 = cljs.core.PersistentHashMap.fromArrays(inst_10250,inst_10251);
var inst_10253 = e2e.proposals.eos_tx_owner.call(null,e2e.proposals.prop_acc,"processcycle",inst_10252);
var inst_10254 = cljs.core.async.interop.p__GT_c.call(null,inst_10253);
var state_10395__$1 = state_10395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10395__$1,(20),inst_10254);
} else {
if((state_val_10396 === (38))){
var inst_10318 = (state_10395[(2)]);
var inst_10319 = cljs.core.prn.call(null,"test failed with ",inst_10318);
var state_10395__$1 = (function (){var statearr_10416 = state_10395;
(statearr_10416[(9)] = inst_10319);

return statearr_10416;
})();
var statearr_10417_10585 = state_10395__$1;
(statearr_10417_10585[(2)] = null);

(statearr_10417_10585[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (7))){
var inst_10287 = (state_10395[(2)]);
var inst_10288 = cljs.core.assoc.call(null,e2e.proposals.prop_config,new cljs.core.Keyword(null,"cycle_duration_sec","cycle_duration_sec",(2139129571)),(1));
var inst_10289 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"update",inst_10288);
var inst_10290 = cljs.core.async.interop.p__GT_c.call(null,inst_10289);
var state_10395__$1 = (function (){var statearr_10418 = state_10395;
(statearr_10418[(10)] = inst_10287);

return statearr_10418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10395__$1,(28),inst_10290);
} else {
if((state_val_10396 === (39))){
var _ = (function (){var statearr_10419 = state_10395;
(statearr_10419[(4)] = cljs.core.cons.call(null,(42),(state_10395[(4)])));

return statearr_10419;
})();
var inst_10331 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_10332 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle"];
var inst_10333 = cljs.core.PersistentHashMap.fromArrays(inst_10331,inst_10332);
var inst_10334 = cljs.test.do_report.call(null,inst_10333);
var ___$1 = (function (){var statearr_10420 = state_10395;
(statearr_10420[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10420;
})();
var state_10395__$1 = state_10395;
var statearr_10421_10586 = state_10395__$1;
(statearr_10421_10586[(2)] = inst_10334);

(statearr_10421_10586[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (8))){
var inst_10208 = (state_10395[(11)]);
var inst_10209 = (state_10395[(12)]);
var inst_10206 = (state_10395[(2)]);
var inst_10207 = inst_10206.cause;
var inst_10208__$1 = inst_10207.message;
var inst_10209__$1 = clojure.string.ends_with_QMARK_.call(null,inst_10208__$1,"cycle is not in the past");
var inst_10210 = (!(inst_10209__$1));
var state_10395__$1 = (function (){var statearr_10422 = state_10395;
(statearr_10422[(11)] = inst_10208__$1);

(statearr_10422[(12)] = inst_10209__$1);

return statearr_10422;
})();
if(inst_10210){
var statearr_10423_10587 = state_10395__$1;
(statearr_10423_10587[(1)] = (9));

} else {
var statearr_10424_10588 = state_10395__$1;
(statearr_10424_10588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (40))){
var inst_10337 = (state_10395[(2)]);
var state_10395__$1 = state_10395;
var statearr_10425_10589 = state_10395__$1;
(statearr_10425_10589[(2)] = inst_10337);

(statearr_10425_10589[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (9))){
var inst_10208 = (state_10395[(11)]);
var inst_10212 = ["expected =","cycle is not in the past"," actual = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10208)].join('');
var inst_10213 = cljs.core.prn.call(null,inst_10212);
var state_10395__$1 = state_10395;
var statearr_10426_10590 = state_10395__$1;
(statearr_10426_10590[(2)] = inst_10213);

(statearr_10426_10590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (41))){
var inst_10320 = (state_10395[(2)]);
var inst_10321 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10322 = null;
var inst_10323 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_10322,inst_10320];
var inst_10324 = cljs.core.PersistentHashMap.fromArrays(inst_10321,inst_10323);
var inst_10325 = cljs.test.do_report.call(null,inst_10324);
var state_10395__$1 = state_10395;
var statearr_10428_10591 = state_10395__$1;
(statearr_10428_10591[(2)] = inst_10325);

(statearr_10428_10591[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (10))){
var state_10395__$1 = state_10395;
var statearr_10429_10592 = state_10395__$1;
(statearr_10429_10592[(2)] = null);

(statearr_10429_10592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (42))){
var _ = (function (){var statearr_10431 = state_10395;
(statearr_10431[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10431;
})();
var state_10395__$1 = state_10395;
var ex10427 = (state_10395__$1[(2)]);
var statearr_10432_10593 = state_10395__$1;
(statearr_10432_10593[(5)] = ex10427);


var statearr_10433_10594 = state_10395__$1;
(statearr_10433_10594[(1)] = (41));

(statearr_10433_10594[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (11))){
var inst_10216 = (state_10395[(2)]);
var state_10395__$1 = (function (){var statearr_10434 = state_10395;
(statearr_10434[(13)] = inst_10216);

return statearr_10434;
})();
var statearr_10435_10595 = state_10395__$1;
(statearr_10435_10595[(2)] = null);

(statearr_10435_10595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (43))){
var _ = (function (){var statearr_10436 = state_10395;
(statearr_10436[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10436;
})();
var state_10395__$1 = state_10395;
var ex10430 = (state_10395__$1[(2)]);
var statearr_10437_10596 = state_10395__$1;
(statearr_10437_10596[(5)] = ex10430);


if((ex10430 instanceof Error)){
var statearr_10438_10597 = state_10395__$1;
(statearr_10438_10597[(1)] = (38));

(statearr_10438_10597[(5)] = null);

} else {
throw ex10430;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (12))){
var inst_10209 = (state_10395[(12)]);
var _ = (function (){var statearr_10439 = state_10395;
(statearr_10439[(4)] = cljs.core.cons.call(null,(15),(state_10395[(4)])));

return statearr_10439;
})();
var state_10395__$1 = state_10395;
if(cljs.core.truth_(inst_10209)){
var statearr_10440_10598 = state_10395__$1;
(statearr_10440_10598[(1)] = (16));

} else {
var statearr_10441_10599 = state_10395__$1;
(statearr_10441_10599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (44))){
var inst_10349 = (state_10395[(14)]);
var inst_10349__$1 = (state_10395[(2)]);
var inst_10350 = (inst_10349__$1 instanceof cljs.core.ExceptionInfo);
var inst_10351 = cljs.core.ex_data.call(null,inst_10349__$1);
var inst_10352 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10351);
var inst_10353 = cljs.core._EQ_.call(null,inst_10352,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10354 = ((inst_10350) && (inst_10353));
var state_10395__$1 = (function (){var statearr_10442 = state_10395;
(statearr_10442[(14)] = inst_10349__$1);

return statearr_10442;
})();
if(cljs.core.truth_(inst_10354)){
var statearr_10443_10600 = state_10395__$1;
(statearr_10443_10600[(1)] = (45));

} else {
var statearr_10444_10601 = state_10395__$1;
(statearr_10444_10601[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (13))){
var inst_10244 = (state_10395[(2)]);
var state_10395__$1 = state_10395;
var statearr_10445_10602 = state_10395__$1;
(statearr_10445_10602[(2)] = inst_10244);

(statearr_10445_10602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (45))){
var inst_10349 = (state_10395[(14)]);
var inst_10356 = (function(){throw inst_10349})();
var state_10395__$1 = state_10395;
var statearr_10446_10603 = state_10395__$1;
(statearr_10446_10603[(2)] = inst_10356);

(statearr_10446_10603[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (14))){
var inst_10217 = (state_10395[(2)]);
var inst_10218 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10219 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_10220 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_10219,inst_10217];
var inst_10221 = cljs.core.PersistentHashMap.fromArrays(inst_10218,inst_10220);
var inst_10222 = cljs.test.do_report.call(null,inst_10221);
var state_10395__$1 = state_10395;
var statearr_10448_10604 = state_10395__$1;
(statearr_10448_10604[(2)] = inst_10222);

(statearr_10448_10604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (46))){
var inst_10349 = (state_10395[(14)]);
var state_10395__$1 = state_10395;
var statearr_10449_10605 = state_10395__$1;
(statearr_10449_10605[(2)] = inst_10349);

(statearr_10449_10605[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (15))){
var _ = (function (){var statearr_10450 = state_10395;
(statearr_10450[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10450;
})();
var state_10395__$1 = state_10395;
var ex10447 = (state_10395__$1[(2)]);
var statearr_10451_10606 = state_10395__$1;
(statearr_10451_10606[(5)] = ex10447);


var statearr_10452_10607 = state_10395__$1;
(statearr_10452_10607[(1)] = (14));

(statearr_10452_10607[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (47))){
var inst_10359 = (state_10395[(2)]);
var state_10395__$1 = (function (){var statearr_10453 = state_10395;
(statearr_10453[(15)] = inst_10359);

return statearr_10453;
})();
var statearr_10454_10608 = state_10395__$1;
(statearr_10454_10608[(2)] = null);

(statearr_10454_10608[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (16))){
var inst_10209 = (state_10395[(12)]);
var inst_10229 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10230 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_10231 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"cycle needs to be in the past",inst_10230,inst_10209];
var inst_10232 = cljs.core.PersistentHashMap.fromArrays(inst_10229,inst_10231);
var inst_10233 = cljs.test.do_report.call(null,inst_10232);
var state_10395__$1 = state_10395;
var statearr_10455_10609 = state_10395__$1;
(statearr_10455_10609[(2)] = inst_10233);

(statearr_10455_10609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (48))){
var _ = (function (){var statearr_10456 = state_10395;
(statearr_10456[(4)] = cljs.core.cons.call(null,(51),(state_10395[(4)])));

return statearr_10456;
})();
var state_10395__$1 = state_10395;
var statearr_10457_10610 = state_10395__$1;
(statearr_10457_10610[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (17))){
var inst_10209 = (state_10395[(12)]);
var inst_10235 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10236 = new cljs.core.Symbol("e2e.macros","pass?","e2e.macros/pass?",(894145299),null);
var inst_10237 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past",inst_10236,inst_10209];
var inst_10238 = cljs.core.PersistentHashMap.fromArrays(inst_10235,inst_10237);
var inst_10239 = cljs.test.do_report.call(null,inst_10238);
var state_10395__$1 = state_10395;
var statearr_10459_10611 = state_10395__$1;
(statearr_10459_10611[(2)] = inst_10239);

(statearr_10459_10611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (49))){
var inst_10387 = (state_10395[(2)]);
var _ = (function (){var statearr_10460 = state_10395;
(statearr_10460[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10460;
})();
var state_10395__$1 = state_10395;
var statearr_10461_10612 = state_10395__$1;
(statearr_10461_10612[(2)] = inst_10387);

(statearr_10461_10612[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (18))){
var inst_10209 = (state_10395[(12)]);
var inst_10241 = (state_10395[(2)]);
var _ = (function (){var statearr_10463 = state_10395;
(statearr_10463[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10463;
})();
var state_10395__$1 = (function (){var statearr_10464 = state_10395;
(statearr_10464[(16)] = inst_10241);

return statearr_10464;
})();
var statearr_10465_10613 = state_10395__$1;
(statearr_10465_10613[(2)] = inst_10209);

(statearr_10465_10613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (50))){
var inst_10360 = (state_10395[(2)]);
var inst_10361 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10362 = true;
var inst_10363 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can finalize cycle",inst_10362,inst_10360];
var inst_10364 = cljs.core.PersistentHashMap.fromArrays(inst_10361,inst_10363);
var inst_10365 = cljs.test.do_report.call(null,inst_10364);
var state_10395__$1 = state_10395;
var statearr_10467_10614 = state_10395__$1;
(statearr_10467_10614[(2)] = inst_10365);

(statearr_10467_10614[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (19))){
var _ = (function (){var statearr_10468 = state_10395;
(statearr_10468[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10468;
})();
var state_10395__$1 = state_10395;
var ex10462 = (state_10395__$1[(2)]);
var statearr_10469_10615 = state_10395__$1;
(statearr_10469_10615[(5)] = ex10462);


if((ex10462 instanceof Error)){
var statearr_10470_10616 = state_10395__$1;
(statearr_10470_10616[(1)] = (8));

(statearr_10470_10616[(5)] = null);

} else {
throw ex10462;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (51))){
var _ = (function (){var statearr_10471 = state_10395;
(statearr_10471[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10471;
})();
var state_10395__$1 = state_10395;
var ex10466 = (state_10395__$1[(2)]);
var statearr_10472_10617 = state_10395__$1;
(statearr_10472_10617[(5)] = ex10466);


var statearr_10473_10618 = state_10395__$1;
(statearr_10473_10618[(1)] = (50));

(statearr_10473_10618[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (20))){
var inst_10256 = (state_10395[(17)]);
var inst_10256__$1 = (state_10395[(2)]);
var inst_10257 = (inst_10256__$1 instanceof cljs.core.ExceptionInfo);
var inst_10258 = cljs.core.ex_data.call(null,inst_10256__$1);
var inst_10259 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10258);
var inst_10260 = cljs.core._EQ_.call(null,inst_10259,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10261 = ((inst_10257) && (inst_10260));
var state_10395__$1 = (function (){var statearr_10474 = state_10395;
(statearr_10474[(17)] = inst_10256__$1);

return statearr_10474;
})();
if(cljs.core.truth_(inst_10261)){
var statearr_10475_10619 = state_10395__$1;
(statearr_10475_10619[(1)] = (21));

} else {
var statearr_10476_10620 = state_10395__$1;
(statearr_10476_10620[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (52))){
var inst_10372 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10373 = true;
var inst_10374 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can finalize cycle",inst_10373,true];
var inst_10375 = cljs.core.PersistentHashMap.fromArrays(inst_10372,inst_10374);
var inst_10376 = cljs.test.do_report.call(null,inst_10375);
var state_10395__$1 = state_10395;
var statearr_10477_10621 = state_10395__$1;
(statearr_10477_10621[(2)] = inst_10376);

(statearr_10477_10621[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (21))){
var inst_10256 = (state_10395[(17)]);
var inst_10263 = (function(){throw inst_10256})();
var state_10395__$1 = state_10395;
var statearr_10478_10622 = state_10395__$1;
(statearr_10478_10622[(2)] = inst_10263);

(statearr_10478_10622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (53))){
var inst_10378 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10379 = true;
var inst_10380 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can finalize cycle",inst_10379,true];
var inst_10381 = cljs.core.PersistentHashMap.fromArrays(inst_10378,inst_10380);
var inst_10382 = cljs.test.do_report.call(null,inst_10381);
var state_10395__$1 = state_10395;
var statearr_10479_10623 = state_10395__$1;
(statearr_10479_10623[(2)] = inst_10382);

(statearr_10479_10623[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (22))){
var inst_10256 = (state_10395[(17)]);
var state_10395__$1 = state_10395;
var statearr_10480_10624 = state_10395__$1;
(statearr_10480_10624[(2)] = inst_10256);

(statearr_10480_10624[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (54))){
var inst_10384 = (state_10395[(2)]);
var _ = (function (){var statearr_10481 = state_10395;
(statearr_10481[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10481;
})();
var state_10395__$1 = (function (){var statearr_10482 = state_10395;
(statearr_10482[(18)] = inst_10384);

return statearr_10482;
})();
var statearr_10483_10625 = state_10395__$1;
(statearr_10483_10625[(2)] = true);

(statearr_10483_10625[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (23))){
var inst_10266 = (state_10395[(2)]);
var state_10395__$1 = (function (){var statearr_10484 = state_10395;
(statearr_10484[(19)] = inst_10266);

return statearr_10484;
})();
var statearr_10485_10626 = state_10395__$1;
(statearr_10485_10626[(2)] = null);

(statearr_10485_10626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (24))){
var _ = (function (){var statearr_10486 = state_10395;
(statearr_10486[(4)] = cljs.core.cons.call(null,(27),(state_10395[(4)])));

return statearr_10486;
})();
var inst_10278 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_10279 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"cycle needs to be in the past"];
var inst_10280 = cljs.core.PersistentHashMap.fromArrays(inst_10278,inst_10279);
var inst_10281 = cljs.test.do_report.call(null,inst_10280);
var ___$1 = (function (){var statearr_10487 = state_10395;
(statearr_10487[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10487;
})();
var state_10395__$1 = state_10395;
var statearr_10488_10627 = state_10395__$1;
(statearr_10488_10627[(2)] = inst_10281);

(statearr_10488_10627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (25))){
var inst_10284 = (state_10395[(2)]);
var _ = (function (){var statearr_10490 = state_10395;
(statearr_10490[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10490;
})();
var state_10395__$1 = state_10395;
var statearr_10491_10628 = state_10395__$1;
(statearr_10491_10628[(2)] = inst_10284);

(statearr_10491_10628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (26))){
var inst_10267 = (state_10395[(2)]);
var inst_10268 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_10269 = null;
var inst_10270 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"cycle needs to be in the past",inst_10269,inst_10267];
var inst_10271 = cljs.core.PersistentHashMap.fromArrays(inst_10268,inst_10270);
var inst_10272 = cljs.test.do_report.call(null,inst_10271);
var state_10395__$1 = state_10395;
var statearr_10492_10629 = state_10395__$1;
(statearr_10492_10629[(2)] = inst_10272);

(statearr_10492_10629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (27))){
var _ = (function (){var statearr_10493 = state_10395;
(statearr_10493[(4)] = cljs.core.rest.call(null,(state_10395[(4)])));

return statearr_10493;
})();
var state_10395__$1 = state_10395;
var ex10489 = (state_10395__$1[(2)]);
var statearr_10494_10630 = state_10395__$1;
(statearr_10494_10630[(5)] = ex10489);


var statearr_10495_10631 = state_10395__$1;
(statearr_10495_10631[(1)] = (26));

(statearr_10495_10631[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (28))){
var inst_10292 = (state_10395[(20)]);
var inst_10292__$1 = (state_10395[(2)]);
var inst_10293 = (inst_10292__$1 instanceof cljs.core.ExceptionInfo);
var inst_10294 = cljs.core.ex_data.call(null,inst_10292__$1);
var inst_10295 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_10294);
var inst_10296 = cljs.core._EQ_.call(null,inst_10295,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_10297 = ((inst_10293) && (inst_10296));
var state_10395__$1 = (function (){var statearr_10496 = state_10395;
(statearr_10496[(20)] = inst_10292__$1);

return statearr_10496;
})();
if(cljs.core.truth_(inst_10297)){
var statearr_10497_10632 = state_10395__$1;
(statearr_10497_10632[(1)] = (29));

} else {
var statearr_10498_10633 = state_10395__$1;
(statearr_10498_10633[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (29))){
var inst_10292 = (state_10395[(20)]);
var inst_10299 = (function(){throw inst_10292})();
var state_10395__$1 = state_10395;
var statearr_10499_10634 = state_10395__$1;
(statearr_10499_10634[(2)] = inst_10299);

(statearr_10499_10634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (30))){
var inst_10292 = (state_10395[(20)]);
var state_10395__$1 = state_10395;
var statearr_10500_10635 = state_10395__$1;
(statearr_10500_10635[(2)] = inst_10292);

(statearr_10500_10635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_10396 === (31))){
var inst_10302 = (state_10395[(2)]);
var inst_10303 = cljs.core.PersistentHashMap.EMPTY;
var inst_10304 = eos_cljs.core.transact.call(null,e2e.proposals.prop_acc,"cycleupdate",inst_10303);
var inst_10305 = cljs.core.async.interop.p__GT_c.call(null,inst_10304);
var state_10395__$1 = (function (){var statearr_10501 = state_10395;
(statearr_10501[(21)] = inst_10302);

return statearr_10501;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10395__$1,(32),inst_10305);
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
});})(c__19__auto___10573,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto___10573,___192__auto__){
return (function() {
var e2e$proposals$state_machine__15__auto__ = null;
var e2e$proposals$state_machine__15__auto____0 = (function (){
var statearr_10502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10502[(0)] = e2e$proposals$state_machine__15__auto__);

(statearr_10502[(1)] = (1));

return statearr_10502;
});
var e2e$proposals$state_machine__15__auto____1 = (function (state_10395){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_10395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e10503){var ex__18__auto__ = e10503;
var statearr_10504_10636 = state_10395;
(statearr_10504_10636[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_10395[(4)]))){
var statearr_10505_10637 = state_10395;
(statearr_10505_10637[(1)] = cljs.core.first.call(null,(state_10395[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__10638 = state_10395;
state_10395 = G__10638;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$proposals$state_machine__15__auto__ = function(state_10395){
switch(arguments.length){
case 0:
return e2e$proposals$state_machine__15__auto____0.call(this);
case 1:
return e2e$proposals$state_machine__15__auto____1.call(this,state_10395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$proposals$state_machine__15__auto____0;
e2e$proposals$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$proposals$state_machine__15__auto____1;
return e2e$proposals$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto___10573,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_10506 = f__20__auto__.call(null);
(statearr_10506[(6)] = c__19__auto___10573);

return statearr_10506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto___10573,___192__auto__))
);


return done.call(null);
});

e2e.proposals.t_e2e$proposals9887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9888","meta9888",(1523104831),null)], null);
});

e2e.proposals.t_e2e$proposals9887.cljs$lang$type = true;

e2e.proposals.t_e2e$proposals9887.cljs$lang$ctorStr = "e2e.proposals/t_e2e$proposals9887";

e2e.proposals.t_e2e$proposals9887.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.proposals/t_e2e$proposals9887");
});

/**
 * Positional factory function for e2e.proposals/t_e2e$proposals9887.
 */
e2e.proposals.__GT_t_e2e$proposals9887 = (function e2e$proposals$__GT_t_e2e$proposals9887(meta9888){
return (new e2e.proposals.t_e2e$proposals9887(meta9888));
});

}

return (new e2e.proposals.t_e2e$proposals9887(null));
});

e2e.proposals.process_cycle.cljs$lang$var = new cljs.core.Var(function(){return e2e.proposals.process_cycle;},new cljs.core.Symbol("e2e.proposals","process-cycle","e2e.proposals/process-cycle",(-929717381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"process-cycle","process-cycle",(-1514138028),null),"e2e/proposals.cljs",(23),(1),(259),(259),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.process_cycle)?e2e.proposals.process_cycle.cljs$lang$test:null)]));
e2e.proposals._main = (function e2e$proposals$_main(var_args){
var args__10338__auto__ = [];
var len__10335__auto___10642 = arguments.length;
var i__10336__auto___10643 = (0);
while(true){
if((i__10336__auto___10643 < len__10335__auto___10642)){
args__10338__auto__.push((arguments[i__10336__auto___10643]));

var G__10644 = (i__10336__auto___10643 + (1));
i__10336__auto___10643 = G__10644;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.proposals._main.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.proposals._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.test.run_block.call(null,(function (){var env10640 = cljs.test.empty_env.call(null);
var summary10641 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10640,summary10641){
return (function (){
cljs.test.set_env_BANG_.call(null,env10640);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env10640,summary10641){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),e2e.proposals.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env10640,summary10641))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.proposals.init;},new cljs.core.Symbol("e2e.proposals","init","e2e.proposals/init",(-458618888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/proposals.cljs",(14),(1),(60),(60),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.init)?e2e.proposals.init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.proposal_payment;},new cljs.core.Symbol("e2e.proposals","proposal-payment","e2e.proposals/proposal-payment",(-924459697),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"proposal-payment","proposal-payment",(-65968046),null),"e2e/proposals.cljs",(26),(1),(87),(87),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.proposal_payment)?e2e.proposals.proposal_payment.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.new_proposal;},new cljs.core.Symbol("e2e.proposals","new-proposal","e2e.proposals/new-proposal",(-713004459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"new-proposal","new-proposal",(-1057710210),null),"e2e/proposals.cljs",(22),(1),(113),(113),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.new_proposal)?e2e.proposals.new_proposal.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.update_proposal;},new cljs.core.Symbol("e2e.proposals","update-proposal","e2e.proposals/update-proposal",(-1251182518),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"update-proposal","update-proposal",(-1609555119),null),"e2e/proposals.cljs",(25),(1),(142),(142),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.update_proposal)?e2e.proposals.update_proposal.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.cycle_add;},new cljs.core.Symbol("e2e.proposals","cycle-add","e2e.proposals/cycle-add",(1399694237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-add","cycle-add",(1071188336),null),"e2e/proposals.cljs",(19),(1),(156),(156),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_add)?e2e.proposals.cycle_add.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.cycle_update;},new cljs.core.Symbol("e2e.proposals","cycle-update","e2e.proposals/cycle-update",(1535968581),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"cycle-update","cycle-update",(-1460045646),null),"e2e/proposals.cljs",(22),(1),(187),(187),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.cycle_update)?e2e.proposals.cycle_update.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.vote;},new cljs.core.Symbol("e2e.proposals","vote","e2e.proposals/vote",(-517647785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"vote","vote",(-839798934),null),"e2e/proposals.cljs",(14),(1),(213),(213),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.vote)?e2e.proposals.vote.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.proposals.process_cycle;},new cljs.core.Symbol("e2e.proposals","process-cycle","e2e.proposals/process-cycle",(-929717381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null),new cljs.core.Symbol(null,"process-cycle","process-cycle",(-1514138028),null),"e2e/proposals.cljs",(23),(1),(259),(259),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.proposals.process_cycle)?e2e.proposals.process_cycle.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env10640,summary10641){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env10640,summary10641))
], null));
})());
});})(env10640,summary10641))
,((function (env10640,summary10641){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.proposals","e2e.proposals",(1479174227),null)], null));
});})(env10640,summary10641))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10640,summary10641){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary10641,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10641),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env10640,summary10641))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10640,summary10641){
return (function (){
cljs.test.set_env_BANG_.call(null,env10640);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10641));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10641),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env10640,summary10641))
], null));
})());
});

e2e.proposals._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.proposals._main.cljs$lang$applyTo = (function (seq10639){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10639));
});

