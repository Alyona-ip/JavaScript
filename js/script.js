// Задание 1

let num = 1;

while (num <= 100) {
    let i = 1;
    let quantity = 0;
    while (i <= num) {
        if ( num%i++ !== 0) {
            quantity++
        }
    }
    if (quantity == num-2 || quantity == 0 ) {
        console.log(num);
    }
    num++;
}

// Задание 4

for (let i = 0; i < 10; console.log(i++)){};

// Задание 5

for (let i = 0, sign = 'x'; i < 20; i++) {
    console.log(sign);
    sign = sign + 'x';
}