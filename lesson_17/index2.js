const el = document.createElement("div");

const button = document.createElement("button");
const button2 = document.createElement("button");

button.innerHTML = "Some button";
button2.innerHTML = "Some button 2";

const body = document.querySelector("body");

body.appendChild(button);
body.appendChild(button2);

body.appendChild(el);

console.dir(el);
button.onclick = () => {
    el.classList.toggle("some");
};
button2.onclick = () => {
    el.classList.toggle("asd");
};
