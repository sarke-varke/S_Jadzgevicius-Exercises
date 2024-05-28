function kunoMasesIndeksas(svoris, ugis) {
    return svoris / (ugis * ugis);
}

let svoris = 70; // kg
let ugis = 1.75; // m

let kmi = kunoMasesIndeksas(svoris, ugis);
console.log("Kūno masės indeksas:", kmi);
