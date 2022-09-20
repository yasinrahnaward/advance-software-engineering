"use strict";
exports.__esModule = true;
var setting_1 = require("./setting");
var loginSetting = /** @class */ (function () {
    function loginSetting() {
    }
    loginSetting.prototype.loginPageSetting = function () {
        var login = new setting_1["default"]();
        login.fontSize = 34;
        login.theme = 'orange';
        console.log("Login page setting : \n ");
        console.log("  font Size : ".concat(login.fontSize, " \n "));
        console.log("       them : ".concat(login.theme, " \n "));
    };
    return loginSetting;
}());
exports["default"] = loginSetting;
