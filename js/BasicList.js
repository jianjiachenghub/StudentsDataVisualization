function BasicListPage() {

}

BasicListPage.prototype = {
    dialogHeight: 400,
    dialogWidth: 600,
}
BasicListPage.prototype.createDataGrid = function (config) {
    var _this = this;
    var _defaultConfig = {
        url: '',
        toolbar: '#toolbar',
        method: 'get',
        pagination: 'true',
        fitColumns: 'false',
        rownumbers: 'true',
        pageSize: 10,
        singleSelect : false,
        height: 450,//显示20条数据已经调整好的高度
        width: '100%',
        striped: 'true',
        loadMsg: '正在吃力加载中.....',
        columns: [],
        showFooter: 'true',
    }
    var _config = $.extend(false, _defaultConfig, config);
    $('#dg').datagrid(_config);
}
BasicListPage.prototype.newHandle = function (operUrl, config) {
    var pLocation = operUrl;
    if (config) {
        this.dialogWidth = config.dialogWidth;
        this.dialogHeight = config.dialogHeight;
    }
    $("#ifrmEdit").attr("src", pLocation);
    constructDialog($('#dlg'), "Create", this.dialogWidth, this.dialogHeight);
    AddDialog.dialog('open');
}
BasicListPage.prototype.editHandle = function (operUrl, config) {
    var row = $('#dg').datagrid('getSelected');
    if (!row) {
        $.messager.alert('Info', "Please choose one data");
        return;
    }
    var pLocation = operUrl + row.id;
    $("#ifrmEdit").attr("src", pLocation);
    if (config) {
        this.dialogWidth = config.dialogWidth;
        this.dialogHeight = config.dialogHeight;
    }

    constructDialog($('#dlg'), 'Edit', this.dialogWidth, this.dialogHeight);
    AddDialog.dialog('open');
}
BasicListPage.prototype.createToolbar = function (toolBarType, newData) {
    var _content = "";
    _content = addDataGridToolBar(toolBarType, newData);
    $('#toolbar').append(_content);
}
BasicListPage.prototype.createSearch = function (searchOptions) {
    var _searchContent = buildSearchOptions(searchOptions, "");
    $("#div_search").append(_searchContent);
    var _paddingRight = $(".div_search_buttonContain a").length * 122;
    $("#div_search_contain").css("padding-right", _paddingRight + "px");
}

BasicListPage.prototype.searchHandle = function (apiKey) {
    var _searchCondition = processSearchConditionObject();
    var _url = RequestUrl.constructURL(apiKey, "list", _searchCondition);
    $('#dg').datagrid('reload', _url);
}
BasicListPage.prototype.resetHandle = function (apiKey) {
    var _url = RequestUrl.constructURL(apiKey, "list");
    $('#dg').datagrid('reload', _url);
    $(".easyui-combobox").each(function (index) {
        $(this).combobox('clear');
    });
    $(".easyui-textbox").each(function (index) {
        $(this).textbox('setValue', '')
    });
    $(".easyui-datebox").each(function (index) {
        $(this).textbox('setValue', '')
    });
    $(".easyui-numberbox").each(function (index) {
        $(this).textbox('setValue', '')
    });
}

BasicListPage.prototype.hideColumn = function (colArray) {
    colArray.forEach(function (val) {
        $('#dg').datagrid('hideColumn', val);
    })
}
