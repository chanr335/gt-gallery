import { loadModelByName } from "./three.js";
import { MODELS, MODEL_MAP } from "./constants.js";
import { state } from "./index.js";

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex - 1, MODELS.length); 
    loadItem(MODELS[state.modelIndex], loadModelByName);
});

rightArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex + 1, MODELS.length); 
    loadItem(MODELS[state.modelIndex], loadModelByName);
});

function emod(n, d){
    return ((n % d) + d) % d
}

const info = document.getElementById("paragraph");
export function loadItem(itemName, loadModelFunction){
    loadModelFunction(itemName);
    info.innerHTML = MODEL_MAP[itemName];
}
