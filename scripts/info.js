const infoSection = document.getElementById("infoSection");
let currentModel = "180SX.glb";

export function loadInfoByName(modelName){
    if(modelName != currentModel){
        while(infoSection.lastElementChild){
            infoSection.removeChild(infoSection.lastElementChild);
        }
    }
    currentModel = modelName
    modelMap[modelName].forEach((words, index) =>{
        const line = document.createElement("p");
        line.className = "info";
        line.textContent = words
        infoSection.appendChild(line);
    });
}

const _STI07 = [
"The 2006–2007 Subaru Impreza WRX STI, nicknamed the \"Hawkeye\" for its sharp, aggressive headlight design, represents the final and arguably most refined version of the GD-chassis STI. With a 2.5-liter turbocharged flat-four EJ257 engine producing around 293 horsepower and 290 lb-ft of torque, the Hawkeye delivered rally-bred performance in a road-legal package.",
"Key to its appeal is Subaru’s Symmetrical All-Wheel Drive system, paired with a 6-speed close-ratio manual transmission and Driver Controlled Center Differential (DCCD), offering exceptional traction and handling. Suspension tuning was firm and purposeful, and the car came equipped with Brembo brakes and 17-inch BBS wheels—gold on some models—that reinforced its motorsport roots.",
"Inside, the focus remained on performance with minimal distractions: bolstered seats, a center-mounted tachometer, and signature blue Alcantara trim. The overall experience was raw and analog, giving drivers a visceral connection often lacking in more modern cars.",
"The 2006–2007 models are especially beloved among enthusiasts for their blend of mechanical simplicity, daily usability, and tuning potential. As the last STI before Subaru switched to the GR hatchback chassis in 2008, the Hawkeye is often regarded as the final chapter of Subaru’s classic rally-inspired era.",
"Today, the Hawkeye STI enjoys modern classic status—valued for its iconic design, proven performance, and its place in Subaru’s performance legacy.",
]

const _180SX = [
"The Nissan 180SX Type X represents the pinnacle of the S13 lineup, built for the Japanese market in the final years of the model’s production. It is powered by the SR20DET, a turbocharged 2.0-liter inline-four producing around 205 horsepower and 203 lb-ft of torque, paired with a five-speed manual transmission that delivers sharp response and strong mid-range performance. The rear-wheel-drive layout combined with a lightweight chassis makes it a favorite among driving purists and tuners alike.",
"The Type X features unique factory upgrades including a revised aero kit, exclusive tail lights, and a larger rear spoiler, enhancing both style and high-speed stability. Its suspension setup uses a strut front and multilink rear configuration that provides precise handling while maintaining everyday drivability. With a curb weight just over 1,200 kilograms and exceptional aftermarket support, the 180SX Type X remains a highly sought-after platform for drifting and street builds, as well as a revered symbol of 1990s Japanese performance engineering."
]

const _ALTEZZA = [
"The Toyota Altezza, known globally as the first-generation Lexus IS200/IS300, was engineered as a compact sports sedan that emphasized balanced performance and rear-wheel-drive dynamics. In its Japanese market form, the Altezza RS200 was powered by the naturally aspirated 3S-GE BEAMS engine—developed in collaboration with Yamaha—producing up to 210 horsepower at 7,600 rpm with a high-revving character and dual VVT-i variable valve timing. It came equipped with a close-ratio six-speed manual transmission and a Torsen limited-slip differential, offering precise power delivery and improved cornering traction.",
"The Altezza’s chassis was built with a double-wishbone suspension setup front and rear, delivering sharp handling and responsive steering. Its 50:50 weight distribution, rigid body structure, and advanced aerodynamics made it a standout among compact sedans of its era. With a curb weight under 1,400 kilograms and optional digital instrumentation, the Altezza was a blend of analog driving feel and forward-thinking design, earning its reputation as one of Toyota’s most driver-focused sedans."
]

const _BRZ13 = [
"The first-generation Subaru BRZ, launched in 2013, was engineered as a pure driver's car built on a bespoke rear-wheel-drive platform co-developed with Toyota. Under the hood sat a naturally aspirated 2.0-liter FA20 flat-four engine producing 200 horsepower at 7,000 rpm and 151 lb-ft of torque. With its low center of gravity and lightweight chassis—just under 2,800 pounds—the BRZ delivered exceptional balance and steering response. The chassis featured MacPherson struts up front and a multi-link rear suspension tuned for crisp, predictable dynamics. A close-ratio six-speed manual transmission and a standard Torsen limited-slip differential maximized engagement, while its simple, analog-focused cockpit reflected the car's minimalist, performance-first philosophy."
]

