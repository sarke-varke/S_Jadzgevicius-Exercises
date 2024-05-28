function konvertuotiPirmasiasDidziasias(eilute) {
    return eilute.replace(/\b\w/g, function(raide) {
        return raide.toUpperCase();
    });
}
