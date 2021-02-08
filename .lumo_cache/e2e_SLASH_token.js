goog.provide("e2e.token");
e2e.token.owner_acc = "eosio";
e2e.token.account = eos_cljs.core.random_account.call(null,"efx");
e2e.token.sym = "EFX";
e2e.token.total_amount = "650000000.0000";
e2e.token.total_supply = [e2e.token.total_amount," ",e2e.token.sym].join('');
/**
 * Deploy a token account and issue tokens to `issues`
 */
e2e.token.deploy_token = (function e2e$token$deploy_token(var_args){
var G__3003 = arguments.length;
switch (G__3003) {
case (1):
return e2e.token.deploy_token.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return e2e.token.deploy_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

e2e.token.deploy_token.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return e2e.token.deploy_token.call(null,acc,cljs.core.PersistentVector.EMPTY);
});

e2e.token.deploy_token.cljs$core$IFn$_invoke$arity$2 = (function (acc,issues){
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__){
return (function (state_3171){
var state_val_3172 = (state_3171[(1)]);
if((state_val_3172 === (32))){
var inst_3112 = (state_3171[(7)]);
var inst_3135 = (state_3171[(2)]);
var inst_3136 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_3137 = [inst_3112,"1000000.0000 NFX",""];
var inst_3138 = cljs.core.PersistentHashMap.fromArrays(inst_3136,inst_3137);
var inst_3139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3140 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3141 = [acc,"active"];
var inst_3142 = cljs.core.PersistentHashMap.fromArrays(inst_3140,inst_3141);
var inst_3143 = [inst_3142];
var inst_3144 = (new cljs.core.PersistentVector(null,(1),(5),inst_3139,inst_3143,null));
var inst_3145 = eos_cljs.core.transact.call(null,acc,"issue",inst_3138,inst_3144);
var inst_3146 = cljs.core.async.interop.p__GT_c.call(null,inst_3145);
var state_3171__$1 = (function (){var statearr_3173 = state_3171;
(statearr_3173[(8)] = inst_3135);

return statearr_3173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(33),inst_3146);
} else {
if((state_val_3172 === (1))){
var inst_3004 = eos_cljs.core.create_account.call(null,e2e.token.owner_acc,acc);
var inst_3005 = cljs.core.async.interop.p__GT_c.call(null,inst_3004);
var state_3171__$1 = state_3171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(2),inst_3005);
} else {
if((state_val_3172 === (33))){
var inst_3148 = (state_3171[(9)]);
var inst_3148__$1 = (state_3171[(2)]);
var inst_3149 = (inst_3148__$1 instanceof cljs.core.ExceptionInfo);
var inst_3150 = cljs.core.ex_data.call(null,inst_3148__$1);
var inst_3151 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3150);
var inst_3152 = cljs.core._EQ_.call(null,inst_3151,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3153 = ((inst_3149) && (inst_3152));
var state_3171__$1 = (function (){var statearr_3174 = state_3171;
(statearr_3174[(9)] = inst_3148__$1);

return statearr_3174;
})();
if(cljs.core.truth_(inst_3153)){
var statearr_3175_3236 = state_3171__$1;
(statearr_3175_3236[(1)] = (34));

} else {
var statearr_3176_3237 = state_3171__$1;
(statearr_3176_3237[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (2))){
var inst_3007 = (state_3171[(10)]);
var inst_3007__$1 = (state_3171[(2)]);
var inst_3008 = (inst_3007__$1 instanceof cljs.core.ExceptionInfo);
var inst_3009 = cljs.core.ex_data.call(null,inst_3007__$1);
var inst_3010 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3009);
var inst_3011 = cljs.core._EQ_.call(null,inst_3010,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3012 = ((inst_3008) && (inst_3011));
var state_3171__$1 = (function (){var statearr_3177 = state_3171;
(statearr_3177[(10)] = inst_3007__$1);

return statearr_3177;
})();
if(cljs.core.truth_(inst_3012)){
var statearr_3178_3238 = state_3171__$1;
(statearr_3178_3238[(1)] = (3));

} else {
var statearr_3179_3239 = state_3171__$1;
(statearr_3179_3239[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (34))){
var inst_3148 = (state_3171[(9)]);
var inst_3155 = (function(){throw inst_3148})();
var state_3171__$1 = state_3171;
var statearr_3180_3240 = state_3171__$1;
(statearr_3180_3240[(2)] = inst_3155);

(statearr_3180_3240[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (3))){
var inst_3007 = (state_3171[(10)]);
var inst_3014 = (function(){throw inst_3007})();
var state_3171__$1 = state_3171;
var statearr_3181_3241 = state_3171__$1;
(statearr_3181_3241[(2)] = inst_3014);

(statearr_3181_3241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (35))){
var inst_3148 = (state_3171[(9)]);
var state_3171__$1 = state_3171;
var statearr_3182_3242 = state_3171__$1;
(statearr_3182_3242[(2)] = inst_3148);

(statearr_3182_3242[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (4))){
var inst_3007 = (state_3171[(10)]);
var state_3171__$1 = state_3171;
var statearr_3183_3243 = state_3171__$1;
(statearr_3183_3243[(2)] = inst_3007);

(statearr_3183_3243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (36))){
var inst_3103 = (state_3171[(11)]);
var inst_3158 = (state_3171[(2)]);
var inst_3159 = cljs.core.next.call(null,inst_3103);
var inst_3045 = inst_3159;
var inst_3046 = null;
var inst_3047 = (0);
var inst_3048 = (0);
var state_3171__$1 = (function (){var statearr_3184 = state_3171;
(statearr_3184[(12)] = inst_3158);

(statearr_3184[(15)] = inst_3045);

(statearr_3184[(16)] = inst_3046);

(statearr_3184[(17)] = inst_3047);

(statearr_3184[(18)] = inst_3048);

return statearr_3184;
})();
var statearr_3185_3244 = state_3171__$1;
(statearr_3185_3244[(2)] = null);

(statearr_3185_3244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (5))){
var inst_3017 = (state_3171[(2)]);
var inst_3018 = eos_cljs.core.deploy.call(null,acc,"contracts/effect-token/effect-token");
var inst_3019 = cljs.core.async.interop.p__GT_c.call(null,inst_3018);
var state_3171__$1 = (function (){var statearr_3186 = state_3171;
(statearr_3186[(13)] = inst_3017);

return statearr_3186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(6),inst_3019);
} else {
if((state_val_3172 === (6))){
var inst_3021 = (state_3171[(14)]);
var inst_3021__$1 = (state_3171[(2)]);
var inst_3022 = (inst_3021__$1 instanceof cljs.core.ExceptionInfo);
var inst_3023 = cljs.core.ex_data.call(null,inst_3021__$1);
var inst_3024 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3023);
var inst_3025 = cljs.core._EQ_.call(null,inst_3024,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3026 = ((inst_3022) && (inst_3025));
var state_3171__$1 = (function (){var statearr_3187 = state_3171;
(statearr_3187[(14)] = inst_3021__$1);

return statearr_3187;
})();
if(cljs.core.truth_(inst_3026)){
var statearr_3188_3245 = state_3171__$1;
(statearr_3188_3245[(1)] = (7));

} else {
var statearr_3189_3246 = state_3171__$1;
(statearr_3189_3246[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (7))){
var inst_3021 = (state_3171[(14)]);
var inst_3028 = (function(){throw inst_3021})();
var state_3171__$1 = state_3171;
var statearr_3190_3247 = state_3171__$1;
(statearr_3190_3247[(2)] = inst_3028);

(statearr_3190_3247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (8))){
var inst_3021 = (state_3171[(14)]);
var state_3171__$1 = state_3171;
var statearr_3191_3248 = state_3171__$1;
(statearr_3191_3248[(2)] = inst_3021);

(statearr_3191_3248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (9))){
var inst_3031 = (state_3171[(2)]);
var inst_3032 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_3033 = [acc,e2e.token.total_supply];
var inst_3034 = cljs.core.PersistentHashMap.fromArrays(inst_3032,inst_3033);
var inst_3035 = eos_cljs.core.transact.call(null,acc,"create",inst_3034);
var inst_3036 = [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454))];
var inst_3037 = [acc,"120000000.0000 NFX"];
var inst_3038 = cljs.core.PersistentHashMap.fromArrays(inst_3036,inst_3037);
var inst_3039 = eos_cljs.core.transact.call(null,acc,"create",inst_3038);
var inst_3044 = cljs.core.seq.call(null,issues);
var inst_3045 = inst_3044;
var inst_3046 = null;
var inst_3047 = (0);
var inst_3048 = (0);
var state_3171__$1 = (function (){var statearr_3192 = state_3171;
(statearr_3192[(19)] = inst_3031);

(statearr_3192[(20)] = inst_3035);

(statearr_3192[(21)] = inst_3039);

(statearr_3192[(15)] = inst_3045);

(statearr_3192[(16)] = inst_3046);

(statearr_3192[(17)] = inst_3047);

(statearr_3192[(18)] = inst_3048);

return statearr_3192;
})();
var statearr_3193_3249 = state_3171__$1;
(statearr_3193_3249[(2)] = null);

(statearr_3193_3249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (10))){
var inst_3048 = (state_3171[(18)]);
var inst_3047 = (state_3171[(17)]);
var inst_3050 = (inst_3048 < inst_3047);
var inst_3051 = inst_3050;
var state_3171__$1 = state_3171;
if(cljs.core.truth_(inst_3051)){
var statearr_3194_3250 = state_3171__$1;
(statearr_3194_3250[(1)] = (12));

} else {
var statearr_3195_3251 = state_3171__$1;
(statearr_3195_3251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (11))){
var inst_3169 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3171__$1,inst_3169);
} else {
if((state_val_3172 === (12))){
var inst_3046 = (state_3171[(16)]);
var inst_3048 = (state_3171[(18)]);
var inst_3053 = (state_3171[(22)]);
var inst_3053__$1 = cljs.core._nth.call(null,inst_3046,inst_3048);
var inst_3054 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_3055 = [inst_3053__$1,"300000000.0000 EFX",""];
var inst_3056 = cljs.core.PersistentHashMap.fromArrays(inst_3054,inst_3055);
var inst_3057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3058 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3059 = [acc,"active"];
var inst_3060 = cljs.core.PersistentHashMap.fromArrays(inst_3058,inst_3059);
var inst_3061 = [inst_3060];
var inst_3062 = (new cljs.core.PersistentVector(null,(1),(5),inst_3057,inst_3061,null));
var inst_3063 = eos_cljs.core.transact.call(null,acc,"issue",inst_3056,inst_3062);
var inst_3064 = cljs.core.async.interop.p__GT_c.call(null,inst_3063);
var state_3171__$1 = (function (){var statearr_3196 = state_3171;
(statearr_3196[(22)] = inst_3053__$1);

return statearr_3196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(15),inst_3064);
} else {
if((state_val_3172 === (13))){
var inst_3045 = (state_3171[(15)]);
var inst_3103 = (state_3171[(11)]);
var inst_3103__$1 = cljs.core.seq.call(null,inst_3045);
var state_3171__$1 = (function (){var statearr_3197 = state_3171;
(statearr_3197[(11)] = inst_3103__$1);

return statearr_3197;
})();
if(inst_3103__$1){
var statearr_3198_3252 = state_3171__$1;
(statearr_3198_3252[(1)] = (23));

} else {
var statearr_3199_3253 = state_3171__$1;
(statearr_3199_3253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (14))){
var inst_3167 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
var statearr_3200_3254 = state_3171__$1;
(statearr_3200_3254[(2)] = inst_3167);

(statearr_3200_3254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (15))){
var inst_3066 = (state_3171[(23)]);
var inst_3066__$1 = (state_3171[(2)]);
var inst_3067 = (inst_3066__$1 instanceof cljs.core.ExceptionInfo);
var inst_3068 = cljs.core.ex_data.call(null,inst_3066__$1);
var inst_3069 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3068);
var inst_3070 = cljs.core._EQ_.call(null,inst_3069,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3071 = ((inst_3067) && (inst_3070));
var state_3171__$1 = (function (){var statearr_3201 = state_3171;
(statearr_3201[(23)] = inst_3066__$1);

return statearr_3201;
})();
if(cljs.core.truth_(inst_3071)){
var statearr_3202_3255 = state_3171__$1;
(statearr_3202_3255[(1)] = (16));

} else {
var statearr_3203_3256 = state_3171__$1;
(statearr_3203_3256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (16))){
var inst_3066 = (state_3171[(23)]);
var inst_3073 = (function(){throw inst_3066})();
var state_3171__$1 = state_3171;
var statearr_3204_3257 = state_3171__$1;
(statearr_3204_3257[(2)] = inst_3073);

(statearr_3204_3257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (17))){
var inst_3066 = (state_3171[(23)]);
var state_3171__$1 = state_3171;
var statearr_3205_3258 = state_3171__$1;
(statearr_3205_3258[(2)] = inst_3066);

(statearr_3205_3258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (18))){
var inst_3053 = (state_3171[(22)]);
var inst_3076 = (state_3171[(2)]);
var inst_3077 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_3078 = [inst_3053,"1000000.0000 NFX",""];
var inst_3079 = cljs.core.PersistentHashMap.fromArrays(inst_3077,inst_3078);
var inst_3080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3081 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3082 = [acc,"active"];
var inst_3083 = cljs.core.PersistentHashMap.fromArrays(inst_3081,inst_3082);
var inst_3084 = [inst_3083];
var inst_3085 = (new cljs.core.PersistentVector(null,(1),(5),inst_3080,inst_3084,null));
var inst_3086 = eos_cljs.core.transact.call(null,acc,"issue",inst_3079,inst_3085);
var inst_3087 = cljs.core.async.interop.p__GT_c.call(null,inst_3086);
var state_3171__$1 = (function (){var statearr_3206 = state_3171;
(statearr_3206[(24)] = inst_3076);

return statearr_3206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(19),inst_3087);
} else {
if((state_val_3172 === (19))){
var inst_3089 = (state_3171[(25)]);
var inst_3089__$1 = (state_3171[(2)]);
var inst_3090 = (inst_3089__$1 instanceof cljs.core.ExceptionInfo);
var inst_3091 = cljs.core.ex_data.call(null,inst_3089__$1);
var inst_3092 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3091);
var inst_3093 = cljs.core._EQ_.call(null,inst_3092,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3094 = ((inst_3090) && (inst_3093));
var state_3171__$1 = (function (){var statearr_3207 = state_3171;
(statearr_3207[(25)] = inst_3089__$1);

return statearr_3207;
})();
if(cljs.core.truth_(inst_3094)){
var statearr_3208_3259 = state_3171__$1;
(statearr_3208_3259[(1)] = (20));

} else {
var statearr_3209_3260 = state_3171__$1;
(statearr_3209_3260[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (20))){
var inst_3089 = (state_3171[(25)]);
var inst_3096 = (function(){throw inst_3089})();
var state_3171__$1 = state_3171;
var statearr_3213_3261 = state_3171__$1;
(statearr_3213_3261[(2)] = inst_3096);

(statearr_3213_3261[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (21))){
var inst_3089 = (state_3171[(25)]);
var state_3171__$1 = state_3171;
var statearr_3214_3262 = state_3171__$1;
(statearr_3214_3262[(2)] = inst_3089);

(statearr_3214_3262[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (22))){
var inst_3048 = (state_3171[(18)]);
var inst_3045 = (state_3171[(15)]);
var inst_3046 = (state_3171[(16)]);
var inst_3047 = (state_3171[(17)]);
var inst_3099 = (state_3171[(2)]);
var inst_3100 = (inst_3048 + (1));
var tmp3210 = inst_3045;
var tmp3211 = inst_3046;
var tmp3212 = inst_3047;
var inst_3045__$1 = tmp3210;
var inst_3046__$1 = tmp3211;
var inst_3047__$1 = tmp3212;
var inst_3048__$1 = inst_3100;
var state_3171__$1 = (function (){var statearr_3215 = state_3171;
(statearr_3215[(26)] = inst_3099);

(statearr_3215[(15)] = inst_3045__$1);

(statearr_3215[(16)] = inst_3046__$1);

(statearr_3215[(17)] = inst_3047__$1);

(statearr_3215[(18)] = inst_3048__$1);

return statearr_3215;
})();
var statearr_3216_3263 = state_3171__$1;
(statearr_3216_3263[(2)] = null);

(statearr_3216_3263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (23))){
var inst_3103 = (state_3171[(11)]);
var inst_3105 = cljs.core.chunked_seq_QMARK_.call(null,inst_3103);
var state_3171__$1 = state_3171;
if(inst_3105){
var statearr_3217_3264 = state_3171__$1;
(statearr_3217_3264[(1)] = (26));

} else {
var statearr_3218_3265 = state_3171__$1;
(statearr_3218_3265[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (24))){
var state_3171__$1 = state_3171;
var statearr_3219_3266 = state_3171__$1;
(statearr_3219_3266[(2)] = null);

(statearr_3219_3266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (25))){
var inst_3165 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
var statearr_3220_3267 = state_3171__$1;
(statearr_3220_3267[(2)] = inst_3165);

(statearr_3220_3267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (26))){
var inst_3103 = (state_3171[(11)]);
var inst_3107 = cljs.core.chunk_first.call(null,inst_3103);
var inst_3108 = cljs.core.chunk_rest.call(null,inst_3103);
var inst_3109 = cljs.core.count.call(null,inst_3107);
var inst_3045 = inst_3108;
var inst_3046 = inst_3107;
var inst_3047 = inst_3109;
var inst_3048 = (0);
var state_3171__$1 = (function (){var statearr_3221 = state_3171;
(statearr_3221[(15)] = inst_3045);

(statearr_3221[(16)] = inst_3046);

(statearr_3221[(17)] = inst_3047);

(statearr_3221[(18)] = inst_3048);

return statearr_3221;
})();
var statearr_3222_3268 = state_3171__$1;
(statearr_3222_3268[(2)] = null);

(statearr_3222_3268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (27))){
var inst_3103 = (state_3171[(11)]);
var inst_3112 = (state_3171[(7)]);
var inst_3112__$1 = cljs.core.first.call(null,inst_3103);
var inst_3113 = [new cljs.core.Keyword(null,"to","to",(192099007)),new cljs.core.Keyword(null,"quantity","quantity",(-1929050694)),new cljs.core.Keyword(null,"memo","memo",(-1928616099))];
var inst_3114 = [inst_3112__$1,"300000000.0000 EFX",""];
var inst_3115 = cljs.core.PersistentHashMap.fromArrays(inst_3113,inst_3114);
var inst_3116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3117 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3118 = [acc,"active"];
var inst_3119 = cljs.core.PersistentHashMap.fromArrays(inst_3117,inst_3118);
var inst_3120 = [inst_3119];
var inst_3121 = (new cljs.core.PersistentVector(null,(1),(5),inst_3116,inst_3120,null));
var inst_3122 = eos_cljs.core.transact.call(null,acc,"issue",inst_3115,inst_3121);
var inst_3123 = cljs.core.async.interop.p__GT_c.call(null,inst_3122);
var state_3171__$1 = (function (){var statearr_3223 = state_3171;
(statearr_3223[(7)] = inst_3112__$1);

return statearr_3223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3171__$1,(29),inst_3123);
} else {
if((state_val_3172 === (28))){
var inst_3162 = (state_3171[(2)]);
var state_3171__$1 = state_3171;
var statearr_3224_3269 = state_3171__$1;
(statearr_3224_3269[(2)] = inst_3162);

(statearr_3224_3269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (29))){
var inst_3125 = (state_3171[(27)]);
var inst_3125__$1 = (state_3171[(2)]);
var inst_3126 = (inst_3125__$1 instanceof cljs.core.ExceptionInfo);
var inst_3127 = cljs.core.ex_data.call(null,inst_3125__$1);
var inst_3128 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3127);
var inst_3129 = cljs.core._EQ_.call(null,inst_3128,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3130 = ((inst_3126) && (inst_3129));
var state_3171__$1 = (function (){var statearr_3225 = state_3171;
(statearr_3225[(27)] = inst_3125__$1);

return statearr_3225;
})();
if(cljs.core.truth_(inst_3130)){
var statearr_3226_3270 = state_3171__$1;
(statearr_3226_3270[(1)] = (30));

} else {
var statearr_3227_3271 = state_3171__$1;
(statearr_3227_3271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (30))){
var inst_3125 = (state_3171[(27)]);
var inst_3132 = (function(){throw inst_3125})();
var state_3171__$1 = state_3171;
var statearr_3228_3272 = state_3171__$1;
(statearr_3228_3272[(2)] = inst_3132);

(statearr_3228_3272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3172 === (31))){
var inst_3125 = (state_3171[(27)]);
var state_3171__$1 = state_3171;
var statearr_3229_3273 = state_3171__$1;
(statearr_3229_3273[(2)] = inst_3125);

(statearr_3229_3273[(1)] = (32));


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
});})(c__19__auto__))
;
return ((function (switch__14__auto__,c__19__auto__){
return (function() {
var e2e$token$state_machine__15__auto__ = null;
var e2e$token$state_machine__15__auto____0 = (function (){
var statearr_3230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3230[(0)] = e2e$token$state_machine__15__auto__);

(statearr_3230[(1)] = (1));

return statearr_3230;
});
var e2e$token$state_machine__15__auto____1 = (function (state_3171){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3231){var ex__18__auto__ = e3231;
var statearr_3232_3274 = state_3171;
(statearr_3232_3274[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3171[(4)]))){
var statearr_3233_3275 = state_3171;
(statearr_3233_3275[(1)] = cljs.core.first.call(null,(state_3171[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3276 = state_3171;
state_3171 = G__3276;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$token$state_machine__15__auto__ = function(state_3171){
switch(arguments.length){
case 0:
return e2e$token$state_machine__15__auto____0.call(this);
case 1:
return e2e$token$state_machine__15__auto____1.call(this,state_3171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$token$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$token$state_machine__15__auto____0;
e2e$token$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$token$state_machine__15__auto____1;
return e2e$token$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__))
})();
var state__21__auto__ = (function (){var statearr_3234 = f__20__auto__.call(null);
(statearr_3234[(6)] = c__19__auto__);

return statearr_3234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__))
);

return c__19__auto__;
});

e2e.token.deploy_token.cljs$lang$maxFixedArity = (2);

e2e.token.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.token !== 'undefined') && (typeof e2e.token.t_e2e$token3277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.token.t_e2e$token3277 = (function (meta3278){
this.meta3278 = meta3278;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.token.t_e2e$token3277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3279,meta3278__$1){
var self__ = this;
var _3279__$1 = this;
return (new e2e.token.t_e2e$token3277(meta3278__$1));
});

e2e.token.t_e2e$token3277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3279){
var self__ = this;
var _3279__$1 = this;
return self__.meta3278;
});

e2e.token.t_e2e$token3277.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.token.t_e2e$token3277.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return eos_cljs.core.wait_block.call(null,eos_cljs.core.create_account.call(null,e2e.token.owner_acc,e2e.token.account).then(((function (___192__auto__,self____$1){
return (function (){
return cljs.core.println.call(null,["> Created TOKEN account ",e2e.token.account].join(''));
});})(___192__auto__,self____$1))
)).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.deploy.call(null,e2e.token.account,"contracts/effect-token/effect-token");
});})(___192__auto__,self____$1))
).then(done);
});

e2e.token.t_e2e$token3277.prototype.apply = (function (self__,args3280){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3280)));
});

e2e.token.t_e2e$token3277.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return eos_cljs.core.wait_block.call(null,eos_cljs.core.create_account.call(null,e2e.token.owner_acc,e2e.token.account).then(((function (___192__auto__){
return (function (){
return cljs.core.println.call(null,["> Created TOKEN account ",e2e.token.account].join(''));
});})(___192__auto__))
)).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.deploy.call(null,e2e.token.account,"contracts/effect-token/effect-token");
});})(___192__auto__))
).then(done);
});

e2e.token.t_e2e$token3277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3278","meta3278",(-1926467653),null)], null);
});

e2e.token.t_e2e$token3277.cljs$lang$type = true;

e2e.token.t_e2e$token3277.cljs$lang$ctorStr = "e2e.token/t_e2e$token3277";

e2e.token.t_e2e$token3277.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.token/t_e2e$token3277");
});

/**
 * Positional factory function for e2e.token/t_e2e$token3277.
 */
e2e.token.__GT_t_e2e$token3277 = (function e2e$token$__GT_t_e2e$token3277(meta3278){
return (new e2e.token.t_e2e$token3277(meta3278));
});

}

return (new e2e.token.t_e2e$token3277(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.token.create_token = (function e2e$token$create_token(){
return cljs.test.test_var.call(null,e2e.token.create_token.cljs$lang$var);
});
e2e.token.create_token.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.token !== 'undefined') && (typeof e2e.token.t_e2e$token3281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.token.t_e2e$token3281 = (function (meta3282){
this.meta3282 = meta3282;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.token.t_e2e$token3281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3283,meta3282__$1){
var self__ = this;
var _3283__$1 = this;
return (new e2e.token.t_e2e$token3281(meta3282__$1));
});

e2e.token.t_e2e$token3281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3283){
var self__ = this;
var _3283__$1 = this;
return self__.meta3282;
});

e2e.token.t_e2e$token3281.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.token.t_e2e$token3281.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
return eos_cljs.core.wait_block.call(null,eos_cljs.core.transact.call(null,e2e.token.account,"create",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.token.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),e2e.token.total_supply], null)).catch(cljs.core.prn)).then(((function (___192__auto__,self____$1){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.token.account,e2e.token.sym,"stat");
});})(___192__auto__,self____$1))
).then(((function (___192__auto__,self____$1){
return (function (p1__35_SHARP_){
var map__3285 = cljs.core.first.call(null,p1__35_SHARP_);
var map__3285__$1 = (((((!((map__3285 == null))))?(((((map__3285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3285):map__3285);
var max_supply = cljs.core.get.call(null,map__3285__$1,"max_supply");
var issuer = cljs.core.get.call(null,map__3285__$1,"issuer");
var supply = cljs.core.get.call(null,map__3285__$1,"supply");
try{var values__182__auto___3295 = (new cljs.core.List(null,max_supply,(new cljs.core.List(null,e2e.token.total_supply,null,(1),null)),(2),null));
var result__183__auto___3296 = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto___3295);
if(cljs.core.truth_(result__183__auto___3296)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto___3295)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto___3295),null,(1),null)),(2),null))], null));
}

}catch (e3287){var t__191__auto___3297 = e3287;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___3297], null));
}
try{var values__182__auto___3298 = (new cljs.core.List(null,issuer,(new cljs.core.List(null,e2e.token.owner_acc,null,(1),null)),(2),null));
var result__183__auto___3299 = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto___3298);
if(cljs.core.truth_(result__183__auto___3299)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto___3298)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto___3298),null,(1),null)),(2),null))], null));
}

}catch (e3288){var t__191__auto___3300 = e3288;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___3300], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,supply,(new cljs.core.List(null,["0.0000 ",e2e.token.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e3289){var t__191__auto__ = e3289;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__,self____$1))
).then(done);
});

