class Course {
    //field
    name:string;

    //constructor
    constructor(name:string){
        this.name = name
    }

    //function
    disp():void {
        console.log("Course name is: "+ this.name)
    }
}

//create an object
var obj = new Course("Data Science");

//access the field
console.log("Course name is: "+obj.name)

//access the function
obj.disp();