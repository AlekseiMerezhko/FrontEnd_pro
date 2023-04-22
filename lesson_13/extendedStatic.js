class Animal {
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

// Наследует от Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbits = [new Rabbit("Белый кролик", 10), new Rabbit("Чёрный кролик", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

// Мы можем вызвать Rabbit.compare, при этом будет вызван унаследованный Animal.compare.

// Как это работает? Снова с использованием прототипов. 
// Как вы уже могли предположить, extends даёт Rabbit ссылку [[Prototype]] на Animal.

