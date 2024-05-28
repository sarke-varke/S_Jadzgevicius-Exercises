function rastiKeliamuosiusMetus(nuo, iki) {
    for (let metai = nuo; metai <= iki; metai++) {
        if ((metai % 4 === 0 && metai % 100 !== 0) || (metai % 400 === 0)) {
            console.log(metai);
        }
    }
}

const nuo = 1997;
const iki = 2018;
rastiKeliamuosiusMetus(nuo, iki);
