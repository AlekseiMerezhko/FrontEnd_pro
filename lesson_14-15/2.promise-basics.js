// let promise = new Promise((resolve, reject) => {

//     const a = 1;
//     resolve(a);
//     // функция-исполнитель (executor)
// });

// Функция, переданная в конструкцию new Promise, называется исполнитель (executor).
// Когда Promise создаётся, она запускается автоматически. Она должна содержать «создающий» код,
// который когда-нибудь создаст результат.

// Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript.
// Наш код – только внутри исполнителя.

// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно»)
// при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.

// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value)
// или на error при вызове reject(error).

// let promise2 = new Promise(function (resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise

//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve("done"), 1000);
// });

// promise2.then((resp) => console.log(resp));

// console.log(promise2);

// Мы можем наблюдать две вещи, запустив код выше:

// Функция-исполнитель запускается сразу же при вызове new Promise.
// Исполнитель получает два аргумента: resolve и reject — это функции, встроенные в JavaScript,
// поэтому нам не нужно их писать. Нам нужно лишь позаботиться, чтобы исполнитель вызвал одну из них по готовности.

// Спустя одну секунду «обработки» исполнитель вызовет resolve("done"), чтобы передать результат

// let promise3 = new Promise(function (resolve, reject) {
//     // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// задача выполнена с ошибкой

// исполнитель выполняет задачу (что-то, что обычно требует времени), затем вызывает resolve или reject,
// чтобы изменить состояние соответствующего Promise

// Может быть что-то одно: либо результат, либо ошибка

// Исполнитель должен вызвать что-то одно: resolve или reject.
// Состояние промиса может быть изменено только один раз.

// Все последующие вызовы resolve и reject будут проигнорированы:

// let promise4 = new Promise(function (resolve, reject) {
//     resolve("done");

//     reject(new Error("…")); // игнорируется
//     setTimeout(() => resolve("…")); // игнорируется
// });

// Идея в том, что задача, выполняемая исполнителем, может иметь только один итог: результат или ошибку.

// Также заметим, что функция resolve/reject ожидает только один аргумент (или ни одного).
// Все дополнительные аргументы будут проигнорированы.

// Вызывайте reject с объектом Error
// В случае, если что-то пошло не так, мы должны вызвать reject.
// Это можно сделать с аргументом любого типа (как и resolve), но рекомендуется использовать объект
// Error (или унаследованный от него).

// Обычно исполнитель делает что-то асинхронное и после этого вызывает resolve/reject, то есть через какое-то время.
// Но это не обязательно, resolve или reject могут быть вызваны сразу:

// let promise5 = new Promise(function (resolve, reject) {
//     // задача, не требующая времени
//     reject(new Error); // мгновенно выдаст результат: 123
// });

// Это может случиться, например, когда мы начали выполнять какую-то задачу, но тут же увидели,
// что ранее её уже выполняли, и результат закеширован.

// Такая ситуация нормальна. Мы сразу получим успешно завершённый Promise.

// Свойства state и result – внутренние
// Свойства state и result – это внутренние свойства объекта Promise и мы не имеем к ним прямого доступа.
// Для обработки результата следует использовать методы .then/.catch/.finally.

//Then

// Наиболее важный и фундаментальный метод – .then.

// promise5.then(
//     function (result) {
//         console.log(result)
//         /* обработает успешное выполнение */
//     },
//     function (error) {
//         /* обработает ошибку */
//     }
// );

// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние
// «выполнен успешно», и получает результат.

// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние
// «выполнен с ошибкой», и получает ошибку.

// let promise6 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });

// // resolve запустит первую функцию, переданную в .then
// promise6.then(
//     (result) => alert(result), // выведет "done!" через одну секунду
//     (error) => alert(error) // не будет запущена
// );

// Выполнилась первая функция.
// А в случае ошибки в промисе – выполнится вторая:

// let promise7 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// reject запустит вторую функцию, переданную в .then
// promise7.then(
//     (result) => alert(result), // не будет запущена
//     (error) => alert(error) // выведет "Error: Whoops!" спустя одну секунду
// );

// Если мы заинтересованы только в результате успешного выполнения задачи,
// то в then можно передать только одну функцию:

let promise8 = new Promise((resolve) => {
    // setTimeout(() => resolve("done!"), 1000);
    //Какой то запрос
    // resolve(1);
});

// promise8
//     .then((resp) => {
//         return Array.isArray(resp) ? resp.map() : []
//     })
//     .then()
//     .catch();

promise8
    .then((resp) => JSON.parse(resp))
    .then((users) => users.map())
    .catch((err) => {
        //показать пользователю поп ап с ошибкой
        //отправить логи ошибки
        console.log(err);
    })
    .finally(() => {
        //убрать лоадер
    }); 

// catch
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента:
// .then(null, errorHandlingFunction). Или можно воспользоваться методом
// .catch(errorHandlingFunction), который сделает то же самое:

let promise9 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise9.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду

// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).

// По аналогии с блоком finally из обычного try {...} catch {...}, у промисов также есть метод finally.

// Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае,
// когда промис завершится: успешно или с ошибкой.

// Идея finally состоит в том, чтобы настроить обработчик для выполнения очистки/доведения
// после завершения предыдущих операций.

// Например, остановка индикаторов загрузки, закрытие больше не нужных соединений и т.д.

// new Promise((resolve, reject) => {
//     /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
//   })
//     // выполнится, когда промис завершится, независимо от того, успешно или нет
//     .finally(() => остановить индикатор загрузки)
//     // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
//     .then(result => показать результат, err => показать ошибку)

// Есть важные различия:

// Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис.
// И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.

// Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.

// Например, здесь результат проходит через finally к then:

new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .then((result) => alert(result)); // <-- .then показывает "value"

// А здесь ошибка из промиса проходит через finally к catch:

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .finally(() => alert("Промис завершён")) // срабатывает первым
//   .catch(err => alert(err));  // <-- .catch показывает ошибку

// Обработчик finally также не должен ничего возвращать. Если это так, то возвращаемое значение молча игнорируется.

// Единственным исключением из этого правила является случай, когда обработчик finally выдает ошибку.
// Затем эта ошибка передается следующему обработчику вместо любого предыдущего результата.
