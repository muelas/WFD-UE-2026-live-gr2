let x = 42;
x = 1;
// x = "string";
console.log(x);

let s: string = "ABC";
console.log(s);

let b: boolean = true;

let a: number[] = [1, 2, 3];
a.push(4);
// a.push("fünf");

// tuple vs array
let x1: [string, number, boolean] = ["Felix", 8, true];
// x1[4] = 123;
// x1[0] = 123;

let x2: (string | number | boolean)[] = ["Felix", 8, true];
x2[4] = 123;
x2[0] = 123;

//functions
function f1(a: number, b: number): number {
    return a + b;
}

console.log(f1(1, 2));

function f2(a: any) {
    a++;
    return a;
}

console.log(f2(1));
console.log(f2("1"));
console.log(f2("eins"));

// type alias
let a1: string[] = ["a", "b", "c"];
type StringArray = string[];

let a2: StringArray = ["a", "b", "c"];

type Point = [number, number];
let p1: Point = [1, 1];