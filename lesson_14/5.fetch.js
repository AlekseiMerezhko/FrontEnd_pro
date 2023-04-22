// Мы будем использовать метод fetch, чтобы подгрузить информацию о пользователях с удалённого сервера.

// let promise = fetch(url);

// Этот код запрашивает по сети url и возвращает промис.
// Промис успешно выполняется и в свою очередь возвращает объект response после того,
// как удалённый сервер присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.

fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((resp) => console.log(resp));

// JSON.parse(response); === response.json()
// JSON.stringify();

fetch("https://swapi.dev/api/people/?page=9")
    .then((response) => response.json())
    .then((resp) => console.log(resp));
