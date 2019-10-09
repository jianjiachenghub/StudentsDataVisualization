function BasicDetailPage() {

}

BasicDetailPage.prototype = {
    currid: AddFlag,
    updateData: {},
    originData: {},//原始数据，用于比对数据，不能修改
    currRow: '',
    gRequest: new RequestHandle(),
    goodData: JSON.parse(localStorage.getItem("GoodsData")),
};

BasicDetailPage.prototype.createDataGrid = function (config, element) {
    var _this = this;
    var _defaultConfig = {
        height: 550,
        collapsible: 'true', //是否折叠：是
        rownumbers: 'true',
        fitColumns: 'true', //自动调整列：是
        showFooter: 'true',
        autoSave: 'true',
        method: 'get',
        addible: true,//是否支持Enter自动添加
        beginField: 'inGoodsName',//必须要加的特殊字段
        basicFunctions: ["onDblClickRow", "onAdd", "onClickRow", "onSelect"],
    };
    //处理合并config时，默认函数被覆盖的问题
    var _defaultFunc = _defaultConfig.basicFunctions;
    for (var _i in _defaultFunc) {
        if (_defaultFunc.hasOwnProperty(_i)) {
            if (config[_defaultFunc[_i]] instanceof Function) {
                var _t = config[_defaultFunc[_i]];
                config[_defaultFunc[_i]] = function (index, row) {
                    _this.currRow = row;
                    return _t(index, row);
                };
            } else {
                _defaultConfig[_defaultFunc[_i]] = function (index, row) {
                    _this.currRow = row;
                };
            }
        }
    }
    var _config = $.extend(_defaultConfig, config);
    $(element).edatagrid(_config);
};
BasicDetailPage.prototype.createReceiptToolBar = function (receipts_type, newData) {
    var _receiptToolBarData = addReceiptsToolBar(receipts_type, newData);
    $("#toolbar").append(_receiptToolBarData);
};
BasicDetailPage.prototype.createDetailToolBar = function (detailToolBar_type) {
    var _detailToolBar = addDetailToolBar(detailToolBar_type);
    $("#tt").edatagrid({toolbar: _detailToolBar});
};

//接受三个参数(API string,要发送的数据 obj,请求成功后要执行的函数 func)
BasicDetailPage.prototype.loadRemoteData = function (apiKey, sendData, funcSuccess) {
    var _this = this;
    this.gRequest.getRemoteData(apiKey, "get", sendData).complete(function (result) {
        var _result = result.responseJSON;
        if (_result.code === 0) {
            _this.updateDetailData(_result.data);
            funcSuccess(_result);
        } else {
            _this.funcFail(_result);
        }
    });

};
BasicDetailPage.prototype.deleteData = function (apiKey, sendData, funcSuccess) {
    var _this = this;
    $.messager.confirm('Confirm', '是否删除', function (r) {
        if (r) {
            _this.gRequest.getRemoteData(apiKey, "del", sendData).complete(function (result) {
                var _result = result.responseJSON;
                if (_result.code === 0) {
                    funcSuccess(_result);
                } else {
                    _this.funcFail(_result);
                }

            });
        }
    });
};
BasicDetailPage.prototype.exportExcel = function (apiKey, sendData, funcSuccess) {
    var _this = this;
    $.messager.confirm("提示", "确认导出Excel表格吗？", function (r) {
        if (r) {
            _this.gRequest.getRemoteData(apiKey, "excel", sendData).complete(function (result) {
                var _result = result.responseJSON;
                if (_result.code === 0) {
                    funcSuccess(_result);
                } else {
                    _this.funcFail(_result);
                }
            });
        }
    });
};
BasicDetailPage.prototype.turnPage = function (apiKey, handleData, funcSuccess) {
    var _this = this;
    var _sendData = {
        orderNo: this.originData.orderNo,
        state: this.originData.state,
    };
    switch (handleData) {
        case 'front':
            _this.gRequest.getRemoteData(apiKey, "pre", _sendData).complete(function (result) {
                var _result = result.responseJSON;
                if (_result.code === 0) {
                    _this.updateDetailData(_result.data);
                    funcSuccess(_result);
                } else {
                    _this.funcFail(_result);
                }
            });
            break;
        case 'next':
            _this.gRequest.getRemoteData(apiKey, "next", _sendData).complete(function (result) {
                var _result = result.responseJSON;
                if (_result.code === 0) {
                    _this.updateDetailData(_result.data);
                    funcSuccess(_result);
                } else {
                    _this.funcFail(_result);
                }
            });
            break;
    }
};
BasicDetailPage.prototype.submitData = function (apiKey, sendData, funcSuccess, exceptApi) {
    //lockButton("lock");
    var _this = this;
    var _sendData = JSON.stringify(sendData);
    var _mes = this.currid == AddFlag ? '新增' : '修改';
    alertMessage('提示', '正在保存');
    this.gRequest.postRemoteData(apiKey, !!exceptApi ? exceptApi : this.currid == AddFlag ? "add" : "edit", _sendData).complete(function (result) {
        $(".messager-body").window('close');
        var _result = result.responseJSON;
        if (_result.code === 0) {
            alertMessage('提示', `${_mes}成功`);
            funcSuccess(_result);
        } else {
            _this.funcFail(_result);
        }
    });
};
BasicDetailPage.prototype.initBasicDetailPage = function (element, apiKey) {
    clearFormData();//清除表单数据
    $(element).datagrid('loadData', {
        total: 0,
        rows: []
    });
    $(element).edatagrid("iniRow");
    $("#notreview").empty();//清除审核标签
    this.currid = AddFlag;
    this.updateData = {};
    this.originData = {};
    if (apiKey) {
        this.gRequest.getRemoteData(apiKey, "getnum").done(function (result) {
            $("#input_orderNo").textbox("setValue", result.data);
        });
    }
};
BasicDetailPage.prototype.updateDetailData = function (data) {
    if (!data) {
        console.log("后台返回数据为空");
        return "";
    }
    this.updateData = deepCopy(data);
    this.originData = deepCopy(data);
    this.currid = data.orderId;
    verifyStatus(data.verified, true);//生成审核标签
    getFormData(data);//将获取到的数据添加进表单
};
BasicDetailPage.prototype.funcFail = function (data) {
    $.messager.alert("失败", data.msg, "", function () {
        if (data.code === 401) {//401,未登录
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
