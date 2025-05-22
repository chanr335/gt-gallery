import { loadModelByName } from "./three.js";

let index = 0;

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {switchItem(-1, models, loadModelByName)});
rightArrow.addEventListener("click", () => {switchItem(1, models, loadModelByName)});

const models = [ 
    "GC8.glb",
    "GDB07.glb",
    "GR08.glb",
    "BRZ13.glb",
    "BRZ22.glb",
    "BM9.glb",
    "LEVORG.glb",
];

function emod(n, d){
    return ((n % d) + d) % d
}

function switchItem(direction, list, loadFunction){
    loadFunction(list[emod(index + direction, list.length)]);
    index = index + direction;
}
