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
