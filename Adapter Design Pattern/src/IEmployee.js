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
