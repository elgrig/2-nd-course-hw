/* 1. let password = 'qwerty';
let enterPassword = prompt('Введите пароль');
if (enterPassword === password) {
    alert('Пароль введен верно')    
} else {
    alert('Пароль введен неправильно')
}; */

/* 2. let c = 0;
if (c>0 && c<10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}; */


/* 3. let d = 15;
let e = 14;
if (d>100 ||  e>100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}; */

/* let a = '2';
let b = '3';
alert(Number(a) + Number(b)); */

/* 5. let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима')        
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна')        
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето')        
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень')        
        break;
    default: console.log('Такого месяца не сущеcтвует')         
        break;
} */

/* 7. let num = prompt('Введите любое число');
console.log(isNaN(num));
if (num % 2 === 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
} */

/* 8. let clientOS = '0';
if (clientOS == '0') {
    console.log('Установите версию приложения для iOS по ссылке')
} else if (clientOS == '1') {
    console.log('Установите версию приложения для Android по ссылке')
} */

let clientOS = '0';
let clientDeviceYear = '2015';
if (clientOS == '0') {    
    if (clientDeviceYear < '2015') {
        console.log('Установите облегченную версию приложения для iOS по ссылке')
    } else {
        console.log('Установите версию приложения для iOS по ссылке')
    }
} else if (clientOS == '1') {
    if (clientDeviceYear < '2015') {
        console.log('Установите облегченную версию приложения для Android по ссылке')
    } else {
    console.log('Установите версию приложения для Android по ссылке')  
    } 
} 
