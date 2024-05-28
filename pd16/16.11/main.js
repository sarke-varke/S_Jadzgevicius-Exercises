function ilgiausiasZodis(eilute) {
    const zodziai = eilute.split(' ');
    let ilgiausias = '';
    for (let i = 0; i < zodziai.length; i++) {
        if (zodziai[i].length > ilgiausias.length) {
            ilgiausias = zodziai[i];
        }
    }
    return ilgiausias;
}
