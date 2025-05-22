import { loadModelByName } from "./three.js";

let index = 0;

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {switchItem(-1, models, loadModelByName)});
rightArrow.addEventListener("click", () => {switchItem(1, models, loadModelByName)});

const models = [ 
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

function switchItem(direction, list, loadFunction){
    loadFunction(list[emod(index + direction, list.length)]);
    index = index + direction;
}

export function getModels(){
    return models
}
