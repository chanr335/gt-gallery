const infoSection = document.getElementById("infoSection");
let currentModel = "";
export function loadInfoByName(modelName){
    if(modelName != currentModel){
        while(infoSection.lastElementChild){
            infoSection.removeChild(infoSection.lastElementChild);
        }
    }
    
    currentModel = modelName
    modelMap[modelName].forEach((words, index) =>{
        const line = document.createElement("p");
        line.class = "blurb"
        line.innerHTML = words
        infoSection.appendChild(line);

        const image = document.createElement("img");
        const imagePath = `images/${modelName.split(".")[0]}_${index}.jpeg`
        image.src = imagePath
        image.classList.add("carImage");
        image.onload = () => {
            infoSection.insertBefore(image, line.nextSibling);
        };
    });
}

const _STI07 = [
"The 2006–2007 Subaru Impreza WRX STI, nicknamed the \"Hawkeye\" for its sharp, aggressive headlight design, represents the final and arguably most refined version of the GD-chassis STI. With a 2.5-liter turbocharged flat-four EJ257 engine producing around 293 horsepower and 290 lb-ft of torque, the Hawkeye delivered rally-bred performance in a road-legal package.",
"Key to its appeal is Subaru’s Symmetrical All-Wheel Drive system, paired with a 6-speed close-ratio manual transmission and Driver Controlled Center Differential (DCCD), offering exceptional traction and handling. Suspension tuning was firm and purposeful, and the car came equipped with Brembo brakes and 17-inch BBS wheels—gold on some models—that reinforced its motorsport roots.",
"Inside, the focus remained on performance with minimal distractions: bolstered seats, a center-mounted tachometer, and signature blue Alcantara trim. The overall experience was raw and analog, giving drivers a visceral connection often lacking in more modern cars.",
"The 2006–2007 models are especially beloved among enthusiasts for their blend of mechanical simplicity, daily usability, and tuning potential. As the last STI before Subaru switched to the GR hatchback chassis in 2008, the Hawkeye is often regarded as the final chapter of Subaru’s classic rally-inspired era.",
"Today, the Hawkeye STI enjoys modern classic status—valued for its iconic design, proven performance, and its place in Subaru’s performance legacy.",
]

const modelMap = {
    // "180SX.glb":_180SX,
    // "ALTEZZA.glb":_ALTEZZA,
    // "BM9.glb":_BM9,
    // "BRZ13.glb":_BRZ13,
    // "BRZ22.glb":_BRZ22,
    // "EVO9.glb":_EVO9,
    // "GC8.glb":_GC8,
    // "LEVORG.glb":_LEVORG,
    // "NSX.glb":_NSX,
    // "R33GTR.glb":_R33GTR,
    // "R34GTR.glb":_R34GTR,
    // "RX7FD.glb":_RX7FD,
    // "S2K.glb":_S2K,
    // "S15.glb":_S15,
    "STI07.glb":_STI07,
    // "STI08.glb":_STI08,
} 
