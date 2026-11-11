"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Die Typen der Parameter müssen übereinstimmen."); // kann niemals auftreten, da die Überladungen dies verhindern
}
console.log(add(40, 2)); // Ausgabe: 42
console.log(add("the", " answer")); // Ausgabe: the answer
function format(value, toUpper) {
    if (typeof value === "number") {
        return value.toFixed(2);
    }
    return toUpper ? value.toUpperCase() : value.toLowerCase();
}
// Gültige Aufrufe
format("hello", true);
format("bye", false);
format(3.14159);
// Ungültige Aufrufe
// format(42, false); // FEHLER: Überladung #2 erlaubt kein zweites Argument
// format("hi"); // FEHLER: Überladung #1 verlangt zwei Argumente
// === Beispiel 3: Überladen in Klassen
class Greeter {
    greeting;
    constructor(val) {
        if (typeof val === "string") {
            this.greeting = val;
        }
        else {
            this.greeting = "Hello" + "!".repeat(val);
        }
    }
    greet(target) {
        if (Array.isArray(target)) {
            return target
                .map((name) => `${this.greeting} ${name}`) // mappt jeden Namen auf eine Begrüßung
                .join(", "); // verbindet die Begrüßungen zu einem einzigen String
        }
        else {
            return `${this.greeting} ${target}`; // einfache Begrüßung für eine einzelne Person
        }
    }
}
// Aufrufe von überladenen Konstruktoren
const g1 = new Greeter("Hey there");
const g2 = new Greeter(10);
// Aufrufe von überladenen Methoden
console.log(g1.greet("Max"));
console.log(g1.greet(["Max", "Felix", "Katrin"]));
