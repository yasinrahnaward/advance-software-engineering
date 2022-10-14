(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var IEmployee_1 = require("./IEmployee");
var ContractorAdapter = /** @class */ (function (_super) {
    __extends(ContractorAdapter, _super);
    function ContractorAdapter(contractor) {
        return _super.call(this, { yearsWorked: contractor.getHoursWorked() / 2080 }) || this;
    }
    return ContractorAdapter;
}(IEmployee_1["default"]));
exports["default"] = ContractorAdapter;

},{"./IEmployee":3}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Contractor = /** @class */ (function () {
    function Contractor(metaData) {
        this.HoursWorked = metaData.HoursWorked;
    }
    Contractor.prototype.getHoursWorked = function () {
        return this.HoursWorked;
    };
    return Contractor;
}());
exports["default"] = Contractor;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(metaDaata) {
        this.yearsWorked = metaDaata.yearsWorked;
    }
    Employee.prototype.getYearsWorked = function () {
        return this.yearsWorked;
    };
    return Employee;
}());
exports["default"] = Employee;

},{}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var IEmployee_1 = require("./IEmployee");
var IContractor_1 = require("./IContractor");
var ContractorAdapter_1 = require("./ContractorAdapter");
var employee1 = new IEmployee_1["default"]({ yearsWorked: 5 });
var employee2 = new IEmployee_1["default"]({ yearsWorked: 10 });
var contractor1 = new IContractor_1["default"]({ HoursWorked: 2080 * 3 });
var employee3 = new ContractorAdapter_1["default"](contractor1);
var emplyeeList = [
    new IEmployee_1["default"]({ yearsWorked: 5 }),
    employee2,
    employee3
];
console.log(employee3 instanceof IEmployee_1["default"]);

},{"./ContractorAdapter":1,"./IContractor":2,"./IEmployee":3}]},{},[4]);
