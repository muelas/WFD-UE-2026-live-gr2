enum MyEnum {
    A,
    B,
    C
}

enum MyEnum2 {
    A = 15,
    B,
    C = 25,
    D
}

enum MyEnum3 {
    A = "A",
    B = "B",
    C = "C",
    // D = 4    // Fehler: bei String Enums kein Auto-Increment
}

enum MyEnum4 {
    A = 1,
    B = "B",
    C = 3,
    D
}

let v: MyEnum = MyEnum.A;
v = 2;  // 2 entspricht MyEnum.C
// v = 3;  // Fehler: 3 entspricht keinem Wert von MyEnum
// v = true;   // Fehler: true ist nicht vom Typ MyEnum

//Reverse Mapping
let u = MyEnum[2];
console.log(u);

// Alternative: Union von literals
type MyLiteral = "A" | "B" | "C";

let w: MyLiteral = "B";
// w = "X";    // Error: "X" ist nicht vom Typ MyLiteral
// w = 2;      // Error: 2 ist nicht vom Typ MyLiteral