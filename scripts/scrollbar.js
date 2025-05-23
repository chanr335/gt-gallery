import { state, loadItem, MODELS} from "./switchItem";
import { loadModelByName } from "./three.js";

const scrollbar = document.getElementById("scrollbar");
addEventListener("load", () => {addModelBoxesToDOM(scrollbar, createModelBoxes(MODELS))});

//Separate the creation and appending of the scrollbar's model boxes
function createModelBoxes(models){
    // Map the every model in models to a box according to index
    // Create the box element
    // per iteration, it will return/add the box into the map's return list
    return models.map((_, index) => {
        const box = document.createElement("div"); 
        box.className = "modelBox";
        box.id = `box${index}`
        box.innerHTML = models[index].split(".")[0]
        box.addEventListener("click", () => {
            state.modelIndex = index;
            loadItem(models[state.modelIndex], loadModelByName);  
        });
        return box
    });
}

function addModelBoxesToDOM(container, modelBoxes) {
    modelBoxes.forEach((box) => {
        container.appendChild(box)
    })
}
