class CoffeeMachine {
    #waterLimit = 200;



    #checkWater(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }
    someMethod(){
        waterLimit
    }
}







let coffeeMachine = new CoffeeMachine();

// снаружи  нет доступа к приватным методам класса
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error

// Приватные поля не конфликтуют с публичными.
// У нас может быть два поля одновременно – приватное #waterAmount и публичное waterAmount.
class CoffeeMachine {
    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
// alert(machine.#waterAmount); // Error

// В отличие от защищённых, функциональность приватных полей обеспечивается самим языком. Это хорошо.

// Но если мы унаследуем от CoffeeMachine, то мы не получим прямого доступа к #waterAmount.
// Мы будем вынуждены полагаться на геттер/сеттер waterAmount:

class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }
  }

// Во многих случаях такое ограничение слишком жёсткое.
// Раз уж мы расширяем CoffeeMachine,
// у нас может быть вполне законная причина для доступа к внутренним методам и свойствам.
// Поэтому защищённые свойства используются чаще, хоть они и не поддерживаются синтаксисом языка.
