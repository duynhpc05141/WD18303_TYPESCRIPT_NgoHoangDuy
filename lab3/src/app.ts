// bai 1 lab3
const a = 5;
const b = 10;
// arrowfunction
const tinhTong = ():number => {
    return a+b;
}
// function
function tinhTong2():number {
    return a+b;
}
// bai 1.2 lab3
// rest parameter
const sum = (a: number, ...rest: number[]): number => {
    for( let num of rest){
        a +=num;
    }
    return  a;
}
// default parameter  
const sum2 = (a:number , b:number = 0) => {
    return a+b;
}
// optional parameter
const sum3 = (a:number , b?:number):number =>
{
    return a+<number>b;
}
// 1.3 lab3 
const hobbies = ['Sport', 'Cooking'];
const activehobbies = ['hikking'];
// activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
// bai 2 lab3
// function & void
let sum4 = (x:number=5, y?:number ) =>{
    return x+<number>y;
}
let seech = (output:any):void => {
    console.log('result:' + output);
}
seech(sum4(5,12));
console.log(seech(sum4(8,5)));
// never & void
let something: void = undefined;
let nothing:never;
function throwError(errorMsg:string):never {
    throw new Error(errorMsg);
}
//function & callback
function AddandHandle(x:number,y:number,cb:(num:number)=>void){
    const result = x+y;
    cb(result);
}
AddandHandle(10,20,(result)=>{ console.log(result); });
// bai 3 lab3
interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

// Hàm fetch dữ liệu của từng Pokemon
async function fetchPokemonData(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
}

// Hàm fetch dữ liệu từ API
async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const results = data.results.slice(0, 10);

    const pokemons: Pokemon[] = [];

    for (let i = 0; i < results.length; i++) {
        const pokemonData = await fetchPokemonData(results[i].url);
        const pokemon: Pokemon = {
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
}
const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
};

const show = (pokemons: Pokemon[]) => {
    const pokemonList = document.getElementById('app');
    let html: string = ``; 
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
async function main() {
    try {
        const pokemons = await fetchPokemons(); // Lấy dữ liệu từ API
        const shuffledPokemons = shuffle(pokemons); // Xáo trộn các đối tượng Pokemon
        show(shuffledPokemons); // Hiển thị danh sách Pokemon
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}

// Gọi hàm main để bắt đầu thực thi
main();


