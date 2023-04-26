// В классе Promise есть 6 статических методов.

// Promise.all
// Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.

// let promise = Promise.all(iterable);

// Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект,
// но обычно используется массив) и возвращает новый промис.

// Новый промис завершится, когда завершится весь переданный список промисов,
// и его результатом будет массив их результатов.

// Например, Promise.all, представленный ниже, выполнится спустя 3 секунды, его результатом будет массив [1, 2, 3]:

// Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// // каждый промис даёт элемент массива

// Обратите внимание, что порядок элементов массива в точности соответствует порядку исходных промисов.
// Даже если первый промис будет выполняться дольше всех, его результат всё равно будет первым в массиве.

// Часто применяемый трюк – пропустить массив данных через map-функцию,
// которая для каждого элемента создаст задачу-промис, и затем обернуть получившийся массив в Promise.all.

let urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig",
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map((url) => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests).then((responses) => {
    const newArr = responses.map((response) => response.json());
    console.log(newArr);
});

// А вот пример, с получением информации о пользователях GitHub по их логинам из массива

// let names = ["iliakan", "remy", "jeresig"];

// let requests = names.map((name) =>
//     fetch(`https://api.github.com/users/${name}`)
// );

// Promise.all(requests)
//     .then((responses) => {
//         // все промисы успешно завершены
//         for (let response of responses) {
//             console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
//         }

//         return responses;
//     })
//     // преобразовать массив ответов response в response.json(),
//     // чтобы прочитать содержимое каждого
//     .then((responses) => Promise.all(responses.map((r) => r.json())))
//     // все JSON-ответы обработаны, users - массив с результатами
//     .then((users) => users.forEach((user) => console.log(user.name)));

// Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all,
// немедленно завершается с этой ошибкой.

// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Ошибка!")), 2000)
//     ),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).catch(alert); // Error: Ошибка!

//   Здесь второй промис завершится с ошибкой через 2 секунды. Это приведёт к немедленной ошибке в Promise.all,
//   так что выполнится .catch: ошибка этого промиса становится ошибкой всего Promise.all.

// В случае ошибки, остальные результаты игнорируются
// Если один промис завершается с ошибкой, то весь Promise.all завершается с ней,
// полностью забывая про остальные промисы в списке. Их результаты игнорируются.

// Например, если сделано несколько вызовов fetch, как в примере выше, и один не прошёл,
// то остальные будут всё ещё выполняться, но Promise.all за ними уже не смотрит.
// Скорее всего, они так или иначе завершатся, но их результаты будут проигнорированы.
