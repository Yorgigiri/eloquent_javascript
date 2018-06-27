// Сумма диапазона
console.log('------------------/ Сумма диапазона /---------------------');

var range = function(beginValue, endValue, step){

    var array = [];

    if(step){
        step = step - 1;
        console.log('шаг указан');
        for(i = beginValue; i <= endValue; i += i + step){
            array.push(i);
        }

        return array;
    }
    else {
        console.log('шаг не указан');
        for(i = beginValue; i <= endValue; i++){
            array.push(i);
        }

        return array;
    }

}

var sum = function(array) {
    
    var num = 0;

    for(i=0;i<array.length;i++){
        num = num + array[i];
    }

    return num;

}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
