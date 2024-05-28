function antrasMaziausiasIrDidziausias(skaiciai) {
    const surikiuotiSkaiciai = skaiciai.sort((a, b) => a - b);
    return [surikiuotiSkaiciai[1], surikiuotiSkaiciai[surikiuotiSkaiciai.length - 2]];
}
