function invertCase(eilute) {
    let keistiEilute = '';
    for (let i = 0; i < eilute.length; i++) {
        const simbolis = eilute[i];
        if (simbolis === simbolis.toUpperCase()) {
            keistiEilute += simbolis.toLowerCase();
        } else {
            keistiEilute += simbolis.toUpperCase();
        }
    }
    return keistiEilute;
}

const ivestaEilute = "Labas, Pasauli!";
const priesingosRaides = invertCase(ivestaEilute);
console.log(priesingosRaides);
