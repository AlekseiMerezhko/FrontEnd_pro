let promise = Promise.allSettled(iterable);

// Promise.all завершается с ошибкой, если она возникает в любом из переданных промисов.
// Это подходит для ситуаций «всё или ничего», когда нам нужны все результаты для продолжения

// Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет

// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.

// Например, мы хотели бы загрузить информацию о множестве пользователей.
// Даже если в каком-то запросе ошибка, нас всё равно интересуют остальные.

let urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
    // (*)
    results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            alert(`${urls[num]}: ${result.reason}`);
        }
    });
});

// Массив results в строке (*) будет таким:

// [
//   {status: 'fulfilled', value: ...объект ответа...},
//   {status: 'fulfilled', value: ...объект ответа...},
//   {status: 'rejected', reason: ...объект ошибки...}
// ]
