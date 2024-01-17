/* 1. let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) break;    
} */


/* 2.1 let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i)
    };
} */


/* 2.2 let arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4)); */


/* 3. let arr = [1, 3, 5, 10, 20];

console.log(arr.join(' ')); */


/* 4. let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];     
    console.log(arr[i]);
    for (let j = 0; j < 3; j++) {     
        arr[i][j] = 1;
        console.log(arr[i][j]);
    };    
} */


/* 5. let arr = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr.push(2);
}
console.log(arr); */


/* 6. let arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
console.log(arr);
arr.pop();
console.log(arr); */


/* 7. let arr = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Введите число'));
let search = arr.includes(userNumber);
if (search == true) {
    alert('Угадал')
} else {
    alert('Не угадал')
}; */


/* 8. let line = 'abcdef';
let arrLine = line.split('');
arrLine.reverse();
line = arrLine.join('');
console.log(line); */


/* 9. let arr = [
    [1, 2, 3],
    [4, 5, 6]
];
arr = arr.flat();
console.log(arr); */


/* 10. let arr = [2, 5, 7, 4, 4, 6];
for (let i = 0; i < arr.length - 1; i++) {   
    let sum = arr[i] + arr[i + 1];   
    console.log(sum);   
} */


/* 11. function getSquare(arr) {
    let newArr = arr.map(item => (item * item));
    console.log(newArr);
}
getSquare([3, 4, 5]); */


/* 12. function getWordLength(array) {
    array.forEach((el) => {
        console.log(el.length);
    });
}
getWordLength(['слово', '', 'слог', 'длинное предложение', 'буква']); */


/* 13. function filterPositive(array) {
   let newArray = array.filter(item => item < 0);
   console.log(newArray);
  }

filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]); */


/* 14. let arr = [];
for (i = 0; i < 10; i++) {
arr[i] = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}
let evenArr = arr.filter(item => (item % 2 === 0));

console.log(arr);
console.log(evenArr); */


let arr = [];
for (i = 0; i < 6; i++) {    
    arr[i] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;    
}
console.log(arr);
const arrSum = arr.reduce((a, b) => a + b);
const arithMean = arrSum / arr.length;
console.log(arithMean); 





























