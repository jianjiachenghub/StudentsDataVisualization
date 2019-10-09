// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：定义了全局使用的枚举类型常量和全局使用的特殊常量的定义

var GlobalConfig = {
    AddFlag : -1,
    Version : "2.1",
};

var DataGridValidataColor = {
    ERROR : 'background-color:#ffffb8;color:#000000;font-weight:bold;',
};
var VerifyCode = [
    {
        text : '未审核',
        value : 0,
    }, {
        text : '已审核',
        value : 1,
    },
];


//订单相关的内容
///订单错误
var OrderErrorCode = [
    {
        text : '正常',
        value : 0,
    },
    {
        text : '订单明细异常',
        value : 1,
    },
    {
        text : '订单重复异常',
        value : 2,
    },
    {
        text : '明细中缺少商品名',
        value : 3,
    },
    {
        text : '订单中单位异常',
        value : 4,
    },
];
var ORDER_ERROR_CODE = {
    NORMAL : 0,
    ABNORMALITY : 1,
    REPEATING_ABNORMALITY : 2,
};


///订单来源
var OriginCode = [
    {
        text : '手工订单',
        value : 0,
    }, {
        text : '网络订单',
        value : 1,
    }, {
        text : '微信',
        value : 2,
    },
];
//订单状态
var OrderStateCode = [
    {
        text : '删除',
        value : "d",
    }, {
        text : '下单',
        value : 1,
    }, {
        text : '审核通过',
        value : 2,
    }, {
        text : '预采购',
        value : 3,
    }, {
        text : '采购',
        value : 4,
    }, {
        text : '入库',
        value : 5,
    }, {
        text : '出库',
        value : 6,
    }, {
        text : '收货',
        value : 7,
    }, {
        text : '部分收货',
        value : 8,
    },
];
//出库时查询
var OrderStateSearchCode = [
    {
        text : '入库',
        value : 5,
    }, {
        text : '出库',
        value : 6,
    },
];

// ///订单明细状态数据
// var OrderDetailState = [
//     {
//         text : '下单',
//         value : '0',
//     },
//     {
//         text : '采购中',
//         value : '1',
//     },
//     {
//         text : '入库中',
//         value : '2',
//     },
//     {
//         text : '入库完成',
//         value : '3',
//     },
//     {
//         text : '已删除',
//         value : 'd',
//     },
// ];
var OrderDetailState = [
    {
        text : '下单',
        value : '1',
    }, {
        text : '审核通过',
        value : '2',
    }, {
        text : '预采购',
        value : '3',
    }, {
        text : '采购',
        value : '4',
    }, {
        text : '入库',
        value : '5',
    },
    {
        text : '出库',
        value : '6',
    },
    {
        text : '收货',
        value : '7',
    },
    {
        text : '退货到中央库房',
        value : '9',
    },
    {
        text : '退货到中央库房商品暂留原库',
        value : 'a',
    },
    {
        text : '退货到供应商',
        value : 'b',
    },
    {
        text : '退货不退回',
        value : 'c',
    },
    {
        text : '删除',
        value : 'd',
    },
];
///订单明细来源
var OrderDetailSource = [
    {
        text : '原始订单',
        value : '0',
    },
    {
        text : '放弃购买',
        value : '1',
    },
    {
        text : '新增购买',
        value : '2',
    },
    {
        text : '修改购买',
        value : '3',
    },
];

///订单明细错误
var OrderDetailErrorCode = [
    {
        text : '正常',
        value : '0',
    }, {
        text : '内部商品名异常',
        value : '1',
    },
    {
        text : '单价区间异常',
        value : '2',
    },
    {
        text : '数量异常',
        value : '3',
    },
    {
        text : '订货单位异常',
        value : 'd',
    },
];


///采购单状态

////采购单状态
var PurchaseCode = [
    {
        text : '删除 ',
        value : 'd',
    }, {
        text : '下单',
        value : 0,
    }, {
        text : '审核中',
        value : 1,
    }, {
        text : '审核通过',
        value : 2,
    }, {
        text : '采购中-入库中',
        value : 3,
    }, {
        text : '入库完成',
        value : 4,
    }
];

