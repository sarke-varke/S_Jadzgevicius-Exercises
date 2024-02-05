const a = -6;
const b = 0;
const c = 172 + 13;

const diskriminantas = b * b - 4 * a * c;

if (diskriminantas > 0) {
    const x1 = (-b + Math.sqrt(diskriminantas)) / (2 * a);
    const x2 = (-b - Math.sqrt(diskriminantas)) / (2 * a);
    console.log("Taisyklė turi dvi skirtingas šaknis:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
} else if (diskriminantas === 0) {
    const x = -b / (2 * a);
    console.log("Taisyklė turi vieną sprendinį:");
    console.log("x = " + x);
} else {
    console.log("Taisyklė neturi realiųjų sprendinių.");
}
