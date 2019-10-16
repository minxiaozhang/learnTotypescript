var myFunc:(a:number)=>string=function (a:number):string {
    return "返回值是string 入参是"+a
}
alert(myFunc(2))

//等同于
var myFunc2 =function (a:number):string {
    return "返回值是string 入参是"+a
}
alert(myFunc2(2))
