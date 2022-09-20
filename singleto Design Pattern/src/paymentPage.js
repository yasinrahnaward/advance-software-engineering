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
