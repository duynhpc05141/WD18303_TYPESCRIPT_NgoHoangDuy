
let number1: number = 1;
let number2: number = 1.5;
let phrase: string = 'hello';
let permit:boolean = true;

const result1 =  number1+ number2;
if (permit) {
    console.log(phrase + result1);
}else{
    console.log("not show");
}

///**********************Type inference
function add(x = "5") {
    let phrase = 'Result is';
    phrase = "10";
    x = '2.8';
    return phrase + x;
}
let result: string = add();
///***********************Objeact
var person1 : {
    name:string,
    age:number
}
person1 ={
    name:'typescript',
    age:11
}
console.log(person1.name);
////*******************Array, tuple, any, enum
enum Role {ADMIN, READ_ONLY, AUTHOR};
const person : {
    name: string,
    age:number,
    hobbies:string[],
    role: number,
    roleuple: [number,string]
} = {
    name: 'typescript',
    age:11,
    hobbies:['sport','cooking'],
    role: Role.ADMIN,
    roleuple:[2,'author']
}
let favouriteActivites: any[];
favouriteActivites = [5, 'sport',true];
if (person.role == Role.AUTHOR) {
    console.log('is author');
}
person.roleuple.push('admin');
person.roleuple[1] = "10";
person.roleuple = [0, 'admin'];
//*****************Literal type & custom type
type Combinable =number | string;
function combine(input1: Combinable, input2:number|string, resultConversion: 'as-number'|'as-text'){
    let result;
    if (typeof input1==='number' && typeof input2==='number' || resultConversion ==='as-number') {
        result = +input1 + +input2;
    } else{
        result = input1.toString()+ input2.toString();
    }
    return result;
}
const combineNumber = combine(30,26,'as-number');
console.log(combineNumber);
const combineString = combine('30','26','as-number');
console.log(combineString);
const combineText = combine('typescript vs','javascript','as-text');
console.log(combineText);
//**********************Num & undefined */
var a = null;
console.log(a);
console.log(typeof(a));
var b;
console.log(b);
console.log(typeof(b));
var undeclaredvar;
console.log(undeclaredvar);
//***************************Unknown & any */
let userInput: unknown;
let userName:unknown;
userInput = 5;
userInput = 'tsc';
userName = userInput;
userName = <string> userInput;
if (typeof userInput ==='string') {
    userName = userInput;
}
