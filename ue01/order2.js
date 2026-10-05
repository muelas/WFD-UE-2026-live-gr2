console.log(1);

function waitAndResolve() {
    return new Promise((resolve) => {
        console.log(2);
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

waitAndResolve().then(() => {
    console.log(3);
});

console.log(4);