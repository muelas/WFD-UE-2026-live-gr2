class Shape {
    constructor(
        protected _color: string,
        public readonly name: string,
    ) {
    }

    get area(): number {
        return 0;
    }

    public draw(): void {
        console.log(`Zeichne ${this.name} in ${this._color}...`);
    }
}

class Circle extends Shape {
    constructor(
        _color: string,
        private _radius: number,
    ) {
        super(_color, "Kreis");
    }

    get area(): number {
        return Math.PI * (this._radius ** 2);
    }

    public draw(): void {
        console.log(`Zeichne %{this.name} mit Radius=${this._radius} in ${this._color}...`);
    }
}

// Interface das einen "name" vorschreibt
interface WithName {
    name: string;
}

// Klasse die name als get anbietet
class Person {
    constructor(
        private _name: string,
    ) {
    }

    get name() {
        return this._name;
    }
}

// Funktion die mit allen Objekten funktioniert, die Vertrag erfüllen
function sayMyName(wn: WithName) {
    console.log(`Mein Name ist: ${wn.name}`);
}

// Klappt, da TS strukturelle Typisierung (structural typing, auch "Duck Typing") nutzt
// d.h., solange die Struktur stimmt, klappt das.
sayMyName(new Person("Felix"));
sayMyName(new Circle("blau", 5)); // Circle hat name, also klappt das auch
sayMyName(new Shape("rot", "Form")); // Shape hat name, also klappt das auch


class Color implements WithName {
    constructor(
        private _name: string,
    ) {
    }

    get name() {
        return this._name;
    }
}

sayMyName(new Color("violett")); // Color hat name, also klappt das auch

// Suche etwas mit Namen "name"
function findByName(wns: WithName[], name: string): WithName | undefined {
    return wns.find((wn) => wn.name === name);
}

const s1 = new Circle("blau", 4);
const s2 = new Circle("rot", 19);
const s3 = new Shape("violett", "Polygon");
const s4 = new Circle("weiß", 5);
let result: Shape | undefined;
const data: Shape[] = [s1, s2, s3, s4];

// result = findByName(data, "Polygon");    // Aufruf klappt, da Shape name hat - Rückgabetyp ist aber WithName, nicht Shape

function findByNameGeneric<T extends WithName>(wns: T[], name: string): T | undefined {
    return wns.find((wn) => wn.name === name);
}

result = findByNameGeneric<Shape>(data, "Polygon"); // klappt, da Rückgabetyp jetzt T, also Shape, ist

// Weitere Beispiele mit der Funktion
const persons: Person[] = [
    new Person("Felix"),
    new Person("Max"),
];
const foundPerson: Person | undefined = findByNameGeneric<Person>(persons, "Max");
if (foundPerson) {
    console.log(`Gefunden: ${foundPerson.name}`);
}

const colors: Color[] = [
    new Color("violett"),
    new Color("weiß"),
];
const foundColor = findByNameGeneric(colors, "violett");


// Generische Klassen
class DataStore<ItemType> {   //speichert beliebeige items
    private _items: ItemType[] = [];

    public addItem(item: ItemType): void {
        this._items.push(item);
    }

    public get items(): ItemType[] {
        return this._items;
    }

    public getFirstItem(): ItemType | undefined {
        return this._items[0];
    }
}

// Anwendung der generischen Klasse
const personStore = new DataStore<Person>();
personStore.addItem(new Person("Felix"));
personStore.addItem(new Person("Max"));
// personStore.addItem(new Color("grün")); // Fehler: Type 'Color' is not assignable to type 'Person'.


// Datastore für Farben
const colorStore = new DataStore<Color>();
colorStore.addItem(new Color("violett"));
colorStore.addItem(new Color("weiß"));

colorStore.items.forEach((color) => console.log(`Farbe: ${color.name}`));


// Datastore für Shapes
const shapeStore = new DataStore<Shape>();
shapeStore.addItem(new Circle("blau", 4));
shapeStore.addItem(new Shape("rot", "Polygon"));

shapeStore.getFirstItem()?.draw();


// Generische Interfaces
interface IBox<T> {
    content: T;
}

function getBoxContent<T2>(box: IBox<T2>): T2 {
    console.log("Öffne die Box...");
    return box.content;
}

class ShippingBox<T> implements IBox<T> {
    constructor(
        public content: T
    ) {
        console.log("Erstelle Versandbox...");
    }

    public getShippingLabel(): string {
        return "Label...";
    }
}

// Implementiert IBox<T> nicht, ist aber strukturell kompatibel, da es die content-Eigenschaft hat
class GiftBox<T> {
    constructor(
        public content: T,
        public ribbonColor: string) {
        console.log(`Erstelle Geschenkbox mit Schleife in ${this.ribbonColor}...`);
    }

    public wrap(): void {
        console.log("Wird eingepackt...");
    }
}


// Arbeiten mit Boxen
const bookBox = new ShippingBox<string>("Buch: TypeScript für Einsteiger");
getBoxContent(bookBox);

const ringBox = new GiftBox<string>("Diamantring", "rot");
getBoxContent(ringBox); // strukturell kompatibel


// Mehrere Typparameter
interface Pair<K, V> {
    key: K;
    value: V;
}

class NNPair implements Pair<number, number> {
    key: number;
    value: number;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class PrintablePair<K, V> implements Pair<K, V> {
    constructor(
        public key: K,
        public value: V,
    ) {
    }

    print(): void {
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}
