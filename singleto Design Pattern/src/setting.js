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
