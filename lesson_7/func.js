// const createObj = function(params){
//     return {params}
// }

// const createObj = (params) => ({params})

//2

// function createObj(param1, ...args) {
//     console.log(param1);
//     //Old code, note usefull
//     // const args = arguments;
//     //Good code
//     console.log(args);
//     // return {params}
// }

// createObj(1, 2, 3, 4, 5, 56);

//3
// function createObj(callback, ...args) {
//     args.forEach((elem) => callback(elem));
//     return {}
// }

// createObj((string) => string.toUpperCase(), "Alex", "Bob", "Dima");

function counterCreator() {
    let value = 0;
    function someFunc() {
        return (value += 1);
    }
    return someFunc;
}

const counter1 = counterCreator();

const counter2 = counterCreator();

const counter3 = counterCreator();

// console.log(counterCreator());
console.log(counter1());

// console.log(counterCreator());

// function createUser() {
//     const name = "Alex";
//     return { name };
// }
// const obj = createUser();
// const obj2 = createUser();

function multiplierCreator(a) {
    return function (b) {
        return a * b;
    };
}

// const multiplierCreator = (a) => (b) => a * b;

const double = multiplierCreator(2, 4);

double(4); // 8;

const triple = multiplierCreator(3);

triple(3); // 9



const arr = [1,2,3,4,5].reduce((prev,next) => prev + next, 0);


var a = 0;
const setA = () => a;