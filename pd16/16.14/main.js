function sukurtiMatrica(eilutes, stulpeliai) {
    const matrica = [];
    for (let i = 0; i < eilutes; i++) {
        const eilute = [];
        for (let j = 0; j < stulpeliai; j++) {
            eilute.push(0);
        }
        matrica.push(eilute);
    }
    return matrica;
}
