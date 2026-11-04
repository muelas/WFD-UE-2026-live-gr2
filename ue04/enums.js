"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
    MyEnum[MyEnum["C"] = 2] = "C";
})(MyEnum || (MyEnum = {}));
var MyEnum2;
(function (MyEnum2) {
    MyEnum2[MyEnum2["A"] = 15] = "A";
    MyEnum2[MyEnum2["B"] = 16] = "B";
    MyEnum2[MyEnum2["C"] = 25] = "C";
    MyEnum2[MyEnum2["D"] = 26] = "D";
})(MyEnum2 || (MyEnum2 = {}));
var MyEnum3;
(function (MyEnum3) {
    MyEnum3["A"] = "A";
    MyEnum3["B"] = "B";
    MyEnum3["C"] = "C";
    // D = 4    // Fehler: bei String Enums kein Auto-Increment
})(MyEnum3 || (MyEnum3 = {}));
var MyEnum4;
(function (MyEnum4) {
    MyEnum4[MyEnum4["A"] = 1] = "A";
    MyEnum4["B"] = "B";
    MyEnum4[MyEnum4["C"] = 3] = "C";
    MyEnum4[MyEnum4["D"] = 4] = "D";
})(MyEnum4 || (MyEnum4 = {}));
let v = MyEnum.A;
v = 2; // 2 entspricht MyEnum.C
// v = 3;  // Fehler: 3 entspricht keinem Wert von MyEnum
// v = true;   // Fehler: true ist nicht vom Typ MyEnum
//Reverse Mapping
let u = MyEnum[2];
console.log(u);
let w = "B";
// w = "X";    // Error: "X" ist nicht vom Typ MyLiteral
// w = 2;      // Error: 2 ist nicht vom Typ MyLiteral
