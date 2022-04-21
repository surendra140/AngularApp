class Employee{
    id:number;
    username:string;
    email:string;
    password:number;
    employeearray:any[]=[14129877,"Venkatesh","lvsep2000@gmail.com",1234];

   add(){
      var added=this.employeearray.push(2000);
      console.log("added element:"+added);
      
        }
        
  delete(){
  var deleted=this.employeearray.pop();
  console.log("deleted element:"+deleted);
  }

  retrive(){
      console.log("retrived array is"+this.employeearray);
  }
  }
  var obj = new Employee();
   obj.add();
   obj.delete();
   obj.retrive();
