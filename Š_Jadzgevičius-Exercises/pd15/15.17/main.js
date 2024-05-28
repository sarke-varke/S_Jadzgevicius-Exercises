function sukurtiMasyva(x, y) {
    const masyvas = [];
    for (let i = x; i <= y; i++) {
        masyvas.push(i);
    }
    return masyvas;
}

const x = 3;
const y = 8;
console.log("Sukurtas masyvas:", sukurtiMasyva(x, y));
