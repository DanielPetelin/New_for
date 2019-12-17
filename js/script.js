var array = [];

for(var i = 0; i < 10; i++) {
    if (i == 0 || i == 9) {
        array[i] = 1;
    } else {
        array[i] = 0;
    }
}

console.log(array);