e2e.token.t_e2e$token3281.prototype.apply = (function (self__,args3284){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3284)));
});

e2e.token.t_e2e$token3281.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
return eos_cljs.core.wait_block.call(null,eos_cljs.core.transact.call(null,e2e.token.account,"create",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"issuer","issuer",(-1199257898)),e2e.token.owner_acc,new cljs.core.Keyword(null,"maximum_supply","maximum_supply",(-479767454)),e2e.token.total_supply], null)).catch(cljs.core.prn)).then(((function (___192__auto__){
return (function (){
return eos_cljs.core.get_table_rows.call(null,e2e.token.account,e2e.token.sym,"stat");
});})(___192__auto__))
).then(((function (___192__auto__){
return (function (p1__35_SHARP_){
var map__3290 = cljs.core.first.call(null,p1__35_SHARP_);
var map__3290__$1 = (((((!((map__3290 == null))))?(((((map__3290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3290):map__3290);
var max_supply = cljs.core.get.call(null,map__3290__$1,"max_supply");
var issuer = cljs.core.get.call(null,map__3290__$1,"issuer");
var supply = cljs.core.get.call(null,map__3290__$1,"supply");
try{var values__182__auto___3301 = (new cljs.core.List(null,max_supply,(new cljs.core.List(null,e2e.token.total_supply,null,(1),null)),(2),null));
var result__183__auto___3302 = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto___3301);
if(cljs.core.truth_(result__183__auto___3302)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto___3301)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto___3301),null,(1),null)),(2),null))], null));
}

}catch (e3292){var t__191__auto___3303 = e3292;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"max-supply","max-supply",(-1515303858),null),new cljs.core.Symbol(null,"total-supply","total-supply",(-1206797190),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___3303], null));
}
try{var values__182__auto___3304 = (new cljs.core.List(null,issuer,(new cljs.core.List(null,e2e.token.owner_acc,null,(1),null)),(2),null));
var result__183__auto___3305 = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto___3304);
if(cljs.core.truth_(result__183__auto___3305)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto___3304)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto___3304),null,(1),null)),(2),null))], null));
}

}catch (e3293){var t__191__auto___3306 = e3293;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"issuer","issuer",(441273629),null),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null)),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto___3306], null));
}
try{var values__182__auto__ = (new cljs.core.List(null,supply,(new cljs.core.List(null,["0.0000 ",e2e.token.sym].join(''),null,(1),null)),(2),null));
var result__183__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__182__auto__);
if(cljs.core.truth_(result__183__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"pass","pass",(1574159993)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),cljs.core.cons.call(null,cljs.core._EQ_,values__182__auto__)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",(1044554643),null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",(-1501502141),null),values__182__auto__),null,(1),null)),(2),null))], null));
}

