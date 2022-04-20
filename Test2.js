var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.area = function () {
        console.log("area of Rectangle: " + this.length * this.breadth);
    };
    Rectangle.prototype.perimeter = function () {
        console.log("Perimeter of Rectangle: " + 2 * (this.length + this.breadth));
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        console.log("Area of Circle: " + 3.14 * (this.radius * this.radius));
    };
    Circle.prototype.perimeter = function () {
        console.log("Perimeter of Circle: " + 2 * 3.14 * this.radius);
    };
    return Circle;
}());
var ob1 = new Rectangle(10, 20);
ob1.area();
ob1.perimeter();
var ob2 = new Circle(5);
ob2.area();
ob2.perimeter();
