function atspekSkaiciu() {
    const slaptasSkaicius = Math.floor(Math.random() * 100) + 1; // Sugeneruojamas atsitiktinis skaičius nuo 1 iki 100
    let spejimas;

    do {
        spejimas = parseInt(prompt("Spėkite skaičių nuo 1 iki 100:")); // Vartotojas įveda spėjimą
        if (spejimas < slaptasSkaicius) {
            alert("Slaptas skaičius yra didesnis.");
        } else if (spejimas > slaptasSkaicius) {
            alert("Slaptas skaičius yra mažesnis.");
        } else {
            alert("Sveikiname, atspėjote skaičių!");
        }
    } while (spejimas !== slaptasSkaicius);
}

atspekSkaiciu();
