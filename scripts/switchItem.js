import { loadModelByName } from "./three.js";

export let state = {modelIndex : 0}

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex - 1, models.length); 
    loadItem(models[state.modelIndex], loadModelByName)
});

rightArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex + 1, models.length); 
    loadItem(models[state.modelIndex], loadModelByName)
});

export const MODELS = [ 
    "180SX.glb",
    "ALTEZZA.glb",
    "BM9.glb",
    "BRZ13.glb",
    "BRZ22.glb",
    "EVO9.glb",
    "GC8.glb",
    "LEVORG.glb",
    "NSX.glb",
    "R33GTR.glb",
    "R34GTR.glb",
    "RX7FD.glb",
    "S2K.glb",
    "S15.glb",
    "STI07.glb",
    "STI08.glb",
];

function emod(n, d){
    return ((n % d) + d) % d
}

export function loadItem(itemName, loadFunction){
    loadFunction(itemName);
}

