var CreatStatisticsFactory = function (config) {
    this._config =
        {
            freeNum: {
                text: '免费金额合计',
                isUppercase: true,
                value: '',
                isEdit:false,
            },
            selfNum: {
                text: '自费金额统计',
                isUppercase: true,
                value: '',
                isEdit:false,
                
            },
            statisticsNum: {
                text: '总金额统计',
                isEdit:false,
                isUppercase: true,
                value: '',
            }
        }
        if(config)
        {
            this._config = $.extend( this._config, config);
        }
}
CreatStatisticsFactory.prototype.handleData = function () {
    var obj = CalSum();
    for (i in obj) {
        if (this._config[i]) {
            var _item = obj[i].value.toFixed(2);
            this._config[i].value = '￥' + _item;
            this._config[i].value += '  (' + obj[i].uppercase + '元)';
        }
    }
    (function (config) {
        $(".div_statistics_input").each(function (index) {
            var substr = $(this).attr("name");
            if (typeof(config[substr]) != "undefined") {
                $(this).val(config[substr].value);
            }
        })
    })(this._config)
}
CreatStatisticsFactory.prototype.handleHtml = function () {
    var _contain = "<div class = \"div_statistics_contain\">";
    for (var i in this._config) {
        var _item = this._config[i];
        var _content = "<div class = \"div_statistics_content\"><div  class =\"div_statistics_mes\">" + _item.text + "</div>";
        _content += "<div style = \"width:70%\">" + "<input  id = \""+ i + "\"  class = \"div_statistics_input\" type=\"text\"";
        if(_item.isEdit === false)
        {
            _content += "unselectable=\"on\" onfocus=\"this.blur()\"  style=\"border: none;\"";
        }
        else{
            _content +="onchange=\"changeData()\" onclick=\"clickInput()\" onblur =\"onblurInput ()\""
        }
        _content +="name=\"" + i + "\" >" + "</div></div>";
        _contain += _content;
    }
    $('#div_statistics').append(_contain);
}
var isChange = false;
function changeData(){
    isChange = true;
    var _data =  $("#statisticsNum").val();
    if(_data === "")
    {
        _data = 0;
    }
    $("#statisticsNum").onblur = null;
    var _chinse = changeMoneyToChinese(_data);
    _data = "￥"+_data+" "+_chinse+"(元)"
    $("#statisticsNum").val(_data)
}
function clickInput(event){
    var _value =  $("#statisticsNum").val();
    _value = _value.replace(/￥|[\u4E00-\u9FA5]|\(|\)|\s/g,"");
    $("#statisticsNum").val(_value);
}
function onblurInput (){
    if(isChange === false)
    {
        var _data =  $("#statisticsNum").val();
        var chinse = changeMoneyToChinese(_data);
        _data = "￥"+_data+" "+chinse+"(元)"
        $("#statisticsNum").val(_data)
    }
    isChange =false;
   
}