// Interfaces
interface Colorful {
    color: string;
}

interface Cube {
    side: number;
}

// Interface das beides kombiniert
interface ColorfulCube extends Colorful, Cube {
}

const cc1: ColorfulCube = {
    color: "blau",
    side: 5,
}

// Intersection Type als type, der beides kombiniert
type ColorfulCubeType = Colorful & Cube;
const cc2: ColorfulCubeType = {
    color: "rot",
    side: 6,
}

// Intersection Type inline
const cc3: Colorful & Cube = {
    color: "weiß",
    side: 1,
}

// Intersection Type in Funktion
function printColurfulCube(cc: Colorful & Cube) : void {
    console.log(`Printing Cube with color ${cc.color} and side ${cc.side}`);
}

type ColorfulOrCube = Colorful | Cube;
