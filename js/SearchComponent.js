////此页面为物流管理部分公用的函数

$(document).ready(function () {
    //	输入:必须在页面中设定 search_state
    initSearchData();

});

var ROWNUBER = 4;
var SEARCH_INTERNAL_NAME = Math.pow(2, 0); //内部商品名称
var SEARCH_GOODS_ORIGINAL_NAME = Math.pow(2, 1); //原始产品名称
var SEARCH_CUSTOMER_TYPE_ID = 4; //用户组
var SEARCH_USERNAME = Math.pow(2, 3); //用户名
var SEARCH_CUSTOMER_TYPEIDS = Math.pow(2, 4);
var SEARCH_CUSTOMER_NAME = Math.pow(2, 5); //配送单位


var SEARCH_PROVIDERTYPE = Math.pow(2, 6); //供应商类型
var SEARCH_PROVIDER_NAME = Math.pow(2, 7); //供应商名称
var SEARCH_ORDER_NO = Math.pow(2, 8);


//用户管理
var SEARCH_NICKNAME = Math.pow(2, 9);
var SEARCH_USER_STATE = Math.pow(2, 10); //用户状态
//采购单
var SEARCH_GOODS_TYPES = Math.pow(2, 11);//商品类型
var SEARCH_SHORE_HOUSE_OUT_STATE = Math.pow(2, 12);//出库状态
var SEARCH_ORDER_ERROR_STATE = Math.pow(2, 13); //订单异常状态
var SEARCH_DISTRIBUTION_START_DATE = Math.pow(2, 14); //配送开始时间
var SEARCH_DISTRIBUTION_END_DATE = Math.pow(2, 15); //配送结束时间

