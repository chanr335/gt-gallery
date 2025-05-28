import { loadItem} from "./switchItem";
import { state } from "./index.js";
import { loadModelByName } from "./three.js";

//Separate the creation and appending of the scrollbar's model boxes
export function createModelBoxes(models){
    // Map the every model in models to a box according to index
    // Create the box element
    // per iteration, it will return/add the box into the map's return list
    return models.map((_, index) => {
        const box = document.createElement("div");
        const image = document.createElement("img"); 
        box.className = "modelBox";
        box.appendChild(image);
        image.src = `models/thumbnails/${models[index].split(".")[0]}.webp`
        image.addEventListener("click", () => {
            state.modelIndex = index;
            loadItem(models[state.modelIndex], loadModelByName);  
        });
        return box 
    });
}

export function addModelBoxesToDOM(container, modelBoxes) {
    modelBoxes.forEach((image) => {
        container.appendChild(image)
    })
}
