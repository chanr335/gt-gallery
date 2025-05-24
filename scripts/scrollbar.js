import { state, loadItem, MODELS} from "./switchItem";
import { loadModelByName } from "./three.js";
import { loadInfoByName } from "./info.js";

const scrollbar = document.getElementById("scrollbar");
addEventListener("load", () => {addModelBoxesToDOM(scrollbar, createModelBoxes(MODELS))});

//Separate the creation and appending of the scrollbar's model boxes
function createModelBoxes(models){
    // Map the every model in models to a box according to index
    // Create the box element
    // per iteration, it will return/add the box into the map's return list
    return models.map((_, index) => {
        const image = document.createElement("img"); 
        image.className = "modelBox";
        image.src = `models/thumbnails/${models[index].split(".")[0]}.png`
        // image.innerHTML = models[index].split(".")[0]
        image.addEventListener("click", () => {
            state.modelIndex = index;
            loadItem(models[state.modelIndex], loadModelByName, loadInfoByName);  
        });
        return image
    });
}

function addModelBoxesToDOM(container, modelBoxes) {
    modelBoxes.forEach((image) => {
        container.appendChild(image)
    })
}
