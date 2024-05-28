let a = 96;
let z = 103;
let totalPlates = 0;

for (let i = a; i <= z; i++) {
    let numLength = i.toString().length;
    totalPlates += numLength;
}

console.log("Plokščių skaičius:", totalPlates);
