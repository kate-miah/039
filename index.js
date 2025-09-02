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