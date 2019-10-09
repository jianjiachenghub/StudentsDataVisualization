// 创建时间：2018.9.8
// 创建人：谢先博
// 参数说明：
// componentType:在ComboboxComponent定义的类型
// elementName：需要渲染的节点名称  如'#search_component'
// config：类型为object，主要解决特殊参数输入问题
// 返回：无

var gDefaultComboboxWidth = 200;
var gDefaultComboboxHeight = 200;
var gDelayTime = 500;
var createComponentFactory = function (componentType, elementName, config) {
    return ComboboxComponent[componentType](elementName, config);
};

var ComboboxComponent = {
        handleConfig : function (elementName, config, defaultConfig) {
            var _config = defaultConfig;
            if (config) {
                _config = $.extend(false, defaultConfig, config);
            }
            $(elementName).combobox(_config);
        },
        fuzzySearch : function (value, data) {//模糊查询
            return data.filter(function (current) {
                return current.code.toLowerCase().indexOf(value.toLowerCase()) >= 0;
            });
        },
        CUSTOMER_TYPES : function (elementName, config) { //用户组（可多选）
            var _defaultConfig = {
                valueField : 'customerTypeId',
                textField : 'customerType',
                panelWidth : gDefaultComboboxWidth,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                multiple : true,
                multiline : true,
                height : 30,
                method : 'get',
                url : RequestUrl.constructURL("CUSTOMER_TYPE", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMER_TYPE : function (elementName, config) {//用户组
            var _defaultConfig = {
                valueField : 'customerTypeId',
                textField : 'customerType',
                panelWidth : gDefaultComboboxWidth,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("CUSTOMER_TYPE", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        DEPARTMENT : function (elementName, config) {//用户组
            var _defaultConfig = {
                valueField : 'departmentName',
                textField : 'departmentName',
                panelWidth : gDefaultComboboxWidth,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("DEPARTMENT", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMER_NAME : function (elementName, config) { //配送单位
            var _defaultConfig = {
                valueField : 'customerName',
                textField : 'customerName',
                panelWidth : 240,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }
                    if (!isEnglishAndNumber(newValue.trim())) {//如果输入的不是拼字字母
                        return;
                    }
                    setTimeout(function () {
                        var _params = {codePy : newValue.trim()};
                        var _url = RequestUrl.constructURL("CUSTOMER", "all", _params);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ROLE_NAME : function (elementName, config) { //角色名称
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : gDefaultComboboxWidth,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("ROLE", "allbrif"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PROVIDER_TYPE : function (elementName, config) { //供应商类型
            var _defaultConfig = {
                valueField : 'providerTypeId',
                textField : 'providerType',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("PROVIDER_TYPE", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        STORE_LOSS_TYPE : function (elementName, config) { //入库单编号
            var _defaultConfig = {
                valueField : 'id',
                textField : 'lossType',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("STORE_LOSS_TYPE", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        STORE_LOSSID : function (elementName, config) { //入库单编号
            var _defaultConfig = {
                valueField : 'inId',
                textField : 'inId',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("STORE_LOSS", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PROVIDER_NAME : function (elementName, config) { //供应商名称
            var _defaultConfig = {
                valueField : 'providerName',
                textField : 'providerName',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }

                    if (!isEnglishAndNumber(newValue.trim())) {
                        return;
                    }
                    setTimeout(function () {
                        var _param = {codePy : newValue};
                        var _url = RequestUrl.constructURL('PROVIDER', "all", _param);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PROVIDER_NAME_ID : function (elementName, config) { //供应商名称
            var _defaultConfig = {
                valueField : 'providerId',
                textField : 'providerName',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }

                    if (!isEnglishAndNumber(newValue.trim())) {
                        return;
                    }
                    setTimeout(function () {
                        var _param = {codePy : newValue};
                        var _url = RequestUrl.constructURL('PROVIDER', "all", _param);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        GOODS_NAME : function (elementName, config) { //内部商品名称
            var _defaultConfig = {
                valueField : 'goodsName',
                textField : 'goodsName',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }
                    if (!isEnglishAndNumber(newValue.trim())) {//如果输入的不是拼字字母
                        return;
                    }
                    setTimeout(function () {
                        var _params = {codePy : newValue.trim()};
                        var _url = RequestUrl.constructURL("GOODS", "all", _params);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                },
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        GOODS_ORIGINAL_NAME : function (elementName, config) { //原始产品名称
            var _defaultConfig = {
                valueField : 'goodsOriginalName',
                textField : 'goodsOriginalName',
                panelWidth : 175,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }
                    if (!isEnglishAndNumber(newValue.trim())) {//如果输入的不是拼字字母
                        return;
                    }
                    setTimeout(function () {
                        var _params = {codePy : newValue.trim()};
                        var _url = RequestUrl.constructURL("GOODS_CONVERT", "all", _params);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                },
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        GOODS_TYPE : function (elementName, config) { //商品类型
            var _defaultConfig = {
                valueField : 'goodsType',
                textField : 'goodsType',
                panelWidth : 175,
                panelHeight : 200,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("GOODS_TYPE", "all"),
                prompt : "输入英文或数字模糊查询",
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }
                    if (!isEnglishAndNumber(newValue.trim())) {//如果输入的不是拼字字母
                        return;
                    }
                    setTimeout(function () {
                        var _params = {codePy : newValue.trim()};
                        var _url = RequestUrl.constructURL("GOODS_TYPE", "all", _params);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                },
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        STROEHOUSEIN_NAME : function (elementName, config) { //库房名称
            var _defaultConfig = {
                valueField : 'storeName',
                textField : 'storeName',
                panelWidth : 175,
                panelHeight : 200,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("STOREHOUSEIN", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CENTER_STROEHOUSE_NAME : function (elementName, config) { //中央库房名称
            var _param = {
                isCenter : SHOREHOUSE_TYPE_FLAG.CENTERSHORE,
            };
            var _defaultConfig = {
                valueField : 'storeName',
                textField : 'storeName',
                panelWidth : 175,
                panelHeight : 200,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("STOREHOUSR", "all", _param),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ALL_STROEHOUSE_NAME : function (elementName, config) { //所有库房
            var _defaultConfig = {
                valueField : 'storeName',
                textField : 'storeName',
                panelWidth : 175,
                panelHeight : 200,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("STOREHOUSR", "all"),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },

        ISVERIFY : function (elementName, config) { //是否审核
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : VerifyCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PURGECHASE_TYPE : function (elementName, config) {//采购类型
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : PurchaseTypeCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        USER_NAME : function (elementName, config) { //用户名称，采购员名称
            var _defaultConfig = {
                valueField : 'nickname',
                textField : 'nickname',
                panelWidth : 200,
                panelHeight : 200,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("USER", "allbrif"),
                onChange : function (newValue, oldValue) {
                    var _this = this;
                    if (!newValue.trim()) {
                        return;
                    }
                    if (!isEnglishAndNumber(newValue.trim())) {//如果输入的不是拼字字母
                        return;
                    }
                    setTimeout(function () {
                        var _params = {codePy : newValue.trim()};
                        var _url = RequestUrl.constructURL("USER", "allbrif", _params);
                        $(_this).combobox("reload", _url);
                    }, gDelayTime);
                },
                onSelect : function (newValue, oldValue) {
                    $("#input_purchaserId").combobox("setValue", newValue.id);
                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        HOUSE_STATE : function (elementName, config) {//出库入库状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : OrderStateSearchCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ORDER_ERROR_STATE : function (elementName, config) { //订单异常状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : OrderErrorCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ORDER_DETAIL_ERROR_STATE : function (elementName, config) { //订单明细异常状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : OrderDetailErrorCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ORDER_STATE : function (elementName, config) { //订单状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : OrderStateCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        STOREHOUSE_IN_STATE : function (elementName, config) { //订单状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : StoreHouseInCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        USER_RESET_STATE : function (elementName, config) { //用户管理输入状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : INPUT_STATE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ROLE : function (elementName, config) {//角色组
            var paramObj = {
                activation : USER_STATE_CODE.ENABLE
            };
            var _defaultConfig = {
                valueField : 'roleName',
                textField : 'roleName',
                panelWidth : gDefaultComboboxWidth,
                panelHeight : gDefaultComboboxHeight,
                mode : 'remote',
                method : 'get',
                url : RequestUrl.constructURL("ROLE", "allrole", paramObj),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },

        INSHOREHOUSETYPECODE : function (elementName, config) { //入库类型
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : InShoreHouseTypeCode,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        USER_STATE : function (elementName, config) { //用户状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : INPUT_STATE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PURCHASE_PRICE_STATE : function (elementName, config) { //用户状态
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 150,
                panelHeight : 'auto',
                data : PURCHASE_STATE_CODE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_NAME : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
                //data: JSON.parse(localStorage.getItem("nameData")),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },

        EXCHANGEREATE_CURRENCYCODEFROM : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'code',
                textField : 'code',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        EXCHANGEREATE_CURRENCYCODETO : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'code',
                textField : 'code',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        COSTOMERNO : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'customerNumber',
                textField : 'customerNumber',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMERNAME : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'customerName',
                textField : 'customerName',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        PHONE_NUMBER : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'phoneNumber',
                textField : 'phoneNumber',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMER_ID : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'customerId',
                textField : 'customerId',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ACCOUNT_NAME : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ACCOUNT_NUMBER : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'accountNumber',
                textField : 'accountNumber',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ACCOUNT_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'type',
                textField : 'value',
                panelWidth : 160,
                panelHeight : 100,
                data : TYPE_DATA_COMBOBOX,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CURRENCY_CODE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'currencyCode',
                textField : 'currencyCode',
                panelWidth : 190,
                panelHeight : 160,
                data : CURRENCYCODE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        SYSUSER_NAME : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'username',
                textField : 'username',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        DETAIL_CHARGETYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'chargeTypeId',
                textField : 'chargeTypeName',
                panelWidth : 185,
                panelHeight : gDefaultComboboxHeight,
                data : DETAILCHARGETYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        DETAIL_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : 70,
                data : COMPANYACCOUNTDETAILTYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_FUNDSTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("FundsType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
                /*onChange: function (newValue) {//根据code模糊查询
                    if (isEnglish(newValue) || newValue === "") {
                        var _searchData = _that.fuzzySearch(newValue.trim(), _data);
                        $(this).combobox("loadData", _searchData ? _searchData : _data);
                    }
                },*/
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_ACCOUNTTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("AccountType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_IDENTIFIERTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("IdentifierType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_TRANSMODETYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("TransmodeType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_CONTACTTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("ContactType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_COMMUNICATIONTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("CommunicationType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_CURRENCIES : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("Currencies"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'code',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_COUNTRYCODES : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("CountryCodes"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,

            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_ACCOUNTPERSONROLETYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("AccountPersonRoleType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_ENTITYLEGALFORM : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("EntityLegalForm"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_BANKTYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("BankType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        BASICDATA_ENTITYPERSONROLETYPE : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("EntityPersonRoleType"));
            var _defaultConfig = {
                valueField : 'code',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        ACCOUNT_COMPANY : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("companyAccount"));
            var _defaultConfig = {
                valueField : 'id',
                textField : 'name',
                panelWidth : 120,
                panelHeight : gDefaultComboboxHeight,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        SYSUSER_SEX : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : SYSUSER_SEX,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TITLE_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'key',
                textField : 'value',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : titleType,
                onSelect : function (rec) {
                    if (rec.key == '0' || rec.key == '3') {
                        $('#input_gender').combobox('setValue', 'F');
                    } else {
                        $('#input_gender').combobox('setValue', 'M');
                    }

                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMERSURPLUS_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                data : CUSTOMER_TYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMER_ACCOUNT_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 80,
                data : CUSTOMER_ACCOUNT_TYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        RECEIPT_FIRSTNAME : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'firstName',
                textField : 'firstName',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        RECEIPT_VISIBLE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : RECEIPT_VISIBLE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        RECEIPT_TRANSMODECODE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : JSON.parse(localStorage.getItem('TransmodeType')).filter(function (current) {
                    return current.used == '1';
                }),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        RECEIPT_PAYMENTTYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : RECEIPT_PAYMENTTYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        REPORT_CODE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : REPORT_CODE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        SYSUSER_ROLE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : JSON.parse(localStorage.getItem("Role")),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_TYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'text',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : transactionTypeData,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_PAYMENTTYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'text',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : RECEIPT_PAYMENTTYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_PAYMENTTYPE_ID : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : RECEIPT_PAYMENTTYPE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_ENTITY : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'accountName',
                textField : 'accountName',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : [],
                showPanel : function () {
                    $(this).combobox("loadData", JSON.parse(sessionStorage.getItem('currentEntity')));
                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_ACCOUNT : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'accountName',
                textField : 'accountName',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : [],
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        TRANSACTION_ACCOUNT_ID : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'accountId',
                textField : 'accountName',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : [],
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        FUNDSCODE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : JSON.parse(localStorage.getItem('FundsType')),
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        RECEIPT_STATUS : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : gDefaultComboboxHeight,
                data : RECEIPT_STATUS,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        REPORT_ACCOUNT_COMPANY : function (elementName, config) {
            var _that = this;
            var _data = JSON.parse(localStorage.getItem("companyAccount"));
            var _defaultConfig = {
                valueField : 'name',
                textField : 'name',
                panelWidth : 80,
                panelHeight : 100,
                data : _data,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        LANGUAGE_DATATYPE : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : 100,
                data : LanguageDataType,
                onSelect : function (rec) {
                    if (rec.value == '0') {
                        $('#rowHidden').hide();
                        $('#input_institutionName').textbox('setValue', "");
                    } else {
                        $('#rowHidden').show();
                        $('#input_institutionName').textbox('setValue', "The People's Bank Of China");

                    }

                }
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        CUSTOMER_ACCOUNT : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'id',
                textField : 'accountName',
                panelWidth : 180,
                panelHeight : 100,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
        STATUS_CODE_CONFIG : function (elementName, config) {
            var _defaultConfig = {
                valueField : 'value',
                textField : 'text',
                panelWidth : 180,
                panelHeight : 100,
                data:STATUS_CODE,
            };
            this.handleConfig(elementName, config, _defaultConfig);
        },
    }
;

