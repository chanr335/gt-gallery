const boxes = document.querySelectorAll(".box");
const musicButton = document.getElementById("musicButton");
const musicBar = document.getElementById("musicBar");

let musicOn = false;
let audio = new Audio();

//Visualizer Globals
const audioCtx = new window.AudioContext();
const analyser = audioCtx.createAnalyser();

analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const canvas = document.getElementById("frequency");
const canvasCtx = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;


const MUSIC = [
    "Dark Line - Satoshi Bando",
    "Wave Train - Satoshi Bando",
    "lose ya - asc",
    "cartz"
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
   
    //hook to audio
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
     
    if(musicOn){
        musicBar.classList.remove("hidden");
        console.log(musicBar.classList)
        const notification = document.createElement("p");
        notification.innerHTML = `NOW PLAYING: ${MUSIC[songIndex]}`;
        notification.classList.add("slidingWords");
        musicBar.appendChild(notification);

        audio.play();
        //Visualizer
        if(audioCtx.state === "suspended"){
            audioCtx.resume();
        }
        draw();

        setTimeout(() =>{
            musicBar.classList.add("hidden")
        }, 10000);
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

function draw(){
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    const barWidth = (WIDTH / bufferLength) * 1.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];

        canvasCtx.fillStyle = `rgb(92, 209, 146)`;
        canvasCtx.fillRect(x, HEIGHT - barHeight / 3, barWidth, barHeight);
        x += barWidth + 1;
    }
}
