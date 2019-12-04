//Задание 1
let obj = {
    units: 0,
    dozens: 0,
    hundreds: 0,
}

function task1 (num) {
    check(num) ? (number (num), console.log ('Число: ' + num), console.log(obj)) : (console.log('Введите число от 0 до 999'), console.log(obj));
}

function number (num) {
    obj.units = num%10;
    num = Math.floor(num/10);
    obj.dozens = num%10;
    num = Math.floor(num/10);
    obj.hundreds = num%10;
}

function check (num) {
    return num > 999 || num < 0 ? (false, number(0)) : true;
}

task1(123);
task1(0);
task1(1234);
task1(-123);