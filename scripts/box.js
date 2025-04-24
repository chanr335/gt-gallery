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
    const box = document.getElementById(boxClicked)
    if(box.className === "box"){
        box.className = "box open";
        const tab = document.createElement("p");
        tab.className = "tab";
        tab.id = boxClicked + "tab"
        box.appendChild(tab);
    }
    else if(box.className === "box open"){
        box.className = "box";
        const tabId = document.getElementById(boxClicked + "tab");
        box.removeChild(tabId);
    }
}
