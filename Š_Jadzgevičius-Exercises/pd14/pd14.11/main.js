let a = 36;

let dalikliai = [];
let dalikliuSuma = 0;
let lyginiuDalikliuSuma = 0;

for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        dalikliai.push(i);
        dalikliuSuma += i;
        if (i % 2 === 0) {
            lyginiuDalikliuSuma += i;
        }
    }
}

console.log("Skaičiaus", a, "dalikliai:", dalikliai);
console.log("Daliklių suma:", dalikliuSuma);
console.log("Lyginių daliklių suma:", lyginiuDalikliuSuma);
