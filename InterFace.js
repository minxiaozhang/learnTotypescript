/*
function printeLabel(labelObj:{label:string}) {
    console.log(labelObj.label)
}

var myObj={label:"ashdjkash"}

printeLabel(myObj)
*/
function printeLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: "ashdjkash" };
printeLabel(myObj);
var myseacrh;
myseacrh = function (source, subString) {
    var result = source.search(subString);
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
var myarry;
myarry = ["iew", "iusdf"];
var myarry1;
myarry1 = [1, 2];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var s = {}; //注意此处并不是用new
s.color = "red";
s.sideLength = 10;
s.penWidth = 15;
var c;
c(10);
c.rest();
