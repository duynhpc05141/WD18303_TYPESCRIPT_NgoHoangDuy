"use strict";
let number1 = 1;
let number2 = 1.5;
let phrase = 'hello';
let permit = true;
const result1 = number1 + number2;
if (permit) {
    console.log(phrase + result1);
}
else {
    console.log("not show");
}
///**********************Type inference
function add(x = "5") {
    let phrase = 'Result is';
    phrase = "10";
    x = '2.8';
    return phrase + x;
}
let result = add();
///***********************Objeact
var person1;
person1 = {
    name: 'typescript',
    age: 11
};
console.log(person1.name);
////*******************Array, tuple, any, enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'typescript',
    age: 11,
    hobbies: ['sport', 'cooking'],
    role: Role.ADMIN,
    roleuple: [2, 'author']
};
let favouriteActivites;
favouriteActivites = [5, 'sport', true];
if (person.role == Role.AUTHOR) {
    console.log('is author');
}
person.roleuple.push('admin');
person.roleuple[1] = "10";
person.roleuple = [0, 'admin'];
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
const combineString = combine('30', '26', 'as-number');
console.log(combineString);
const combineText = combine('typescript vs', 'javascript', 'as-text');
console.log(combineText);
//**********************Num & undefined */
var a = null;
console.log(a);
console.log(typeof (a));
var b;
console.log(b);
console.log(typeof (b));
var undeclaredvar;
console.log(undeclaredvar);
//***************************Unknown & any */
let userInput;
let userName;
userInput = 5;
userInput = 'tsc';
userName = userInput;
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
