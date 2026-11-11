"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    _color;
    name;
    constructor(_color, name) {
        this._color = _color;
        this.name = name;
    }
    get area() {
        return 0;
    }
    draw() {
        console.log(`Zeichne ${this.name} in ${this._color}...`);
    }
}
class Circle extends Shape {
    _radius;
    constructor(_color, _radius) {
        super(_color, "Kreis");
        this._radius = _radius;
    }
    get area() {
        return Math.PI * (this._radius ** 2);
    }
    draw() {
        console.log(`Zeichne %{this.name} mit Radius=${this._radius} in ${this._color}...`);
    }
}
// Klasse die name als get anbietet
class Person {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
// Funktion die mit allen Objekten funktioniert, die Vertrag erfüllen
function sayMyName(wn) {
    console.log(`Mein Name ist: ${wn.name}`);
}
// Klappt, da TS strukturelle Typisierung (structural typing, auch "Duck Typing") nutzt
// d.h., solange die Struktur stimmt, klappt das.
sayMyName(new Person("Felix"));
sayMyName(new Circle("blau", 5)); // Circle hat name, also klappt das auch
sayMyName(new Shape("rot", "Form")); // Shape hat name, also klappt das auch
class Color {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
sayMyName(new Color("violett")); // Color hat name, also klappt das auch
// Suche etwas mit Namen "name"
function findByName(wns, name) {
    return wns.find((wn) => wn.name === name);
}
const s1 = new Circle("blau", 4);
const s2 = new Circle("rot", 19);
const s3 = new Shape("violett", "Polygon");
const s4 = new Circle("weiß", 5);
let result;
const data = [s1, s2, s3, s4];
// result = findByName(data, "Polygon");    // Aufruf klappt, da Shape name hat - Rückgabetyp ist aber WithName, nicht Shape
function findByNameGeneric(wns, name) {
    return wns.find((wn) => wn.name === name);
}
result = findByNameGeneric(data, "Polygon"); // klappt, da Rückgabetyp jetzt T, also Shape, ist
// Weitere Beispiele mit der Funktion
const persons = [
    new Person("Felix"),
    new Person("Max"),
];
const foundPerson = findByNameGeneric(persons, "Max");
if (foundPerson) {
    console.log(`Gefunden: ${foundPerson.name}`);
}
const colors = [
    new Color("violett"),
    new Color("weiß"),
];
const foundColor = findByNameGeneric(colors, "violett");
// Generische Klassen
class DataStore {
    _items = [];
    addItem(item) {
        this._items.push(item);
    }
    get items() {
        return this._items;
    }
    getFirstItem() {
        return this._items[0];
    }
}
// Anwendung der generischen Klasse
const personStore = new DataStore();
personStore.addItem(new Person("Felix"));
personStore.addItem(new Person("Max"));
// personStore.addItem(new Color("grün")); // Fehler: Type 'Color' is not assignable to type 'Person'.
// Datastore für Farben
const colorStore = new DataStore();
colorStore.addItem(new Color("violett"));
colorStore.addItem(new Color("weiß"));
colorStore.items.forEach((color) => console.log(`Farbe: ${color.name}`));
// Datastore für Shapes
const shapeStore = new DataStore();
shapeStore.addItem(new Circle("blau", 4));
shapeStore.addItem(new Shape("rot", "Polygon"));
shapeStore.getFirstItem()?.draw();
function getBoxContent(box) {
    console.log("Öffne die Box...");
    return box.content;
}
class ShippingBox {
    content;
    constructor(content) {
        this.content = content;
        console.log("Erstelle Versandbox...");
    }
    getShippingLabel() {
        return "Label...";
    }
}
// Implementiert IBox<T> nicht, ist aber strukturell kompatibel, da es die content-Eigenschaft hat
class GiftBox {
    content;
    ribbonColor;
    constructor(content, ribbonColor) {
        this.content = content;
        this.ribbonColor = ribbonColor;
        console.log(`Erstelle Geschenkbox mit Schleife in ${this.ribbonColor}...`);
    }
    wrap() {
        console.log("Wird eingepackt...");
    }
}
// Arbeiten mit Boxen
const bookBox = new ShippingBox("Buch: TypeScript für Einsteiger");
getBoxContent(bookBox);
const ringBox = new GiftBox("Diamantring", "rot");
getBoxContent(ringBox); // strukturell kompatibel
class NNPair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class PrintablePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    print() {
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}
