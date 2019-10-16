




class Person {
    name:string;
    age:number;
    constructor(name:string="默认",age:number=0){
        this.name=name;
        this.age=age;
    }
    print(){
        return this.name+this.age
    }
}

class Student extends Person{
    school:string;

    constructor( school:string) {
        super();
        this.school= school
    }

    tell(){
        return this.name+":"+this.age+this.school
    }
}
var s=new Student("和决胜巅峰");
s.name="das"
s.age=90;
alert(s.tell());  // das:90和决胜巅峰





/*
var p =new Person();
var p1=new Person("张三",60);
alert(p.print());  //默认0
alert(p1.print()); //张三60*/
