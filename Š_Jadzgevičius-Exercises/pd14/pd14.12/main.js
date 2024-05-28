let a = 29;

let arPirminis = true;

if (a <= 1) {
    arPirminis = false;
} else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            arPirminis = false;
            break;
        }
    }
}

if (arPirminis) {
    console.log(a + " yra pirminis skaičius.");
} else {
    console.log(a + " nėra pirminis skaičius.");
}