var SEARCH_PURGECHASE_DATE_BEGIN = Math.pow(2, 16);//采购开始时间
var SEARCH_PURGECHASE_DATE_END = Math.pow(2, 17);//采购结束时间
var SEARCH_PERSTART = Math.pow(2, 18);
var SEARCH_PEREND = Math.pow(2, 19);
var SEARCH_STORENAME = Math.pow(2, 20); //库房名称
var SEARCH_LOSS_TIME_END = Math.pow(2, 21); //损耗时间结束
var SEARCH_PURGECHASE_TYPE = Math.pow(2, 22);//采购单类型
var SEARCH_LOSS_TIME_BEGIN = Math.pow(2, 23); //损耗时间开始
var SEARCH_REAL_DISTRIBUTIONDATE_START = Math.pow(2, 24); //实际配送开始时间
var SEARCH_REAL_DISTRIBUTION_DATEEND = Math.pow(2, 25); //实际配送结束时间
var SEARCH_CREATETIME_START = Math.pow(2, 26); //建单开始时间
var SEARCH_CREATETIME_END = Math.pow(2, 27); //建单结束时间
var SEARCH_ORDER_STATE = Math.pow(2, 28); //订单状态
var SEARCH_SHORE_HOUSE_IN_STATE = Math.pow(2, 29);//出库状态
var SEARCH_CENTER_STORE_HOUSE = Math.pow(2, 30);//中央库查询
var SEARCH_IN_SHORE_HOUSE_TYPE = Math.pow(2, 31); //入库类型查询
var SEARCH_AUDITLOG_STARTTIME = Math.pow(2,32);
var SEARCH_AUDITLOG_ENDTIME = Math.pow(2,33);
var SEARCH_INTIME = Math.pow(2,34);//入库时间查询
var SEARCH_PROVIDER_NAME_ID = Math.pow(2,35);//供应商名称ID
var SEARCH_LIMIT_DATE_START = Math.pow(2,36);//供应商询价截止开始时间
var SEARCH_LIMIT_DATE_END = Math.pow(2,37);//供应商询价截止结束时间
var SEARCH_PURCHASE_PRICE_STATE = Math.pow(2,38);//供应商询价截止结束时间
var SEARCH_INTIME_BEGIN=Math.pow(2,39);//入库开始时间
var SEARCH_INTIME_END=Math.pow(2,40);//入库结束时间
var SEARCH_BASICDATA_NAME=Math.pow(2,41);//name
var SEARCH_SYSUSER_NAME=Math.pow(2,42);  //SysUser中的UserName
var SEARCH_SYSUSER_CREATETIME_START=Math.pow(2,43); //SysUser中的CreateTime的开始时间
var SEARCH_SYSUSER_CREATETIME_END=Math.pow(2,44); //SysUser中的CreateTime的结束时间
var SEARCH_CUSTOMER_NO_W=Math.pow(2,45); //Customer中CustomerNO
var SEARCH_CUSTOMER_NAME_W=Math.pow(2,46); //Customer中CustomerName
var SEARCH_PHONE_NO_W=Math.pow(2,47); //Customer中Phone No.
var SEARCH_CUSTOMER_ID_W=Math.pow(2,48); //Customer中CustomerID
var SEARCH_EXCHANGEREATE_CURRENCYCODEFROM=Math.pow(2,49);
var SEARCH_EXCHANGEREATE_CURRENCYCODETO=Math.pow(2,50);
var SEARCH_ACCOUNT_NAME = Math.pow(2,51);
var SEARCH_ACCOUNT_NUMBER = Math.pow(2,52);
var SEARCH_CURRENCY_CODE = Math.pow(2,53);
var SEARCH_ACCOUNT_DETAIL_CHARGETYPE = Math.pow(2,54);
var SEARCH_ACCOUNT_DETAIL_TYPE = Math.pow(2,55);
var SEARCH_ACCOUNT_DETAIL_STARTTIME = Math.pow(2,56);
var SEARCH_ACCOUNT_DETAIL_ENDTIME = Math.pow(2,57);
var SEARCH_BASICDATATYPE_FUNDSTYPE=Math.pow(2,58);//基础数据
var SEARCH_BASICDATATYPE_ACCOUNTTYPE=Math.pow(2,59);//基础数据
var SEARCH_BASICDATATYPE_IDENTIFIERTYPE=Math.pow(2,60);//基础数据
var SEARCH_BASICDATATYPE_TRANSMODETYPE=Math.pow(2,61);//基础数据
var SEARCH_BASICDATATYPE_CONTACTTYPE=Math.pow(2,62);//基础数据
var SEARCH_BASICDATATYPE_COMMUNICATIONTYPE=Math.pow(2,63);//基础数据
var SEARCH_BASICDATATYPE_CURRENCIES=Math.pow(2,64);//基础数据
var SEARCH_BASICDATATYPE_COUNTRYCODES=Math.pow(2,65);//基础数据
var SEARCH_BASICDATATYPE_ACCOUNTPERSONROLETYPE=Math.pow(2,66);//基础数据
var SEARCH_BASICDATATYPE_ENTITYLEGALFORM=Math.pow(2,67);//基础数据
var SEARCH_BASICDATATYPE_BANKTYPE=Math.pow(2,68);//基础数据
var SEARCH_BASICDATATYPE_ENTITYPERSONROLETYPE=Math.pow(2,69);//基础数据
var SEARCH_RECEIPT_FIRSTNAME = Math.pow(2,70);
var SEARCH_CUSTOMERSURPLUS_TYPE = Math.pow(2,71);
    //receipt中的firstname
