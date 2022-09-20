(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var setting_1 = require("./setting");
var dashboarPageSetting = /** @class */ (function () {
    function dashboarPageSetting() {
    }
    dashboarPageSetting.prototype.dashboradSetting = function () {
        var dashboard = new setting_1["default"]();
        dashboard.fontSize = 123;
        dashboard.theme = 'dark-light';
        console.log("Dash Board page setting : \n ");
        console.log("  font Size : ".concat(dashboard.fontSize, " \n "));
        console.log("       them : ".concat(dashboard.theme, " \n "));
    };
    return dashboarPageSetting;
}());
exports["default"] = dashboarPageSetting;

},{"./setting":5}],2:[function(require,module,exports){
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

},{"./setting":5}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var login_1 = require("./login");
var dashboard_1 = require("./dashboard");
var paymentPage_1 = require("./paymentPage");
var login = new login_1["default"]();
login.loginPageSetting();
var dashboard = new dashboard_1["default"]();
dashboard.dashboradSetting();
var paymentPage = new paymentPage_1["default"]();
paymentPage.PaymentPage();

},{"./dashboard":1,"./login":2,"./paymentPage":4}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var setting_1 = require("./setting");
var PaymentPageSetting = /** @class */ (function () {
    function PaymentPageSetting() {
    }
    PaymentPageSetting.prototype.PaymentPage = function () {
        var Payment = new setting_1["default"]();
        Payment.fontSize = 17;
        Payment.theme = 'blue';
        console.log("Payment Page setting : \n ");
        console.log("  font Size : ".concat(Payment.fontSize, " \n "));
        console.log("       them : ".concat(Payment.theme, " \n "));
    };
    return PaymentPageSetting;
}());
exports["default"] = PaymentPageSetting;

},{"./setting":5}],5:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Setting = /** @class */ (function () {
    function Setting() {
        this.theme = "Light";
        this.fontSize = 10;
    }
    Setting.createInstance = function () {
        if (Setting._setting == null) {
            return Setting._setting = new Setting();
        }
        return Setting._setting;
    };
    return Setting;
}());
exports["default"] = Setting;

},{}]},{},[3]);
