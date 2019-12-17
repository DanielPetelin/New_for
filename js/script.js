var array = [];

//Алгоритм, который выводит 9 цифр первые, которые равны 1, а остальные 0. 
for(var i = 0; i < 10; i++) {
    if (i == 0 || i == 9) {
        array[i] = 1;
    } else {
        array[i] = 0;
    }
}

console.log(array);

var b = [];

//Этот алгоритм будет выводить числа 1 и 0 через одного.
for(var i = 0; i < 9; i++) {
    if (i % 2 == 0) {
        b[i] = 0;
    } else {
        b[i] = 1;
    }
};

console.log(b);