const _BRZ22 = [
"The second-generation BRZ debuted in 2022 with significant upgrades while preserving the lightweight, rear-wheel-drive ethos. Power came from a new 2.4-liter FA24D naturally aspirated flat-four, producing 228 horsepower and 184 lb-ft of torque—addressing the torque curve shortcomings of its predecessor. The chassis retained its compact footprint and driver-centric layout, but increased torsional rigidity by 50 percent, improving cornering precision and high-speed stability. Weight remained modest at around 2,850 pounds, aided by aluminum body panels and a lower-mounted engine. Suspension tuning was refined for improved compliance without sacrificing agility, and the revised Torsen limited-slip differential ensured confident power delivery during spirited driving. The 2022 BRZ blends modern refinement with the raw engagement that defined the original."
]

const _EVO9 = [
"The 2006 Mitsubishi Lancer Evolution IX MR represented the peak refinement of the CT9A chassis before the Evo X transition. Powered by the 4G63 turbocharged inline-four, the MR variant featured MIVEC variable valve timing and produced 286 horsepower and 289 lb-ft of torque with razor-sharp throttle response. A six-speed manual transmission paired with Mitsubishi’s advanced Active Center Differential and Super AYC system provided superior torque distribution between all four wheels. The MR trim included lightweight BBS forged wheels, Bilstein dampers, and additional chassis bracing to enhance rigidity and handling precision. With a curb weight just over 3,100 pounds and a focus on motorsport-grade performance, the Evo IX MR combined aggressive turbo power, intelligent all-wheel-drive control, and track-tuned dynamics into one of the most revered AWD sedans of its era."
]

const _GC8 = [
"The GC8-generation WRX STI marked Subaru’s rally-bred rise in the 1990s, blending all-wheel-drive traction with turbocharged performance in a compact sedan. Equipped with a 2.0-liter EJ20 turbocharged flat-four, early STIs produced up to 276 horsepower, paired with a close-ratio five-speed manual transmission and a driver-controlled center differential. The chassis featured inverted struts, stiffened suspension components, and upgraded brakes for aggressive cornering and stage-ready control. Weighing approximately 2,800 pounds and enhanced by limited-slip differentials front and rear, the GC8 delivered raw, mechanical grip with minimal electronics. Its stripped-down interior and functional aero reflected its WRC pedigree, making it a cult classic among performance purists.",
]

const _LEVORG = [
"The modern Subaru Levorg VN5 reimagines the sport wagon formula with a focus on performance and practicality. Powered by a 1.8-liter turbocharged CB18 flat-four producing 174 horsepower and 221 lb-ft of torque, it’s paired to Subaru’s symmetrical all-wheel drive and a Lineartronic CVT tuned for smooth yet responsive acceleration. Built on the Subaru Global Platform, the VN5 boasts improved torsional rigidity and refined ride quality, aided by adaptive dampers and electronic driver aids like SI-Drive. Interior tech includes a vertically mounted 11.6-inch display and EyeSight driver assistance, while exterior lines reflect both aerodynamic function and touring intent. The Levorg blends daily usability with genuine enthusiast engagement in a segment rarely known for either.",
]

const _NSX = [
"The first-generation Honda NSX, introduced in 1990, was a paradigm shift for supercars, delivering mid-engine performance with unmatched reliability and refinement. Powered by a naturally aspirated 3.0-liter C30A V6 producing 270 horsepower, the NA1 featured VTEC variable valve timing and a lightweight all-aluminum monocoque chassis—the first of its kind in production. Tipping the scales at just over 3,000 pounds, the NSX prioritized balance with double-wishbone suspension at all four corners and near-perfect weight distribution. A five-speed manual gearbox and razor-sharp steering offered visceral feedback, while the cabin layout emphasized forward visibility and comfort. Tuned with input from Ayrton Senna during development, the NSX redefined what a sports car could be—precision-engineered, livable, and uncompromisingly fast."
]

