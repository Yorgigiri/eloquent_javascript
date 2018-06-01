// Минимум
console.log('------------------/ Минимум /---------------------');
var min = function (value, value2) {

    if (value > value2) {
        return value2;
    }
    else {
        return value;
    }

}

console.log(min(0, 10));
console.log(min(10, -10));

// Рекурсия
console.log('------------------/ Рекурсия /---------------------');
var isEven = function (number) {

    if (number == 0) {
        return true;
    }
    else if (number == 1) {
        return false;
    }
    else if (number < 0) {
        return isEven(-number);
    }
    else {
        return isEven(number - 2);
    }

}

console.log(isEven(20));
console.log(isEven(-1));
console.log(isEven(3));

// Считаем бобы
console.log('------------------/ Считаем бобы /---------------------');
var countBs = function (stringValue) {
    var stringLength = stringValue.length;
    var string = '';

    for (i = 0; i < stringLength; i++) {
        if (stringValue.charAt(i) == 'b') {
            string++;
        }
    }

    return string;
}

var countChar = function(stringValue, character){
    var stringLength = stringValue.length;
    var string = '';

    for (i = 0; i < stringLength; i++) {
        if (stringValue.charAt(i) == character) {
            string++;
        }
    }

    return string;
}

console.log(countBs('vobla ruble super pooper'));
console.log(countChar('vobla ruble super pooper', 'a'));