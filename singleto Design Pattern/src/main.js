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
