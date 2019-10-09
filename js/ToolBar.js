var DATAGRID_TOOLBAR_ADD = Math.pow(2, 0);
var DATAGRID_TOOLBAR_EDITOR = Math.pow(2, 1);
var DATAGRID_TOOLBAR_DELETE = Math.pow(2, 2);
var DATAGRID_TOOLBAR_ARRIVE = Math.pow(2, 3);
var DATAGRID_TOOLBAR_PAY = Math.pow(2, 4);
var DATAGRID_TOOLBAR_UPDATEDATA = Math.pow(2, 5);
var DATAGRID_TOOLBAR_REPORTED = Math.pow(2, 6);
var DATAGRID_TOOLBAR_UNVERIFY = Math.pow(2, 7);
var DATAGRID_TOOLBAR_PURCHASEPRICE = Math.pow(2, 8);
var DATAGRID_TOOLBAR_RESETPASS = Math.pow(2,9);
var DATAGRID_TOOLBAR_STOPACCOUNT = Math.pow(2,10);
var DATAGRID_TOOLBAR_PUBLISH = Math.pow(2,11);




function addDataGridToolBar(type, newData) {
    var data = [{
        "icon" : "icon-add",
        "func" : "newData()",
        "functionname" : "Create"
    }, {
        "icon" : "icon-edit",
        "func" : "editData()",
        "functionname" : "Update"
    }, {
        "icon" : "icon-remove",
        "func" : "destroy()",
        "functionname" : "Delete"
    }, {
        "icon":"icon-redo",
        "func":"arrive()",
        "functionname":"arrive",
    }, {
        "icon":"icon-to_do",
        "func":"pay()",
        "functionname":"pay",
    }, {
        "icon" : "icon-redo",
        "func" : "updateBasicData()",
        "functionname" : "ChangeState"
    }, {
        "icon":"icon-redo",
        "func":"reported()",
        "functionname":"reported",
    }, {
        "icon" : "icon-redo",
        "func" : "unVerifyReceipt()",
        "functionname" : "unverify",
    }, {
        "icon" : "icon-information",
        "func" : "addPurchasePrice()",
        "functionname" : "供应商询价",
    },{
        "icon":"icon-back",
        "func":"resetPass()",
        "functionname":"ResetPass",
    },{
        "icon":"icon-redo",
        "func":"stopAccount()",
        "functionname":"StopAccount",
    },{
        "icon":"icon-ok",
        "func":"publishNotice()",
        "functionname":"Publish",
    }
    ];
    var _newArr = [];
    var _content = "";
    for (var i = 0; i < data.length; i++) {
        var _res = type & (1 << i);
        if (_res !== 0) {
            _newArr.push(data[i]);
        }
    }
    if (newData) {
        _newArr = _newArr.concat(newData);
    }
    for (var i = 0; i < _newArr.length; i++) {
        _content += "<a href=\"javascript:void(0)\" class=\"easyui-linkbutton\"  iconCls=\"";
        _content += _newArr[i].icon + "\" plain='true' onclick=\"" + _newArr[i].func + "\">"
        _content += _newArr[i].functionname + "</a>";
    }
    return _content;
}

//构建单据明细中的ToolBar,
var RECEIPT_FRONT_SYMBOL = Math.pow(2, 0);
var RECEIPT_NEXT_SYMBOL = Math.pow(2, 1);
var RECEIPT_ADD_SYMBOL = Math.pow(2, 2);
var RECEIPT_SAVE_SYMBOL = Math.pow(2, 3);
var RECEIPT_DELETE_SYMBOL = Math.pow(2, 4);
var RECEIPT_VERIFY_SYMBOL = Math.pow(2, 5);
var RECEIPT_UNVERIFY_SYMBOL = Math.pow(2, 6);
var RECEIPT_SEARCH_SYMBOL = Math.pow(2, 7);
var RECEIPT_PRINT_SYMBOL = Math.pow(2, 8);
var RECEIPT_EXPORT_SYMBOL = Math.pow(2, 9);

