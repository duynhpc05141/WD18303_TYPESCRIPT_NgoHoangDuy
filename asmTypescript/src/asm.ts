const pokemon : number = 20;
async function API(url: string){
    let data: Response = await fetch(url);
    return await data.json();
}
console.log(Math.floor(Math.random()*20)+1);
const APP: HTMLElement | null = document.getElementById('app');
let html: string = ``; 
for (let i = 0; i < 20; i++){
    const data : any = API(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*9)+1}/`);
    data.then(function(response:any){
        html += `<div class="col mt-3" >
            <div class="card shadow position-relative" onclick="changeColor(this)">
                <span class="position-absolute top-0">#${response.id}</span>
                <img src="${response.sprites.front_default}" alt="${response.name}" >
            </div>
        </div>`;
        APP?.innerHTML = html;
        
    })
}

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


let countdownInterval: number;

function startGame() {
    // Bắt đầu đồng hồ đếm ngược
    let countdown: number = 600; // 10 phút
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



function updateCountdown(seconds: number) {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}