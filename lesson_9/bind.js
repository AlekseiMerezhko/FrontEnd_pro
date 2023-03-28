// const obj = {
//     name: "Alex",
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     },
// };

// setTimeout(obj.sayHi, 100);

let user1 = {
    firstName: "Alex",
};
let user2 = {
    firstName: "Bob",
};

function func() {
    console.log(this.firstName);
}

// func();

let funcUser1 = func.bind(user1);
let funcUser2 = func.bind(user2);

// funcUser1();
// funcUser2();

let user = {
    firstName: "Alex",
    sayHi() {
        console.log(`Привет, ${this.firstName}!`);
    },
};

let sayHi = user.sayHi.bind(user);

sayHi();

setTimeout(sayHi, 1000);

//Привязка аргументов
// let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a, b) {
    return a * b;
}


let double = mul.bind(null, 2);

alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10


