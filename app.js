"use strict";

function pow(x,n) {
    let value = x;
    for (let i = 1; i < n; i++) {
        value *= x;
    }
    return value;
}

let n = prompt("Введите n", "");
let x = prompt("Введите x", "");

if (n < 1) {
    alert(`${n} не является натуральным числом, попробуйте снова`);
} else {
    alert (pow(x, n));
}