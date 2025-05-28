const optionSection = document.getElementById("optionSection");

const scrollbarOption = document.getElementById("scrollbarOption");
const scrollbar = document.getElementById("scrollbarSection");
const optionLight1 = document.getElementById("optionLight1");

const radioOption = document.getElementById("radioOption");
const radio = document.getElementById("radioSection")
const optionLight2 = document.getElementById("optionLight2");

const infoOption = document.getElementById("infoOption");
const info = document.getElementById("infoSection")
const optionLight3 = document.getElementById("optionLight3");


export function setupOptions(){
    optionSection.addEventListener("click", (e) => {
        if(e.target === optionSection){ //click exactly on options
            optionSection.classList.toggle("open");
            scrollbarOption.classList.toggle("hidden")
            optionLight1.classList.toggle("hidden");

            radioOption.classList.toggle("hidden")
            optionLight2.classList.toggle("hidden");

            infoOption.classList.toggle("hidden")
            optionLight3.classList.toggle("hidden");
        }
    });

    scrollbarOption.addEventListener("click", () => {
        scrollbar.classList.toggle("hidden");
        optionLight1.classList.toggle("on");
    });

    radioOption.addEventListener("click", () => {
        radio.classList.toggle("hidden");
        optionLight2.classList.toggle("on");
    });

    infoOption.addEventListener("click", () => {
        info.classList.toggle("hidden");
        optionLight3.classList.toggle("on");
    });
}
