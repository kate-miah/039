const obj = {
    0: 1,
    1: 'a',
    2: 45,
    3: 123, 
    length:4
}

function MyArray(...argums) {
    // new  создает пустой {} и ложит его в this
    this.length = 0;for (let i = 0;  i < argums.length; i++) {
        this.push(argums[i]);
    }

}

function MyArrayProto() {
    this.push = function(v) {
        this[this.length] = v;
        this.length++;
        return this.length  
    }

    this.pop = function() {
        //взять последний елемент, удалить его
        let temporary = this[this.length - 1];
        delete this[this.length - 1]
        // уменьшить длину на один
        this.length--;
        return temporary;
    }

    this.forEach =function (fn) {
        for (let i = 0; i < array.length; i++) {
            fn(this[i]);
        }
    }
}

MyArray.prototype = new MyArrayProto();

const arr = new MyArray();