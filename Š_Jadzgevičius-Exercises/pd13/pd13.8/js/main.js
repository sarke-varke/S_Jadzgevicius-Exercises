const a = 5;
const b = 10;
const c = 15;

if ((a < b && b < c) || (a > b && b > c)) {
    console.log(`Lygybė ${a} < ${b} < ${c} arba ${a} > ${b} > ${c} yra tenkinama.`);
} else {
    console.log(`Lygybė ${a} < ${b} < ${c} arba ${a} > ${b} > ${c} nėra tenkinama.`);
}
