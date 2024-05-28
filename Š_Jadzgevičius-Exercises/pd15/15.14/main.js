function sujungtiIrPašalintiPasikartojančius(masyvas1, masyvas2) {
    return Array.from(new Set([...masyvas1, ...masyvas2]));
}

const masyvas1 = [1, 2, 3];
const masyvas2 = [3, 4, 5];
console.log("Sujungtas ir pašalinti pasikartojantys:", sujungtiIrPašalintiPasikartojančius(masyvas1, masyvas2));
