'use strict'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (array) => {

    let totalSum = 0;

    for (let elem of array) {
        totalSum += elem;
    }

    return totalSum / array.length
}

let averageBill = getAverageValue(allCashbox);

console.log(`Cредний чек за день: ${averageBill}`)