var PURCHASEORDERFLAG = {
    BOOK : 0,
    UNDER_VERIFY : 1,
    VERIFIED : 2,
};
///采购单明细状态
var PurchaseOrderDetailState = [
    {
        text : '删除 ',
        value : 'd',
    }, {
        text : '下单',
        value : 0,
    }, {
        text : '审核通过',
        value : 1,
    }, {
        text : '入库中',
        value : 2,
    }, {
        text : '入库完成',
        value : 3,
    }
];

var PURCHASE_ORDER_DETAIL_FLAG = {
    VERIFY : 1,
    IN_HOUSE : 2,
    IN_HOUSE_FINISH : 3,
};
//入库单状态
var StoreHouseInCode = [
    {
        text : "审核",
        value : 1,
    }, {
        text : "下单",
        value : 0,
    },
    {
        text : "入库完成",
        value : 2,
    }, {
        text : "损耗",
        value : 3,
    },
];

var CUSTOMER_TYPE = [
    {
        text : 'deposit',
        value : 1,
    }, {
        text : 'get out',
        value : 0,
    }
];

var STORE_HOUSE_IN_FLAG = {
    BOOK : 0,
    VERIFY : 1,
    IN_HOUSE_FINISHED : 2,
    STORE_LOSS : 3,
};


// var PursechaseTypeCode = [
//     {
//         text : '订单采购',
//         value : 0,
//     }, {
//         text : '中央库调拨',
//         value : 1,
//     }, {
//         text : '计划采购',
//         value : 2,
//     },
// ]

var PurchaseTypeCode = [
    {
        text : '订单采购',
        value : '0',
    },
    {
        text : '计划采购',
        value : '1',
    },
];

var PURCHASE_TYPE_FLAG = {
    PLAN : '1',
    ORDER : '0',
};

var InShoreHouseTypeCode = [
    {
        text : '中央库调拨',
        value : '1',
    },
    {
        text : '订单采购',
        value : '2',
    },
    {
        text : '计划采购',
        value : '3',
    },
    {
        text : '分库退货入库',
        value : '4',
    },
];

var ReturnGoods = [
    {
        text : '退货到中央库房',
        value : '9',
    },
    {
        text : '退货到中央库房商品暂留原库',
        value : 'a',
    },
    {
        text : '退货到供应商',
        value : 'b',
    },
    {
        text : '退货不退回',
        value : 'c',
    },
];


var RETURN_GOODS_CODE = {
    RETURN_TO_CENTER : '9',
    RETURN_TO_CENTER2 : 'a',
    RETURN_TO_PROVIDER : 'b',
    RETURN_NO_GOODS : 'c',
};
var VERIFY_CODE = {
    AUDIT : 1,
    UNAUDIT : 0,
};
var ORIGIN_ORDER_TYPE = {
    WECHAT : "2",
    WEB : "1",
    MANUAL : "0",
};
var SPIDER_TYPE = {
    NOW : "1",
    OLD : "2",
};
var EDIT_FLAG = {
    ADD : 'a',
    EDIT : 'e',
    DEL : 'd',
    NONE : 'n',
};

var Order_State_FlAG = {
    BOOK : '1',
};

var STORELOSS_TYPE = [
    {
        text : '冲正',
        value : 0,
    }, {
        text : '冲负',
        value : 1,
    },
];


var ORDER_DETAIL_STATE_CODE = {
    placeAnOrder : '0',
    purchaseIng : '1',
    storeHouseFinished : '2',
    delete : 'd',
    OUT_SHORE : '6',
    PRE_PURCHASE : '3',

};

var GOOD_CONVERT_FLAG = {
    add : '0',
    edit : '1',
};

var ShoreHouse_TYPE = [
    {
        text : '用户库房',
        value : 0,
    }, {
        text : '中央库房',
        value : 1,
    },
];

var SHOREHOUSE_TYPE_FLAG = {
    CENTERSHORE : '1',
    USERSHORE : '0',
};
var BLANK_PRICE_FLAG = [{
    text : "不允许",
    value : 0,
}, {
    text : "允许",
    value : 1,
},
];

