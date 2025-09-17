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
    this.push = function(...v) {
        for (let i = 0; i < v.length; i++) {
            this[this.length] = v[i];
            this.length++;
        }
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

    this.forEach =function (fn, thisArg) {
        for (let i = 0; i < this.length; i++) {
            fn.call(thisArg, this[i], i, this)
        }
    }

    this.concat = function(array2) {
        /* Викликається на екземпляярі масиву, отримує другий масив в аргументі і повертає новий = масив1 + масив2 */
        const result = new MyArray();
        this.forEach(el => result.push(el));
        array2.forEach(el => result.push(el));
        // for (let i = 0; i < this.length; i++) {
        //     result.push(this[i]);            
        // }
        // for (let i = 0; i < array2.length; i++) {
        //     result.push(array2[i]);            
        // }
        return result;
    }
    
    this.at = function(index) {
        if(index < 0) {
            return this[this.length + index]
        }
        return this[index]
    }

    this.fill = function(value, start=0, end = this.length) {
        if (start < 0) {
            start = this.length + start;
        }        
        if (end < 0) {
            end = this.length + end
        }
        for (let i = 0; i < this.length; i++) {
            this[i] = value;
        }
        return this
    }

    this.filter = function(filteringFunction, thisArg) {
        const result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if(filteringFunction.call(thisArg, this[i], i, this)) {
                result.push(this[i])
            }
        }
        return result
    }

    this.find = function(chekingFunction, thisArg) {
        for (let i = 0; i < this.length; i++) {
            if(chekingFunction.call(thisArg, this[i], i, this)) {
                result. this[i]
            }
        }
    }

    this.join = function(separator = ',') {
        let str = '';
        for (let i = 0; i < this.length - 1; i++) {
            str += this[i] + separator;            
        }
        str += this[this.length-1]
        return str
        }
        
    this.map = function (fn, thisArg) {
        const res = new MyArray();
        for (let i = 0; i < this.length; i++) {
            res.push(fn.call(thisArg, this[i], i, this));
        }
    }

    this.slice = function(start = 0, end = this.length) {
        if(start < 0) {
            start = this.length + start;
        }
        if (start > this.length) {
            return new MyArray();
        }
        if (end < 0) {
            end = this.length + end;
        }
        const res= new MyArray();
        for (let i = start; i < end; i++) {
            res.push(this[i])
        }
        return res;
    }

    this.sort = function(compareFunction) {
        while(flag) {
             for (let i = 0; i < this.length; i++) {
                if (compareFunction(this[i], this[i+1]) > 0) {
                        // поміняти місцями елементи
                        let temporary = this[i];
                        this[i] = this[i+1];
                        this[i+1] = temporary;
                        flag = true;
                } else {
                        // залишаємо елементи на місцях
                        flag = false;
                }
            }
        }
         return this
        // const myArr = new MyArray (2, 3, 4, 2, 1)
        //myArr.sort((a, b) => b-a)
        //myArr.sort((a, b) => b-a)
    }

}

MyArray.prototype = new MyArrayProto();

const arr = new MyArray();