function createCode() {
	_code = "";
	var codeLength = 5; //验证码的长度
	var checkCode = document.getElementById("checkCode");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for(var i = 0; i < codeLength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		_code += codeChars[charNum];
	}
	if(checkCode) {
		checkCode.className = "_code";
		checkCode.innerHTML = _code;
	}
	return _code;

}
// $(document).ready(function() {
// 	createCode();
// 	$("#checkCode").click(function() {
// 		createCode();
// 	});
// });

