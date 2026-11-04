class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }

    addHobby(hobby: string): void {
        this.hobbies.push(hobby);
    }
}

//modifier
class Person2 {
    private readonly _name: string;
    private _age: number;
    private _hobbies: string[];
    protected _test: string;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
        this._hobbies = [];
        this._test = "abc";
    }

    public get name() {
        return this._name;
    }

    public get age() {
        return this._age;
    }

    public set age(v: number) {
        if (v > 0)
            this._age = v;
    }
}

const p2 = new Person2("Max", 6);
console.log(p2.name);
p2.age = 7;
console.log(p2.age);
p2.age = -6;
console.log(p2.age);

// Parameter properties

class Person3 {
    constructor(
        private readonly _name: string,
        private _age: number,
        private _hobbies: string[] = []
    ) {
    }

    public get name() {
        return this._name;
    }

    public get age() {
        return this._age;
    }

    public set age(v: number) {
        if (v > 0)
            this._age = v;
    }
}

const p3 = new Person3("Max", 6);
console.log(p3.name);
p3.age = 7;
console.log(p3.age);
p3.age = -6;
console.log(p3.age);


// Vererbung
class Student extends Person2 {
    constructor(
        name: string, age: number,
        private sid: number
    ) {
        super(name, age);
    }

    foo() {
        // console.log(this._name);    // Fehler, da _name private ist in Person2
        console.log(this.name);   // ok, da name (get) public ist in Person2
        console.log(this._test);   // ok, da _test protected ist in Person2
    }
}