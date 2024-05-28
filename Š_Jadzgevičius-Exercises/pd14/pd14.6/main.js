function atvirksciaiEilute(tekstas) {
    const stekas = [];
    for (let i = 0; i < tekstas.length; i++) {
        stekas.push(tekstas[i]);
    }
    let atvirksciai = '';
    while (stekas.length > 0) {
        atvirksciai += stekas.pop();
    }
    return atvirksciai;
}

const pradinisTekstas = "JavaScriptforall";
const atvirksciai = atvirksciaiEilute(pradinisTekstas);
console.log(atvirksciai);
