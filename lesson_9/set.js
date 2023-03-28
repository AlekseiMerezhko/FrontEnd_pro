let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);

set.add(john); //<-----
set.add(mary); //<-----

console.log();

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}

// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:

let set2 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set2) console.log(value);

// то же самое с forEach:
set2.forEach((value, i, set2) => {
    console.log(value);
});
