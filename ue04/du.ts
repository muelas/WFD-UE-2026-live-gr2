interface Admin {
    name: string;
    password: string;
    kind: "admin";
}

interface Guest {
    name: string;
    kind: "guest";
}

// wir erweitern um Default
interface DefaultUser {
    name: string;
    lastLogin: Date;
    kind: "default";
}

// Ursprünglicher User-Typ
// type User = Admin | Guest;

type User = Admin | Guest | DefaultUser;

function canLogin(user: User): boolean {
    if (user.kind === "guest") {
        return false;
    } else {
        return true;
    }
}

function doSomething(user: User) {
    switch (user.kind) {
        case "admin":
            console.log("Admin was here");
            break;
        case "guest":
            console.log("Guest was here");
            break;
        case "default":
            break;
        default:
            const x: never = user;
            break;
    }
}