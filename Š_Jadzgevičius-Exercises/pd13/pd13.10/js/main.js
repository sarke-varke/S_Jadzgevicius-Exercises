const a = 15;
const b = 10;
const c = 20;

let sum;

if (a >= b && a >= c) {
    sum = b + c;
} else if (b >= a && b >= c) {
    sum = a + c;
} else {
    sum = a + b;
}

console.log("Dviejų didžiausių skaičių suma yra:", sum);
