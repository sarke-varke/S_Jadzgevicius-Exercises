function skaiciuotiPasikartojimus(masyvas, elementas) {
    let pasikartojimai = 0;
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] === elementas) {
            pasikartojimai++;
        }
    }
    return pasikartojimai;
}

const manoMasyvas = [1, 2, 3, 4, 5, 2, 3, 2, 2];
const elementas = 2;
const pasikartojimuSkaicius = skaiciuotiPasikartojimus(manoMasyvas, elementas);
console.log(`Elementas ${elementas} pasikartoja ${pasikartoj
