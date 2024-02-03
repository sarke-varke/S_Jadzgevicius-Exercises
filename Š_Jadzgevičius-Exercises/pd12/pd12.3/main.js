const plytosIlgis = "0.20"; //metrai
const plytosAukstis = "0.10"; //metrai
const sienosIlgis = "4"; //metrai
const sienosAukstis = "3"; //metrai
const plytosKaina = "0.5"; //eurai

const sienosPlotas = sienosIlgis * sienosAukstis;

const plytuKiekis = Math.ceil((sienosPlotas * 10) / (plytosIlgis * plytosAukstis));

const plytuKaina = (plytuKiekis * plytosKaina).toFixed(2);

console.log("Plytų kiekis: " + plytuKiekis + ". Plytos kainuos " + plytuKaina + " Eur.");
