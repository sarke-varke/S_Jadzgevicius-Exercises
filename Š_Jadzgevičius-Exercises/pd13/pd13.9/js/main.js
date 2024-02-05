const a = 10;
const b = 8;
const c = 6;
const d = 4;

const totalLength = a - 2 + c;
const totalWidth = b - 2 + d;

if (totalLength <= a && totalWidth <= b) {
    console.log("Atvirukas tilps į voką.");
} else {
    console.log("Atvirukas netilps į voką.");
}
