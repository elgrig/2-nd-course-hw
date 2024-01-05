/* 1. function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;   
    } 
}

console.log(min (5, 2));
console.log(min (4, 8));
console.log(min (6, 6)); */


/* 2. function showEvenOdd () {
    let n = prompt('Введите число');
        if (n % 2 == 0) {
            console.log('Число четное')
        } else {
            console.log('Число нечетное')
        }
}
showEvenOdd (); */

/* 3.1 function calcSquared (n) {
   let result = n**2;
   console.log(result);
}

calcSquared (6); */

/* 3.2 function calcSquared (n) {
    return n**2;    
 }
 let result = calcSquared(90);
 console.log(result); */

/* 4. function checkAge() {
   let age = Number(prompt('Сколько Вам лет?'));
   if (age > 13) {
       alert('Добро пожаловать!');
   } else if (age >= 0 && age <= 12) {
       alert('Привет, друг!');
   } else {
       alert('Вы ввели неправильное значение');
   }
}

checkAge(); */

/* 5. function mult (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Одно или оба значения не являются числом')    
    } else {
        return num1*num2;
    }
 }

console.log(mult('dfgd', 'dfdsf'));
console.log(mult('dff', 8))
console.log(mult(5,9)); */

/* 6. function getCubed() {
    let a = prompt('Введите число');
    if (isNaN(a)) {
        alert('Переданный параметр не является числом.')
    } else {
        let result = a ** 3;
        alert(`${a} в кубе равняется ${result}`);
    }
}
getCubed(); */

function getArea () {
    return 3.14 * (this.radius * this.radius);   
}

function getPerimeter () {
    return 2 * 3.14 * this.radius;    
}

let circle1 = {
    radius: 1,    
    area: getArea,
    perimeter: getPerimeter,
}


let circle2 = {
    radius: 3,
    area: getArea,
    perimeter: getPerimeter,
}

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());
