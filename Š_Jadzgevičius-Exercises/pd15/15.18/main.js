function unikalūsElementai(masyvas) {
    return [...new Set(masyvas)];
}

const masyvas = [1, 2, 2, 3, 4, 4, 5];
console.log("Unikalūs elementai:", unikalūsElementai(masyvas));
