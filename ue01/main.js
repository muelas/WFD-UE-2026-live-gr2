//Objekte
const myObj = {
    name: "Max",
    age: 6,
    hobbies: ["football", "gaming"],
    drinks: {
        morning: "milk",
        lunch: "juice"
    },
    action: function () {
        return `Hello ${this.name} how are you today?`;
    },
    action2: function (number) {
        return `Hello ${this.name} your lucky number is ${number}`;
    }
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.drinks.morning);
console.log(myObj.action());
console.log(myObj.action2(42));

myObj.name = "Felix";
console.log(myObj);

// Klassen
class Pizza {
    #size;
    #type;

    constructor(pizzaType, pizzaSize) {
        this.#type = pizzaType;
        this.#size = pizzaSize;
        this.style = "italian";
        this.toppings = [];
    }

    bake() {
        console.log("Baking the pizza");
    }

    get pizzaSize() {
        return this.#size;
    }

    set pizzaSize(value) {
        this.#size = value;
    }

    get pizzaToppings() {
        return this.toppings;
    }

    set pizzaToppings(value) {
        this.toppings.push(value);
    }

    resetToppings = () => {
        this.toppings = [];
    }
}

const myPizza = new Pizza("Diavolo", "large");
// myPizza.#size = "small";
console.log(myPizza);
myPizza.pizzaSize = "medium";
console.log(myPizza.pizzaSize);

myPizza.pizzaToppings = "Salami";
myPizza.pizzaToppings = "Zwiebel";
myPizza.resetToppings();
console.log(myPizza.pizzaToppings);

class SpecialPizza extends Pizza {
    constructor(pizzaSize) {
        super("Special", pizzaSize);
    }

    bake() {
        super.bake();
        console.log("This is a special pizza!");
    }
}

const mySpecialPizza = new SpecialPizza("large");
console.log(typeof mySpecialPizza);
console.log(myPizza instanceof SpecialPizza);

myPizza.bake();
mySpecialPizza.bake();

//Async
//callbacks
function callback(p) {
    console.log(`The name you submitted is ${p}`);
}

function callback2(p) {
    console.log(`The name you submitted is ${p} and this is the second callback`);
}

function firstFunction(param, cb) {
    //do stuff
    cb(param);
}

firstFunction("Max", callback);
firstFunction("Felix", callback2);

function secondFunction(params, cb) {
    for (let i = 0; i < params.length; i++) {
        cb(params[i]);
    }
}

secondFunction(["Max", "Felix", "Katrin"], callback);

setTimeout(() => console.log("done"), 1000);
setTimeout(callback, 1000);

// Promises
const myPromise = new Promise((res, rej) => {
    const error = false;
    if (error) {
        rej("Fehler!");
    } else {
        res("Alles gut!");
    }
});

myPromise.then((data) => console.log(data))
    .catch((err) => console.log(err));

// fetch API
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);
users
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));

//async await
async function myFunction() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await resp.json();
        console.log(users);
        console.log("TEST");
    } catch (err) {
        console.log(err);
    }
}

myFunction();