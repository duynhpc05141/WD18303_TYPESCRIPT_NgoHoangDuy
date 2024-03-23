// bai 1
interface AddFn{
    (a:number, b: number): number;
}

let add: AddFn;

add = (n1: number,n2: number)=>{
    return n1 + n2;
};
// bai 2 interface ke thua
interface Named {
    readonly name?: string;
    outputName?: string;
};

interface Greentable extends Named {
    greet(phrase: string): void;
};
let user1: Greentable = {
    name: 'John',
    greet(phrase: string) {
        console.log(phrase + ', ' + this.name);
    }
};

user1.greet('hi');
console.log(user1);

// bai 3 
abstract class Department {
    static fiscalYear = 2024;
    protected employees: string[] = [];
    constructor(protected readonly id:string, public name:string){
    }
    static craeteEmployee(name:string){
        return {name:name};
    }
    abstract describe(this: Department):void;

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDeparment extends Department {
    admins: string[];
    constructor(id:string, admins:string[]){
        super(id,"IT");
        this.admins = admins;
    }
    describe(){
        console.log('IT Deparment - ID:'+ this.id);
    }
}

const employee1 = Department.craeteEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDeparment('d1',['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');




