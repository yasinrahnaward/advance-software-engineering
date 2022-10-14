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
