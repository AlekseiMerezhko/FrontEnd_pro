(function (param1 = "Alex", param2) {
    var currentName = param1;
    console.log(currentName);
})("SomeName");


// const array = [[[[[2]]]]];

// console.log(currentName);
// Array.isArray(array);

const fact = (n) => {
    console.log(n);
    if (n === 1) return n;
    return n * fact(n - 1);
};

// fact(5);
//Код

//n = 5
// ----- 1
// return n * fact(n - 1) * fact(n - 2) * fact(n - 3) * fact(n - 4) * 1;

//n = 4
// ----- 2

// n * n * fact(n - 1);

//n = 3
// ----- 3

// n * n * n * n * 1

