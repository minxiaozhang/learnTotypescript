
//定义泛型
function Hello<T>(arg:T):T{
    return arg
}
//根据实际使用指定使用的类型
var out=Hello<string>("wer");

//写T K 都随意
function Hello1<K>(num:K):K {
    return num
}

function Hello2<T>(num:T[]):T[] {
    alert(num.length);
    return num
}
var list:Array<string>=Hello2<string>(["1","3","4"]);
for (var i=0;i<length;i++){
    alert(list[i]);
}

//泛型类型
function Hello3<T>(arg:T):T {
    return arg;
}
//返回值为Hello3泛型
var myHello:<K>(arg:K)=>K=Hello3;
alert(myHello("hello"))

//这种写法与上面一样
var myHello1:{<T>(arg:T):T}=Hello3;
alert(myHello1("Hello"))

//泛型接口
interface  HelloIn {
    <T>(arg:T):T;
}
function myHello3<T>(arg:T):T {
    return arg
}
var MH:HelloIn=myHello3;
alert(MH("Hello"))

//也可以在定义接口的时候声明泛型
interface  HelloIn2<T> {
     (arg:T):T;
}
function myHello4<T>(arg:T):T {
    return arg
}
var MH2:HelloIn2<number>=myHello4;
alert(MH2(3))


//泛型类

class HelloClass<T> {
    zero:T;
    add:(x:T,y:T)=>T;
}
var myHelloClass=new HelloClass<number>();
myHelloClass.zero=10;
myHelloClass.add=function (x,y) {
    return x+y;
}
alert(myHelloClass.zero);//10
alert(myHelloClass.add(1,5));//6
