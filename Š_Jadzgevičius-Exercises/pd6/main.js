let funnyNumber = 12345; // Convert to String
2 let funnyString = '12345'; // Convert to Number
3 let funnyTrue = '1'; // Convert to Boolean
4 let funnyFalse = '0'; // Convert to Boolean
5 let isTrue = false; // Convert to String
6 let isFalse = true; // Convert to Number
7 let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
8 let funnyNull = null; // Convert to String
9 let funnyUndefined = undefined; // Convert to String
10 let isTrue = true; // Convert to String
11 let isFalse = false; // Convert to String
12 let booleanString = 'true'; // Convert to Number
13 let otherBooleanString = 'false'; // Convert to Boolea

let funnyNumberString = funnyNumber.toString();
console.log(funnyNumberString);

let funnyStringNumber = Number(funnyString);
console.log(funnyStringNumber);

let funnyTrueBoolean = Boolean(funnyTrue);
console.log(funnyTrueBoolean);

let funnyFalseBoolean = Boolean(funnyFalse);
console.log(funnyFalseBoolean);

let isTrueStringString = isTrue.toString();
console.log(isTrueStringString);

let isFalseNumber = Number(isFalse);
console.log(isFalseNumber);

let funnyTextNumber = Number(funnyText);
console.log(funnyTextNumber);

let funnyNullString = String(funnyNull);
console.log(funnyNullString);

let funnyUndefinedString = String(funnyUndefined);
console.log(funnyUndefinedString);

let isTrueStringString = isTrueString.toString();
console.log(isTrueStringString);

let isFalseStringString = isFalseString.toString();
console.log(isFalseStringString);

let booleanStringNumber = Number(booleanString);
console.log(booleanStringNumber);

let otherBooleanStringBoolean = Boolean(otherBooleanString);
console.log(otherBooleanStringBoolean);
