let paskaitosPerSavaite = {
    pirmadienis: 5,
    antradienis: 6,
    treciadienis: 4,
    ketvirtadienis: 5,
    penktadienis: 4
};

const paskaitosTrukme = 45;

let visoPaskaitu = 0;

for (let diena in paskaitosPerSavaite) {
    visoPaskaitu += paskaitosPerSavaite[diena];
}

let visoMinuciu = visoPaskaitu * paskaitosTrukme;

console.log("Paskaitų skaičius per savaitę: " + visoPaskaitu);
console.log("Tai sudaro " + visoMinuciu + " minučių.");
