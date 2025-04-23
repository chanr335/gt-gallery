const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseover", playHover);
    box.addEventListener("click", playClick);  
    box.addEventListener("click", () => openBox(box.id));  
});

function playHover(){
    let audio = new Audio("sounds/hover.wav")
    audio.play()
}

function playClick(){
    let audio = new Audio("sounds/click.wav")
    audio.play()
}

function openBox(boxClicked){
    switch(boxClicked){
        case "box1":
            document.getElementById("box1").className= "box open"
            break;
        case "box2":
            document.getElementById("box2").className = "box open"
            break;
        case "box3":
            document.getElementById("box3").className = "box open"
            break;
        case "box4":
            document.getElementById("box4").className = "box open"
            break;
    }

}
