// Promise.race

// Метод очень похож на Promise.all, но ждёт только первый выполненный промис,
// из которого берёт результат (или ошибку).

let promise = Promise.race(iterable);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Ошибка!")), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// Например, тут результат будет 1:
