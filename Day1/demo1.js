var Course = /** @class */ (function () {
    //constructor
    function Course(name) {
        this.name = name;
    }
    //function
    Course.prototype.disp = function () {
        console.log("Course name is: " + this.name);
    };
    return Course;
}());
//create an object
var obj = new Course("Data Science");
//access the field
console.log("Course name is: " + obj.name);
//access the function
obj.disp();
