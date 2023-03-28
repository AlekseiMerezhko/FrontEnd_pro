const obj = {};

// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log("Меня зовут: " + this.name);
//     };
// }

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(someAge) {
        console.log("Меня зовут: " + this.name, someAge);
    }
}

// const obj = {
//     name: "Alex",
// };


const user1 = new User("Alex", 18, "Kh");
const user2 = new User("Bob", 128, "Kh");

console.log(user1.sayHi("22"));
console.log(user2);


// JavaScript предоставляет функции-конструкторы для множества встроенных объектов языка:
// таких как Date, Set, и других.
