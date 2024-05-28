function ilgiausiasSaliesPavadinimas(sarasas) {
    return sarasas.reduce((ilgiausias, salis) => (salis.length > ilgiausias.length) ? salis : ilgiausias, "");
}
