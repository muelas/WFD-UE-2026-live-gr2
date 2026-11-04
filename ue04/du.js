"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canLogin(user) {
    if (user.kind === "guest") {
        return false;
    }
    else {
        return true;
    }
}
function doSomething(user) {
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
            const x = user;
            break;
    }
}