//用户管理输入状态
var INPUT_STATE = [{
    text : "不可用",
    value : 0,
}, {
    text : "可用",
    value : 1,
}, {
    text : "锁定",
    value : 2,
}];

//用户管理输入状态
var INPUT_STATE_FLAG = {
    DISABLED : 0,
    VALID : 1,
    LOCKED : 2,
};

var USER_STATE = [{
    text : "Disabled",
    value : 0,
}, {
    text : "Enable",
    value : 1,
},];

var USER_STATE_CODE = {
    ENABLE : 1,
    DISABLE : 0,
};

var AUDIT_TYPE = [{
    text : '订单审核',
    value : '0'
}, {
    text : '成本审核',
    value : '1',
}];

var WXUSER_STATUS = [{
    text : "申请中",
    value : 0,
}, {
    text : "审核通过",
    value : 1,
}, {
    text : "审核不通过",
    value : 2,
}];

var WXUSER_TYPE = [{
    text : "审核员",
    value : 0,
}, {
    text : "供应商",
    value : 1,
}, {
    text : "消费者",
    value : 2,
}];


var PURCHASE_STATE_CODE = [{
    text : '删除',
    value : 'd',
}, {
    text : '草稿',
    value : '1',
}, {
    text : '正式询价',
    value : '2',
}, {
    text : '已经报价',
    value : '3',
},];

var SEX_CODE = [{
    text : 'Male',
    value : 'M',
}, {
    text : 'Female',
    value : 'F',
}];

var SYSUSER_STATUS_CODE = [{
    text : 'T',
    value : 1,
}, {
    text : 'F',
    value : 0,
}];
var BASICDATA_STATE = [{
    text : "F",
    value : '0',
}, {
    text : "T",
    value : '1',
}];
var COMPANYACCOUNT_TYPE = [{
    text : "Cash",
    value : '1',
}, {
    text : "T/T",
    value : '2',
}, {
    text : "TFPos",
    value : '3',
}];
var CURRENCYCODE = [
    {
        currencyCode : "AUD",
        value : "AUD"
    }, {
        currencyCode : "THB",
        value : "THB"
    }, {
        currencyCode : "CAD",
        value : "CAD"
    }, {
        currencyCode : "EUR",
        value : "EUR"
    }, {
        currencyCode : "HKD",
        value : "HKD"
    }, {
        currencyCode : "NZD",
        value : "AUD"
    }, {
        currencyCode : "GBP",
        value : "GBP"
    }, {
        currencyCode : "KRW",
        value : "KRW"
    }, {
        currencyCode : "MYR",
        value : "MYR"
    }, {
        currencyCode : "SGD",
        value : "SGD"
    }, {
        currencyCode : "TWD",
        value : "TWD"
    }, {
        currencyCode : "USD",
        value : "USD"
    }, {
        currencyCode : "JYP",
        value : "JYP"
    }, {
        currencyCode : "RMB",
        value : "RMB"
    }, {
        currencyCode : "ZMK",
        value : "ZMK"
    }
];
var TYPE_DATA_COMBOBOX = [{
    type : '1',
    value : "Cash"
}, {
    type : '2',
    value : 'T/T',
},
//     {
//     type : '3',
//     value : 'TFPos',
// }
];


var SYSUSER_SEX = [{
    text : "Male",
    value : "M",
}, {
    text : "Female",
    value : "F",
}];

var SYSUSER_ROLE = [{
    text : "admin",
    value : 2,
}, {
    text : "user",
    value : 3,
}];


var RECEIPT_STATUS = [{
    text : "place an order",
    value : 0,
}, {
    text : "transmit confirm process",
    value : 1,
}, {
    text : "deal complete",
    value : 4,
}, {
    text : "report process",
    value : 5,
}, {
    text : "report confirmed",
    value : 6,
}, {
    text : "report download",
    value : 7,
}];
var RECEIPT_PAYMENTTYPE = [{
    value : '0',
    text : 'Cash',
}, {
    value : '1',
    text : 'T/T',
}, {
    value : '2',
    text : 'TFPos',
}, {
    value : '4',
    text : 'AccountBalance',
}];

