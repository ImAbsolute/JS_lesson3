'use strict'
// Задание 1
let n = [];
let x = 100;

nextPrime:
    for (let i = 2; i <= x; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        n.push(i);
    }
console.log(n);

// Задание 2-3

// let basket = [1, 1, 1, 1, 1, 1];


// function countBasketPrice() {
//     let summ = 0;
//     for (let i = 0; i < basket.length; i++) {
//         summ = summ + basket[i];
//     }
//     console.log(summ);
// }

// countBasketPrice();

// // Задание 4

// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// // Задание 5

// let piramid = 'x';
// let i = 0;
// while (i < 20) {
//     console.log(piramid);
//     piramid = piramid + 'x'
//     i++;
// }