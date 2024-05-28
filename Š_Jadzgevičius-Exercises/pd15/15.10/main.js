function pasalintiPasikartojancius(masyvas) {
    const unikaliosReiksmes = [...new Set(masyvas)];
    return unikaliosReiksmes;
}

const pradinisMasyvas = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const bePasikartojimu = pasalintiPasikartojancius(pradinisMasyvas);
console.log("Masyvas be pasikartojimų:", bePasikartojimu);
