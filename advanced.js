//1. Create a Promise that resolves after 10 seconds
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 10 seconds");
    }, 10000);
});
promise.then((message) => {
    console.log(message);
});

// 2.Use .then() to print the result
const promises = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 1000);
});
promises.then((result) => {
    console.log(result);
});

//3. Convert  it to async/await
function Data() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 10 seconds");
        }, 1000);
    });
}
async function data1() {
    const result = await Data();
    console.log(result);
}
data1();

//4.Handle errors with try/catch
function TenSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 10 seconds");
        }, 1000);
    });
}

async function main() {
    try {
        const message = await TenSeconds();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

main();