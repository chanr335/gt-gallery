import { loadModelByName } from "./three.js";
import { loadInfoByName } from "./info.js";

export let state = {modelIndex : 0}

export const MODELS = [ 
    "180SX.glb",
    "ALTEZZA.glb",
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

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex - 1, MODELS.length); 
    loadItem(MODELS[state.modelIndex], loadModelByName, loadInfoByName);
});

rightArrow.addEventListener("click", () => {
    state.modelIndex = emod(state.modelIndex + 1, MODELS.length); 
    loadItem(MODELS[state.modelIndex], loadModelByName, loadInfoByName);
});

function emod(n, d){
    return ((n % d) + d) % d
}

export function loadItem(itemName, loadModelFunction, loadInfoFunction){
    loadModelFunction(itemName);
    loadInfoFunction(itemName);
}
