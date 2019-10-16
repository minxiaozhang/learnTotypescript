var isBoon = false;
var num = 10;
var str = "234sdf";
var list = [1, 2, 3];
var listArr = [12, 34, 56];
//枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 8] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[8];
var c = Color.Red;
var notsure = 10;
notsure = "Hello";
var listt = [1, "4343", false];
function tell() {
    alert(colorName); //Green
    alert(c); //5
    alert(notsure); //Hello
    alert(listt[2]); //false
}
tell();
function fun() {
    return "str"; //返回值为字符串
}
function fun1() {
    return 10; //返回值为数字
}
function fun2() {
    //不需要返回值
}
