// === Einfaches Beispiel für Funktionsüberladung in TypeScript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Die Typen der Parameter müssen übereinstimmen.");  // kann niemals auftreten, da die Überladungen dies verhindern
}

console.log(add(40, 2));    // Ausgabe: 42
console.log(add("the", " answer")); // Ausgabe: the answer

// console.log(add(42,"the answer")); // FEHLER: Die implementation signature darf nicht direkt aufgerufen werden


// === Beispiel 2
function format(s: string, toUpper: boolean): string;
function format(n: number): string;
function format(value: string | number, toUpper?: boolean): string {
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
    private readonly greeting: string;

    // Überladen von Konstruktoren
    constructor(customGreeting: string);
    constructor(nr: number);
    constructor(val: string | number) {
        if (typeof val === "string") {
            this.greeting = val;
        } else {
            this.greeting = "Hello" + "!".repeat(val);
        }
    }

    // Überladen von Methoden
    greet(person: string): string;
    greet(persons: string[]): string;
    greet(target: string | string[]): string {
        if (Array.isArray(target)) {
            return target
                .map((name) => `${this.greeting} ${name}`)  // mappt jeden Namen auf eine Begrüßung
                .join(", "); // verbindet die Begrüßungen zu einem einzigen String
        } else {
            return `${this.greeting} ${target}`;    // einfache Begrüßung für eine einzelne Person
        }
    }
}

// Aufrufe von überladenen Konstruktoren
const g1 = new Greeter("Hey there");
const g2 = new Greeter(10);

// Aufrufe von überladenen Methoden
console.log(g1.greet("Max"));
console.log(g1.greet(["Max","Felix", "Katrin"]));
