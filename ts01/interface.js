var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다.";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Person;
}());
var p = new Person();
p.setSpeed(50);
var str4 = p.run();
console.log(str4);
//# sourceMappingURL=interface.js.map