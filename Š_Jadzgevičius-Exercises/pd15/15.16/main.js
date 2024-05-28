function atsitiktinisElementas(masyvas) {
    return masyvas[Math.floor(Math.random() * masyvas.length)];
}

const masyvas = [1, 2, 3, 4, 5];
console.log("Atsitiktinis elementas:", atsitiktinisElementas(masyvas));
