/* 1. let s = 'js';
s = s.toUpperCase();
console.log(s); */

/* 2. function searchStart(array, string) {
    let newArray = [];      
    array.forEach((word) => {
        if (word.toLowerCase().startsWith(string.toLowerCase())) {
            newArray.push(word);            
        };             
    });
    console.log(newArray);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); */


/* 3. let num = 32.58884;
num = Math.floor(num);
console.log(num);
num = 32.58884;
num = Math.ceil(num);
console.log(num);
num = 32.58884;
num = Math.round(num);
console.log(num); */

/* 4. let arrMin = [52, 53, 49, 77, 21, 32];
let min = Math.min(...arrMin);
console.log(min);

let arr = [52, 53, 49, 77, 21, 32];
let max = Math.max(...arr);
console.log(max); */

/* 5. function getRandomNum () { 
    return Math.ceil(Math.random() * 10);
}
console.log(getRandomNum()); */

/* 6. function getRandomArrNumbers (a) {
    let arr = [];    
    const length = Math.floor(a / 2);
    for (i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (a  + 1));
        }
        console.log(arr);
}
getRandomArrNumbers(7);
getRandomArrNumbers(12); */

/* 7. function getRandomNum(a, b) {
    let randomNum;
    if (a > b) {
    randomNum = Math.floor(Math.random() * (a - b + 1) + b);
    } else { 
    randomNum = Math.floor(Math.random() * (b - a + 1) + a);    
    }    
    console.log(randomNum);
}

getRandomNum(4, 11); */

/* 8. let currentDate = new Date();
console.log(currentDate); */

/* 9. let currentDay = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDay = +currentDay + days73;
let daySince73 = new Date(searchDay);
console.log(daySince73); */

const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']; 
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

function getDate (a, b, c) {
    let myDate = new Date(); 

    myDate.setDate(a); 
    myDate.setMonth(b);
    myDate.setYear(c);

    let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " года - это " + days[myDate.getDay()] + " . " + "Время: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();

    console.log(fullDate);
}

getDate(28, 0, 2024); 



