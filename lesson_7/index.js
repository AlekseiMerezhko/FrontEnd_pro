const obj = {
    name: "Alex",
};

const string = "age";

obj.age = 18;
// obj["age"] = 18;
// obj[string] = 18;

const arr = ["apple", "bannana"];

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    obj[el] = el;
}

for (const elem of arr) {
    console.log(elem);
}

console.log("obj", obj);
console.log("arr", arr);

for (const elem in arr) {
    console.log(elem);
    // console.log(obj[elem]);
}

// console.log(obj);

console.log("keys", Object.keys(obj));
console.log("values", Object.values(obj));

