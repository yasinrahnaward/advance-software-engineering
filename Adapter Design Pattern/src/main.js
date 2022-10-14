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
