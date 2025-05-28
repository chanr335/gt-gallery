import { MODELS, MODEL_MAP } from "./constants.js";
import { setupOptions } from "./options.js";
import { addModelBoxesToDOM, createModelBoxes } from "./scrollbar.js";
import { animate } from "./three.js"
import { loadModelByName } from "./three.js";

export let state = {modelIndex : 0}
const scrollbar = document.getElementById("scrollbarSection");
const info = document.getElementById("paragraph");

addEventListener("DOMContentLoaded", () => {
    addModelBoxesToDOM(scrollbar, createModelBoxes(MODELS))
    setupOptions();
    loadModelByName(MODELS[state.modelIndex]);
    animate();
    info.innerHTML = MODEL_MAP[MODELS[state.modelIndex]];
});

