

function add(x:number,y:number):string{
    return "hashshs";
}

//匿名函数
var myadd=function (x:number,v:string):string {
    
    return "3123123";
}


var  myaddts:(name:string,age:number)=>number=function (n:string,a:number):number {
    return a;
}


//可选参数 ?:
//此时第二个参数可以不传
function aurg(firstName:string,lastName?:string) {

    if(lastName){
        return firstName+lastName;
    }
    else {
        return firstName;
    }
}

//默认参数
//默认参数可以不传
function aurg2(firstName?:string,lastName="123") {

    if(firstName){
        return firstName+lastName;
    }
    else {
        return lastName;
    }
}

//可变参数 可以传递很多参数
function peopleName(firstName:string,...restOfname:string[]) {

    return firstName+""+restOfname.join("");
}
var pn=peopleName("jkasd","adsd","asdas","asda")
//可变参数
function peopleName2(firstName:string,...restOfname:number[]) {

    return firstName+""+restOfname.join("");
}
var pn=peopleName2("jkasd",1,3,3,4)


//Lambads 和this关键字
var people={
    name:["123","!23","jgh","uyty"],
    getName:function () {
        return ()=>{
            var i=Math.floor(Math.random()*4);
            return {
                n:this.name[i]
            }
        }
    }
}
var myname=people.getName()

//函数重载
function attr(name:string):string ;
function attr(age:number):number ;

function attr(arg:any):any {
    if(arg &&  typeof  arg ==="string"){
        alert("123")
    }else{
        alert("123213")
    }
}
