const options = document.getElementById("options");

const scrollbarOption = document.getElementById("scrollbarOption");
const scrollbar = document.getElementById("scrollbarSection");

const radioOption = document.getElementById("radioOption");
const radio = document.getElementById("radioSection")

const infoOption = document.getElementById("infoOption");
const info = document.getElementById("infoSection")

let optionsOn = false;
let scrollbarOn = false;
let radioOn = false;
let infoOn = false;

options.addEventListener("click", () => {
    optionsOn = !optionsOn;
    if(optionsOn){
        options.classList.add("open");
        scrollbarOption.classList.remove("hidden")
        radioOption.classList.remove("hidden")
        infoOption.classList.remove("hidden")
    } else{
        options.classList.remove("open");
        scrollbarOption.classList.add("hidden")
        radioOption.classList.add("hidden")
        infoOption.classList.add("hidden")
    }
});

scrollbarOption.addEventListener("click", () => {
    scrollbarOn = !scrollbarOn
    toggleOn(scrollbar, scrollbarOn);
});

radioOption.addEventListener("click", () => {
    radioOn = !radioOn
    toggleOn(radio, radioOn);
});

infoOption.addEventListener("click", () => {
    infoOn = !infoOn
    toggleOn(info, infoOn);
});

function toggleOn(object, objectBool){
    if(objectBool){
        object.classList.remove("hidden")
    }
    else{
        object.classList.add("hidden")
    }
}
