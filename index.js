'use strict'

/* Контекст */

const obj = {
    key: 'value',
    method: function() {
        console.log(`key - &{this.key}`);
    }
}

function test() { //Function declaration 
    console.log(this);
    /* 
    За условием 'use strict' this -> undefind
    без - глобальные объект Windw
    */
}

test(); //Window - объективное представление всего браузера

const fn = function() {
    console.log(this);
    /* 
    За условием 'use strict' this -> undefind
    без - глобальные объект Windw
    */
}

fn();

const arrow = () => {
        console.log(this);
        /* В стрелочных функциях this указывает на контекст, в котором функция была создана */
}

arrow();

const newspaper = {
    title: 'Our super-newspaper',
    articles: [{
        author: 'John Dow',
        date: 19-10-2023,
        text: 'lorem ipsum'
    }, {
        author: 'Jane Dow',
        date: 19-10-2023,
        text: 'dolor sit'
    }, {
        author: 'Rick Dow',
        date: 19-10-2023,
        text: 'amet amen'
    }, {
        author: 'ole Dow',
        date: 19-10-2023,
        text: 'lorem ipsum'
    }, {
        author: 'Nick Dow',
        date: 19-10-2023,
        text: 'ipsum loren'
    }], 
    /*    showArticles: function() {
        this.articles.forEach((currentArticle) => {
            console.log(`${this.title} --- ${currentArticle.author} - ${currentArticle.text}`);
        })
    }
     */
    showArticles: function() {
        this.articles.forEach(show.bind(this)); // this => nwspaper
    }
}

function show(currentArticle) {
    console.log(`${this.title} --- ${currentArticle.author} - ${currentArticle.text}`);
}

// Передача контекста

const auto = {
    model: 'BMW',
    speed: 150
}
function sayVxh(a, b) {
    console.log(`${this.model} делает вжжж со скоростью ${this.speed}`);
    console.log('А тем временем a+b = ', a+b)
}
sayVxh.apply(auto, [2, 3]); // вызивает функцию с оьъектом auto  в качестве this
sayVxh.call(auto, 4, 5);

/* 
apply(this, [argument]) - метод функции, который вызывает функцию, передает ее в качестве this первым аргументом и второй аргумент - масив - предается параметрами функции

call(this, arg1, arg2, arg3, ...) - метод функции, который вызывает функцию, передает ее в качестве this первым аргументом, все остальные аргуенты после первого (поштучно) передает параметрами функии

*/

const wrappedFunction = sayVxh.bind(auto) // оборачивает вызов йункции в контексте, возвращает ссылкку (посилання) на готовую к работе функцию, которой this = auto 

//wrappedFunction(5,6);


// Practice
/*const user = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    favoriteFilms: [{
        name: 'Wild Wild West',
        date: 30-06-1999,
    }, {
        name: 'Matrix',
        date: 30-03-1999,
    }, {
        name: 'The Lake House',
        date: 16-06-2006,
    }, {
        name: 'The Notebook',
        date: 25-06-2004,
    }],

    showMyMovies: function() {
        this.favoriteFilms.forEach((currentFilm) => {
            console.log(`${this.name} любить ${currentFilm.name}`);
        })
    }
}
function showFilms() {
    this.favoriteFilms.forEach((currentFilm) => {
        console.log(`${this.name} любить ${currentFilm.name}`);
    })
}


const userShowFilms = showFilms.bind(user);
userShowFilms();

*/
//Стрелочные функции

function fnDeclare(a, b, c) {
    console.dir(arguments)
    //Вариант 1 - проще
    /* пройтись обчныи циклом и найти сумму всех элементов в arguments

    let sum = 0;
    for (let i =0; i < arguments.lenght; i++) {
    sum += arguments[i]
    }
    return sum;
    */
    
    //Вариант 2 - переделать arguments в обычный Array и воспользоваться метолдом массива

    return Array.from(arguments).reduce((accum, value) => accum+value, 0);
}

//Task

function fnJoin() {
    return Array.from(arguments).join(' ');
}


 const arrFn = (...args) => args.reduce((accum, value) => accum+value, 0);

 // у стрелочных функций не работают arguents
 // оператор rest - остаточные (залишковi) параметри - ...

 function restArr(...arrayOfArgs) {
    console.log(arrayOfArgs);
 }

// 1.

 const getSentence = (...args) => args.join(' ');
// 2. 

const numbs= [1, 2, 5, 3, 77, 34, 90];

Math.max(...numbs);