// interface
// // class
var nofly = /** @class */ (function () {
    function nofly() {
    }
    nofly.prototype.fly = function () {
        console.log("I can not fly");
    };
    return nofly;
}());
var fly = /** @class */ (function () {
    function fly() {
    }
    fly.prototype.fly = function () {
        console.log(" I can fly");
    };
    return fly;
}());
var quick = /** @class */ (function () {
    function quick() {
    }
    quick.prototype.quick = function () {
        console.log(" I can quick");
    };
    return quick;
}());
var noquick = /** @class */ (function () {
    function noquick() {
    }
    noquick.prototype.quick = function () {
        console.log("I have not quick");
    };
    return noquick;
}());
// injection
var duckbehavior = /** @class */ (function () {
    function duckbehavior() {
    }
    duckbehavior.prototype.setfly = function (fly) {
        this.flyable = fly;
    };
    duckbehavior.prototype.setquick = function (quick) {
        this.quickable = quick;
    };
    duckbehavior.prototype.performfly = function () {
        this.flyable.fly();
    };
    duckbehavior.prototype.performquick = function () {
        this.quickable.quick();
    };
    return duckbehavior;
}());
var duckone = new duckbehavior();
duckone.setfly(new fly());
duckone.setquick(new noquick());
duckone.performfly();
duckone.performquick();
var ducktwo = new duckbehavior();
ducktwo.setfly(new nofly());
ducktwo.setquick(new quick());
ducktwo.performfly();
ducktwo.performquick();
