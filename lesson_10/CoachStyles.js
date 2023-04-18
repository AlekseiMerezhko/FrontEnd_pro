var helloList = $("body") // <body></body>
    .add("div") // <body><div></div></body>
    .add("ul") // <body><div><ul></ul></div></body>
    .add("li", "Hello") //<body><div><ul><li>Hello</li></ul></div></body>
    .render();

console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>

// Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = $("body") //<body></body>
    .add("div") //<body><div></div></body>
    .render();

console.log(bodyDiv); //<body><div></div></body>
// Для выполнивших все задания
document.write(helloList);


