var Singleton = /** @class */ (function () {
    function Singleton(d) {
        this.data = d;
    }
    Singleton.getInstance = function (d) {
        if (Singleton._instance == null) {
            Singleton._instance = new Singleton(d);
        }
        return Singleton._instance;
    };
    return Singleton;
}());
var first = Singleton.getInstance("data");
console.log(first.data);
var second = Singleton.getInstance("data two");
console.log(second.data);
console.log(first === second);
