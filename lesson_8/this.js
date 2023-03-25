// "use strict";

// somename = "asdasd";

const user = {
    name: "Alex",
    age: 18,
    // sayHi: () => {
    //     console.log(this);
    // },

    sayHi: () => {
        const obj = {
            someFunc() {
                console.log(this);
            },
        };
        return obj;

        // console.log(this);
        // const someFunc = () => {

        // };
    },
};
// user.sayHi = function () {
//     console.log("Hi");
// };
user.sayHi().someFunc();

const admin = {
    name: "admin",
    age: 22,
};
// function sayHi() {
//     console.log(this);
// }

// sayHi();

// user.sayHi = sayHi;
// admin.sayHi = sayHi;
