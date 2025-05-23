const boxes = document.querySelectorAll(".box");
const musicButton = document.getElementById("musicButton");
const musicBar = document.getElementById("musicBar");

let musicOn = false;

const MUSIC = [
    "Dark Line - Satoshi Bando",
    "Wave Train - Satoshi Bando",
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
    const notification = document.createElement("p");
    const songName = playSong(musicOn, MUSIC);
    notification.innerHTML = `NOW PLAYING: ${songName}`;
    notification.classList.add("slidingWords");
    musicBar.appendChild(notification);
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

function playSong(musicOn, list){
    console.log(musicOn)
    const songIndex = Math.floor(Math.random() * 2);
    let audio = new Audio(`music/${list[songIndex]}.mp3` );
    if(musicOn){
        audio.play()
    } else{
        audio.pause()
    }
    return list[songIndex]
}
