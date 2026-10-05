function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 100);

    await delay(200);
    console.log(3);
}

run();
console.log(4);