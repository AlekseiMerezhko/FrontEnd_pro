//debounce
//500мс
// f(1); //<- выполнится
//не прошло 500 мс
//нет задержки
// f(2); //<- не выполниться

//trottle
//функция не должна вызываться какое то колчество времени

//500 <- пауза
// f(1)
//500 <- пауза
// f(2)
//500 <- пауза
// f(3)


// const myF = debounce(alert);
// myF("Text");

// const arr = [1,2,3,4,5,1,2,3,4,5].filter((elem, i, myArr) => i !== myArr.indexOf(elem));