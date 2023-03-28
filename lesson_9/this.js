function Calc(number) {
    this.number = number;
    this.add = function (param) {
        this.number += param;
        return this;
    };
    this.minus = function (param) {
        this.number -= param;
        return 5;
    };
    this.getValue = function () {
        return this.number;
    };
}

const calc = new Calc(1);
calc.add(5).minus(2).add(8);
