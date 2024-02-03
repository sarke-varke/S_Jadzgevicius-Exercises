const eglutes = [
    { numeris: 1, aukstis: 167 },
    { numeris: 2, aukstis: 134 },
    { numeris: 3, aukstis: 145 },
    { numeris: 4, aukstis: 156 },
    { numeris: 5, aukstis: 155 },
    { numeris: 6, aukstis: 176 }
];

let sumaAuksciu = 0;
for (let i = 0; i < eglutes.length; i++) {
    sumaAuksciu += eglutes[i].aukstis;
}
const vidurkis = sumaAuksciu / eglutes.length;

console.log("Eglutės aukščio vidurkis: " + vidurkis + "cm.");
