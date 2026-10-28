// type aliases

type GoodString = string;

let gs: GoodString = "Good";

function doItWithGS(x: GoodString): GoodString {
    return x.toLowerCase(); // GoodString kennt auch toLowerCase() weil es ein string ist
}

gs = doItWithGS(gs);    // GoodString wird zurückgegeben
gs = "abc"; // string ist genauso kompatibel mit GoodString, also kein Fehler


// type aliases mit union types
type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = "hello";
let b = a as Two;
let c = a as Three;

let b1: Two = a;
// let c1: Three = <Three>a;

function addOrConcat(a: number, b: number, c: "add" | "concat"): number | string {
    if (c === "add") {
        return a + b;
    } else {
        return "" + a + b;
    }
}

let r: string = addOrConcat(2, 2, "concat") as string; // Type Assertion
// let r2: string = addOrConcat(2, 2, "add") as string; // Type Assertion - ACHTUNG Falsch


// type aliases mit object types
type Person = {
    name: string,
    age: number,
};

let max: Person = {
    name: "Max",
    age: 6,
};

//unvollständig
// let felix: Person= {
//     name: "Felix",
// }

max.age = 7;
// max.age = "sechs";

// interfaces
interface IPerson {
    name: string;
    age: number;
}

let felix: IPerson = {
    name: "Felix",
    age: 8,
};

interface IStudent {
    name: string;
    age: number;
    sid?: string;
}

let katrin: IStudent = {
    name: "Katrin",
    age: 40,
};

let katrin2: IStudent = {
    name: "Katrin",
    age: 40,
    sid: "123456",
}

console.log(katrin.sid); // undefined
console.log(katrin.sid?.toUpperCase());


// interfaces erweitern
interface A {
    a: string;
}

// let v1: A = {
//     a: "irgendwas",
// }

interface A {
    b: string;
}

let v2: A = {
    a: "irgendwas",
    b: "irgendwas anderes",
}


// umwandlung in boolean
let s = "abc";

console.log(s);
console.log(!s);
console.log(!!s);