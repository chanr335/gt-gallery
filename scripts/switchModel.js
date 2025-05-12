import { loadModelByName } from "./models";

let index = 0;

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {switchModel("left")});
rightArrow.addEventListener("click", () => {switchModel("right")});

const models = [ 
   "GC8.glb",
   "GDB07.glb",
   "LEVORG.glb",
   "BRZ13.glb",
   "BRZ22.glb",
];

function switchModel(direction){
    if(direction === "left" && index > 0){
        index -= 1
    }
    else if(direction === "right" && index < 5){
        index += 1
    }
    loadModelByName(models[index])
}
