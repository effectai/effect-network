goog.provide("e2e.dao");
e2e.dao.owner_acc = e2e.token.owner_acc;
e2e.dao.dao_acc = eos_cljs.core.random_account.call(null,"dao");
cljs.core.println.call(null,"dao acc = ",e2e.dao.dao_acc);
e2e.dao.terms = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"1e1fe1b13e6e43d8f9cb3263817b24d7dcf8070a8fcaba3e8ced94ea263dd450"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"09de7554ad8e52ce863d60ab5bb60fa60d9401a8ac78d412c6060cb992465fd7"], null)], null);
e2e.dao.dao_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stake_contract","stake_contract",(150036370)),e2e.dao.dao_acc,new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893)),e2e.dao.dao_acc,new cljs.core.Keyword(null,"gov_token_sym","gov_token_sym",(989732037)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.dao.dao_acc,new cljs.core.Keyword(null,"sym","sym",(-1444860305)),"4,GOV"], null),new cljs.core.Keyword(null,"utl_token_sym","utl_token_sym",(1087529443)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contract","contract",(798152745)),e2e.dao.dao_acc,new cljs.core.Keyword(null,"sym","sym",(-1444860305)),"4,UTL"], null)], null);
/**
 * Deploy a basic dao account and fill it with data for testing
 */
