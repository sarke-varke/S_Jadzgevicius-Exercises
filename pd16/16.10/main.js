function konvertuotiIPirmasiasDidziasias(eilute) {
    const zodziai = eilute.split(' ');
    for (let i = 0; i < zodziai.length; i++) {
        zodziai[i] = zodziai[i].charAt(0).toUpperCase() + zodziai[i].slice(1);
    }
    return zodziai.join(' ');
}
