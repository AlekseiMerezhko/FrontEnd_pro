let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:

// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"

// console.log(map); // 3

//Map может использовать объекты в качестве ключей.

let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
// console.log(visitsCountMap);
// console.log(visitsCountMap.get(john)); // 123

// Перебор Map
// Для перебора коллекции Map есть 3 метода:
console.log(map.keys()); // – возвращает итерируемый объект по ключам,
console.log(map.values()); // – возвращает итерируемый объект по значениям,
console.log(map.entries()); //– возвращает итерируемый объект по парам вида [ключ, значение],
// этот вариант используется по умолчанию в for..of.

const obj = { name: "Alex" };
const { name } = obj;
console.log(name); //Alex

// const arr = ["Apple", "Banana"];
// const [apple, banana] = arr;
//const apple = arr[0]
// console.log(apple); //Apple
// console.log(banana); //Banana

for (const item of map) {
    const [key, value] = item;
    console.log(item);
    console.log(key);
    console.log(value);
}
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
]);

// перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//     // то же самое, что и recipeMap.entries()
//     console.log(entry); // огурец,500 (и так далее)
// }

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

//Кэширование

//10s
function slow(x) {
    //5
    // здесь могут быть ресурсоёмкие вычисления
    // alert(`Called with ${x}`);
    return x; //10
}

function cachingDecorator(func) {
    let cache = new Map();
    //let number = 0

    return function (x) {
        if (cache.has(x)) {
            // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

slow = cachingDecorator(slow);
// const double = multiple(2)
// double()

console.log(slow(1)); // slow(1) кешируем
console.log("Again: " + slow(1)); // возвращаем из кеша

console.log(slow(2)); // slow(2) кешируем
console.log("Again: " + slow(2)); // возвращаем из кеша

