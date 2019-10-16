/***
 * Module 模式
 * 1.模块化、可重用
 * 2.封装变量和函数
 **/

//闭包
(function () {
    //
}());

var a; //全局的

function hello() {
    var b;//局部的
    c;//全局的
}

//全局变量通过匿名函数参数导入
(function ($,w) {

}(jQuery,window));


