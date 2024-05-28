let n = 3;
let m1 = 18;
let m2 = 10;
let m3 = 10;

let totalMinutes = m1 + m2 + m3;
let averageMinutesPerPatient = totalMinutes / n;

let k = 0;
if (m1 > 20) k++;
if (m2 > 20) k++;
if (m3 > 20) k++;

console.log("m =", averageMinutesPerPatient.toFixed(1), ", k =", k);
