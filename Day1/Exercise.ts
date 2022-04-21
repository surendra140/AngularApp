class Employee {
    id:string;
    username:string;
    email:string;
    password:string;
     
    add():void{
       employee.push(102,"Rithik","Rithik@123","r1234");
       console.log(employee);
       console.log("employee Added");
    }

    delete():void{
        employee.pop();
        console.log("employee Deleted");
        console.log(employee);
       
     }
     update():void{
        employee.push("Surendra");
        console.log("employee Updated");
        console.log(employee);
     }
     disp():void{
        console.log("employee Data");
        console.log(employee);
     }

}
var employee: (number|string)[] = [101, "Surendra","Surendra@gmail","surendr123"]; 

var obj1 = new Employee()
console.log("Choose Option \n 1.Add Employee \n 2. Delete Employee \n 3.Update Employee \n 4.Show Employee")
var choice:number = 1;

switch(choice){
    case 1:{
        obj1.add();
        break;
    }

    case 2:{
        obj1.delete();
        break;
    }

    case 3: {
        obj1.update();
        break;
    }

    case 4: {
        obj1.disp();
        break
    }

    default: {
       console.log("Invalid Option")
    }
}



