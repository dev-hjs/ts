var num1 = 3;
var num2 = 5;
var str1 = "string";
var str2 = "test";
var numArr = [3, 5, 6];
var numArr2 = [3, 4, 5];
console.log(num1);
console.log(numArr);
var tp;
[string, number];
tp = ["1", 2];
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = [1, 2, 3];
function setUser() {
    return "test";
}
function testObject() {
    return "abc";
}
var strTest = testObject();
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);
function testFunc(str, num) {
    console.log("str  =  " + str);
    console.log("num  = " + num);
}
testFunc("문자열", 330);
function throwError() {
    throw new Error("nonono");
}
var AjaxUtil = function (ti) {
    //let str:string = "this_str";
    //let num:number = 3;
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: "홍길동", num: 30 };
var au = new AjaxUtil(test1);
au.print();
var Car = /** @class */ (function () {
    function Car(pcarName1) {
        this.pcarName1 = pcarName1;
        this.carName = pcarName;
    }
    return Car;
}());
var hyundai = new Car("Sonata");
var pStr;
console.log;
"hyundai자동차 중 제 차는 :  ";
pStr += hyundai.carName;
console.log(pStr);
//# sourceMappingURL=ts_data.js.map