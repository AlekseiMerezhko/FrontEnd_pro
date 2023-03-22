const newObj = {
    price: 25,
    size: {
        weight: 250,
    },
};

const clone1 = Object.assign({}, newObj, { some: "blblblblblb" });
const clone2 = { ...newObj };

console.log("clone1", clone1);

const wrongClone = newObj;
const trueClone = JSON.parse(JSON.stringify(newObj));

// console.log("1", wrongClone === newObj);

console.log("2", trueClone.size === newObj.size);
console.log("3", trueClone.size === newObj.size);

