for (let num = 1; num <= 300; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 5) {
        console.log(num);
    }
}
