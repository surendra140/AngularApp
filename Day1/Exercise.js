var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.add = function () {
        employee.push(102, "Rithik", "Rithik@123", "r1234");
        console.log(employee);
        console.log("employee Added");
    };
    Employee.prototype["delete"] = function () {
        employee.pop();
        console.log("employee Deleted");
        console.log(employee);
    };
    Employee.prototype.update = function () {
        employee.push("Surendra");
        console.log("employee Updated");
        console.log(employee);
    };
    Employee.prototype.disp = function () {
        console.log("employee Data");
        console.log(employee);
    };
    return Employee;
}());
var employee = [101, "Surendra", "Surendra@gmail", "surendr123"];
var obj1 = new Employee();
console.log("Choose Option \n 1.Add Employee \n 2. Delete Employee \n 3.Update Employee \n 4.Show Employee");
var choice = 1;
switch (choice) {
    case 1: {
        obj1.add();
        break;
    }
    case 2: {
        obj1["delete"]();
        break;
    }
    case 3: {
        obj1.update();
        break;
    }
    case 4: {
        obj1.disp();
        break;
    }
    default: {
        console.log("Invalid Option");
    }
}
