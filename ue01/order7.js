function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
    console.log(1);
    await delay(100);
    console.log(2);
}

console.log(3);
await run();
console.log(4);
