const boxes = document.querySelectorAll(".box");
const musicButton = document.getElementById("radioOption");
const musicBar = document.getElementById("musicBar");

let musicOn = false;
let audio = new Audio();

//Visualizer Globals
const audioCtx = new window.AudioContext();
const analyser = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(audio);

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
    const blockHeight = 4;
    const gap = 1;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const blocks = Math.floor(barHeight / (blockHeight + gap)) / 2;
        
        for (let j = 0; j < blocks; j++) {
            const y = HEIGHT - (j * (blockHeight + gap)) - blockHeight;

            //block gradient 
            const gradient = canvasCtx.createLinearGradient(x, y, x, y + blockHeight);
            gradient.addColorStop(0, "#6efff6"); // top - light blue
            gradient.addColorStop(1, "#1f4e55"); // bottom - dark blue

            canvasCtx.fillStyle = gradient;
            canvasCtx.fillRect(x, y, barWidth, blockHeight);

            //inset border
            canvasCtx.strokeStyle = "rgba(0, 0, 0, 0.3)";
            canvasCtx.lineWidth = 1;
            canvasCtx.strokeRect(x, y, barWidth, blockHeight);
        }
        x += barWidth + 1;
    }
}
