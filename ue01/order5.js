function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
    console.log(1);
    await delay(200);
    console.log(2);
    await delay(100);
    console.log(3);
}

console.log(4);
run();
console.log(5);