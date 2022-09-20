"use strict";
exports.__esModule = true;
var setting_1 = require("./setting");
var dashboarPageSetting = /** @class */ (function () {
    function dashboarPageSetting() {
    }
    dashboarPageSetting.prototype.dashboradSetting = function () {
        var dashboard = setting_1["default"].createInstance();
        dashboard.fontSize = 123;
        dashboard.theme = 'dark-light';
        console.log("Dash Board page setting : \n ");
        console.log("  font Size : ".concat(dashboard.fontSize, " \n "));
        console.log("       them : ".concat(dashboard.theme, " \n "));
    };
    return dashboarPageSetting;
}());
exports["default"] = dashboarPageSetting;
