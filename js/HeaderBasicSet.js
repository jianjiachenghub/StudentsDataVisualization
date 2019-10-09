<!--创建人：李海峰-->
<!--创建时间：2018.1.3-->
<!--描述：生成头部toolbar-->
var data = {
    Phone:{
        url:"UI/BasicSet/ReportPhone.html",
        payload:{type:"customerPhone",id:"phone"}
    },
    Address:{
        url:"UI/BasicSet/ReportAddress.html",
        payload:{type:"customerAddress",id:"address"}
    },
}
var creatHeader = function () {
    this._config = {
        data: [{
            "icon": "icon-phone",
            "func": "openDetail(this)",
            "functionname": "Phone"
        }, {
            "icon": "icon-location",
            "func": "openDetail(this)",
            "functionname": "Address"
        }],
    }
}
creatHeader.prototype.creatContent = function (element,arr) {
    var _that=this;
    var _data = [];
    arr.forEach(function (outValue,outIndex) {
        _that._config.data.forEach(function (inValue,inIndex){
            if(inValue.functionname ==outValue){
                _data.push(inValue);
            }
        })
    });
    var _content="";
    for (var i = 0; i < _data.length; i++) {
        _content += "<a href=\"javascript:void(0)\"";
        _content+="id=\""+_data[i].functionname+"\"";
        _content+="class=\"easyui-linkbutton\"  iconCls=\"";
        _content += _data[i].icon + "\"  onclick=\"" + _data[i].func + "\">";
        _content += _data[i].functionname + "</a>";
    }
    $(element).append(_content);
}
function openDetail(element) {
    var type = JSON.stringify(data[element.id].payload);
    localStorage.setItem("htmlType",type);
    AddTabIn(element.innerText, parent.$('#tabs'), data[element.id].url);
}
function getIdArry() {
    var _idArry = {};
    var urlinfo = window.location.href;
    var len = urlinfo.length;
    var offset = urlinfo.indexOf("?");
    if (offset == -1) {
        return undefined;
    }
    var newsidinfo = urlinfo.substr(offset+1, len);
    var newsids = newsidinfo.split("&");
    newsids.forEach(function (value, index) {
        var arr = value.split("=");
        _idArry[arr[0]] = arr[1]
    });
    return _idArry
}
