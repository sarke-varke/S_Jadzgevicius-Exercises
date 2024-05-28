function pirmasNepasikartojantisSimbolis(eilute) {
    const simboliai = {};
    for (const simbolis of eilute) {
        if (simboliai[simbolis]) {
            simboliai[simbolis]++;
        } else {
            simboliai[simbolis] = 1;
        }
    }
    for (const simbolis of eilute) {
        if (simboliai[simbolis] === 1) {
            return simbolis;
        }
    }
    return null;
}