var RECEIPT_VISIBLE = [{
    value : '0',
    text : 'F',
}, {
    value : '1',
    text : 'T',
}];

var RECEIPT_TRANSMODECODE = [{
    value : 'A',
    text : 'BA',
}, {
    value : 'E',
    text : 'BE',
}, {
    value : 'V',
    text : 'BV',
}];

var COMPANYACCOUNTDETAILTYPE = [{
    text : "Out",
    value : 0,
}, {
    text : "In",
    value : 1,
}];

var DETAILCHARGETYPE = [{
    chargeTypeName : "customer transaction",
    chargeTypeId : 1,
}, {
    chargeTypeName : "go",
    chargeTypeId : 19,
}, {
    chargeTypeName : "sddsg",
    chargeTypeId : 15,
}, {
    chargeTypeName : "test1",
    chargeTypeId : 20,
}, {
    chargeTypeName : "test10",
    chargeTypeId : 29,
}, {
    chargeTypeName : "test11",
    chargeTypeId : 30,
}, {
    chargeTypeName : "test2",
    chargeTypeId : 21,
}, {
    chargeTypeName : "test5",
    chargeTypeId : 24,
}, {
    chargeTypeName : "test6",
    chargeTypeId : 25,
}, {
    chargeTypeName : "test7",
    chargeTypeId : 26,
}];
var gAllBasicTypeData = [{
    type : "FundsType",

}, {
    type : "AccountType",

}, {
    type : "IdentifierType",

}, {
    type : "TransmodeType",

}, {
    type : "ContactType",

}, {
    type : "CommunicationType",

}, {
    type : "Currencies",

}, {
    type : "CountryCodes",

}, {
    type : "AccountPersonRoleType",

}, {
    type : "EntityLegalForm",

}, {
    type : "BankType",

}, {
    type : "EntityPersonRoleType",
},];
var titleType = [
    {value : 'Mrs', key : '0'},
    {value : 'Mr', key : '1'},
    {value : 'Ms', key : '2'},
    {value : 'Miss', key : '3'},
];


var RECEIPT_FROMCURRENCYCODE = [{
    text : 'AMD',
    value : 'AMD',
}, {
    text : 'AHD',
    value : 'AHD',
}, {
    text : 'THB',
    value : 'THB',
}, {
    text : 'CAD',
    value : 'CAD',
}, {
    text : 'EUR',
    value : 'EUR',
}, {
    text : 'HKD',
    value : 'HKD',
}, {
    text : 'NZD',
    value : 'NZD',
}, {
    text : 'GBP',
    value : 'GBP',
}, {
    text : 'KRW',
    value : 'KRW',
}, {
    text : 'MYR',
    value : 'MYR',
}, {
    text : 'SGD',
    value : 'SGD',
}, {
    text : 'TWD',
    value : 'TWD',
}, {
    text : 'USD',
    value : 'USD',
}, {
    text : 'JPY',
    value : 'JPY',
}, {
    text : 'RMB',
    value : 'RMB',
}];

var RECEIPT_TOCURRENCYCODE = [{
    text : 'AUD',
    value : 'AUD',
}, {
    text : 'THB',
    value : 'THB',
}, {
    text : 'CAD',
    value : 'CAD',
}, {
    text : 'EUR',
    value : 'EUR',
}, {
    text : 'HKD',
    value : 'HKD',
}, {
    text : 'NZD',
    value : 'NZD',
}, {
    text : 'GBP',
    value : 'GBP',
}, {
    text : 'KRW',
    value : 'KRW',
}, {
    text : 'MYR',
    value : 'MYR',
}, {
    text : 'SGD',
    value : 'SGD',
}, {
    text : 'TWD',
    value : 'TWD',
}, {
    text : 'USD',
    value : 'USD',
}, {
    text : 'JPY',
    value : 'JPY',
}, {
    text : 'RMB',
    value : 'RMB',
}];

