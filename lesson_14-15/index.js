// fetch("https://swapi.dev/api/people/")
//     .then((response) => response.json())
//     .then((resp) => {
//         arr.push(resp.results);
//     });

// const arr = ["url1", "url2"];

// const newArr = arr.map((elem) => fetch(elem));

// Promise.all(newArr)

const getUsers = async (url) => {
    const users = [];
    console.log("users ---->", users);
    try {
        const result = await fetch(url);
        console.log(result);

        const obj = await result.json();
        console.log(obj);
        // console.log(obj);
        return users;
    } catch (e) {}
};

// const users = getUsers("https://swapi.dev/api/people/");

console.log(users);

const user = [];




const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

const a = "";

const isEqual = (a, b) => a === b;

