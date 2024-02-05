const nuolaidaProcentais = 20;
const telefonasKainaBeNuolaidos = 300;
const sutaupytiPinigai = 50;

const nuolaidosKaina = (nuolaidaProcentais / 100) * telefonasKainaBeNuolaidos;

const telefonasKainaSuNuolaida = telefonasKainaBeNuolaidos - nuolaidosKaina;

const sutaupytaPinigaiSuNuolaida = telefonasKainaBeNuolaidos - telefonasKainaSuNuolaida;

console.log("Telefonas su nuolaida kainuos:", telefonasKainaSuNuolaida, "eurų.");
console.log("Austėja sutaupė:", sutaupytaPinigaiSuNuolaida, "eurų už telefoną.");
