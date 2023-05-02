// const myFunc = () => {
//     console.log("myFunc");
// };

// const user = "Alex";

// // console.log(module);

// // module.exports = { myFunc, asd: "asdas" };

// export { myFunc, user };

const filmsUrls = [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
];

const planetUrls = new Set();

const fetchPlanets = async (filmUrl) => {
    const response = await fetch(filmUrl);
    const film = await response.json();
    const planetUrls = film.planets;
    for (const planetUrl of planetUrls) {
        await fetchPlanetName(planetUrl);
    }
};

const fetchPlanetName = async (planetUrl) => {
    try {
        const response = await fetch(planetUrl);
        const planet = await response.json();
        planetUrls.add(planet.name);
    } catch (error) {
        console.error(error);
        console.log("Fetching starship...");
        await fetchStarship();
    }
};

const fetchStarship = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/starships/9/");
        const starship = await response.json();
        console.log(`${starship.name} все уничтожил.`);
    } catch (error) {
        console.error(error);
    }
};

const fetchAllPlanets = async () => {
    try {
        const fetches = filmsUrls.map((filmUrl) => fetchPlanets(filmUrl));
        await Promise.all(fetches);
        console.log(Array.from(planetUrls));
    } catch (error) {
        console.error(error);
    }
};

console.log(fetchAllPlanets());
