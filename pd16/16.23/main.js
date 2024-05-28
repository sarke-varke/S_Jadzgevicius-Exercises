function sudeti(a, b) {
    return a + b;
}

function atimti(a, b) {
    return a - b;
}

function dauginti(a, b) {
    return a * b;
}

function dalinti(a, b) {
    if (b === 0) {
        return "Dalyba iš nulio negalima";
    } else {
        return a / b;
    }
}

let skaicius1 = 10;
let skaicius2 = 5;

console.log(sudeti(skaicius1, skaicius2));
console.log(atimti(skaicius1, skaicius2));
console.log(dauginti(skaicius1, skaicius2));
console.log(dalinti(skaicius1, skaicius2));

