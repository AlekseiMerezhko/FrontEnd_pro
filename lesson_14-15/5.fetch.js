// Мы будем использовать метод fetch, чтобы подгрузить информацию о пользователях с удалённого сервера.

// let promise = fetch(url);

// Этот код запрашивает по сети url и возвращает промис.
// Промис успешно выполняется и в свою очередь возвращает объект response после того,
// как удалённый сервер присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.

// fetch("https://swapi.dev/api/people/")
// .then((response) => response.json())
// .then((resp) => console.log(resp));

// JSON.parse(response); === response.json()
// JSON.stringify();

// fetch("https://swapi.dev/api/people/?page=9")
//     .then((response) => response.json())
//     .then((resp) => console.log(resp));

// fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ a: 1, b: "Textual content" }),
// }).then((resp) => console.log(resp));

// (async () => {
//     const rawResponse = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ a: 1, b: "Textual content" }),
//     });
//     const content = await rawResponse.json();

//     console.log(content);
// })();

// (() => {
//     try {
//         Promise.resolve(console.log(1))
//             .then((a) => a)
//             .then((b) => {
//                 console.log("b:", b);
//                 throw 2;
//             })
//             .catch((e) => console.log(e))
//             .then((c) => console.log(c));
//         console.log(4);
//     } catch (error) {
//         console.log(5);
//     }
// })();
