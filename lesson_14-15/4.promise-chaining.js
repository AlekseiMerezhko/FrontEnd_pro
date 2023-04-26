function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Ошибка загрузки скрипта ${src}`));

        document.head.append(script);
    });
}

// у нас есть последовательность асинхронных задач, которые должны быть выполнены одна за другой.
// Например, речь может идти о загрузке скриптов. Как же грамотно реализовать это в коде?

// Промисы предоставляют несколько способов решения подобной задачи.

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
})
    .then(function (result) {
        // (**)
        alert(result); // 1
        return result * 2;
    })
    .then(function (result) {
        // (***)
        alert(result); // 2
        return result * 2;
    })
    .then(function (result) {
        alert(result); // 4
        return result * 2;
    });

// Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков .then.

// Поток выполнения такой:

// Начальный промис успешно выполняется через 1 секунду (*),
// Затем вызывается обработчик в .then (**).
// Возвращаемое им значение передаётся дальше в следующий обработчик .then (***)
// …и так далее.

// Всё это работает, потому что вызов promise.then тоже возвращает промис,
// так что мы можем вызвать на нём следующий .then.

// Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего промиса
// и передаётся в следующий .then.

// Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису.
// Но это не цепочка.

// Например:

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function (result) {
    alert(result); // 1
    return result * 2;
});

loadScript("some-script-1") //one
    .then((script) => loadScript("some-script-2")) //two
    .then((script) => loadScript("some-script-3")) //three
    .then((script) => {
        // скрипты загружены, мы можем использовать объявленные в них функции
        one();
        two();
        three();
    });
