// // super.method(...) вызывает родительский метод.
// // super(...) для вызова родительского конструктора (работает только внутри нашего конструктора).

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} стоит неподвижно.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} прячется!`);
//     }

//     stop() {
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//         //любая логика
//     }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

// // class Rabbit extends Animal {
// //     // генерируется для классов-потомков, у которых нет своего конструктора
//     // constructor(...args) {
//     //   super(...args);
//     // }
// //   }

class Bird {

}


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(value){
        //какая то логика
        console.log("run animal")
    }
}
class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        super(age);
        this.earLength = earLength;
    }
    run(){
        console.log("run rabbit");
        // super.run()
    }
}
class Shape{
    widyj: 
}

class Circle extends Shape{
borderRadius
}


class Cat extends Animal {
    constructor(value) {
        super();
    }

    run(){
        console.log("cat rabbit")
    }
}

// теперь работает
let rabbit = new Rabbit("Белый кролик", 10);

alert(rabbit.name); // Белый кролик
alert(rabbit.earLength); // 10



// function multiple(a) {
//     return function(b){
//         return a * b
//     }
// }

// const double = multiple.bind(null, 2)