return result__183__auto__;
}catch (e3294){var t__191__auto__ = e3294;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"error","error",(-978969032)),new cljs.core.Keyword(null,"message","message",(-406056002)),null,new cljs.core.Keyword(null,"expected","expected",(1583670997)),cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"supply","supply",(-61164782),null),cljs.core.list(new cljs.core.Symbol(null,"str","str",(-1564826950),null),"0.0000 ",new cljs.core.Symbol(null,"sym","sym",(195671222),null))),new cljs.core.Keyword(null,"actual","actual",(107306363)),t__191__auto__], null));
}});})(___192__auto__))
).then(done);
});

e2e.token.t_e2e$token3281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3282","meta3282",(-71864758),null)], null);
});

e2e.token.t_e2e$token3281.cljs$lang$type = true;

e2e.token.t_e2e$token3281.cljs$lang$ctorStr = "e2e.token/t_e2e$token3281";

e2e.token.t_e2e$token3281.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.token/t_e2e$token3281");
});

/**
 * Positional factory function for e2e.token/t_e2e$token3281.
 */
e2e.token.__GT_t_e2e$token3281 = (function e2e$token$__GT_t_e2e$token3281(meta3282){
return (new e2e.token.t_e2e$token3281(meta3282));
});

}

return (new e2e.token.t_e2e$token3281(null));
});

