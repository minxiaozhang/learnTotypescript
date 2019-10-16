function add(x, y) {
    return "hashshs";
}
//匿名函数
var myadd = function (x, v) {
    return "3123123";
};
var myaddts = function (n, a) {
    return a;
};
//可选参数 ?:
//此时第二个参数可以不传
function aurg(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
//默认参数
//默认参数可以不传
function aurg2(firstName, lastName) {
    if (lastName === void 0) { lastName = "123"; }
    if (firstName) {
        return firstName + lastName;
    }
    else {
        return lastName;
    }
}
//可变参数 可以传递很多参数
function peopleName(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfname.join("");
}
var pn = peopleName("jkasd", "adsd", "asdas", "asda");
//可变参数
function peopleName2(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfname.join("");
}
var pn = peopleName2("jkasd", 1, 3, 3, 4);
//Lambads 和this关键字
var people = {
    name: ["123", "!23", "jgh", "uyty"],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myname = people.getName();
function attr(arg) {
    if (arg && typeof arg === "string") {
        alert("123");
    }
    else {
        alert("123213");
    }
}
