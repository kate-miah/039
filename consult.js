const vatiable = 'a';

obj.a === obj[vatiable];

obj[1];

/*

Функції = як вони працюють?

*/

function fn(num1, num2, num3) {
    let res = (num1 + num2) - num3;
    console.log(fn);
    return res;
}

const result = fn(3, 4, 1);

function fn1() {
    console.log(arguments);
}

function fn11(...arr) { //оператор res - залишкових параметрів
    console.log(arr);
}

const fn2 = function() {
    console.log(arguments);
}

const arrow = () => {
    console.log(arguments); 
}

const arrow1 = (...arrr) => { //оператор res - залишкових параметрів

}

/*

this - це вказівник


*/

const bottle1 =  {
    maxVolume: 300,
    currentVolume: 150,
    up: function() {
        this.currentVolume += 10;
        return this.currentVolume;
    },
    down: function() {
        this.currentVolume -= 10;
        return this.currentVolume;
    }
}

function Bottle(maxVolume) {
    //Оператор new створює нову пляшку і кладе посилання на неї в this
    this.maxVolume = maxVolume;
    this.currentVolume = 0;
}

const newBottle =  new Bottle(300);

const bigBottle =  new Bottle(700);

function emptyBottle() {
    this.currentVolume = 0; // Щоби ця функція відпрацювалана потрібному об'ектіб цей об'ект треба передати їй в якості this
}

emptyBottle.apply(newBottle, []); /// викликати функцію зараз, використовуючи в якості її this об'ект newBottle

//emptyBottle.call(newBottle, arg1, arg2);

const linkToWrappedFunction = emptyBottle.bind(newBottle); /// десь потім викликаємо готову функцію
linkToWrappedFunction();