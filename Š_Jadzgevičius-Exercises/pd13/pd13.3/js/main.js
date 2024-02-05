const x = 2;
const y = -2;
const z = 4;

const skaiciai = [x, y, z];
skaiciai.sort((a, b) => a - b);

console.log("Rezultatas: " + skaiciai.join(','));
