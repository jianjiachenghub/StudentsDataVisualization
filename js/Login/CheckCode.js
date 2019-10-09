// 功能说明：生成验证码
// 特殊变量：
// 创建时间：2018年9月9日14:08:28

function createCode() {
    code = ""; 
    var _codeLength = 5; //验证码的长度
    var _checkCode = document.getElementById("checkCode");
    var _codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < _codeLength; i++) {
        var _charNum = Math.floor(Math.random() * 52);
        code += _codeChars[_charNum];
    }
    if (_checkCode) {
        _checkCode.className = "code";
        _checkCode.innerHTML = code;
    }
}

$(document).ready(function () {
    createCode();
    $("#checkCode").click(function () {
        createCode();
    });
});
