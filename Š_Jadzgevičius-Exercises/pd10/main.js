let isTrue = true;
let isFalse = false;

console.log(isTrue && isTrue); // true (AND operatorius)
console.log(isTrue && isFalse); // false (AND operatorius)
console.log(isFalse && isFalse); // false (AND operatorius)
console.log(isTrue || isTrue); // true (OR operatorius)
console.log(isTrue || isFalse); // true (OR operatorius)
console.log(isFalse || isFalse); // false (OR operatorius)
console.log(!isTrue); // false (NOT operatorius)
console.log(!isFalse); // true (NOT operatorius)
console.log(!isFalse && isTrue); // true (Kombinuotas loginis operatorius)
console.log(!isFalse && !isTrue); // false (Kombinuotas loginis operatorius)
console.log(!isFalse || isTrue); // true (Kombinuotas loginis operatorius)
