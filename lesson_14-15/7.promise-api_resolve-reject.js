// Методы Promise.resolve и Promise.reject редко используются в современном коде, так как синтаксис async/await

// Promise.resolve
// Promise.resolve(value) создаёт успешно выполненный промис с результатом value.
// То же самое, что:

// let promise = new Promise(resolve => resolve(value));

// Promise.reject
// Promise.reject(error) создаёт промис, завершённый с ошибкой error.
// То же самое, что:

// let promise = new Promise((resolve, reject) => reject(error));

for (let i = 0; i < 10000; i++) {
    console.log(i);
    //1s
}

setTimeout(() => {
    console.log("first");
}, 2000);

for (let i = 0; i < 10000; i++) {
    console.log(i);
    //1s
}

console.log("first");
