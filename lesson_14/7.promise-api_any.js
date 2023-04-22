// Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис,
// из которого берёт результат.

// Если ни один из переданных промисов не завершится успешно,
// тогда возвращённый объект Promise будет отклонён с помощью AggregateError –
// специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.

let promise = Promise.any(iterable);

Promise.any([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Ошибка!")), 1000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// Например, здесь, результатом будет 1:

// Первый промис в этом примере был самым быстрым, но он был отклонён,
// поэтому результатом стал второй. После того, как первый успешно выполненный промис «выиграет гонку»,
// все дальнейшие результаты будут проигнорированы.

// Вот пример, в котором все промисы отклоняются:

Promise.any([
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Ошибка!")), 1000)
    ),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000)
    ),
]).catch((error) => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});
