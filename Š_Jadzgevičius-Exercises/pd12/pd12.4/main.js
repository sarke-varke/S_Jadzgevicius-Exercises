const atstumasMetrais = 264;
const greitisKmh = 60; 
const greitisMs = greitisKmh * (1000 / 3600);
const laikasS = atstumasMetrais / greitisMs;

console.log("Automobilis tuneli pravažiuos per " + laikasS.toFixed(2) + " s.");
