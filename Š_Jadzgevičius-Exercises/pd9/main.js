let numberX = 10;
let numberY = '20';

console.log(numberX == numberY); // false (lygybės operatorius)
console.log(numberX === numberY); // false (griežtas lygybės operatorius)
console.log(numberX != numberY); // true (nelygybės operatorius)
console.log(numberX !== numberY); // true (griežtas nelygybės operatorius)
console.log(numberX > numberY); // false (daugiau nei operatorius)
console.log(numberX >= numberY); // false (daugiau arba lygu operatorius)
console.log(numberX < numberY); // true (mažiau nei operatorius)
console.log(numberX <= numberY); // true (mažiau arba lygu operatorius)
console.log((numberX != numberY) ? 'Tai teisinga' : 'Tai klaidinga'); // Tai teisinga (ternary operatorius)
