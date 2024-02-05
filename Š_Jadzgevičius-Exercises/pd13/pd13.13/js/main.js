const kaina1 = 10;
const kaina2 = 15;
const nuolaida = 20;

const bendraSumaBeNuolaidos = kaina1 + kaina2;

const nuolaidosSuma = bendraSumaBeNuolaidos * (1 - nuolaida / 100);

const pakankaPinigų = nuolaidosSuma <= kaina1 + kaina2;

if (pakankaPinigų) {
    console.log("Pirkėjui užtenka pinigų abiem prekėms įsigyti.");
    console.log("Jos iš viso kainuos", nuolaidosSuma, "eurų.");
} else {
    console.log("Pirkėjui nepakanka pinigų abiem prekėms įsigyti.");
}
