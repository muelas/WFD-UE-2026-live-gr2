"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 42;
x = 1;
// x = "string";
console.log(x);
let s = "ABC";
console.log(s);
let b = true;
let a = [1, 2, 3];
a.push(4);
// a.push("fünf");
// tuple vs array
let x1 = ["Felix", 8, true];
// x1[4] = 123;
// x1[0] = 123;
let x2 = ["Felix", 8, true];
x2[4] = 123;
x2[0] = 123;
//functions
function f1(a, b) {
    return a + b;
}
console.log(f1(1, 2));
function f2(a) {
    a++;
    return a;
}
console.log(f2(1));
console.log(f2("1"));
console.log(f2("eins"));
// type alias
let a1 = ["a", "b", "c"];
let a2 = ["a", "b", "c"];
let p1 = [1, 1];
//# sourceMappingURL=main.js.map