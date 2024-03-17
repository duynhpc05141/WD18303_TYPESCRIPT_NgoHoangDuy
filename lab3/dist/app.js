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
// bai 1 lab3
const a = 5;
const b = 10;
// arrowfunction
const tinhTong = () => {
    return a + b;
};
// function
function tinhTong2() {
    return a + b;
}
// bai 1.2 lab3
// rest parameter
const sum = (a, ...rest) => {
    for (let num of rest) {
        a += num;
    }
    return a;
};
// default parameter  
const sum2 = (a, b = 0) => {
    return a + b;
};
// optional parameter
const sum3 = (a, b) => {
    return a + b;
};
// 1.3 lab3 
const hobbies = ['Sport', 'Cooking'];
const activehobbies = ['hikking'];
// activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
// bai 2 lab3
// function & void
let sum4 = (x = 5, y) => {
    return x + y;
};
let seech = (output) => {
    console.log('result:' + output);
};
seech(sum4(5, 12));
console.log(seech(sum4(8, 5)));
// never & void
let something = undefined;
let nothing;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//function & callback
function AddandHandle(x, y, cb) {
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => { console.log(result); });
// Hàm fetch dữ liệu của từng Pokemon
function fetchPokemonData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
// Hàm fetch dữ liệu từ API
function fetchPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://pokeapi.co/api/v2/pokemon');
        const data = yield response.json();
        const results = data.results.slice(0, 10);
        const pokemons = [];
        for (let i = 0; i < results.length; i++) {
            const pokemonData = yield fetchPokemonData(results[i].url);
            const pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                type: pokemonData.types[0].type.name
            };
            pokemons.push(pokemon);
        }
        // Lặp lại các Pokémon trong mảng để tạo 10 cặp trùng nhau
        const doubledPokemons = pokemons.concat(pokemons);
        return doubledPokemons;
    });
}
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
};
const show = (pokemons) => {
    const pokemonList = document.getElementById('app');
    let html = ``;
    if (pokemonList) {
        // Xóa nội dung cũ
        pokemonList.innerHTML = '';
        // Lặp qua từng Pokemon và thêm vào danh sách hiển thị
        pokemons.forEach(pokemon => {
            html += `<div class="col mt-3" >
            <div class="card shadow position-relative" onclick="changeColor(this)">
                <span class="position-absolute top-0">#&${pokemon.id}</span>
                <img src="${pokemon.image}" alt="${pokemon.name}" >
            </div>
        </div>`;
        });
        pokemonList.innerHTML = html;
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemons = yield fetchPokemons(); // Lấy dữ liệu từ API
            const shuffledPokemons = shuffle(pokemons); // Xáo trộn các đối tượng Pokemon
            show(shuffledPokemons); // Hiển thị danh sách Pokemon
        }
        catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    });
}
// Gọi hàm main để bắt đầu thực thi
main();
