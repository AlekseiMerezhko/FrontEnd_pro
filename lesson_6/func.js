const shop1 = {
    name: "Shop1",
    balance: 10000,
    city: "Kh"
};
const shop2 = {
    name: "Shop2",
    balance: 40000,
    city: "Dn"
};
function checkShop(shop1, shop2) {
    const {name: nameShop1} = shop1;
    const {name: nameShop2} = shop2;

    // console.log(city)
    // console.log(balance);
    console.log(nameShop1);
    console.log(nameShop2);


};

// checkShop(shop1, shop2);
// console.log(user)





// function createUser(userName = "Username", age = 18, city = "KH") {
//     return {
//         userName,
//         age,
//         city
//     }
// }

// const createUser = function(){

// }

// const createUser = (name, age, city) => {
//     return {
//             name,
//             age,
//             city
//         }
// };
const createUser = (name, age, city) => ({name,age,city});


const user = createUser();

const doubleN = (number) => number * 2;