function addReceiptsToolBar(type, newData) {
    var data = [{
        "icon" : "icon-left",
        "func" : "frontPage()",
        "functionname" : "上张"
    }, {
        "icon" : "icon-right",
        "func" : "nextPage()",
        "functionname" : "下张"
    }, {
        "icon" : "icon-add",
        "func" : "newData()",
        "functionname" : "New"
    }, {
        "icon" : "icon-save",
        "func" : "save()",
        "functionname" : "save"
    }, {
        "icon" : "icon-remove",
        "func" : "deleteData()",
        "functionname" : "delete"
    }, {
        "icon" : "icon-to_do",
        "func" : "verifyData()",
        "functionname" : "verify"
    }, {
        "icon" : "icon-redo",
        "func" : "unverifyData()",
        "functionname" : "unverify"
    }, {
        "icon" : "icon-search",
        "func" : "searchMore()",
        "functionname" : "search"
    }, {
        "icon" : "icon-print",
        "func" : "print()",
        "functionname" : "print"
    }, {
        "icon" : "icon-save",
        "func" : "exportExcel()",
        "functionname" : "Excel"
    },
    ]
    var _newArr = [];
    var _content = "";
    for (var i = 0; i < data.length; i++) {
        var _res = type & (1 << i);
        if (_res !== 0) {
            _newArr.push(data[i]);
        }
    }
    if (newData) {
        _newArr = _newArr.concat(newData);
    }
    for (var i = 0; i < _newArr.length; i++) {
        _content += "<a href=\"javascript:void(0)\" class=\"easyui-linkbutton\"  iconCls=\"";
        _content += _newArr[i].icon + "\" plain='true' onclick=\"" + _newArr[i].func + "\">"
        _content += _newArr[i].functionname + "</a>";
    }
    return _content;
}

var DETAIL_TB_ADD_DETAIL = Math.pow(2, 0);
var DETAIL_TB_CANCLE = Math.pow(2, 1);
var DETAIL_TB_DELETE_DETAIL = Math.pow(2, 2);
var DETAIL_TB_CHARGE = Math.pow(2, 3);
var DETAIL_TB_RECEIVEGOODS = Math.pow(2, 4);
var DETAIL_TB_CANCELRECEIVE = Math.pow(2, 5);
var DETAIL_TB_RETURNGOODS = Math.pow(2, 6);
var DETAIL_TB_PURCHASEPRICE = Math.pow(2, 7);

//用于生成edatagrid中的工具栏
function addDetailToolBar(detailToolBarType) {
    var DetailToolBarData = [{
        text : 'add', //1
        iconCls : 'icon-add',
        handler : function () {
            $('#tt').edatagrid('addRow');
        }
    }, {
        text : 'cancel', //2
        iconCls : 'icon-cancel',
        handler : function () {
            $('#tt').edatagrid('cancelRow');
        }
    }, {
        text : 'delete', //4
        iconCls : 'icon-remove',
        handler : function () {
            $('#tt').edatagrid('destroyRow');
        }
    }, {
        text : 'save', //16
        iconCls : 'icon-save',
        handler : function () {
            save();
        }
    }, {
        text : 'receive', //16
        iconCls : 'icon-ok',
        handler : function () {
            receiveGoods();
        }
    }, {
        text : 'unreceive', //16
        iconCls : 'icon-cancel',
        handler : function () {
            cancelReceive();
        }
    }, {
        text : 'back', //16
        iconCls : 'icon-save',
        handler : function () {
            returnGoods();
        }
    }, {
        text : 'charge', //16
        iconCls : 'icon-charge',
        handler : function () {
            addPurchasePrice();
        }
    },];
    var data = [];
    var s;
    for (var i = 0; i < DetailToolBarData.length; i++) {
        s = detailToolBarType & (1 << i);
        if (s != 0) {
            data.push(DetailToolBarData[i]);
        }
    }
    return data;

}
