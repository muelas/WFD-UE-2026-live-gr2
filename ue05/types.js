"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cc1 = {
    color: "blau",
    side: 5,
};
const cc2 = {
    color: "rot",
    side: 6,
};
// Intersection Type inline
const cc3 = {
    color: "weiß",
    side: 1,
};
// Intersection Type in Funktion
function printColurfulCube(cc) {
    console.log(`Printing Cube with color ${cc.color} and side ${cc.side}`);
}
