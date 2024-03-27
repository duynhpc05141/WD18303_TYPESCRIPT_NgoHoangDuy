"use strict";
// bai 2 Type guard
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo .. ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed:' + speed);
}
// bai 4 Generic
//Generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sport'] }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'Go no value.';
    if (element.length === 1) {
        descriptionText = 'Go 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'element';
    }
    return [element, descriptionText];
}
//Generic class
class DataStore {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }
    getIttem() {
        return [...this.data];
    }
}
const textStorage = new DataStore();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getIttem());
const numberStorage = new DataStore();
