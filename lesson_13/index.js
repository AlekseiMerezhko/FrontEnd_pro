class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    // встроенные методы массива будут использовать этот метод как конструктор
    static get [Symbol.species]() {
        return Array;
    }
}

const arr = new PowerArray(1, 2, 3);
const arr2 = arr.map();

let sayHiMixin = {
    sayHi() {
        alert(`Привет, ${this.name}`);
    },
    sayBy(){
        //
    }
};

// использование:
class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);
