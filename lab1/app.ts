//===========================================LAB1============================================
// let number1: number = 1;
// let number2: number = 1.5;
// let phrase: string = 'hello';
// let permit:boolean = true;

// const result =  number1+ number2;
// if (permit) {
//     console.log(phrase + result);
// }else{
//     console.log("not show");
// }

/// bai tap them 
function changeColor(element: HTMLElement) {
    const isSelected: boolean = element.classList.contains('selected');
    const images: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

    images.forEach((img: HTMLElement) => {
        // img.classList.remove('selected');
    });

    if (!isSelected) {
        element.classList.add('selected');
    }
}

document.getElementById('form')?.addEventListener('submit', (e: Event) => {
    const input: string = (document.getElementById('name') as HTMLInputElement).value;

    if (input.trim() === '') {
        document.getElementById("error-message")!.innerHTML = "Không được để trống";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }

    const specialCharacters: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (specialCharacters.test(input)) {
        document.getElementById("error-message")!.innerHTML = "Không được sử dụng ký tự đặc biệt";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }

    if (input.length === 1) {
        document.getElementById("error-message")!.innerHTML = "Không được chỉ sử dụng 1 ký tự";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }
});



//========================================LAB2===================================
/// demo 
// const student: object = {
//     name:'teo',
//     age:18
// } as const;
//  let hobbies: string[] = ['alo','aa'];


///**********************Type inference
// function add(x = 5) {
//     let phrase = 'Result is';
//     phrase =10;
//     x= '2.8';
//     return phrase + x;
// }
// let result; number =add();


///***********************Objeact
// var person : {
//     name:string,
//     age:number
// }
// person ={
//     name:'typescript',
//     age:11
// }
// console.log(person.name);


////*******************Array, tuple, any, enum
// enum Role {ADMIN, READ_ONLY, AUTHOR};
// const person : {
//     name: string,
//     age:number,
//     hobbies:string[],
//     role: string,
//     roleuple: [number,string]
// } = {
//     name: 'typescript',
//     age:11,
//     hobbies:['sport','cooking'],
//     role: Role.ADMIN,
//     roleuple:[2,'author']
// }

// let favouriteActivites: any[];
// favouriteActivites = [5, 'sport',true];
// if (person.role == Role.AUTHOR) {
//     console.log('is author');
// }

// person.roleuple.push('admin');
// person.roleuple[1] = 10;
// person.roleuple = [0, 'admin','user'];

//*****************Literal type & custom type
// type Combinable =number | string;
// function combine(input1: Combinable, input2:number|string, resultConversion: 'as-number'|'as-text'){
//     let result;
//     if (typeof input1==='number' && typeof input2==='number' || resultConversion ==='as-number') {
//         result = parseFloat(input1) + parseFloat(input2);
//     } else{
//         result = input1.toString()+ input2.toString();
//     }
//     return result;
// }

// const combineNumber = combine(30,26,'as-number');
// console.log(combineNumber);

// const combineString = combine('30','26','as-number');
// console.log(combineString);

// const combineText = combine('typescript vs','javascript','as-text');
// console.log(combineText);


//**********************Num & undefined */

// var a = null;
// console.log(a);
// console.log(typeof(a));

// var b;
// console.log(b);
// console.log(typeof(b));
// console.log(undeclaredvar);

//***************************Unknown & any */
// let userInput: unknown;
// let userName:string;

// userInput = 5;
// userInput = 'tsc';
// userName = userInput;
// userName = <string> userInput;
// if (typeof userInput ==='string') {
//     userName = userInput;
// }




