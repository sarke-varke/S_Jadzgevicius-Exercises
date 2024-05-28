function bubbleSort(masyvas) {
    const ilgis = masyvas.length;
    for (let i = 0; i < ilgis - 1; i++) {
        for (let j = 0; j < ilgis - i - 1; j++) {
            if (masyvas[j] > masyvas[j + 1]) {
                const temp = masyvas[j];
                masyvas[j] = masyvas[j + 1];
                masyvas[j + 1] = temp;
            }
        }
    }
    return masyvas;
}
