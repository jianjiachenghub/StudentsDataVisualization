// 创建时间：2018.9.8
// 创建人：谢先博
// 功能说明：定义了BasicData中需要使用的预览页面的构建类
// 参数说明：
// apiKey:类型为string,具体的值必须使用RequestUrl中的定义，否则找不到
// config：类型为Array,实现了Field和Text之间的对照
// 返回内部的参数变量

function BasicPreviewPage(config, contentElement, getData, dataSource, apiKey) {
    this._config = [];
    this._ApiKey = apiKey;
    this._getData = getData;
    this._contentElement = contentElement;
    this._dataSource = dataSource;
    var _this = this;

    if (!contentElement) {
        console.log("必须输入contentElement参数");
        return;
    }
    if (config) {
        // 插入index 参数
        config.forEach(function (val, index) {
            var _obj = {};
            for (o in val) {
                if (val.hasOwnProperty(o)) {
                    _obj[o] = val[o];
                }
            }
            _obj.index = index;
            _this._config.push(_obj);
        });
    } else {
        console.log("必须输入config参数");
        return;
    }
}

BasicPreviewPage.prototype = {
    _ID: '',
    _TableData: [],
    _ResponseData: {},
    _ROWNUMBER: 3,

};

BasicPreviewPage.prototype.getID = function () {
    this._ID = getMultiID().id;
};

BasicPreviewPage.prototype.getData = function (convertMap) {
    var _this = this;
    if (this._getData === 'local') {
        this._ResponseData = localStorage.getItem(this._dataSource);
        this._ResponseData = JSON.parse(this._ResponseData);
        this.handleData(convertMap);
        _this.createHtml();
    } else {
        var _this = this;
        var gRequest = new RequestHandle();
        var _params = {id: this._ID};
        var _res = {};
        _res = gRequest.postRemoteData(this._ApiKey, "get", _params);
        _res.done(function (data) {
            var _v = data.data;
            if (_v.hasOwnProperty('lossRate')) {
                _v.lossRate += '%';
            }
            _this._ResponseData = data.data[0];
            _this.handleData();
            _this.createHtml();
        });
    }
};

BasicPreviewPage.prototype.createHtml = function () {
    var _index = 0;
    var _content;
    var i = 0;
    _content = "<table class=\"preview\">";
    _content += "<tr>";
    for (i = 0; i < this._TableData.length; i++) {
        var _data = this._TableData[i];
        _index++;
        if (_data.text != '备注') {
            _content += "<th width=\"15%\">" + _data.text + "</th>";
            _content += "<td width=\"18%\">" + _data.value + "</td>";
        }
        if (_index % this._ROWNUMBER == 0) {
            _content += "</tr>";
            _content += "<tr>";
        }
    }
    _content += "</tr>";
    _content += "</table>";
    if (this._TableData[this._TableData.length - 1].text == '备注') {
        _content += "<p class='preview_left'>" + this._TableData[this._TableData.length - 1].text + "</p>";
        _content += "<p class='preview_right'>" + this._TableData[this._TableData.length - 1].value + "</p>";
    }

    $(this._contentElement).append(_content);
};
BasicPreviewPage.prototype.handleData = function (convertMap) {
    this._TableData = [];
    var i = 0;
    convertDateData(this._ResponseData, '/');
    for (i = 0; i < this._config.length; i++) {
        var _field = this._config[i].field;
        if (this._ResponseData.hasOwnProperty(_field)) {
            var _obj = {};
            _obj.text = this._config[i].title;
            _obj.index = this._config[i].index;
            _obj.value = (convertMap && convertMap.hasOwnProperty(_field)) ? convertDictData(this._ResponseData[_field], convertMap[_field]) : this._ResponseData[_field];
            this._TableData.push(_obj);
        }
    }
};

BasicPreviewPage.prototype.sortData = function () {
    function sortIndex(a, b) {
        return a.index - b.index;
    }

    this._TableData.sort(sortIndex);
};


