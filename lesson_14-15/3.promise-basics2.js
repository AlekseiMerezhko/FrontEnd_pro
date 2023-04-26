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

let promise = loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
    (script) => alert(`${script.src} загружен!`),
    (error) => alert(`Ошибка: ${error.message}`)
);

promise.then((script) => alert("Ещё один обработчик..."));



// Промисы

// Промисы позволяют делать вещи в естественном порядке. Сперва мы запускаем loadScript(script), 
// и затем (.then) мы пишем, что делать с результатом.

// Мы можем вызывать .then у Promise столько раз, сколько захотим. 
 

// Колбэки

// У нас должна быть функцияcallback на момент вызова loadScript(script, callback). 
// Другими словами, нам нужно знать что делать с результатом до того, как вызовется loadScript.

// Колбэк может быть только один.
