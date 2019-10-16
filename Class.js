var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name === void 0) { name = "默认"; }
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(school) {
        var _this = _super.call(this) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + this.school;
    };
    return Student;
}(Person));
var s = new Student("和决胜巅峰");
s.name = "das";
s.age = 90;
alert(s.tell()); // das:90和决胜巅峰
/*
var p =new Person();
var p1=new Person("张三",60);
alert(p.print());  //默认0
alert(p1.print()); //张三60*/
