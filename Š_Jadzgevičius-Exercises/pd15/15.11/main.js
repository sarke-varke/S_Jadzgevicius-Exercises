function sumaisytiMasyvoElementus(masyvas) {
    for (let i = masyvas.length - 1; i > 0; i--) {
	const indeksas = Math.floor(Math.random() * (i + 1));
	const laikinas = masyvas[i];
	masyvas[i] = masyvas[indeksas];
	masyvas[indeksas] = laikinas;
    }
    return masyvas;
}

const pradinisMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumaisyti = sumaisytiMasyvoElementus(pradinisMasyvas);
console.log("Sumaišytas masyvas:", sumaisyti);
