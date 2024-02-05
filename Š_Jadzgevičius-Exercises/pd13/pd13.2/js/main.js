const x = 5;
const y = 10;
const z = -12;

let sandaugosZenklas;

const sandauga = x * y * z;

if (sandauga >= 0) {
    sandaugosZenklas = '+';
} else {
    sandaugosZenklas = '-';
}

console.log("Sandaugos ženklas yra '" + sandaugosZenklas + "'");