e2e.dao.deploy_dao = (function e2e$dao$deploy_dao(acc,stake_acc,prop_acc,token_acc,utl_sym,gov_sym,members){
var terms = cljs.core.first.call(null,e2e.dao.terms);
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,terms){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,terms){
return (function (state_3467){
var state_val_3468 = (state_3467[(1)]);
if((state_val_3468 === (32))){
var inst_3458 = (state_3467[(2)]);
var state_3467__$1 = state_3467;
var statearr_3469_3531 = state_3467__$1;
(statearr_3469_3531[(2)] = inst_3458);

(statearr_3469_3531[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (1))){
var inst_3313 = eos_cljs.core.create_account.call(null,e2e.dao.owner_acc,acc);
var inst_3314 = cljs.core.async.interop.p__GT_c.call(null,inst_3313);
var state_3467__$1 = state_3467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(2),inst_3314);
} else {
if((state_val_3468 === (33))){
var inst_3443 = (state_3467[(7)]);
var inst_3443__$1 = (state_3467[(2)]);
var inst_3444 = (inst_3443__$1 instanceof cljs.core.ExceptionInfo);
var inst_3445 = cljs.core.ex_data.call(null,inst_3443__$1);
var inst_3446 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3445);
var inst_3447 = cljs.core._EQ_.call(null,inst_3446,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3448 = ((inst_3444) && (inst_3447));
var state_3467__$1 = (function (){var statearr_3470 = state_3467;
(statearr_3470[(7)] = inst_3443__$1);

return statearr_3470;
})();
if(cljs.core.truth_(inst_3448)){
var statearr_3471_3532 = state_3467__$1;
(statearr_3471_3532[(1)] = (34));

} else {
var statearr_3472_3533 = state_3467__$1;
(statearr_3472_3533[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (2))){
var inst_3316 = (state_3467[(8)]);
var inst_3316__$1 = (state_3467[(2)]);
var inst_3317 = (inst_3316__$1 instanceof cljs.core.ExceptionInfo);
var inst_3318 = cljs.core.ex_data.call(null,inst_3316__$1);
var inst_3319 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3318);
var inst_3320 = cljs.core._EQ_.call(null,inst_3319,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3321 = ((inst_3317) && (inst_3320));
var state_3467__$1 = (function (){var statearr_3473 = state_3467;
(statearr_3473[(8)] = inst_3316__$1);

return statearr_3473;
})();
if(cljs.core.truth_(inst_3321)){
var statearr_3474_3534 = state_3467__$1;
(statearr_3474_3534[(1)] = (3));

} else {
var statearr_3475_3535 = state_3467__$1;
(statearr_3475_3535[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (34))){
var inst_3443 = (state_3467[(7)]);
var inst_3450 = (function(){throw inst_3443})();
var state_3467__$1 = state_3467;
var statearr_3476_3536 = state_3467__$1;
(statearr_3476_3536[(2)] = inst_3450);

(statearr_3476_3536[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (3))){
var inst_3316 = (state_3467[(8)]);
var inst_3323 = (function(){throw inst_3316})();
var state_3467__$1 = state_3467;
var statearr_3477_3537 = state_3467__$1;
(statearr_3477_3537[(2)] = inst_3323);

(statearr_3477_3537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (35))){
var inst_3443 = (state_3467[(7)]);
var state_3467__$1 = state_3467;
var statearr_3478_3538 = state_3467__$1;
(statearr_3478_3538[(2)] = inst_3443);

(statearr_3478_3538[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (4))){
var inst_3316 = (state_3467[(8)]);
var state_3467__$1 = state_3467;
var statearr_3479_3539 = state_3467__$1;
(statearr_3479_3539[(2)] = inst_3316);

(statearr_3479_3539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (36))){
var inst_3429 = (state_3467[(9)]);
var inst_3420 = (state_3467[(10)]);
var inst_3453 = (state_3467[(2)]);
var inst_3454 = cljs.core.prn.call(null,"..added  ",inst_3429," to the dao");
var inst_3455 = cljs.core.next.call(null,inst_3420);
var inst_3383 = inst_3455;
var inst_3384 = null;
var inst_3385 = (0);
var inst_3386 = (0);
var state_3467__$1 = (function (){var statearr_3480 = state_3467;
(statearr_3480[(11)] = inst_3453);

(statearr_3480[(14)] = inst_3454);

(statearr_3480[(15)] = inst_3383);

(statearr_3480[(16)] = inst_3384);

(statearr_3480[(17)] = inst_3385);

(statearr_3480[(18)] = inst_3386);

return statearr_3480;
})();
var statearr_3481_3540 = state_3467__$1;
(statearr_3481_3540[(2)] = null);

(statearr_3481_3540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (5))){
var inst_3326 = (state_3467[(2)]);
var inst_3327 = eos_cljs.core.deploy.call(null,acc,"contracts/effect-dao/effect-dao");
var inst_3328 = cljs.core.async.interop.p__GT_c.call(null,inst_3327);
var state_3467__$1 = (function (){var statearr_3482 = state_3467;
(statearr_3482[(12)] = inst_3326);

return statearr_3482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(6),inst_3328);
} else {
if((state_val_3468 === (6))){
var inst_3330 = (state_3467[(13)]);
var inst_3330__$1 = (state_3467[(2)]);
var inst_3331 = (inst_3330__$1 instanceof cljs.core.ExceptionInfo);
var inst_3332 = cljs.core.ex_data.call(null,inst_3330__$1);
var inst_3333 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3332);
var inst_3334 = cljs.core._EQ_.call(null,inst_3333,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3335 = ((inst_3331) && (inst_3334));
var state_3467__$1 = (function (){var statearr_3483 = state_3467;
(statearr_3483[(13)] = inst_3330__$1);

return statearr_3483;
})();
if(cljs.core.truth_(inst_3335)){
var statearr_3484_3541 = state_3467__$1;
(statearr_3484_3541[(1)] = (7));

} else {
var statearr_3485_3542 = state_3467__$1;
(statearr_3485_3542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (7))){
var inst_3330 = (state_3467[(13)]);
var inst_3337 = (function(){throw inst_3330})();
var state_3467__$1 = state_3467;
var statearr_3486_3543 = state_3467__$1;
(statearr_3486_3543[(2)] = inst_3337);

(statearr_3486_3543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (8))){
var inst_3330 = (state_3467[(13)]);
var state_3467__$1 = state_3467;
var statearr_3487_3544 = state_3467__$1;
(statearr_3487_3544[(2)] = inst_3330);

(statearr_3487_3544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (9))){
var inst_3340 = (state_3467[(2)]);
var inst_3341 = eos_cljs.core.transact.call(null,acc,"newmemterms",terms);
var inst_3342 = cljs.core.async.interop.p__GT_c.call(null,inst_3341);
var state_3467__$1 = (function (){var statearr_3488 = state_3467;
(statearr_3488[(19)] = inst_3340);

return statearr_3488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(10),inst_3342);
} else {
if((state_val_3468 === (10))){
var inst_3344 = (state_3467[(20)]);
var inst_3344__$1 = (state_3467[(2)]);
var inst_3345 = (inst_3344__$1 instanceof cljs.core.ExceptionInfo);
var inst_3346 = cljs.core.ex_data.call(null,inst_3344__$1);
var inst_3347 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3346);
var inst_3348 = cljs.core._EQ_.call(null,inst_3347,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3349 = ((inst_3345) && (inst_3348));
var state_3467__$1 = (function (){var statearr_3489 = state_3467;
(statearr_3489[(20)] = inst_3344__$1);

return statearr_3489;
})();
if(cljs.core.truth_(inst_3349)){
var statearr_3490_3545 = state_3467__$1;
(statearr_3490_3545[(1)] = (11));

} else {
var statearr_3491_3546 = state_3467__$1;
(statearr_3491_3546[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (11))){
var inst_3344 = (state_3467[(20)]);
var inst_3351 = (function(){throw inst_3344})();
var state_3467__$1 = state_3467;
var statearr_3492_3547 = state_3467__$1;
(statearr_3492_3547[(2)] = inst_3351);

(statearr_3492_3547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (12))){
var inst_3344 = (state_3467[(20)]);
var state_3467__$1 = state_3467;
var statearr_3493_3548 = state_3467__$1;
(statearr_3493_3548[(2)] = inst_3344);

(statearr_3493_3548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (13))){
var inst_3354 = (state_3467[(2)]);
var inst_3355 = [new cljs.core.Keyword(null,"stake_contract","stake_contract",(150036370)),new cljs.core.Keyword(null,"proposal_contract","proposal_contract",(-1026612893)),new cljs.core.Keyword(null,"gov_token_sym","gov_token_sym",(989732037)),new cljs.core.Keyword(null,"utl_token_sym","utl_token_sym",(1087529443))];
var inst_3356 = [new cljs.core.Keyword(null,"contract","contract",(798152745)),new cljs.core.Keyword(null,"sym","sym",(-1444860305))];
var inst_3357 = [token_acc,gov_sym];
var inst_3358 = cljs.core.PersistentHashMap.fromArrays(inst_3356,inst_3357);
var inst_3359 = [new cljs.core.Keyword(null,"contract","contract",(798152745)),new cljs.core.Keyword(null,"sym","sym",(-1444860305))];
var inst_3360 = [token_acc,utl_sym];
var inst_3361 = cljs.core.PersistentHashMap.fromArrays(inst_3359,inst_3360);
var inst_3362 = [stake_acc,prop_acc,inst_3358,inst_3361];
var inst_3363 = cljs.core.PersistentHashMap.fromArrays(inst_3355,inst_3362);
var inst_3364 = eos_cljs.core.transact.call(null,acc,"init",inst_3363);
var inst_3365 = cljs.core.async.interop.p__GT_c.call(null,inst_3364);
var state_3467__$1 = (function (){var statearr_3494 = state_3467;
(statearr_3494[(21)] = inst_3354);

return statearr_3494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(14),inst_3365);
} else {
if((state_val_3468 === (14))){
var inst_3367 = (state_3467[(22)]);
var inst_3367__$1 = (state_3467[(2)]);
var inst_3368 = (inst_3367__$1 instanceof cljs.core.ExceptionInfo);
var inst_3369 = cljs.core.ex_data.call(null,inst_3367__$1);
var inst_3370 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3369);
var inst_3371 = cljs.core._EQ_.call(null,inst_3370,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3372 = ((inst_3368) && (inst_3371));
var state_3467__$1 = (function (){var statearr_3495 = state_3467;
(statearr_3495[(22)] = inst_3367__$1);

return statearr_3495;
})();
if(cljs.core.truth_(inst_3372)){
var statearr_3496_3549 = state_3467__$1;
(statearr_3496_3549[(1)] = (15));

} else {
var statearr_3497_3550 = state_3467__$1;
(statearr_3497_3550[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (15))){
var inst_3367 = (state_3467[(22)]);
var inst_3374 = (function(){throw inst_3367})();
var state_3467__$1 = state_3467;
var statearr_3498_3551 = state_3467__$1;
(statearr_3498_3551[(2)] = inst_3374);

(statearr_3498_3551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (16))){
var inst_3367 = (state_3467[(22)]);
var state_3467__$1 = state_3467;
var statearr_3499_3552 = state_3467__$1;
(statearr_3499_3552[(2)] = inst_3367);

(statearr_3499_3552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (17))){
var inst_3377 = (state_3467[(2)]);
var inst_3382 = cljs.core.seq.call(null,members);
var inst_3383 = inst_3382;
var inst_3384 = null;
var inst_3385 = (0);
var inst_3386 = (0);
var state_3467__$1 = (function (){var statearr_3500 = state_3467;
(statearr_3500[(23)] = inst_3377);

(statearr_3500[(15)] = inst_3383);

(statearr_3500[(16)] = inst_3384);

(statearr_3500[(17)] = inst_3385);

(statearr_3500[(18)] = inst_3386);

return statearr_3500;
})();
var statearr_3501_3553 = state_3467__$1;
(statearr_3501_3553[(2)] = null);

(statearr_3501_3553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (18))){
var inst_3386 = (state_3467[(18)]);
var inst_3385 = (state_3467[(17)]);
var inst_3388 = (inst_3386 < inst_3385);
var inst_3389 = inst_3388;
var state_3467__$1 = state_3467;
if(cljs.core.truth_(inst_3389)){
var statearr_3502_3554 = state_3467__$1;
(statearr_3502_3554[(1)] = (20));

} else {
var statearr_3503_3555 = state_3467__$1;
(statearr_3503_3555[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (19))){
var inst_3465 = (state_3467[(2)]);
var state_3467__$1 = state_3467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3467__$1,inst_3465);
} else {
if((state_val_3468 === (20))){
var inst_3384 = (state_3467[(16)]);
var inst_3386 = (state_3467[(18)]);
var inst_3391 = (state_3467[(24)]);
var inst_3391__$1 = cljs.core._nth.call(null,inst_3384,inst_3386);
var inst_3392 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_3393 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(terms);
var inst_3394 = [inst_3391__$1,inst_3393];
var inst_3395 = cljs.core.PersistentHashMap.fromArrays(inst_3392,inst_3394);
var inst_3396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3397 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3398 = [inst_3391__$1,"active"];
var inst_3399 = cljs.core.PersistentHashMap.fromArrays(inst_3397,inst_3398);
var inst_3400 = [inst_3399];
var inst_3401 = (new cljs.core.PersistentVector(null,(1),(5),inst_3396,inst_3400,null));
var inst_3402 = eos_cljs.core.transact.call(null,acc,"memberreg",inst_3395,inst_3401);
var inst_3403 = cljs.core.async.interop.p__GT_c.call(null,inst_3402);
var state_3467__$1 = (function (){var statearr_3504 = state_3467;
(statearr_3504[(24)] = inst_3391__$1);

return statearr_3504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(23),inst_3403);
} else {
if((state_val_3468 === (21))){
var inst_3383 = (state_3467[(15)]);
var inst_3420 = (state_3467[(10)]);
var inst_3420__$1 = cljs.core.seq.call(null,inst_3383);
var state_3467__$1 = (function (){var statearr_3505 = state_3467;
(statearr_3505[(10)] = inst_3420__$1);

return statearr_3505;
})();
if(inst_3420__$1){
var statearr_3506_3556 = state_3467__$1;
(statearr_3506_3556[(1)] = (27));

} else {
var statearr_3507_3557 = state_3467__$1;
(statearr_3507_3557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (22))){
var inst_3463 = (state_3467[(2)]);
var state_3467__$1 = state_3467;
var statearr_3508_3558 = state_3467__$1;
(statearr_3508_3558[(2)] = inst_3463);

(statearr_3508_3558[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (23))){
var inst_3405 = (state_3467[(25)]);
var inst_3405__$1 = (state_3467[(2)]);
var inst_3406 = (inst_3405__$1 instanceof cljs.core.ExceptionInfo);
var inst_3407 = cljs.core.ex_data.call(null,inst_3405__$1);
var inst_3408 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3407);
var inst_3409 = cljs.core._EQ_.call(null,inst_3408,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3410 = ((inst_3406) && (inst_3409));
var state_3467__$1 = (function (){var statearr_3509 = state_3467;
(statearr_3509[(25)] = inst_3405__$1);

return statearr_3509;
})();
if(cljs.core.truth_(inst_3410)){
var statearr_3510_3559 = state_3467__$1;
(statearr_3510_3559[(1)] = (24));

} else {
var statearr_3511_3560 = state_3467__$1;
(statearr_3511_3560[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (24))){
var inst_3405 = (state_3467[(25)]);
var inst_3412 = (function(){throw inst_3405})();
var state_3467__$1 = state_3467;
var statearr_3515_3561 = state_3467__$1;
(statearr_3515_3561[(2)] = inst_3412);

(statearr_3515_3561[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (25))){
var inst_3405 = (state_3467[(25)]);
var state_3467__$1 = state_3467;
var statearr_3516_3562 = state_3467__$1;
(statearr_3516_3562[(2)] = inst_3405);

(statearr_3516_3562[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (26))){
var inst_3391 = (state_3467[(24)]);
var inst_3386 = (state_3467[(18)]);
var inst_3383 = (state_3467[(15)]);
var inst_3384 = (state_3467[(16)]);
var inst_3385 = (state_3467[(17)]);
var inst_3415 = (state_3467[(2)]);
var inst_3416 = cljs.core.prn.call(null,"..added  ",inst_3391," to the dao");
var inst_3417 = (inst_3386 + (1));
var tmp3512 = inst_3383;
var tmp3513 = inst_3384;
var tmp3514 = inst_3385;
var inst_3383__$1 = tmp3512;
var inst_3384__$1 = tmp3513;
var inst_3385__$1 = tmp3514;
var inst_3386__$1 = inst_3417;
var state_3467__$1 = (function (){var statearr_3517 = state_3467;
(statearr_3517[(26)] = inst_3415);

(statearr_3517[(27)] = inst_3416);

(statearr_3517[(15)] = inst_3383__$1);

(statearr_3517[(16)] = inst_3384__$1);

(statearr_3517[(17)] = inst_3385__$1);

(statearr_3517[(18)] = inst_3386__$1);

return statearr_3517;
})();
var statearr_3518_3563 = state_3467__$1;
(statearr_3518_3563[(2)] = null);

(statearr_3518_3563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (27))){
var inst_3420 = (state_3467[(10)]);
var inst_3422 = cljs.core.chunked_seq_QMARK_.call(null,inst_3420);
var state_3467__$1 = state_3467;
if(inst_3422){
var statearr_3519_3564 = state_3467__$1;
(statearr_3519_3564[(1)] = (30));

} else {
var statearr_3520_3565 = state_3467__$1;
(statearr_3520_3565[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (28))){
var state_3467__$1 = state_3467;
var statearr_3521_3566 = state_3467__$1;
(statearr_3521_3566[(2)] = null);

(statearr_3521_3566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (29))){
var inst_3461 = (state_3467[(2)]);
var state_3467__$1 = state_3467;
var statearr_3522_3567 = state_3467__$1;
(statearr_3522_3567[(2)] = inst_3461);

(statearr_3522_3567[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (30))){
var inst_3420 = (state_3467[(10)]);
var inst_3424 = cljs.core.chunk_first.call(null,inst_3420);
var inst_3425 = cljs.core.chunk_rest.call(null,inst_3420);
var inst_3426 = cljs.core.count.call(null,inst_3424);
var inst_3383 = inst_3425;
var inst_3384 = inst_3424;
var inst_3385 = inst_3426;
var inst_3386 = (0);
var state_3467__$1 = (function (){var statearr_3523 = state_3467;
(statearr_3523[(15)] = inst_3383);

(statearr_3523[(16)] = inst_3384);

(statearr_3523[(17)] = inst_3385);

(statearr_3523[(18)] = inst_3386);

return statearr_3523;
})();
var statearr_3524_3568 = state_3467__$1;
(statearr_3524_3568[(2)] = null);

(statearr_3524_3568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3468 === (31))){
var inst_3420 = (state_3467[(10)]);
var inst_3429 = (state_3467[(9)]);
var inst_3429__$1 = cljs.core.first.call(null,inst_3420);
var inst_3430 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_3431 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(terms);
var inst_3432 = [inst_3429__$1,inst_3431];
var inst_3433 = cljs.core.PersistentHashMap.fromArrays(inst_3430,inst_3432);
var inst_3434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3435 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_3436 = [inst_3429__$1,"active"];
var inst_3437 = cljs.core.PersistentHashMap.fromArrays(inst_3435,inst_3436);
var inst_3438 = [inst_3437];
var inst_3439 = (new cljs.core.PersistentVector(null,(1),(5),inst_3434,inst_3438,null));
var inst_3440 = eos_cljs.core.transact.call(null,acc,"memberreg",inst_3433,inst_3439);
var inst_3441 = cljs.core.async.interop.p__GT_c.call(null,inst_3440);
var state_3467__$1 = (function (){var statearr_3525 = state_3467;
(statearr_3525[(9)] = inst_3429__$1);

return statearr_3525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3467__$1,(33),inst_3441);
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
});})(c__19__auto__,terms))
;
return ((function (switch__14__auto__,c__19__auto__,terms){
return (function() {
var e2e$dao$deploy_dao_$_state_machine__15__auto__ = null;
var e2e$dao$deploy_dao_$_state_machine__15__auto____0 = (function (){
var statearr_3526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3526[(0)] = e2e$dao$deploy_dao_$_state_machine__15__auto__);

(statearr_3526[(1)] = (1));

return statearr_3526;
});
var e2e$dao$deploy_dao_$_state_machine__15__auto____1 = (function (state_3467){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3527){var ex__18__auto__ = e3527;
var statearr_3528_3569 = state_3467;
(statearr_3528_3569[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3467[(4)]))){
var statearr_3529_3570 = state_3467;
(statearr_3529_3570[(1)] = cljs.core.first.call(null,(state_3467[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3571 = state_3467;
state_3467 = G__3571;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$deploy_dao_$_state_machine__15__auto__ = function(state_3467){
switch(arguments.length){
case 0:
return e2e$dao$deploy_dao_$_state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$deploy_dao_$_state_machine__15__auto____1.call(this,state_3467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$deploy_dao_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$deploy_dao_$_state_machine__15__auto____0;
e2e$dao$deploy_dao_$_state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$deploy_dao_$_state_machine__15__auto____1;
return e2e$dao$deploy_dao_$_state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,terms))
})();
var state__21__auto__ = (function (){var statearr_3530 = f__20__auto__.call(null);
(statearr_3530[(6)] = c__19__auto__);

return statearr_3530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,terms))
);

return c__19__auto__;
});
e2e.dao.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",(-1633692388)),(function (){
if((typeof e2e !== 'undefined') && (typeof e2e.dao !== 'undefined') && (typeof e2e.dao.t_e2e$dao3572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.dao.t_e2e$dao3572 = (function (meta3573){
this.meta3573 = meta3573;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.dao.t_e2e$dao3572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3574,meta3573__$1){
var self__ = this;
var _3574__$1 = this;
return (new e2e.dao.t_e2e$dao3572(meta3573__$1));
});

e2e.dao.t_e2e$dao3572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3574){
var self__ = this;
var _3574__$1 = this;
return self__.meta3573;
});

e2e.dao.t_e2e$dao3572.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.dao.t_e2e$dao3572.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_3606){
var state_val_3607 = (state_3606[(1)]);
if((state_val_3607 === (1))){
var inst_3576 = eos_cljs.core.create_account.call(null,e2e.dao.owner_acc,e2e.dao.dao_acc);
var inst_3577 = cljs.core.async.interop.p__GT_c.call(null,inst_3576);
var state_3606__$1 = state_3606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3606__$1,(2),inst_3577);
} else {
if((state_val_3607 === (2))){
var inst_3579 = (state_3606[(7)]);
var inst_3579__$1 = (state_3606[(2)]);
var inst_3580 = (inst_3579__$1 instanceof cljs.core.ExceptionInfo);
var inst_3581 = cljs.core.ex_data.call(null,inst_3579__$1);
var inst_3582 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3581);
var inst_3583 = cljs.core._EQ_.call(null,inst_3582,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3584 = ((inst_3580) && (inst_3583));
var state_3606__$1 = (function (){var statearr_3608 = state_3606;
(statearr_3608[(7)] = inst_3579__$1);

return statearr_3608;
})();
if(cljs.core.truth_(inst_3584)){
var statearr_3609_3674 = state_3606__$1;
(statearr_3609_3674[(1)] = (3));

} else {
var statearr_3610_3675 = state_3606__$1;
(statearr_3610_3675[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (3))){
var inst_3579 = (state_3606[(7)]);
var inst_3586 = (function(){throw inst_3579})();
var state_3606__$1 = state_3606;
var statearr_3611_3676 = state_3606__$1;
(statearr_3611_3676[(2)] = inst_3586);

(statearr_3611_3676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (4))){
var inst_3579 = (state_3606[(7)]);
var state_3606__$1 = state_3606;
var statearr_3612_3677 = state_3606__$1;
(statearr_3612_3677[(2)] = inst_3579);

(statearr_3612_3677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (5))){
var inst_3589 = (state_3606[(2)]);
var inst_3590 = eos_cljs.core.deploy.call(null,e2e.dao.dao_acc,"contracts/effect-dao/effect-dao");
var inst_3591 = cljs.core.async.interop.p__GT_c.call(null,inst_3590);
var state_3606__$1 = (function (){var statearr_3613 = state_3606;
(statearr_3613[(8)] = inst_3589);

return statearr_3613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3606__$1,(6),inst_3591);
} else {
if((state_val_3607 === (6))){
var inst_3593 = (state_3606[(9)]);
var inst_3593__$1 = (state_3606[(2)]);
var inst_3594 = (inst_3593__$1 instanceof cljs.core.ExceptionInfo);
var inst_3595 = cljs.core.ex_data.call(null,inst_3593__$1);
var inst_3596 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3595);
var inst_3597 = cljs.core._EQ_.call(null,inst_3596,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3598 = ((inst_3594) && (inst_3597));
var state_3606__$1 = (function (){var statearr_3614 = state_3606;
(statearr_3614[(9)] = inst_3593__$1);

return statearr_3614;
})();
if(cljs.core.truth_(inst_3598)){
var statearr_3615_3678 = state_3606__$1;
(statearr_3615_3678[(1)] = (7));

} else {
var statearr_3616_3679 = state_3606__$1;
(statearr_3616_3679[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (7))){
var inst_3593 = (state_3606[(9)]);
var inst_3600 = (function(){throw inst_3593})();
var state_3606__$1 = state_3606;
var statearr_3617_3680 = state_3606__$1;
(statearr_3617_3680[(2)] = inst_3600);

(statearr_3617_3680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (8))){
var inst_3593 = (state_3606[(9)]);
var state_3606__$1 = state_3606;
var statearr_3618_3681 = state_3606__$1;
(statearr_3618_3681[(2)] = inst_3593);

(statearr_3618_3681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3607 === (9))){
var inst_3603 = (state_3606[(2)]);
var inst_3604 = done.call(null);
var state_3606__$1 = (function (){var statearr_3619 = state_3606;
(statearr_3619[(10)] = inst_3603);

return statearr_3619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3606__$1,inst_3604);
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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_3620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3620[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_3620[(1)] = (1));

return statearr_3620;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_3606){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3621){var ex__18__auto__ = e3621;
var statearr_3622_3682 = state_3606;
(statearr_3622_3682[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3606[(4)]))){
var statearr_3623_3683 = state_3606;
(statearr_3623_3683[(1)] = cljs.core.first.call(null,(state_3606[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3684 = state_3606;
state_3606 = G__3684;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_3606){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_3606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_3624 = f__20__auto__.call(null);
(statearr_3624[(6)] = c__19__auto__);

return statearr_3624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao3572.prototype.apply = (function (self__,args3575){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3575)));
});

e2e.dao.t_e2e$dao3572.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_3655){
var state_val_3656 = (state_3655[(1)]);
if((state_val_3656 === (1))){
var inst_3625 = eos_cljs.core.create_account.call(null,e2e.dao.owner_acc,e2e.dao.dao_acc);
var inst_3626 = cljs.core.async.interop.p__GT_c.call(null,inst_3625);
var state_3655__$1 = state_3655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3655__$1,(2),inst_3626);
} else {
if((state_val_3656 === (2))){
var inst_3628 = (state_3655[(7)]);
var inst_3628__$1 = (state_3655[(2)]);
var inst_3629 = (inst_3628__$1 instanceof cljs.core.ExceptionInfo);
var inst_3630 = cljs.core.ex_data.call(null,inst_3628__$1);
var inst_3631 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3630);
var inst_3632 = cljs.core._EQ_.call(null,inst_3631,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3633 = ((inst_3629) && (inst_3632));
var state_3655__$1 = (function (){var statearr_3657 = state_3655;
(statearr_3657[(7)] = inst_3628__$1);

return statearr_3657;
})();
if(cljs.core.truth_(inst_3633)){
var statearr_3658_3685 = state_3655__$1;
(statearr_3658_3685[(1)] = (3));

} else {
var statearr_3659_3686 = state_3655__$1;
(statearr_3659_3686[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (3))){
var inst_3628 = (state_3655[(7)]);
var inst_3635 = (function(){throw inst_3628})();
var state_3655__$1 = state_3655;
var statearr_3660_3687 = state_3655__$1;
(statearr_3660_3687[(2)] = inst_3635);

(statearr_3660_3687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (4))){
var inst_3628 = (state_3655[(7)]);
var state_3655__$1 = state_3655;
var statearr_3661_3688 = state_3655__$1;
(statearr_3661_3688[(2)] = inst_3628);

(statearr_3661_3688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (5))){
var inst_3638 = (state_3655[(2)]);
var inst_3639 = eos_cljs.core.deploy.call(null,e2e.dao.dao_acc,"contracts/effect-dao/effect-dao");
var inst_3640 = cljs.core.async.interop.p__GT_c.call(null,inst_3639);
var state_3655__$1 = (function (){var statearr_3662 = state_3655;
(statearr_3662[(8)] = inst_3638);

return statearr_3662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3655__$1,(6),inst_3640);
} else {
if((state_val_3656 === (6))){
var inst_3642 = (state_3655[(9)]);
var inst_3642__$1 = (state_3655[(2)]);
var inst_3643 = (inst_3642__$1 instanceof cljs.core.ExceptionInfo);
var inst_3644 = cljs.core.ex_data.call(null,inst_3642__$1);
var inst_3645 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3644);
var inst_3646 = cljs.core._EQ_.call(null,inst_3645,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3647 = ((inst_3643) && (inst_3646));
var state_3655__$1 = (function (){var statearr_3663 = state_3655;
(statearr_3663[(9)] = inst_3642__$1);

return statearr_3663;
})();
if(cljs.core.truth_(inst_3647)){
var statearr_3664_3689 = state_3655__$1;
(statearr_3664_3689[(1)] = (7));

} else {
var statearr_3665_3690 = state_3655__$1;
(statearr_3665_3690[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (7))){
var inst_3642 = (state_3655[(9)]);
var inst_3649 = (function(){throw inst_3642})();
var state_3655__$1 = state_3655;
var statearr_3666_3691 = state_3655__$1;
(statearr_3666_3691[(2)] = inst_3649);

(statearr_3666_3691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (8))){
var inst_3642 = (state_3655[(9)]);
var state_3655__$1 = state_3655;
var statearr_3667_3692 = state_3655__$1;
(statearr_3667_3692[(2)] = inst_3642);

(statearr_3667_3692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3656 === (9))){
var inst_3652 = (state_3655[(2)]);
var inst_3653 = done.call(null);
var state_3655__$1 = (function (){var statearr_3668 = state_3655;
(statearr_3668[(10)] = inst_3652);

return statearr_3668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3655__$1,inst_3653);
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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_3669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3669[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_3669[(1)] = (1));

return statearr_3669;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_3655){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e3670){var ex__18__auto__ = e3670;
var statearr_3671_3693 = state_3655;
(statearr_3671_3693[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3655[(4)]))){
var statearr_3672_3694 = state_3655;
(statearr_3672_3694[(1)] = cljs.core.first.call(null,(state_3655[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__3695 = state_3655;
state_3655 = G__3695;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_3655){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_3655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_3673 = f__20__auto__.call(null);
(statearr_3673[(6)] = c__19__auto__);

return statearr_3673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao3572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3573","meta3573",(280502668),null)], null);
});

e2e.dao.t_e2e$dao3572.cljs$lang$type = true;

e2e.dao.t_e2e$dao3572.cljs$lang$ctorStr = "e2e.dao/t_e2e$dao3572";

e2e.dao.t_e2e$dao3572.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.dao/t_e2e$dao3572");
});

/**
 * Positional factory function for e2e.dao/t_e2e$dao3572.
 */
e2e.dao.__GT_t_e2e$dao3572 = (function e2e$dao$__GT_t_e2e$dao3572(meta3573){
return (new e2e.dao.t_e2e$dao3572(meta3573));
});

}

return (new e2e.dao.t_e2e$dao3572(null));
}),new cljs.core.Keyword(null,"after","after",(594996914)),(function (){
return null;
})], null)], null);
e2e.dao.init = (function e2e$dao$init(){
return cljs.test.test_var.call(null,e2e.dao.init.cljs$lang$var);
});
e2e.dao.init.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.dao !== 'undefined') && (typeof e2e.dao.t_e2e$dao3696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.dao.t_e2e$dao3696 = (function (meta3697){
this.meta3697 = meta3697;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.dao.t_e2e$dao3696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3698,meta3697__$1){
var self__ = this;
var _3698__$1 = this;
return (new e2e.dao.t_e2e$dao3696(meta3697__$1));
});

e2e.dao.t_e2e$dao3696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3698){
var self__ = this;
var _3698__$1 = this;
return self__.meta3697;
});

e2e.dao.t_e2e$dao3696.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.dao.t_e2e$dao3696.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_3991){
var state_val_3992 = (state_3991[(1)]);
if((state_val_3992 === (32))){
var inst_3783 = (state_3991[(7)]);
var inst_3838 = (state_3991[(8)]);
var inst_3839 = (state_3991[(9)]);
var _ = (function (){var statearr_3993 = state_3991;
(statearr_3993[(4)] = cljs.core.cons.call(null,(35),(state_3991[(4)])));

return statearr_3993;
})();
var inst_3833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3834 = [(0),"stake_contract"];
var inst_3835 = (new cljs.core.PersistentVector(null,(2),(5),inst_3833,inst_3834,null));
var inst_3836 = cljs.core.get_in.call(null,inst_3783,inst_3835);
var inst_3837 = (new cljs.core.List(null,e2e.dao.dao_acc,null,(1),null));
var inst_3838__$1 = (new cljs.core.List(null,inst_3836,inst_3837,(2),null));
var inst_3839__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_3838__$1);
var state_3991__$1 = (function (){var statearr_3994 = state_3991;
(statearr_3994[(8)] = inst_3838__$1);

(statearr_3994[(9)] = inst_3839__$1);

return statearr_3994;
})();
if(cljs.core.truth_(inst_3839__$1)){
var statearr_3995_4576 = state_3991__$1;
(statearr_3995_4576[(1)] = (36));

} else {
var statearr_3996_4577 = state_3991__$1;
(statearr_3996_4577[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (64))){
var inst_3948 = (state_3991[(2)]);
var inst_3949 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3950 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_3951 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_3950,inst_3948];
var inst_3952 = cljs.core.PersistentHashMap.fromArrays(inst_3949,inst_3951);
var inst_3953 = cljs.test.do_report.call(null,inst_3952);
var state_3991__$1 = state_3991;
var statearr_3997_4578 = state_3991__$1;
(statearr_3997_4578[(2)] = inst_3953);

(statearr_3997_4578[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (1))){
var state_3991__$1 = state_3991;
var statearr_3999_4579 = state_3991__$1;
(statearr_3999_4579[(2)] = null);

(statearr_3999_4579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (33))){
var inst_3862 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4000 = state_3991;
(statearr_4000[(10)] = inst_3862);

return statearr_4000;
})();
var statearr_4001_4580 = state_3991__$1;
(statearr_4001_4580[(2)] = null);

(statearr_4001_4580[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (65))){
var _ = (function (){var statearr_4002 = state_3991;
(statearr_4002[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4002;
})();
var state_3991__$1 = state_3991;
var ex3998 = (state_3991__$1[(2)]);
var statearr_4003_4581 = state_3991__$1;
(statearr_4003_4581[(5)] = ex3998);


var statearr_4004_4582 = state_3991__$1;
(statearr_4004_4582[(1)] = (64));

(statearr_4004_4582[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (2))){
var _ = (function (){var statearr_4005 = state_3991;
(statearr_4005[(4)] = cljs.core.cons.call(null,(9),(state_3991[(4)])));

return statearr_4005;
})();
var inst_3725 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"init",e2e.dao.dao_config);
var inst_3726 = cljs.core.async.interop.p__GT_c.call(null,inst_3725);
var state_3991__$1 = state_3991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3991__$1,(10),inst_3726);
} else {
if((state_val_3992 === (34))){
var inst_3822 = (state_3991[(2)]);
var inst_3823 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3824 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_3825 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_3824,inst_3822];
var inst_3826 = cljs.core.PersistentHashMap.fromArrays(inst_3823,inst_3825);
var inst_3827 = cljs.test.do_report.call(null,inst_3826);
var state_3991__$1 = state_3991;
var statearr_4006_4583 = state_3991__$1;
(statearr_4006_4583[(2)] = inst_3827);

(statearr_4006_4583[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (66))){
var inst_3964 = (state_3991[(11)]);
var inst_3967 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3968 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_3969 = cljs.core.cons.call(null,cljs.core._EQ_,inst_3964);
var inst_3970 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_3968,inst_3969];
var inst_3971 = cljs.core.PersistentHashMap.fromArrays(inst_3967,inst_3970);
var inst_3972 = cljs.test.do_report.call(null,inst_3971);
var state_3991__$1 = state_3991;
var statearr_4008_4584 = state_3991__$1;
(statearr_4008_4584[(2)] = inst_3972);

(statearr_4008_4584[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (3))){
var inst_3769 = (state_3991[(2)]);
var inst_3770 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"config");
var inst_3771 = cljs.core.async.interop.p__GT_c.call(null,inst_3770);
var state_3991__$1 = (function (){var statearr_4009 = state_3991;
(statearr_4009[(12)] = inst_3769);

return statearr_4009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3991__$1,(21),inst_3771);
} else {
if((state_val_3992 === (35))){
var _ = (function (){var statearr_4010 = state_3991;
(statearr_4010[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4010;
})();
var state_3991__$1 = state_3991;
var ex4007 = (state_3991__$1[(2)]);
var statearr_4011_4585 = state_3991__$1;
(statearr_4011_4585[(5)] = ex4007);


var statearr_4012_4586 = state_3991__$1;
(statearr_4012_4586[(1)] = (34));

(statearr_4012_4586[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (67))){
var inst_3964 = (state_3991[(11)]);
var inst_3974 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3975 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_3976 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_3977 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_3978 = cljs.core.cons.call(null,inst_3977,inst_3964);
var inst_3979 = (new cljs.core.List(null,inst_3978,null,(1),null));
var inst_3980 = (new cljs.core.List(null,inst_3976,inst_3979,(2),null));
var inst_3981 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_3975,inst_3980];
var inst_3982 = cljs.core.PersistentHashMap.fromArrays(inst_3974,inst_3981);
var inst_3983 = cljs.test.do_report.call(null,inst_3982);
var state_3991__$1 = state_3991;
var statearr_4013_4587 = state_3991__$1;
(statearr_4013_4587[(2)] = inst_3983);

(statearr_4013_4587[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (4))){
var inst_3700 = (state_3991[(2)]);
var inst_3701 = cljs.core.prn.call(null,"test failed with ",inst_3700);
var state_3991__$1 = (function (){var statearr_4014 = state_3991;
(statearr_4014[(13)] = inst_3701);

return statearr_4014;
})();
var statearr_4015_4588 = state_3991__$1;
(statearr_4015_4588[(2)] = null);

(statearr_4015_4588[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (36))){
var inst_3838 = (state_3991[(8)]);
var inst_3841 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3842 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_3843 = cljs.core.cons.call(null,cljs.core._EQ_,inst_3838);
var inst_3844 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_3842,inst_3843];
var inst_3845 = cljs.core.PersistentHashMap.fromArrays(inst_3841,inst_3844);
var inst_3846 = cljs.test.do_report.call(null,inst_3845);
var state_3991__$1 = state_3991;
var statearr_4016_4589 = state_3991__$1;
(statearr_4016_4589[(2)] = inst_3846);

(statearr_4016_4589[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (68))){
var inst_3965 = (state_3991[(14)]);
var inst_3985 = (state_3991[(2)]);
var _ = (function (){var statearr_4017 = state_3991;
(statearr_4017[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4017;
})();
var state_3991__$1 = (function (){var statearr_4018 = state_3991;
(statearr_4018[(15)] = inst_3985);

return statearr_4018;
})();
var statearr_4019_4590 = state_3991__$1;
(statearr_4019_4590[(2)] = inst_3965);

(statearr_4019_4590[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (5))){
var _ = (function (){var statearr_4020 = state_3991;
(statearr_4020[(4)] = cljs.core.cons.call(null,(8),(state_3991[(4)])));

return statearr_4020;
})();
var inst_3713 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3714 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_3715 = cljs.core.PersistentHashMap.fromArrays(inst_3713,inst_3714);
var inst_3716 = cljs.test.do_report.call(null,inst_3715);
var ___$1 = (function (){var statearr_4021 = state_3991;
(statearr_4021[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4021;
})();
var state_3991__$1 = state_3991;
var statearr_4022_4591 = state_3991__$1;
(statearr_4022_4591[(2)] = inst_3716);

(statearr_4022_4591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (37))){
var inst_3838 = (state_3991[(8)]);
var inst_3848 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3849 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_3850 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_3851 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_3852 = cljs.core.cons.call(null,inst_3851,inst_3838);
var inst_3853 = (new cljs.core.List(null,inst_3852,null,(1),null));
var inst_3854 = (new cljs.core.List(null,inst_3850,inst_3853,(2),null));
var inst_3855 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_3849,inst_3854];
var inst_3856 = cljs.core.PersistentHashMap.fromArrays(inst_3848,inst_3855);
var inst_3857 = cljs.test.do_report.call(null,inst_3856);
var state_3991__$1 = state_3991;
var statearr_4023_4592 = state_3991__$1;
(statearr_4023_4592[(2)] = inst_3857);

(statearr_4023_4592[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (6))){
var inst_3719 = (state_3991[(2)]);
var state_3991__$1 = state_3991;
var statearr_4024_4593 = state_3991__$1;
(statearr_4024_4593[(2)] = inst_3719);

(statearr_4024_4593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (38))){
var inst_3839 = (state_3991[(9)]);
var inst_3859 = (state_3991[(2)]);
var _ = (function (){var statearr_4025 = state_3991;
(statearr_4025[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4025;
})();
var state_3991__$1 = (function (){var statearr_4026 = state_3991;
(statearr_4026[(16)] = inst_3859);

return statearr_4026;
})();
var statearr_4027_4594 = state_3991__$1;
(statearr_4027_4594[(2)] = inst_3839);

(statearr_4027_4594[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (7))){
var inst_3702 = (state_3991[(2)]);
var inst_3703 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3704 = null;
var inst_3705 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_3704,inst_3702];
var inst_3706 = cljs.core.PersistentHashMap.fromArrays(inst_3703,inst_3705);
var inst_3707 = cljs.test.do_report.call(null,inst_3706);
var state_3991__$1 = state_3991;
var statearr_4029_4595 = state_3991__$1;
(statearr_4029_4595[(2)] = inst_3707);

(statearr_4029_4595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (39))){
var _ = (function (){var statearr_4030 = state_3991;
(statearr_4030[(4)] = cljs.core.cons.call(null,(46),(state_3991[(4)])));

return statearr_4030;
})();
var inst_3888 = cljs.core.assoc.call(null,e2e.dao.dao_config,new cljs.core.Keyword(null,"stake_contract","stake_contract",(150036370)),e2e.dao.owner_acc);
var inst_3889 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"init",inst_3888);
var inst_3890 = cljs.core.async.interop.p__GT_c.call(null,inst_3889);
var state_3991__$1 = state_3991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3991__$1,(47),inst_3890);
} else {
if((state_val_3992 === (8))){
var _ = (function (){var statearr_4032 = state_3991;
(statearr_4032[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4032;
})();
var state_3991__$1 = state_3991;
var ex4028 = (state_3991__$1[(2)]);
var statearr_4033_4596 = state_3991__$1;
(statearr_4033_4596[(5)] = ex4028);


var statearr_4034_4597 = state_3991__$1;
(statearr_4034_4597[(1)] = (7));

(statearr_4034_4597[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (40))){
var inst_3933 = (state_3991[(2)]);
var inst_3934 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"config");
var inst_3935 = cljs.core.async.interop.p__GT_c.call(null,inst_3934);
var state_3991__$1 = (function (){var statearr_4035 = state_3991;
(statearr_4035[(17)] = inst_3933);

return statearr_4035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3991__$1,(58),inst_3935);
} else {
if((state_val_3992 === (9))){
var _ = (function (){var statearr_4036 = state_3991;
(statearr_4036[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4036;
})();
var state_3991__$1 = state_3991;
var ex4031 = (state_3991__$1[(2)]);
var statearr_4037_4598 = state_3991__$1;
(statearr_4037_4598[(5)] = ex4031);


if((ex4031 instanceof Error)){
var statearr_4038_4599 = state_3991__$1;
(statearr_4038_4599[(1)] = (4));

(statearr_4038_4599[(5)] = null);

} else {
throw ex4031;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (41))){
var inst_3863 = (state_3991[(2)]);
var inst_3864 = cljs.core.prn.call(null,"test failed with ",inst_3863);
var state_3991__$1 = (function (){var statearr_4039 = state_3991;
(statearr_4039[(18)] = inst_3864);

return statearr_4039;
})();
var statearr_4040_4600 = state_3991__$1;
(statearr_4040_4600[(2)] = null);

(statearr_4040_4600[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (10))){
var inst_3728 = (state_3991[(19)]);
var inst_3728__$1 = (state_3991[(2)]);
var inst_3729 = (inst_3728__$1 instanceof cljs.core.ExceptionInfo);
var inst_3730 = cljs.core.ex_data.call(null,inst_3728__$1);
var inst_3731 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3730);
var inst_3732 = cljs.core._EQ_.call(null,inst_3731,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3733 = ((inst_3729) && (inst_3732));
var state_3991__$1 = (function (){var statearr_4041 = state_3991;
(statearr_4041[(19)] = inst_3728__$1);

return statearr_4041;
})();
if(cljs.core.truth_(inst_3733)){
var statearr_4042_4601 = state_3991__$1;
(statearr_4042_4601[(1)] = (11));

} else {
var statearr_4043_4602 = state_3991__$1;
(statearr_4043_4602[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (42))){
var _ = (function (){var statearr_4044 = state_3991;
(statearr_4044[(4)] = cljs.core.cons.call(null,(45),(state_3991[(4)])));

return statearr_4044;
})();
var inst_3876 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_3877 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update"];
var inst_3878 = cljs.core.PersistentHashMap.fromArrays(inst_3876,inst_3877);
var inst_3879 = cljs.test.do_report.call(null,inst_3878);
var ___$1 = (function (){var statearr_4045 = state_3991;
(statearr_4045[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4045;
})();
var state_3991__$1 = state_3991;
var statearr_4046_4603 = state_3991__$1;
(statearr_4046_4603[(2)] = inst_3879);

(statearr_4046_4603[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (11))){
var inst_3728 = (state_3991[(19)]);
var inst_3735 = (function(){throw inst_3728})();
var state_3991__$1 = state_3991;
var statearr_4047_4604 = state_3991__$1;
(statearr_4047_4604[(2)] = inst_3735);

(statearr_4047_4604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (43))){
var inst_3882 = (state_3991[(2)]);
var state_3991__$1 = state_3991;
var statearr_4048_4605 = state_3991__$1;
(statearr_4048_4605[(2)] = inst_3882);

(statearr_4048_4605[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (12))){
var inst_3728 = (state_3991[(19)]);
var state_3991__$1 = state_3991;
var statearr_4049_4606 = state_3991__$1;
(statearr_4049_4606[(2)] = inst_3728);

(statearr_4049_4606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (44))){
var inst_3865 = (state_3991[(2)]);
var inst_3866 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3867 = null;
var inst_3868 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_3867,inst_3865];
var inst_3869 = cljs.core.PersistentHashMap.fromArrays(inst_3866,inst_3868);
var inst_3870 = cljs.test.do_report.call(null,inst_3869);
var state_3991__$1 = state_3991;
var statearr_4051_4607 = state_3991__$1;
(statearr_4051_4607[(2)] = inst_3870);

(statearr_4051_4607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (13))){
var inst_3738 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4052 = state_3991;
(statearr_4052[(20)] = inst_3738);

return statearr_4052;
})();
var statearr_4053_4608 = state_3991__$1;
(statearr_4053_4608[(2)] = null);

(statearr_4053_4608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (45))){
var _ = (function (){var statearr_4055 = state_3991;
(statearr_4055[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4055;
})();
var state_3991__$1 = state_3991;
var ex4050 = (state_3991__$1[(2)]);
var statearr_4056_4609 = state_3991__$1;
(statearr_4056_4609[(5)] = ex4050);


var statearr_4057_4610 = state_3991__$1;
(statearr_4057_4610[(1)] = (44));

(statearr_4057_4610[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (14))){
var _ = (function (){var statearr_4058 = state_3991;
(statearr_4058[(4)] = cljs.core.cons.call(null,(17),(state_3991[(4)])));

return statearr_4058;
})();
var state_3991__$1 = state_3991;
var statearr_4059_4611 = state_3991__$1;
(statearr_4059_4611[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (46))){
var _ = (function (){var statearr_4061 = state_3991;
(statearr_4061[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4061;
})();
var state_3991__$1 = state_3991;
var ex4054 = (state_3991__$1[(2)]);
var statearr_4062_4612 = state_3991__$1;
(statearr_4062_4612[(5)] = ex4054);


if((ex4054 instanceof Error)){
var statearr_4063_4613 = state_3991__$1;
(statearr_4063_4613[(1)] = (41));

(statearr_4063_4613[(5)] = null);

} else {
throw ex4054;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (15))){
var inst_3766 = (state_3991[(2)]);
var _ = (function (){var statearr_4064 = state_3991;
(statearr_4064[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4064;
})();
var state_3991__$1 = state_3991;
var statearr_4065_4614 = state_3991__$1;
(statearr_4065_4614[(2)] = inst_3766);

(statearr_4065_4614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (47))){
var inst_3892 = (state_3991[(21)]);
var inst_3892__$1 = (state_3991[(2)]);
var inst_3893 = (inst_3892__$1 instanceof cljs.core.ExceptionInfo);
var inst_3894 = cljs.core.ex_data.call(null,inst_3892__$1);
var inst_3895 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3894);
var inst_3896 = cljs.core._EQ_.call(null,inst_3895,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3897 = ((inst_3893) && (inst_3896));
var state_3991__$1 = (function (){var statearr_4066 = state_3991;
(statearr_4066[(21)] = inst_3892__$1);

return statearr_4066;
})();
if(cljs.core.truth_(inst_3897)){
var statearr_4067_4615 = state_3991__$1;
(statearr_4067_4615[(1)] = (48));

} else {
var statearr_4068_4616 = state_3991__$1;
(statearr_4068_4616[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (16))){
var inst_3739 = (state_3991[(2)]);
var inst_3740 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3741 = true;
var inst_3742 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_3741,inst_3739];
var inst_3743 = cljs.core.PersistentHashMap.fromArrays(inst_3740,inst_3742);
var inst_3744 = cljs.test.do_report.call(null,inst_3743);
var state_3991__$1 = state_3991;
var statearr_4070_4617 = state_3991__$1;
(statearr_4070_4617[(2)] = inst_3744);

(statearr_4070_4617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (48))){
var inst_3892 = (state_3991[(21)]);
var inst_3899 = (function(){throw inst_3892})();
var state_3991__$1 = state_3991;
var statearr_4071_4618 = state_3991__$1;
(statearr_4071_4618[(2)] = inst_3899);

(statearr_4071_4618[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (17))){
var _ = (function (){var statearr_4072 = state_3991;
(statearr_4072[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4072;
})();
var state_3991__$1 = state_3991;
var ex4069 = (state_3991__$1[(2)]);
var statearr_4073_4619 = state_3991__$1;
(statearr_4073_4619[(5)] = ex4069);


var statearr_4074_4620 = state_3991__$1;
(statearr_4074_4620[(1)] = (16));

(statearr_4074_4620[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (49))){
var inst_3892 = (state_3991[(21)]);
var state_3991__$1 = state_3991;
var statearr_4075_4621 = state_3991__$1;
(statearr_4075_4621[(2)] = inst_3892);

(statearr_4075_4621[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (18))){
var inst_3751 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3752 = true;
var inst_3753 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_3752,true];
var inst_3754 = cljs.core.PersistentHashMap.fromArrays(inst_3751,inst_3753);
var inst_3755 = cljs.test.do_report.call(null,inst_3754);
var state_3991__$1 = state_3991;
var statearr_4076_4622 = state_3991__$1;
(statearr_4076_4622[(2)] = inst_3755);

(statearr_4076_4622[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (50))){
var inst_3902 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4077 = state_3991;
(statearr_4077[(22)] = inst_3902);

return statearr_4077;
})();
var statearr_4078_4623 = state_3991__$1;
(statearr_4078_4623[(2)] = null);

(statearr_4078_4623[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (19))){
var inst_3757 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3758 = true;
var inst_3759 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_3758,true];
var inst_3760 = cljs.core.PersistentHashMap.fromArrays(inst_3757,inst_3759);
var inst_3761 = cljs.test.do_report.call(null,inst_3760);
var state_3991__$1 = state_3991;
var statearr_4079_4624 = state_3991__$1;
(statearr_4079_4624[(2)] = inst_3761);

(statearr_4079_4624[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (51))){
var _ = (function (){var statearr_4080 = state_3991;
(statearr_4080[(4)] = cljs.core.cons.call(null,(54),(state_3991[(4)])));

return statearr_4080;
})();
var state_3991__$1 = state_3991;
var statearr_4081_4625 = state_3991__$1;
(statearr_4081_4625[(1)] = (55));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (20))){
var inst_3763 = (state_3991[(2)]);
var _ = (function (){var statearr_4083 = state_3991;
(statearr_4083[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4083;
})();
var state_3991__$1 = (function (){var statearr_4084 = state_3991;
(statearr_4084[(23)] = inst_3763);

return statearr_4084;
})();
var statearr_4085_4626 = state_3991__$1;
(statearr_4085_4626[(2)] = true);

(statearr_4085_4626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (52))){
var inst_3930 = (state_3991[(2)]);
var _ = (function (){var statearr_4086 = state_3991;
(statearr_4086[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4086;
})();
var state_3991__$1 = state_3991;
var statearr_4087_4627 = state_3991__$1;
(statearr_4087_4627[(2)] = inst_3930);

(statearr_4087_4627[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (21))){
var inst_3773 = (state_3991[(24)]);
var inst_3773__$1 = (state_3991[(2)]);
var inst_3774 = (inst_3773__$1 instanceof cljs.core.ExceptionInfo);
var inst_3775 = cljs.core.ex_data.call(null,inst_3773__$1);
var inst_3776 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3775);
var inst_3777 = cljs.core._EQ_.call(null,inst_3776,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3778 = ((inst_3774) && (inst_3777));
var state_3991__$1 = (function (){var statearr_4088 = state_3991;
(statearr_4088[(24)] = inst_3773__$1);

return statearr_4088;
})();
if(cljs.core.truth_(inst_3778)){
var statearr_4089_4628 = state_3991__$1;
(statearr_4089_4628[(1)] = (22));

} else {
var statearr_4090_4629 = state_3991__$1;
(statearr_4090_4629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (53))){
var inst_3903 = (state_3991[(2)]);
var inst_3904 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3905 = true;
var inst_3906 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_3905,inst_3903];
var inst_3907 = cljs.core.PersistentHashMap.fromArrays(inst_3904,inst_3906);
var inst_3908 = cljs.test.do_report.call(null,inst_3907);
var state_3991__$1 = state_3991;
var statearr_4092_4630 = state_3991__$1;
(statearr_4092_4630[(2)] = inst_3908);

(statearr_4092_4630[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (22))){
var inst_3773 = (state_3991[(24)]);
var inst_3780 = (function(){throw inst_3773})();
var state_3991__$1 = state_3991;
var statearr_4093_4631 = state_3991__$1;
(statearr_4093_4631[(2)] = inst_3780);

(statearr_4093_4631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (54))){
var _ = (function (){var statearr_4094 = state_3991;
(statearr_4094[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4094;
})();
var state_3991__$1 = state_3991;
var ex4091 = (state_3991__$1[(2)]);
var statearr_4095_4632 = state_3991__$1;
(statearr_4095_4632[(5)] = ex4091);


var statearr_4096_4633 = state_3991__$1;
(statearr_4096_4633[(1)] = (53));

(statearr_4096_4633[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (23))){
var inst_3773 = (state_3991[(24)]);
var state_3991__$1 = state_3991;
var statearr_4097_4634 = state_3991__$1;
(statearr_4097_4634[(2)] = inst_3773);

(statearr_4097_4634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (55))){
var inst_3915 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3916 = true;
var inst_3917 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update",inst_3916,true];
var inst_3918 = cljs.core.PersistentHashMap.fromArrays(inst_3915,inst_3917);
var inst_3919 = cljs.test.do_report.call(null,inst_3918);
var state_3991__$1 = state_3991;
var statearr_4098_4635 = state_3991__$1;
(statearr_4098_4635[(2)] = inst_3919);

(statearr_4098_4635[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (24))){
var inst_3783 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4099 = state_3991;
(statearr_4099[(7)] = inst_3783);

return statearr_4099;
})();
var statearr_4100_4636 = state_3991__$1;
(statearr_4100_4636[(2)] = null);

(statearr_4100_4636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (56))){
var inst_3921 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3922 = true;
var inst_3923 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update",inst_3922,true];
var inst_3924 = cljs.core.PersistentHashMap.fromArrays(inst_3921,inst_3923);
var inst_3925 = cljs.test.do_report.call(null,inst_3924);
var state_3991__$1 = state_3991;
var statearr_4101_4637 = state_3991__$1;
(statearr_4101_4637[(2)] = inst_3925);

(statearr_4101_4637[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (25))){
var inst_3783 = (state_3991[(7)]);
var inst_3797 = (state_3991[(25)]);
var inst_3798 = (state_3991[(26)]);
var _ = (function (){var statearr_4102 = state_3991;
(statearr_4102[(4)] = cljs.core.cons.call(null,(28),(state_3991[(4)])));

return statearr_4102;
})();
var inst_3795 = cljs.core.count.call(null,inst_3783);
var inst_3796 = (new cljs.core.List(null,(1),null,(1),null));
var inst_3797__$1 = (new cljs.core.List(null,inst_3795,inst_3796,(2),null));
var inst_3798__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_3797__$1);
var state_3991__$1 = (function (){var statearr_4103 = state_3991;
(statearr_4103[(25)] = inst_3797__$1);

(statearr_4103[(26)] = inst_3798__$1);

return statearr_4103;
})();
if(cljs.core.truth_(inst_3798__$1)){
var statearr_4104_4638 = state_3991__$1;
(statearr_4104_4638[(1)] = (29));

} else {
var statearr_4105_4639 = state_3991__$1;
(statearr_4105_4639[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (57))){
var inst_3927 = (state_3991[(2)]);
var _ = (function (){var statearr_4106 = state_3991;
(statearr_4106[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4106;
})();
var state_3991__$1 = (function (){var statearr_4107 = state_3991;
(statearr_4107[(27)] = inst_3927);

return statearr_4107;
})();
var statearr_4108_4640 = state_3991__$1;
(statearr_4108_4640[(2)] = true);

(statearr_4108_4640[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (26))){
var inst_3821 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4109 = state_3991;
(statearr_4109[(28)] = inst_3821);

return statearr_4109;
})();
var statearr_4110_4641 = state_3991__$1;
(statearr_4110_4641[(2)] = null);

(statearr_4110_4641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (58))){
var inst_3937 = (state_3991[(29)]);
var inst_3937__$1 = (state_3991[(2)]);
var inst_3938 = (inst_3937__$1 instanceof cljs.core.ExceptionInfo);
var inst_3939 = cljs.core.ex_data.call(null,inst_3937__$1);
var inst_3940 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_3939);
var inst_3941 = cljs.core._EQ_.call(null,inst_3940,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_3942 = ((inst_3938) && (inst_3941));
var state_3991__$1 = (function (){var statearr_4111 = state_3991;
(statearr_4111[(29)] = inst_3937__$1);

return statearr_4111;
})();
if(cljs.core.truth_(inst_3942)){
var statearr_4112_4642 = state_3991__$1;
(statearr_4112_4642[(1)] = (59));

} else {
var statearr_4113_4643 = state_3991__$1;
(statearr_4113_4643[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (27))){
var inst_3784 = (state_3991[(2)]);
var inst_3785 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3786 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3787 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_3786,inst_3784];
var inst_3788 = cljs.core.PersistentHashMap.fromArrays(inst_3785,inst_3787);
var inst_3789 = cljs.test.do_report.call(null,inst_3788);
var state_3991__$1 = state_3991;
var statearr_4115_4644 = state_3991__$1;
(statearr_4115_4644[(2)] = inst_3789);

(statearr_4115_4644[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (59))){
var inst_3937 = (state_3991[(29)]);
var inst_3944 = (function(){throw inst_3937})();
var state_3991__$1 = state_3991;
var statearr_4116_4645 = state_3991__$1;
(statearr_4116_4645[(2)] = inst_3944);

(statearr_4116_4645[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (28))){
var _ = (function (){var statearr_4117 = state_3991;
(statearr_4117[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4117;
})();
var state_3991__$1 = state_3991;
var ex4114 = (state_3991__$1[(2)]);
var statearr_4118_4646 = state_3991__$1;
(statearr_4118_4646[(5)] = ex4114);


var statearr_4119_4647 = state_3991__$1;
(statearr_4119_4647[(1)] = (27));

(statearr_4119_4647[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (60))){
var inst_3937 = (state_3991[(29)]);
var state_3991__$1 = state_3991;
var statearr_4120_4648 = state_3991__$1;
(statearr_4120_4648[(2)] = inst_3937);

(statearr_4120_4648[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (29))){
var inst_3797 = (state_3991[(25)]);
var inst_3800 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3801 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3802 = cljs.core.cons.call(null,cljs.core._EQ_,inst_3797);
var inst_3803 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_3801,inst_3802];
var inst_3804 = cljs.core.PersistentHashMap.fromArrays(inst_3800,inst_3803);
var inst_3805 = cljs.test.do_report.call(null,inst_3804);
var state_3991__$1 = state_3991;
var statearr_4121_4649 = state_3991__$1;
(statearr_4121_4649[(2)] = inst_3805);

(statearr_4121_4649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (61))){
var inst_3947 = (state_3991[(2)]);
var state_3991__$1 = (function (){var statearr_4122 = state_3991;
(statearr_4122[(30)] = inst_3947);

return statearr_4122;
})();
var statearr_4123_4650 = state_3991__$1;
(statearr_4123_4650[(2)] = null);

(statearr_4123_4650[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (30))){
var inst_3797 = (state_3991[(25)]);
var inst_3807 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_3808 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_3809 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_3810 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_3811 = cljs.core.cons.call(null,inst_3810,inst_3797);
var inst_3812 = (new cljs.core.List(null,inst_3811,null,(1),null));
var inst_3813 = (new cljs.core.List(null,inst_3809,inst_3812,(2),null));
var inst_3814 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_3808,inst_3813];
var inst_3815 = cljs.core.PersistentHashMap.fromArrays(inst_3807,inst_3814);
var inst_3816 = cljs.test.do_report.call(null,inst_3815);
var state_3991__$1 = state_3991;
var statearr_4124_4651 = state_3991__$1;
(statearr_4124_4651[(2)] = inst_3816);

(statearr_4124_4651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (62))){
var inst_3947 = (state_3991[(30)]);
var inst_3964 = (state_3991[(11)]);
var inst_3965 = (state_3991[(14)]);
var _ = (function (){var statearr_4125 = state_3991;
(statearr_4125[(4)] = cljs.core.cons.call(null,(65),(state_3991[(4)])));

return statearr_4125;
})();
var inst_3959 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3960 = [(0),"stake_contract"];
var inst_3961 = (new cljs.core.PersistentVector(null,(2),(5),inst_3959,inst_3960,null));
var inst_3962 = cljs.core.get_in.call(null,inst_3947,inst_3961);
var inst_3963 = (new cljs.core.List(null,e2e.dao.owner_acc,null,(1),null));
var inst_3964__$1 = (new cljs.core.List(null,inst_3962,inst_3963,(2),null));
var inst_3965__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_3964__$1);
var state_3991__$1 = (function (){var statearr_4126 = state_3991;
(statearr_4126[(11)] = inst_3964__$1);

(statearr_4126[(14)] = inst_3965__$1);

return statearr_4126;
})();
if(cljs.core.truth_(inst_3965__$1)){
var statearr_4127_4652 = state_3991__$1;
(statearr_4127_4652[(1)] = (66));

} else {
var statearr_4128_4653 = state_3991__$1;
(statearr_4128_4653[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (31))){
var inst_3798 = (state_3991[(26)]);
var inst_3818 = (state_3991[(2)]);
var _ = (function (){var statearr_4129 = state_3991;
(statearr_4129[(4)] = cljs.core.rest.call(null,(state_3991[(4)])));

return statearr_4129;
})();
var state_3991__$1 = (function (){var statearr_4130 = state_3991;
(statearr_4130[(31)] = inst_3818);

return statearr_4130;
})();
var statearr_4131_4654 = state_3991__$1;
(statearr_4131_4654[(2)] = inst_3798);

(statearr_4131_4654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_3992 === (63))){
var inst_3988 = (state_3991[(2)]);
var inst_3989 = done.call(null);
var state_3991__$1 = (function (){var statearr_4132 = state_3991;
(statearr_4132[(32)] = inst_3988);

return statearr_4132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3991__$1,inst_3989);
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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_4133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4133[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_4133[(1)] = (1));

return statearr_4133;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_3991){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_3991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e4134){var ex__18__auto__ = e4134;
var statearr_4135_4655 = state_3991;
(statearr_4135_4655[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_3991[(4)]))){
var statearr_4136_4656 = state_3991;
(statearr_4136_4656[(1)] = cljs.core.first.call(null,(state_3991[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4657 = state_3991;
state_3991 = G__4657;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_3991){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_3991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_4137 = f__20__auto__.call(null);
(statearr_4137[(6)] = c__19__auto__);

return statearr_4137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao3696.prototype.apply = (function (self__,args3699){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args3699)));
});

e2e.dao.t_e2e$dao3696.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_4429){
var state_val_4430 = (state_4429[(1)]);
if((state_val_4430 === (32))){
var inst_4221 = (state_4429[(7)]);
var inst_4276 = (state_4429[(8)]);
var inst_4277 = (state_4429[(9)]);
var _ = (function (){var statearr_4431 = state_4429;
(statearr_4431[(4)] = cljs.core.cons.call(null,(35),(state_4429[(4)])));

return statearr_4431;
})();
var inst_4271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4272 = [(0),"stake_contract"];
var inst_4273 = (new cljs.core.PersistentVector(null,(2),(5),inst_4271,inst_4272,null));
var inst_4274 = cljs.core.get_in.call(null,inst_4221,inst_4273);
var inst_4275 = (new cljs.core.List(null,e2e.dao.dao_acc,null,(1),null));
var inst_4276__$1 = (new cljs.core.List(null,inst_4274,inst_4275,(2),null));
var inst_4277__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4276__$1);
var state_4429__$1 = (function (){var statearr_4432 = state_4429;
(statearr_4432[(8)] = inst_4276__$1);

(statearr_4432[(9)] = inst_4277__$1);

return statearr_4432;
})();
if(cljs.core.truth_(inst_4277__$1)){
var statearr_4433_4658 = state_4429__$1;
(statearr_4433_4658[(1)] = (36));

} else {
var statearr_4434_4659 = state_4429__$1;
(statearr_4434_4659[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (64))){
var inst_4386 = (state_4429[(2)]);
var inst_4387 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4388 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_4389 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4388,inst_4386];
var inst_4390 = cljs.core.PersistentHashMap.fromArrays(inst_4387,inst_4389);
var inst_4391 = cljs.test.do_report.call(null,inst_4390);
var state_4429__$1 = state_4429;
var statearr_4435_4660 = state_4429__$1;
(statearr_4435_4660[(2)] = inst_4391);

(statearr_4435_4660[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (1))){
var state_4429__$1 = state_4429;
var statearr_4437_4661 = state_4429__$1;
(statearr_4437_4661[(2)] = null);

(statearr_4437_4661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (33))){
var inst_4300 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4438 = state_4429;
(statearr_4438[(10)] = inst_4300);

return statearr_4438;
})();
var statearr_4439_4662 = state_4429__$1;
(statearr_4439_4662[(2)] = null);

(statearr_4439_4662[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (65))){
var _ = (function (){var statearr_4440 = state_4429;
(statearr_4440[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4440;
})();
var state_4429__$1 = state_4429;
var ex4436 = (state_4429__$1[(2)]);
var statearr_4441_4663 = state_4429__$1;
(statearr_4441_4663[(5)] = ex4436);


var statearr_4442_4664 = state_4429__$1;
(statearr_4442_4664[(1)] = (64));

(statearr_4442_4664[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (2))){
var _ = (function (){var statearr_4443 = state_4429;
(statearr_4443[(4)] = cljs.core.cons.call(null,(9),(state_4429[(4)])));

return statearr_4443;
})();
var inst_4163 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"init",e2e.dao.dao_config);
var inst_4164 = cljs.core.async.interop.p__GT_c.call(null,inst_4163);
var state_4429__$1 = state_4429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4429__$1,(10),inst_4164);
} else {
if((state_val_4430 === (34))){
var inst_4260 = (state_4429[(2)]);
var inst_4261 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4262 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_4263 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4262,inst_4260];
var inst_4264 = cljs.core.PersistentHashMap.fromArrays(inst_4261,inst_4263);
var inst_4265 = cljs.test.do_report.call(null,inst_4264);
var state_4429__$1 = state_4429;
var statearr_4444_4665 = state_4429__$1;
(statearr_4444_4665[(2)] = inst_4265);

(statearr_4444_4665[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (66))){
var inst_4402 = (state_4429[(11)]);
var inst_4405 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4406 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_4407 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4402);
var inst_4408 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4406,inst_4407];
var inst_4409 = cljs.core.PersistentHashMap.fromArrays(inst_4405,inst_4408);
var inst_4410 = cljs.test.do_report.call(null,inst_4409);
var state_4429__$1 = state_4429;
var statearr_4446_4666 = state_4429__$1;
(statearr_4446_4666[(2)] = inst_4410);

(statearr_4446_4666[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (3))){
var inst_4207 = (state_4429[(2)]);
var inst_4208 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"config");
var inst_4209 = cljs.core.async.interop.p__GT_c.call(null,inst_4208);
var state_4429__$1 = (function (){var statearr_4447 = state_4429;
(statearr_4447[(12)] = inst_4207);

return statearr_4447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4429__$1,(21),inst_4209);
} else {
if((state_val_4430 === (35))){
var _ = (function (){var statearr_4448 = state_4429;
(statearr_4448[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4448;
})();
var state_4429__$1 = state_4429;
var ex4445 = (state_4429__$1[(2)]);
var statearr_4449_4667 = state_4429__$1;
(statearr_4449_4667[(5)] = ex4445);


var statearr_4450_4668 = state_4429__$1;
(statearr_4450_4668[(1)] = (34));

(statearr_4450_4668[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (67))){
var inst_4402 = (state_4429[(11)]);
var inst_4412 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4413 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"owner-acc","owner-acc",(390933086),null));
var inst_4414 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4415 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4416 = cljs.core.cons.call(null,inst_4415,inst_4402);
var inst_4417 = (new cljs.core.List(null,inst_4416,null,(1),null));
var inst_4418 = (new cljs.core.List(null,inst_4414,inst_4417,(2),null));
var inst_4419 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4413,inst_4418];
var inst_4420 = cljs.core.PersistentHashMap.fromArrays(inst_4412,inst_4419);
var inst_4421 = cljs.test.do_report.call(null,inst_4420);
var state_4429__$1 = state_4429;
var statearr_4451_4669 = state_4429__$1;
(statearr_4451_4669[(2)] = inst_4421);

(statearr_4451_4669[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (4))){
var inst_4138 = (state_4429[(2)]);
var inst_4139 = cljs.core.prn.call(null,"test failed with ",inst_4138);
var state_4429__$1 = (function (){var statearr_4452 = state_4429;
(statearr_4452[(13)] = inst_4139);

return statearr_4452;
})();
var statearr_4453_4670 = state_4429__$1;
(statearr_4453_4670[(2)] = null);

(statearr_4453_4670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (36))){
var inst_4276 = (state_4429[(8)]);
var inst_4279 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4280 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_4281 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4276);
var inst_4282 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4280,inst_4281];
var inst_4283 = cljs.core.PersistentHashMap.fromArrays(inst_4279,inst_4282);
var inst_4284 = cljs.test.do_report.call(null,inst_4283);
var state_4429__$1 = state_4429;
var statearr_4454_4671 = state_4429__$1;
(statearr_4454_4671[(2)] = inst_4284);

(statearr_4454_4671[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (68))){
var inst_4403 = (state_4429[(14)]);
var inst_4423 = (state_4429[(2)]);
var _ = (function (){var statearr_4455 = state_4429;
(statearr_4455[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4455;
})();
var state_4429__$1 = (function (){var statearr_4456 = state_4429;
(statearr_4456[(15)] = inst_4423);

return statearr_4456;
})();
var statearr_4457_4672 = state_4429__$1;
(statearr_4457_4672[(2)] = inst_4403);

(statearr_4457_4672[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (5))){
var _ = (function (){var statearr_4458 = state_4429;
(statearr_4458[(4)] = cljs.core.cons.call(null,(8),(state_4429[(4)])));

return statearr_4458;
})();
var inst_4151 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4152 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init"];
var inst_4153 = cljs.core.PersistentHashMap.fromArrays(inst_4151,inst_4152);
var inst_4154 = cljs.test.do_report.call(null,inst_4153);
var ___$1 = (function (){var statearr_4459 = state_4429;
(statearr_4459[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4459;
})();
var state_4429__$1 = state_4429;
var statearr_4460_4673 = state_4429__$1;
(statearr_4460_4673[(2)] = inst_4154);

(statearr_4460_4673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (37))){
var inst_4276 = (state_4429[(8)]);
var inst_4286 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4287 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"stake_contract"], null)),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null));
var inst_4288 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4289 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4290 = cljs.core.cons.call(null,inst_4289,inst_4276);
var inst_4291 = (new cljs.core.List(null,inst_4290,null,(1),null));
var inst_4292 = (new cljs.core.List(null,inst_4288,inst_4291,(2),null));
var inst_4293 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4287,inst_4292];
var inst_4294 = cljs.core.PersistentHashMap.fromArrays(inst_4286,inst_4293);
var inst_4295 = cljs.test.do_report.call(null,inst_4294);
var state_4429__$1 = state_4429;
var statearr_4461_4674 = state_4429__$1;
(statearr_4461_4674[(2)] = inst_4295);

(statearr_4461_4674[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (6))){
var inst_4157 = (state_4429[(2)]);
var state_4429__$1 = state_4429;
var statearr_4462_4675 = state_4429__$1;
(statearr_4462_4675[(2)] = inst_4157);

(statearr_4462_4675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (38))){
var inst_4277 = (state_4429[(9)]);
var inst_4297 = (state_4429[(2)]);
var _ = (function (){var statearr_4463 = state_4429;
(statearr_4463[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4463;
})();
var state_4429__$1 = (function (){var statearr_4464 = state_4429;
(statearr_4464[(16)] = inst_4297);

return statearr_4464;
})();
var statearr_4465_4676 = state_4429__$1;
(statearr_4465_4676[(2)] = inst_4277);

(statearr_4465_4676[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (7))){
var inst_4140 = (state_4429[(2)]);
var inst_4141 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4142 = null;
var inst_4143 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_4142,inst_4140];
var inst_4144 = cljs.core.PersistentHashMap.fromArrays(inst_4141,inst_4143);
var inst_4145 = cljs.test.do_report.call(null,inst_4144);
var state_4429__$1 = state_4429;
var statearr_4467_4677 = state_4429__$1;
(statearr_4467_4677[(2)] = inst_4145);

(statearr_4467_4677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (39))){
var _ = (function (){var statearr_4468 = state_4429;
(statearr_4468[(4)] = cljs.core.cons.call(null,(46),(state_4429[(4)])));

return statearr_4468;
})();
var inst_4326 = cljs.core.assoc.call(null,e2e.dao.dao_config,new cljs.core.Keyword(null,"stake_contract","stake_contract",(150036370)),e2e.dao.owner_acc);
var inst_4327 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"init",inst_4326);
var inst_4328 = cljs.core.async.interop.p__GT_c.call(null,inst_4327);
var state_4429__$1 = state_4429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4429__$1,(47),inst_4328);
} else {
if((state_val_4430 === (8))){
var _ = (function (){var statearr_4470 = state_4429;
(statearr_4470[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4470;
})();
var state_4429__$1 = state_4429;
var ex4466 = (state_4429__$1[(2)]);
var statearr_4471_4678 = state_4429__$1;
(statearr_4471_4678[(5)] = ex4466);


var statearr_4472_4679 = state_4429__$1;
(statearr_4472_4679[(1)] = (7));

(statearr_4472_4679[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (40))){
var inst_4371 = (state_4429[(2)]);
var inst_4372 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"config");
var inst_4373 = cljs.core.async.interop.p__GT_c.call(null,inst_4372);
var state_4429__$1 = (function (){var statearr_4473 = state_4429;
(statearr_4473[(17)] = inst_4371);

return statearr_4473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4429__$1,(58),inst_4373);
} else {
if((state_val_4430 === (9))){
var _ = (function (){var statearr_4474 = state_4429;
(statearr_4474[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4474;
})();
var state_4429__$1 = state_4429;
var ex4469 = (state_4429__$1[(2)]);
var statearr_4475_4680 = state_4429__$1;
(statearr_4475_4680[(5)] = ex4469);


if((ex4469 instanceof Error)){
var statearr_4476_4681 = state_4429__$1;
(statearr_4476_4681[(1)] = (4));

(statearr_4476_4681[(5)] = null);

} else {
throw ex4469;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (41))){
var inst_4301 = (state_4429[(2)]);
var inst_4302 = cljs.core.prn.call(null,"test failed with ",inst_4301);
var state_4429__$1 = (function (){var statearr_4477 = state_4429;
(statearr_4477[(18)] = inst_4302);

return statearr_4477;
})();
var statearr_4478_4682 = state_4429__$1;
(statearr_4478_4682[(2)] = null);

(statearr_4478_4682[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (10))){
var inst_4166 = (state_4429[(19)]);
var inst_4166__$1 = (state_4429[(2)]);
var inst_4167 = (inst_4166__$1 instanceof cljs.core.ExceptionInfo);
var inst_4168 = cljs.core.ex_data.call(null,inst_4166__$1);
var inst_4169 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4168);
var inst_4170 = cljs.core._EQ_.call(null,inst_4169,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4171 = ((inst_4167) && (inst_4170));
var state_4429__$1 = (function (){var statearr_4479 = state_4429;
(statearr_4479[(19)] = inst_4166__$1);

return statearr_4479;
})();
if(cljs.core.truth_(inst_4171)){
var statearr_4480_4683 = state_4429__$1;
(statearr_4480_4683[(1)] = (11));

} else {
var statearr_4481_4684 = state_4429__$1;
(statearr_4481_4684[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (42))){
var _ = (function (){var statearr_4482 = state_4429;
(statearr_4482[(4)] = cljs.core.cons.call(null,(45),(state_4429[(4)])));

return statearr_4482;
})();
var inst_4314 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002))];
var inst_4315 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update"];
var inst_4316 = cljs.core.PersistentHashMap.fromArrays(inst_4314,inst_4315);
var inst_4317 = cljs.test.do_report.call(null,inst_4316);
var ___$1 = (function (){var statearr_4483 = state_4429;
(statearr_4483[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4483;
})();
var state_4429__$1 = state_4429;
var statearr_4484_4685 = state_4429__$1;
(statearr_4484_4685[(2)] = inst_4317);

(statearr_4484_4685[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (11))){
var inst_4166 = (state_4429[(19)]);
var inst_4173 = (function(){throw inst_4166})();
var state_4429__$1 = state_4429;
var statearr_4485_4686 = state_4429__$1;
(statearr_4485_4686[(2)] = inst_4173);

(statearr_4485_4686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (43))){
var inst_4320 = (state_4429[(2)]);
var state_4429__$1 = state_4429;
var statearr_4486_4687 = state_4429__$1;
(statearr_4486_4687[(2)] = inst_4320);

(statearr_4486_4687[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (12))){
var inst_4166 = (state_4429[(19)]);
var state_4429__$1 = state_4429;
var statearr_4487_4688 = state_4429__$1;
(statearr_4487_4688[(2)] = inst_4166);

(statearr_4487_4688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (44))){
var inst_4303 = (state_4429[(2)]);
var inst_4304 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4305 = null;
var inst_4306 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_4305,inst_4303];
var inst_4307 = cljs.core.PersistentHashMap.fromArrays(inst_4304,inst_4306);
var inst_4308 = cljs.test.do_report.call(null,inst_4307);
var state_4429__$1 = state_4429;
var statearr_4489_4689 = state_4429__$1;
(statearr_4489_4689[(2)] = inst_4308);

(statearr_4489_4689[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (13))){
var inst_4176 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4490 = state_4429;
(statearr_4490[(20)] = inst_4176);

return statearr_4490;
})();
var statearr_4491_4690 = state_4429__$1;
(statearr_4491_4690[(2)] = null);

(statearr_4491_4690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (45))){
var _ = (function (){var statearr_4493 = state_4429;
(statearr_4493[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4493;
})();
var state_4429__$1 = state_4429;
var ex4488 = (state_4429__$1[(2)]);
var statearr_4494_4691 = state_4429__$1;
(statearr_4494_4691[(5)] = ex4488);


var statearr_4495_4692 = state_4429__$1;
(statearr_4495_4692[(1)] = (44));

(statearr_4495_4692[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (14))){
var _ = (function (){var statearr_4496 = state_4429;
(statearr_4496[(4)] = cljs.core.cons.call(null,(17),(state_4429[(4)])));

return statearr_4496;
})();
var state_4429__$1 = state_4429;
var statearr_4497_4693 = state_4429__$1;
(statearr_4497_4693[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (46))){
var _ = (function (){var statearr_4499 = state_4429;
(statearr_4499[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4499;
})();
var state_4429__$1 = state_4429;
var ex4492 = (state_4429__$1[(2)]);
var statearr_4500_4694 = state_4429__$1;
(statearr_4500_4694[(5)] = ex4492);


if((ex4492 instanceof Error)){
var statearr_4501_4695 = state_4429__$1;
(statearr_4501_4695[(1)] = (41));

(statearr_4501_4695[(5)] = null);

} else {
throw ex4492;

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (15))){
var inst_4204 = (state_4429[(2)]);
var _ = (function (){var statearr_4502 = state_4429;
(statearr_4502[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4502;
})();
var state_4429__$1 = state_4429;
var statearr_4503_4696 = state_4429__$1;
(statearr_4503_4696[(2)] = inst_4204);

(statearr_4503_4696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (47))){
var inst_4330 = (state_4429[(21)]);
var inst_4330__$1 = (state_4429[(2)]);
var inst_4331 = (inst_4330__$1 instanceof cljs.core.ExceptionInfo);
var inst_4332 = cljs.core.ex_data.call(null,inst_4330__$1);
var inst_4333 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4332);
var inst_4334 = cljs.core._EQ_.call(null,inst_4333,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4335 = ((inst_4331) && (inst_4334));
var state_4429__$1 = (function (){var statearr_4504 = state_4429;
(statearr_4504[(21)] = inst_4330__$1);

return statearr_4504;
})();
if(cljs.core.truth_(inst_4335)){
var statearr_4505_4697 = state_4429__$1;
(statearr_4505_4697[(1)] = (48));

} else {
var statearr_4506_4698 = state_4429__$1;
(statearr_4506_4698[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (16))){
var inst_4177 = (state_4429[(2)]);
var inst_4178 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4179 = true;
var inst_4180 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can init",inst_4179,inst_4177];
var inst_4181 = cljs.core.PersistentHashMap.fromArrays(inst_4178,inst_4180);
var inst_4182 = cljs.test.do_report.call(null,inst_4181);
var state_4429__$1 = state_4429;
var statearr_4508_4699 = state_4429__$1;
(statearr_4508_4699[(2)] = inst_4182);

(statearr_4508_4699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (48))){
var inst_4330 = (state_4429[(21)]);
var inst_4337 = (function(){throw inst_4330})();
var state_4429__$1 = state_4429;
var statearr_4509_4700 = state_4429__$1;
(statearr_4509_4700[(2)] = inst_4337);

(statearr_4509_4700[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (17))){
var _ = (function (){var statearr_4510 = state_4429;
(statearr_4510[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4510;
})();
var state_4429__$1 = state_4429;
var ex4507 = (state_4429__$1[(2)]);
var statearr_4511_4701 = state_4429__$1;
(statearr_4511_4701[(5)] = ex4507);


var statearr_4512_4702 = state_4429__$1;
(statearr_4512_4702[(1)] = (16));

(statearr_4512_4702[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (49))){
var inst_4330 = (state_4429[(21)]);
var state_4429__$1 = state_4429;
var statearr_4513_4703 = state_4429__$1;
(statearr_4513_4703[(2)] = inst_4330);

(statearr_4513_4703[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (18))){
var inst_4189 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4190 = true;
var inst_4191 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can init",inst_4190,true];
var inst_4192 = cljs.core.PersistentHashMap.fromArrays(inst_4189,inst_4191);
var inst_4193 = cljs.test.do_report.call(null,inst_4192);
var state_4429__$1 = state_4429;
var statearr_4514_4704 = state_4429__$1;
(statearr_4514_4704[(2)] = inst_4193);

(statearr_4514_4704[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (50))){
var inst_4340 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4515 = state_4429;
(statearr_4515[(22)] = inst_4340);

return statearr_4515;
})();
var statearr_4516_4705 = state_4429__$1;
(statearr_4516_4705[(2)] = null);

(statearr_4516_4705[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (19))){
var inst_4195 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4196 = true;
var inst_4197 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can init",inst_4196,true];
var inst_4198 = cljs.core.PersistentHashMap.fromArrays(inst_4195,inst_4197);
var inst_4199 = cljs.test.do_report.call(null,inst_4198);
var state_4429__$1 = state_4429;
var statearr_4517_4706 = state_4429__$1;
(statearr_4517_4706[(2)] = inst_4199);

(statearr_4517_4706[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (51))){
var _ = (function (){var statearr_4518 = state_4429;
(statearr_4518[(4)] = cljs.core.cons.call(null,(54),(state_4429[(4)])));

return statearr_4518;
})();
var state_4429__$1 = state_4429;
var statearr_4519_4707 = state_4429__$1;
(statearr_4519_4707[(1)] = (55));



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (20))){
var inst_4201 = (state_4429[(2)]);
var _ = (function (){var statearr_4521 = state_4429;
(statearr_4521[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4521;
})();
var state_4429__$1 = (function (){var statearr_4522 = state_4429;
(statearr_4522[(23)] = inst_4201);

return statearr_4522;
})();
var statearr_4523_4708 = state_4429__$1;
(statearr_4523_4708[(2)] = true);

(statearr_4523_4708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (52))){
var inst_4368 = (state_4429[(2)]);
var _ = (function (){var statearr_4524 = state_4429;
(statearr_4524[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4524;
})();
var state_4429__$1 = state_4429;
var statearr_4525_4709 = state_4429__$1;
(statearr_4525_4709[(2)] = inst_4368);

(statearr_4525_4709[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (21))){
var inst_4211 = (state_4429[(24)]);
var inst_4211__$1 = (state_4429[(2)]);
var inst_4212 = (inst_4211__$1 instanceof cljs.core.ExceptionInfo);
var inst_4213 = cljs.core.ex_data.call(null,inst_4211__$1);
var inst_4214 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4213);
var inst_4215 = cljs.core._EQ_.call(null,inst_4214,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4216 = ((inst_4212) && (inst_4215));
var state_4429__$1 = (function (){var statearr_4526 = state_4429;
(statearr_4526[(24)] = inst_4211__$1);

return statearr_4526;
})();
if(cljs.core.truth_(inst_4216)){
var statearr_4527_4710 = state_4429__$1;
(statearr_4527_4710[(1)] = (22));

} else {
var statearr_4528_4711 = state_4429__$1;
(statearr_4528_4711[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (53))){
var inst_4341 = (state_4429[(2)]);
var inst_4342 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4343 = true;
var inst_4344 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"can update",inst_4343,inst_4341];
var inst_4345 = cljs.core.PersistentHashMap.fromArrays(inst_4342,inst_4344);
var inst_4346 = cljs.test.do_report.call(null,inst_4345);
var state_4429__$1 = state_4429;
var statearr_4530_4712 = state_4429__$1;
(statearr_4530_4712[(2)] = inst_4346);

(statearr_4530_4712[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (22))){
var inst_4211 = (state_4429[(24)]);
var inst_4218 = (function(){throw inst_4211})();
var state_4429__$1 = state_4429;
var statearr_4531_4713 = state_4429__$1;
(statearr_4531_4713[(2)] = inst_4218);

(statearr_4531_4713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (54))){
var _ = (function (){var statearr_4532 = state_4429;
(statearr_4532[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4532;
})();
var state_4429__$1 = state_4429;
var ex4529 = (state_4429__$1[(2)]);
var statearr_4533_4714 = state_4429__$1;
(statearr_4533_4714[(5)] = ex4529);


var statearr_4534_4715 = state_4429__$1;
(statearr_4534_4715[(1)] = (53));

(statearr_4534_4715[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (23))){
var inst_4211 = (state_4429[(24)]);
var state_4429__$1 = state_4429;
var statearr_4535_4716 = state_4429__$1;
(statearr_4535_4716[(2)] = inst_4211);

(statearr_4535_4716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (55))){
var inst_4353 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4354 = true;
var inst_4355 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"can update",inst_4354,true];
var inst_4356 = cljs.core.PersistentHashMap.fromArrays(inst_4353,inst_4355);
var inst_4357 = cljs.test.do_report.call(null,inst_4356);
var state_4429__$1 = state_4429;
var statearr_4536_4717 = state_4429__$1;
(statearr_4536_4717[(2)] = inst_4357);

(statearr_4536_4717[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (24))){
var inst_4221 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4537 = state_4429;
(statearr_4537[(7)] = inst_4221);

return statearr_4537;
})();
var statearr_4538_4718 = state_4429__$1;
(statearr_4538_4718[(2)] = null);

(statearr_4538_4718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (56))){
var inst_4359 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4360 = true;
var inst_4361 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"can update",inst_4360,true];
var inst_4362 = cljs.core.PersistentHashMap.fromArrays(inst_4359,inst_4361);
var inst_4363 = cljs.test.do_report.call(null,inst_4362);
var state_4429__$1 = state_4429;
var statearr_4539_4719 = state_4429__$1;
(statearr_4539_4719[(2)] = inst_4363);

(statearr_4539_4719[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (25))){
var inst_4221 = (state_4429[(7)]);
var inst_4235 = (state_4429[(25)]);
var inst_4236 = (state_4429[(26)]);
var _ = (function (){var statearr_4540 = state_4429;
(statearr_4540[(4)] = cljs.core.cons.call(null,(28),(state_4429[(4)])));

return statearr_4540;
})();
var inst_4233 = cljs.core.count.call(null,inst_4221);
var inst_4234 = (new cljs.core.List(null,(1),null,(1),null));
var inst_4235__$1 = (new cljs.core.List(null,inst_4233,inst_4234,(2),null));
var inst_4236__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4235__$1);
var state_4429__$1 = (function (){var statearr_4541 = state_4429;
(statearr_4541[(25)] = inst_4235__$1);

(statearr_4541[(26)] = inst_4236__$1);

return statearr_4541;
})();
if(cljs.core.truth_(inst_4236__$1)){
var statearr_4542_4720 = state_4429__$1;
(statearr_4542_4720[(1)] = (29));

} else {
var statearr_4543_4721 = state_4429__$1;
(statearr_4543_4721[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (57))){
var inst_4365 = (state_4429[(2)]);
var _ = (function (){var statearr_4544 = state_4429;
(statearr_4544[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4544;
})();
var state_4429__$1 = (function (){var statearr_4545 = state_4429;
(statearr_4545[(27)] = inst_4365);

return statearr_4545;
})();
var statearr_4546_4722 = state_4429__$1;
(statearr_4546_4722[(2)] = true);

(statearr_4546_4722[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (26))){
var inst_4259 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4547 = state_4429;
(statearr_4547[(28)] = inst_4259);

return statearr_4547;
})();
var statearr_4548_4723 = state_4429__$1;
(statearr_4548_4723[(2)] = null);

(statearr_4548_4723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (58))){
var inst_4375 = (state_4429[(29)]);
var inst_4375__$1 = (state_4429[(2)]);
var inst_4376 = (inst_4375__$1 instanceof cljs.core.ExceptionInfo);
var inst_4377 = cljs.core.ex_data.call(null,inst_4375__$1);
var inst_4378 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4377);
var inst_4379 = cljs.core._EQ_.call(null,inst_4378,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4380 = ((inst_4376) && (inst_4379));
var state_4429__$1 = (function (){var statearr_4549 = state_4429;
(statearr_4549[(29)] = inst_4375__$1);

return statearr_4549;
})();
if(cljs.core.truth_(inst_4380)){
var statearr_4550_4724 = state_4429__$1;
(statearr_4550_4724[(1)] = (59));

} else {
var statearr_4551_4725 = state_4429__$1;
(statearr_4551_4725[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (27))){
var inst_4222 = (state_4429[(2)]);
var inst_4223 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4224 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4225 = [new cljs.core.Keyword(null,"error","error",(-978969032)),null,inst_4224,inst_4222];
var inst_4226 = cljs.core.PersistentHashMap.fromArrays(inst_4223,inst_4225);
var inst_4227 = cljs.test.do_report.call(null,inst_4226);
var state_4429__$1 = state_4429;
var statearr_4553_4726 = state_4429__$1;
(statearr_4553_4726[(2)] = inst_4227);

(statearr_4553_4726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (59))){
var inst_4375 = (state_4429[(29)]);
var inst_4382 = (function(){throw inst_4375})();
var state_4429__$1 = state_4429;
var statearr_4554_4727 = state_4429__$1;
(statearr_4554_4727[(2)] = inst_4382);

(statearr_4554_4727[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (28))){
var _ = (function (){var statearr_4555 = state_4429;
(statearr_4555[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4555;
})();
var state_4429__$1 = state_4429;
var ex4552 = (state_4429__$1[(2)]);
var statearr_4556_4728 = state_4429__$1;
(statearr_4556_4728[(5)] = ex4552);


var statearr_4557_4729 = state_4429__$1;
(statearr_4557_4729[(1)] = (27));

(statearr_4557_4729[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (60))){
var inst_4375 = (state_4429[(29)]);
var state_4429__$1 = state_4429;
var statearr_4558_4730 = state_4429__$1;
(statearr_4558_4730[(2)] = inst_4375);

(statearr_4558_4730[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (29))){
var inst_4235 = (state_4429[(25)]);
var inst_4238 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4239 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4240 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4235);
var inst_4241 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),null,inst_4239,inst_4240];
var inst_4242 = cljs.core.PersistentHashMap.fromArrays(inst_4238,inst_4241);
var inst_4243 = cljs.test.do_report.call(null,inst_4242);
var state_4429__$1 = state_4429;
var statearr_4559_4731 = state_4429__$1;
(statearr_4559_4731[(2)] = inst_4243);

(statearr_4559_4731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (61))){
var inst_4385 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4560 = state_4429;
(statearr_4560[(30)] = inst_4385);

return statearr_4560;
})();
var statearr_4561_4732 = state_4429__$1;
(statearr_4561_4732[(2)] = null);

(statearr_4561_4732[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (30))){
var inst_4235 = (state_4429[(25)]);
var inst_4245 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4246 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4247 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4248 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4249 = cljs.core.cons.call(null,inst_4248,inst_4235);
var inst_4250 = (new cljs.core.List(null,inst_4249,null,(1),null));
var inst_4251 = (new cljs.core.List(null,inst_4247,inst_4250,(2),null));
var inst_4252 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),null,inst_4246,inst_4251];
var inst_4253 = cljs.core.PersistentHashMap.fromArrays(inst_4245,inst_4252);
var inst_4254 = cljs.test.do_report.call(null,inst_4253);
var state_4429__$1 = state_4429;
var statearr_4562_4733 = state_4429__$1;
(statearr_4562_4733[(2)] = inst_4254);

(statearr_4562_4733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (62))){
var inst_4385 = (state_4429[(30)]);
var inst_4402 = (state_4429[(11)]);
var inst_4403 = (state_4429[(14)]);
var _ = (function (){var statearr_4563 = state_4429;
(statearr_4563[(4)] = cljs.core.cons.call(null,(65),(state_4429[(4)])));

return statearr_4563;
})();
var inst_4397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4398 = [(0),"stake_contract"];
var inst_4399 = (new cljs.core.PersistentVector(null,(2),(5),inst_4397,inst_4398,null));
var inst_4400 = cljs.core.get_in.call(null,inst_4385,inst_4399);
var inst_4401 = (new cljs.core.List(null,e2e.dao.owner_acc,null,(1),null));
var inst_4402__$1 = (new cljs.core.List(null,inst_4400,inst_4401,(2),null));
var inst_4403__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4402__$1);
var state_4429__$1 = (function (){var statearr_4564 = state_4429;
(statearr_4564[(11)] = inst_4402__$1);

(statearr_4564[(14)] = inst_4403__$1);

return statearr_4564;
})();
if(cljs.core.truth_(inst_4403__$1)){
var statearr_4565_4734 = state_4429__$1;
(statearr_4565_4734[(1)] = (66));

} else {
var statearr_4566_4735 = state_4429__$1;
(statearr_4566_4735[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (31))){
var inst_4236 = (state_4429[(26)]);
var inst_4256 = (state_4429[(2)]);
var _ = (function (){var statearr_4567 = state_4429;
(statearr_4567[(4)] = cljs.core.rest.call(null,(state_4429[(4)])));

return statearr_4567;
})();
var state_4429__$1 = (function (){var statearr_4568 = state_4429;
(statearr_4568[(31)] = inst_4256);

return statearr_4568;
})();
var statearr_4569_4736 = state_4429__$1;
(statearr_4569_4736[(2)] = inst_4236);

(statearr_4569_4736[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_4430 === (63))){
var inst_4426 = (state_4429[(2)]);
var inst_4427 = done.call(null);
var state_4429__$1 = (function (){var statearr_4570 = state_4429;
(statearr_4570[(32)] = inst_4426);

return statearr_4570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4429__$1,inst_4427);
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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_4571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4571[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_4571[(1)] = (1));

return statearr_4571;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_4429){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_4429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e4572){var ex__18__auto__ = e4572;
var statearr_4573_4737 = state_4429;
(statearr_4573_4737[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_4429[(4)]))){
var statearr_4574_4738 = state_4429;
(statearr_4574_4738[(1)] = cljs.core.first.call(null,(state_4429[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__4739 = state_4429;
state_4429 = G__4739;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_4429){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_4429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_4575 = f__20__auto__.call(null);
(statearr_4575[(6)] = c__19__auto__);

return statearr_4575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao3696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta3697","meta3697",(903534206),null)], null);
});

e2e.dao.t_e2e$dao3696.cljs$lang$type = true;

e2e.dao.t_e2e$dao3696.cljs$lang$ctorStr = "e2e.dao/t_e2e$dao3696";

e2e.dao.t_e2e$dao3696.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.dao/t_e2e$dao3696");
});

/**
 * Positional factory function for e2e.dao/t_e2e$dao3696.
 */
e2e.dao.__GT_t_e2e$dao3696 = (function e2e$dao$__GT_t_e2e$dao3696(meta3697){
return (new e2e.dao.t_e2e$dao3696(meta3697));
});

}

return (new e2e.dao.t_e2e$dao3696(null));
});

e2e.dao.init.cljs$lang$var = new cljs.core.Var(function(){return e2e.dao.init;},new cljs.core.Symbol("e2e.dao","init","e2e.dao/init",(-1087877975),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/dao.cljs",(14),(1),(51),(51),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.init)?e2e.dao.init.cljs$lang$test:null)]));
e2e.dao.new_member_terms = (function e2e$dao$new_member_terms(){
return cljs.test.test_var.call(null,e2e.dao.new_member_terms.cljs$lang$var);
});
e2e.dao.new_member_terms.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.dao !== 'undefined') && (typeof e2e.dao.t_e2e$dao4740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.dao.t_e2e$dao4740 = (function (meta4741){
this.meta4741 = meta4741;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.dao.t_e2e$dao4740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4742,meta4741__$1){
var self__ = this;
var _4742__$1 = this;
return (new e2e.dao.t_e2e$dao4740(meta4741__$1));
});

e2e.dao.t_e2e$dao4740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4742){
var self__ = this;
var _4742__$1 = this;
return self__.meta4741;
});

e2e.dao.t_e2e$dao4740.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.dao.t_e2e$dao4740.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_5040){
var state_val_5041 = (state_5040[(1)]);
if((state_val_5041 === (32))){
var inst_4887 = (state_5040[(7)]);
var inst_4887__$1 = (state_5040[(2)]);
var inst_4888 = (inst_4887__$1 instanceof cljs.core.ExceptionInfo);
var inst_4889 = cljs.core.ex_data.call(null,inst_4887__$1);
var inst_4890 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4889);
var inst_4891 = cljs.core._EQ_.call(null,inst_4890,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4892 = ((inst_4888) && (inst_4891));
var state_5040__$1 = (function (){var statearr_5042 = state_5040;
(statearr_5042[(7)] = inst_4887__$1);

return statearr_5042;
})();
if(cljs.core.truth_(inst_4892)){
var statearr_5043_5586 = state_5040__$1;
(statearr_5043_5586[(1)] = (33));

} else {
var statearr_5044_5587 = state_5040__$1;
(statearr_5044_5587[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (64))){
var inst_5013 = (state_5040[(8)]);
var inst_5023 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5024 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5025 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5026 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5027 = cljs.core.cons.call(null,inst_5026,inst_5013);
var inst_5028 = (new cljs.core.List(null,inst_5027,null,(1),null));
var inst_5029 = (new cljs.core.List(null,inst_5025,inst_5028,(2),null));
var inst_5030 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"wrong term hash",inst_5024,inst_5029];
var inst_5031 = cljs.core.PersistentHashMap.fromArrays(inst_5023,inst_5030);
var inst_5032 = cljs.test.do_report.call(null,inst_5031);
var state_5040__$1 = state_5040;
var statearr_5045_5588 = state_5040__$1;
(statearr_5045_5588[(2)] = inst_5032);

(statearr_5045_5588[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (1))){
var inst_4744 = cljs.core.first.call(null,e2e.dao.terms);
var inst_4745 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_4744);
var inst_4746 = cljs.core.async.interop.p__GT_c.call(null,inst_4745);
var state_5040__$1 = state_5040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(2),inst_4746);
} else {
if((state_val_5041 === (33))){
var inst_4887 = (state_5040[(7)]);
var inst_4894 = (function(){throw inst_4887})();
var state_5040__$1 = state_5040;
var statearr_5046_5589 = state_5040__$1;
(statearr_5046_5589[(2)] = inst_4894);

(statearr_5046_5589[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (65))){
var inst_5014 = (state_5040[(9)]);
var inst_5034 = (state_5040[(2)]);
var _ = (function (){var statearr_5047 = state_5040;
(statearr_5047[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5047;
})();
var state_5040__$1 = (function (){var statearr_5048 = state_5040;
(statearr_5048[(10)] = inst_5034);

return statearr_5048;
})();
var statearr_5049_5590 = state_5040__$1;
(statearr_5049_5590[(2)] = inst_5014);

(statearr_5049_5590[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (2))){
var inst_4748 = (state_5040[(11)]);
var inst_4748__$1 = (state_5040[(2)]);
var inst_4749 = (inst_4748__$1 instanceof cljs.core.ExceptionInfo);
var inst_4750 = cljs.core.ex_data.call(null,inst_4748__$1);
var inst_4751 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4750);
var inst_4752 = cljs.core._EQ_.call(null,inst_4751,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4753 = ((inst_4749) && (inst_4752));
var state_5040__$1 = (function (){var statearr_5050 = state_5040;
(statearr_5050[(11)] = inst_4748__$1);

return statearr_5050;
})();
if(cljs.core.truth_(inst_4753)){
var statearr_5051_5591 = state_5040__$1;
(statearr_5051_5591[(1)] = (3));

} else {
var statearr_5052_5592 = state_5040__$1;
(statearr_5052_5592[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (34))){
var inst_4887 = (state_5040[(7)]);
var state_5040__$1 = state_5040;
var statearr_5053_5593 = state_5040__$1;
(statearr_5053_5593[(2)] = inst_4887);

(statearr_5053_5593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (3))){
var inst_4748 = (state_5040[(11)]);
var inst_4755 = (function(){throw inst_4748})();
var state_5040__$1 = state_5040;
var statearr_5054_5594 = state_5040__$1;
(statearr_5054_5594[(2)] = inst_4755);

(statearr_5054_5594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (35))){
var inst_4897 = (state_5040[(2)]);
var inst_4898 = cljs.core.second.call(null,e2e.dao.terms);
var inst_4899 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_4898);
var inst_4900 = cljs.core.async.interop.p__GT_c.call(null,inst_4899);
var state_5040__$1 = (function (){var statearr_5055 = state_5040;
(statearr_5055[(12)] = inst_4897);

return statearr_5055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(36),inst_4900);
} else {
if((state_val_5041 === (4))){
var inst_4748 = (state_5040[(11)]);
var state_5040__$1 = state_5040;
var statearr_5056_5595 = state_5040__$1;
(statearr_5056_5595[(2)] = inst_4748);

(statearr_5056_5595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (36))){
var inst_4902 = (state_5040[(13)]);
var inst_4902__$1 = (state_5040[(2)]);
var inst_4903 = (inst_4902__$1 instanceof cljs.core.ExceptionInfo);
var inst_4904 = cljs.core.ex_data.call(null,inst_4902__$1);
var inst_4905 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4904);
var inst_4906 = cljs.core._EQ_.call(null,inst_4905,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4907 = ((inst_4903) && (inst_4906));
var state_5040__$1 = (function (){var statearr_5057 = state_5040;
(statearr_5057[(13)] = inst_4902__$1);

return statearr_5057;
})();
if(cljs.core.truth_(inst_4907)){
var statearr_5058_5596 = state_5040__$1;
(statearr_5058_5596[(1)] = (37));

} else {
var statearr_5059_5597 = state_5040__$1;
(statearr_5059_5597[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (5))){
var inst_4758 = (state_5040[(2)]);
var inst_4759 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"memberterms");
var inst_4760 = cljs.core.async.interop.p__GT_c.call(null,inst_4759);
var state_5040__$1 = (function (){var statearr_5060 = state_5040;
(statearr_5060[(14)] = inst_4758);

return statearr_5060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(6),inst_4760);
} else {
if((state_val_5041 === (37))){
var inst_4902 = (state_5040[(13)]);
var inst_4909 = (function(){throw inst_4902})();
var state_5040__$1 = state_5040;
var statearr_5061_5598 = state_5040__$1;
(statearr_5061_5598[(2)] = inst_4909);

(statearr_5061_5598[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (6))){
var inst_4762 = (state_5040[(15)]);
var inst_4762__$1 = (state_5040[(2)]);
var inst_4763 = (inst_4762__$1 instanceof cljs.core.ExceptionInfo);
var inst_4764 = cljs.core.ex_data.call(null,inst_4762__$1);
var inst_4765 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4764);
var inst_4766 = cljs.core._EQ_.call(null,inst_4765,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4767 = ((inst_4763) && (inst_4766));
var state_5040__$1 = (function (){var statearr_5062 = state_5040;
(statearr_5062[(15)] = inst_4762__$1);

return statearr_5062;
})();
if(cljs.core.truth_(inst_4767)){
var statearr_5063_5599 = state_5040__$1;
(statearr_5063_5599[(1)] = (7));

} else {
var statearr_5064_5600 = state_5040__$1;
(statearr_5064_5600[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (38))){
var inst_4902 = (state_5040[(13)]);
var state_5040__$1 = state_5040;
var statearr_5065_5601 = state_5040__$1;
(statearr_5065_5601[(2)] = inst_4902);

(statearr_5065_5601[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (7))){
var inst_4762 = (state_5040[(15)]);
var inst_4769 = (function(){throw inst_4762})();
var state_5040__$1 = state_5040;
var statearr_5066_5602 = state_5040__$1;
(statearr_5066_5602[(2)] = inst_4769);

(statearr_5066_5602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (39))){
var inst_4912 = (state_5040[(2)]);
var inst_4913 = cljs.core.first.call(null,e2e.dao.terms);
var inst_4914 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_4913);
var inst_4915 = cljs.core.async.interop.p__GT_c.call(null,inst_4914);
var state_5040__$1 = (function (){var statearr_5067 = state_5040;
(statearr_5067[(16)] = inst_4912);

return statearr_5067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(40),inst_4915);
} else {
if((state_val_5041 === (8))){
var inst_4762 = (state_5040[(15)]);
var state_5040__$1 = state_5040;
var statearr_5068_5603 = state_5040__$1;
(statearr_5068_5603[(2)] = inst_4762);

(statearr_5068_5603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (40))){
var inst_4917 = (state_5040[(17)]);
var inst_4917__$1 = (state_5040[(2)]);
var inst_4918 = (inst_4917__$1 instanceof cljs.core.ExceptionInfo);
var inst_4919 = cljs.core.ex_data.call(null,inst_4917__$1);
var inst_4920 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4919);
var inst_4921 = cljs.core._EQ_.call(null,inst_4920,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4922 = ((inst_4918) && (inst_4921));
var state_5040__$1 = (function (){var statearr_5069 = state_5040;
(statearr_5069[(17)] = inst_4917__$1);

return statearr_5069;
})();
if(cljs.core.truth_(inst_4922)){
var statearr_5070_5604 = state_5040__$1;
(statearr_5070_5604[(1)] = (41));

} else {
var statearr_5071_5605 = state_5040__$1;
(statearr_5071_5605[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (9))){
var inst_4772 = (state_5040[(2)]);
var state_5040__$1 = (function (){var statearr_5072 = state_5040;
(statearr_5072[(18)] = inst_4772);

return statearr_5072;
})();
var statearr_5073_5606 = state_5040__$1;
(statearr_5073_5606[(2)] = null);

(statearr_5073_5606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (41))){
var inst_4917 = (state_5040[(17)]);
var inst_4924 = (function(){throw inst_4917})();
var state_5040__$1 = state_5040;
var statearr_5074_5607 = state_5040__$1;
(statearr_5074_5607[(2)] = inst_4924);

(statearr_5074_5607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (10))){
var inst_4772 = (state_5040[(18)]);
var inst_4786 = (state_5040[(19)]);
var inst_4787 = (state_5040[(20)]);
var _ = (function (){var statearr_5075 = state_5040;
(statearr_5075[(4)] = cljs.core.cons.call(null,(13),(state_5040[(4)])));

return statearr_5075;
})();
var inst_4784 = cljs.core.count.call(null,inst_4772);
var inst_4785 = (new cljs.core.List(null,(1),null,(1),null));
var inst_4786__$1 = (new cljs.core.List(null,inst_4784,inst_4785,(2),null));
var inst_4787__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4786__$1);
var state_5040__$1 = (function (){var statearr_5076 = state_5040;
(statearr_5076[(19)] = inst_4786__$1);

(statearr_5076[(20)] = inst_4787__$1);

return statearr_5076;
})();
if(cljs.core.truth_(inst_4787__$1)){
var statearr_5077_5608 = state_5040__$1;
(statearr_5077_5608[(1)] = (14));

} else {
var statearr_5078_5609 = state_5040__$1;
(statearr_5078_5609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (42))){
var inst_4917 = (state_5040[(17)]);
var state_5040__$1 = state_5040;
var statearr_5079_5610 = state_5040__$1;
(statearr_5079_5610[(2)] = inst_4917);

(statearr_5079_5610[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (11))){
var inst_4810 = (state_5040[(2)]);
var state_5040__$1 = (function (){var statearr_5080 = state_5040;
(statearr_5080[(21)] = inst_4810);

return statearr_5080;
})();
var statearr_5081_5611 = state_5040__$1;
(statearr_5081_5611[(2)] = null);

(statearr_5081_5611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (43))){
var inst_4927 = (state_5040[(2)]);
var inst_4928 = e2e.util.wait.call(null,(500));
var inst_4929 = cljs.core.async.interop.p__GT_c.call(null,inst_4928);
var state_5040__$1 = (function (){var statearr_5082 = state_5040;
(statearr_5082[(22)] = inst_4927);

return statearr_5082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(44),inst_4929);
} else {
if((state_val_5041 === (12))){
var inst_4773 = (state_5040[(2)]);
var inst_4774 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4775 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4776 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there should be 1 terms",inst_4775,inst_4773];
var inst_4777 = cljs.core.PersistentHashMap.fromArrays(inst_4774,inst_4776);
var inst_4778 = cljs.test.do_report.call(null,inst_4777);
var state_5040__$1 = state_5040;
var statearr_5084_5612 = state_5040__$1;
(statearr_5084_5612[(2)] = inst_4778);

(statearr_5084_5612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (44))){
var inst_4931 = (state_5040[(23)]);
var inst_4931__$1 = (state_5040[(2)]);
var inst_4932 = (inst_4931__$1 instanceof cljs.core.ExceptionInfo);
var inst_4933 = cljs.core.ex_data.call(null,inst_4931__$1);
var inst_4934 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4933);
var inst_4935 = cljs.core._EQ_.call(null,inst_4934,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4936 = ((inst_4932) && (inst_4935));
var state_5040__$1 = (function (){var statearr_5085 = state_5040;
(statearr_5085[(23)] = inst_4931__$1);

return statearr_5085;
})();
if(cljs.core.truth_(inst_4936)){
var statearr_5086_5613 = state_5040__$1;
(statearr_5086_5613[(1)] = (45));

} else {
var statearr_5087_5614 = state_5040__$1;
(statearr_5087_5614[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (13))){
var _ = (function (){var statearr_5088 = state_5040;
(statearr_5088[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5088;
})();
var state_5040__$1 = state_5040;
var ex5083 = (state_5040__$1[(2)]);
var statearr_5089_5615 = state_5040__$1;
(statearr_5089_5615[(5)] = ex5083);


var statearr_5090_5616 = state_5040__$1;
(statearr_5090_5616[(1)] = (12));

(statearr_5090_5616[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (45))){
var inst_4931 = (state_5040[(23)]);
var inst_4938 = (function(){throw inst_4931})();
var state_5040__$1 = state_5040;
var statearr_5091_5617 = state_5040__$1;
(statearr_5091_5617[(2)] = inst_4938);

(statearr_5091_5617[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (14))){
var inst_4786 = (state_5040[(19)]);
var inst_4789 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4790 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4791 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4786);
var inst_4792 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there should be 1 terms",inst_4790,inst_4791];
var inst_4793 = cljs.core.PersistentHashMap.fromArrays(inst_4789,inst_4792);
var inst_4794 = cljs.test.do_report.call(null,inst_4793);
var state_5040__$1 = state_5040;
var statearr_5092_5618 = state_5040__$1;
(statearr_5092_5618[(2)] = inst_4794);

(statearr_5092_5618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (46))){
var inst_4931 = (state_5040[(23)]);
var state_5040__$1 = state_5040;
var statearr_5093_5619 = state_5040__$1;
(statearr_5093_5619[(2)] = inst_4931);

(statearr_5093_5619[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (15))){
var inst_4786 = (state_5040[(19)]);
var inst_4796 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4797 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_4798 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4799 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4800 = cljs.core.cons.call(null,inst_4799,inst_4786);
var inst_4801 = (new cljs.core.List(null,inst_4800,null,(1),null));
var inst_4802 = (new cljs.core.List(null,inst_4798,inst_4801,(2),null));
var inst_4803 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there should be 1 terms",inst_4797,inst_4802];
var inst_4804 = cljs.core.PersistentHashMap.fromArrays(inst_4796,inst_4803);
var inst_4805 = cljs.test.do_report.call(null,inst_4804);
var state_5040__$1 = state_5040;
var statearr_5094_5620 = state_5040__$1;
(statearr_5094_5620[(2)] = inst_4805);

(statearr_5094_5620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (47))){
var inst_4941 = (state_5040[(2)]);
var inst_4942 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"memberterms");
var inst_4943 = cljs.core.async.interop.p__GT_c.call(null,inst_4942);
var state_5040__$1 = (function (){var statearr_5095 = state_5040;
(statearr_5095[(24)] = inst_4941);

return statearr_5095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(48),inst_4943);
} else {
if((state_val_5041 === (16))){
var inst_4787 = (state_5040[(20)]);
var inst_4807 = (state_5040[(2)]);
var _ = (function (){var statearr_5096 = state_5040;
(statearr_5096[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5096;
})();
var state_5040__$1 = (function (){var statearr_5097 = state_5040;
(statearr_5097[(25)] = inst_4807);

return statearr_5097;
})();
var statearr_5098_5621 = state_5040__$1;
(statearr_5098_5621[(2)] = inst_4787);

(statearr_5098_5621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (48))){
var inst_4945 = (state_5040[(26)]);
var inst_4945__$1 = (state_5040[(2)]);
var inst_4946 = (inst_4945__$1 instanceof cljs.core.ExceptionInfo);
var inst_4947 = cljs.core.ex_data.call(null,inst_4945__$1);
var inst_4948 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4947);
var inst_4949 = cljs.core._EQ_.call(null,inst_4948,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4950 = ((inst_4946) && (inst_4949));
var state_5040__$1 = (function (){var statearr_5099 = state_5040;
(statearr_5099[(26)] = inst_4945__$1);

return statearr_5099;
})();
if(cljs.core.truth_(inst_4950)){
var statearr_5100_5622 = state_5040__$1;
(statearr_5100_5622[(1)] = (49));

} else {
var statearr_5101_5623 = state_5040__$1;
(statearr_5101_5623[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (17))){
var inst_4772 = (state_5040[(18)]);
var inst_4829 = (state_5040[(27)]);
var inst_4830 = (state_5040[(28)]);
var _ = (function (){var statearr_5102 = state_5040;
(statearr_5102[(4)] = cljs.core.cons.call(null,(20),(state_5040[(4)])));

return statearr_5102;
})();
var inst_4822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4823 = [(0),"hash"];
var inst_4824 = (new cljs.core.PersistentVector(null,(2),(5),inst_4822,inst_4823,null));
var inst_4825 = cljs.core.get_in.call(null,inst_4772,inst_4824);
var inst_4826 = cljs.core.first.call(null,e2e.dao.terms);
var inst_4827 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_4826);
var inst_4828 = (new cljs.core.List(null,inst_4827,null,(1),null));
var inst_4829__$1 = (new cljs.core.List(null,inst_4825,inst_4828,(2),null));
var inst_4830__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4829__$1);
var state_5040__$1 = (function (){var statearr_5103 = state_5040;
(statearr_5103[(27)] = inst_4829__$1);

(statearr_5103[(28)] = inst_4830__$1);

return statearr_5103;
})();
if(cljs.core.truth_(inst_4830__$1)){
var statearr_5104_5624 = state_5040__$1;
(statearr_5104_5624[(1)] = (21));

} else {
var statearr_5105_5625 = state_5040__$1;
(statearr_5105_5625[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (49))){
var inst_4945 = (state_5040[(26)]);
var inst_4952 = (function(){throw inst_4945})();
var state_5040__$1 = state_5040;
var statearr_5106_5626 = state_5040__$1;
(statearr_5106_5626[(2)] = inst_4952);

(statearr_5106_5626[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (18))){
var inst_4853 = (state_5040[(2)]);
var inst_4854 = e2e.util.wait.call(null,(1000));
var inst_4855 = cljs.core.async.interop.p__GT_c.call(null,inst_4854);
var state_5040__$1 = (function (){var statearr_5107 = state_5040;
(statearr_5107[(29)] = inst_4853);

return statearr_5107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(24),inst_4855);
} else {
if((state_val_5041 === (50))){
var inst_4945 = (state_5040[(26)]);
var state_5040__$1 = state_5040;
var statearr_5108_5627 = state_5040__$1;
(statearr_5108_5627[(2)] = inst_4945);

(statearr_5108_5627[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (19))){
var inst_4811 = (state_5040[(2)]);
var inst_4812 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4813 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_4814 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"wrong term hash",inst_4813,inst_4811];
var inst_4815 = cljs.core.PersistentHashMap.fromArrays(inst_4812,inst_4814);
var inst_4816 = cljs.test.do_report.call(null,inst_4815);
var state_5040__$1 = state_5040;
var statearr_5110_5628 = state_5040__$1;
(statearr_5110_5628[(2)] = inst_4816);

(statearr_5110_5628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (51))){
var inst_4955 = (state_5040[(30)]);
var inst_4955__$1 = (state_5040[(2)]);
var inst_4956 = cljs.core.prn.call(null,inst_4955__$1);
var state_5040__$1 = (function (){var statearr_5111 = state_5040;
(statearr_5111[(30)] = inst_4955__$1);

(statearr_5111[(33)] = inst_4956);

return statearr_5111;
})();
var statearr_5112_5629 = state_5040__$1;
(statearr_5112_5629[(2)] = null);

(statearr_5112_5629[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (20))){
var _ = (function (){var statearr_5113 = state_5040;
(statearr_5113[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5113;
})();
var state_5040__$1 = state_5040;
var ex5109 = (state_5040__$1[(2)]);
var statearr_5114_5630 = state_5040__$1;
(statearr_5114_5630[(5)] = ex5109);


var statearr_5115_5631 = state_5040__$1;
(statearr_5115_5631[(1)] = (19));

(statearr_5115_5631[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (52))){
var inst_4955 = (state_5040[(30)]);
var inst_4970 = (state_5040[(31)]);
var inst_4971 = (state_5040[(32)]);
var _ = (function (){var statearr_5116 = state_5040;
(statearr_5116[(4)] = cljs.core.cons.call(null,(55),(state_5040[(4)])));

return statearr_5116;
})();
var inst_4968 = cljs.core.count.call(null,inst_4955);
var inst_4969 = (new cljs.core.List(null,(3),null,(1),null));
var inst_4970__$1 = (new cljs.core.List(null,inst_4968,inst_4969,(2),null));
var inst_4971__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_4970__$1);
var state_5040__$1 = (function (){var statearr_5117 = state_5040;
(statearr_5117[(31)] = inst_4970__$1);

(statearr_5117[(32)] = inst_4971__$1);

return statearr_5117;
})();
if(cljs.core.truth_(inst_4971__$1)){
var statearr_5118_5632 = state_5040__$1;
(statearr_5118_5632[(1)] = (56));

} else {
var statearr_5119_5633 = state_5040__$1;
(statearr_5119_5633[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (21))){
var inst_4829 = (state_5040[(27)]);
var inst_4832 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4833 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_4834 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4829);
var inst_4835 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"wrong term hash",inst_4833,inst_4834];
var inst_4836 = cljs.core.PersistentHashMap.fromArrays(inst_4832,inst_4835);
var inst_4837 = cljs.test.do_report.call(null,inst_4836);
var state_5040__$1 = state_5040;
var statearr_5120_5634 = state_5040__$1;
(statearr_5120_5634[(2)] = inst_4837);

(statearr_5120_5634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (53))){
var inst_4994 = (state_5040[(2)]);
var state_5040__$1 = (function (){var statearr_5121 = state_5040;
(statearr_5121[(34)] = inst_4994);

return statearr_5121;
})();
var statearr_5122_5635 = state_5040__$1;
(statearr_5122_5635[(2)] = null);

(statearr_5122_5635[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (22))){
var inst_4829 = (state_5040[(27)]);
var inst_4839 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4840 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_4841 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4842 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4843 = cljs.core.cons.call(null,inst_4842,inst_4829);
var inst_4844 = (new cljs.core.List(null,inst_4843,null,(1),null));
var inst_4845 = (new cljs.core.List(null,inst_4841,inst_4844,(2),null));
var inst_4846 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"wrong term hash",inst_4840,inst_4845];
var inst_4847 = cljs.core.PersistentHashMap.fromArrays(inst_4839,inst_4846);
var inst_4848 = cljs.test.do_report.call(null,inst_4847);
var state_5040__$1 = state_5040;
var statearr_5123_5636 = state_5040__$1;
(statearr_5123_5636[(2)] = inst_4848);

(statearr_5123_5636[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (54))){
var inst_4957 = (state_5040[(2)]);
var inst_4958 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4959 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_4960 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there should be 3 terms",inst_4959,inst_4957];
var inst_4961 = cljs.core.PersistentHashMap.fromArrays(inst_4958,inst_4960);
var inst_4962 = cljs.test.do_report.call(null,inst_4961);
var state_5040__$1 = state_5040;
var statearr_5125_5637 = state_5040__$1;
(statearr_5125_5637[(2)] = inst_4962);

(statearr_5125_5637[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (23))){
var inst_4830 = (state_5040[(28)]);
var inst_4850 = (state_5040[(2)]);
var _ = (function (){var statearr_5126 = state_5040;
(statearr_5126[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5126;
})();
var state_5040__$1 = (function (){var statearr_5127 = state_5040;
(statearr_5127[(35)] = inst_4850);

return statearr_5127;
})();
var statearr_5128_5638 = state_5040__$1;
(statearr_5128_5638[(2)] = inst_4830);

(statearr_5128_5638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (55))){
var _ = (function (){var statearr_5129 = state_5040;
(statearr_5129[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5129;
})();
var state_5040__$1 = state_5040;
var ex5124 = (state_5040__$1[(2)]);
var statearr_5130_5639 = state_5040__$1;
(statearr_5130_5639[(5)] = ex5124);


var statearr_5131_5640 = state_5040__$1;
(statearr_5131_5640[(1)] = (54));

(statearr_5131_5640[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (24))){
var inst_4857 = (state_5040[(36)]);
var inst_4857__$1 = (state_5040[(2)]);
var inst_4858 = (inst_4857__$1 instanceof cljs.core.ExceptionInfo);
var inst_4859 = cljs.core.ex_data.call(null,inst_4857__$1);
var inst_4860 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4859);
var inst_4861 = cljs.core._EQ_.call(null,inst_4860,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4862 = ((inst_4858) && (inst_4861));
var state_5040__$1 = (function (){var statearr_5132 = state_5040;
(statearr_5132[(36)] = inst_4857__$1);

return statearr_5132;
})();
if(cljs.core.truth_(inst_4862)){
var statearr_5133_5641 = state_5040__$1;
(statearr_5133_5641[(1)] = (25));

} else {
var statearr_5134_5642 = state_5040__$1;
(statearr_5134_5642[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (56))){
var inst_4970 = (state_5040[(31)]);
var inst_4973 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4974 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_4975 = cljs.core.cons.call(null,cljs.core._EQ_,inst_4970);
var inst_4976 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there should be 3 terms",inst_4974,inst_4975];
var inst_4977 = cljs.core.PersistentHashMap.fromArrays(inst_4973,inst_4976);
var inst_4978 = cljs.test.do_report.call(null,inst_4977);
var state_5040__$1 = state_5040;
var statearr_5135_5643 = state_5040__$1;
(statearr_5135_5643[(2)] = inst_4978);

(statearr_5135_5643[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (25))){
var inst_4857 = (state_5040[(36)]);
var inst_4864 = (function(){throw inst_4857})();
var state_5040__$1 = state_5040;
var statearr_5136_5644 = state_5040__$1;
(statearr_5136_5644[(2)] = inst_4864);

(statearr_5136_5644[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (57))){
var inst_4970 = (state_5040[(31)]);
var inst_4980 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4981 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_4982 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_4983 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_4984 = cljs.core.cons.call(null,inst_4983,inst_4970);
var inst_4985 = (new cljs.core.List(null,inst_4984,null,(1),null));
var inst_4986 = (new cljs.core.List(null,inst_4982,inst_4985,(2),null));
var inst_4987 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there should be 3 terms",inst_4981,inst_4986];
var inst_4988 = cljs.core.PersistentHashMap.fromArrays(inst_4980,inst_4987);
var inst_4989 = cljs.test.do_report.call(null,inst_4988);
var state_5040__$1 = state_5040;
var statearr_5137_5645 = state_5040__$1;
(statearr_5137_5645[(2)] = inst_4989);

(statearr_5137_5645[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (26))){
var inst_4857 = (state_5040[(36)]);
var state_5040__$1 = state_5040;
var statearr_5138_5646 = state_5040__$1;
(statearr_5138_5646[(2)] = inst_4857);

(statearr_5138_5646[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (58))){
var inst_4971 = (state_5040[(32)]);
var inst_4991 = (state_5040[(2)]);
var _ = (function (){var statearr_5139 = state_5040;
(statearr_5139[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5139;
})();
var state_5040__$1 = (function (){var statearr_5140 = state_5040;
(statearr_5140[(37)] = inst_4991);

return statearr_5140;
})();
var statearr_5141_5647 = state_5040__$1;
(statearr_5141_5647[(2)] = inst_4971);

(statearr_5141_5647[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (27))){
var inst_4867 = (state_5040[(2)]);
var inst_4868 = cljs.core.first.call(null,e2e.dao.terms);
var inst_4869 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_4868);
var inst_4870 = e2e.util.should_fail_with.call(null,inst_4869,"terms are a duplicate of the latest");
var inst_4871 = cljs.core.async.interop.p__GT_c.call(null,inst_4870);
var state_5040__$1 = (function (){var statearr_5142 = state_5040;
(statearr_5142[(38)] = inst_4867);

return statearr_5142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(28),inst_4871);
} else {
if((state_val_5041 === (59))){
var inst_4955 = (state_5040[(30)]);
var inst_5013 = (state_5040[(8)]);
var inst_5014 = (state_5040[(9)]);
var _ = (function (){var statearr_5143 = state_5040;
(statearr_5143[(4)] = cljs.core.cons.call(null,(62),(state_5040[(4)])));

return statearr_5143;
})();
var inst_5006 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5007 = [(0),"hash"];
var inst_5008 = (new cljs.core.PersistentVector(null,(2),(5),inst_5006,inst_5007,null));
var inst_5009 = cljs.core.get_in.call(null,inst_4955,inst_5008);
var inst_5010 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5011 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5010);
var inst_5012 = (new cljs.core.List(null,inst_5011,null,(1),null));
var inst_5013__$1 = (new cljs.core.List(null,inst_5009,inst_5012,(2),null));
var inst_5014__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5013__$1);
var state_5040__$1 = (function (){var statearr_5144 = state_5040;
(statearr_5144[(8)] = inst_5013__$1);

(statearr_5144[(9)] = inst_5014__$1);

return statearr_5144;
})();
if(cljs.core.truth_(inst_5014__$1)){
var statearr_5145_5648 = state_5040__$1;
(statearr_5145_5648[(1)] = (63));

} else {
var statearr_5146_5649 = state_5040__$1;
(statearr_5146_5649[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (28))){
var inst_4873 = (state_5040[(39)]);
var inst_4873__$1 = (state_5040[(2)]);
var inst_4874 = (inst_4873__$1 instanceof cljs.core.ExceptionInfo);
var inst_4875 = cljs.core.ex_data.call(null,inst_4873__$1);
var inst_4876 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_4875);
var inst_4877 = cljs.core._EQ_.call(null,inst_4876,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_4878 = ((inst_4874) && (inst_4877));
var state_5040__$1 = (function (){var statearr_5147 = state_5040;
(statearr_5147[(39)] = inst_4873__$1);

return statearr_5147;
})();
if(cljs.core.truth_(inst_4878)){
var statearr_5148_5650 = state_5040__$1;
(statearr_5148_5650[(1)] = (29));

} else {
var statearr_5149_5651 = state_5040__$1;
(statearr_5149_5651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (60))){
var inst_5037 = (state_5040[(2)]);
var inst_5038 = done.call(null);
var state_5040__$1 = (function (){var statearr_5150 = state_5040;
(statearr_5150[(40)] = inst_5037);

return statearr_5150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5040__$1,inst_5038);
} else {
if((state_val_5041 === (29))){
var inst_4873 = (state_5040[(39)]);
var inst_4880 = (function(){throw inst_4873})();
var state_5040__$1 = state_5040;
var statearr_5151_5652 = state_5040__$1;
(statearr_5151_5652[(2)] = inst_4880);

(statearr_5151_5652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (61))){
var inst_4995 = (state_5040[(2)]);
var inst_4996 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_4997 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_4998 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"wrong term hash",inst_4997,inst_4995];
var inst_4999 = cljs.core.PersistentHashMap.fromArrays(inst_4996,inst_4998);
var inst_5000 = cljs.test.do_report.call(null,inst_4999);
var state_5040__$1 = state_5040;
var statearr_5153_5653 = state_5040__$1;
(statearr_5153_5653[(2)] = inst_5000);

(statearr_5153_5653[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (30))){
var inst_4873 = (state_5040[(39)]);
var state_5040__$1 = state_5040;
var statearr_5154_5654 = state_5040__$1;
(statearr_5154_5654[(2)] = inst_4873);

(statearr_5154_5654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (62))){
var _ = (function (){var statearr_5155 = state_5040;
(statearr_5155[(4)] = cljs.core.rest.call(null,(state_5040[(4)])));

return statearr_5155;
})();
var state_5040__$1 = state_5040;
var ex5152 = (state_5040__$1[(2)]);
var statearr_5156_5655 = state_5040__$1;
(statearr_5156_5655[(5)] = ex5152);


var statearr_5157_5656 = state_5040__$1;
(statearr_5157_5656[(1)] = (61));

(statearr_5157_5656[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5041 === (31))){
var inst_4883 = (state_5040[(2)]);
var inst_4884 = Promise.all([e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"aabb"], null)),"incorrect size"),e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"aabbaabbaabbaabbaabb"], null)),"incorrect size")]);
var inst_4885 = cljs.core.async.interop.p__GT_c.call(null,inst_4884);
var state_5040__$1 = (function (){var statearr_5158 = state_5040;
(statearr_5158[(41)] = inst_4883);

return statearr_5158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5040__$1,(32),inst_4885);
} else {
if((state_val_5041 === (63))){
var inst_5013 = (state_5040[(8)]);
var inst_5016 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5017 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5018 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5013);
var inst_5019 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"wrong term hash",inst_5017,inst_5018];
var inst_5020 = cljs.core.PersistentHashMap.fromArrays(inst_5016,inst_5019);
var inst_5021 = cljs.test.do_report.call(null,inst_5020);
var state_5040__$1 = state_5040;
var statearr_5159_5657 = state_5040__$1;
(statearr_5159_5657[(2)] = inst_5021);

(statearr_5159_5657[(1)] = (65));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_5160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5160[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_5160[(1)] = (1));

return statearr_5160;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_5040){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_5040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e5161){var ex__18__auto__ = e5161;
var statearr_5162_5658 = state_5040;
(statearr_5162_5658[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_5040[(4)]))){
var statearr_5163_5659 = state_5040;
(statearr_5163_5659[(1)] = cljs.core.first.call(null,(state_5040[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__5660 = state_5040;
state_5040 = G__5660;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_5040){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_5040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_5164 = f__20__auto__.call(null);
(statearr_5164[(6)] = c__19__auto__);

return statearr_5164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao4740.prototype.apply = (function (self__,args4743){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args4743)));
});

e2e.dao.t_e2e$dao4740.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_5461){
var state_val_5462 = (state_5461[(1)]);
if((state_val_5462 === (32))){
var inst_5308 = (state_5461[(7)]);
var inst_5308__$1 = (state_5461[(2)]);
var inst_5309 = (inst_5308__$1 instanceof cljs.core.ExceptionInfo);
var inst_5310 = cljs.core.ex_data.call(null,inst_5308__$1);
var inst_5311 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5310);
var inst_5312 = cljs.core._EQ_.call(null,inst_5311,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5313 = ((inst_5309) && (inst_5312));
var state_5461__$1 = (function (){var statearr_5463 = state_5461;
(statearr_5463[(7)] = inst_5308__$1);

return statearr_5463;
})();
if(cljs.core.truth_(inst_5313)){
var statearr_5464_5661 = state_5461__$1;
(statearr_5464_5661[(1)] = (33));

} else {
var statearr_5465_5662 = state_5461__$1;
(statearr_5465_5662[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (64))){
var inst_5434 = (state_5461[(8)]);
var inst_5444 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5445 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5446 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5447 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5448 = cljs.core.cons.call(null,inst_5447,inst_5434);
var inst_5449 = (new cljs.core.List(null,inst_5448,null,(1),null));
var inst_5450 = (new cljs.core.List(null,inst_5446,inst_5449,(2),null));
var inst_5451 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"wrong term hash",inst_5445,inst_5450];
var inst_5452 = cljs.core.PersistentHashMap.fromArrays(inst_5444,inst_5451);
var inst_5453 = cljs.test.do_report.call(null,inst_5452);
var state_5461__$1 = state_5461;
var statearr_5466_5663 = state_5461__$1;
(statearr_5466_5663[(2)] = inst_5453);

(statearr_5466_5663[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (1))){
var inst_5165 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5166 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_5165);
var inst_5167 = cljs.core.async.interop.p__GT_c.call(null,inst_5166);
var state_5461__$1 = state_5461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(2),inst_5167);
} else {
if((state_val_5462 === (33))){
var inst_5308 = (state_5461[(7)]);
var inst_5315 = (function(){throw inst_5308})();
var state_5461__$1 = state_5461;
var statearr_5467_5664 = state_5461__$1;
(statearr_5467_5664[(2)] = inst_5315);

(statearr_5467_5664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (65))){
var inst_5435 = (state_5461[(9)]);
var inst_5455 = (state_5461[(2)]);
var _ = (function (){var statearr_5468 = state_5461;
(statearr_5468[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5468;
})();
var state_5461__$1 = (function (){var statearr_5469 = state_5461;
(statearr_5469[(10)] = inst_5455);

return statearr_5469;
})();
var statearr_5470_5665 = state_5461__$1;
(statearr_5470_5665[(2)] = inst_5435);

(statearr_5470_5665[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (2))){
var inst_5169 = (state_5461[(11)]);
var inst_5169__$1 = (state_5461[(2)]);
var inst_5170 = (inst_5169__$1 instanceof cljs.core.ExceptionInfo);
var inst_5171 = cljs.core.ex_data.call(null,inst_5169__$1);
var inst_5172 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5171);
var inst_5173 = cljs.core._EQ_.call(null,inst_5172,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5174 = ((inst_5170) && (inst_5173));
var state_5461__$1 = (function (){var statearr_5471 = state_5461;
(statearr_5471[(11)] = inst_5169__$1);

return statearr_5471;
})();
if(cljs.core.truth_(inst_5174)){
var statearr_5472_5666 = state_5461__$1;
(statearr_5472_5666[(1)] = (3));

} else {
var statearr_5473_5667 = state_5461__$1;
(statearr_5473_5667[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (34))){
var inst_5308 = (state_5461[(7)]);
var state_5461__$1 = state_5461;
var statearr_5474_5668 = state_5461__$1;
(statearr_5474_5668[(2)] = inst_5308);

(statearr_5474_5668[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (3))){
var inst_5169 = (state_5461[(11)]);
var inst_5176 = (function(){throw inst_5169})();
var state_5461__$1 = state_5461;
var statearr_5475_5669 = state_5461__$1;
(statearr_5475_5669[(2)] = inst_5176);

(statearr_5475_5669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (35))){
var inst_5318 = (state_5461[(2)]);
var inst_5319 = cljs.core.second.call(null,e2e.dao.terms);
var inst_5320 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_5319);
var inst_5321 = cljs.core.async.interop.p__GT_c.call(null,inst_5320);
var state_5461__$1 = (function (){var statearr_5476 = state_5461;
(statearr_5476[(12)] = inst_5318);

return statearr_5476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(36),inst_5321);
} else {
if((state_val_5462 === (4))){
var inst_5169 = (state_5461[(11)]);
var state_5461__$1 = state_5461;
var statearr_5477_5670 = state_5461__$1;
(statearr_5477_5670[(2)] = inst_5169);

(statearr_5477_5670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (36))){
var inst_5323 = (state_5461[(13)]);
var inst_5323__$1 = (state_5461[(2)]);
var inst_5324 = (inst_5323__$1 instanceof cljs.core.ExceptionInfo);
var inst_5325 = cljs.core.ex_data.call(null,inst_5323__$1);
var inst_5326 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5325);
var inst_5327 = cljs.core._EQ_.call(null,inst_5326,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5328 = ((inst_5324) && (inst_5327));
var state_5461__$1 = (function (){var statearr_5478 = state_5461;
(statearr_5478[(13)] = inst_5323__$1);

return statearr_5478;
})();
if(cljs.core.truth_(inst_5328)){
var statearr_5479_5671 = state_5461__$1;
(statearr_5479_5671[(1)] = (37));

} else {
var statearr_5480_5672 = state_5461__$1;
(statearr_5480_5672[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (5))){
var inst_5179 = (state_5461[(2)]);
var inst_5180 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"memberterms");
var inst_5181 = cljs.core.async.interop.p__GT_c.call(null,inst_5180);
var state_5461__$1 = (function (){var statearr_5481 = state_5461;
(statearr_5481[(14)] = inst_5179);

return statearr_5481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(6),inst_5181);
} else {
if((state_val_5462 === (37))){
var inst_5323 = (state_5461[(13)]);
var inst_5330 = (function(){throw inst_5323})();
var state_5461__$1 = state_5461;
var statearr_5482_5673 = state_5461__$1;
(statearr_5482_5673[(2)] = inst_5330);

(statearr_5482_5673[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (6))){
var inst_5183 = (state_5461[(15)]);
var inst_5183__$1 = (state_5461[(2)]);
var inst_5184 = (inst_5183__$1 instanceof cljs.core.ExceptionInfo);
var inst_5185 = cljs.core.ex_data.call(null,inst_5183__$1);
var inst_5186 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5185);
var inst_5187 = cljs.core._EQ_.call(null,inst_5186,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5188 = ((inst_5184) && (inst_5187));
var state_5461__$1 = (function (){var statearr_5483 = state_5461;
(statearr_5483[(15)] = inst_5183__$1);

return statearr_5483;
})();
if(cljs.core.truth_(inst_5188)){
var statearr_5484_5674 = state_5461__$1;
(statearr_5484_5674[(1)] = (7));

} else {
var statearr_5485_5675 = state_5461__$1;
(statearr_5485_5675[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (38))){
var inst_5323 = (state_5461[(13)]);
var state_5461__$1 = state_5461;
var statearr_5486_5676 = state_5461__$1;
(statearr_5486_5676[(2)] = inst_5323);

(statearr_5486_5676[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (7))){
var inst_5183 = (state_5461[(15)]);
var inst_5190 = (function(){throw inst_5183})();
var state_5461__$1 = state_5461;
var statearr_5487_5677 = state_5461__$1;
(statearr_5487_5677[(2)] = inst_5190);

(statearr_5487_5677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (39))){
var inst_5333 = (state_5461[(2)]);
var inst_5334 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5335 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_5334);
var inst_5336 = cljs.core.async.interop.p__GT_c.call(null,inst_5335);
var state_5461__$1 = (function (){var statearr_5488 = state_5461;
(statearr_5488[(16)] = inst_5333);

return statearr_5488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(40),inst_5336);
} else {
if((state_val_5462 === (8))){
var inst_5183 = (state_5461[(15)]);
var state_5461__$1 = state_5461;
var statearr_5489_5678 = state_5461__$1;
(statearr_5489_5678[(2)] = inst_5183);

(statearr_5489_5678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (40))){
var inst_5338 = (state_5461[(17)]);
var inst_5338__$1 = (state_5461[(2)]);
var inst_5339 = (inst_5338__$1 instanceof cljs.core.ExceptionInfo);
var inst_5340 = cljs.core.ex_data.call(null,inst_5338__$1);
var inst_5341 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5340);
var inst_5342 = cljs.core._EQ_.call(null,inst_5341,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5343 = ((inst_5339) && (inst_5342));
var state_5461__$1 = (function (){var statearr_5490 = state_5461;
(statearr_5490[(17)] = inst_5338__$1);

return statearr_5490;
})();
if(cljs.core.truth_(inst_5343)){
var statearr_5491_5679 = state_5461__$1;
(statearr_5491_5679[(1)] = (41));

} else {
var statearr_5492_5680 = state_5461__$1;
(statearr_5492_5680[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (9))){
var inst_5193 = (state_5461[(2)]);
var state_5461__$1 = (function (){var statearr_5493 = state_5461;
(statearr_5493[(18)] = inst_5193);

return statearr_5493;
})();
var statearr_5494_5681 = state_5461__$1;
(statearr_5494_5681[(2)] = null);

(statearr_5494_5681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (41))){
var inst_5338 = (state_5461[(17)]);
var inst_5345 = (function(){throw inst_5338})();
var state_5461__$1 = state_5461;
var statearr_5495_5682 = state_5461__$1;
(statearr_5495_5682[(2)] = inst_5345);

(statearr_5495_5682[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (10))){
var inst_5193 = (state_5461[(18)]);
var inst_5207 = (state_5461[(19)]);
var inst_5208 = (state_5461[(20)]);
var _ = (function (){var statearr_5496 = state_5461;
(statearr_5496[(4)] = cljs.core.cons.call(null,(13),(state_5461[(4)])));

return statearr_5496;
})();
var inst_5205 = cljs.core.count.call(null,inst_5193);
var inst_5206 = (new cljs.core.List(null,(1),null,(1),null));
var inst_5207__$1 = (new cljs.core.List(null,inst_5205,inst_5206,(2),null));
var inst_5208__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5207__$1);
var state_5461__$1 = (function (){var statearr_5497 = state_5461;
(statearr_5497[(19)] = inst_5207__$1);

(statearr_5497[(20)] = inst_5208__$1);

return statearr_5497;
})();
if(cljs.core.truth_(inst_5208__$1)){
var statearr_5498_5683 = state_5461__$1;
(statearr_5498_5683[(1)] = (14));

} else {
var statearr_5499_5684 = state_5461__$1;
(statearr_5499_5684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (42))){
var inst_5338 = (state_5461[(17)]);
var state_5461__$1 = state_5461;
var statearr_5500_5685 = state_5461__$1;
(statearr_5500_5685[(2)] = inst_5338);

(statearr_5500_5685[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (11))){
var inst_5231 = (state_5461[(2)]);
var state_5461__$1 = (function (){var statearr_5501 = state_5461;
(statearr_5501[(21)] = inst_5231);

return statearr_5501;
})();
var statearr_5502_5686 = state_5461__$1;
(statearr_5502_5686[(2)] = null);

(statearr_5502_5686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (43))){
var inst_5348 = (state_5461[(2)]);
var inst_5349 = e2e.util.wait.call(null,(500));
var inst_5350 = cljs.core.async.interop.p__GT_c.call(null,inst_5349);
var state_5461__$1 = (function (){var statearr_5503 = state_5461;
(statearr_5503[(22)] = inst_5348);

return statearr_5503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(44),inst_5350);
} else {
if((state_val_5462 === (12))){
var inst_5194 = (state_5461[(2)]);
var inst_5195 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5196 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_5197 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there should be 1 terms",inst_5196,inst_5194];
var inst_5198 = cljs.core.PersistentHashMap.fromArrays(inst_5195,inst_5197);
var inst_5199 = cljs.test.do_report.call(null,inst_5198);
var state_5461__$1 = state_5461;
var statearr_5505_5687 = state_5461__$1;
(statearr_5505_5687[(2)] = inst_5199);

(statearr_5505_5687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (44))){
var inst_5352 = (state_5461[(23)]);
var inst_5352__$1 = (state_5461[(2)]);
var inst_5353 = (inst_5352__$1 instanceof cljs.core.ExceptionInfo);
var inst_5354 = cljs.core.ex_data.call(null,inst_5352__$1);
var inst_5355 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5354);
var inst_5356 = cljs.core._EQ_.call(null,inst_5355,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5357 = ((inst_5353) && (inst_5356));
var state_5461__$1 = (function (){var statearr_5506 = state_5461;
(statearr_5506[(23)] = inst_5352__$1);

return statearr_5506;
})();
if(cljs.core.truth_(inst_5357)){
var statearr_5507_5688 = state_5461__$1;
(statearr_5507_5688[(1)] = (45));

} else {
var statearr_5508_5689 = state_5461__$1;
(statearr_5508_5689[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (13))){
var _ = (function (){var statearr_5509 = state_5461;
(statearr_5509[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5509;
})();
var state_5461__$1 = state_5461;
var ex5504 = (state_5461__$1[(2)]);
var statearr_5510_5690 = state_5461__$1;
(statearr_5510_5690[(5)] = ex5504);


var statearr_5511_5691 = state_5461__$1;
(statearr_5511_5691[(1)] = (12));

(statearr_5511_5691[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (45))){
var inst_5352 = (state_5461[(23)]);
var inst_5359 = (function(){throw inst_5352})();
var state_5461__$1 = state_5461;
var statearr_5512_5692 = state_5461__$1;
(statearr_5512_5692[(2)] = inst_5359);

(statearr_5512_5692[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (14))){
var inst_5207 = (state_5461[(19)]);
var inst_5210 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5211 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_5212 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5207);
var inst_5213 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there should be 1 terms",inst_5211,inst_5212];
var inst_5214 = cljs.core.PersistentHashMap.fromArrays(inst_5210,inst_5213);
var inst_5215 = cljs.test.do_report.call(null,inst_5214);
var state_5461__$1 = state_5461;
var statearr_5513_5693 = state_5461__$1;
(statearr_5513_5693[(2)] = inst_5215);

(statearr_5513_5693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (46))){
var inst_5352 = (state_5461[(23)]);
var state_5461__$1 = state_5461;
var statearr_5514_5694 = state_5461__$1;
(statearr_5514_5694[(2)] = inst_5352);

(statearr_5514_5694[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (15))){
var inst_5207 = (state_5461[(19)]);
var inst_5217 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5218 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(1));
var inst_5219 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5220 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5221 = cljs.core.cons.call(null,inst_5220,inst_5207);
var inst_5222 = (new cljs.core.List(null,inst_5221,null,(1),null));
var inst_5223 = (new cljs.core.List(null,inst_5219,inst_5222,(2),null));
var inst_5224 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there should be 1 terms",inst_5218,inst_5223];
var inst_5225 = cljs.core.PersistentHashMap.fromArrays(inst_5217,inst_5224);
var inst_5226 = cljs.test.do_report.call(null,inst_5225);
var state_5461__$1 = state_5461;
var statearr_5515_5695 = state_5461__$1;
(statearr_5515_5695[(2)] = inst_5226);

(statearr_5515_5695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (47))){
var inst_5362 = (state_5461[(2)]);
var inst_5363 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"memberterms");
var inst_5364 = cljs.core.async.interop.p__GT_c.call(null,inst_5363);
var state_5461__$1 = (function (){var statearr_5516 = state_5461;
(statearr_5516[(24)] = inst_5362);

return statearr_5516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(48),inst_5364);
} else {
if((state_val_5462 === (16))){
var inst_5208 = (state_5461[(20)]);
var inst_5228 = (state_5461[(2)]);
var _ = (function (){var statearr_5517 = state_5461;
(statearr_5517[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5517;
})();
var state_5461__$1 = (function (){var statearr_5518 = state_5461;
(statearr_5518[(25)] = inst_5228);

return statearr_5518;
})();
var statearr_5519_5696 = state_5461__$1;
(statearr_5519_5696[(2)] = inst_5208);

(statearr_5519_5696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (48))){
var inst_5366 = (state_5461[(26)]);
var inst_5366__$1 = (state_5461[(2)]);
var inst_5367 = (inst_5366__$1 instanceof cljs.core.ExceptionInfo);
var inst_5368 = cljs.core.ex_data.call(null,inst_5366__$1);
var inst_5369 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5368);
var inst_5370 = cljs.core._EQ_.call(null,inst_5369,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5371 = ((inst_5367) && (inst_5370));
var state_5461__$1 = (function (){var statearr_5520 = state_5461;
(statearr_5520[(26)] = inst_5366__$1);

return statearr_5520;
})();
if(cljs.core.truth_(inst_5371)){
var statearr_5521_5697 = state_5461__$1;
(statearr_5521_5697[(1)] = (49));

} else {
var statearr_5522_5698 = state_5461__$1;
(statearr_5522_5698[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (17))){
var inst_5193 = (state_5461[(18)]);
var inst_5250 = (state_5461[(27)]);
var inst_5251 = (state_5461[(28)]);
var _ = (function (){var statearr_5523 = state_5461;
(statearr_5523[(4)] = cljs.core.cons.call(null,(20),(state_5461[(4)])));

return statearr_5523;
})();
var inst_5243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5244 = [(0),"hash"];
var inst_5245 = (new cljs.core.PersistentVector(null,(2),(5),inst_5243,inst_5244,null));
var inst_5246 = cljs.core.get_in.call(null,inst_5193,inst_5245);
var inst_5247 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5248 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5247);
var inst_5249 = (new cljs.core.List(null,inst_5248,null,(1),null));
var inst_5250__$1 = (new cljs.core.List(null,inst_5246,inst_5249,(2),null));
var inst_5251__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5250__$1);
var state_5461__$1 = (function (){var statearr_5524 = state_5461;
(statearr_5524[(27)] = inst_5250__$1);

(statearr_5524[(28)] = inst_5251__$1);

return statearr_5524;
})();
if(cljs.core.truth_(inst_5251__$1)){
var statearr_5525_5699 = state_5461__$1;
(statearr_5525_5699[(1)] = (21));

} else {
var statearr_5526_5700 = state_5461__$1;
(statearr_5526_5700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (49))){
var inst_5366 = (state_5461[(26)]);
var inst_5373 = (function(){throw inst_5366})();
var state_5461__$1 = state_5461;
var statearr_5527_5701 = state_5461__$1;
(statearr_5527_5701[(2)] = inst_5373);

(statearr_5527_5701[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (18))){
var inst_5274 = (state_5461[(2)]);
var inst_5275 = e2e.util.wait.call(null,(1000));
var inst_5276 = cljs.core.async.interop.p__GT_c.call(null,inst_5275);
var state_5461__$1 = (function (){var statearr_5528 = state_5461;
(statearr_5528[(29)] = inst_5274);

return statearr_5528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(24),inst_5276);
} else {
if((state_val_5462 === (50))){
var inst_5366 = (state_5461[(26)]);
var state_5461__$1 = state_5461;
var statearr_5529_5702 = state_5461__$1;
(statearr_5529_5702[(2)] = inst_5366);

(statearr_5529_5702[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (19))){
var inst_5232 = (state_5461[(2)]);
var inst_5233 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5234 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5235 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"wrong term hash",inst_5234,inst_5232];
var inst_5236 = cljs.core.PersistentHashMap.fromArrays(inst_5233,inst_5235);
var inst_5237 = cljs.test.do_report.call(null,inst_5236);
var state_5461__$1 = state_5461;
var statearr_5531_5703 = state_5461__$1;
(statearr_5531_5703[(2)] = inst_5237);

(statearr_5531_5703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (51))){
var inst_5376 = (state_5461[(30)]);
var inst_5376__$1 = (state_5461[(2)]);
var inst_5377 = cljs.core.prn.call(null,inst_5376__$1);
var state_5461__$1 = (function (){var statearr_5532 = state_5461;
(statearr_5532[(30)] = inst_5376__$1);

(statearr_5532[(33)] = inst_5377);

return statearr_5532;
})();
var statearr_5533_5704 = state_5461__$1;
(statearr_5533_5704[(2)] = null);

(statearr_5533_5704[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (20))){
var _ = (function (){var statearr_5534 = state_5461;
(statearr_5534[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5534;
})();
var state_5461__$1 = state_5461;
var ex5530 = (state_5461__$1[(2)]);
var statearr_5535_5705 = state_5461__$1;
(statearr_5535_5705[(5)] = ex5530);


var statearr_5536_5706 = state_5461__$1;
(statearr_5536_5706[(1)] = (19));

(statearr_5536_5706[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (52))){
var inst_5376 = (state_5461[(30)]);
var inst_5391 = (state_5461[(31)]);
var inst_5392 = (state_5461[(32)]);
var _ = (function (){var statearr_5537 = state_5461;
(statearr_5537[(4)] = cljs.core.cons.call(null,(55),(state_5461[(4)])));

return statearr_5537;
})();
var inst_5389 = cljs.core.count.call(null,inst_5376);
var inst_5390 = (new cljs.core.List(null,(3),null,(1),null));
var inst_5391__$1 = (new cljs.core.List(null,inst_5389,inst_5390,(2),null));
var inst_5392__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5391__$1);
var state_5461__$1 = (function (){var statearr_5538 = state_5461;
(statearr_5538[(31)] = inst_5391__$1);

(statearr_5538[(32)] = inst_5392__$1);

return statearr_5538;
})();
if(cljs.core.truth_(inst_5392__$1)){
var statearr_5539_5707 = state_5461__$1;
(statearr_5539_5707[(1)] = (56));

} else {
var statearr_5540_5708 = state_5461__$1;
(statearr_5540_5708[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (21))){
var inst_5250 = (state_5461[(27)]);
var inst_5253 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5254 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5255 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5250);
var inst_5256 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"wrong term hash",inst_5254,inst_5255];
var inst_5257 = cljs.core.PersistentHashMap.fromArrays(inst_5253,inst_5256);
var inst_5258 = cljs.test.do_report.call(null,inst_5257);
var state_5461__$1 = state_5461;
var statearr_5541_5709 = state_5461__$1;
(statearr_5541_5709[(2)] = inst_5258);

(statearr_5541_5709[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (53))){
var inst_5415 = (state_5461[(2)]);
var state_5461__$1 = (function (){var statearr_5542 = state_5461;
(statearr_5542[(34)] = inst_5415);

return statearr_5542;
})();
var statearr_5543_5710 = state_5461__$1;
(statearr_5543_5710[(2)] = null);

(statearr_5543_5710[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (22))){
var inst_5250 = (state_5461[(27)]);
var inst_5260 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5261 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5262 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5263 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5264 = cljs.core.cons.call(null,inst_5263,inst_5250);
var inst_5265 = (new cljs.core.List(null,inst_5264,null,(1),null));
var inst_5266 = (new cljs.core.List(null,inst_5262,inst_5265,(2),null));
var inst_5267 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"wrong term hash",inst_5261,inst_5266];
var inst_5268 = cljs.core.PersistentHashMap.fromArrays(inst_5260,inst_5267);
var inst_5269 = cljs.test.do_report.call(null,inst_5268);
var state_5461__$1 = state_5461;
var statearr_5544_5711 = state_5461__$1;
(statearr_5544_5711[(2)] = inst_5269);

(statearr_5544_5711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (54))){
var inst_5378 = (state_5461[(2)]);
var inst_5379 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_5381 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there should be 3 terms",inst_5380,inst_5378];
var inst_5382 = cljs.core.PersistentHashMap.fromArrays(inst_5379,inst_5381);
var inst_5383 = cljs.test.do_report.call(null,inst_5382);
var state_5461__$1 = state_5461;
var statearr_5546_5712 = state_5461__$1;
(statearr_5546_5712[(2)] = inst_5383);

(statearr_5546_5712[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (23))){
var inst_5251 = (state_5461[(28)]);
var inst_5271 = (state_5461[(2)]);
var _ = (function (){var statearr_5547 = state_5461;
(statearr_5547[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5547;
})();
var state_5461__$1 = (function (){var statearr_5548 = state_5461;
(statearr_5548[(35)] = inst_5271);

return statearr_5548;
})();
var statearr_5549_5713 = state_5461__$1;
(statearr_5549_5713[(2)] = inst_5251);

(statearr_5549_5713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (55))){
var _ = (function (){var statearr_5550 = state_5461;
(statearr_5550[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5550;
})();
var state_5461__$1 = state_5461;
var ex5545 = (state_5461__$1[(2)]);
var statearr_5551_5714 = state_5461__$1;
(statearr_5551_5714[(5)] = ex5545);


var statearr_5552_5715 = state_5461__$1;
(statearr_5552_5715[(1)] = (54));

(statearr_5552_5715[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (24))){
var inst_5278 = (state_5461[(36)]);
var inst_5278__$1 = (state_5461[(2)]);
var inst_5279 = (inst_5278__$1 instanceof cljs.core.ExceptionInfo);
var inst_5280 = cljs.core.ex_data.call(null,inst_5278__$1);
var inst_5281 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5280);
var inst_5282 = cljs.core._EQ_.call(null,inst_5281,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5283 = ((inst_5279) && (inst_5282));
var state_5461__$1 = (function (){var statearr_5553 = state_5461;
(statearr_5553[(36)] = inst_5278__$1);

return statearr_5553;
})();
if(cljs.core.truth_(inst_5283)){
var statearr_5554_5716 = state_5461__$1;
(statearr_5554_5716[(1)] = (25));

} else {
var statearr_5555_5717 = state_5461__$1;
(statearr_5555_5717[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (56))){
var inst_5391 = (state_5461[(31)]);
var inst_5394 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_5396 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5391);
var inst_5397 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there should be 3 terms",inst_5395,inst_5396];
var inst_5398 = cljs.core.PersistentHashMap.fromArrays(inst_5394,inst_5397);
var inst_5399 = cljs.test.do_report.call(null,inst_5398);
var state_5461__$1 = state_5461;
var statearr_5556_5718 = state_5461__$1;
(statearr_5556_5718[(2)] = inst_5399);

(statearr_5556_5718[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (25))){
var inst_5278 = (state_5461[(36)]);
var inst_5285 = (function(){throw inst_5278})();
var state_5461__$1 = state_5461;
var statearr_5557_5719 = state_5461__$1;
(statearr_5557_5719[(2)] = inst_5285);

(statearr_5557_5719[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (57))){
var inst_5391 = (state_5461[(31)]);
var inst_5401 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"count","count",(-514511684),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)),(3));
var inst_5403 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5404 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5405 = cljs.core.cons.call(null,inst_5404,inst_5391);
var inst_5406 = (new cljs.core.List(null,inst_5405,null,(1),null));
var inst_5407 = (new cljs.core.List(null,inst_5403,inst_5406,(2),null));
var inst_5408 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there should be 3 terms",inst_5402,inst_5407];
var inst_5409 = cljs.core.PersistentHashMap.fromArrays(inst_5401,inst_5408);
var inst_5410 = cljs.test.do_report.call(null,inst_5409);
var state_5461__$1 = state_5461;
var statearr_5558_5720 = state_5461__$1;
(statearr_5558_5720[(2)] = inst_5410);

(statearr_5558_5720[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (26))){
var inst_5278 = (state_5461[(36)]);
var state_5461__$1 = state_5461;
var statearr_5559_5721 = state_5461__$1;
(statearr_5559_5721[(2)] = inst_5278);

(statearr_5559_5721[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (58))){
var inst_5392 = (state_5461[(32)]);
var inst_5412 = (state_5461[(2)]);
var _ = (function (){var statearr_5560 = state_5461;
(statearr_5560[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5560;
})();
var state_5461__$1 = (function (){var statearr_5561 = state_5461;
(statearr_5561[(37)] = inst_5412);

return statearr_5561;
})();
var statearr_5562_5722 = state_5461__$1;
(statearr_5562_5722[(2)] = inst_5392);

(statearr_5562_5722[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (27))){
var inst_5288 = (state_5461[(2)]);
var inst_5289 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5290 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_5289);
var inst_5291 = e2e.util.should_fail_with.call(null,inst_5290,"terms are a duplicate of the latest");
var inst_5292 = cljs.core.async.interop.p__GT_c.call(null,inst_5291);
var state_5461__$1 = (function (){var statearr_5563 = state_5461;
(statearr_5563[(38)] = inst_5288);

return statearr_5563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(28),inst_5292);
} else {
if((state_val_5462 === (59))){
var inst_5376 = (state_5461[(30)]);
var inst_5434 = (state_5461[(8)]);
var inst_5435 = (state_5461[(9)]);
var _ = (function (){var statearr_5564 = state_5461;
(statearr_5564[(4)] = cljs.core.cons.call(null,(62),(state_5461[(4)])));

return statearr_5564;
})();
var inst_5427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5428 = [(0),"hash"];
var inst_5429 = (new cljs.core.PersistentVector(null,(2),(5),inst_5427,inst_5428,null));
var inst_5430 = cljs.core.get_in.call(null,inst_5376,inst_5429);
var inst_5431 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5432 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5431);
var inst_5433 = (new cljs.core.List(null,inst_5432,null,(1),null));
var inst_5434__$1 = (new cljs.core.List(null,inst_5430,inst_5433,(2),null));
var inst_5435__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5434__$1);
var state_5461__$1 = (function (){var statearr_5565 = state_5461;
(statearr_5565[(8)] = inst_5434__$1);

(statearr_5565[(9)] = inst_5435__$1);

return statearr_5565;
})();
if(cljs.core.truth_(inst_5435__$1)){
var statearr_5566_5723 = state_5461__$1;
(statearr_5566_5723[(1)] = (63));

} else {
var statearr_5567_5724 = state_5461__$1;
(statearr_5567_5724[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (28))){
var inst_5294 = (state_5461[(39)]);
var inst_5294__$1 = (state_5461[(2)]);
var inst_5295 = (inst_5294__$1 instanceof cljs.core.ExceptionInfo);
var inst_5296 = cljs.core.ex_data.call(null,inst_5294__$1);
var inst_5297 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5296);
var inst_5298 = cljs.core._EQ_.call(null,inst_5297,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5299 = ((inst_5295) && (inst_5298));
var state_5461__$1 = (function (){var statearr_5568 = state_5461;
(statearr_5568[(39)] = inst_5294__$1);

return statearr_5568;
})();
if(cljs.core.truth_(inst_5299)){
var statearr_5569_5725 = state_5461__$1;
(statearr_5569_5725[(1)] = (29));

} else {
var statearr_5570_5726 = state_5461__$1;
(statearr_5570_5726[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (60))){
var inst_5458 = (state_5461[(2)]);
var inst_5459 = done.call(null);
var state_5461__$1 = (function (){var statearr_5571 = state_5461;
(statearr_5571[(40)] = inst_5458);

return statearr_5571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5461__$1,inst_5459);
} else {
if((state_val_5462 === (29))){
var inst_5294 = (state_5461[(39)]);
var inst_5301 = (function(){throw inst_5294})();
var state_5461__$1 = state_5461;
var statearr_5572_5727 = state_5461__$1;
(statearr_5572_5727[(2)] = inst_5301);

(statearr_5572_5727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (61))){
var inst_5416 = (state_5461[(2)]);
var inst_5417 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5418 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5419 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"wrong term hash",inst_5418,inst_5416];
var inst_5420 = cljs.core.PersistentHashMap.fromArrays(inst_5417,inst_5419);
var inst_5421 = cljs.test.do_report.call(null,inst_5420);
var state_5461__$1 = state_5461;
var statearr_5574_5728 = state_5461__$1;
(statearr_5574_5728[(2)] = inst_5421);

(statearr_5574_5728[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (30))){
var inst_5294 = (state_5461[(39)]);
var state_5461__$1 = state_5461;
var statearr_5575_5729 = state_5461__$1;
(statearr_5575_5729[(2)] = inst_5294);

(statearr_5575_5729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (62))){
var _ = (function (){var statearr_5576 = state_5461;
(statearr_5576[(4)] = cljs.core.rest.call(null,(state_5461[(4)])));

return statearr_5576;
})();
var state_5461__$1 = state_5461;
var ex5573 = (state_5461__$1[(2)]);
var statearr_5577_5730 = state_5461__$1;
(statearr_5577_5730[(5)] = ex5573);


var statearr_5578_5731 = state_5461__$1;
(statearr_5578_5731[(1)] = (61));

(statearr_5578_5731[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_5462 === (31))){
var inst_5304 = (state_5461[(2)]);
var inst_5305 = Promise.all([e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"aabb"], null)),"incorrect size"),e2e.util.should_fail_with.call(null,eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",(-13781596)),"aabbaabbaabbaabbaabb"], null)),"incorrect size")]);
var inst_5306 = cljs.core.async.interop.p__GT_c.call(null,inst_5305);
var state_5461__$1 = (function (){var statearr_5579 = state_5461;
(statearr_5579[(41)] = inst_5304);

return statearr_5579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5461__$1,(32),inst_5306);
} else {
if((state_val_5462 === (63))){
var inst_5434 = (state_5461[(8)]);
var inst_5437 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5438 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",(-1965644065),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"hash"], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"terms","terms",(83553549),null),new cljs.core.Symbol(null,"first","first",(996428481),null),new cljs.core.Keyword(null,"hash","hash",(-13781596))));
var inst_5439 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5434);
var inst_5440 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"wrong term hash",inst_5438,inst_5439];
var inst_5441 = cljs.core.PersistentHashMap.fromArrays(inst_5437,inst_5440);
var inst_5442 = cljs.test.do_report.call(null,inst_5441);
var state_5461__$1 = state_5461;
var statearr_5580_5732 = state_5461__$1;
(statearr_5580_5732[(2)] = inst_5442);

(statearr_5580_5732[(1)] = (65));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_5581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5581[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_5581[(1)] = (1));

return statearr_5581;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_5461){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_5461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e5582){var ex__18__auto__ = e5582;
var statearr_5583_5733 = state_5461;
(statearr_5583_5733[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_5461[(4)]))){
var statearr_5584_5734 = state_5461;
(statearr_5584_5734[(1)] = cljs.core.first.call(null,(state_5461[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__5735 = state_5461;
state_5461 = G__5735;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_5461){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_5461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_5585 = f__20__auto__.call(null);
(statearr_5585[(6)] = c__19__auto__);

return statearr_5585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao4740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta4741","meta4741",(930865031),null)], null);
});

e2e.dao.t_e2e$dao4740.cljs$lang$type = true;

e2e.dao.t_e2e$dao4740.cljs$lang$ctorStr = "e2e.dao/t_e2e$dao4740";

e2e.dao.t_e2e$dao4740.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.dao/t_e2e$dao4740");
});

/**
 * Positional factory function for e2e.dao/t_e2e$dao4740.
 */
e2e.dao.__GT_t_e2e$dao4740 = (function e2e$dao$__GT_t_e2e$dao4740(meta4741){
return (new e2e.dao.t_e2e$dao4740(meta4741));
});

}

return (new e2e.dao.t_e2e$dao4740(null));
});

e2e.dao.new_member_terms.cljs$lang$var = new cljs.core.Var(function(){return e2e.dao.new_member_terms;},new cljs.core.Symbol("e2e.dao","new-member-terms","e2e.dao/new-member-terms",(-849464243),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"new-member-terms","new-member-terms",(120362641),null),"e2e/dao.cljs",(26),(1),(65),(65),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.new_member_terms)?e2e.dao.new_member_terms.cljs$lang$test:null)]));
e2e.dao.member_register = (function e2e$dao$member_register(){
return cljs.test.test_var.call(null,e2e.dao.member_register.cljs$lang$var);
});
e2e.dao.member_register.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.dao !== 'undefined') && (typeof e2e.dao.t_e2e$dao5736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.dao.t_e2e$dao5736 = (function (meta5737){
this.meta5737 = meta5737;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.dao.t_e2e$dao5736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5738,meta5737__$1){
var self__ = this;
var _5738__$1 = this;
return (new e2e.dao.t_e2e$dao5736(meta5737__$1));
});

e2e.dao.t_e2e$dao5736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5738){
var self__ = this;
var _5738__$1 = this;
return self__.meta5737;
});

e2e.dao.t_e2e$dao5736.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.dao.t_e2e$dao5736.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_6022){
var state_val_6023 = (state_6022[(1)]);
if((state_val_6023 === (32))){
var inst_5890 = (state_6022[(7)]);
var inst_5890__$1 = (state_6022[(2)]);
var inst_5891 = (inst_5890__$1 instanceof cljs.core.ExceptionInfo);
var inst_5892 = cljs.core.ex_data.call(null,inst_5890__$1);
var inst_5893 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5892);
var inst_5894 = cljs.core._EQ_.call(null,inst_5893,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5895 = ((inst_5891) && (inst_5894));
var state_6022__$1 = (function (){var statearr_6024 = state_6022;
(statearr_6024[(7)] = inst_5890__$1);

return statearr_6024;
})();
if(cljs.core.truth_(inst_5895)){
var statearr_6025_6520 = state_6022__$1;
(statearr_6025_6520[(1)] = (33));

} else {
var statearr_6026_6521 = state_6022__$1;
(statearr_6026_6521[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (1))){
var inst_5740 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_5741 = cljs.core.second.call(null,e2e.dao.terms);
var inst_5742 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5741);
var inst_5743 = [e2e.dao.dao_acc,inst_5742];
var inst_5744 = cljs.core.PersistentHashMap.fromArrays(inst_5740,inst_5743);
var inst_5745 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_5744);
var inst_5746 = e2e.util.should_fail_with.call(null,inst_5745,"agreed terms are not the latest");
var inst_5747 = cljs.core.async.interop.p__GT_c.call(null,inst_5746);
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(2),inst_5747);
} else {
if((state_val_6023 === (33))){
var inst_5890 = (state_6022[(7)]);
var inst_5897 = (function(){throw inst_5890})();
var state_6022__$1 = state_6022;
var statearr_6027_6522 = state_6022__$1;
(statearr_6027_6522[(2)] = inst_5897);

(statearr_6027_6522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (2))){
var inst_5749 = (state_6022[(8)]);
var inst_5749__$1 = (state_6022[(2)]);
var inst_5750 = (inst_5749__$1 instanceof cljs.core.ExceptionInfo);
var inst_5751 = cljs.core.ex_data.call(null,inst_5749__$1);
var inst_5752 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5751);
var inst_5753 = cljs.core._EQ_.call(null,inst_5752,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5754 = ((inst_5750) && (inst_5753));
var state_6022__$1 = (function (){var statearr_6028 = state_6022;
(statearr_6028[(8)] = inst_5749__$1);

return statearr_6028;
})();
if(cljs.core.truth_(inst_5754)){
var statearr_6029_6523 = state_6022__$1;
(statearr_6029_6523[(1)] = (3));

} else {
var statearr_6030_6524 = state_6022__$1;
(statearr_6030_6524[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (34))){
var inst_5890 = (state_6022[(7)]);
var state_6022__$1 = state_6022;
var statearr_6031_6525 = state_6022__$1;
(statearr_6031_6525[(2)] = inst_5890);

(statearr_6031_6525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (3))){
var inst_5749 = (state_6022[(8)]);
var inst_5756 = (function(){throw inst_5749})();
var state_6022__$1 = state_6022;
var statearr_6032_6526 = state_6022__$1;
(statearr_6032_6526[(2)] = inst_5756);

(statearr_6032_6526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (35))){
var inst_5900 = (state_6022[(2)]);
var inst_5901 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_5902 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5903 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5902);
var inst_5904 = [e2e.dao.dao_acc,inst_5903];
var inst_5905 = cljs.core.PersistentHashMap.fromArrays(inst_5901,inst_5904);
var inst_5906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5907 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_5908 = [e2e.dao.owner_acc,"active"];
var inst_5909 = cljs.core.PersistentHashMap.fromArrays(inst_5907,inst_5908);
var inst_5910 = [inst_5909];
var inst_5911 = (new cljs.core.PersistentVector(null,(1),(5),inst_5906,inst_5910,null));
var inst_5912 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_5905,inst_5911);
var inst_5913 = ["missing authority of ",e2e.dao.dao_acc].join('');
var inst_5914 = e2e.util.should_fail_with.call(null,inst_5912,inst_5913);
var inst_5915 = cljs.core.async.interop.p__GT_c.call(null,inst_5914);
var state_6022__$1 = (function (){var statearr_6033 = state_6022;
(statearr_6033[(9)] = inst_5900);

return statearr_6033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(36),inst_5915);
} else {
if((state_val_6023 === (4))){
var inst_5749 = (state_6022[(8)]);
var state_6022__$1 = state_6022;
var statearr_6034_6527 = state_6022__$1;
(statearr_6034_6527[(2)] = inst_5749);

(statearr_6034_6527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (36))){
var inst_5917 = (state_6022[(10)]);
var inst_5917__$1 = (state_6022[(2)]);
var inst_5918 = (inst_5917__$1 instanceof cljs.core.ExceptionInfo);
var inst_5919 = cljs.core.ex_data.call(null,inst_5917__$1);
var inst_5920 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5919);
var inst_5921 = cljs.core._EQ_.call(null,inst_5920,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5922 = ((inst_5918) && (inst_5921));
var state_6022__$1 = (function (){var statearr_6035 = state_6022;
(statearr_6035[(10)] = inst_5917__$1);

return statearr_6035;
})();
if(cljs.core.truth_(inst_5922)){
var statearr_6036_6528 = state_6022__$1;
(statearr_6036_6528[(1)] = (37));

} else {
var statearr_6037_6529 = state_6022__$1;
(statearr_6037_6529[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (5))){
var inst_5759 = (state_6022[(2)]);
var state_6022__$1 = (function (){var statearr_6038 = state_6022;
(statearr_6038[(11)] = inst_5759);

return statearr_6038;
})();
var statearr_6039_6530 = state_6022__$1;
(statearr_6039_6530[(2)] = null);

(statearr_6039_6530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (37))){
var inst_5917 = (state_6022[(10)]);
var inst_5924 = (function(){throw inst_5917})();
var state_6022__$1 = state_6022;
var statearr_6040_6531 = state_6022__$1;
(statearr_6040_6531[(2)] = inst_5924);

(statearr_6040_6531[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (6))){
var _ = (function (){var statearr_6041 = state_6022;
(statearr_6041[(4)] = cljs.core.cons.call(null,(9),(state_6022[(4)])));

return statearr_6041;
})();
var inst_5771 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_5772 = cljs.core.async.interop.p__GT_c.call(null,inst_5771);
var state_6022__$1 = state_6022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(10),inst_5772);
} else {
if((state_val_6023 === (38))){
var inst_5917 = (state_6022[(10)]);
var state_6022__$1 = state_6022;
var statearr_6042_6532 = state_6022__$1;
(statearr_6042_6532[(2)] = inst_5917);

(statearr_6042_6532[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (7))){
var inst_5809 = (state_6022[(2)]);
var inst_5810 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_5811 = cljs.core.first.call(null,e2e.dao.terms);
var inst_5812 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5811);
var inst_5813 = [e2e.dao.dao_acc,inst_5812];
var inst_5814 = cljs.core.PersistentHashMap.fromArrays(inst_5810,inst_5813);
var inst_5815 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_5814);
var inst_5816 = e2e.util.should_succeed.call(null,inst_5815,"can register");
var inst_5817 = cljs.core.async.interop.p__GT_c.call(null,inst_5816);
var state_6022__$1 = (function (){var statearr_6043 = state_6022;
(statearr_6043[(12)] = inst_5809);

return statearr_6043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(17),inst_5817);
} else {
if((state_val_6023 === (39))){
var inst_5927 = (state_6022[(2)]);
var inst_5928 = cljs.core.second.call(null,e2e.dao.terms);
var inst_5929 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_5928);
var inst_5930 = cljs.core.async.interop.p__GT_c.call(null,inst_5929);
var state_6022__$1 = (function (){var statearr_6044 = state_6022;
(statearr_6044[(13)] = inst_5927);

return statearr_6044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(40),inst_5930);
} else {
if((state_val_6023 === (8))){
var inst_5760 = (state_6022[(2)]);
var inst_5761 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5762 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_5763 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there shouldn't be any registered members",inst_5762,inst_5760];
var inst_5764 = cljs.core.PersistentHashMap.fromArrays(inst_5761,inst_5763);
var inst_5765 = cljs.test.do_report.call(null,inst_5764);
var state_6022__$1 = state_6022;
var statearr_6046_6533 = state_6022__$1;
(statearr_6046_6533[(2)] = inst_5765);

(statearr_6046_6533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (40))){
var inst_5932 = (state_6022[(14)]);
var inst_5932__$1 = (state_6022[(2)]);
var inst_5933 = (inst_5932__$1 instanceof cljs.core.ExceptionInfo);
var inst_5934 = cljs.core.ex_data.call(null,inst_5932__$1);
var inst_5935 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5934);
var inst_5936 = cljs.core._EQ_.call(null,inst_5935,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5937 = ((inst_5933) && (inst_5936));
var state_6022__$1 = (function (){var statearr_6047 = state_6022;
(statearr_6047[(14)] = inst_5932__$1);

return statearr_6047;
})();
if(cljs.core.truth_(inst_5937)){
var statearr_6048_6534 = state_6022__$1;
(statearr_6048_6534[(1)] = (41));

} else {
var statearr_6049_6535 = state_6022__$1;
(statearr_6049_6535[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (9))){
var _ = (function (){var statearr_6050 = state_6022;
(statearr_6050[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6050;
})();
var state_6022__$1 = state_6022;
var ex6045 = (state_6022__$1[(2)]);
var statearr_6051_6536 = state_6022__$1;
(statearr_6051_6536[(5)] = ex6045);


var statearr_6052_6537 = state_6022__$1;
(statearr_6052_6537[(1)] = (8));

(statearr_6052_6537[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (41))){
var inst_5932 = (state_6022[(14)]);
var inst_5939 = (function(){throw inst_5932})();
var state_6022__$1 = state_6022;
var statearr_6053_6538 = state_6022__$1;
(statearr_6053_6538[(2)] = inst_5939);

(statearr_6053_6538[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (10))){
var inst_5774 = (state_6022[(15)]);
var inst_5774__$1 = (state_6022[(2)]);
var inst_5775 = (inst_5774__$1 instanceof cljs.core.ExceptionInfo);
var inst_5776 = cljs.core.ex_data.call(null,inst_5774__$1);
var inst_5777 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5776);
var inst_5778 = cljs.core._EQ_.call(null,inst_5777,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5779 = ((inst_5775) && (inst_5778));
var state_6022__$1 = (function (){var statearr_6054 = state_6022;
(statearr_6054[(15)] = inst_5774__$1);

return statearr_6054;
})();
if(cljs.core.truth_(inst_5779)){
var statearr_6055_6539 = state_6022__$1;
(statearr_6055_6539[(1)] = (11));

} else {
var statearr_6056_6540 = state_6022__$1;
(statearr_6056_6540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (42))){
var inst_5932 = (state_6022[(14)]);
var state_6022__$1 = state_6022;
var statearr_6057_6541 = state_6022__$1;
(statearr_6057_6541[(2)] = inst_5932);

(statearr_6057_6541[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (11))){
var inst_5774 = (state_6022[(15)]);
var inst_5781 = (function(){throw inst_5774})();
var state_6022__$1 = state_6022;
var statearr_6058_6542 = state_6022__$1;
(statearr_6058_6542[(2)] = inst_5781);

(statearr_6058_6542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (43))){
var inst_5942 = (state_6022[(2)]);
var inst_5943 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_5944 = cljs.core.second.call(null,e2e.dao.terms);
var inst_5945 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_5944);
var inst_5946 = [e2e.dao.dao_acc,inst_5945];
var inst_5947 = cljs.core.PersistentHashMap.fromArrays(inst_5943,inst_5946);
var inst_5948 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_5947);
var inst_5949 = e2e.util.should_succeed.call(null,inst_5948,"can register with new terms");
var inst_5950 = cljs.core.async.interop.p__GT_c.call(null,inst_5949);
var state_6022__$1 = (function (){var statearr_6059 = state_6022;
(statearr_6059[(16)] = inst_5942);

return statearr_6059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(44),inst_5950);
} else {
if((state_val_6023 === (12))){
var inst_5774 = (state_6022[(15)]);
var state_6022__$1 = state_6022;
var statearr_6060_6543 = state_6022__$1;
(statearr_6060_6543[(2)] = inst_5774);

(statearr_6060_6543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (44))){
var inst_5952 = (state_6022[(17)]);
var inst_5952__$1 = (state_6022[(2)]);
var inst_5953 = (inst_5952__$1 instanceof cljs.core.ExceptionInfo);
var inst_5954 = cljs.core.ex_data.call(null,inst_5952__$1);
var inst_5955 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5954);
var inst_5956 = cljs.core._EQ_.call(null,inst_5955,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5957 = ((inst_5953) && (inst_5956));
var state_6022__$1 = (function (){var statearr_6061 = state_6022;
(statearr_6061[(17)] = inst_5952__$1);

return statearr_6061;
})();
if(cljs.core.truth_(inst_5957)){
var statearr_6062_6544 = state_6022__$1;
(statearr_6062_6544[(1)] = (45));

} else {
var statearr_6063_6545 = state_6022__$1;
(statearr_6063_6545[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (13))){
var inst_5785 = (state_6022[(18)]);
var inst_5786 = (state_6022[(19)]);
var inst_5784 = (state_6022[(2)]);
var inst_5785__$1 = (new cljs.core.List(null,inst_5784,null,(1),null));
var inst_5786__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_5785__$1);
var state_6022__$1 = (function (){var statearr_6064 = state_6022;
(statearr_6064[(18)] = inst_5785__$1);

(statearr_6064[(19)] = inst_5786__$1);

return statearr_6064;
})();
if(cljs.core.truth_(inst_5786__$1)){
var statearr_6065_6546 = state_6022__$1;
(statearr_6065_6546[(1)] = (14));

} else {
var statearr_6066_6547 = state_6022__$1;
(statearr_6066_6547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (45))){
var inst_5952 = (state_6022[(17)]);
var inst_5959 = (function(){throw inst_5952})();
var state_6022__$1 = state_6022;
var statearr_6067_6548 = state_6022__$1;
(statearr_6067_6548[(2)] = inst_5959);

(statearr_6067_6548[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (14))){
var inst_5785 = (state_6022[(18)]);
var inst_5788 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5789 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_5790 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_5785);
var inst_5791 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there shouldn't be any registered members",inst_5789,inst_5790];
var inst_5792 = cljs.core.PersistentHashMap.fromArrays(inst_5788,inst_5791);
var inst_5793 = cljs.test.do_report.call(null,inst_5792);
var state_6022__$1 = state_6022;
var statearr_6068_6549 = state_6022__$1;
(statearr_6068_6549[(2)] = inst_5793);

(statearr_6068_6549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (46))){
var inst_5952 = (state_6022[(17)]);
var state_6022__$1 = state_6022;
var statearr_6069_6550 = state_6022__$1;
(statearr_6069_6550[(2)] = inst_5952);

(statearr_6069_6550[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (15))){
var inst_5785 = (state_6022[(18)]);
var inst_5795 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5796 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_5797 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5798 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_5799 = cljs.core.cons.call(null,inst_5798,inst_5785);
var inst_5800 = (new cljs.core.List(null,inst_5799,null,(1),null));
var inst_5801 = (new cljs.core.List(null,inst_5797,inst_5800,(2),null));
var inst_5802 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there shouldn't be any registered members",inst_5796,inst_5801];
var inst_5803 = cljs.core.PersistentHashMap.fromArrays(inst_5795,inst_5802);
var inst_5804 = cljs.test.do_report.call(null,inst_5803);
var state_6022__$1 = state_6022;
var statearr_6070_6551 = state_6022__$1;
(statearr_6070_6551[(2)] = inst_5804);

(statearr_6070_6551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (47))){
var inst_5962 = (state_6022[(2)]);
var inst_5963 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_5964 = cljs.core.async.interop.p__GT_c.call(null,inst_5963);
var state_6022__$1 = (function (){var statearr_6071 = state_6022;
(statearr_6071[(20)] = inst_5962);

return statearr_6071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(48),inst_5964);
} else {
if((state_val_6023 === (16))){
var inst_5786 = (state_6022[(19)]);
var inst_5806 = (state_6022[(2)]);
var _ = (function (){var statearr_6072 = state_6022;
(statearr_6072[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6072;
})();
var state_6022__$1 = (function (){var statearr_6073 = state_6022;
(statearr_6073[(21)] = inst_5806);

return statearr_6073;
})();
var statearr_6074_6552 = state_6022__$1;
(statearr_6074_6552[(2)] = inst_5786);

(statearr_6074_6552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (48))){
var inst_5966 = (state_6022[(22)]);
var inst_5966__$1 = (state_6022[(2)]);
var inst_5967 = (inst_5966__$1 instanceof cljs.core.ExceptionInfo);
var inst_5968 = cljs.core.ex_data.call(null,inst_5966__$1);
var inst_5969 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5968);
var inst_5970 = cljs.core._EQ_.call(null,inst_5969,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5971 = ((inst_5967) && (inst_5970));
var state_6022__$1 = (function (){var statearr_6075 = state_6022;
(statearr_6075[(22)] = inst_5966__$1);

return statearr_6075;
})();
if(cljs.core.truth_(inst_5971)){
var statearr_6076_6553 = state_6022__$1;
(statearr_6076_6553[(1)] = (49));

} else {
var statearr_6077_6554 = state_6022__$1;
(statearr_6077_6554[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (17))){
var inst_5819 = (state_6022[(23)]);
var inst_5819__$1 = (state_6022[(2)]);
var inst_5820 = (inst_5819__$1 instanceof cljs.core.ExceptionInfo);
var inst_5821 = cljs.core.ex_data.call(null,inst_5819__$1);
var inst_5822 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5821);
var inst_5823 = cljs.core._EQ_.call(null,inst_5822,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5824 = ((inst_5820) && (inst_5823));
var state_6022__$1 = (function (){var statearr_6078 = state_6022;
(statearr_6078[(23)] = inst_5819__$1);

return statearr_6078;
})();
if(cljs.core.truth_(inst_5824)){
var statearr_6079_6555 = state_6022__$1;
(statearr_6079_6555[(1)] = (18));

} else {
var statearr_6080_6556 = state_6022__$1;
(statearr_6080_6556[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (49))){
var inst_5966 = (state_6022[(22)]);
var inst_5973 = (function(){throw inst_5966})();
var state_6022__$1 = state_6022;
var statearr_6081_6557 = state_6022__$1;
(statearr_6081_6557[(2)] = inst_5973);

(statearr_6081_6557[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (18))){
var inst_5819 = (state_6022[(23)]);
var inst_5826 = (function(){throw inst_5819})();
var state_6022__$1 = state_6022;
var statearr_6082_6558 = state_6022__$1;
(statearr_6082_6558[(2)] = inst_5826);

(statearr_6082_6558[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (50))){
var inst_5966 = (state_6022[(22)]);
var state_6022__$1 = state_6022;
var statearr_6083_6559 = state_6022__$1;
(statearr_6083_6559[(2)] = inst_5966);

(statearr_6083_6559[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (19))){
var inst_5819 = (state_6022[(23)]);
var state_6022__$1 = state_6022;
var statearr_6084_6560 = state_6022__$1;
(statearr_6084_6560[(2)] = inst_5819);

(statearr_6084_6560[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (51))){
var inst_5976 = (state_6022[(2)]);
var inst_5977 = (function (){var $ = inst_5976;
return ((function ($,inst_5976,state_val_6023,c__19__auto__,___192__auto__,self____$1){
return (function (p1__42_SHARP_){
return cljs.core.get.call(null,p1__42_SHARP_,"account");
});
;})($,inst_5976,state_val_6023,c__19__auto__,___192__auto__,self____$1))
})();
var inst_5978 = cljs.core.group_by.call(null,inst_5977,inst_5976);
var inst_5979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5980 = [e2e.dao.dao_acc,(0),"agreedtermsversion"];
var inst_5981 = (new cljs.core.PersistentVector(null,(3),(5),inst_5979,inst_5980,null));
var inst_5982 = cljs.core.get_in.call(null,inst_5978,inst_5981);
var state_6022__$1 = (function (){var statearr_6085 = state_6022;
(statearr_6085[(24)] = inst_5982);

return statearr_6085;
})();
var statearr_6086_6561 = state_6022__$1;
(statearr_6086_6561[(2)] = null);

(statearr_6086_6561[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (20))){
var inst_5829 = (state_6022[(2)]);
var inst_5830 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_5831 = cljs.core.async.interop.p__GT_c.call(null,inst_5830);
var state_6022__$1 = (function (){var statearr_6087 = state_6022;
(statearr_6087[(25)] = inst_5829);

return statearr_6087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(21),inst_5831);
} else {
if((state_val_6023 === (52))){
var inst_5982 = (state_6022[(24)]);
var inst_5995 = (state_6022[(26)]);
var inst_5996 = (state_6022[(27)]);
var _ = (function (){var statearr_6088 = state_6022;
(statearr_6088[(4)] = cljs.core.cons.call(null,(55),(state_6022[(4)])));

return statearr_6088;
})();
var inst_5994 = (new cljs.core.List(null,(3),null,(1),null));
var inst_5995__$1 = (new cljs.core.List(null,inst_5982,inst_5994,(2),null));
var inst_5996__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5995__$1);
var state_6022__$1 = (function (){var statearr_6089 = state_6022;
(statearr_6089[(26)] = inst_5995__$1);

(statearr_6089[(27)] = inst_5996__$1);

return statearr_6089;
})();
if(cljs.core.truth_(inst_5996__$1)){
var statearr_6090_6562 = state_6022__$1;
(statearr_6090_6562[(1)] = (56));

} else {
var statearr_6091_6563 = state_6022__$1;
(statearr_6091_6563[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (21))){
var inst_5833 = (state_6022[(28)]);
var inst_5833__$1 = (state_6022[(2)]);
var inst_5834 = (inst_5833__$1 instanceof cljs.core.ExceptionInfo);
var inst_5835 = cljs.core.ex_data.call(null,inst_5833__$1);
var inst_5836 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_5835);
var inst_5837 = cljs.core._EQ_.call(null,inst_5836,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_5838 = ((inst_5834) && (inst_5837));
var state_6022__$1 = (function (){var statearr_6092 = state_6022;
(statearr_6092[(28)] = inst_5833__$1);

return statearr_6092;
})();
if(cljs.core.truth_(inst_5838)){
var statearr_6093_6564 = state_6022__$1;
(statearr_6093_6564[(1)] = (22));

} else {
var statearr_6094_6565 = state_6022__$1;
(statearr_6094_6565[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (53))){
var inst_6019 = (state_6022[(2)]);
var inst_6020 = done.call(null);
var state_6022__$1 = (function (){var statearr_6095 = state_6022;
(statearr_6095[(29)] = inst_6019);

return statearr_6095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6022__$1,inst_6020);
} else {
if((state_val_6023 === (22))){
var inst_5833 = (state_6022[(28)]);
var inst_5840 = (function(){throw inst_5833})();
var state_6022__$1 = state_6022;
var statearr_6096_6566 = state_6022__$1;
(statearr_6096_6566[(2)] = inst_5840);

(statearr_6096_6566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (54))){
var inst_5983 = (state_6022[(2)]);
var inst_5984 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_5986 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"member not found in table",inst_5985,inst_5983];
var inst_5987 = cljs.core.PersistentHashMap.fromArrays(inst_5984,inst_5986);
var inst_5988 = cljs.test.do_report.call(null,inst_5987);
var state_6022__$1 = state_6022;
var statearr_6098_6567 = state_6022__$1;
(statearr_6098_6567[(2)] = inst_5988);

(statearr_6098_6567[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (23))){
var inst_5833 = (state_6022[(28)]);
var state_6022__$1 = state_6022;
var statearr_6099_6568 = state_6022__$1;
(statearr_6099_6568[(2)] = inst_5833);

(statearr_6099_6568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (55))){
var _ = (function (){var statearr_6100 = state_6022;
(statearr_6100[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6100;
})();
var state_6022__$1 = state_6022;
var ex6097 = (state_6022__$1[(2)]);
var statearr_6101_6569 = state_6022__$1;
(statearr_6101_6569[(5)] = ex6097);


var statearr_6102_6570 = state_6022__$1;
(statearr_6102_6570[(1)] = (54));

(statearr_6102_6570[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (24))){
var inst_5843 = (state_6022[(2)]);
var inst_5844 = (function (){var $ = inst_5843;
return ((function ($,inst_5843,state_val_6023,c__19__auto__,___192__auto__,self____$1){
return (function (p1__41_SHARP_){
return cljs.core.get.call(null,p1__41_SHARP_,"account");
});
;})($,inst_5843,state_val_6023,c__19__auto__,___192__auto__,self____$1))
})();
var inst_5845 = cljs.core.group_by.call(null,inst_5844,inst_5843);
var inst_5846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5847 = [e2e.dao.dao_acc,(0),"agreedtermsversion"];
var inst_5848 = (new cljs.core.PersistentVector(null,(3),(5),inst_5846,inst_5847,null));
var inst_5849 = cljs.core.get_in.call(null,inst_5845,inst_5848);
var state_6022__$1 = (function (){var statearr_6103 = state_6022;
(statearr_6103[(30)] = inst_5849);

return statearr_6103;
})();
var statearr_6104_6571 = state_6022__$1;
(statearr_6104_6571[(2)] = null);

(statearr_6104_6571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (56))){
var inst_5995 = (state_6022[(26)]);
var inst_5998 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5999 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_6000 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5995);
var inst_6001 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"member not found in table",inst_5999,inst_6000];
var inst_6002 = cljs.core.PersistentHashMap.fromArrays(inst_5998,inst_6001);
var inst_6003 = cljs.test.do_report.call(null,inst_6002);
var state_6022__$1 = state_6022;
var statearr_6105_6572 = state_6022__$1;
(statearr_6105_6572[(2)] = inst_6003);

(statearr_6105_6572[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (25))){
var inst_5849 = (state_6022[(30)]);
var inst_5862 = (state_6022[(31)]);
var inst_5863 = (state_6022[(32)]);
var _ = (function (){var statearr_6106 = state_6022;
(statearr_6106[(4)] = cljs.core.cons.call(null,(28),(state_6022[(4)])));

return statearr_6106;
})();
var inst_5861 = (new cljs.core.List(null,(2),null,(1),null));
var inst_5862__$1 = (new cljs.core.List(null,inst_5849,inst_5861,(2),null));
var inst_5863__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_5862__$1);
var state_6022__$1 = (function (){var statearr_6107 = state_6022;
(statearr_6107[(31)] = inst_5862__$1);

(statearr_6107[(32)] = inst_5863__$1);

return statearr_6107;
})();
if(cljs.core.truth_(inst_5863__$1)){
var statearr_6108_6573 = state_6022__$1;
(statearr_6108_6573[(1)] = (29));

} else {
var statearr_6109_6574 = state_6022__$1;
(statearr_6109_6574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (57))){
var inst_5995 = (state_6022[(26)]);
var inst_6005 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6006 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_6007 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6008 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_6009 = cljs.core.cons.call(null,inst_6008,inst_5995);
var inst_6010 = (new cljs.core.List(null,inst_6009,null,(1),null));
var inst_6011 = (new cljs.core.List(null,inst_6007,inst_6010,(2),null));
var inst_6012 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"member not found in table",inst_6006,inst_6011];
var inst_6013 = cljs.core.PersistentHashMap.fromArrays(inst_6005,inst_6012);
var inst_6014 = cljs.test.do_report.call(null,inst_6013);
var state_6022__$1 = state_6022;
var statearr_6110_6575 = state_6022__$1;
(statearr_6110_6575[(2)] = inst_6014);

(statearr_6110_6575[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (26))){
var inst_5886 = (state_6022[(2)]);
var inst_5887 = e2e.util.wait.call(null,(500));
var inst_5888 = cljs.core.async.interop.p__GT_c.call(null,inst_5887);
var state_6022__$1 = (function (){var statearr_6111 = state_6022;
(statearr_6111[(33)] = inst_5886);

return statearr_6111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6022__$1,(32),inst_5888);
} else {
if((state_val_6023 === (58))){
var inst_5996 = (state_6022[(27)]);
var inst_6016 = (state_6022[(2)]);
var _ = (function (){var statearr_6113 = state_6022;
(statearr_6113[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6113;
})();
var state_6022__$1 = (function (){var statearr_6114 = state_6022;
(statearr_6114[(34)] = inst_6016);

return statearr_6114;
})();
var statearr_6115_6576 = state_6022__$1;
(statearr_6115_6576[(2)] = inst_5996);

(statearr_6115_6576[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (27))){
var inst_5850 = (state_6022[(2)]);
var inst_5851 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5852 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_5853 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"incorrect terms version",inst_5852,inst_5850];
var inst_5854 = cljs.core.PersistentHashMap.fromArrays(inst_5851,inst_5853);
var inst_5855 = cljs.test.do_report.call(null,inst_5854);
var state_6022__$1 = state_6022;
var statearr_6116_6577 = state_6022__$1;
(statearr_6116_6577[(2)] = inst_5855);

(statearr_6116_6577[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (28))){
var _ = (function (){var statearr_6117 = state_6022;
(statearr_6117[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6117;
})();
var state_6022__$1 = state_6022;
var ex6112 = (state_6022__$1[(2)]);
var statearr_6118_6578 = state_6022__$1;
(statearr_6118_6578[(5)] = ex6112);


var statearr_6119_6579 = state_6022__$1;
(statearr_6119_6579[(1)] = (27));

(statearr_6119_6579[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (29))){
var inst_5862 = (state_6022[(31)]);
var inst_5865 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5866 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_5867 = cljs.core.cons.call(null,cljs.core._EQ_,inst_5862);
var inst_5868 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"incorrect terms version",inst_5866,inst_5867];
var inst_5869 = cljs.core.PersistentHashMap.fromArrays(inst_5865,inst_5868);
var inst_5870 = cljs.test.do_report.call(null,inst_5869);
var state_6022__$1 = state_6022;
var statearr_6120_6580 = state_6022__$1;
(statearr_6120_6580[(2)] = inst_5870);

(statearr_6120_6580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (30))){
var inst_5862 = (state_6022[(31)]);
var inst_5872 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_5873 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_5874 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_5875 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_5876 = cljs.core.cons.call(null,inst_5875,inst_5862);
var inst_5877 = (new cljs.core.List(null,inst_5876,null,(1),null));
var inst_5878 = (new cljs.core.List(null,inst_5874,inst_5877,(2),null));
var inst_5879 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"incorrect terms version",inst_5873,inst_5878];
var inst_5880 = cljs.core.PersistentHashMap.fromArrays(inst_5872,inst_5879);
var inst_5881 = cljs.test.do_report.call(null,inst_5880);
var state_6022__$1 = state_6022;
var statearr_6121_6581 = state_6022__$1;
(statearr_6121_6581[(2)] = inst_5881);

(statearr_6121_6581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6023 === (31))){
var inst_5863 = (state_6022[(32)]);
var inst_5883 = (state_6022[(2)]);
var _ = (function (){var statearr_6122 = state_6022;
(statearr_6122[(4)] = cljs.core.rest.call(null,(state_6022[(4)])));

return statearr_6122;
})();
var state_6022__$1 = (function (){var statearr_6123 = state_6022;
(statearr_6123[(35)] = inst_5883);

return statearr_6123;
})();
var statearr_6124_6582 = state_6022__$1;
(statearr_6124_6582[(2)] = inst_5863);

(statearr_6124_6582[(1)] = (26));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_6125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6125[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_6125[(1)] = (1));

return statearr_6125;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_6022){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_6022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e6126){var ex__18__auto__ = e6126;
var statearr_6127_6583 = state_6022;
(statearr_6127_6583[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_6022[(4)]))){
var statearr_6128_6584 = state_6022;
(statearr_6128_6584[(1)] = cljs.core.first.call(null,(state_6022[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__6585 = state_6022;
state_6022 = G__6585;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_6022){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_6022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_6129 = f__20__auto__.call(null);
(statearr_6129[(6)] = c__19__auto__);

return statearr_6129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao5736.prototype.apply = (function (self__,args5739){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args5739)));
});

e2e.dao.t_e2e$dao5736.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_6412){
var state_val_6413 = (state_6412[(1)]);
if((state_val_6413 === (32))){
var inst_6280 = (state_6412[(7)]);
var inst_6280__$1 = (state_6412[(2)]);
var inst_6281 = (inst_6280__$1 instanceof cljs.core.ExceptionInfo);
var inst_6282 = cljs.core.ex_data.call(null,inst_6280__$1);
var inst_6283 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6282);
var inst_6284 = cljs.core._EQ_.call(null,inst_6283,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6285 = ((inst_6281) && (inst_6284));
var state_6412__$1 = (function (){var statearr_6414 = state_6412;
(statearr_6414[(7)] = inst_6280__$1);

return statearr_6414;
})();
if(cljs.core.truth_(inst_6285)){
var statearr_6415_6586 = state_6412__$1;
(statearr_6415_6586[(1)] = (33));

} else {
var statearr_6416_6587 = state_6412__$1;
(statearr_6416_6587[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (1))){
var inst_6130 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_6131 = cljs.core.second.call(null,e2e.dao.terms);
var inst_6132 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_6131);
var inst_6133 = [e2e.dao.dao_acc,inst_6132];
var inst_6134 = cljs.core.PersistentHashMap.fromArrays(inst_6130,inst_6133);
var inst_6135 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_6134);
var inst_6136 = e2e.util.should_fail_with.call(null,inst_6135,"agreed terms are not the latest");
var inst_6137 = cljs.core.async.interop.p__GT_c.call(null,inst_6136);
var state_6412__$1 = state_6412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(2),inst_6137);
} else {
if((state_val_6413 === (33))){
var inst_6280 = (state_6412[(7)]);
var inst_6287 = (function(){throw inst_6280})();
var state_6412__$1 = state_6412;
var statearr_6417_6588 = state_6412__$1;
(statearr_6417_6588[(2)] = inst_6287);

(statearr_6417_6588[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (2))){
var inst_6139 = (state_6412[(8)]);
var inst_6139__$1 = (state_6412[(2)]);
var inst_6140 = (inst_6139__$1 instanceof cljs.core.ExceptionInfo);
var inst_6141 = cljs.core.ex_data.call(null,inst_6139__$1);
var inst_6142 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6141);
var inst_6143 = cljs.core._EQ_.call(null,inst_6142,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6144 = ((inst_6140) && (inst_6143));
var state_6412__$1 = (function (){var statearr_6418 = state_6412;
(statearr_6418[(8)] = inst_6139__$1);

return statearr_6418;
})();
if(cljs.core.truth_(inst_6144)){
var statearr_6419_6589 = state_6412__$1;
(statearr_6419_6589[(1)] = (3));

} else {
var statearr_6420_6590 = state_6412__$1;
(statearr_6420_6590[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (34))){
var inst_6280 = (state_6412[(7)]);
var state_6412__$1 = state_6412;
var statearr_6421_6591 = state_6412__$1;
(statearr_6421_6591[(2)] = inst_6280);

(statearr_6421_6591[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (3))){
var inst_6139 = (state_6412[(8)]);
var inst_6146 = (function(){throw inst_6139})();
var state_6412__$1 = state_6412;
var statearr_6422_6592 = state_6412__$1;
(statearr_6422_6592[(2)] = inst_6146);

(statearr_6422_6592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (35))){
var inst_6290 = (state_6412[(2)]);
var inst_6291 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_6292 = cljs.core.first.call(null,e2e.dao.terms);
var inst_6293 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_6292);
var inst_6294 = [e2e.dao.dao_acc,inst_6293];
var inst_6295 = cljs.core.PersistentHashMap.fromArrays(inst_6291,inst_6294);
var inst_6296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6297 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_6298 = [e2e.dao.owner_acc,"active"];
var inst_6299 = cljs.core.PersistentHashMap.fromArrays(inst_6297,inst_6298);
var inst_6300 = [inst_6299];
var inst_6301 = (new cljs.core.PersistentVector(null,(1),(5),inst_6296,inst_6300,null));
var inst_6302 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_6295,inst_6301);
var inst_6303 = ["missing authority of ",e2e.dao.dao_acc].join('');
var inst_6304 = e2e.util.should_fail_with.call(null,inst_6302,inst_6303);
var inst_6305 = cljs.core.async.interop.p__GT_c.call(null,inst_6304);
var state_6412__$1 = (function (){var statearr_6423 = state_6412;
(statearr_6423[(9)] = inst_6290);

return statearr_6423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(36),inst_6305);
} else {
if((state_val_6413 === (4))){
var inst_6139 = (state_6412[(8)]);
var state_6412__$1 = state_6412;
var statearr_6424_6593 = state_6412__$1;
(statearr_6424_6593[(2)] = inst_6139);

(statearr_6424_6593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (36))){
var inst_6307 = (state_6412[(10)]);
var inst_6307__$1 = (state_6412[(2)]);
var inst_6308 = (inst_6307__$1 instanceof cljs.core.ExceptionInfo);
var inst_6309 = cljs.core.ex_data.call(null,inst_6307__$1);
var inst_6310 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6309);
var inst_6311 = cljs.core._EQ_.call(null,inst_6310,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6312 = ((inst_6308) && (inst_6311));
var state_6412__$1 = (function (){var statearr_6425 = state_6412;
(statearr_6425[(10)] = inst_6307__$1);

return statearr_6425;
})();
if(cljs.core.truth_(inst_6312)){
var statearr_6426_6594 = state_6412__$1;
(statearr_6426_6594[(1)] = (37));

} else {
var statearr_6427_6595 = state_6412__$1;
(statearr_6427_6595[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (5))){
var inst_6149 = (state_6412[(2)]);
var state_6412__$1 = (function (){var statearr_6428 = state_6412;
(statearr_6428[(11)] = inst_6149);

return statearr_6428;
})();
var statearr_6429_6596 = state_6412__$1;
(statearr_6429_6596[(2)] = null);

(statearr_6429_6596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (37))){
var inst_6307 = (state_6412[(10)]);
var inst_6314 = (function(){throw inst_6307})();
var state_6412__$1 = state_6412;
var statearr_6430_6597 = state_6412__$1;
(statearr_6430_6597[(2)] = inst_6314);

(statearr_6430_6597[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (6))){
var _ = (function (){var statearr_6431 = state_6412;
(statearr_6431[(4)] = cljs.core.cons.call(null,(9),(state_6412[(4)])));

return statearr_6431;
})();
var inst_6161 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_6162 = cljs.core.async.interop.p__GT_c.call(null,inst_6161);
var state_6412__$1 = state_6412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(10),inst_6162);
} else {
if((state_val_6413 === (38))){
var inst_6307 = (state_6412[(10)]);
var state_6412__$1 = state_6412;
var statearr_6432_6598 = state_6412__$1;
(statearr_6432_6598[(2)] = inst_6307);

(statearr_6432_6598[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (7))){
var inst_6199 = (state_6412[(2)]);
var inst_6200 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_6201 = cljs.core.first.call(null,e2e.dao.terms);
var inst_6202 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_6201);
var inst_6203 = [e2e.dao.dao_acc,inst_6202];
var inst_6204 = cljs.core.PersistentHashMap.fromArrays(inst_6200,inst_6203);
var inst_6205 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_6204);
var inst_6206 = e2e.util.should_succeed.call(null,inst_6205,"can register");
var inst_6207 = cljs.core.async.interop.p__GT_c.call(null,inst_6206);
var state_6412__$1 = (function (){var statearr_6433 = state_6412;
(statearr_6433[(12)] = inst_6199);

return statearr_6433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(17),inst_6207);
} else {
if((state_val_6413 === (39))){
var inst_6317 = (state_6412[(2)]);
var inst_6318 = cljs.core.second.call(null,e2e.dao.terms);
var inst_6319 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"newmemterms",inst_6318);
var inst_6320 = cljs.core.async.interop.p__GT_c.call(null,inst_6319);
var state_6412__$1 = (function (){var statearr_6434 = state_6412;
(statearr_6434[(13)] = inst_6317);

return statearr_6434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(40),inst_6320);
} else {
if((state_val_6413 === (8))){
var inst_6150 = (state_6412[(2)]);
var inst_6151 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6152 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_6153 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"there shouldn't be any registered members",inst_6152,inst_6150];
var inst_6154 = cljs.core.PersistentHashMap.fromArrays(inst_6151,inst_6153);
var inst_6155 = cljs.test.do_report.call(null,inst_6154);
var state_6412__$1 = state_6412;
var statearr_6436_6599 = state_6412__$1;
(statearr_6436_6599[(2)] = inst_6155);

(statearr_6436_6599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (40))){
var inst_6322 = (state_6412[(14)]);
var inst_6322__$1 = (state_6412[(2)]);
var inst_6323 = (inst_6322__$1 instanceof cljs.core.ExceptionInfo);
var inst_6324 = cljs.core.ex_data.call(null,inst_6322__$1);
var inst_6325 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6324);
var inst_6326 = cljs.core._EQ_.call(null,inst_6325,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6327 = ((inst_6323) && (inst_6326));
var state_6412__$1 = (function (){var statearr_6437 = state_6412;
(statearr_6437[(14)] = inst_6322__$1);

return statearr_6437;
})();
if(cljs.core.truth_(inst_6327)){
var statearr_6438_6600 = state_6412__$1;
(statearr_6438_6600[(1)] = (41));

} else {
var statearr_6439_6601 = state_6412__$1;
(statearr_6439_6601[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (9))){
var _ = (function (){var statearr_6440 = state_6412;
(statearr_6440[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6440;
})();
var state_6412__$1 = state_6412;
var ex6435 = (state_6412__$1[(2)]);
var statearr_6441_6602 = state_6412__$1;
(statearr_6441_6602[(5)] = ex6435);


var statearr_6442_6603 = state_6412__$1;
(statearr_6442_6603[(1)] = (8));

(statearr_6442_6603[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (41))){
var inst_6322 = (state_6412[(14)]);
var inst_6329 = (function(){throw inst_6322})();
var state_6412__$1 = state_6412;
var statearr_6443_6604 = state_6412__$1;
(statearr_6443_6604[(2)] = inst_6329);

(statearr_6443_6604[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (10))){
var inst_6164 = (state_6412[(15)]);
var inst_6164__$1 = (state_6412[(2)]);
var inst_6165 = (inst_6164__$1 instanceof cljs.core.ExceptionInfo);
var inst_6166 = cljs.core.ex_data.call(null,inst_6164__$1);
var inst_6167 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6166);
var inst_6168 = cljs.core._EQ_.call(null,inst_6167,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6169 = ((inst_6165) && (inst_6168));
var state_6412__$1 = (function (){var statearr_6444 = state_6412;
(statearr_6444[(15)] = inst_6164__$1);

return statearr_6444;
})();
if(cljs.core.truth_(inst_6169)){
var statearr_6445_6605 = state_6412__$1;
(statearr_6445_6605[(1)] = (11));

} else {
var statearr_6446_6606 = state_6412__$1;
(statearr_6446_6606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (42))){
var inst_6322 = (state_6412[(14)]);
var state_6412__$1 = state_6412;
var statearr_6447_6607 = state_6412__$1;
(statearr_6447_6607[(2)] = inst_6322);

(statearr_6447_6607[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (11))){
var inst_6164 = (state_6412[(15)]);
var inst_6171 = (function(){throw inst_6164})();
var state_6412__$1 = state_6412;
var statearr_6448_6608 = state_6412__$1;
(statearr_6448_6608[(2)] = inst_6171);

(statearr_6448_6608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (43))){
var inst_6332 = (state_6412[(2)]);
var inst_6333 = [new cljs.core.Keyword(null,"account","account",(718006320)),new cljs.core.Keyword(null,"agreedterms","agreedterms",(-57400554))];
var inst_6334 = cljs.core.second.call(null,e2e.dao.terms);
var inst_6335 = new cljs.core.Keyword(null,"hash","hash",(-13781596)).cljs$core$IFn$_invoke$arity$1(inst_6334);
var inst_6336 = [e2e.dao.dao_acc,inst_6335];
var inst_6337 = cljs.core.PersistentHashMap.fromArrays(inst_6333,inst_6336);
var inst_6338 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberreg",inst_6337);
var inst_6339 = e2e.util.should_succeed.call(null,inst_6338,"can register with new terms");
var inst_6340 = cljs.core.async.interop.p__GT_c.call(null,inst_6339);
var state_6412__$1 = (function (){var statearr_6449 = state_6412;
(statearr_6449[(16)] = inst_6332);

return statearr_6449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(44),inst_6340);
} else {
if((state_val_6413 === (12))){
var inst_6164 = (state_6412[(15)]);
var state_6412__$1 = state_6412;
var statearr_6450_6609 = state_6412__$1;
(statearr_6450_6609[(2)] = inst_6164);

(statearr_6450_6609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (44))){
var inst_6342 = (state_6412[(17)]);
var inst_6342__$1 = (state_6412[(2)]);
var inst_6343 = (inst_6342__$1 instanceof cljs.core.ExceptionInfo);
var inst_6344 = cljs.core.ex_data.call(null,inst_6342__$1);
var inst_6345 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6344);
var inst_6346 = cljs.core._EQ_.call(null,inst_6345,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6347 = ((inst_6343) && (inst_6346));
var state_6412__$1 = (function (){var statearr_6451 = state_6412;
(statearr_6451[(17)] = inst_6342__$1);

return statearr_6451;
})();
if(cljs.core.truth_(inst_6347)){
var statearr_6452_6610 = state_6412__$1;
(statearr_6452_6610[(1)] = (45));

} else {
var statearr_6453_6611 = state_6412__$1;
(statearr_6453_6611[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (13))){
var inst_6175 = (state_6412[(18)]);
var inst_6176 = (state_6412[(19)]);
var inst_6174 = (state_6412[(2)]);
var inst_6175__$1 = (new cljs.core.List(null,inst_6174,null,(1),null));
var inst_6176__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_6175__$1);
var state_6412__$1 = (function (){var statearr_6454 = state_6412;
(statearr_6454[(18)] = inst_6175__$1);

(statearr_6454[(19)] = inst_6176__$1);

return statearr_6454;
})();
if(cljs.core.truth_(inst_6176__$1)){
var statearr_6455_6612 = state_6412__$1;
(statearr_6455_6612[(1)] = (14));

} else {
var statearr_6456_6613 = state_6412__$1;
(statearr_6456_6613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (45))){
var inst_6342 = (state_6412[(17)]);
var inst_6349 = (function(){throw inst_6342})();
var state_6412__$1 = state_6412;
var statearr_6457_6614 = state_6412__$1;
(statearr_6457_6614[(2)] = inst_6349);

(statearr_6457_6614[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (14))){
var inst_6175 = (state_6412[(18)]);
var inst_6178 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6179 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_6180 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_6175);
var inst_6181 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"there shouldn't be any registered members",inst_6179,inst_6180];
var inst_6182 = cljs.core.PersistentHashMap.fromArrays(inst_6178,inst_6181);
var inst_6183 = cljs.test.do_report.call(null,inst_6182);
var state_6412__$1 = state_6412;
var statearr_6458_6615 = state_6412__$1;
(statearr_6458_6615[(2)] = inst_6183);

(statearr_6458_6615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (46))){
var inst_6342 = (state_6412[(17)]);
var state_6412__$1 = state_6412;
var statearr_6459_6616 = state_6412__$1;
(statearr_6459_6616[(2)] = inst_6342);

(statearr_6459_6616[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (15))){
var inst_6175 = (state_6412[(18)]);
var inst_6185 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6186 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),cljs.core.list(new cljs.core.Symbol(null,"<p!","<p!",(1137522561),null),cljs.core.list(new cljs.core.Symbol("eos","get-table-rows","eos/get-table-rows",(1204342064),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),new cljs.core.Symbol(null,"dao-acc","dao-acc",(-2058366865),null),"member")));
var inst_6187 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6188 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_6189 = cljs.core.cons.call(null,inst_6188,inst_6175);
var inst_6190 = (new cljs.core.List(null,inst_6189,null,(1),null));
var inst_6191 = (new cljs.core.List(null,inst_6187,inst_6190,(2),null));
var inst_6192 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"there shouldn't be any registered members",inst_6186,inst_6191];
var inst_6193 = cljs.core.PersistentHashMap.fromArrays(inst_6185,inst_6192);
var inst_6194 = cljs.test.do_report.call(null,inst_6193);
var state_6412__$1 = state_6412;
var statearr_6460_6617 = state_6412__$1;
(statearr_6460_6617[(2)] = inst_6194);

(statearr_6460_6617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (47))){
var inst_6352 = (state_6412[(2)]);
var inst_6353 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_6354 = cljs.core.async.interop.p__GT_c.call(null,inst_6353);
var state_6412__$1 = (function (){var statearr_6461 = state_6412;
(statearr_6461[(20)] = inst_6352);

return statearr_6461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(48),inst_6354);
} else {
if((state_val_6413 === (16))){
var inst_6176 = (state_6412[(19)]);
var inst_6196 = (state_6412[(2)]);
var _ = (function (){var statearr_6462 = state_6412;
(statearr_6462[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6462;
})();
var state_6412__$1 = (function (){var statearr_6463 = state_6412;
(statearr_6463[(21)] = inst_6196);

return statearr_6463;
})();
var statearr_6464_6618 = state_6412__$1;
(statearr_6464_6618[(2)] = inst_6176);

(statearr_6464_6618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (48))){
var inst_6356 = (state_6412[(22)]);
var inst_6356__$1 = (state_6412[(2)]);
var inst_6357 = (inst_6356__$1 instanceof cljs.core.ExceptionInfo);
var inst_6358 = cljs.core.ex_data.call(null,inst_6356__$1);
var inst_6359 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6358);
var inst_6360 = cljs.core._EQ_.call(null,inst_6359,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6361 = ((inst_6357) && (inst_6360));
var state_6412__$1 = (function (){var statearr_6465 = state_6412;
(statearr_6465[(22)] = inst_6356__$1);

return statearr_6465;
})();
if(cljs.core.truth_(inst_6361)){
var statearr_6466_6619 = state_6412__$1;
(statearr_6466_6619[(1)] = (49));

} else {
var statearr_6467_6620 = state_6412__$1;
(statearr_6467_6620[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (17))){
var inst_6209 = (state_6412[(23)]);
var inst_6209__$1 = (state_6412[(2)]);
var inst_6210 = (inst_6209__$1 instanceof cljs.core.ExceptionInfo);
var inst_6211 = cljs.core.ex_data.call(null,inst_6209__$1);
var inst_6212 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6211);
var inst_6213 = cljs.core._EQ_.call(null,inst_6212,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6214 = ((inst_6210) && (inst_6213));
var state_6412__$1 = (function (){var statearr_6468 = state_6412;
(statearr_6468[(23)] = inst_6209__$1);

return statearr_6468;
})();
if(cljs.core.truth_(inst_6214)){
var statearr_6469_6621 = state_6412__$1;
(statearr_6469_6621[(1)] = (18));

} else {
var statearr_6470_6622 = state_6412__$1;
(statearr_6470_6622[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (49))){
var inst_6356 = (state_6412[(22)]);
var inst_6363 = (function(){throw inst_6356})();
var state_6412__$1 = state_6412;
var statearr_6471_6623 = state_6412__$1;
(statearr_6471_6623[(2)] = inst_6363);

(statearr_6471_6623[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (18))){
var inst_6209 = (state_6412[(23)]);
var inst_6216 = (function(){throw inst_6209})();
var state_6412__$1 = state_6412;
var statearr_6472_6624 = state_6412__$1;
(statearr_6472_6624[(2)] = inst_6216);

(statearr_6472_6624[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (50))){
var inst_6356 = (state_6412[(22)]);
var state_6412__$1 = state_6412;
var statearr_6473_6625 = state_6412__$1;
(statearr_6473_6625[(2)] = inst_6356);

(statearr_6473_6625[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (19))){
var inst_6209 = (state_6412[(23)]);
var state_6412__$1 = state_6412;
var statearr_6474_6626 = state_6412__$1;
(statearr_6474_6626[(2)] = inst_6209);

(statearr_6474_6626[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (51))){
var inst_6366 = (state_6412[(2)]);
var inst_6367 = (function (){var $ = inst_6366;
return ((function ($,inst_6366,state_val_6413,c__19__auto__,___192__auto__){
return (function (p1__42_SHARP_){
return cljs.core.get.call(null,p1__42_SHARP_,"account");
});
;})($,inst_6366,state_val_6413,c__19__auto__,___192__auto__))
})();
var inst_6368 = cljs.core.group_by.call(null,inst_6367,inst_6366);
var inst_6369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6370 = [e2e.dao.dao_acc,(0),"agreedtermsversion"];
var inst_6371 = (new cljs.core.PersistentVector(null,(3),(5),inst_6369,inst_6370,null));
var inst_6372 = cljs.core.get_in.call(null,inst_6368,inst_6371);
var state_6412__$1 = (function (){var statearr_6475 = state_6412;
(statearr_6475[(24)] = inst_6372);

return statearr_6475;
})();
var statearr_6476_6627 = state_6412__$1;
(statearr_6476_6627[(2)] = null);

(statearr_6476_6627[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (20))){
var inst_6219 = (state_6412[(2)]);
var inst_6220 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_6221 = cljs.core.async.interop.p__GT_c.call(null,inst_6220);
var state_6412__$1 = (function (){var statearr_6477 = state_6412;
(statearr_6477[(25)] = inst_6219);

return statearr_6477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(21),inst_6221);
} else {
if((state_val_6413 === (52))){
var inst_6372 = (state_6412[(24)]);
var inst_6385 = (state_6412[(26)]);
var inst_6386 = (state_6412[(27)]);
var _ = (function (){var statearr_6478 = state_6412;
(statearr_6478[(4)] = cljs.core.cons.call(null,(55),(state_6412[(4)])));

return statearr_6478;
})();
var inst_6384 = (new cljs.core.List(null,(3),null,(1),null));
var inst_6385__$1 = (new cljs.core.List(null,inst_6372,inst_6384,(2),null));
var inst_6386__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_6385__$1);
var state_6412__$1 = (function (){var statearr_6479 = state_6412;
(statearr_6479[(26)] = inst_6385__$1);

(statearr_6479[(27)] = inst_6386__$1);

return statearr_6479;
})();
if(cljs.core.truth_(inst_6386__$1)){
var statearr_6480_6628 = state_6412__$1;
(statearr_6480_6628[(1)] = (56));

} else {
var statearr_6481_6629 = state_6412__$1;
(statearr_6481_6629[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (21))){
var inst_6223 = (state_6412[(28)]);
var inst_6223__$1 = (state_6412[(2)]);
var inst_6224 = (inst_6223__$1 instanceof cljs.core.ExceptionInfo);
var inst_6225 = cljs.core.ex_data.call(null,inst_6223__$1);
var inst_6226 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6225);
var inst_6227 = cljs.core._EQ_.call(null,inst_6226,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6228 = ((inst_6224) && (inst_6227));
var state_6412__$1 = (function (){var statearr_6482 = state_6412;
(statearr_6482[(28)] = inst_6223__$1);

return statearr_6482;
})();
if(cljs.core.truth_(inst_6228)){
var statearr_6483_6630 = state_6412__$1;
(statearr_6483_6630[(1)] = (22));

} else {
var statearr_6484_6631 = state_6412__$1;
(statearr_6484_6631[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (53))){
var inst_6409 = (state_6412[(2)]);
var inst_6410 = done.call(null);
var state_6412__$1 = (function (){var statearr_6485 = state_6412;
(statearr_6485[(29)] = inst_6409);

return statearr_6485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6412__$1,inst_6410);
} else {
if((state_val_6413 === (22))){
var inst_6223 = (state_6412[(28)]);
var inst_6230 = (function(){throw inst_6223})();
var state_6412__$1 = state_6412;
var statearr_6486_6632 = state_6412__$1;
(statearr_6486_6632[(2)] = inst_6230);

(statearr_6486_6632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (54))){
var inst_6373 = (state_6412[(2)]);
var inst_6374 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6375 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_6376 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"member not found in table",inst_6375,inst_6373];
var inst_6377 = cljs.core.PersistentHashMap.fromArrays(inst_6374,inst_6376);
var inst_6378 = cljs.test.do_report.call(null,inst_6377);
var state_6412__$1 = state_6412;
var statearr_6488_6633 = state_6412__$1;
(statearr_6488_6633[(2)] = inst_6378);

(statearr_6488_6633[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (23))){
var inst_6223 = (state_6412[(28)]);
var state_6412__$1 = state_6412;
var statearr_6489_6634 = state_6412__$1;
(statearr_6489_6634[(2)] = inst_6223);

(statearr_6489_6634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (55))){
var _ = (function (){var statearr_6490 = state_6412;
(statearr_6490[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6490;
})();
var state_6412__$1 = state_6412;
var ex6487 = (state_6412__$1[(2)]);
var statearr_6491_6635 = state_6412__$1;
(statearr_6491_6635[(5)] = ex6487);


var statearr_6492_6636 = state_6412__$1;
(statearr_6492_6636[(1)] = (54));

(statearr_6492_6636[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (24))){
var inst_6233 = (state_6412[(2)]);
var inst_6234 = (function (){var $ = inst_6233;
return ((function ($,inst_6233,state_val_6413,c__19__auto__,___192__auto__){
return (function (p1__41_SHARP_){
return cljs.core.get.call(null,p1__41_SHARP_,"account");
});
;})($,inst_6233,state_val_6413,c__19__auto__,___192__auto__))
})();
var inst_6235 = cljs.core.group_by.call(null,inst_6234,inst_6233);
var inst_6236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6237 = [e2e.dao.dao_acc,(0),"agreedtermsversion"];
var inst_6238 = (new cljs.core.PersistentVector(null,(3),(5),inst_6236,inst_6237,null));
var inst_6239 = cljs.core.get_in.call(null,inst_6235,inst_6238);
var state_6412__$1 = (function (){var statearr_6493 = state_6412;
(statearr_6493[(30)] = inst_6239);

return statearr_6493;
})();
var statearr_6494_6637 = state_6412__$1;
(statearr_6494_6637[(2)] = null);

(statearr_6494_6637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (56))){
var inst_6385 = (state_6412[(26)]);
var inst_6388 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6389 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_6390 = cljs.core.cons.call(null,cljs.core._EQ_,inst_6385);
var inst_6391 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"member not found in table",inst_6389,inst_6390];
var inst_6392 = cljs.core.PersistentHashMap.fromArrays(inst_6388,inst_6391);
var inst_6393 = cljs.test.do_report.call(null,inst_6392);
var state_6412__$1 = state_6412;
var statearr_6495_6638 = state_6412__$1;
(statearr_6495_6638[(2)] = inst_6393);

(statearr_6495_6638[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (25))){
var inst_6239 = (state_6412[(30)]);
var inst_6252 = (state_6412[(31)]);
var inst_6253 = (state_6412[(32)]);
var _ = (function (){var statearr_6496 = state_6412;
(statearr_6496[(4)] = cljs.core.cons.call(null,(28),(state_6412[(4)])));

return statearr_6496;
})();
var inst_6251 = (new cljs.core.List(null,(2),null,(1),null));
var inst_6252__$1 = (new cljs.core.List(null,inst_6239,inst_6251,(2),null));
var inst_6253__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_6252__$1);
var state_6412__$1 = (function (){var statearr_6497 = state_6412;
(statearr_6497[(31)] = inst_6252__$1);

(statearr_6497[(32)] = inst_6253__$1);

return statearr_6497;
})();
if(cljs.core.truth_(inst_6253__$1)){
var statearr_6498_6639 = state_6412__$1;
(statearr_6498_6639[(1)] = (29));

} else {
var statearr_6499_6640 = state_6412__$1;
(statearr_6499_6640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (57))){
var inst_6385 = (state_6412[(26)]);
var inst_6395 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6396 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(3));
var inst_6397 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6398 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_6399 = cljs.core.cons.call(null,inst_6398,inst_6385);
var inst_6400 = (new cljs.core.List(null,inst_6399,null,(1),null));
var inst_6401 = (new cljs.core.List(null,inst_6397,inst_6400,(2),null));
var inst_6402 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"member not found in table",inst_6396,inst_6401];
var inst_6403 = cljs.core.PersistentHashMap.fromArrays(inst_6395,inst_6402);
var inst_6404 = cljs.test.do_report.call(null,inst_6403);
var state_6412__$1 = state_6412;
var statearr_6500_6641 = state_6412__$1;
(statearr_6500_6641[(2)] = inst_6404);

(statearr_6500_6641[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (26))){
var inst_6276 = (state_6412[(2)]);
var inst_6277 = e2e.util.wait.call(null,(500));
var inst_6278 = cljs.core.async.interop.p__GT_c.call(null,inst_6277);
var state_6412__$1 = (function (){var statearr_6501 = state_6412;
(statearr_6501[(33)] = inst_6276);

return statearr_6501;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6412__$1,(32),inst_6278);
} else {
if((state_val_6413 === (58))){
var inst_6386 = (state_6412[(27)]);
var inst_6406 = (state_6412[(2)]);
var _ = (function (){var statearr_6503 = state_6412;
(statearr_6503[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6503;
})();
var state_6412__$1 = (function (){var statearr_6504 = state_6412;
(statearr_6504[(34)] = inst_6406);

return statearr_6504;
})();
var statearr_6505_6642 = state_6412__$1;
(statearr_6505_6642[(2)] = inst_6386);

(statearr_6505_6642[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (27))){
var inst_6240 = (state_6412[(2)]);
var inst_6241 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6242 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_6243 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"incorrect terms version",inst_6242,inst_6240];
var inst_6244 = cljs.core.PersistentHashMap.fromArrays(inst_6241,inst_6243);
var inst_6245 = cljs.test.do_report.call(null,inst_6244);
var state_6412__$1 = state_6412;
var statearr_6506_6643 = state_6412__$1;
(statearr_6506_6643[(2)] = inst_6245);

(statearr_6506_6643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (28))){
var _ = (function (){var statearr_6507 = state_6412;
(statearr_6507[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6507;
})();
var state_6412__$1 = state_6412;
var ex6502 = (state_6412__$1[(2)]);
var statearr_6508_6644 = state_6412__$1;
(statearr_6508_6644[(5)] = ex6502);


var statearr_6509_6645 = state_6412__$1;
(statearr_6509_6645[(1)] = (27));

(statearr_6509_6645[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (29))){
var inst_6252 = (state_6412[(31)]);
var inst_6255 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6256 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_6257 = cljs.core.cons.call(null,cljs.core._EQ_,inst_6252);
var inst_6258 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"incorrect terms version",inst_6256,inst_6257];
var inst_6259 = cljs.core.PersistentHashMap.fromArrays(inst_6255,inst_6258);
var inst_6260 = cljs.test.do_report.call(null,inst_6259);
var state_6412__$1 = state_6412;
var statearr_6510_6646 = state_6412__$1;
(statearr_6510_6646[(2)] = inst_6260);

(statearr_6510_6646[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (30))){
var inst_6252 = (state_6412[(31)]);
var inst_6262 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6263 = cljs.core.list(new cljs.core.Symbol(null,"=","=",(-1501502141),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null),(2));
var inst_6264 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6265 = new cljs.core.Symbol(null,"=","=",(-1501502141),null);
var inst_6266 = cljs.core.cons.call(null,inst_6265,inst_6252);
var inst_6267 = (new cljs.core.List(null,inst_6266,null,(1),null));
var inst_6268 = (new cljs.core.List(null,inst_6264,inst_6267,(2),null));
var inst_6269 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"incorrect terms version",inst_6263,inst_6268];
var inst_6270 = cljs.core.PersistentHashMap.fromArrays(inst_6262,inst_6269);
var inst_6271 = cljs.test.do_report.call(null,inst_6270);
var state_6412__$1 = state_6412;
var statearr_6511_6647 = state_6412__$1;
(statearr_6511_6647[(2)] = inst_6271);

(statearr_6511_6647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6413 === (31))){
var inst_6253 = (state_6412[(32)]);
var inst_6273 = (state_6412[(2)]);
var _ = (function (){var statearr_6512 = state_6412;
(statearr_6512[(4)] = cljs.core.rest.call(null,(state_6412[(4)])));

return statearr_6512;
})();
var state_6412__$1 = (function (){var statearr_6513 = state_6412;
(statearr_6513[(35)] = inst_6273);

return statearr_6513;
})();
var statearr_6514_6648 = state_6412__$1;
(statearr_6514_6648[(2)] = inst_6253);

(statearr_6514_6648[(1)] = (26));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_6515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6515[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_6515[(1)] = (1));

return statearr_6515;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_6412){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_6412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e6516){var ex__18__auto__ = e6516;
var statearr_6517_6649 = state_6412;
(statearr_6517_6649[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_6412[(4)]))){
var statearr_6518_6650 = state_6412;
(statearr_6518_6650[(1)] = cljs.core.first.call(null,(state_6412[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__6651 = state_6412;
state_6412 = G__6651;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_6412){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_6412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_6519 = f__20__auto__.call(null);
(statearr_6519[(6)] = c__19__auto__);

return statearr_6519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao5736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta5737","meta5737",(-2127401831),null)], null);
});

e2e.dao.t_e2e$dao5736.cljs$lang$type = true;

e2e.dao.t_e2e$dao5736.cljs$lang$ctorStr = "e2e.dao/t_e2e$dao5736";

e2e.dao.t_e2e$dao5736.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.dao/t_e2e$dao5736");
});

/**
 * Positional factory function for e2e.dao/t_e2e$dao5736.
 */
e2e.dao.__GT_t_e2e$dao5736 = (function e2e$dao$__GT_t_e2e$dao5736(meta5737){
return (new e2e.dao.t_e2e$dao5736(meta5737));
});

}

return (new e2e.dao.t_e2e$dao5736(null));
});

e2e.dao.member_register.cljs$lang$var = new cljs.core.Var(function(){return e2e.dao.member_register;},new cljs.core.Symbol("e2e.dao","member-register","e2e.dao/member-register",(-1032949905),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"member-register","member-register",(71102883),null),"e2e/dao.cljs",(25),(1),(102),(102),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.member_register)?e2e.dao.member_register.cljs$lang$test:null)]));
e2e.dao.member_unregister = (function e2e$dao$member_unregister(){
return cljs.test.test_var.call(null,e2e.dao.member_unregister.cljs$lang$var);
});
e2e.dao.member_unregister.cljs$lang$test = (function (){
if((typeof e2e !== 'undefined') && (typeof e2e.dao !== 'undefined') && (typeof e2e.dao.t_e2e$dao6652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IFn}
*/
e2e.dao.t_e2e$dao6652 = (function (meta6653){
this.meta6653 = meta6653;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
e2e.dao.t_e2e$dao6652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6654,meta6653__$1){
var self__ = this;
var _6654__$1 = this;
return (new e2e.dao.t_e2e$dao6652(meta6653__$1));
});

e2e.dao.t_e2e$dao6652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6654){
var self__ = this;
var _6654__$1 = this;
return self__.meta6653;
});

e2e.dao.t_e2e$dao6652.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

e2e.dao.t_e2e$dao6652.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___192__auto__ = self____$1;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__,self____$1){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__,self____$1){
return (function (state_6775){
var state_val_6776 = (state_6775[(1)]);
if((state_val_6776 === (1))){
var inst_6656 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6657 = [e2e.dao.dao_acc];
var inst_6658 = cljs.core.PersistentHashMap.fromArrays(inst_6656,inst_6657);
var inst_6659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6660 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_6661 = [e2e.dao.owner_acc,"active"];
var inst_6662 = cljs.core.PersistentHashMap.fromArrays(inst_6660,inst_6661);
var inst_6663 = [inst_6662];
var inst_6664 = (new cljs.core.PersistentVector(null,(1),(5),inst_6659,inst_6663,null));
var inst_6665 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6658,inst_6664);
var inst_6666 = ["missing authority of ",e2e.dao.dao_acc].join('');
var inst_6667 = e2e.util.should_fail_with.call(null,inst_6665,inst_6666);
var inst_6668 = cljs.core.async.interop.p__GT_c.call(null,inst_6667);
var state_6775__$1 = state_6775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6775__$1,(2),inst_6668);
} else {
if((state_val_6776 === (2))){
var inst_6670 = (state_6775[(7)]);
var inst_6670__$1 = (state_6775[(2)]);
var inst_6671 = (inst_6670__$1 instanceof cljs.core.ExceptionInfo);
var inst_6672 = cljs.core.ex_data.call(null,inst_6670__$1);
var inst_6673 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6672);
var inst_6674 = cljs.core._EQ_.call(null,inst_6673,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6675 = ((inst_6671) && (inst_6674));
var state_6775__$1 = (function (){var statearr_6777 = state_6775;
(statearr_6777[(7)] = inst_6670__$1);

return statearr_6777;
})();
if(cljs.core.truth_(inst_6675)){
var statearr_6778_6988 = state_6775__$1;
(statearr_6778_6988[(1)] = (3));

} else {
var statearr_6779_6989 = state_6775__$1;
(statearr_6779_6989[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (3))){
var inst_6670 = (state_6775[(7)]);
var inst_6677 = (function(){throw inst_6670})();
var state_6775__$1 = state_6775;
var statearr_6780_6990 = state_6775__$1;
(statearr_6780_6990[(2)] = inst_6677);

(statearr_6780_6990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (4))){
var inst_6670 = (state_6775[(7)]);
var state_6775__$1 = state_6775;
var statearr_6781_6991 = state_6775__$1;
(statearr_6781_6991[(2)] = inst_6670);

(statearr_6781_6991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (5))){
var inst_6680 = (state_6775[(2)]);
var inst_6681 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6682 = [e2e.dao.owner_acc];
var inst_6683 = cljs.core.PersistentHashMap.fromArrays(inst_6681,inst_6682);
var inst_6684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6685 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_6686 = [e2e.dao.owner_acc,"active"];
var inst_6687 = cljs.core.PersistentHashMap.fromArrays(inst_6685,inst_6686);
var inst_6688 = [inst_6687];
var inst_6689 = (new cljs.core.PersistentVector(null,(1),(5),inst_6684,inst_6688,null));
var inst_6690 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6683,inst_6689);
var inst_6691 = e2e.util.should_fail_with.call(null,inst_6690,"member is not registered");
var inst_6692 = cljs.core.async.interop.p__GT_c.call(null,inst_6691);
var state_6775__$1 = (function (){var statearr_6782 = state_6775;
(statearr_6782[(8)] = inst_6680);

return statearr_6782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6775__$1,(6),inst_6692);
} else {
if((state_val_6776 === (6))){
var inst_6694 = (state_6775[(9)]);
var inst_6694__$1 = (state_6775[(2)]);
var inst_6695 = (inst_6694__$1 instanceof cljs.core.ExceptionInfo);
var inst_6696 = cljs.core.ex_data.call(null,inst_6694__$1);
var inst_6697 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6696);
var inst_6698 = cljs.core._EQ_.call(null,inst_6697,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6699 = ((inst_6695) && (inst_6698));
var state_6775__$1 = (function (){var statearr_6783 = state_6775;
(statearr_6783[(9)] = inst_6694__$1);

return statearr_6783;
})();
if(cljs.core.truth_(inst_6699)){
var statearr_6784_6992 = state_6775__$1;
(statearr_6784_6992[(1)] = (7));

} else {
var statearr_6785_6993 = state_6775__$1;
(statearr_6785_6993[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (7))){
var inst_6694 = (state_6775[(9)]);
var inst_6701 = (function(){throw inst_6694})();
var state_6775__$1 = state_6775;
var statearr_6786_6994 = state_6775__$1;
(statearr_6786_6994[(2)] = inst_6701);

(statearr_6786_6994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (8))){
var inst_6694 = (state_6775[(9)]);
var state_6775__$1 = state_6775;
var statearr_6787_6995 = state_6775__$1;
(statearr_6787_6995[(2)] = inst_6694);

(statearr_6787_6995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (9))){
var inst_6704 = (state_6775[(2)]);
var inst_6705 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6706 = [e2e.dao.dao_acc];
var inst_6707 = cljs.core.PersistentHashMap.fromArrays(inst_6705,inst_6706);
var inst_6708 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6707);
var inst_6709 = e2e.util.should_succeed.call(null,inst_6708);
var inst_6710 = cljs.core.async.interop.p__GT_c.call(null,inst_6709);
var state_6775__$1 = (function (){var statearr_6788 = state_6775;
(statearr_6788[(10)] = inst_6704);

return statearr_6788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6775__$1,(10),inst_6710);
} else {
if((state_val_6776 === (10))){
var inst_6712 = (state_6775[(11)]);
var inst_6712__$1 = (state_6775[(2)]);
var inst_6713 = (inst_6712__$1 instanceof cljs.core.ExceptionInfo);
var inst_6714 = cljs.core.ex_data.call(null,inst_6712__$1);
var inst_6715 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6714);
var inst_6716 = cljs.core._EQ_.call(null,inst_6715,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6717 = ((inst_6713) && (inst_6716));
var state_6775__$1 = (function (){var statearr_6789 = state_6775;
(statearr_6789[(11)] = inst_6712__$1);

return statearr_6789;
})();
if(cljs.core.truth_(inst_6717)){
var statearr_6790_6996 = state_6775__$1;
(statearr_6790_6996[(1)] = (11));

} else {
var statearr_6791_6997 = state_6775__$1;
(statearr_6791_6997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (11))){
var inst_6712 = (state_6775[(11)]);
var inst_6719 = (function(){throw inst_6712})();
var state_6775__$1 = state_6775;
var statearr_6792_6998 = state_6775__$1;
(statearr_6792_6998[(2)] = inst_6719);

(statearr_6792_6998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (12))){
var inst_6712 = (state_6775[(11)]);
var state_6775__$1 = state_6775;
var statearr_6793_6999 = state_6775__$1;
(statearr_6793_6999[(2)] = inst_6712);

(statearr_6793_6999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (13))){
var inst_6722 = (state_6775[(2)]);
var inst_6723 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_6724 = cljs.core.async.interop.p__GT_c.call(null,inst_6723);
var state_6775__$1 = (function (){var statearr_6794 = state_6775;
(statearr_6794[(12)] = inst_6722);

return statearr_6794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6775__$1,(14),inst_6724);
} else {
if((state_val_6776 === (14))){
var inst_6726 = (state_6775[(13)]);
var inst_6726__$1 = (state_6775[(2)]);
var inst_6727 = (inst_6726__$1 instanceof cljs.core.ExceptionInfo);
var inst_6728 = cljs.core.ex_data.call(null,inst_6726__$1);
var inst_6729 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6728);
var inst_6730 = cljs.core._EQ_.call(null,inst_6729,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6731 = ((inst_6727) && (inst_6730));
var state_6775__$1 = (function (){var statearr_6795 = state_6775;
(statearr_6795[(13)] = inst_6726__$1);

return statearr_6795;
})();
if(cljs.core.truth_(inst_6731)){
var statearr_6796_7000 = state_6775__$1;
(statearr_6796_7000[(1)] = (15));

} else {
var statearr_6797_7001 = state_6775__$1;
(statearr_6797_7001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (15))){
var inst_6726 = (state_6775[(13)]);
var inst_6733 = (function(){throw inst_6726})();
var state_6775__$1 = state_6775;
var statearr_6798_7002 = state_6775__$1;
(statearr_6798_7002[(2)] = inst_6733);

(statearr_6798_7002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (16))){
var inst_6726 = (state_6775[(13)]);
var state_6775__$1 = state_6775;
var statearr_6799_7003 = state_6775__$1;
(statearr_6799_7003[(2)] = inst_6726);

(statearr_6799_7003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (17))){
var inst_6736 = (state_6775[(2)]);
var state_6775__$1 = (function (){var statearr_6800 = state_6775;
(statearr_6800[(14)] = inst_6736);

return statearr_6800;
})();
var statearr_6801_7004 = state_6775__$1;
(statearr_6801_7004[(2)] = null);

(statearr_6801_7004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (18))){
var inst_6736 = (state_6775[(14)]);
var inst_6748 = (state_6775[(15)]);
var inst_6749 = (state_6775[(16)]);
var _ = (function (){var statearr_6802 = state_6775;
(statearr_6802[(4)] = cljs.core.cons.call(null,(21),(state_6775[(4)])));

return statearr_6802;
})();
var inst_6748__$1 = (new cljs.core.List(null,inst_6736,null,(1),null));
var inst_6749__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_6748__$1);
var state_6775__$1 = (function (){var statearr_6803 = state_6775;
(statearr_6803[(15)] = inst_6748__$1);

(statearr_6803[(16)] = inst_6749__$1);

return statearr_6803;
})();
if(cljs.core.truth_(inst_6749__$1)){
var statearr_6804_7005 = state_6775__$1;
(statearr_6804_7005[(1)] = (22));

} else {
var statearr_6805_7006 = state_6775__$1;
(statearr_6805_7006[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (19))){
var inst_6772 = (state_6775[(2)]);
var inst_6773 = done.call(null);
var state_6775__$1 = (function (){var statearr_6807 = state_6775;
(statearr_6807[(17)] = inst_6772);

return statearr_6807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6775__$1,inst_6773);
} else {
if((state_val_6776 === (20))){
var inst_6737 = (state_6775[(2)]);
var inst_6738 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6739 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6740 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"unregistered member found in table",inst_6739,inst_6737];
var inst_6741 = cljs.core.PersistentHashMap.fromArrays(inst_6738,inst_6740);
var inst_6742 = cljs.test.do_report.call(null,inst_6741);
var state_6775__$1 = state_6775;
var statearr_6808_7007 = state_6775__$1;
(statearr_6808_7007[(2)] = inst_6742);

(statearr_6808_7007[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (21))){
var _ = (function (){var statearr_6809 = state_6775;
(statearr_6809[(4)] = cljs.core.rest.call(null,(state_6775[(4)])));

return statearr_6809;
})();
var state_6775__$1 = state_6775;
var ex6806 = (state_6775__$1[(2)]);
var statearr_6810_7008 = state_6775__$1;
(statearr_6810_7008[(5)] = ex6806);


var statearr_6811_7009 = state_6775__$1;
(statearr_6811_7009[(1)] = (20));

(statearr_6811_7009[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (22))){
var inst_6748 = (state_6775[(15)]);
var inst_6751 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6752 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6753 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_6748);
var inst_6754 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"unregistered member found in table",inst_6752,inst_6753];
var inst_6755 = cljs.core.PersistentHashMap.fromArrays(inst_6751,inst_6754);
var inst_6756 = cljs.test.do_report.call(null,inst_6755);
var state_6775__$1 = state_6775;
var statearr_6812_7010 = state_6775__$1;
(statearr_6812_7010[(2)] = inst_6756);

(statearr_6812_7010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (23))){
var inst_6748 = (state_6775[(15)]);
var inst_6758 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6759 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6760 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6761 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_6762 = cljs.core.cons.call(null,inst_6761,inst_6748);
var inst_6763 = (new cljs.core.List(null,inst_6762,null,(1),null));
var inst_6764 = (new cljs.core.List(null,inst_6760,inst_6763,(2),null));
var inst_6765 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"unregistered member found in table",inst_6759,inst_6764];
var inst_6766 = cljs.core.PersistentHashMap.fromArrays(inst_6758,inst_6765);
var inst_6767 = cljs.test.do_report.call(null,inst_6766);
var state_6775__$1 = state_6775;
var statearr_6813_7011 = state_6775__$1;
(statearr_6813_7011[(2)] = inst_6767);

(statearr_6813_7011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6776 === (24))){
var inst_6749 = (state_6775[(16)]);
var inst_6769 = (state_6775[(2)]);
var _ = (function (){var statearr_6814 = state_6775;
(statearr_6814[(4)] = cljs.core.rest.call(null,(state_6775[(4)])));

return statearr_6814;
})();
var state_6775__$1 = (function (){var statearr_6815 = state_6775;
(statearr_6815[(18)] = inst_6769);

return statearr_6815;
})();
var statearr_6816_7012 = state_6775__$1;
(statearr_6816_7012[(2)] = inst_6749);

(statearr_6816_7012[(1)] = (19));


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
});})(c__19__auto__,___192__auto__,self____$1))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__,self____$1){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_6817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6817[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_6817[(1)] = (1));

return statearr_6817;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_6775){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_6775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e6818){var ex__18__auto__ = e6818;
var statearr_6819_7013 = state_6775;
(statearr_6819_7013[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_6775[(4)]))){
var statearr_6820_7014 = state_6775;
(statearr_6820_7014[(1)] = cljs.core.first.call(null,(state_6775[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7015 = state_6775;
state_6775 = G__7015;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_6775){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_6775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__,self____$1))
})();
var state__21__auto__ = (function (){var statearr_6821 = f__20__auto__.call(null);
(statearr_6821[(6)] = c__19__auto__);

return statearr_6821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__,self____$1))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao6652.prototype.apply = (function (self__,args6655){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6655)));
});

e2e.dao.t_e2e$dao6652.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___192__auto__ = this;
var c__19__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19__auto__,___192__auto__){
return (function (){
var f__20__auto__ = (function (){var switch__14__auto__ = ((function (c__19__auto__,___192__auto__){
return (function (state_6941){
var state_val_6942 = (state_6941[(1)]);
if((state_val_6942 === (1))){
var inst_6822 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6823 = [e2e.dao.dao_acc];
var inst_6824 = cljs.core.PersistentHashMap.fromArrays(inst_6822,inst_6823);
var inst_6825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6826 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_6827 = [e2e.dao.owner_acc,"active"];
var inst_6828 = cljs.core.PersistentHashMap.fromArrays(inst_6826,inst_6827);
var inst_6829 = [inst_6828];
var inst_6830 = (new cljs.core.PersistentVector(null,(1),(5),inst_6825,inst_6829,null));
var inst_6831 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6824,inst_6830);
var inst_6832 = ["missing authority of ",e2e.dao.dao_acc].join('');
var inst_6833 = e2e.util.should_fail_with.call(null,inst_6831,inst_6832);
var inst_6834 = cljs.core.async.interop.p__GT_c.call(null,inst_6833);
var state_6941__$1 = state_6941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6941__$1,(2),inst_6834);
} else {
if((state_val_6942 === (2))){
var inst_6836 = (state_6941[(7)]);
var inst_6836__$1 = (state_6941[(2)]);
var inst_6837 = (inst_6836__$1 instanceof cljs.core.ExceptionInfo);
var inst_6838 = cljs.core.ex_data.call(null,inst_6836__$1);
var inst_6839 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6838);
var inst_6840 = cljs.core._EQ_.call(null,inst_6839,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6841 = ((inst_6837) && (inst_6840));
var state_6941__$1 = (function (){var statearr_6943 = state_6941;
(statearr_6943[(7)] = inst_6836__$1);

return statearr_6943;
})();
if(cljs.core.truth_(inst_6841)){
var statearr_6944_7016 = state_6941__$1;
(statearr_6944_7016[(1)] = (3));

} else {
var statearr_6945_7017 = state_6941__$1;
(statearr_6945_7017[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (3))){
var inst_6836 = (state_6941[(7)]);
var inst_6843 = (function(){throw inst_6836})();
var state_6941__$1 = state_6941;
var statearr_6946_7018 = state_6941__$1;
(statearr_6946_7018[(2)] = inst_6843);

(statearr_6946_7018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (4))){
var inst_6836 = (state_6941[(7)]);
var state_6941__$1 = state_6941;
var statearr_6947_7019 = state_6941__$1;
(statearr_6947_7019[(2)] = inst_6836);

(statearr_6947_7019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (5))){
var inst_6846 = (state_6941[(2)]);
var inst_6847 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6848 = [e2e.dao.owner_acc];
var inst_6849 = cljs.core.PersistentHashMap.fromArrays(inst_6847,inst_6848);
var inst_6850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6851 = [new cljs.core.Keyword(null,"actor","actor",(-1830560481)),new cljs.core.Keyword(null,"permission","permission",(-511292572))];
var inst_6852 = [e2e.dao.owner_acc,"active"];
var inst_6853 = cljs.core.PersistentHashMap.fromArrays(inst_6851,inst_6852);
var inst_6854 = [inst_6853];
var inst_6855 = (new cljs.core.PersistentVector(null,(1),(5),inst_6850,inst_6854,null));
var inst_6856 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6849,inst_6855);
var inst_6857 = e2e.util.should_fail_with.call(null,inst_6856,"member is not registered");
var inst_6858 = cljs.core.async.interop.p__GT_c.call(null,inst_6857);
var state_6941__$1 = (function (){var statearr_6948 = state_6941;
(statearr_6948[(8)] = inst_6846);

return statearr_6948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6941__$1,(6),inst_6858);
} else {
if((state_val_6942 === (6))){
var inst_6860 = (state_6941[(9)]);
var inst_6860__$1 = (state_6941[(2)]);
var inst_6861 = (inst_6860__$1 instanceof cljs.core.ExceptionInfo);
var inst_6862 = cljs.core.ex_data.call(null,inst_6860__$1);
var inst_6863 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6862);
var inst_6864 = cljs.core._EQ_.call(null,inst_6863,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6865 = ((inst_6861) && (inst_6864));
var state_6941__$1 = (function (){var statearr_6949 = state_6941;
(statearr_6949[(9)] = inst_6860__$1);

return statearr_6949;
})();
if(cljs.core.truth_(inst_6865)){
var statearr_6950_7020 = state_6941__$1;
(statearr_6950_7020[(1)] = (7));

} else {
var statearr_6951_7021 = state_6941__$1;
(statearr_6951_7021[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (7))){
var inst_6860 = (state_6941[(9)]);
var inst_6867 = (function(){throw inst_6860})();
var state_6941__$1 = state_6941;
var statearr_6952_7022 = state_6941__$1;
(statearr_6952_7022[(2)] = inst_6867);

(statearr_6952_7022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (8))){
var inst_6860 = (state_6941[(9)]);
var state_6941__$1 = state_6941;
var statearr_6953_7023 = state_6941__$1;
(statearr_6953_7023[(2)] = inst_6860);

(statearr_6953_7023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (9))){
var inst_6870 = (state_6941[(2)]);
var inst_6871 = [new cljs.core.Keyword(null,"account","account",(718006320))];
var inst_6872 = [e2e.dao.dao_acc];
var inst_6873 = cljs.core.PersistentHashMap.fromArrays(inst_6871,inst_6872);
var inst_6874 = eos_cljs.core.transact.call(null,e2e.dao.dao_acc,"memberunreg",inst_6873);
var inst_6875 = e2e.util.should_succeed.call(null,inst_6874);
var inst_6876 = cljs.core.async.interop.p__GT_c.call(null,inst_6875);
var state_6941__$1 = (function (){var statearr_6954 = state_6941;
(statearr_6954[(10)] = inst_6870);

return statearr_6954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6941__$1,(10),inst_6876);
} else {
if((state_val_6942 === (10))){
var inst_6878 = (state_6941[(11)]);
var inst_6878__$1 = (state_6941[(2)]);
var inst_6879 = (inst_6878__$1 instanceof cljs.core.ExceptionInfo);
var inst_6880 = cljs.core.ex_data.call(null,inst_6878__$1);
var inst_6881 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6880);
var inst_6882 = cljs.core._EQ_.call(null,inst_6881,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6883 = ((inst_6879) && (inst_6882));
var state_6941__$1 = (function (){var statearr_6955 = state_6941;
(statearr_6955[(11)] = inst_6878__$1);

return statearr_6955;
})();
if(cljs.core.truth_(inst_6883)){
var statearr_6956_7024 = state_6941__$1;
(statearr_6956_7024[(1)] = (11));

} else {
var statearr_6957_7025 = state_6941__$1;
(statearr_6957_7025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (11))){
var inst_6878 = (state_6941[(11)]);
var inst_6885 = (function(){throw inst_6878})();
var state_6941__$1 = state_6941;
var statearr_6958_7026 = state_6941__$1;
(statearr_6958_7026[(2)] = inst_6885);

(statearr_6958_7026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (12))){
var inst_6878 = (state_6941[(11)]);
var state_6941__$1 = state_6941;
var statearr_6959_7027 = state_6941__$1;
(statearr_6959_7027[(2)] = inst_6878);

(statearr_6959_7027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (13))){
var inst_6888 = (state_6941[(2)]);
var inst_6889 = eos_cljs.core.get_table_rows.call(null,e2e.dao.dao_acc,e2e.dao.dao_acc,"member");
var inst_6890 = cljs.core.async.interop.p__GT_c.call(null,inst_6889);
var state_6941__$1 = (function (){var statearr_6960 = state_6941;
(statearr_6960[(12)] = inst_6888);

return statearr_6960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6941__$1,(14),inst_6890);
} else {
if((state_val_6942 === (14))){
var inst_6892 = (state_6941[(13)]);
var inst_6892__$1 = (state_6941[(2)]);
var inst_6893 = (inst_6892__$1 instanceof cljs.core.ExceptionInfo);
var inst_6894 = cljs.core.ex_data.call(null,inst_6892__$1);
var inst_6895 = new cljs.core.Keyword(null,"error","error",(-978969032)).cljs$core$IFn$_invoke$arity$1(inst_6894);
var inst_6896 = cljs.core._EQ_.call(null,inst_6895,new cljs.core.Keyword(null,"promise-error","promise-error",(-90673560)));
var inst_6897 = ((inst_6893) && (inst_6896));
var state_6941__$1 = (function (){var statearr_6961 = state_6941;
(statearr_6961[(13)] = inst_6892__$1);

return statearr_6961;
})();
if(cljs.core.truth_(inst_6897)){
var statearr_6962_7028 = state_6941__$1;
(statearr_6962_7028[(1)] = (15));

} else {
var statearr_6963_7029 = state_6941__$1;
(statearr_6963_7029[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (15))){
var inst_6892 = (state_6941[(13)]);
var inst_6899 = (function(){throw inst_6892})();
var state_6941__$1 = state_6941;
var statearr_6964_7030 = state_6941__$1;
(statearr_6964_7030[(2)] = inst_6899);

(statearr_6964_7030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (16))){
var inst_6892 = (state_6941[(13)]);
var state_6941__$1 = state_6941;
var statearr_6965_7031 = state_6941__$1;
(statearr_6965_7031[(2)] = inst_6892);

(statearr_6965_7031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (17))){
var inst_6902 = (state_6941[(2)]);
var state_6941__$1 = (function (){var statearr_6966 = state_6941;
(statearr_6966[(14)] = inst_6902);

return statearr_6966;
})();
var statearr_6967_7032 = state_6941__$1;
(statearr_6967_7032[(2)] = null);

(statearr_6967_7032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (18))){
var inst_6902 = (state_6941[(14)]);
var inst_6914 = (state_6941[(15)]);
var inst_6915 = (state_6941[(16)]);
var _ = (function (){var statearr_6968 = state_6941;
(statearr_6968[(4)] = cljs.core.cons.call(null,(21),(state_6941[(4)])));

return statearr_6968;
})();
var inst_6914__$1 = (new cljs.core.List(null,inst_6902,null,(1),null));
var inst_6915__$1 = cljs.core.apply.call(null,cljs.core.empty_QMARK_,inst_6914__$1);
var state_6941__$1 = (function (){var statearr_6969 = state_6941;
(statearr_6969[(15)] = inst_6914__$1);

(statearr_6969[(16)] = inst_6915__$1);

return statearr_6969;
})();
if(cljs.core.truth_(inst_6915__$1)){
var statearr_6970_7033 = state_6941__$1;
(statearr_6970_7033[(1)] = (22));

} else {
var statearr_6971_7034 = state_6941__$1;
(statearr_6971_7034[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (19))){
var inst_6938 = (state_6941[(2)]);
var inst_6939 = done.call(null);
var state_6941__$1 = (function (){var statearr_6973 = state_6941;
(statearr_6973[(17)] = inst_6938);

return statearr_6973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6941__$1,inst_6939);
} else {
if((state_val_6942 === (20))){
var inst_6903 = (state_6941[(2)]);
var inst_6904 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6905 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6906 = [new cljs.core.Keyword(null,"error","error",(-978969032)),"unregistered member found in table",inst_6905,inst_6903];
var inst_6907 = cljs.core.PersistentHashMap.fromArrays(inst_6904,inst_6906);
var inst_6908 = cljs.test.do_report.call(null,inst_6907);
var state_6941__$1 = state_6941;
var statearr_6974_7035 = state_6941__$1;
(statearr_6974_7035[(2)] = inst_6908);

(statearr_6974_7035[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (21))){
var _ = (function (){var statearr_6975 = state_6941;
(statearr_6975[(4)] = cljs.core.rest.call(null,(state_6941[(4)])));

return statearr_6975;
})();
var state_6941__$1 = state_6941;
var ex6972 = (state_6941__$1[(2)]);
var statearr_6976_7036 = state_6941__$1;
(statearr_6976_7036[(5)] = ex6972);


var statearr_6977_7037 = state_6941__$1;
(statearr_6977_7037[(1)] = (20));

(statearr_6977_7037[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (22))){
var inst_6914 = (state_6941[(15)]);
var inst_6917 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6918 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6919 = cljs.core.cons.call(null,cljs.core.empty_QMARK_,inst_6914);
var inst_6920 = [new cljs.core.Keyword(null,"pass","pass",(1574159993)),"unregistered member found in table",inst_6918,inst_6919];
var inst_6921 = cljs.core.PersistentHashMap.fromArrays(inst_6917,inst_6920);
var inst_6922 = cljs.test.do_report.call(null,inst_6921);
var state_6941__$1 = state_6941;
var statearr_6978_7038 = state_6941__$1;
(statearr_6978_7038[(2)] = inst_6922);

(statearr_6978_7038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (23))){
var inst_6914 = (state_6941[(15)]);
var inst_6924 = [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"message","message",(-406056002)),new cljs.core.Keyword(null,"expected","expected",(1583670997)),new cljs.core.Keyword(null,"actual","actual",(107306363))];
var inst_6925 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",(76408555),null),new cljs.core.Symbol(null,"$","$",(-1580747756),null));
var inst_6926 = new cljs.core.Symbol(null,"not","not",(1044554643),null);
var inst_6927 = new cljs.core.Symbol(null,"empty?","empty?",(76408555),null);
var inst_6928 = cljs.core.cons.call(null,inst_6927,inst_6914);
var inst_6929 = (new cljs.core.List(null,inst_6928,null,(1),null));
var inst_6930 = (new cljs.core.List(null,inst_6926,inst_6929,(2),null));
var inst_6931 = [new cljs.core.Keyword(null,"fail","fail",(1706214930)),"unregistered member found in table",inst_6925,inst_6930];
var inst_6932 = cljs.core.PersistentHashMap.fromArrays(inst_6924,inst_6931);
var inst_6933 = cljs.test.do_report.call(null,inst_6932);
var state_6941__$1 = state_6941;
var statearr_6979_7039 = state_6941__$1;
(statearr_6979_7039[(2)] = inst_6933);

(statearr_6979_7039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",(-437573268));
} else {
if((state_val_6942 === (24))){
var inst_6915 = (state_6941[(16)]);
var inst_6935 = (state_6941[(2)]);
var _ = (function (){var statearr_6980 = state_6941;
(statearr_6980[(4)] = cljs.core.rest.call(null,(state_6941[(4)])));

return statearr_6980;
})();
var state_6941__$1 = (function (){var statearr_6981 = state_6941;
(statearr_6981[(18)] = inst_6935);

return statearr_6981;
})();
var statearr_6982_7040 = state_6941__$1;
(statearr_6982_7040[(2)] = inst_6915);

(statearr_6982_7040[(1)] = (19));


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
});})(c__19__auto__,___192__auto__))
;
return ((function (switch__14__auto__,c__19__auto__,___192__auto__){
return (function() {
var e2e$dao$state_machine__15__auto__ = null;
var e2e$dao$state_machine__15__auto____0 = (function (){
var statearr_6983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6983[(0)] = e2e$dao$state_machine__15__auto__);

(statearr_6983[(1)] = (1));

return statearr_6983;
});
var e2e$dao$state_machine__15__auto____1 = (function (state_6941){
while(true){
var ret_value__16__auto__ = (function (){try{while(true){
var result__17__auto__ = switch__14__auto__.call(null,state_6941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
continue;
} else {
return result__17__auto__;
}
break;
}
}catch (e6984){var ex__18__auto__ = e6984;
var statearr_6985_7041 = state_6941;
(statearr_6985_7041[(2)] = ex__18__auto__);


if(cljs.core.seq.call(null,(state_6941[(4)]))){
var statearr_6986_7042 = state_6941;
(statearr_6986_7042[(1)] = cljs.core.first.call(null,(state_6941[(4)])));

} else {
throw ex__18__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",(-437573268));
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16__auto__,new cljs.core.Keyword(null,"recur","recur",(-437573268)))){
var G__7043 = state_6941;
state_6941 = G__7043;
continue;
} else {
return ret_value__16__auto__;
}
break;
}
});
e2e$dao$state_machine__15__auto__ = function(state_6941){
switch(arguments.length){
case 0:
return e2e$dao$state_machine__15__auto____0.call(this);
case 1:
return e2e$dao$state_machine__15__auto____1.call(this,state_6941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$0 = e2e$dao$state_machine__15__auto____0;
e2e$dao$state_machine__15__auto__.cljs$core$IFn$_invoke$arity$1 = e2e$dao$state_machine__15__auto____1;
return e2e$dao$state_machine__15__auto__;
})()
;})(switch__14__auto__,c__19__auto__,___192__auto__))
})();
var state__21__auto__ = (function (){var statearr_6987 = f__20__auto__.call(null);
(statearr_6987[(6)] = c__19__auto__);

return statearr_6987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21__auto__);
});})(c__19__auto__,___192__auto__))
);

return c__19__auto__;
});

e2e.dao.t_e2e$dao6652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta6653","meta6653",(-2006656427),null)], null);
});

e2e.dao.t_e2e$dao6652.cljs$lang$type = true;

e2e.dao.t_e2e$dao6652.cljs$lang$ctorStr = "e2e.dao/t_e2e$dao6652";

e2e.dao.t_e2e$dao6652.cljs$lang$ctorPrWriter = (function (this__9776__auto__,writer__9777__auto__,opt__9778__auto__){
return cljs.core._write.call(null,writer__9777__auto__,"e2e.dao/t_e2e$dao6652");
});

/**
 * Positional factory function for e2e.dao/t_e2e$dao6652.
 */
e2e.dao.__GT_t_e2e$dao6652 = (function e2e$dao$__GT_t_e2e$dao6652(meta6653){
return (new e2e.dao.t_e2e$dao6652(meta6653));
});

}

return (new e2e.dao.t_e2e$dao6652(null));
});

e2e.dao.member_unregister.cljs$lang$var = new cljs.core.Var(function(){return e2e.dao.member_unregister;},new cljs.core.Symbol("e2e.dao","member-unregister","e2e.dao/member-unregister",(-752182677),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"member-unregister","member-unregister",(425589159),null),"e2e/dao.cljs",(27),(1),(148),(148),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.member_unregister)?e2e.dao.member_unregister.cljs$lang$test:null)]));
e2e.dao._main = (function e2e$dao$_main(var_args){
var args__10338__auto__ = [];
var len__10335__auto___7047 = arguments.length;
var i__10336__auto___7048 = (0);
while(true){
if((i__10336__auto___7048 < len__10335__auto___7047)){
args__10338__auto__.push((arguments[i__10336__auto___7048]));

var G__7049 = (i__10336__auto___7048 + (1));
i__10336__auto___7048 = G__7049;
continue;
} else {
}
break;
}

var argseq__10339__auto__ = ((((0) < args__10338__auto__.length))?(new cljs.core.IndexedSeq(args__10338__auto__.slice((0)),(0),null)):null);
return e2e.dao._main.cljs$core$IFn$_invoke$arity$variadic(argseq__10339__auto__);
});

e2e.dao._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.test.run_block.call(null,(function (){var env7045 = cljs.test.empty_env.call(null);
var summary7046 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",(577538877)),(0),new cljs.core.Keyword(null,"pass","pass",(1574159993)),(0),new cljs.core.Keyword(null,"fail","fail",(1706214930)),(0),new cljs.core.Keyword(null,"error","error",(-978969032)),(0),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"summary","summary",(380847952))], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env7045,summary7046){
return (function (){
cljs.test.set_env_BANG_.call(null,env7045);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",(-1701237033)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null)], null));

return cljs.test.block.call(null,(function (){var env__194__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env7045,summary7046){
return (function (){
if((env__194__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",(1253947167))], null),cljs.core.assoc,new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),e2e.dao.cljs_test_once_fixtures);

return null;
});})(env__194__auto__,env7045,summary7046))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return e2e.dao.init;},new cljs.core.Symbol("e2e.dao","init","e2e.dao/init",(-1087877975),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"init","init",(-234949907),null),"e2e/dao.cljs",(14),(1),(51),(51),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.init)?e2e.dao.init.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.dao.new_member_terms;},new cljs.core.Symbol("e2e.dao","new-member-terms","e2e.dao/new-member-terms",(-849464243),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"new-member-terms","new-member-terms",(120362641),null),"e2e/dao.cljs",(26),(1),(65),(65),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.new_member_terms)?e2e.dao.new_member_terms.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.dao.member_register;},new cljs.core.Symbol("e2e.dao","member-register","e2e.dao/member-register",(-1032949905),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"member-register","member-register",(71102883),null),"e2e/dao.cljs",(25),(1),(102),(102),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.member_register)?e2e.dao.member_register.cljs$lang$test:null)])),new cljs.core.Var(function(){return e2e.dao.member_unregister;},new cljs.core.Symbol("e2e.dao","member-unregister","e2e.dao/member-unregister",(-752182677),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null),new cljs.core.Symbol(null,"member-unregister","member-unregister",(425589159),null),"e2e/dao.cljs",(27),(1),(148),(148),cljs.core.List.EMPTY,null,(cljs.core.truth_(e2e.dao.member_unregister)?e2e.dao.member_unregister.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__194__auto__,env7045,summary7046){
return (function (){
if((env__194__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__194__auto__,env7045,summary7046))
], null));
})());
});})(env7045,summary7046))
,((function (env7045,summary7046){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",(1620675645)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"e2e.dao","e2e.dao",(691724820),null)], null));
});})(env7045,summary7046))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env7045,summary7046){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary7046,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary7046),new cljs.core.Keyword(null,"report-counters","report-counters",(-1702609242)).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env7045,summary7046))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env7045,summary7046){
return (function (){
cljs.test.set_env_BANG_.call(null,env7045);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary7046));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary7046),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",(267300563))));

return cljs.test.clear_env_BANG_.call(null);
});})(env7045,summary7046))
], null));
})());
});

e2e.dao._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
e2e.dao._main.cljs$lang$applyTo = (function (seq7044){
var self__10327__auto__ = this;
return self__10327__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7044));
});

