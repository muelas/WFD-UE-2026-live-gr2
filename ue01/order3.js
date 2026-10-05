function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log(1);

delay(200)
    .then(() => {
        console.log(2);
        return delay(100);
    })
    .then(() => {
        console.log(3);
    });

console.log(4);