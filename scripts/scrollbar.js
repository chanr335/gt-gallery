import { getModels } from "./switchItem";

const scrollbar = document.getElementById("scrollbar");
addEventListener("load", () => {putOptions()});

function putOptions() {
    const models = getModels();
    const numBoxes = models.length;

    for (let i = 0; i < numBoxes; i++) {
        const box = document.createElement("div"); 
        box.className = "modelBox";
        box.id = `box${i}`
        box.innerHTML = models[i].slice(0, -4)
        scrollbar.appendChild(box);
    }
}
