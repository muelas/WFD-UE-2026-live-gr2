// Funktionstyp
type mathFunction = (a: number, b: number) => number;

let add: mathFunction = (a, b) => {
    return a + b;
}

let multiply: mathFunction = (x, y) => {
    return x * y;
}

function doIt(data: number[], fn: mathFunction) {
    if (data.length === 0) {
        return 0;
    }
    let result = data[0] as number;
    for (let i = 1; i < data.length; i++) {
        result = fn(result, data[i] as number);
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(doIt(numbers, add));
console.log(doIt(numbers, multiply));
console.log(doIt(numbers, (a, b) => a - b));


// Defaultwerte
function addAll(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));


// Rest-Parameter
function sumAll(...numbers: number[]): number {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}