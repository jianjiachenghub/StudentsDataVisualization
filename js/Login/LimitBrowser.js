// 功能说明：限制浏览器访问，限制分辨率
// 特殊变量：_permit_browsers中放入允许访问的浏览器类型
// 创建时间：2018年9月9日14:05:50

// 匹配浏览器用户代理
function getBrowserInfo() {
    var _browser;
    var _get_browser_message = navigator.userAgent.toLowerCase();
    var _match_browser_kind = /(msie|firefox|chrome|opera|version)/;
    var _get_browser = _get_browser_message.match(_match_browser_kind);
    if(_get_browser){
        _browser = _get_browser[1];
    }
    return _browser;
}


//types:存储验证规则  validator.types.rule={ validate: function (value) {return true||false } }
// validator.types.rule={
//     validate: function (value) {return true||false }
//     instructions："错误提示"
// }

//messages:存储验证类型错误所对应的消息

//config:验证类型  validator.config = { [filter] : 'type' }

//data:{ [filter]:value ,[filter]:value , .... }
var validator = {
    types: {},

    messages: [],

    config: {},

    validate: function (data) {
        var i, msg, type, checker, result_ok;
        this.messages = [];
        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw {
                        name: "ValidationError",
                        message: "该规则不存在" + type
                    };
                }

                result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    msg = "Error With *" + i + "*, " + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },

    // 判断是否有验证错误
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};


(function () {
    var _permit_browsers = ["firefox", "chrome"];

    validator.types.isPermitBrowser = {
        validate: function (value) {
            return _permit_browsers.some(function (item) {
                if(navigator.userAgent.indexOf('Edge')!=-1){
                    return false;
                }
                return item === value;
            });
        },
        instructions: "请用Chrome或Firefox打开"
    };

    validator.types.isPermitResolution = {
        validate: function (value) {
            var _Resolution = value.split('|');
            return parseInt(_Resolution[0]) >= 1024 && parseInt(_Resolution[1]) >= 720;//768
        },
        instructions:"不支持该分辨率"
    };

    var data = {
        Borwser: getBrowserInfo(),
        Resolution: screen.width+"|"+screen.height,
    };

    validator.config = {
        Borwser: 'isPermitBrowser',
        Resolution: 'isPermitResolution',
    };

    validator.validate(data);

    if (validator.hasErrors()) {
        console.log('no');
        validator.messages.forEach(function (error) {
            confirm(error);
        })
        $(document.body).hide();
    } else {
        console.log('yes')
    }
})();

