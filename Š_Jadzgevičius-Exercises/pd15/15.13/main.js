function skirtumasTarpMasyvu(masyvas1, masyvas2) {
    return masyvas1.filter(elementas => !masyvas2.includes(elementas));
}

const masyvas1 = [1, 2, 3, 4, 5];
const masyvas2 = [3, 4, 5, 6, 7];
console.log("Skirtumas:", skirtumasTarpMasyvu(masyvas1, masyvas2));
