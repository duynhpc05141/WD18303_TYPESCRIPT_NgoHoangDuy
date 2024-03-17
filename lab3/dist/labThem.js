"use strict";
//Arrow function
const double = (num) => num * 2;
//Function return
const sum1 = (num1, num2) => {
    return num1 + num2;
};
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseString('Hello'));
// làm chơi viết hoa string nhập vào
const upto = (str) => {
    return str.toUpperCase();
};
console.log(upto('ngoduy'));
const addNumber = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumber(3, 5));
//Function with parameters
// tinh tong mot mang cac so truyen vao 
function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 8, 2, 5]));
//nhận vào một số không xác định các tham số và tính tổng của chúng
function tong(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log(tong(1, 2, 3, 4, 5));
//Default parameter
const doubleNumber = (num) => {
    return num * num;
};
function Default(num1, num2 = 0) {
    return num1 + num2;
}
//Optional parameter
function getValueOrDefault(value = 0) {
    if (value !== undefined) {
        return value;
    }
    else {
        return 0;
    }
}
//Spread operators
function spread(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log(spread(1, 2, 3, 4, 5));
//Rest parameter
function rest(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}
console.log(rest(2, 3, 4, 3, 6, 8));
//Function & void
//Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
//Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.
function mess() {
    console.log("Hello duy");
}
mess();
//Never & void
// So sánh sự khác nhau giữa never và void trong TypeScript.
// Tạo một hàm không bao giờ hoàn thành (never) và một hàm không trả về giá trị nào (void).
//v********** void
// Kiểu void được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào.
// Hàm void có thể kết thúc bằng cách sử dụng câu lệnh return không có giá trị, hoặc không có lệnh return.
// Một hàm void có thể được gọi và sử dụng trong các biểu thức gán giá trị hoặc truyền vào như một tham số.
//*********never */
// Kiểu never được sử dụng để chỉ ra rằng một hàm không bao giờ hoàn thành, 
// tức là nó không bao giờ trả về một giá trị hoặc kết thúc bình thường.
// Hàm never có thể kết thúc bằng cách ném một ngoại lệ, hoặc bằng cách vòng lặp vô hạn, 
// hoặc bằng cách gọi một hàm không bao giờ trả về.
// Một hàm never thường được sử dụng trong các trường hợp mà việc kết thúc là không thể, 
// như khi một hàm ném một lỗi hoặc khi xử lý logic không thể xảy ra 
function mess2() {
    console.log("Hello duy");
}
//never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
