var Circle = /** @class */ (function () {
    function Circle(length) {
        this.length = length;
    }
    Circle.prototype.disp = function () {
        console.log("Course name is: " + this.length);
    };
    return Circle;
}());
var Rectang = /** @class */ (function () {
    function Rectang(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectang.prototype.disp = function () {
        console.log("Area of Rectang is: " + this.height * this.width);
    };
    return Rectang;
}());
var obj4 = new Circle(20);
obj4.disp();
var obj5 = new Rectang(10, 20);
obj5.disp();
