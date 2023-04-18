//----------------------------------------------------------------------
// let animal = {
//     eats: true,
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let whiteRabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// Rabbit.prototype = { type: "black" };

// let blackRabbit = new Rabbit("Black Rabbit"); //  rabbit.__proto__ ==  { type: "black" }

// alert(rabbit.eats); // true
//Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
//  "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

//----------------------------------------------------------------------

// function Rabbit() {}
/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/

// function Rabbit() {}
// // по умолчанию:

// // Rabbit.prototype = { constructor: Rabbit }

// alert(Rabbit.prototype.constructor == Rabbit); // true

// function Rabbit() {}

// //1
// // Rabbit.prototype = {
// //   jumps: true
// // };

// //2
// Rabbit.prototype.jumps = true;

// //3
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// };

// let rabbit = new Rabbit();

// alert(rabbit.constructor === Rabbit); // true

// let obj = {

// };
// obj.name
// console.log(obj);

// alert(obj.__proto__ === Object.prototype); // true

// obj.toString === obj.__proto__.toString === Object.prototype.toString

// let arr = [1, 2, 3];

// String.prototype.show = function () {
//     console.log("--->>>>>>>>");
// };

// let str = "A";

// str.show();

let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
    // join: Array.prototype.join
};

obj.__proto__ = Array.prototype; 

_someValue

alert(obj.join(",")); // Hello,world!


// Object.create(proto, [descriptors]) 
// // – создаёт пустой объект со свойством [[Prototype]], указанным как proto, 
// // и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) 
// // – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) 
// // – устанавливает свойство [[Prototype]] объекта obj как proto.

// const user = Object.create();
// const user = {};



Object.keys(obj) / Object.values(obj) / Object.entries(obj) 
// возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
Object.getOwnPropertySymbols(obj) 
// возвращает массив всех собственных символьных ключей.
Object.getOwnPropertyNames(obj) 
// возвращает массив всех собственных строковых ключей.
Reflect.ownKeys(obj) 
// возвращает массив всех собственных ключей.
obj.hasOwnProperty(key)
//возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.