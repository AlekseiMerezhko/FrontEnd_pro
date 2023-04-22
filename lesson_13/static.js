class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static filter() {}
}

// использование
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1)),
];
const obj = new Article();

console.log(obj);

// Здесь метод Article.compare стоит «над» статьями, как средство для их сравнения.
// Это метод не отдельной статьи, а всего класса.

// Другим примером может быть так называемый «фабричный» метод.

// Скажем, нам нужно несколько способов создания статьи:

// Создание через заданные параметры (title, date и т. д.).
// Создание пустой статьи с сегодняшней датой.
// …или как-то ещё.

// Первый способ может быть реализован через конструктор.
// А для второго можно использовать статический метод класса.

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {
        // помним, что this = Article
        return new this("Сегодняшний дайджест", new Date());
    }
}

const newObj = new Article();
newObj.createTodays();

let article = Article.createTodays();

// alert(article.title); // Сегодняшний дайджест

// Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно вызывать Article.createTodays().
// Ещё раз, это не метод одной статьи, а метод всего класса.

// Статические методы также используются в классах, относящихся к базам данных,
// для поиска/сохранения/удаления вхождений в базу данных, например:

// предположим, что Article - это специальный класс для управления статьями
// статический метод для удаления статьи по id:
// Article.remove({ id: 12345 });

// Статические методы недоступны для отдельных объектов
// Статические методы могут вызываться для классов, но не для отдельных объектов.

// Например. такой код не будет работать:

// ...
// article.createTodays(); /// Error: article.createTodays is not a function

// class Animal {}
// class Rabbit extends Animal {}

// // для статики
// alert(Rabbit.__proto__ === Animal); // true

// // для обычных методов
// alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
