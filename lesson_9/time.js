// setTimeout(() => {
//     const ref = //
// }, 4);

// const intervalId = setInterval(() => {
//     console.log("first");
// }, 500);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 2000);

const obj = {
    name: "Alex",
    sayHi() {
        console.log(`Hi ${this.name}`);
    },
};

setTimeout(obj.sayHi, 100); // потерят this

setTimeout(() => {
    obj.sayHi();
}, 100); //Замыкание

