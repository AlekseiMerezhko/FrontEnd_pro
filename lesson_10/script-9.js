//1)Написать функцию которая будет принимать массив в качестве аргумента.
//  Массив типа
//  const arr = [ [ [ [8] ] ] ] - вложенность может быть любой, в конце всегда цифра
//  И возвращает ФАКТОРИАЛ этого числа.

// const arr = [ [ [ [8] ] ] ];

// const fact = (arr) => {
//     console.log(arr);
//     if (arr === 1) return (arr)
//     return arr * fact(arr - 1);
// };
// fact(arr);

// 2)Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

// let calculator = {
//     sum() {
//         return this.nameA + this.nameB;
//     },

//     mul() {
//         return this.nameA * this.nameB;
//     },

//     read() {
//         this.nameA = +prompt("ведіть число А", 0);
//         this.nameB = +prompt("ведіть число B", 0);
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let read = {
    nameA: +prompt("ведіть число А", 0),
    nameB: +prompt("ведіть число B", 0),
};

let calculator = {
    

    sum() {
        return this.nameA + read.nameB;
    },

    mul() {
        return read.nameA * read.nameB;
    },
};

console.log(read);
alert(calculator.sum().bind(read));
alert(calculator.mul());
