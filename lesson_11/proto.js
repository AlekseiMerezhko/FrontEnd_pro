// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
// };

// let someRab = {

// }

// rabbit.name = "Rabbit";

// rabbit.__proto__ = animal;
// someRab.__proto__ = rabbit;
// animal.__proto__ = someRab;

// console.log(rabbit);
// console.log(rabbit.eats);

//__proto__ это ссылка на prototype !!!
//__proto__ для обьектов prototype для функций

// Array.__proto__ = {

// }

// const arr = [].filter();
// const arr2 = [];
// const arr3 = [];

// Прототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.

// let animal = {
//     eats: true,
//     walk() {
//         console.log("!!!");
//         /* этот метод не будет использоваться в rabbit */
//     },
// };

// let rabbit = {
//     __proto__: animal,
// };
// // rabbit.__proto__ = animal;

// rabbit.walk = function () {
//     alert("Rabbit! Bounce-bounce!");
// };

// console.log(rabbit);
// rabbit.walk(); // Rabbit! Bounce-bounce!

//Полиморфизм - переопределение принципа действия родительского метода

let animal = {
    type: "animal",
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    },
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal,
};
let cat = {
    name: "Some cat",
    __proto__: animal,
};

// модифицирует rabbit.isSleeping
// console.log(rabbit);
for (const key in rabbit) {

    rabbit.hasOwnProperty(key);
    Object.hasOwnProperty.call(rabbit, key);

    if (Object.hasOwnProperty.call(rabbit, key)) {
        const element = rabbit[key];
        console.log(element);
    }
    // console.log("key", key);
}

// console.log(Object.keys(rabbit));
// rabbit.sleep();
// alert(rabbit.isSleeping); // true

// alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)


