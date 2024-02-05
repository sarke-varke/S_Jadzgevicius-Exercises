const PI = Math.PI;
const apskritimoSpindulys = 5; // r
const kvadratoKrastine = 6; // a
const staciakampioIlgis = 8; // b
const staciakampioPlotis = 4; // c

const apskritimoPlotas = PI * apskritimoSpindulys ** 2;
const kvadratoPlotas = kvadratoKrastine ** 2;
const staciakampioPlotas = staciakampioIlgis * staciakampioPlotis;

let didziausiasPlotas = apskritimoPlotas;
let didziausiaFigura = 'apskritimas';

if (kvadratoPlotas > didziausiasPlotas) {
    didziausiasPlotas = kvadratoPlotas;
    didziausiaFigura = 'kvadratas';
}

if (staciakampioPlotas > didziausiasPlotas) {
    didziausiasPlotas = staciakampioPlotas;
    didziausiaFigura = 'stačiakampis';
}

console.log(`Apskritimo plotas: ${apskritimoPlotas}`);
console.log(`Kvadrato plotas: ${kvadratoPlotas}`);
console.log(`Stačiakampio plotas: ${staciakampioPlotas}`);
console.log(`Didžiausia figura yra ${didziausiaFigura} su plotu ${didziausiasPlotas}`);
