var oldMenuData = new Object();
var currMenuData = new Object();
getCurrUser();
getMenuData();

function getMenuData() {
    var _roledata = localStorage.getItem('role');
    if (_roledata != null) {
        oldMenuData = JSON.parse(_roledata);
        currMenuData = handleMenuData(oldMenuData.MENU);
        getMenuRight(oldMenuData.MENU);
        localStorage.setItem('menu', JSON.stringify(currMenuData));
    } else {
        console.log("没有登录信息");
    }
}

function getMenuRight(_data) {
    var _data = $.grep(_data, function (value) {
        return value.hasCha == true && value.MENU_TYPE == 3; //筛选出具有访问权限的菜单
    });
    var authorityList = new Array();
    var html_Name_List = ["List", "Add"];
    var _index = 0;
    for (var i = 0; i < _data.length; i++) {
        s = _data[i];
        if (s.MENU_ORDER != "") { //菜单模块不为空
            for (var j = 0; j < html_Name_List.length; j++) {
                authorityList[_index] = new Object();
                var m = authorityList[_index];
                m.name = s.MENU_ORDER + html_Name_List[j];
                m.parent = s.MENU_ORDER;
                m.hasAdd = s.hasAdd;
                m.hasEdit = s.hasEdit;
                m.hasDel = s.hasDel;
                m.hasSh = s.hasSh;
                m.hasQs = s.hasQs;
                m.hasDc = s.hasDc;
                m.hasDx = s.hasDx;
                _index = _index + 1;
            }
        }

    }
    localStorage.setItem('currRight', JSON.stringify(authorityList));
}

function handleMenuData(_data) {
    var _res = new Array();
    var FristLevelArray = $.grep(_data, function (value) {
        return value.PARENT_ID == 0 && value.hasCha == true; //筛选出大于5的
    });
    for (var i = 0; i < FristLevelArray.length; i++) {
        _res[i] = new Object();
        _res[i].menuid = FristLevelArray[i].ID;
        _res[i].menuname = FristLevelArray[i].MENU_NAME;
        _res[i].icon = FristLevelArray[i].MENU_ICON;
        var SecondLevelArray = $.grep(_data, function (value) {
            return value.PARENT_ID == FristLevelArray[i].ID && value.hasCha == true; //筛选出大于5的
        });
        if (SecondLevelArray.length > 0) {
            _res[i].menus = new Array();
            var _second = _res[i].menus;
            for (j = 0; j < SecondLevelArray.length; j++) {
                _second[j] = new Object();
                _second[j].menuid = SecondLevelArray[j].ID;
                _second[j].menuname = SecondLevelArray[j].MENU_NAME;
                if ('MENU_URL' in SecondLevelArray[j] && SecondLevelArray[j].MENU_URL.length > 0) {
                    _second[j].url = SecondLevelArray[j].MENU_URL;
                }
                var ThirdLeverArray = $.grep(_data, function (value) {
                    return value.PARENT_ID == SecondLevelArray[j].ID && value.hasCha == true; //筛选出大于5的
                });
                if (ThirdLeverArray.length > 0) {
                    _second[j].menus = new Array();
                    var _third = _second[j].menus;
                    for (m = 0; m < ThirdLeverArray.length; m++) {
                        _third[m] = new Object();
                        _third[m].menuid = ThirdLeverArray[m].ID;
                        _third[m].menuname = ThirdLeverArray[m].MENU_NAME;
                        _third[m].url = ThirdLeverArray[m].MENU_URL;
                    }
                }

            }
        }
    }
    var _finalData = new Object();
    _finalData.basic = _res;
    return _finalData;
}

function getCurrUser() {
    var _data = localStorage.getItem('currUser');
    if (_data != null) {
        _userdata = JSON.parse(_data);
        $("#user_name").html(_userdata.USERNAME);
    }
}

function logout() {
    var _url = "http://47.112.24.176:8080/ift/logout";
    $.ajax({
        dataType: 'JSON',
        url: _url,
        type: "POST",
    }).complete(function(_result){
        _result = _result.responseJSON;
        if(_result.code === 0)
        {
            ClearLocalStorge(); //清除所有的存储信息
            location.href = "UI/Login/Login.html";
        }
        else{
            $.messager.alert("Fail", "Exit failure");
        }
    });
}


function ClearLocalStorge() {
    localStorage.removeItem('check'); //周期检查到期提醒
    localStorage.removeItem('contractBoost');
    localStorage.removeItem('contractShort');
    localStorage.removeItem('frozen');
    localStorage.removeItem('currUser'); //当前用户信
    localStorage.removeItem('role'); //存储当前用户的权限信息
    localStorage.removeItem('currRight');
    localStorage.removeItem('GoodsData');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('token');
}
