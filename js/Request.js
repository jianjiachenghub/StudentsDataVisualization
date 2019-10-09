function RequestHandle() {
}

// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：ajax get方法的封装，必须带有Token验证信息
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'list',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：异步函数
RequestHandle.prototype.getRemoteData = function (apiKey, restMethod, param) {
    var _url;
    if (param) {
        _url = RequestUrl.constructURL(apiKey, restMethod, param);
    } else {
        _url = RequestUrl.constructURL(apiKey, restMethod);
    }
    return $.ajax({ //调用ajax方法，从服务器获取到该订单的所有数据
        type: "get",
        headers: {
            token: sessionStorage.getItem("token"),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        url: _url,
        dataType: "json", //服务器返回的数据类型
    });
};

RequestHandle.prototype.putRemoteData = function (apiKey, restMethod, param) {
    var _url;
    _url = RequestUrl.constructURL(apiKey, restMethod);
    return $.ajax({ //调用ajax方法，从服务器获取到该订单的所有数据
        type: "put",
        headers: {
            token: sessionStorage.getItem("token"),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        url: _url,
        data: param ? JSON.stringify(param) : JSON.stringify({}),
        dataType: "json", //服务器返回的数据类型
    });
};
// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：ajax get 方法的封装,不需要带有Token
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'list',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：异步函数
RequestHandle.prototype.getRemoteDataWithOutToken = function (apiKey, restMethod, param) {
    var _url;
    if (param) {
        _url = RequestUrl.constructURL(apiKey, restMethod, param);
    } else {
        _url = RequestUrl.constructURL(apiKey, restMethod);
    }
    return $.ajax({ //调用ajax方法，从服务器获取到该订单的所有数据
        type: "get",
        url: _url,
        dataType: "json", //服务器返回的数据类型
    });
};
// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：ajax Post方法的封装,必须带有Token
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'list',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：异步函数
RequestHandle.prototype.postRemoteData = function (apiKey, restMethod, sendData) {

    var _url = RequestUrl.constructURL(apiKey, restMethod);
    return $.ajax({
        dataType: 'JSON',
        url: _url,
        data: sendData,
        type: "POST",
        headers: {
            token: sessionStorage.getItem("token"),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    }).complete(function (response) {
        if (response.status == 401) {
            var _urlToLocalLength = window.urlinfo.split("/").reverse().indexOf("UI");
            var _loginUrl = function () {
                var _dol = "";
                for (var _ = 0; _ < _urlToLocalLength; _++) {
                    _dol += "../";
                }
                return _dol + "UI/Login/Login.html";
            };
            window.location = _loginUrl();
        }
    });
};
// 创建时间：2018.12.1
// 创建人：吴永佳
// 功能说明：ajax DELETE方法的封装,必须带有Token
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'del',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：异步函数
RequestHandle.prototype.delRemoteData = function (apiKey, restMethod, sendData) {

    var _url = RequestUrl.constructURL(apiKey, restMethod);
    return $.ajax({
        dataType: 'JSON',
        url: _url,
        data: sendData,
        type: "DELETE",
        headers: {
            token: sessionStorage.getItem("token"),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
};
// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：ajax Post方法的封装,不需要带有Token
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'list',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：异步函数
RequestHandle.prototype.postRemoteDataWithOutToken = function (apiKey, restMethod, sendData) {
    sendData = JSON.stringify(sendData);
    var _url = RequestUrl.constructURL(apiKey, restMethod);
    return $.ajax({
        dataType: 'JSON',
        url: _url,
        data: sendData,
        type: "POST",
        headers: {
            token: sessionStorage.getItem("token"),
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
};

// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：全局的API后端地址构建
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// restMethod：类型为String,输入具体的API方法如'list',具体请参考后端的API
// param：类型为object，输入附加参数
// 返回：构建后的URL地址
var RequestUrl = {
    baseURL: GLOBAL_URL,
    API: {
        REPORT: "/api/ift/report",
        DEAL: "/api/ift/deal",
        RATE: "/api/ift/rate",
        SFEE: "/api/ift/sfee",
        MERGE: "/api/ift/Merge",
        REPORTBASE: "/api/ift/reportbase",
        CHARGETYPE: "/api/ift/chargetype",
        BASECODE: '/api/ift/basecode',
        RSET: "/api/ift/rset",
        CUSTOMERS: "/api/ift/customers",
        ACCOUNT: "/api/ift/account",
        ENTITY: "/api/ift/entity",
        DIRECTOR: "/api/ift/entity/director",
        ACCOUNT_DETAIL: "/api/ift/account/detail",
        ACCOUNT_STATISTICS: "/api/ift/account/Statistics",
        CUSTOMERS_ACCOUNT_DETAIL: "/api/ift/customer/account/detail",
        ACCOUNT_COMPANY: "/api/ift/account/company",
        ACCOUNT_SURPLUS: "/api/ift/account/surplus",
        GETCAPTCHA: "/getcaptcha",
        LOGIN: "/login",
        NOTICES: "/api/notices",
        ROLE: "/api/roles",
        PERMISSION: "/api/permissions",
        LOGS: "/api/logs",
        FILES: "/api/files",
        USERS: "/api/users",
        DICTS: "/api/dicts",

        //高水II期
        CUSTOMER: "/api/customer",
        CUSTOMER_TYPE: "/api/customertype",
        ORDER_DETAIL: "/api/orderDetail",
        ORDER: "/api/order",
        WEB_ORDER: "/api/order/web",
        PURCHASE_ORDER: "/api/purchaseOrder",
        PRE_PURCHASE: "/api/pre_purchase/",
        STOREHOUSR: "/api/storehouse",
        STOREHOUSR_TYPE: "/api/storehousetype",
        PROVIDER: "/api/provider",
        PROVIDER_TYPE: "/api/providertype",
        GOODS: "/api/goods",
        GOODS_CONVERT: "/api/goodsconvert",
        GOODS_TYPE: "/api/goodstype",
        USER: "/api/users",
        Dict: "/api/dicts",
        NOTICE: "/api/notices",
        FILE: "/api/files",
        WEBPLUGIN: "/api/webPlugin",
        STOREHOUSEIN: "/api/stroehouseIn",
        PLANSTOREHOUSEIN: "/api/plannedStorage",
        OUT_ORDER: "/api/outer",
        OUT_ORDER_PRINT: "/api/outer",
        RECEIVE_ORDER: "/api/receive",
        STORE_LOSS: "/api/storeLoss",
        ORDER_DETAIL_DETAIL: '/api/purchaseOrder/detail',
        STORE_LOSS_TYPE: "/api/storeLossType",
        CAR: "/api/car",
        DEPARTMENT: "/api/department",
        SYSWXUSER: "/api/sysWxUser",//微信用户
        AUDITLOG: "/api/auditlog",
        PURCHASEPRICE: "/api/purchaseprice",//供应商询价
        STORE_IN_PRINT: "/api/printIn",
        SYSSET: "/api/sysset",
    },
    constructURL: function (apiKey, restMethod, paramObj) {
        var _paramURL = "";
        if (arguments.length < 1) {
            console.log("此函数必须有一个参数");
            return "";
        }
        if (!this.API.hasOwnProperty(apiKey)) {
            console.log("apiKey输入错误，请在RequestUrl的API属性中找到具体的定义");
            return "";
        }
        if (paramObj) {
            if (paramObj instanceof Object) {
                for (o in paramObj) {
                    if (_paramURL == "") {
                        _paramURL = "?" + o + "=" + paramObj[o];
                    } else {
                        _paramURL += "&" + o + "=" + paramObj[o];
                    }
                }
                _paramURL = this.baseURL + this.API[apiKey] + (restMethod === "" ? "" : "/" + restMethod) + _paramURL;
            } else {
                console.log("参数应该为一个object");
            }
        } else {
            _paramURL = this.baseURL + this.API[apiKey] + (restMethod === "" ? "" : "/") + restMethod;
        }
        return _paramURL;
    },
};
