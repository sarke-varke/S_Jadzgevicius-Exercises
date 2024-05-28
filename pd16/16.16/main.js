function arTobulasis(skaicius) {
    let suma = 0;
    for (let i = 1; i < skaicius; i++) {
        if (skaicius % i === 0) {
            suma += i;
        }
    }
    return suma === skaicius;
}
