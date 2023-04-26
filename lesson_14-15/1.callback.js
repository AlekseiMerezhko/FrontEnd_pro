//Asymc Func -- 1

// function loadScript(src) {
//     let script = document.createElement("script");
//     script.src = src;
//     document.head.append(script);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");

// loadScript('/my/script.js');

//Adync func with callback -- 2

// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// loadScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",

//     (script) => {
//         console.log(`Здорово, скрипт ${script.src} загрузился`);
//         console.dir(_); // функция, объявленная в загруженном скрипте
//     }
// );



//Callback inside callback

// loadScript("/my/script.js", function (script) {
//     alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

//     loadScript("/my/script2.js", function (script) {
//         alert(`Здорово, второй скрипт загрузился`);

//     });
// });

//Errors

// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () =>
//         callback(new Error(`Не удалось загрузить скрипт ${src}`));

//     document.head.append(script);
// }

// loadScript("/my/script.js", function (error, script) {
//     if (error) {
//         // обрабатываем ошибку
//     } else {
//         // скрипт успешно загружен
//     }
// });

// Первый аргумент функции callback зарезервирован для ошибки.
// В этом случае вызов выглядит вот так: callback(err).

// Второй и последующие аргументы — для результатов выполнения.
// В этом случае вызов выглядит вот так: callback(null, result1, result2…).

// loadScript("1.js", function (error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript("2.js", function (error, script) {
//             if (error) {
//                 handleError(error);
//             } else {
//                 // ...
//                 loadScript("3.js", function (error, script) {
//                     if (error) {
//                         handleError(error);
//                     } else {
//                         // ...и так далее, пока все скрипты не будут загружены (*)
//                     }
//                 });
//             }
//         });
//     }
// });
// Мы загружаем 1.js. Продолжаем, если нет ошибок.
// Мы загружаем 2.js. Продолжаем, если нет ошибок.
// Мы загружаем 3.js. Продолжаем, если нет ошибок. И так далее (*).

//------------

// loadScript("1.js", step1);

// function step1(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript("2.js", step2);
//     }
// }

// function step2(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...
//         loadScript("3.js", step3);
//     }
// }

// function step3(error, script) {
//     if (error) {
//         handleError(error);
//     } else {
//         // ...и так далее, пока все скрипты не будут загружены (*)
//     }
// }
