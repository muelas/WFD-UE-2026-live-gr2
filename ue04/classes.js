"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    hobbies;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
}
//modifier
class Person2 {
    _name;
    _age;
    _hobbies;
    _test;
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._hobbies = [];
        this._test = "abc";
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(v) {
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
    _name;
    _age;
    _hobbies;
    constructor(_name, _age, _hobbies = []) {
        this._name = _name;
        this._age = _age;
        this._hobbies = _hobbies;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(v) {
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
    sid;
    constructor(name, age, sid) {
        super(name, age);
        this.sid = sid;
    }
    foo() {
        // console.log(this._name);    // Fehler, da _name private ist in Person2
        console.log(this.name); // ok, da name (get) public ist in Person2
        console.log(this._test); // ok, da _test protected ist in Person2
    }
}
