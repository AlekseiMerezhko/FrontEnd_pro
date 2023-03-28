function say(phrase) {
    console.log(this.name + ": " + phrase);
}

let user = { name: "John" };

// 'user' становится 'this', и "Hello" становится первым аргументом
say.call(user, "Hello"); // John: Hello
say.apply(user, ["Hello array", "new phrase"]);

// say();
const f = say.bind(user, "Bind");
// say();
// f();

//Delay decorator
function delay(callback, ms) {
    return function () {
        setTimeout(() => callback.apply(this, arguments), ms); // () => {} мы передаем this и arguments хотя у стрелочной функции ее нет
    };
}
// Обратите внимание, как здесь используется функция-стрелка.
// Как мы знаем, функция-стрелка не имеет собственных this и arguments,
// поэтому f.apply(this, arguments) берет this и arguments из обёртки.

// Если мы передадим обычную функцию, setTimeout вызовет её без аргументов и с this=window
// (при условии, что код выполняется в браузере).

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс


[3,2,3,2,5,6,7,3,2]
//3 - 2
//3 - 3



