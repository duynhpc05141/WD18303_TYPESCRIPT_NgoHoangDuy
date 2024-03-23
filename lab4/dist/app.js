"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
;
;
let user1 = {
    name: 'John',
    greet(phrase) {
        console.log(phrase + ', ' + this.name);
    }
};
user1.greet('hi');
console.log(user1);
// bai 3 
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static craeteEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDeparment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log('IT Deparment - ID:' + this.id);
    }
}
const employee1 = Department.craeteEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDeparment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
