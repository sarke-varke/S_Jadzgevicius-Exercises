function trečiasMažiausias(masyvas) {
    const unikalūs = [...new Set(masyvas)];
    const surikiuoti = unikalūs.sort((a, b) => a - b);
    return surikiuoti[2];
}

const masyvas = [5, 2, 8, 1, 4, 6, 3];
console.log("Trečias mažiausias:", trečiasMažiausias(masyvas));
