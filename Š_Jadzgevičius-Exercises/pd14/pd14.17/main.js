function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let count = 0;
let number = 1;

while (count < 10) {
    let square = number * number;
    if (isPalindrome(square)) {
        console.log(number);
        count++;
    }
    number++;
}
