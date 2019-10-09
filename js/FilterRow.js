function FilterRow() {

}

FilterRow.prototype = {
    dataGrid : {}
}

var gFilterTime = 500;
var FILTER_STATE = [
    {
        text : '所有',
        value : '',
    },
    {
        text : '下单',
        value : '下单',
    }, {
        text : '采购中',
        value : '采购中',
    },
    {
        text : '入库中',
        value : '入库中',
    },
    {
        text : '入库完成',
        value : '入库完成',
    },
    {
        text : '已删除',
        value : '已删除',
    },
];

var FILTER_PurchaseOrderDetailState = [
    {
        text : '所有',
        value : '',
    },
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
]
var FILTER_VERIFIED = [
    {
        value : '',
        text : '所有',
    },
    {
        text : '未审核',
        value : '未审核',
    }, {
        text : '已审核',
        value : '已审核',
    },
];
//具体config配置信息参考UI/CostAudit/Detail的gFilterConfig
//需导入
// <script type="text/javascript" src="../../JS/datagrid-filter.js"></script>
// <script type="text/javascript" src="../../Utils/FilterRow.js"></script>

//接收两个参数(需要挂载的table $("#.."), 配置信息 Array)
FilterRow.prototype.createFilterRow = function (dataGrid, config) {
    var _this = this;
    var _dataGridCols = dataGrid.datagrid("getColumnFields");
    var _opArray = [];
    this.dataGrid = dataGrid;
    config.forEach(function (current) {
        var _index = _dataGridCols.indexOf(current.field);
        if (_index != -1) {
            if (current.op) {
                _opArray.push(current.field);
            }
            else {
                current.options.onChange = function (newValue, oldValue) {
                    return _this.onInputChange(newValue, oldValue, current.field, "equal")
                }
            }
            _dataGridCols.splice(_index, 1);
        }
        else {
            console.log('filterRow配置信息错误，请检查');
            return;
        }
    });
    _dataGridCols.forEach(function (current) {
            if (current != "ck") {
                var _defaultField = {
                    field : current,
                    type : 'textbox',
                    onChange : function (newValue, oldValue) {
                        setTimeout(function () {
                            return _this.onInputChange(newValue, oldValue, current.field, "contains")
                        }, gFilterTime);
                    }
                };
                config.push(_defaultField)
            }
        }
    );
    this.dataGrid.datagrid('enableFilter', config);
}

FilterRow.prototype.onInputChange = function (newValue, oldValue, field, _op) {
    if (newValue === '') {
        this.dataGrid.datagrid('removeFilterRule', field);
    } else {
        this.dataGrid.datagrid('addFilterRule', {
            field : field,
            op : _op,
            value : newValue
        });
    }
    this.dataGrid.datagrid('doFilter');
};

