const autobusuSk = 2;
const autobusai = [
    { laikas: { val: 1, min: 50 }, keleiviai: 17 },
    { laikas: { val: 2, min: 0 }, keleiviai: 25 }
];

let visoKeleiviu = 0;
autobusai.forEach(autobusas => {
    visoKeleiviu += autobusas.keleiviai;
});

let bendrasLaikasMin = 0;
autobusai.forEach(autobusas => {
    bendrasLaikasMin += autobusas.laikas.val * 60 + autobusas.laikas.min;
});
const vidutinisLaikasMin = Math.round(bendrasLaikasMin / autobusuSk);

let maziauNei10 = 0;
autobusai.forEach(autobusas => {
    if (autobusas.keleiviai < 10) {
        maziauNei10++;
    }
});

console.log("Bendrai pervežtų keleivių skaičius: " + visoKeleiviu);
console.log("Vidutinis sugaištas važiavimo laikas: " + vidutinisLaikasMin + " min.");
console.log("Autobusų skaičius, kurių veža mažiau nei 10 keleivių: " + maziauNei10);
