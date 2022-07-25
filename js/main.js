const snbMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu");

// 반응형
snbBtn.addEventListener("click", function() {
    if(snbMenu.classList.contains("hide")) {
        snbMenu.classList.remove("hide");
    } else {
        snbMenu.classList.add("hide");
    }
})

// 로그인 누르면 로그아웃
const gameLogin = document.querySelector("figure .text ul li .login");
const gameStart = document.querySelector("figure .text ul li .fire")

let num = 1;

function check() {
    if(num % 2 === 1){
        alert("로그인 되었습니다")
        gameLogin.textContent = "로그아웃"
        gameStart.classList.add("start")
    } else {
        alert("로그아웃 되었습니다")
        gameLogin.textContent = "로그인"
        gameStart.classList.remove("start")
    }
    num += 1;
}

//로그인을 하면 게임실행창
//로그아웃일 경우 로그인메세지창
gameStart.addEventListener("click", function() {
    if(gameStart.classList.contains("start")) {
        alert("게임을 실행합니다")
        window.open("./game.html")
    } else {
        alert("로그인을 해주시기 바랍니다")
    }
})

//게임 페이지 실행버튼
function unmute() {
    const player = document.getElementById("player");
    const startImg = document.querySelector(".start_icon")
    player.muted = false;
    player.play();
    startImg.remove("img")
}