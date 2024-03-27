// bai 1
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// bai 2 Type guard
class Car {
    drive(){
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo .. '+ amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

// bai 3 Discriminated unions
interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;
function moveAnimal(animal:Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed:'+speed);
}

// bai 4 Generic
//Generic
function merge<T extends object,U extends object>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergeObj = merge({name: 'Max', hobbies: ['Sport']},{age:30});
console.log(mergeObj);

//Generic interface
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):[T , string] {
    let descriptionText = 'Go no value.';
    if (element.length === 1) {
        descriptionText = 'Go 1 element';
    }else if (element.length > 1) {
        descriptionText = 'Got'+ element.length + 'element';
    }
    return [element, descriptionText];
}
//Generic class
class DataStore<T extends string | number | boolean>{
    private data: T[]= [];
    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item:T){
        if (this.data.indexOf(item) === -1 ) {
            return;
        }
        this.data.splice(this.data.indexOf(item),1); //-1
    }

    getIttem(){
        return [...this.data]
    }
}

const textStorage = new DataStore<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getIttem());

const numberStorage = new DataStore<number>();
