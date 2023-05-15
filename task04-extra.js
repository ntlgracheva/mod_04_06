'use strict'

const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const getAveragePriceGoods = (array) => {

    let totalSum = 0;
    let totalNumberOfProducts = 0;

    for (let elem of array) {
        totalNumberOfProducts += elem[0];
        totalSum += elem[1];
    }

    return totalSum / totalNumberOfProducts
}

let averagePrice = getAveragePriceGoods(allCashbox);

console.log(`Средняя стоимость одного товара в магазине: ${averagePrice}`)