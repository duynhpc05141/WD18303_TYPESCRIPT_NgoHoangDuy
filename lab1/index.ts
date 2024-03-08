// console.log('hello loi!');
// let a:number = 2;
// let b:number = 2;
// console.log(a+b);

// function changeColor(element: HTMLElement) {
//     const isSelected: boolean = element.classList.contains('selected');
//     const images: NodeListOf<HTMLElement> = document.querySelectorAll('.card');

//     images.forEach((img: HTMLElement) => {
//         // img.classList.remove('selected');
//     });

//     if (!isSelected) {
//         element.classList.add('selected');
//     }
// }

// document.getElementById('form')?.addEventListener('submit', (e: Event) => {
//     const input: string = (document.getElementById('name') as HTMLInputElement).value;

//     if (input.trim() === '') {
//         document.getElementById("error-message")!.innerHTML = "Không được để trống";
//         e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
//         return;
//     }

//     const specialCharacters: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
//     if (specialCharacters.test(input)) {
//         document.getElementById("error-message")!.innerHTML = "Không được sử dụng ký tự đặc biệt";
//         e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
//         return;
//     }

//     if (input.length === 1) {
//         document.getElementById("error-message")!.innerHTML = "Không được chỉ sử dụng 1 ký tự";
//         e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
//         return;
//     }
// });


