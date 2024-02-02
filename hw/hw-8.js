/* 1. const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
})
console.log(people.sort()); */



/* 2. function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    if (person.gender == 'male') {
        return person.gender;
    }
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); */



/* 3. let currentDate = new Date();
let timerId = setInterval(() => alert(currentDate), 3000);
setInterval(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000 ); */


/* 4. function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
}) */




/* function delayForSecond(cb) {
    setTimeout(() => { console.log('Прошла одна секунда'); if (cb) { cb(); } }, 1000)
}



function sayHi(name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(() => { sayHi('Глеб') }); */
