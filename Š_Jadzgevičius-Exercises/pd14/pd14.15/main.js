let s1 = 222;
let s2 = 245;

for (let i = s1; i <= s2; i++) {
    if (i % 3 === 0) {
        let digits = i.toString().split('').map(Number);
        if (digits.some(digit => digit !== 0 && digit % 3 === 0)) {
            console.log(i);
        }
    }
}
