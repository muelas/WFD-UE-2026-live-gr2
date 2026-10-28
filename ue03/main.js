"use strict";
// type aliases
Object.defineProperty(exports, "__esModule", { value: true });
let gs = "Good";
function doItWithGS(x) {
    return x.toLowerCase(); // GoodString kennt auch toLowerCase() weil es ein string ist
}
gs = doItWithGS(gs); // GoodString wird zurückgegeben
gs = "abc"; // string ist genauso kompatibel mit GoodString, also kein Fehler
let a = "hello";
let b = a;
let c = a;
let b1 = a;
// let c1: Three = <Three>a;
function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
}
let r = addOrConcat(2, 2, "concat"); // Type Assertion
let max = {
    name: "Max",
    age: 6,
};
//unvollständig
// let felix: Person= {
//     name: "Felix",
// }
max.age = 7;
let felix = {
    name: "Felix",
    age: 8,
};
let katrin = {
    name: "Katrin",
    age: 40,
};
let katrin2 = {
    name: "Katrin",
    age: 40,
    sid: "123456",
};
console.log(katrin.sid); // undefined
console.log(katrin.sid?.toUpperCase());
let v2 = {
    a: "irgendwas",
    b: "irgendwas anderes",
};
// umwandlung in boolean
let s = "abc";
console.log(s);
console.log(!s);
console.log(!!s);
//# sourceMappingURL=main.js.map