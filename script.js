const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("mouseover", playHover);
});

function playHover(){
    let audio = new Audio("./sounds/hover.wav")
    audio.play()
}