var REPORT_CODE = [{
    text : '-',
    value : '-',
}, {
    text : 'IFT',
    value : 'IFT',
}, {
    text : 'LCT',
    value : 'LCT',
}, {
    text : 'AIF',
    value : 'AIF',
}, {
    text : 'BCR',
    value : 'BCR',
}, {
    text : 'CTR',
    value : 'CTR',
}, {
    text : 'M',
    value : 'M',
}, {
    text : 'ORD',
    value : 'ORD',
}, {
    text : 'ORI',
    value : 'ORI',
}, {
    text : 'SPR',
    value : 'SPR',
}, {
    text : 'STR',
    value : 'STR',
}];
var LanguageType = {
    LANGUAGE_CHN : 1,
    LANGUAGE_LOCAL : 0,
};
var LanguageDataType = [
    {
        text : 'English',
        value : '0',
    }, {
        text : '人民币账号',
        value : '1',
    }
];

var transactionTypeData = [
    {
        value : '1',
        text : 'Person',
    },
    {
        value : '2',
        text : 'Account',
    },
    {
        value : '3',
        text : 'Entity',
    },
];

var transactionTypeCode = {
    Person : '1',
    Account : '2',
    Entity : '3',
};
var SwiftCode = {
    ASB : {name : 'ASB Bank', SwiftCode : 'ASBBNZ2A'},
    BNZ : {name : 'Bank of New Zealand', SwiftCode : 'BKNZNZ22'},
    ANZ : {name : 'ANZ Bank New Zealand Limited', SwiftCode : 'ANZBNZ2'},
    WPC : {name : 'Westpac New Zealand Limited', SwiftCode : 'WPACNZ2W'},
    KIWI : {name : 'KiwiBank Limited', SwiftCode : 'KIWINZ2'},
};

var RateStatus = {
    NZDIsFrom : "0",
    NZDisTo : '1',
    neither : '2',
    "0" : function (value) {
        $("#input_localRate").numberbox('setValue', 1.00);
        $("#input_amountLocal").textbox('setValue', value);
    },
    "1" : function (value) {
        $("#input_localRate").numberbox('setValue', 1.00);
        $("#input_amountLocal").textbox('setValue', value);
    },
    "2" : function (value) {
        $("#input_amountLocal").textbox('setValue', value);
    }
};

var TO_FROM_CODE = {
    TOFROM : "1",
    TOCLIENT : "0",
};
var PAYS_VERIFY = {
    VERIFY : "1",
    UNVERIFY : "0",
};

var ARRIVE_PAY_VERIFY = [
    {
        value : "1",
        text : "√"
    },
    {
        value : "0",
        text : "×"
    }
];

var TRANSACTION_STATUS = {
    PLACE_AN_ORDER : 0,//下单
    TRANSACTION : 1,//交易中
    TRANSACTION_COMPLETE : 4,//交易完成
    GENERATE_REPORT : 5,//生成报告6
    GENERATE_REPORT_VALIDATION : 6,//生成报告确认
    REPORT_HAS_BEEN_DOWNLOADED : 7,//报告已经被下载
};
var CUSTOMER_ACCOUNT_TYPE = [
    {
        value : "1",
        text : "Customer Account",
    }, {
        value : "0",
        text : "Company Account",
    }
];

var CUSTOMER_ACCOUNT_TYPE_CODE = {
    CustomerAccount : "1",
    CompanyAccount : "3",
};

var REPORTED = [
    {
        value : "1",
        text : "√"
    },
    {
        value : "0",
        text : "×"
    }
];

var REPORTED_CODE = {
    report : "√",
    unreport : "×"
};

var ISTHREE_CODE = {
    yes : "1",
    no : "0",
};

var ISTHREE = [
    {text : "yes", value : "1"},
    {text : "no", value : "0"}
];

var STATUS_CODE = [{
    text : "Active",
    value : "A"
},
    {
        text : "B",
        value : "B"
    },
    {
        text : "C",
        value : "C"
    },
    {
        text : "D",
        value : "D"
    },
    {
        text : "E",
        value : "E"
    },
    {
        text : "F",
        value : "F"
    },
    {
        text : "G",
        value : "G"
    },
];





