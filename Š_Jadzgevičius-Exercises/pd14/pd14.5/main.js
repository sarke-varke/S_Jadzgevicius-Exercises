function padidintiAtlyginima(atlyginimai) {
    const atnaujintiAtlyginimai = atlyginimai.map(atlyginimas => {
        if (atlyginimas >= 1000) {
            return atlyginimas * 1.05;
        } else {
            return atlyginimas * 1.10;
        }
    });
    return atnaujintiAtlyginimai;
}

const atlyginimaiPries = [824.25, 1225.12, 459.16, 1500];
const atlyginimaiPo = padidintiAtlyginima(atlyginimaiPries);

console.log("Atlyginimas iki:", atlyginimaiPries.join(", "));
console.log("Atlyginimas po:", atlyginimaiPo.join(", "));
