const dalyviai = [
    { numeris: 1, laikas: 22 },
    { numeris: 2, laikas: 20 },
    { numeris: 3, laikas: 25 },
    { numeris: 4, laikas: 25 }
];

let greiciausiasLaikas = dalyviai[0].laikas;
let greiciausiasNumeris = 1;

for (let i = 1; i < dalyviai.length; i++) {
    if (dalyviai[i].laikas < greiciausiasLaikas) {
        greiciausiasLaikas = dalyviai[i].laikas;
        greiciausiasNumeris = dalyviai[i].numeris;
    }
}

let sumaLaiko = 0;
for (let i = 0; i < dalyviai.length; i++) {
    sumaLaiko += dalyviai[i].laikas;
}
const vidutinisLaikas = sumaLaiko / dalyviai.length;

const skirtumas = vidutinisLaikas - greiciausiasLaikas;

console.log("Greičiausias bėgikas: " + greiciausiasNumeris + " laikas: " + greiciausiasLaikas + "sek.");
console.log("Jis buvo " + skirtumas + " sekundžių greitesnis už vidutinį.");
