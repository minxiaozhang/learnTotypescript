var isBoon:boolean=false;
var num:number=10;
var str:string="234sdf";
var list:number[]=[1,2,3];
var listArr:Array<number>=[12,34,56];
//枚举类型
 enum Color {
     Red=5,Green=8,Blue=4
 };
 var colorName:string=Color[8];
var c:Color=Color.Red

var notsure:any=10
notsure="Hello"

var listt:any[]=[1,"4343",false]

function tell() {
    alert(colorName)//Green
    alert(c);//5
    alert(notsure) //Hello
    alert(listt[2])//false
}
tell();

function fun():string {
    return "str";  //返回值为字符串
}
function fun1():number {
    return 10;  //返回值为数字
}
function fun2():void {
     //不需要返回值
}
