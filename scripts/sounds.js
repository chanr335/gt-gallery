const boxes = document.querySelectorAll(".box");
const musicButton = document.getElementById("musicButton");
const musicBar = document.getElementById("musicBar");

let musicOn = false;
let audio = new Audio();

const MUSIC = [
    "Dark Line - Satoshi Bando",
    "Wave Train - Satoshi Bando",
    "lose ya - asc",
]

boxes.forEach(box => {
    box.addEventListener("mouseover", playHover);
    box.addEventListener("click", playClick);  
});

addEventListener("load", () => {
    scrollbar();
});

musicButton.addEventListener("click", () =>{
    musicOn = !musicOn;
    const songIndex = Math.floor(Math.random() * MUSIC.length);
    audio.src = `music/${MUSIC[songIndex]}.mp3` 

    if(musicOn){
        const notification = document.createElement("p");
        notification.innerHTML = `NOW PLAYING: ${MUSIC[songIndex]}`;
        notification.classList.add("slidingWords");
        audio.play()
        musicBar.appendChild(notification);
    } else{
        audio.pause()
    }
});

function scrollbar(){
    const modelBoxes = document.querySelectorAll(".modelBox");
    modelBoxes.forEach(box => {
        box.addEventListener("mouseover", playHover);
        box.addEventListener("click", playClick);  
    });
}

function playHover(){
    let audio = new Audio("sounds/hover.wav")
    audio.play()
}

function playClick(){
    let audio = new Audio("sounds/click.wav")
    audio.play()
}
