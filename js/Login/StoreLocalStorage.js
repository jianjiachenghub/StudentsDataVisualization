// 功能说明：存储用户名和密码
// 特殊变量：
// 创建时间：2018年9月9日15:43:03

function storeLocalStorage() {
    var _user = {
        username: $('#userName').val(),
        passwords: $('#password').val(),
    }
    var _users = [];
    if (localStorage.getItem("username") != null) {
        var _data = localStorage.getItem("username");
        _data = JSON.parse(_data);
        _users = _data;
    }
    if (_users.some(_checkUserNameRepeat) === false || _users.length === 0) {
        _users.push(_user);
        _users = JSON.stringify(_users);
        localStorage.setItem("username", _users);
    }

    function _checkUserNameRepeat(item) {
        if (item.username) {
            return item.username === _user.username;
        } else {
            return false;
        }
    }
}