var array = [];

//Алгоритм, который выводит 9 цифр первые, которые равны 1, а остальные 0. 
//for(var i = 0; i < 10; i++) {
    //if (i == 0 || i == 9) {
        //array[i] = 1;
    //} else {
        //array[i] = 0;
    //}
//}

for(var i = 0; i < 9; i++) {
    if (i % 2 == 0) {
        array[i] = 0;
    } else {
        array[i] = 1;
    }
};

console.log(array);