var SEARCH_RECEIPT_CREATETIME_START =Math.pow(2,72);
var SEARCH_RECEIPT_CREATETIME_END = Math.pow(2,73);
var SEARCH_TRANSACTION_CURRENCYCODE_FROM =Math.pow(2,74);
var SEARCH_TRANSACTION_CURRENCYCODE_TO = Math.pow(2,75);
var SEARCH_TRANSACTION_AMOUNTMAX = Math.pow(2,76);
var SEARCH_TRANSACTION_AMOUNTMIN = Math.pow(2,77);
var SEARCH_TRANSACTION_CREATEUSER = Math.pow(2,78);
var SEARCH_COMPANYACCOUNTS_COMPANY = Math.pow(2,79);
var SEARCH_RECEIPT_STATUS = Math.pow(2,80);
var SEARCH_REPORT_DATE_START=Math.pow(2,81);
var SEARCH_REPORT_DATE_END=Math.pow(2,82);
function buildSearchOptions(searchType) {
    var dataGroup = {
        "data0": [
            {
            "name": "内部商品名称",
            "type": "goodsName",
            "className": "easyui-combobox",
            "id": "search_internal_name"
        }, {
            "name": "原始产品名称",
            "type": "originalName",
            "className": "easyui-textbox",
            "id": "search_goods_original_name"
        }, {
            "name": "用户组",
            "type": "customerTypeId",
            "className": "easyui-combobox",
            "id": "search_customer_type_id"
        }, {
            "name": "用戶名",
            "type": "username",
            "className": "easyui-textbox",
            "id": "search_username"
        }, {
            "name": "用户组",
            "type": "customerTypeIds",
            "className": "easyui-combobox",
            "id": "search_customer_typeids"
        }, {
            "name": "配送单位",
            "type": "customerName",
            "className": "easyui-combobox",
            "id": "search_customer_name"
        }, {
            "name": "供货商类型",
            "type": "providerTypeId",
            "className": "easyui-combobox",
            "id": "search_providertype"
        }, {
            "name": "供应商名称",
            "type": "providerName",
            "className": "easyui-combobox",
            "id": "search_provider_name"
        }, {
            "name": "订单编号",
            "type": "orderNo",
            "className": "easyui-textbox",
            "id": "search_orderNo"
        }, {
            "name": "姓名",//用戶管理
            "type": "nickname",
            "className": "easyui-textbox",
            "id": "search_nickname"
        }, {
            "name": "用户状态",
            "type": "status",
            "className": "easyui-combobox",
            "id": "search_user_state"
        },
            //采购单
            {
                "name": "商品类型",
                "type": "goodsType",
                "className": "easyui-combobox",
                "id": "search_goodType"
            },   /////////要增加
            {
                "name": "订单状态",
                "type": "state",
                "className": "easyui-combobox",
                "id": "search_state"
            },
            {
                "name": "异常状态",
                "type": "flag",
                "className": "easyui-combobox",
                "id": "search_flag"
            },
            {
                "name": "配送开始时间",
                "type": "distributionDateStart",
                "className": "easyui-datebox",
                "id": "search_distribution_date_start"
            }, {
                "name": "配送结束时间",
                "type": "distributionDateEnd",
                "className": "easyui-datebox",
                "id": "search_distribution_date_end"
            },
            {
                "name": "采购开始时间",
                "type": "purchaseDateStart",
                "className": "easyui-datebox",
                "id": "search_start_date"
            }, {
                "name": "采购结束时间",
                "type": "purchaseDateEnd",
                "className": "easyui-datebox",
                "id": "search_purchase_date"
            }, {
                "name": "配送开始时间",
                "type": "perStart",
                "className": "easyui-datebox",
                "id": "search_perStart"
            }, {
                "name": "配送结束时间",
                "type": "perEnd",
                "className": "easyui-datebox",
                "id": "search_perEnd"
            }, {
                "name": "库房名称",
                "type": "storeName",
                "className": "easyui-combobox",
                "id": "search_storeName"
            }, {
                "name": "损耗开始时间",
                "type": "lossTimeBegin",
                "className": "easyui-datebox",
                "id": "search_loss_time_begin"
            }, {
                "name": "采购类型",
                "type": "purchaseType",
                "className": "easyui-combobox",
                "id": "search_purchaseType"
            },
            //库房损耗
            {
                "name": "损耗结束时间",
                "type": "lossTimeEnd",
                "className": "easyui-datebox",
                "id": "search_loss_time_end"

            },
            {
                "name": "实际配送开始时间",
                "type": "realDistributionDateStart",
                "className": "easyui-datebox",
                "id": "search_realDistributionDateStart"
            },
            {
                "name": "实际配送结束时间",
                "type": "realDistributionDateEnd",
                "className": "easyui-datebox",
                "id": "search_realDistributionDateEnd"
            },
            {
                "name": "建单开始时间",
                "type": "createTimeStart",
                "className": "easyui-datebox",
                "id": "search_createTimeStart"
            },
            {
                "name": "建单结束时间",
                "type": "createTimeEnd",
                "className": "easyui-datebox",
                "id": "search_createTimeEnd"
            }, {
                "name": "订单状态",
                "type": "state",
                "className": "easyui-combobox",
                "id": "search_order_state"
            }, {
                "name": "入库状态",
                "type": "state",
                "className": "easyui-combobox",
                "id": "search_storehouse_in_state"
            }, {
                "name": "中央库",
                "type": "storeName",
                "className": "easyui-combobox",
                "id": "search_center_store_house"
            }, {
                "name": "入库类型",
                "type": "purchaseType",
                "className": "easyui-combobox",
                "id": "search_in_store_house_type"
            },
        ],
        "data1": [
            {
                "name":"审核记录开始时间",
                "type":"startTime",
                "className":"easyui-datebox",
                "id":"search_startTime"
            },
            {
                "name":"审核记录截止时间",
                "type":"endTime",
                "className":"easyui-datebox",
                "id":"search_endTime"
            },
            {
                "name":"入库时间",
                "type":"inDate",
                "className":"easyui-datebox",
                "id":"search_in_store_house_time"
            },
            {
                "name":"供应商名称",
                "type":"providerId",
                "className":"easyui-combobox",
                "id":"search_provider_name_id",
            },
            {
                "name":"询价开始时间",
                "type":"limitDateStart",
                "className":"easyui-datebox",
                "id":"search_limit_date_start",
            },
            {
                "name":"询价结束时间",
                "type":"limitDateEnd",
                "className":"easyui-datebox",
                "id":"search_limit_date_end",
            },
            {
                "name":"询价状态",
                "type":"state",
                "className":"easyui-combobox",
                "id":"search_purchase_price_state",
            },
            {
                "name":"入库开始时间",
                "type":"inDateBegin",
                "className":"easyui-datebox",
                "id":"search_in_time_begin",
            },
            {
                "name":"入库结束时间",
                "type":"inDateEnd",
                "className":"easyui-datebox",
                "id":"search_in_time_end",
            },
            {
                "name":"Name",
                "type":"name",
                "className":"easyui-combobox",
                "id":"search_basic_name",
            },{
                "name":"UserName",
                "type":"username",
                "className":"easyui-combobox",
                "id":"search_sysuser_name",
            },{
                "name":"StartTime",
                "type":"startTime",
                "className":"easyui-datebox",
                "id":"search_sysuser_createtime_start",
            },{
                "name":"EndTime",
                "type":"endTime",
                "className":"easyui-datebox",
                "id":"search_sysuser_createtime_end",
            },{
                "name":"CustomerNO",
                "type":"customerNumber",
                "className":"easyui-textbox",
                "id":"search_customer_no_w",
            },{
                "name":"CustomerName",
                "type":"customerName",
                "className":"easyui-textbox",
                "id":"search_customer_name_w",
            },{
                "name":"Phone No.",
                "type":"phoneNumber",
                "className":"easyui-textbox",
                "id":"search_customer_phone_w",
            },{
                "name":"CustomerID",
                "type":"customerId",
                "className":"easyui-textbox",
                "id":"search_customer_id_w",
            },{
                "name":"Currency From",
                "type":"currencyCodeFrom",
                "className":"easyui-combobox",
                "id":"search_exchangeRate_currencyCodeFrom",
            },{
                "name":"Currency To",
                "type":"currencyCodeTo",
                "className":"easyui-combobox",
                "id":"search_exchangeRate_currencyCodeTo",
            },{
                "name":"AccountName",
                "type":"name",
                "className":"easyui-textbox",
                "id":"search_account_name",
            },{
                "name":"AccountNumber",
                "type":"accountNumber",
                "className":"easyui-textbox",
                "id":"search_account_number",
            },{
                "name":"CurrencyCode",
                "type":"currencyCode",
                "className":"easyui-combobox",
                "id":"search_currency_code",
            },{
                "name":"ChargeType",
                "type":"chargeTypeId",
                "className":"easyui-combobox",
                "id":"search_account_detail_chargetype",
            },{
                "name":"Type",
                "type":"type",
                "className":"easyui-combobox",
                "id":"search_account_detail_type",
            },{
                "name":"StartTime",
                "type":"createTimeStart",
                "className":"easyui-datebox",
                "id":"search_account_detail_starttime",
            },{
                "name":"EndTime",
                "type":"createTimeEnd",
                "className":"easyui-datebox",
                "id":"search_account_detail_endtime",
            },{
                "name":"FundsType",
                "type":"fundsType",
                "className":"easyui-combobox",
                "id":"search_basicdata_fundsType",
            },{
                "name":"AccountType",
                "type":"accountType",
                "className":"easyui-combobox",
                "id":"search_basicdata_accountType",
            },{
                "name":"IdentifierType",
                "type":"identifierType",
                "className":"easyui-combobox",
                "id":"search_basicdata_identifierType",
            },{
                "name":"TransmodeType",
                "type":"transmodeType",
                "className":"easyui-combobox",
                "id":"search_basicdata_transmodeType",
            },{
                "name":"ContactType",
                "type":"contactType",
                "className":"easyui-combobox",
                "id":"search_basicdata_contactType",
            },{
                "name":"CommunicationType",
                "type":"communicationType",
                "className":"easyui-combobox",
                "id":"search_basicdata_communicationType",
            }
        ],
        "data2":[
            {
                "name":"Currencies",
                "type":"currencies",
                "className":"easyui-combobox",
                "id":"search_basicdata_currencies",
            },{
                "name":"CountryCodes",
                    "type":"countryCodes",
                    "className":"easyui-combobox",
                    "id":"search_basicdata_countryCodes",
            },{
                "name":"AccountPersonRoleType",
                    "type":"accountPersonRoleType",
                    "className":"easyui-combobox",
                    "id":"search_basicdata_accountPersonRoleType",
            },{
                "name":"EntityLegalForm",
                    "type":"entityLegalForm",
                    "className":"easyui-combobox",
                    "id":"search_basicdata_entityLegalForm",
            },{
                "name":"BankType",
                    "type":"bankType",
                    "className":"easyui-combobox",
                    "id":"search_basicdata_bankType",
            },{
                "name":"EntityPersonRoleType",
                    "type":"entityPersonRoleType",
                    "className":"easyui-combobox",
                    "id":"search_basicdata_entityPersonRoleType",
            },{
                "name":"FirstName",
                "type":"firstName",
                "className":"easyui-combobox",
                "id":"search_receipt_firstName",
            },{
                "name": "Type",
                "type": "type",
                "className": "easyui-combobox",
                "id": "search_customerSurplus_type",
            },{
                "name":"StartTime",
                "type":"createTimeStart",
                "className":"easyui-datebox",
                "id":"search_receipt_createtime_start",
            },{
                "name":"EndTime",
                "type":"createTimeEnd",
                "className":"easyui-datebox",
                "id":"search_receipt_createtime_end",
            },{
                "name":"CurrencyCode From",
                "type":"fromCurrencyCode",
                "className":"easyui-combobox",
                "id":"search_transaction_currencyCode_from",
            },{
                "name":"CurrencyCode To",
                "type":"toCurrencyCode",
                "className":"easyui-combobox",
                "id":"search_transaction_currencyCode_to",
            },{
                "name":"AmountMax",
                "type":"amountMax",
                "className":"easyui-textbox",
                "id":"search_transaction_amountMax",
            },{
                "name":"AmountMin",
                "type":"amountMin",
                "className":"easyui-textbox",
                "id":"search_transaction_amountMin",
            },{
                "name":"createUser",
                "type":"username",
                "className":"easyui-combobox",
                "id":"search_transaction_createUser",
            },{
                "name":"companyAccount",
                "type":"id",
                "className":"easyui-combobox",
                "id":"search_companyAccounts_company",
            },
            {
                "name":"receiptStatus",
                "type":"status",
                "className":"easyui-combobox",
                "id":"search_receipt_status",
            },
            {
                "name":"StartDate",
                "type":"reportStartTime",
                "className":"easyui-datebox",
                "id":"search_report_date_start",
            },
            {
                "name":"EndDate",
                "type":"reportEndTime",
                "className":"easyui-datebox",
                "id":"search_report_date_end",
            },
        ]
    };

    var buttons = [{
        'name': "Search",
        'func': 'doSearch()',
        'icon': 'icon-search',
    }, {
        'name': "Reset",
        'func': 'doReset()',
        'icon': 'icon-reload',
    }
    ];
    var content = "";
    var result;
    var index = 0;
    var dataLength = parseInt(Math.log(searchType) / Math.log(Math.pow(2, 32)));
    for (var i = 0; i <= dataLength; i++) {
        var data = dataGroup["data" + i.toString()];
        var _searchType = searchType / Math.pow(Math.pow(2, 32), i);
        for (var j = 0; j < data.length; j++) {
            result = _searchType & (1 << j);
            if (result !== 0) {
                index++;
                content += "<div class = \"div_search_content\">";
                content += "<div class= \"div_search_name\">";
                content += data[j].name + '&nbsp;' + "</div>" + "<input style = \"width:80%;\"  class=\"input_search ";
                content += data[j].className + "\"  name=\"" + data[j].type + "\" id=\"" + data[j].id + "\"/></div>";

            }
        }
    }

    if (index % ROWNUBER !== 0 || index / ROWNUBER > 1) {
        var _height = $("#div_search").css('height');
        var _height = parseInt(_height);
        var res = _height + 25 * (index / ROWNUBER);
        $("#div_search").css({'height': res});
    }
    var contain = "<div id = \"div_search_contain\" class=\"easyui-panel div_search_contain\" title=\"Search\">";
    contain += content;
    contain += "<div class = \"div_search_buttonContain\">";
    for (var i = 0; i < buttons.length; i++) {
        contain += "<a href=\"#\"class=\"easyui-linkbutton div_search_button\"onclick = \"" + buttons[i].func;
        contain += "\"data-options=\"iconCls:'" + buttons[i].icon + "'\">";
        contain += buttons[i].name + '</a>';
    }
    contain += "</div>";
    contain += '</div></div>';
    return contain;

}

