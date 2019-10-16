//定义泛型
function Hello(arg) {
    return arg;
}
//根据实际使用指定使用的类型
var out = Hello("wer");
//写T K 都随意
function Hello1(num) {
    return num;
}
function Hello2(num) {
    alert(num.length);
    return num;
}
var list = Hello2(["1", "3", "4"]);
for (var i = 0; i < length; i++) {
    alert(list[i]);
}
//泛型类型
function Hello3(arg) {
    return arg;
}
//返回值为Hello3泛型
var myHello = Hello3;
alert(myHello("hello"));
//这种写法与上面一样
var myHello1 = Hello3;
alert(myHello1("Hello"));
function myHello3(arg) {
    return arg;
}
var MH = myHello3;
alert(MH("Hello"));
function myHello4(arg) {
    return arg;
}
var MH2 = myHello4;
alert(MH2(3));
//泛型类
var HelloClass = /** @class */ (function () {
    function HelloClass() {
    }
    return HelloClass;
}());
var myHelloClass = new HelloClass();
myHelloClass.zero = 10;
myHelloClass.add = function (x, y) {
    return x + y;
};
alert(myHelloClass.zero); //10
alert(myHelloClass.add(1, 5)); //6
