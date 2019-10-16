
/*
function printeLabel(labelObj:{label:string}) {
    console.log(labelObj.label)
}

var myObj={label:"ashdjkash"}

printeLabel(myObj)
*/


//接口的创建  设置可选属性?:
interface LabelValue {
    label:string;
    flag?:number;  //可选参数 此时label 必传，flag 可以不传
}
function printeLabel(labelObj:LabelValue) {
    console.log(labelObj.label)
}
var myObj={label:"ashdjkash"}
printeLabel(myObj)


// 接口 函数类型
interface SearchFun {
    (source:string,subString):boolean;
}
var myseacrh:SearchFun;
myseacrh=function (source:string,subString:string) {
    var result=source.search(subString);
    if(result!=-1){
        return true;
    }else {
        return false;
    }
}

// 接口 数组类型
interface  stringArray {
    [index:number]:string;
}
var myarry:stringArray;
myarry=["iew","iusdf"]

interface  stringArray2 {
    [index:number]:number;
}
var myarry1:stringArray2;
myarry1=[1,2]

//接口 Class类型
interface ClockInterface {
    currentTime:Date;
    setTime(d:Date);
}
class  Clock implements ClockInterface{
    currentTime:Date;
    setTime(d: Date) {
        this.currentTime=d;
    }
    constructor(h:number,m:number){

    }
}

//接口继承 可以多继承
interface Shape {
    color:string;
}
interface PenStorke{
    penWidth:number;
}
interface Square extends Shape,PenStorke{
    sideLength:number;
}
var s=<Square>{}; //注意此处并不是用new
s.color="red";
s.sideLength=10;
s.penWidth=15;

//接口 混合类型
interface Couter {
    a:number;
    rest():void;
    (start:number):string;
}
var c:Couter;
c(10);
c.rest()