const _R33GTR = [
"The R33 GT-R continued the legacy of its predecessor with evolutionary upgrades that prioritized stability and refinement without compromising its performance edge. Beneath the hood, the twin-turbocharged RB26DETT inline-six remained the centerpiece, delivering 276 horsepower with a broad torque curve and near-bulletproof internals. The R33 introduced the sophisticated ATTESA E-TS Pro all-wheel-drive system with active torque split and an advanced Active LSD, giving the car uncanny composure in variable traction scenarios. Chassis rigidity improved significantly, and the longer wheelbase added high-speed stability while retaining sharp handling. With Super-HICAS four-wheel steering and Brembo brakes as standard, the R33 gained a reputation as the most mature GT-R of the 90s—a grand tourer with deep motorsport DNA."
]

const _R34GTR = [
"Regarded as the pinnacle of the Skyline GT-R line, the R34 refined every system for sharper feedback and modernized control. It retained the iconic RB26DETT twin-turbo inline-six, mated to a close-ratio Getrag six-speed manual and enhanced by a revised ATTESA E-TS Pro AWD system. The R34 featured a stiffer chassis, shorter wheelbase, and improved aerodynamics for track-ready responsiveness. Electronically, it stood ahead of its time with the multifunction display (MFD) providing live engine and drivetrain telemetry. With increased structural rigidity and sharper suspension geometry, it delivered precise handling with unrelenting grip. Balanced, brutal, and technologically advanced, the R34 became a benchmark for performance tuning and a global icon of Japanese engineering excellence."
]

const _RX7FD = [
"The third-generation RX-7, known as the FD3S, epitomized lightweight rotary performance. Its 13B-REW twin-rotor engine featured sequential turbocharging to deliver a smooth yet forceful powerband, producing 276 horsepower in its later Japanese market trims. A near-perfect 50:50 weight distribution, low center of gravity, and sub-2,800-pound curb weight made the FD incredibly agile. The double-wishbone suspension on all four corners and minimal driver aids emphasized feel over forgiveness. With a focus on purity, the RX-7 employed aluminum components throughout its construction and a driver-centric cockpit that demanded skill and rewarded precision. Its timeless design and visceral dynamics earned it a place among the most beloved drivers’ cars ever built."
]

const _S2K = [
"The Honda S2000 is an iconic roadster that perfectly blends high-revving performance with precise handling. It features a naturally aspirated four-cylinder engine known for its incredible redline and responsive throttle. Lightweight and balanced, the S2000 offers a pure driving experience that enthusiasts still admire today.",
"With its sleek, timeless design and driver-focused cockpit, the S2000 remains a favorite for those seeking a fun and engaging convertible. Its reputation for reliability and aftermarket support make it a versatile choice for both daily driving and spirited weekend runs.",
]

const _S15 = [
"The Nissan Silvia S15 is a legendary sports coupe that embodies the spirit of Japanese performance tuning. Known for its sharp handling and turbocharged SR20DET engine, the S15 strikes a perfect balance between power and agility. It gained fame both on the street and in motorsports, especially in drifting circles.",
"The car's aggressive styling and lightweight chassis make it a sought-after platform for modifications. Whether stock or heavily tuned, the S15 delivers a thrilling ride with a strong enthusiast community backing it, ensuring its legacy endures.",
]

const _STI08 = [
"The 2008 to 2014 Subaru WRX STI hatchback is a versatile performance car that combines rally heritage with everyday practicality. Its turbocharged boxer engine and symmetrical all-wheel-drive system provide excellent grip and punchy acceleration. The hatchback body style adds extra cargo space without compromising the sporty feel.",
"Inside and out, this STI is built for driving enthusiasts who want a car that can handle both twisty roads and daily errands. Its aggressive styling and strong aftermarket presence make it a favorite among tuners and rally fans alike.",
]

const modelMap = {
    "180SX.glb":_180SX,
    "ALTEZZA.glb":_ALTEZZA,
    "BRZ13.glb":_BRZ13,
    "BRZ22.glb":_BRZ22,
    "EVO9.glb":_EVO9,
    "GC8.glb":_GC8,
    "LEVORG.glb":_LEVORG,
    "NSX.glb":_NSX,
    "R33GTR.glb":_R33GTR,
    "R34GTR.glb":_R34GTR,
    "RX7FD.glb":_RX7FD,
    "S2K.glb":_S2K,
    "S15.glb":_S15,
    "STI07.glb":_STI07,
    "STI08.glb":_STI08,
} 

