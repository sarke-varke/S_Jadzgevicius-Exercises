let numberX = 10;
let numberY = 20;
let result = numberX + numberY; // 10 + 20 = 30
console.log(result); // Rezultatas: 30

result += 10; // 30 + 10 = 40
console.log(result); // Rezultatas: 40

result -= 10; // 40 - 10 = 30
console.log(result); // Rezultatas: 30

result *= 10; // 30 * 10 = 300
console.log(result); // Rezultatas: 300

result /= 10; // 300 / 10 = 30
console.log(result); // Rezultatas: 30

result %= 10; // 30 % 10 = 0
console.log(result); // Rezultatas: 0

result **= 10; // 0 pakelta į 10 laipsnį = 0
console.log(result); // Rezultatas: 0

result += 10 + numberY; // 0 + 10 + 20 = 30
console.log(result); // Rezultatas: 30

result *= numberX - numberY; // 30 * (10 - 20) = 30 * (-10) = -300
console.log(result); // Rezultatas: -300
