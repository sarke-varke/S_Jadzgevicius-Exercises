const tėvasPajamos = 2000;
const motinaPajamos = 1800;
const šeimosNariai = 2;

const paskolosSuma = 3000;

if (tėvasPajamos + motinaPajamos > paskolosSuma && šeimosNariai > 1) {
    console.log("Bankas suteiks paskolą.");
} else {
    console.log("Bankas paskolos nesuteiks.");
}
