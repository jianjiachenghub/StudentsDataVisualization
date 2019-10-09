<!--创建人：简佳成-->
<!--创建时间：2018.12.2-->
<!--描述：生成头部toolbar-->
var gCurrid = localStorage.getItem("personId")
var gID = getID();
var gIdArry = getIdArry();
var data = {
            Phone:{
                url:"UI/BasicData/BasicPhone.html",
                payload:{type:"customerPhone",id:gCurrid?gCurrid:-1}
                },
            Address:{
                url:"UI/BasicData/BasicAddress.html",
                payload:{type:"customerAddress",id:gCurrid?gCurrid:-1}
                },
            Identification:{
                url:"UI/BasicData/BasicIdentification.html",
                payload:{type:"customerIdent",id:gCurrid?gCurrid:-1}
                },
            EmployerPhone:{
                url:"UI/BasicData/BasicEmployerPhone.html?id="+gID,
                payload:{type:"customerEmployer",id:gCurrid?gCurrid:-1}
                },
            EmployerAddress:{
                url:"UI/BasicData/BasicEmployerAddress.html?id="+gID,
                payload:{type:"customerEmployer",id:gCurrid?gCurrid:-1}
                },
            Account:{
                url:"UI/BasicData/BasicAccount.html",
                payload:{id:gID?gID:-1},
                htmlType:"Account",
            },
            Entity:{
                    url: "UI/BasicData/BasicEntity.html",
                    payload: {id: gID ? gID : -1},
                    htmlType:"Entity",
                    },
            EntityPhone:{
                url:"UI/BasicData/BasicPhone.html",
                payload:{type:"entityPhone",id: gIdArry.id ? gIdArry.id : -1}
            },
            EntityAddress:{
                url:"UI/BasicData/BasicAddress.html",
                payload:{type:"entityAddress",id: gIdArry.id ? gIdArry.id : -1}
            },
            EntityDirector:{
                url:"UI/BasicData/BasicEntityDirector.html",
                payload:{id: gIdArry.id ? gIdArry.id : -1}
            },
            DirectorPhone: {
                url: "UI/BasicData/BasicPhone.html",
                payload: {type: 'entityDirectorPhone', id: gID ? gID : -1},
            },
            DirectorAddress: {
                url: "UI/BasicData/BasicAddress.html",
                payload: {type: 'entityDirectorAddress', id: gID ? gID : -1}
    }

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
        }, {
            "icon": "icon-id",
            "func": "openDetail(this)",
            "functionname": "Identification"
        }, {
            "icon": "icon-phone",
            "func": "openDetail(this)",
            "functionname": "EmployerPhone"
        }, {
            "icon": "icon-location",
            "func": "openDetail(this)",
            "functionname": "EmployerAddress"
        }, {
            "icon": "icon-account",
            "func": "openDetail(this)",
            "functionname": "Account"
        }, {
            "icon": "icon-team",
            "func": "openDetail(this)",
            "functionname": "Entity",
        },{
            "icon": "icon-phone",
            "func": "openDetail(this)",
            "functionname": "EntityPhone"
        }, {
            "icon": "icon-location",
            "func": "openDetail(this)",
            "functionname": "EntityAddress"
        }, {
            "icon": "icon-id",
            "func": "openDetail(this)",
            "functionname": "EntityDirector"
        }, {
            "icon": "icon-phone",
            "func": "openDetail(this)",
            "functionname": "DirectorPhone"
        }, {
            "icon": "icon-location",
            "func": "openDetail(this)",
            "functionname": "DirectorAddress"
        }
        ],

    }
}
creatHeader.prototype.creatContent = function (element,arr) {
    var _that=this
    var _data = []
    arr.forEach(function (outValue,outIndex) {
        _that._config.data.forEach(function (inValue,inIndex){
            if(inValue.functionname ==outValue){
                _data.push(inValue)
            }
        })
    })
    var _content="";
    for (var i = 0; i < _data.length; i++) {
        _content += "<a href=\"javascript:void(0)\"";
        _content+="id=\""+_data[i].functionname+"\"";
        _content+="class=\"easyui-linkbutton\"  iconCls=\"";
        _content += _data[i].icon + "\"  onclick=\"" + _data[i].func + "\">"
        _content += _data[i].functionname + "</a>";
    }
    $(element).append(_content);
}
function openDetail(element) {
    var htmlType=data[element.id].payload.type?data[element.id].payload.type:data[element.id].htmlType
    var type = JSON.stringify(data[element.id].payload)
    localStorage.setItem(htmlType,type)
    var tabName =$.trim(element.innerText)
    AddTabIn(tabName, parent.$('#tabs'), data[element.id].url);
}
function getIdArry() {
    var _idArry = {}
    var urlinfo = window.location.href;
    var len = urlinfo.length;
    var offset = urlinfo.indexOf("?");
    if (offset == -1) {
        return undefined;
    }
    var newsidinfo = urlinfo.substr(offset+1, len);
    var newsids = newsidinfo.split("&");
    newsids.forEach(function (value, index) {
        var arr = value.split("=")
        _idArry[arr[0]] = arr[1]
    })
    return _idArry
}
