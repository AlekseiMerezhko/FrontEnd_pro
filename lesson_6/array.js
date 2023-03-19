Array.isArray([]); //true
Array.isArray({}); //false


const array = [1,5,8,23,7,4,66,8,23,65,9];

const sortedArray = array.sort((elem1, elem2) => {
    if(elem1 > elem2){
        return -1
    }else if(elem1 < elem2){
        return 1
    }else{
        return 0
    }
});

// const sortedArray2 = array.sort((a, b) => a - b);



console.log(sortedArray)

const name = "Alex";

const name2 = name.split("") //Разбить строку на массив

name2.join("") //слбрать массив с троку



// const sortList = (arr, value) => {

// }


// const newList = sortList([1,2,3,4], false)
[{value: []}]
[1,2,3,4,5]

// const array = [1,5,8,23,7,4,66,8,23,65,9];
const value = array.reduce((value1, value2) => {
    console.log("value1", value1);
    console.log("valu2", value2);
    console.log("--------------");
    return value1 + value2
}, 0);

console.log(value)

// [func1, func2, func3].reduce((a, b) => {
//     return a.push()
// }, [])

// func1(func2(func3(value)))



//ДЗ
// array.map(elem => {
//     const newStr = "$23523423".replace()
//     return {
//         ...elem,
//         balance: parseInt(newStr)
//     }
// })