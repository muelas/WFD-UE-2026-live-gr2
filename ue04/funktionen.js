"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = (a, b) => {
    return a + b;
};
let multiply = (x, y) => {
    return x * y;
};
function doIt(data, fn) {
    if (data.length === 0) {
        return 0;
    }
    let result = data[0];
    for (let i = 1; i < data.length; i++) {
        result = fn(result, data[i]);
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5];
console.log(doIt(numbers, add));
console.log(doIt(numbers, multiply));
console.log(doIt(numbers, (a, b) => a - b));
// Defaultwerte
function addAll(a, b, c = 0) {
    return a + b + c;
}
console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));
// Rest-Parameter
function sumAll(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
