class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} стоит неподвижно.`);
    }
}

let animal = new Animal("Мой питомец");
console.log("animal", animal);

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}

let rabbit = new Rabbit("Белый кролик");
console.log("rabbit", rabbit);
rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!
