var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this.name;
    };
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newname) {
            this._name = newname;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var h = new Hello();
h.name = "csdf";
alert(h.tell());