e2e.token.create_token.cljs$lang$var = new cljs.core.Var(function(){return e2e.token.create_token;},new cljs.core.Symbol("e2e.token","create-token","e2e.token/create-token",(6445824),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.token","e2e.token",(-1654029281),null),new cljs.core.Symbol(null,"create-token","create-token",(76531043),null),"e2e/token.cljs",(22),(1),(45),(45),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.token.create_token)?e2e.token.create_token.cljs$lang$test:null)]));
e2e.token._main = (function e2e$token$_main(){
return cljs.test.run_block.call(null,(function (){var env3307 = cljs.test.empty_env.call(null);
var summary3308 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3307,summary3308){
return (function (){
cljs.test.set_env_BANG_.call(null,env3307);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.token","e2e.token",(-1654029281),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env3307,summary3308){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.token","e2e.token",(-1654029281),null),e2e.token.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env3307,summary3308))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.token.create_token;},new cljs.core.Symbol("e2e.token","create-token","e2e.token/create-token",(6445824),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.token","e2e.token",(-1654029281),null),new cljs.core.Symbol(null,"create-token","create-token",(76531043),null),"e2e/token.cljs",(22),(1),(45),(45),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.token.create_token)?e2e.token.create_token.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env3307,summary3308){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env3307,summary3308))
], null));
})());
});})(env3307,summary3308))
,((function (env3307,summary3308){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.token","e2e.token",(-1654029281),null)], null));
});})(env3307,summary3308))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3307,summary3308){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary3308,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary3308),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env3307,summary3308))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env3307,summary3308){
return (function (){
cljs.test.set_env_BANG_.call(null,env3307);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary3308));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary3308),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env3307,summary3308))
], null));
})());
});
