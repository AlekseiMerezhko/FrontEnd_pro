// class CoffeeMachine {
//     waterAmount = 0; // количество воды внутри

//     constructor(power) {
//         this.power = power;
//         alert(`Создана кофеварка, мощность: ${power}`);
//     }
// }

// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// // добавляем воды
// coffeeMachine.waterAmount = 200;

// console.log(coffeeMachine);

// Прямо сейчас свойства waterAmount и power публичные.
// Мы можем легко получать и устанавливать им любое значение извне.

// Давайте изменим свойство waterAmount на защищённое,
// чтобы иметь больше контроля над ним. Например, мы не хотим, чтобы кто-либо устанавливал его ниже нуля.

// Защищённые свойства обычно начинаются с префикса _.

// _waterAmount

// class CoffeeMachine {
//     _waterAmount = 0;

//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this._waterAmount = value;
//     }

//     get waterAmount2() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }
    
// }

// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine._power = 212412452634265
// // устанавливаем количество воды // Error: Отрицательное количество воды

// Теперь доступ под контролем, поэтому указать воду ниже нуля не удалось.

// Свойство только для чтения «power»

// Для этого нам нужно создать только геттер, но не сеттер:

class CoffeeMachine {
    // ...

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}

// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);


// alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

// coffeeMachine.power = 25; // Error (no setter)

// Но в большинстве случаев использование функций get.../set... предпочтительнее:

class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }
}

// const coffe = new CoffeeMachine()
// coffe._waterAmount = 200;

// new CoffeeMachine().setWaterAmount(100);

// Защищённые поля наследуются
// Если мы унаследуем class MegaMachine extends CoffeeMachine,
// ничто не помешает нам обращаться к this._waterAmount или this._power из методов нового класса.

// Таким образом, защищённые поля, конечно же, наследуются.
// В отличие от приватных полей, в чём мы убедимся ниже.
