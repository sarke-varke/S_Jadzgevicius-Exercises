const temperatures = {
    "Sausis": [-11.5, -10.3, -12, -6.5, -5, -15.5],
    "Vasaris": [-16, -14.5, -11, -10.3, -3.5, 0],
    "Kovas": [-3, -2.5, 0, 5, 9.5, 11.2]
};

function calculateAverageTemperature(monthTemperatures) {
    const sum = monthTemperatures.reduce((acc, temp) => acc + temp, 0);
    return sum / monthTemperatures.length;
}

function calculateOverallAverageTemperature(monthlyTemperatures) {
    const allTemperatures = Object.values(monthlyTemperatures).flat();
    return calculateAverageTemperature(allTemperatures);
}

function calculateMonthlyAverages(monthlyTemperatures) {
    const averages = {};
    for (const month in monthlyTemperatures) {
        const monthAverage = calculateAverageTemperature(monthlyTemperatures[month]);
        averages[month] = monthAverage.toFixed(2);
    }
    return averages;
}

const monthlyAverages = calculateMonthlyAverages(temperatures);
const overallAverage = calculateOverallAverageTemperature(temperatures);

console.log("Vidutinė sausio temperatūra:", monthlyAverages["Sausis"]);
console.log("Vidutinė vasario temperatūra:", monthlyAverages["Vasaris"]);
console.log("Vidutinė kovo temperatūra:", monthlyAverages["Kovas"]);
console.log("Bendras atliktų matavimų vidurkis:", overallAverage.toFixed(2));
