$(function () {


    $(".header_nav>ul>li>a").on("click",function () {
        $(this).addClass("nav_current").parent("li").siblings("li").children("a").removeClass("nav_current");
    })

    $(".header_nav>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })

    $(".header>.header_nav>ul>li>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })




    $("#add_ipt").on("click",function () {
        $('#modal_add').modal();
    })


    $("#date_ipt").on("click",function () {
        $('#myModal').modal();
    })

    $("#video_ipt").on("click",function () {
        $('#Modal').modal();
    })







})

function checkInput() {//检查input表单值是否符合要求
    var flag = true;
    $("#ff .easyui-combobox").each(function (index) {
        if (!$(this).combobox('isValid')) {
            flag = false;
            return;
        }
        ;
    });
    $("#ff .easyui-textbox").each(function (index) {
        if (!$(this).textbox('isValid')) {
            flag = false;
            return;
        }
        ;
    });
    $("#ff .easyui-datebox").each(function (index) {
        if (!$(this).datebox('isValid')) {
            flag = false;
            return;
        }
        ;
    });
    return flag;
}
function submitFormData(currentFF) { ///获取需要提交的数据
    var _data = {};
    $((currentFF ? currentFF : "#ff") + " .easyui-combobox").each(function (index) {
        var s = $(this).attr("id");
        var subtr = deletePreSymbol("input_", s);
        _data[subtr] = $(this).combobox("getValue").trim();
    });
    $((currentFF ? currentFF : "#ff") + "  .easyui-textbox").each(function (index) {
        var s = $(this).attr("id");
        var subtr = deletePreSymbol("input_", s);
        _data[subtr] = $(this).textbox("getValue").trim();
    });
    $((currentFF ? currentFF : "#ff") + "  .easyui-datebox").each(function (index) {
        var s = $(this).attr("id");
        var subtr = deletePreSymbol("input_", s);
        var value = $(this).datebox("getValue").replace(/\//g, '-');
        if(value){
            value=new Date(value.trim()).format("yyyy-MM-dd").toString();
        }
        _data[subtr] = value;
    });
    $((currentFF ? currentFF : "#ff") + "  .easyui-numberbox").each(function (index) {
        var s = $(this).attr("id");
        var subtr = deletePreSymbol("input_", s);
        _data[subtr] = $(this).numberbox("getValue");
    });
    $((currentFF ? currentFF : "#ff") + "  .easyui-numberspinner").each(function (index) {
        var s = $(this).attr("id");
        var subtr = deletePreSymbol("input_", s);
        _data[subtr] = $(this).textbox("getValue").trim();
    });
    return _data;
}
function deletePreSymbol(_presymbol, _str) {
    var len = _str.length;
    var pre_symbol_len = _presymbol.length;
    var _substr = _str.substring(pre_symbol_len, len);
    return _substr;
}