function initSearchData() {
    if ($("search_customer_typeids") != undefined) {
        createComponentFactory("CUSTOMER_TYPES", '#search_customer_typeids');
    }

    if ($("search_storehouse_in_state") != undefined) {
        createComponentFactory("STOREHOUSE_IN_STATE", '#search_storehouse_in_state');
        $("#search_storehouse_in_state").combobox('clear');
    }
    // if ($("search_goods_original_name") != undefined) {
    //     createComponentFactory("GOODS_ORIGINAL_NAME", '#search_goods_original_name');
    // }
    if ($("search_flag") != undefined) {
        createComponentFactory("ORDER_ERROR_STATE", '#search_flag');
        $("#search_flag").combobox('clear');
    }
    if ($("search_state") != undefined) {
        createComponentFactory("HOUSE_STATE", '#search_state');
    }
    if ($("#search_customer_type_id") != undefined) {
        createComponentFactory("CUSTOMER_TYPE", '#search_customer_type_id');
    }
    if ($("#search_customer_name") != undefined) {
        createComponentFactory("CUSTOMER_NAME", '#search_customer_name');
    }
    if ($("#search_storeName") != undefined) { //库房名称
        createComponentFactory("ALL_STROEHOUSE_NAME", '#search_storeName');
    }
    if ($("#search_verified") != undefined) {
        createComponentFactory("ISVERIFY", '#search_verified');
        $("#search_verified").combobox('clear');
    }
    if ($("#search_inId") != undefined) {
        createComponentFactory("STORE_LOSSID", '#search_inId');
        $("#search_inId").combobox('clear');
    }
    if ($("#search_purchaseType") != undefined) { //采购类型
        createComponentFactory("PURGECHASE_TYPE", '#search_purchaseType');
        $("#search_purchaseType").combobox('clear');
    }

    if ($("search_providertype") != undefined) { //供货商类型
        createComponentFactory("PROVIDER_TYPE", '#search_providertype');
    }
    if ($("search_internal_name") != undefined) { //内部商品名称
        createComponentFactory("GOODS_NAME", '#search_internal_name');
    }
    if ($("#search_provider_name") != undefined) { //供应商名称
        createComponentFactory("PROVIDER_NAME", '#search_provider_name');
    }
    if ($("#search_goodType") != undefined) {
        createComponentFactory("GOODS_TYPE", '#search_goodType');
    }
    if ($("#search_name") != undefined) {
        createComponentFactory("ROLE_NAME", '#search_name');
    }
    if ($("#search_order_state") != undefined) {
        createComponentFactory("ORDER_STATE", '#search_order_state');
    }
    if ($("#search_center_store_house") != undefined) {//中央库查询
        createComponentFactory("CENTER_STROEHOUSE_NAME", '#search_center_store_house');
    }
    if ($("#search_in_store_house_type") != undefined) {//入库类型查询
        createComponentFactory("INSHOREHOUSETYPECODE", '#search_in_store_house_type');
        $("#search_in_store_house_type").combobox('clear');
    }
    if ($("#search_user_state") != undefined) {//用户状态
        createComponentFactory("USER_STATE", '#search_user_state');
        $("#search_user_state").combobox('clear');
    }
    if ($("#search_provider_name_id") != undefined) {//用户状态
        createComponentFactory("PROVIDER_NAME_ID", '#search_provider_name_id');
        $("#search_user_state").combobox('clear');
    }
    if ($("#search_purchase_price_state") != undefined) {//用户状态
        createComponentFactory("PURCHASE_PRICE_STATE", '#search_purchase_price_state');
        $("#search_user_state").combobox('clear');
    }
    if ($("#search_sysuser_name") != undefined) {
        createComponentFactory("SYSUSER_NAME", '#search_sysuser_name');
        $("#search_sysuser_name").combobox('clear');
    }
    if ($("#search_basic_name") != undefined) {
        createComponentFactory("BASICDATA_NAME", '#search_basic_name');
        $("#search_basic_name").combobox('clear');
    }
    if ($("#search_exchangeRate_currencyCodeFrom") != undefined) {
        createComponentFactory("EXCHANGEREATE_CURRENCYCODEFROM", '#search_exchangeRate_currencyCodeFrom');
        $("#search_exchangeRate_currencyCodeFrom").combobox('clear');
    }
    if ($("#search_exchangeRate_currencyCodeTo") != undefined) {
        createComponentFactory("EXCHANGEREATE_CURRENCYCODETO", '#search_exchangeRate_currencyCodeTo');
        $("#search_exchangeRate_currencyCodeTo").combobox('clear');
    }
    if($("#search_currency_code")!= undefined){
        createComponentFactory("CURRENCY_CODE","#search_currency_code");
        $("#search_currency_code").combobox('clear');
    }
    if($("#search_account_detail_chargetype")!= undefined){
        createComponentFactory("DETAIL_CHARGETYPE","#search_account_detail_chargetype");
        $("#search_account_detail_chargetype").combobox('clear');
    }
    if($("#search_account_detail_type")!= undefined){
        createComponentFactory("DETAIL_TYPE","#search_account_detail_type");
        $("#search_account_detail_type").combobox('clear');
    }
    if($("#search_basicdata_fundsType")!= undefined){
        createComponentFactory("BASICDATA_FUNDSTYPE","#search_basicdata_fundsType");
        $("#search_basicdata_fundsType").combobox('clear');
    }
    if($("#search_basicdata_accountType")!= undefined){
        createComponentFactory("BASICDATA_ACCOUNTTYPE","#search_basicdata_accountType");
        $("#search_basicdata_accountType").combobox('clear');
    }
    if($("#search_basicdata_identifierType")!= undefined){
        createComponentFactory("BASICDATA_IDENTIFIERTYPE","#search_basicdata_identifierType");
        $("#search_basicdata_identifierType").combobox('clear');
    }
    if($("#search_basicdata_transmodeType")!= undefined){
        createComponentFactory("BASICDATA_TRANSMODETYPE","#search_basicdata_transmodeType");
        $("#search_basicdata_transmodeType").combobox('clear');
    }
    if($("#search_basicdata_contactType")!= undefined){
        createComponentFactory("BASICDATA_CONTACTTYPE","#search_basicdata_contactType");
        $("#search_basicdata_contactType").combobox('clear');
    }
    if($("#search_basicdata_communicationType")!= undefined){
        createComponentFactory("BASICDATA_COMMUNICATIONTYPE","#search_basicdata_communicationType");
        $("#search_basicdata_communicationType").combobox('clear');
    }
    if($("#search_basicdata_currencies")!= undefined){
        createComponentFactory("BASICDATA_CURRENCIES","#search_basicdata_currencies");
        $("#search_basicdata_currencies").combobox('clear');
    }
    if($("#search_basicdata_countryCodes")!= undefined){
        createComponentFactory("BASICDATA_COUNTRYCODES","#search_basicdata_countryCodes");
        $("#search_basicdata_countryCodes").combobox('clear');
    }
    if($("#search_basicdata_accountPersonRoleType")!= undefined){
        createComponentFactory("BASICDATA_ACCOUNTPERSONROLETYPE","#search_basicdata_accountPersonRoleType");
        $("#search_basicdata_accountPersonRoleType").combobox('clear');
    }
    if($("#search_basicdata_entityLegalForm")!= undefined){
        createComponentFactory("BASICDATA_ENTITYLEGALFORM","#search_basicdata_entityLegalForm");
        $("#search_basicdata_entityLegalForm").combobox('clear');
    }
    if($("#search_basicdata_bankType")!= undefined){
        createComponentFactory("BASICDATA_BANKTYPE","#search_basicdata_bankType");
        $("#search_basicdata_bankType").combobox('clear');
    }
    if($("#search_basicdata_entityPersonRoleType")!= undefined){
        createComponentFactory("BASICDATA_ENTITYPERSONROLETYPE","#search_basicdata_entityPersonRoleType");
        $("#search_basicdata_entityPersonRoleType").combobox('clear');
    }
    if($("#search_customerSurplus_type")!= undefined){
        createComponentFactory("CUSTOMERSURPLUS_TYPE","#search_customerSurplus_type");
        $("#search_customerSurplus_type").combobox('clear');
    }
    if($("#search_receipt_firstName")!=undefined){
        createComponentFactory("RECEIPT_FIRSTNAME","#search_receipt_firstName");
        $("#search_receipt_firstName").combobox('clear');
    }

    if($("#search_transaction_currencyCode_to")!=undefined){
        createComponentFactory("CURRENCY_CODE","#search_transaction_currencyCode_to");
        $("#search_transaction_currencyCode_to").combobox('clear');
    }
    if($("#search_transaction_currencyCode_from")!=undefined){
        createComponentFactory("CURRENCY_CODE","#search_transaction_currencyCode_from");
        $("#search_transaction_currencyCode_from").combobox('clear');
    }
    if ($("#search_transaction_createUser") != undefined) {
        createComponentFactory("SYSUSER_NAME", '#search_transaction_createUser');
        $("#search_transaction_createUser").combobox('clear');
    }
    if ($("#search_companyAccounts_company") != undefined) {
        createComponentFactory("ACCOUNT_COMPANY", '#search_companyAccounts_company');
        $("#search_companyAccounts_company").combobox('clear');
    }
    if ($("#search_receipt_status") != undefined) {
        createComponentFactory("RECEIPT_STATUS", '#search_receipt_status');
        $("#search_receipt_status").combobox('clear');
    }
}

function processSearchCondition() {
    if ($("#div_search") == undefined) {
        console.log("请检查ID为div_search是否存在");
        return "";
    }
    var searchCondition = "";
    $("#div_search input[name]").each(function (index) {
        if ($(this).val().trim().length != 0) {
            if (searchCondition == "") {
                searchCondition = $(this).attr("name") + "=" + $(this).val().trim();
            } else {
                searchCondition += "&" + $(this).attr("name") + "=" + $(this).val().trim();
            }
        }
    });
    return searchCondition;
}

function processSearchConditionObject() {
    var _searchCondition = {};
    $("#div_search input[name]").each(function (index) {
        if ($(this).val().trim().length != 0) {
            var value = $(this).val().replace(/\//g, '-');
            _searchCondition[$(this).attr("name")] = value.trim();
        }
    });
    return _searchCondition;
}
