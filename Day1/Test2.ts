interface Shape {
    area:() => void;
    perimeter:()=>void;
}

class Rectangle implements Shape {
    length:number;
    breadth:number;

    constructor(length:number, breadth:number){
        this.length=length;
        this.breadth=breadth;
    }

    area():void {
        console.log("area of Rectangle: "+this.length*this.breadth);
    }

    perimeter():void{
        console.log("Perimeter of Rectangle: "+2*(this.length+this.breadth));
    }
}

class Circle implements Shape {
    radius:number;

    constructor(radius:number){
        this.radius = radius;
    }

    area():void {
        console.log("Area of Circle: "+3.14*(this.radius*this.radius));
    }

    perimeter():void{
        console.log("Perimeter of Circle: "+2*3.14*this.radius);
    }
}

var ob1 = new Rectangle(10,20);
ob1.area();
ob1.perimeter();

var ob2 = new Circle(5);
ob2.area();
ob2.perimeter();