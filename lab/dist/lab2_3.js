"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const pokemon = 20;
function API(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(url);
        return yield data.json();
    });
}
console.log(Math.floor(Math.random() * 20) + 1);
const APP = document.getElementById('app');
let html = ``;
for (let i = 0; i < 20; i++) {
    const data = API(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 20) + 1}/`);
    data.then(function (response) {
        html += `<div class="col mt-3" >
            <div class="card shadow position-relative" onclick="changeColor(this)">
                <span class="position-absolute top-0">#&${response.id}</span>
                <img src="${response.sprites.front_default}" alt="${response.name}" >
            </div>
        </div>`;
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
    });
}
function changeColor(element) {
    const isSelected = element.classList.contains('selected');
    const images = document.querySelectorAll('.card');
    images.forEach((img) => {
        // img.classList.remove('selected');
    });
    if (!isSelected) {
        element.classList.add('selected');
    }
}
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
    const input = document.getElementById('name').value;
    if (input.trim() === '') {
        document.getElementById("error-message").innerHTML = "Không được để trống";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(input)) {
        document.getElementById("error-message").innerHTML = "Không được sử dụng ký tự đặc biệt";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }
    if (input.length === 1) {
        document.getElementById("error-message").innerHTML = "Không được chỉ sử dụng 1 ký tự";
        e.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        return;
    }
});
let countdownInterval;
function startGame() {
    // Bắt đầu đồng hồ đếm ngược
    let countdown = 600; // 10 phút
    updateCountdown(countdown);
    countdownInterval = setInterval(function () {
        countdown--;
        updateCountdown(countdown);
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            alert("Hết thời gian!");
        }
    }, 1000);
}
function updateCountdown(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}
